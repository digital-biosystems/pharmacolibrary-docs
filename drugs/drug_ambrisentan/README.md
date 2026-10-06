<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;ambrisentan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ambrisentan_Hill2020_reference&quot;,&quot;label&quot;:&quot;Hill_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ambrisentan/Ambrisentan_Hill2020_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ambrisentan_Okour2023_reference&quot;,&quot;label&quot;:&quot;Okour_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ambrisentan/Ambrisentan_Okour2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ambrisentan

- **generic name:** ambrisentan
- **ATC codes:** `C02KX02`, `C02KX52`
- **DrugBank:** [DB06403](https://go.drugbank.com/drugs/DB06403) · **PubChem:** [CID 6918493](https://pubchem.ncbi.nlm.nih.gov/compound/6918493)
- **molar mass:** 378.428 g/mol (C22H22N2O4) — DrugBank
- **groups:** approved, investigational

## About

Ambrisentan is an antihypertensive drug used to treat pulmonary arterial hypertension. It is authorised in the European Union and is also used for related conditions such as portal and chronic pulmonary hypertension.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410789](https://www.wikidata.org/wiki/Q410789) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ambrisentan | parent | 378.428 | C22H22N2O4 | DrugBank | [6918493](https://pubchem.ncbi.nlm.nih.gov/compound/6918493) | Hill_2020, Okour_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:01 | 6:56 | 2/0/0 | 0/0/0 | 0/0/0 | 109,711/20,546 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Hill_2020_reference](drugs/drug_ambrisentan/Ambrisentan_Hill2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Hill KD et al., A Randomized, Controlled Pharmacokineti…, Pediatric critical care med… (2020) | [10.1097/PCC.0000000000002410](https://doi.org/10.1097/PCC.0000000000002410) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.882). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Okour_2023_reference](drugs/drug_ambrisentan/Ambrisentan_Okour2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+1 cov.) | Okour M et al., Pediatric Population Pharmacokinetic Mo…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2199](https://doi.org/10.1002/jcph.2199) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ambrisentan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `SLCO1B1` substrate, `SLCO1B3` substrate, `UGT1A3` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: EDNRA (target), EDNRB (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 30 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hill_2020.pdf` | Hill KD et al., A Randomized, Controlled Pharmacokineti…, Pediatric critical care med… (2020) | popPK | 10 | [10.1097/PCC.0000000000002410](https://doi.org/10.1097/PCC.0000000000002410) | [32639468](https://pubmed.ncbi.nlm.nih.gov/32639468) | The study reports a population PK model for ambrisentan with specific numeric values for clearance (1 L/hr/70 kg) and volume of distribution (13.7 L/70 kg) in the abstract. |
| `Angus_2017.pdf` | Angus JA et al., Distortion of K, Pharmacology research & per… (2017) | pd | 5 | [10.1002/prp2.374](https://doi.org/10.1002/prp2.374) | [29226623](https://www.ncbi.nlm.nih.gov/pubmed/29226623) | metadata signals extractable PD data (EC50) |
| `Markert_2013.pdf` | Markert C et al., Interaction of ambrisentan with clarith…, European journal of clinica… (2013) | pgx | 8 | [10.1007/s00228-013-1529-1](https://doi.org/10.1007/s00228-013-1529-1) | [23748747](https://www.ncbi.nlm.nih.gov/pubmed/23748747) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Markert_2014.pdf` | Markert C et al., Lack of a clinically significant intera…, International journal of cl… (2014) | pgx | 8 | [10.5414/CP202164](https://doi.org/10.5414/CP202164) | [25207548](https://www.ncbi.nlm.nih.gov/pubmed/25207548) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Markert_2015.pdf` | Markert C et al., The effect of induction of CYP3A4 by St…, Basic & clinical pharmacolo… (2015) | pgx | 8 | [10.1111/bcpt.12332](https://doi.org/10.1111/bcpt.12332) | [25286744](https://www.ncbi.nlm.nih.gov/pubmed/25286744) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Harrison_2010.pdf` | Harrison B et al., Effects of rifampicin (rifampin) on the…, Clinical drug investigation (2010) | pgx | 7 | [10.2165/11539110-000000000-00000](https://doi.org/10.2165/11539110-000000000-00000) | [20923245](https://www.ncbi.nlm.nih.gov/pubmed/20923245) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Richards_2009.pdf` | Richards DB et al., Effect of ketoconazole on the pharmacok…, Journal of clinical pharmac… (2009) | pgx | 7 | [10.1177/0091270009335870](https://doi.org/10.1177/0091270009335870) | [19389876](https://www.ncbi.nlm.nih.gov/pubmed/19389876) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Spence_2010.pdf` | Spence R et al., Potential for pharmacokinetic interacti…, Clinical pharmacology and t… (2010) | pgx | 7 | [10.1038/clpt.2010.120](https://doi.org/10.1038/clpt.2010.120) | [20811346](https://www.ncbi.nlm.nih.gov/pubmed/20811346) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Venitz_2012.pdf` | Venitz J et al., Clinical pharmacokinetics and drug-drug…, Journal of clinical pharmac… (2012) | pgx | 7 | [10.1177/0091270011423662](https://doi.org/10.1177/0091270011423662) | [22205719](https://www.ncbi.nlm.nih.gov/pubmed/22205719) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Weiss_2015.pdf` | Weiss J et al., Desmethyl bosentan displays a similar i…, Pulmonary pharmacology & th… (2015) | pgx | 7 | [10.1016/j.pupt.2014.12.001](https://doi.org/10.1016/j.pupt.2014.12.001) | [25535031](https://www.ncbi.nlm.nih.gov/pubmed/25535031) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T14:55:03.508595+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Angus_2017 | irrelevant | 0 | 0 | no_text gate: only 15 chars of text extracted (&lt; 400) |
| PD | Angus_2017 | not_relevant | 0 | 0 | The provided text is a fragment ("Distortion of K") and contains no information regarding ambrisentan, pharmacodynamics, or exposure-response relationships. |
| PGx | Gatfield_2014 | not_relevant | 0 | 0 | The paper investigates the molecular binding mode of macitentan versus ambrisentan using site-directed mutagenesis of the receptor, not the effect of human gene variants on ambrisentan's pharmacokinetics or pharmacodynamics. |
| PGx | Harrison_2010 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (rifampicin) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Kenna_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assessment of liver injury mechanisms (BSEP inhibition, mitochondrial respiration, covalent binding) and does not report quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for ambrisentan. |
| PD | Kenna_2015 | not_relevant | 0 | 0 | The paper reports in vitro toxicity assays (IC50/EC50 for BSEP, MRP2, etc.) and exposure-adjusted ratios for safety assessment, not a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| PGx | Lattanzio_2022 | not_relevant | 2 | 1 | The paper reports a pharmacogenomic effect on the hepatotoxicity of macitentan and selexipag, not on the PK or PD parameters of ambrisentan. |
| PGx | Markert_2013 | not_relevant | 2 | 10 | The study explicitly concludes that there was no contribution of the SLCO1B1*15 variant to the drug interaction, meaning no pharmacogenomic effect on PK parameters was reported. |
| PGx | Markert_2014 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (grapefruit juice) rather than a pharmacogenomic effect, and subjects were restricted to extensive metabolizers. |
| PD | Okour_2023 | not_relevant | 2 | 0 | The paper reports a population PK model and exploratory exposure-response analyses, but explicitly states there was no apparent association between exposure and efficacy (6MWD) or safety, and provides no numeric PD parameters (Emax, EC50, etc.). |
| PGx | Richards_2009 | not_relevant | 0 | 0 | The study investigates the effect of a drug-drug interaction (ketoconazole) on ambrisentan PK, not a pharmacogenomic effect based on gene variants or genotypes. |
| PGx | Saiz-Rodríguez_2020 | not_relevant | 2 | 10 | The study reports no significant association between CYP3A4/5 genotypes and ambrisentan PK parameters (all p-values &gt; 0.05). |
| PGx | Spence_2010 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (ambrisentan and cyclosporine), not a pharmacogenomic effect based on gene variants or genotypes. |
| PGx | Venitz_2012 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions and general metabolism pathways but does not report pharmacogenomic effects of specific gene variants on ambrisentan PK/PD. |
| PGx | Weiss_2011 | not_relevant | 0 | 0 | The paper investigates the in vitro induction of drug-metabolizing enzymes by ambrisentan, not the effect of a patient's genetic variant on ambrisentan's PK or PD. |
| PGx | Weiss_2015 | not_relevant | 0 | 0 | The paper investigates in vitro drug-drug interaction potentials of metabolites, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | Wu_2022 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and does not report pharmacogenomic effects (gene variants) on ambrisentan PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 14:55 UTC</sub>
