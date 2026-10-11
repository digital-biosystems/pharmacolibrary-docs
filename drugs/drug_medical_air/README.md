<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;medical air&quot;}]"></div>

# medical air

- **generic name:** medical air
- **ATC codes:** `V03AN05`
- **DrugBank:** [DB09337](https://go.drugbank.com/drugs/DB09337) · **PubChem:** not captured
- **groups:** approved, investigational, vet_approved

## About

Medical air is a breathing gas used as a medical gas, for example to support patients' breathing. It is an approved medicinal product, also approved for veterinary use, and is widely available as a medical gas.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q84810530](https://www.wikidata.org/wiki/Q84810530) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 20:10 | 1:33 | 0/0/0 | 0/0/0 | 0/0/0 | 81,915/1,428 | ollama / glm-5.3-flash | 6 | 2/4 | 6/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1487 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bodtger_2023 | irrelevant | 0 | 0 | No pharmacokinetic data or disposition parameters for medical_air are reported; the paper describes a thoracoscopy procedure. |
| popPK | Daniels_2020 | irrelevant | 0 | 0 | This is an occupational epidemiology study of styrene exposure and cancer mortality, not a pharmacokinetic study of medical_air; no disposition parameters are reported. |
| popPK | Das_2005 | irrelevant | 0 | 0 | This is a body composition review with no pharmacokinetic parameters for medical_air; "compartment" refers to body water, not PK compartments. |
| popPK | Dzhambov_2016 | irrelevant | 0 | 0 | no_text gate: only 335 chars of text extracted (&lt; 400) |
| popPK | Homma_2001 | irrelevant | 0 | 0 | This is a radiochemistry paper on liquid scintillation counting of radon; no pharmacokinetic parameters for medical_air are reported. |
| popPK | Hughes_2023 | irrelevant | 0 | 0 | This is a respiratory physiology editorial on gas exchange (V̇A/Q̇, shunt, dead space) in COVID-19; medical_air is only the breathed gas, with no PK disposition parameters for it. |
| popPK | Laurence_2003 | irrelevant | 0 | 0 | This is an ecology paper about ozone effects on plants, with no pharmacokinetic data for medical_air. |
| popPK | Lei_2025 | irrelevant | 0 | 0 | This is an environmental health trial of air purification, not a pharmacokinetic study of medical air; no disposition parameters are reported. |
| popPK | Liteplo_2003 | irrelevant | 0 | 0 | This is a toxicological hazard/exposure assessment of formaldehyde, not a PK study of medical air, and no disposition parameter values are present. |
| popPK | McKone_1989 | irrelevant | 0 | 0 | This is an environmental exposure modeling study of VOCs in tap water, not a pharmacokinetic study of medical_air with no disposition parameters reported. |
| popPK | Meek_2002 | irrelevant | 0 | 0 | This is a chloroform risk assessment/PBPK paper; medical_air is not the subject drug and no numeric PK parameters for it appear. |
| popPK | Nickerson_2023 | irrelevant | 0 | 0 | This is a body composition study, not a pharmacokinetic study of medical_air; no disposition parameters are reported. |
| popPK | Philipson_1996 | irrelevant | 0 | 0 | This is a toxic risk modeling methodology paper with no pharmacokinetic parameters for medical_air; no numeric disposition values are present. |
| popPK | Sidell_2022 | irrelevant | 0 | 0 | This is an air pollution and COVID-19 incidence epidemiology study with no pharmacokinetic parameters for medical air. |
| popPK | Toth_2019 | irrelevant | 0 | 0 | This is a clinical review of chest tube drainage devices with no pharmacokinetic parameters for medical_air. |
| popPK | Wei_2024 | irrelevant | 0 | 0 | This is an epidemiological cohort study of PM2.5 exposure and cardiovascular hospital admissions, with no pharmacokinetic parameters for medical_air. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | This is an epidemiologic meta-analysis of PM2.5 exposure and cardiovascular mortality, not a pharmacokinetic study of medical_air; no disposition parameters are reported. |
| popPK | Yatabe_2024 | irrelevant | 0 | 0 | This is a review of lung cancer molecular pathology with no pharmacokinetic data or parameters for medical_air. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | This is an environmental epidemiology cohort study of air pollutant exposure and mortality, with no pharmacokinetic parameters for medical_air. |
| popPK | Zubizarreta-Arruti_2025 | irrelevant | 0 | 0 | This is an environmental epidemiology study of air pollution/greenness and child behavior, with no pharmacokinetic data for medical_air. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
