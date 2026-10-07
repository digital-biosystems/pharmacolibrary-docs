<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;posaconazole&quot;}]"></div>

# posaconazole

- **generic name:** posaconazole
- **ATC codes:** `J02AC04`
- **DrugBank:** [DB01263](https://go.drugbank.com/drugs/DB01263) · **PubChem:** [CID 468595](https://pubchem.ncbi.nlm.nih.gov/compound/468595)
- **molar mass:** 700.7774 g/mol (C37H42F2N8O4) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Posaconazole is an antifungal drug used to treat fungal infections such as aspergillosis and other mycoses, including candidiasis and coccidioidomycosis. It is an approved medicine with authorised products in the European Union, and is also veterinary-approved and investigated for additional uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q906453](https://www.wikidata.org/wiki/Q906453) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:48 | 1:46 | 0/0/0 | 1/0/0 | 0/0/0 | 87,115/2,046 | einfracz / qwen3.8-27b | 7 | 2/5 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Varghese_2022_CHIKV](drugs/drug_posaconazole/pd_Varghese_2022_CHIKV.md) | CHIKV viral titer ← posaconazole · direct sigmoid Emax (Hill) effect | — | Varghese FS et al., Posaconazole inhibits multiple steps of…, Antiviral research (2022) | [10.1016/j.antiviral.2021.105223](https://doi.org/10.1016/j.antiviral.2021.105223) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Varghese_2022_SFV_PFU](drugs/drug_posaconazole/pd_Varghese_2022_SFV_PFU.md) | SFV viral titer (plaque forming units) ← posaconazole · direct sigmoid Emax (Hill) effect | — | Varghese FS et al., Posaconazole inhibits multiple steps of…, Antiviral research (2022) | [10.1016/j.antiviral.2021.105223](https://doi.org/10.1016/j.antiviral.2021.105223) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Varghese_2022_SINV](drugs/drug_posaconazole/pd_Varghese_2022_SINV.md) | SINV viral titer ← posaconazole · direct sigmoid Emax (Hill) effect | — | Varghese FS et al., Posaconazole inhibits multiple steps of…, Antiviral research (2022) | [10.1016/j.antiviral.2021.105223](https://doi.org/10.1016/j.antiviral.2021.105223) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=posaconazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 90 matched, 20 returned
- **screened:** 0  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sugimoto_2024.pdf` | Sugimoto M et al., Population Pharmacokinetic Modeling of…, Therapeutic drug monitoring (2024) | popPK | 10 | [10.1097/FTD.0000000000001198](https://doi.org/10.1097/FTD.0000000000001198) | [38648638](https://pubmed.ncbi.nlm.nih.gov/38648638) | The study performs a population PK model for posaconazole in humans, but the specific numeric parameter values (mean CL/F, V, Q, etc.) are not explicitly listed in the provided abstract text, only relative changes (folds) and covariates. |
| `Li_2010.pdf` | Li Y et al., Pharmacokinetic/pharmacodynamic profile…, Clinical pharmacokinetics (2010) | popPK | 5 | [10.2165/11319340-000000000-00000](https://doi.org/10.2165/11319340-000000000-00000) | [20481649](https://pubmed.ncbi.nlm.nih.gov/20481649) | The text provides general pharmacokinetic ranges (Cl, V/F, t1/2) consistent with human data but lacks specific population PK parameter estimates or individual subject data, appearing to be a review or summary. |

<sub>queue written 2026-10-07T12:47:49.555676+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agnihotri_2019 | irrelevant | 0 | 0 | The study focuses on the antitumor efficacy of posaconazole in glioblastoma models, not on its pharmacokinetic disposition parameters. |
| popPK | Dolton_2012 | irrelevant | 1 | 0 | This is a review article discussing therapeutic drug monitoring (TDM) and exposure-response relationships, but it does not present original quantitative pharmacokinetic parameters (such as CL, V, or ka) or a specific compartmental/population-PK model with numeric values. |
| popPK | Dolton_2012_2 | irrelevant | 1 | 0 | The study is a therapeutic drug monitoring analysis of plasma concentrations and clinical outcomes rather than a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Iwasa_2023 | irrelevant | 2 | 0 | The paper describes a model-informed dose justification for a specific population (Japanese patients) and reports exposure distributions, but the specific numeric PK parameter values (CL, V, Q, etc.) from the population model are not present in the provided evidence. |
| popPK | Li_2010 | relevant | 5 | 2 | The text provides general pharmacokinetic ranges (Cl, V/F, t1/2) consistent with human data but lacks specific population PK parameter estimates or individual subject data, appearing to be a review or summary. |
| popPK | Rao_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of biapenem, with posaconazole serving only as a covariate for drug-drug interaction, not as the subject drug. |
| popPK | Scott_2020 | irrelevant | 0 | 0 | This is a review article that discusses posaconazole qualitatively but contains no original quantitative pharmacokinetic parameter values for the drug. |
| popPK | Sengar_2023 | irrelevant | 3 | 0 | This is a therapeutic drug monitoring/exposure-response study reporting plasma concentrations and clinical outcomes, not a study deriving quantitative compartmental pharmacokinetic parameters (CL, V, Q, ka). |
| popPK | Shu_2022 | irrelevant | 1 | 0 | The paper is a narrative review of individualized therapy strategies (TDM, PPK, Monte Carlo simulations) and does not report original quantitative disposition parameter values. |
| popPK | Sugimoto_2024 | relevant | 10 | 3 | The study performs a population PK model for posaconazole in humans, but the specific numeric parameter values (mean CL/F, V, Q, etc.) are not explicitly listed in the provided abstract text, only relative changes (folds) and covariates. |
| popPK | Van_2020 | irrelevant | 0 | 0 | This is a review article discussing posaconazole's clinical profile without presenting original quantitative pharmacokinetic parameter values in the provided text. |
| popPK | Varghese_2022 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of posaconazole's antiviral activity against alphaviruses, reporting EC50 values rather than pharmacokinetic disposition parameters. |
| popPK | Yuan_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for vincristine (and its metabolite M1), with posaconazole serving only as a covariate for drug-drug interaction, not as the subject drug. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tacrolimus, with posaconazole included only as a co-administered covariate affecting tacrolimus clearance. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
