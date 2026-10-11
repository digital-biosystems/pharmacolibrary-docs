<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;sacituzumab govitecan&quot;}]"></div>

# sacituzumab govitecan

- **generic name:** sacituzumab govitecan
- **ATC codes:** `L01FX17`
- **DrugBank:** [DB12893](https://go.drugbank.com/drugs/DB12893) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Sacituzumab govitecan is an antibody-drug conjugate used to treat breast cancer, including triple-negative breast cancer. It is approved and authorised for use in the European Union, and remains under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q23901469](https://www.wikidata.org/wiki/Q23901469) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| free SN-38 | metabolite | 392.411 | C22H20N2O5 | PubChem | [104842](https://pubchem.ncbi.nlm.nih.gov/compound/104842) | Sathe_2024, Sathe_2025 |
| sacituzumab_govitecan | metabolite | 1601.79 | C76H104N12O24S | PubChem | [91668186](https://pubchem.ncbi.nlm.nih.gov/compound/91668186) | Sathe_2024, Sathe_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 20:03 | 6:42 | 1/3/0 | 0/0/1 | 0/0/0 | 160,561/12,615 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Sathe_2025_reference](drugs/drug_sacituzumab_govitecan/SacituzumabGovitecan_Sathe2025_reference.md) | model (no simulator) | 1-compartment, oral | 13 (+8 cov.) | Sathe AG et al., Sacituzumab Govitecan Population Pharma…, Clinical and translational… (2025) | [10.1111/cts.70291](https://doi.org/10.1111/cts.70291) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Sathe_2024_final](drugs/drug_sacituzumab_govitecan/SacituzumabGovitecan_Sathe2024_final.md) | — | general linear (no model) | 8 (+7 cov.) | Sathe AG et al., Population Pharmacokinetics of Sacituzu…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01366-3](https://doi.org/10.1007/s40262-024-01366-3) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Sathe_2024_final_final_model_estimatea_rse](drugs/drug_sacituzumab_govitecan/SacituzumabGovitecan_Sathe2024_final_final_model_estimatea_r.md) | — | general linear (no model) | 3 (+1 cov.) | Sathe AG et al., Population Pharmacokinetics of Sacituzu…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01366-3](https://doi.org/10.1007/s40262-024-01366-3) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sathe_2024_untransformed_estimate](drugs/drug_sacituzumab_govitecan/SacituzumabGovitecan_Sathe2024_untransformed_estimate.md) | — | general linear (no model) | 0 | Sathe AG et al., Population Pharmacokinetics of Sacituzu…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01366-3](https://doi.org/10.1007/s40262-024-01366-3) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sathe_2025_2_CR](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_CR.md) | complete response ← sacituzumab govitecan · categorical (graded) response model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sathe_2025_2_ORR](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_ORR.md) | objective response rate ← sacituzumab govitecan · categorical (graded) response model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sathe_2025_2_diarrhea](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_diarrhea.md) | diarrhea ← sacituzumab govitecan · categorical (graded) response model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sathe_2025_2_nausea](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_nausea.md) | nausea ← sacituzumab govitecan · categorical (graded) response model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sathe_2025_2_neutropenia](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_neutropenia.md) | neutropenia ← sacituzumab govitecan · categorical (graded) response model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sathe_2025_2_time_to_first_dose_delay](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_time_to_first_dose_delay.md) | time to first dose delay ← sacituzumab govitecan · time-to-event model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sathe_2025_2_time_to_first_dose_reduction](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_time_to_first_dose_reduction.md) | time to first dose reduction ← sacituzumab govitecan · time-to-event model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sathe_2025_2_vomiting](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_vomiting.md) | vomiting ← sacituzumab govitecan · categorical (graded) response model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sacituzumab_govitecan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: FUBP1 (inhibitor), TACSTD2 (antibody), TOP1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 1  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Altman_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on carboplatin resistance in TNBC using PDX models and does not report pharmacokinetic parameters for sacituzumab govitecan. |
| popPK | Cherifi_2024 | irrelevant | 2 | 0 | This is a narrative review that describes general PK/PD characteristics qualitatively but does not provide specific quantitative parameter values (CL, V, etc.) for sacituzumab-govitecan. |
| popPK | Papacharisi_2025 | irrelevant | 0 | 0 | The study focuses on novel amanitin-based ADCs (ATACs) and uses sacituzumab govitecan (Trodelvy) only as a comparator agent, not as the subject of the pharmacokinetic analysis. |
| popPK | Sathe_2025_2 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that uses population PK model predictions but does not report the underlying quantitative PK parameter estimates (CL, V, etc.) for sacituzumab govitecan. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:58 UTC</sub>
