<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;lisinopril&quot;,&quot;href&quot;:&quot;drugs/drug_lisinopril/&quot;},{&quot;label&quot;:&quot;Medhora_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lisinopril_Sandra2024_reference&quot;,&quot;label&quot;:&quot;Sandra_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lisinopril/Lisinopril_Sandra2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lisinopril — `Lisinopril_Medhora2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span>

> The reviewer's verdict (Rejected, 2026-09-30 20:08 UTC) predates the latest extraction (2026-10-07 06:36 UTC); the status shown comes from the current checks. Rejected: lisinopril's central volume of distribution (V1 = 0.008 L) and renal clearance (CLR = 0.009 L/h) fall outside the physiological window for female WAG/RijCmcr rats, indicating a unit or scale extraction error.

<div class="pk-model-meta" hidden drug="lisinopril" model-id="Lisinopril_Medhora2021_reference" status="rejected" stale="true" population="irradiated and nonirradiated rats" measured-compound="lisinopril" parameterization="mechanistic" topology="2C"></div>

## Citation
Medhora M, Phadnis P, Narayanan J, Gasperetti T, Zielonka J, Moulder JE et al. Radiation Increases Bioavailability of Lisinopril, a Mitigator of Radiation-Induced Toxicities. Frontiers in pharmacology 12:646076 (2021).
  ·  DOI: [10.3389/fphar.2021.646076](https://doi.org/10.3389/fphar.2021.646076)

## Population and dosing

**Population:** irradiated and nonirradiated rats · condition radiation injury · age group adult.

**Dosing:** 0.06, 0.3, 0.6 mg, oral, iv, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Absorption rate | kabs | 0.279 | 1/h |
| Renal clearance rate | CLR | 0.009 | L/h |
| Central volume | V1 | 0.008 | L |
| Inter-compartmental clearance rate | Q | 0.014 | L/h |
| Peripheral volume (lung) | V2 | 0.513 | L |
| Bioavailability | Fab | 0.192 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.818). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected: lisinopril's central volume of distribution (V1 = 0.008 L) and renal clearance (CLR = 0.009 L/h) fall outside the physiological window for female WAG/RijCmcr rats, indicating a unit or scale extraction error.**

The two-compartment lisinopril model carries V1 = 0.008 L, far below plausible central volume for a rat, while the peripheral volume V2 = 0.513 L is vastly larger, an implausible magnitude consistent with a unit/scale extraction error. Renal clearance CLR = 0.009 L/h is likewise outside the physiological window. The remaining parameters (kabs 0.279 1/h, Q 0.014 L/h, Fab 0.192, CL_ratio 0.943, Frel 1.326) were extracted, but the implausible clearance/volume magnitudes caused rejection. Extracted — lisinopril: kabs 0.279 1/h, CLR 0.009 L/h, V1 0.008 L, Q 0.014 L/h, V2 0.513 L, Fab 0.192, CL_ratio 0.943, Frel 1.33.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has lisinopril, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Absorption rate | `Q49` · kabs | 0.279 | 1/h | 7.75e-05 | 1/s | 1/h | exact (1) | T2:row1:col1, T2:row1:col2, T2:row1:col3, T2:row1:col4 |
| Renal clearance rate | `Q26` · CLR | 0.009 | L/h | 2.5e-09 | m3/s | L/h | llm_confirmed (0.6) | T2:row2:col1, T2:row2:col2, T2:row2:col3 |
| Central volume | `Q63` · V1 | 0.008 | L | 8e-06 | m3 | L | exact (1) | T2:row3:col1, T2:row3:col2, T2:row3:col3 |
| Inter-compartmental clearance rate | `Q30` · Q | 0.014 | L/h | 3.889e-09 | m3/s | L/h | llm_confirmed (0.6) | T2:row4:col1, T2:row4:col2, T2:row4:col3 |
| Peripheral volume (lung) | `Q64` · V2 | 0.513 | L | 0.000513 | m3 | L | exact (1) | T2:row5:col1, T2:row5:col2, T2:row5:col3 |
| Bioavailability | `Q40` · Fab | 0.192 |  |  |  |  | exact (1) | T2:row6:col1, T2:row6:col2, T2:row6:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'lung' (V2)
- dropped unlinked row (NIL): 'Absorption rate ratio' — extend the ontology if this is a real PK parameter (source ['Medhora_2021_table_3:row0:col1', 'Medhora_2021_table_3:row0:col2', 'Medhora_2021_table_3:row0:col3'])
- dropped duplicate Q26 ('Renal clearance rate ratio', value '0.943') — already have one for this compound
- dropped duplicate Q30 ('Inter-compartmental clearance rate ratio', value '0.615') — already have one for this compound
- implicit units: 'Absorption rate' → 1/h (from the popPK convention: 'Absorption rate constants (kabs) are first-order rate constants, conventionally expressed in reciprocal time units (1/h)')
- implicit units: 'Renal clearance rate' → L/h (from the popPK convention: 'Clearance parameters (Cl) are conventionally expressed in volume per time (L/h). The value 0.009 L/h is consistent with ')
- implicit units: 'Central volume' → L (from the paper text: "The caption for Table 2 states: 'L represents liters in the units column.' Volumes of distribution are conventionally in")
- implicit units: 'Inter-compartmental clearance rate' → L/h (from the popPK convention: 'Inter-compartmental clearance (Q) is a clearance parameter, conventionally expressed in volume per time (L/h). The value')
- implicit units: 'Peripheral volume (lung)' → L (from the paper text: "The caption for Table 2 states: 'L represents liters in the units column.' Volumes of distribution are conventionally in")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lisinopril
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Medhora_2021_table_3:row3:col4 = '&lt;0.001'
- companion parameter table 3 transcribed (15 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.818 (9/11 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | lisinopril | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | lisinopril | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T2:row1:col1', 'T2:row1:col2', 'T2:row1:col3', 'T2:row1:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.008 L | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.513 L | ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blisinopril%5D%20Lisinopril_Medhora2021_reference&body=Drug%3A%20lisinopril%0ARecord%3A%20Lisinopril_Medhora2021_reference%0APaper%3A%20Medhora_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lisinopril/Lisinopril_Medhora2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 06:36 UTC</sub>
