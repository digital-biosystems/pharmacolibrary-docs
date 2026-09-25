<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;felbamate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Felbamate_Graves1989_reference&quot;,&quot;label&quot;:&quot;Graves_1989_reference&quot;,&quot;href&quot;:&quot;drugs/drug_felbamate/Felbamate_Graves1989_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Felbamate_Kelley1997_reference&quot;,&quot;label&quot;:&quot;Kelley_1997_reference&quot;,&quot;href&quot;:&quot;drugs/drug_felbamate/Felbamate_Kelley1997_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# felbamate

- **generic name:** felbamate
- **ATC codes:** `N03AX10`
- **DrugBank:** [DB00949](https://go.drugbank.com/drugs/DB00949)
- **groups:** approved

## About

**Description.** Felbamate is an anticonvulsant drug used in the treatment of epilepsy. In particular, in the adult patient population, it can be employed to treat partial seizures (with and without generalization). Alternatively, it is used to treat partial and generalized seizures associated with Lennox-Gastaut syndrome in children. It has a weak inhibitory effect on GABA receptor binding sites.

**Indication.** For use only in those patients who respond inadequately to alternative treatments and whose epilepsy is so severe that a substantial risk of aplastic anemia and/or liver failure is deemed acceptable in light of the benefits conferred by its use.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 17:46 | 2:06 | 0/1/1 | 0/0/0 | 0/0/0 | 23,467/2,592 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>route_to: `human_review`</sub> | [Graves_1989_reference](drugs/drug_felbamate/Felbamate_Graves1989_reference.md) | Graves NM et al., Pharmacokinetics of felbamate, a novel…, Pharmacotherapy (1989) | [10.1002/j.1875-9114.1989.tb04151.x](https://doi.org/10.1002/j.1875-9114.1989.tb04151.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Kelley_1997_reference](drugs/drug_felbamate/Felbamate_Kelley1997_reference.md) | Kelley MT et al., Population pharmacokinetics of felbamat…, Therapeutic drug monitoring (1997) | [10.1097/00007691-199702000-00005](https://doi.org/10.1097/00007691-199702000-00005) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=felbamate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP2E1` substrate, `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GRIN2A (target), GRIN2B (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 49 matched, 49 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Banfield_1996.pdf` | Banfield CR et al., The effect of age on the apparent clear…, Therapeutic drug monitoring (1996) | popPK | 10 | [10.1097/00007691-199602000-00004](https://doi.org/10.1097/00007691-199602000-00004) | [8848816](https://pubmed.ncbi.nlm.nih.gov/8848816) | The paper is a population PK study of felbamate, but the evidence only provides relative changes (e.g., 40% higher, 32-38% increase) rather than absolute numeric parameter values (CL, V, etc.). |
| `Graves_1989.pdf` | Graves NM et al., Pharmacokinetics of felbamate, a novel…, Pharmacotherapy (1989) | popPK | 10 | [10.1002/j.1875-9114.1989.tb04151.x](https://doi.org/10.1002/j.1875-9114.1989.tb04151.x) | [2694113](https://pubmed.ncbi.nlm.nih.gov/2694113) | The evidence explicitly provides numeric values for felbamate clearance (2.43 L/hr base) and volume of distribution (51 L) derived from a population PK model. |
| `Kelley_1997.pdf` | Kelley MT et al., Population pharmacokinetics of felbamat…, Therapeutic drug monitoring (1997) | popPK | 10 | [10.1097/00007691-199702000-00005](https://doi.org/10.1097/00007691-199702000-00005) | [9029743](https://pubmed.ncbi.nlm.nih.gov/9029743) | The paper is a population PK study of felbamate in children and explicitly reports numeric values for clearance (41.1 ml/h/kg) and volume of distribution (908 ml/kg) in the text. |
| `Wallis_1993.pdf` | Wallis RA et al., Glycine reversal of felbamate hypoxic p…, Neuroreport (1993) | pd | 5 | [10.1097/00001756-199307000-00029](https://doi.org/10.1097/00001756-199307000-00029) | [8103685](https://www.ncbi.nlm.nih.gov/pubmed/8103685) | metadata signals extractable PD data (EC50) |
| `Harty_2000.pdf` | Harty TP et al., Felbamate block of recombinant N-methyl…, Epilepsy research (2000) | pd | 4 | [10.1016/s0920-1211(99)00108-4](https://doi.org/10.1016/s0920-1211(99)00108-4) | [10690753](https://www.ncbi.nlm.nih.gov/pubmed/10690753) | metadata signals extractable PD data (IC50) |
| `Wallis_1995.pdf` | Wallis RA et al., Felbamate neuroprotection against CA1 t…, European journal of pharmac… (1995) | pd | 4 | [10.1016/0014-2999(95)00568-4](https://doi.org/10.1016/0014-2999(95)00568-4) | [8750708](https://www.ncbi.nlm.nih.gov/pubmed/8750708) | metadata signals extractable PD data (EC50) |
| `Benedetti_2000.pdf` | Benedetti MS, Enzyme induction and inhibition by new…, Fundamental & clinical phar… (2000) | pgx | 7 | [10.1111/j.1472-8206.2000.tb00411.x](https://doi.org/10.1111/j.1472-8206.2000.tb00411.x) | [11030437](https://www.ncbi.nlm.nih.gov/pubmed/11030437) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Egnell_2003.pdf` | Egnell AC et al., In vivo CYP3A4 heteroactivation is a po…, The Journal of pharmacology… (2003) | pgx | 7 | [10.1124/jpet.102.047530](https://doi.org/10.1124/jpet.102.047530) | [12606595](https://www.ncbi.nlm.nih.gov/pubmed/12606595) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Italiano_2014.pdf` | Italiano D et al., Pharmacokinetic and pharmacodynamic int…, Expert opinion on drug meta… (2014) | pgx | 7 | [10.1517/17425255.2014.956081](https://doi.org/10.1517/17425255.2014.956081) | [25196459](https://www.ncbi.nlm.nih.gov/pubmed/25196459) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Reidenberg_1995.pdf` | Reidenberg P et al., Effects of felbamate on the pharmacokin…, Clinical pharmacology and t… (1995) | pgx | 7 | [10.1016/0009-9236(95)90244-9](https://doi.org/10.1016/0009-9236(95)90244-9) | [7554701](https://www.ncbi.nlm.nih.gov/pubmed/7554701) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Russell_2018.pdf` | Russell GR et al., Impact of Drug Interactions on Clobazam…, Therapeutic drug monitoring (2018) | pgx | 7 | [10.1097/FTD.0000000000000530](https://doi.org/10.1097/FTD.0000000000000530) | [29746397](https://www.ncbi.nlm.nih.gov/pubmed/29746397) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Tolbert_2016.pdf` | Tolbert D et al., Drug-metabolism mechanism: Knowledge-ba…, Journal of clinical pharmac… (2016) | pgx | 7 | [10.1002/jcph.603](https://doi.org/10.1002/jcph.603) | [26224203](https://www.ncbi.nlm.nih.gov/pubmed/26224203) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Turnheim_2004.pdf` | Turnheim K, [Drug interactions with antiepileptic a…, Wiener klinische Wochenschr… (2004) | pgx | 7 | [10.1007/BF03040747](https://doi.org/10.1007/BF03040747) | [15038401](https://www.ncbi.nlm.nih.gov/pubmed/15038401) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Walzer_2012.pdf` | Walzer M et al., Pharmacokinetic drug interactions betwe…, Pharmacotherapy (2012) | pgx | 7 | [10.1002/j.1875-9114.2012.01028.x](https://doi.org/10.1002/j.1875-9114.2012.01028.x) | [22422635](https://www.ncbi.nlm.nih.gov/pubmed/22422635) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-21T17:44:43.187459+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Anderson_1998 | not_relevant | 0 | 0 | The paper discusses general drug-drug interactions and enzyme induction/inhibition by AEDs, but does not report any pharmacogenomic effects (gene variants) on felbamate PK/PD. |
| PGx | Aylón_2026 | not_relevant | 0 | 0 | The paper is a review that explicitly states there is not enough information to determine if Felbamate is a P-gp substrate, and it does not report specific pharmacogenomic effects on Felbamate PK/PD. |
| popPK | Banfield_1996 | relevant | 10 | 2 | The paper is a population PK study of felbamate, but the evidence only provides relative changes (e.g., 40% higher, 32-38% increase) rather than absolute numeric parameter values (CL, V, etc.). |
| PGx | Benedetti_2000 | not_relevant | 0 | 0 | The paper reviews enzyme induction and inhibition properties of felbamate on other drugs, but does not report pharmacogenomic effects (gene variants) on felbamate's own PK or PD parameters. |
| PGx | Bergin_2002 | not_relevant | 0 | 0 | The text is a general review of antiepileptic drugs and mentions pharmacogenetics only as a future hope, without reporting any specific gene variant effects on felbamate PK or PD. |
| PGx | Burns_2016 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of clobazam, not felbamate, and does not report pharmacogenomic effects on felbamate parameters. |
| popPK | Citraro_2016 | irrelevant | 0 | 0 | The study is a pharmacodynamic interaction study in mice that explicitly states it did not find significant influences on plasma/brain levels and does not report quantitative PK parameters (CL, V, etc.) for felbamate. |
| PD | Citraro_2016 | not_relevant | 1 | 0 | The paper reports qualitative potentiation of felbamate's anticonvulsant effect by cannabinoids but does not provide numeric PD parameters, dose-response curves, or exposure-response data for felbamate. |
| PGx | Cokley_2022 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between Paxlovid and felbamate, not pharmacogenomic effects of gene variants on felbamate PK/PD. |
| PGx | Dieckhaus_2000 | not_relevant | 2 | 5 | The paper investigates species differences and UGT activity but explicitly concludes that poor UGT activity is not associated with increased toxicity or mercapturate excretion in patients, failing to report a significant pharmacogenomic effect. |
| PGx | Egnell_2003 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (felbamate affecting carbamazepine metabolism via CYP3A4 heteroactivation) and does not report any pharmacogenomic effects (gene variants) on felbamate's PK or PD parameters. |
| PGx | Glue_1997 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions and CYP450 enzyme mechanisms, but does not report pharmacogenomic effects (gene variants) on felbamate PK/PD. |
| popPK | Graves_1998 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for carbamazepine, not felbamate, which is only mentioned as a co-medication affecting carbamazepine clearance. |
| PGx | Hachad_2002 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions for felbamate but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Harty_2000 | irrelevant | 0 | 0 | no_text gate: only 95 chars of text extracted (&lt; 400) |
| PGx | Hosomi_2011 | not_relevant | 0 | 0 | The paper describes a general cytotoxicity assay system for CYP3A4-mediated activation and does not report pharmacogenomic effects on the PK or PD of felbamate. |
| PGx | Italiano_2014 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions between antiepileptics and antidepressants and does not report pharmacogenomic effects (gene variants) on felbamate PK/PD. |
| PGx | Levy_1995 | not_relevant | 0 | 0 | The paper discusses CYP450 isoform-mediated drug interactions for phenytoin and carbamazepine, mentioning felbamate only as an inhibitor of CYP2C19, but does not report pharmacogenomic effects on felbamate's PK or PD. |
| popPK | Lukka_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lacosamide, with felbamate serving only as a covariate affecting lacosamide clearance rather than being the subject drug. |
| popPK | McCabe_1998 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on receptor binding, not a pharmacokinetic study, and contains no disposition parameters. |
| PGx | Plissonneau_2026 | not_relevant | 0 | 0 | The paper investigates the effect of hepatic steatosis (a disease state) on drug metabolism, not a genetic variant or genotype, and reports no significant metabolic changes for felbamate. |
| PGx | Reidenberg_1995 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (felbamate affecting phenobarbital PK) and mentions CYP2C19 inhibition in vitro, but it does not report a pharmacogenomic effect (gene variant/genotype) on the PK or PD of felbamate. |
| PGx | Russell_2018 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (specifically CYP3A4/CYP2C19) affecting clobazam pharmacokinetics, not pharmacogenomic effects on felbamate. |
| popPK | Tolbert_2016 | irrelevant | 0 | 0 | no_text gate: only 129 chars of text extracted (&lt; 400) |
| PGx | Tolbert_2016 | not_relevant | 0 | 0 | The paper focuses on clobazam drug-drug interactions, not felbamate pharmacogenomics. |
| PGx | Turnheim_2004 | not_relevant | 0 | 0 | The paper discusses general pharmacokinetic drug interactions (CYP induction/inhibition) involving felbamate but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Wallis_1993 | irrelevant | 0 | 0 | no_text gate: only 48 chars of text extracted (&lt; 400) |
| PD | Wallis_1993 | not_relevant | 0 | 0 | The paper investigates the mechanism of hypoxic protection (glycine reversal) and does not report pharmacokinetic data, concentration-effect curves, or numeric PD parameters for felbamate. |
| popPK | Wallis_1995 | irrelevant | 0 | 0 | no_text gate: only 63 chars of text extracted (&lt; 400) |
| PD | Wallis_1995 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding a pharmacodynamic or exposure-response relationship for felbamate. |
| popPK | Walzer_2012 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PGx | Walzer_2012 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving clobazam and CYP450 substrates, but does not report pharmacogenomic effects on felbamate. |
| PGx | Yap_2008 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions between chemotherapeutic agents and antiepileptics, and does not report pharmacogenomic effects (gene variants) on felbamate PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-21 17:44 UTC</sub>
