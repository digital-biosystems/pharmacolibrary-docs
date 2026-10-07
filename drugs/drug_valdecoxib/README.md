<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;valdecoxib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Valdecoxib_Tan2016_reference&quot;,&quot;label&quot;:&quot;Tan_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_valdecoxib/Valdecoxib_Tan2016_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# valdecoxib

- **generic name:** valdecoxib
- **ATC codes:** `M01AH03`
- **DrugBank:** [DB00580](https://go.drugbank.com/drugs/DB00580) · **PubChem:** [CID 119607](https://pubchem.ncbi.nlm.nih.gov/compound/119607)
- **molar mass:** 314.359 g/mol (C16H14N2O3S) — DrugBank
- **groups:** approved, withdrawn

## About

Valdecoxib, a COX-2 inhibitor painkiller, was used to treat osteoarthritis, rheumatoid arthritis, and pain such as dysmenorrhea. It has been withdrawn from the market, including its authorised products in the European Union, and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q347613](https://www.wikidata.org/wiki/Q347613) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| valdecoxib | parent | 314.359 | C16H14N2O3S | DrugBank | [119607](https://pubchem.ncbi.nlm.nih.gov/compound/119607) | Tan_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:31 | 2:02 | 1/0/0 | 0/0/0 | 0/0/0 | 40,162/2,254 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tan_2016_reference](drugs/drug_valdecoxib/Valdecoxib_Tan2016_reference.md) | ▶ model + simulator | 3-compartment, oral | 7 | Tan L et al., Pharmacokinetics and analgesic effectiv…, Paediatric anaesthesia (2016) | [10.1111/pan.13009](https://doi.org/10.1111/pan.13009) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=valdecoxib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` inhibitor/substrate, `CYP3A4` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CA2 (inhibitor), CA3 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hullett_2012.pdf` | Hullett B et al., Development of a population pharmacokin…, Anesthesiology (2012) | popPK | 10 | [10.1097/ALN.0b013e31825154ef](https://doi.org/10.1097/ALN.0b013e31825154ef) | [22450476](https://pubmed.ncbi.nlm.nih.gov/22450476) | Valdecoxib is the active metabolite of the subject drug parecoxib (a prodrug), and the paper lacks specific numeric parameter values (CL, V) in the provided evidence. |
| `Tan_2016.pdf` | Tan L et al., Pharmacokinetics and analgesic effectiv…, Paediatric anaesthesia (2016) | popPK | 10 | [10.1111/pan.13009](https://doi.org/10.1111/pan.13009) | [27779354](https://pubmed.ncbi.nlm.nih.gov/27779354) | The paper reports population PK parameters for valdecoxib (CL and V) explicitly in the text as the active metabolite of parecoxib. |
| `Paech_2012.pdf` | Paech MJ et al., Transfer of parecoxib and its primary a…, Anesthesia and analgesia (2012) | popPK | 8 | [10.1213/ANE.0b013e3182468fa7](https://doi.org/10.1213/ANE.0b013e3182468fa7) | [22344242](https://pubmed.ncbi.nlm.nih.gov/22344242) | The study reports PK parameters for valdecoxib (active metabolite of parecoxib) in human milk and plasma using a compartmental model, but the specific numeric values for clearance (CL) or volume (V) are not provided in the text, only exposure metrics (AID, RID) and ratios. |
| `Hannam_2023.pdf` | Hannam JA et al., Modeling adult COX-2 cerebrospinal flui…, Paediatric anaesthesia (2023) | popPK | 5 | [10.1111/pan.14590](https://doi.org/10.1111/pan.14590) | [36318604](https://pubmed.ncbi.nlm.nih.gov/36318604) | Study models CSF PK for valdecoxib alongside celecoxib and rofecoxib, but specific quantitative PK parameters (CL, V) are explicitly reported only for celecoxib, not valdecoxib. |
| `Morgan_2004.pdf` | Morgan PE et al., Carbonic anhydrase inhibitors that dire…, Molecular membrane biology (2004) | pd | 5 | [10.1080/09687860400014872](https://doi.org/10.1080/09687860400014872) | [15764372](https://www.ncbi.nlm.nih.gov/pubmed/15764372) | metadata signals extractable PD data (EC50) |
| `Agúndez_2009.pdf` | Agúndez JA et al., Genetically based impairment in CYP2C8-…, Expert opinion on drug meta… (2009) | pgx | 8 | [10.1517/17425250902970998](https://doi.org/10.1517/17425250902970998) | [19422321](https://www.ncbi.nlm.nih.gov/pubmed/19422321) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Rodrigues_2005.pdf` | Rodrigues AD, Impact of CYP2C9 genotype on pharmacoki…, Drug metabolism and disposi… (2005) | pgx | 8 | [10.1124/dmd.105.006452](https://doi.org/10.1124/dmd.105.006452) | [16118328](https://www.ncbi.nlm.nih.gov/pubmed/16118328) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Werner_2006.pdf` | Werner U et al., Valdecoxib does not interfere with the…, International journal of cl… (2006) | pgx | 8 | [10.5414/cpp44397](https://doi.org/10.5414/cpp44397) | [16995327](https://www.ncbi.nlm.nih.gov/pubmed/16995327) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Ibrahim_2002.pdf` | Ibrahim A et al., Effects of parecoxib, a parenteral COX-…, Anesthesiology (2002) | pgx | 7 | [10.1097/00000542-200201000-00020](https://doi.org/10.1097/00000542-200201000-00020) | [11753007](https://www.ncbi.nlm.nih.gov/pubmed/11753007) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Ibrahim_2003.pdf` | Ibrahim AE et al., Simultaneous assessment of drug interac…, Anesthesiology (2003) | pgx | 7 | [10.1097/00000542-200304000-00011](https://doi.org/10.1097/00000542-200304000-00011) | [12657846](https://www.ncbi.nlm.nih.gov/pubmed/12657846) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Sarapa_2005.pdf` | Sarapa N et al., The effect of mild and moderate hepatic…, European journal of clinica… (2005) | pgx | 7 | [10.1007/s00228-005-0909-6](https://doi.org/10.1007/s00228-005-0909-6) | [15887009](https://www.ncbi.nlm.nih.gov/pubmed/15887009) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T01:31:33.851547+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agúndez_2009 | not_relevant | 4 | 1 | The paper is a review/meta-analysis focused on CYP2C8/9 polymorphisms and GI bleeding risk; it describes general PK changes (increased AUC, decreased clearance) qualitatively but does not provide specific, fitted quantitative pharmacokinetic parameters for valdecoxib in its text. |
| popPK | Chaignat_2008 | irrelevant | 0 | 0 | The study focuses on the in vitro and in vivo pharmacodynamic effects (contractility) of valdecoxib, not its pharmacokinetic disposition parameters. |
| PGx | Fosslien_2005 | not_relevant | 3 | 0 | The paper is a general review of the cardiovascular mechanisms of NSAIDs/coxibs and mentions genotyping as a potential future aid but does not report specific pharmacogenomic effect sizes on PK or PD parameters for valdecoxib. |
| popPK | Hannam_2023 | relevant | 5 | 2 | Study models CSF PK for valdecoxib alongside celecoxib and rofecoxib, but specific quantitative PK parameters (CL, V) are explicitly reported only for celecoxib, not valdecoxib. |
| popPK | Hullett_2012 | irrelevant | 10 | 0 | Valdecoxib is the active metabolite of the subject drug parecoxib (a prodrug), and the paper lacks specific numeric parameter values (CL, V) in the provided evidence. |
| popPK | Ibrahim_2002 | irrelevant | 2 | 0 | The study investigates the pharmacokinetics of the co-administered drug propofol, not valdecoxib, and no quantitative PK parameters for valdecoxib are reported in the provided evidence. |
| PGx | Ibrahim_2002 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (parecoxib affecting propofol PK/PD), not the effect of a gene variant or genotype on pharmacokinetics or pharmacodynamics. |
| PGx | Ibrahim_2002_2 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (parecoxib/valdecoxib vs midazolam) in healthy volunteers and does not report any pharmacogenomic effects (gene variants) on valdecoxib PK/PD. |
| PGx | Ibrahim_2003 | not_relevant | 0 | 0 | The paper studies drug-drug interactions (parecoxib on fentanyl/alfentanil) and does not mention valdecoxib or pharmacogenomic effects. |
| popPK | Klein_2007 | irrelevant | 0 | 0 | The study focuses on the vascular mechanisms and PDE5 inhibition of celecoxib in vitro, with valdecoxib serving only as a comparator agent without any pharmacokinetic parameter reporting. |
| popPK | Morgan_2004 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| popPK | Ouellet_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic evaluation of cyclooxygenase inhibition and does not report pharmacokinetic parameters for valdecoxib. |
| popPK | Paech_2012 | relevant | 8 | 0 | The study reports PK parameters for valdecoxib (active metabolite of parecoxib) in human milk and plasma using a compartmental model, but the specific numeric values for clearance (CL) or volume (V) are not provided in the text, only exposure metrics (AID, RID) and ratios. |
| PGx | Rodrigues_2005 | not_relevant | 5 | 0 | The paper predicts that CYP2C9 genotype impacts valdecoxib clearance based on in vitro/in silico reasoning, but it does not report actual clinical pharmacokinetic data or fitted quantitative effects for valdecoxib. |
| PGx | Sarapa_2005 | not_relevant | 0 | 0 | The study investigates the effect of hepatic impairment (a physiological condition) on pharmacokinetics, not the effect of a specific gene variant or genotype. |
| PGx | Werner_2006 | not_relevant | 1 | 5 | The study examines the drug-drug interaction between valdecoxib and metoprolol (CYP2D6 substrate), not the effect of a CYP2D6 genotype/variant on the PK/PD parameters of valdecoxib itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:31 UTC</sub>
