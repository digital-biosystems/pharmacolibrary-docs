<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09F&quot;,&quot;href&quot;:&quot;atc/V09F.md&quot;},{&quot;label&quot;:&quot;sodium iodide (131I)&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_iodide_131i/&quot;},{&quot;label&quot;:&quot;Hardiansyah_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumIodide131i_Ly2023_reference&quot;,&quot;label&quot;:&quot;Ly_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_iodide_131i/SodiumIodide131i_Ly2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sodium iodide (131I) — `SodiumIodide131i_Hardiansyah2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="sodium iodide (131I)" model-id="SodiumIodide131i_Hardiansyah2025_reference" status="rejected" stale="false" population="patients with benign thyroid disease" measured-compound="sodium_iodide_131i" parameterization="mechanistic" topology="1C"></div>

## Citation
Hardiansyah D, Riana A, Hänscheid H, Beer AJ, Lassmann M, Glatting G. Non-linear mixed-effects modelling and population-based model selection for. EJNMMI physics 12(1):37 (2025).
  ·  DOI: [10.1186/s40658-025-00735-6](https://doi.org/10.1186/s40658-025-00735-6)

## Population and dosing

**Population:** patients with benign thyroid disease · condition benign thyroid disease · n = 73.

**Dosing:** 1 MBq, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| λ1a (1/h) | λ1 | 10 |  |
| λ2b (1/h) | λ2 | 7 |  |
| λ3c (1/h) | equation variable | 15 |  |
| Ka | kabs | 3.39 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.75). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of ka: this record has 3.39, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| λ1a (1/h) | `Q67` · λ1 | 10 |  |  |  |  | llm (0.6) | Tab2:row2:col2 |
| λ2b (1/h) | `Q68` · λ2 | 7 |  |  |  |  | llm (0.6) | Tab2:row3:col2 |
| λ3c (1/h) | `Q900` · equation variable | 15 |  |  |  |  | llm (0.6) | Tab2:row4:col2 |
| Ka | `Q49` · kabs | 3.39 | h−1 | 0.0009417 | 1/s | 1/h | review_gapfill (0.7) | Ly_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'model parameters (unit)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped value-less row: 'Fixed effect'
- routed 'Inter-individual variabilityd' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped duplicate Q67 ('λ1(1/h)', value '9') — already have one for this compound
- dropped duplicate Q68 ('λ2(1/h)', value '12') — already have one for this compound
- dropped unlinked row (NIL): 'λ3(1/h)' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col1', 'Tab2:row8:col2'])
- dropped value-less row: 'Intra-individual variability'
- NIL: refused to back-fill base 't1/2z' from footnote/prose loose number 8.7 (source ['Tab2:footnote', 'Tab2:footnote', 'Tab2:footnote']); the table cell was unparseable — needs review
- implicit units: 'λ1a (1/h)' — the LLM proposed '1/h', whose dimension does not fit Q67; left unset
- implicit units: 'λ2b (1/h)' — the LLM proposed '1/h', whose dimension does not fit Q68; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sodium_iodide_131i
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Ly_2023's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab2:row1:col1 = 'a1'
- unparsed cell Tab2:row1:col2 = '7.1 × 10–2'
- unparsed cell Tab2:row1:col4 = '[5.8 × 10–2, 8.6 × 10–2]'
- unparsed cell Tab2:row2:col1 = '7.9 × 10–2'
- unparsed cell Tab2:row2:col3 = '[6.5 × 10–2, 9.8 × 10–2]'
- unparsed cell Tab2:row3:col1 = '6.7 × 10–2'
- unparsed cell Tab2:row3:col3 = '[5.8 × 10–2, 7.6 × 10–2]'
- unparsed cell Tab2:row4:col1 = '1.2 × 10–3'
- unparsed cell Tab2:row4:col3 = '[8.6 × 10–4, 1.6 × 10–3]'
- unparsed cell Tab2:row5:col1 = 'a1'
- unparsed cell Tab2:row5:col4 = '[0.56, 1.1]'
- unparsed cell Tab2:row6:col3 = '[0.89, 1.47]'
- unparsed cell Tab2:row7:col3 = '[0.41, 0.66]'
- unparsed cell Tab2:row8:col3 = '[0.72, 1.64]'
- unparsed cell Tab2:row9:col2 = '4.8 × 10–2'
- unparsed cell Tab2:row9:col4 = '[4.2 × 10–2, 5.4 × 10–2]'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.75 (6/8 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[ka]` | 3.39 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[λ3c]` | 15 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ly_2023:review'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] |  | ['Tab2:row2:col2'] |
| C5_unit_missing_Q68 | fail | [mass] / [time] |  | ['Tab2:row3:col2'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_iodide_131i%5D%20SodiumIodide131i_Hardiansyah2025_reference&body=Drug%3A%20sodium_iodide_131i%0ARecord%3A%20SodiumIodide131i_Hardiansyah2025_reference%0APaper%3A%20Hardiansyah_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sodium_iodide_131i/SodiumIodide131i_Hardiansyah2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 19:53 UTC</sub>
