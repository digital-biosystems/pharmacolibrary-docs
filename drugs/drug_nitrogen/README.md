<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;nitrogen&quot;}]"></div>

# nitrogen

- **generic name:** nitrogen
- **ATC codes:** `V03AN04`
- **DrugBank:** [DB09152](https://go.drugbank.com/drugs/DB09152) · **PubChem:** [CID 947](https://pubchem.ncbi.nlm.nih.gov/compound/947)
- **molar mass:** 28.0134 g/mol (N2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Nitrogen is a medical gas classified among other therapeutic gases, used in medicine as an inert gas. It is an approved medical gas and also has approved veterinary uses, though it is not an EMA-authorised medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q627](https://www.wikidata.org/wiki/Q627) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:11 | 1:08 | 0/0/0 | 0/0/0 | 0/0/0 | 81,085/1,458 | ollama / glm-5.3-flash | 6 | 2/4 | 6/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2255 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bodtger_2023 | irrelevant | 0 | 0 | The paper describes a thoracoscopy procedure with no pharmacokinetic parameters for nitrogen or any drug. |
| popPK | Daniels_2020 | irrelevant | 0 | 0 | This is an epidemiological exposure-response study of styrene and cancer mortality, with no pharmacokinetic parameters for nitrogen. |
| popPK | Das_2005 | irrelevant | 0 | 0 | This is a body composition methods review; "compartment" refers to body composition, not PK compartments, and no nitrogen disposition parameters are reported. |
| popPK | Dzhambov_2016 | irrelevant | 0 | 0 | no_text gate: only 335 chars of text extracted (&lt; 400) |
| popPK | Homma_2001 | irrelevant | 0 | 0 | This is a radiochemistry/liquid scintillation counting paper about radon-222 measurement and air luminescence; "nitrogen" appears only as the emitting species in air luminescence, with no pharmacokinetic parameters for nitrogen as a drug. |
| popPK | Hughes_2023 | irrelevant | 0 | 0 | This is a respiratory gas exchange editorial about V̇A/Q̇, shunt and dead space in COVID-19, not a pharmacokinetic study of nitrogen disposition; no PK parameters for nitrogen are present. |
| popPK | Laurence_2003 | irrelevant | 0 | 0 | This is an ecology/ozone exposure paper with no pharmacokinetic data for nitrogen. |
| popPK | Liteplo_2003 | irrelevant | 0 | 0 | This is a formaldehyde hazard/exposure assessment, not a PK study of nitrogen, and no disposition parameters are reported. |
| popPK | McKone_1989 | irrelevant | 0 | 0 | This is a household VOC exposure modeling study, not a pharmacokinetic study of nitrogen, and no disposition parameters for nitrogen appear. |
| popPK | Meek_2002 | irrelevant | 0 | 0 | This is a PBPK/exposure assessment of chloroform, not nitrogen, and no numeric PK parameters for nitrogen appear. |
| popPK | Nickerson_2023 | irrelevant | 0 | 0 | This is a body composition method-comparison study (4C model, DXA, MFBIA) with no pharmacokinetic parameters for nitrogen or any drug. |
| popPK | Philipson_1996 | irrelevant | 0 | 0 | This is a toxic risk modeling methodology paper with no pharmacokinetic parameters for nitrogen reported. |
| popPK | Pillai_2004 | irrelevant | 0 | 0 | The drug studied is ibandronate (a nitrogen-containing bisphosphonate), not nitrogen itself; no PK parameters for nitrogen are reported. |
| popPK | Toth_2019 | irrelevant | 0 | 0 | This is a clinical review of chest tube drainage devices with no pharmacokinetic data or parameters for nitrogen. |
| popPK | Wei_2024 | irrelevant | 0 | 0 | This is an epidemiological cohort study of PM2.5 exposure and cardiovascular hospital admissions, not a pharmacokinetic study of nitrogen; no disposition parameters are reported. |
| popPK | Yatabe_2024 | irrelevant | 0 | 0 | This is a review of lung cancer molecular pathology with no pharmacokinetic parameters for nitrogen or any drug. |
| popPK | Yoon_2023 | irrelevant | 0 | 0 | This is a population PK study of vancomycin, not nitrogen; nitrogen (BUN) appears only as a covariate, and no nitrogen disposition parameters are reported. |
| popPK | Yu_2025 | irrelevant | 0 | 0 | This is a population-PK study of methotrexate, not nitrogen; nitrogen (BUN) appears only as a covariate, and no nitrogen disposition parameters are reported. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | This is an epidemiological cohort study of air pollutant exposure and mortality with no pharmacokinetic parameters for nitrogen; no numeric PK values are present. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | This is a population-PK study of linezolid, not nitrogen; "blood urea nitrogen" appears only as a covariate, and no nitrogen disposition parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
