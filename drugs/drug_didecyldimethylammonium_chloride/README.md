<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;didecyldimethylammonium chloride&quot;}]"></div>

# didecyldimethylammonium chloride

- **generic name:** didecyldimethylammonium chloride
- **ATC codes:** `D08AJ06`
- **DrugBank:** [DB04221](https://go.drugbank.com/drugs/DB04221) · **PubChem:** [CID 16958](https://pubchem.ncbi.nlm.nih.gov/compound/16958)
- **molar mass:** 326.6232 g/mol (C22H48N) — DrugBank
- **groups:** approved, investigational

## About

Didecyldimethylammonium chloride is a quaternary ammonium antiseptic and disinfectant used to disinfect skin and surfaces. It is an approved drug and remains in use as a dermatological antiseptic.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27095047](https://www.wikidata.org/wiki/Q27095047) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:39 | 0:29 | 0/0/0 | 0/0/0 | 0/0/0 | 16,429/477 | einfracz / qwen3.8-27b | 1 | 1/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `LeBouf_2017.pdf` | LeBouf RF et al., Air and Surface Sampling Method for Ass…, Annals of work exposures an… (2017) | pd | 5 | [10.1093/annweh/wxx037](https://doi.org/10.1093/annweh/wxx037) | [28927165](https://www.ncbi.nlm.nih.gov/pubmed/28927165) | metadata signals extractable PD data (exposure-response) |
| `Flanjak_2024.pdf` | Flanjak L et al., Ecotoxicity and rapid degradation of qu…, Chemosphere (2024) | pd | 4 | [10.1016/j.chemosphere.2023.140584](https://doi.org/10.1016/j.chemosphere.2023.140584) | [37925031](https://www.ncbi.nlm.nih.gov/pubmed/37925031) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T21:39:54.364390+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Auerbach_2016 | irrelevant | 0 | 0 | This is a high-throughput screening review of environmental chemicals for metabolic effects, not a pharmacokinetic study of didecyldimethylammonium_chloride. |
| PD | Auerbach_2016 | not_relevant | 0 | 0 | The paper is a review of high-throughput screening data for environmental chemicals and does not report specific pharmacodynamic or exposure-response parameters for didecyldimethylammonium chloride. |
| PGx | Cheropkina_2023 | not_relevant | 0 | 0 | The paper uses didecyldimethylammonium bromide (DDAB) as a coating material for bioelectrodes, not as a pharmacological agent subject to pharmacogenomic study. |
| popPK | Czarny_2019 | irrelevant | 0 | 0 | The study is an ecotoxicological assessment of ionic liquids on anaerobic microbial communities, not a pharmacokinetic study of didecyldimethylammonium_chloride. |
| PD | Czarny_2019 | not_relevant | 0 | 0 | The paper focuses on the toxic effects of herbicidal ionic liquids on microbial communities and does not report pharmacodynamic or exposure-response relationships for didecyldimethylammonium chloride. |
| popPK | Flanjak_2024 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Flanjak_2024 | not_relevant | 0 | 0 | The paper focuses on the degradation kinetics of quaternary ammonium compounds under UV treatment, not on pharmacodynamic or exposure-response relationships in biological systems. |
| popPK | Jeong_2025 | irrelevant | 0 | 0 | The study is an in vitro toxicity assessment focusing on cytotoxicity and mode of action, not pharmacokinetics. |
| popPK | Jodynis-Liebert_2010 | irrelevant | 0 | 0 | The study investigates the toxicity of didecyldimethylammonium saccharinate (a different salt than the target chloride) and reports no pharmacokinetic parameters. |
| popPK | Kohler_2013 | irrelevant | 0 | 0 | The paper is a clinical microbiology study on MRSA decolonization efficacy and does not report any pharmacokinetic parameters for didecyldimethylammonium chloride. |
| popPK | LeBouf_2017 | irrelevant | 0 | 0 | no_text gate: only 141 chars of text extracted (&lt; 400) |
| PD | LeBouf_2017 | not_relevant | 0 | 0 | The paper describes an analytical method (LC-MS/MS) for sampling quaternary ammonium compounds and does not report any pharmacodynamic or exposure-response data. |
| popPK | Shirai_2000 | irrelevant | 0 | 0 | The study is an in vitro virology experiment examining disinfectant efficacy against viruses, not a pharmacokinetic study of didecyldimethylammonium chloride. |
| PD | Shirai_2000 | not_relevant | 3 | 2 | The paper reports qualitative effectiveness and specific effective concentrations for a disinfectant on viruses, but does not provide a pharmacodynamic model, dose-response curve, or numeric PD parameters (e.g., EC50, Emax) for a drug in a biological system. |
| popPK | Soleymani_2021 | irrelevant | 0 | 0 | The study focuses on the preparation and in vitro cytotoxicity of nanomicelles where didecyldimethylammonium bromide is a formulation component, not a subject drug for pharmacokinetic analysis. |
| PD | Soleymani_2021 | not_relevant | 0 | 0 | The paper reports IC50 values for curcumin delivery systems, not for didecyldimethylammonium chloride (which is a surfactant component), and does not provide a PD model or exposure-response relationship for the specified compound. |
| popPK | Szulc_2021 | irrelevant | 0 | 0 | The paper is an environmental toxicology study on sewage treatment plant dust and does not report any pharmacokinetic parameters for didecyldimethylammonium chloride. |
| PD | Szulc_2021 | not_relevant | 3 | 2 | The paper reports a single IC50 value for a complex dust mixture attributed to DDAC-C10, but does not provide a specific concentration-effect curve or PD parameters for the pure compound. |
| popPK | Yan_2017 | irrelevant | 0 | 0 | The study focuses on the delivery of baohuoside I using didecyldimethylammonium bromide (DDAB) as a formulation component, not on the pharmacokinetics of didecyldimethylammonium chloride. |
| PD | Yan_2017 | not_relevant | 0 | 0 | The paper reports IC50 values for the drug (baohuoside I) and its formulation, but does not report a pharmacodynamic or exposure-response relationship for the excipient didecyldimethylammonium chloride (or bromide) itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
