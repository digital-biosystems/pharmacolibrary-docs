<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;bilastine&quot;,&quot;href&quot;:&quot;drugs/drug_bilastine/&quot;},{&quot;label&quot;:&quot;Kim_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bilastine_Togawa2016_caucasianb_5&quot;,&quot;label&quot;:&quot;Togawa_2016_caucasianb_5&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bilastine/Bilastine_Togawa2016_caucasianb_5.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bilastine_Togawa2016_japanesea&quot;,&quot;label&quot;:&quot;Togawa_2016_japanesea&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bilastine/Bilastine_Togawa2016_japanesea.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bilastine — `Bilastine_Kim2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CL and V1 have no unit.

<div class="pk-model-meta" hidden drug="bilastine" model-id="Bilastine_Kim2021_reference" status="needs_review" stale="false" population="elderly subjects" measured-compound="bilastine" parameterization="apparent" topology="3C"></div>

## Citation
Kim C, Lo Re V, Rodriguez M, Lukas JC, Leal N, Campo C et al. Application of a dual mechanistic approach to support bilastine dose selection for older adults. CPT: pharmacometrics & systems pharmacology 10(9):1006–1017 (2021).
  ·  DOI: [10.1002/psp4.12671](https://doi.org/10.1002/psp4.12671)

## Population and dosing

**Population:** elderly subjects · condition healthy · age group elderly · n = &gt;=16.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vc/F (L) | V1/F | 66.88 | L |
| Vp/F (L) | V2/F | 36.01 | L |
| CL/F (L/h) | CL/F | 12.78 | L/h |
| Q/F (L/h) | Q/F | 1.40 | L/h |
| Ka (1/h) | kabs | 1.28 | 1/h |
| CV (%) CL | CL | 8.91 |  |
| CV (%) Vc | V1 | 10.33 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL and V1 have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — bilastine: V1/F 66.9 L, V2/F 36 L, CL/F 12.8 L/h, Q/F 1.4 L/h, kabs 1.28 1/h, CL 8.91, V1 10.3.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cv (%) q: this record has none, the second reading 8.51; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vc/F (L) | `Q290` · V1/F | 66.88 | L | 0.06688 | m3 | l | exact (1) | psp412671-tbl-0003:row2:col1, psp412671-tbl-0003:row2:col3 |
| Vp/F (L) | `Q82` · V2/F | 36.01 | L | 0.03601 | m3 | l | exact (1) | psp412671-tbl-0003:row3:col1, psp412671-tbl-0003:row3:col3 |
| CL/F (L/h) | `Q27` · CL/F | 12.78 | L/h | 3.55e-06 | m3/s | l/h | exact (1) | psp412671-tbl-0003:row4:col1, psp412671-tbl-0003:row4:col3 |
| Q/F (L/h) | `Q69` · Q/F | 1.40 | L/h | 3.889e-07 | m3/s | l/h | exact (1) | psp412671-tbl-0003:row5:col1, psp412671-tbl-0003:row5:col3 |
| Ka (1/h) | `Q49` · kabs | 1.28 | 1/h | 0.0003556 | 1/s | 1/h | exact (1) | psp412671-tbl-0003:row6:col1, psp412671-tbl-0003:row6:col2, psp412671-tbl-0003:row6:col3 |
| CV (%) CL | `Q22` · CL | 8.91 |  |  |  |  | llm_confirmed (0.6) | psp412671-tbl-0003:row8:col1, psp412671-tbl-0003:row8:col3 |
| CV (%) Vc | `Q63` · V1 | 10.33 |  |  |  |  | llm_confirmed (0.6) | psp412671-tbl-0003:row9:col1, psp412671-tbl-0003:row9:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Senescence model (20 mg p.o.) F = 61% | Q40 | llm |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q49 ('CV (%) Ka', value '24.67') — already have one for this compound
- dropped unlinked row (NIL): 'CV (%) Q' — extend the ontology if this is a real PK parameter (source ['psp412671-tbl-0003:row10:col1', 'psp412671-tbl-0003:row10:col3'])
- dropped unlinked row (NIL): 'CV (%) Vp' — extend the ontology if this is a real PK parameter (source ['psp412671-tbl-0003:row11:col1', 'psp412671-tbl-0003:row11:col3'])
- implicit units: 'Ka (1/h)' → 1/h (from the popPK convention: 'Ka is a first-order absorption rate constant; the standard unit in population PK is 1/h (or h^-1), consistent with the v')
- implicit units: 'CV (%) CL' — the LLM proposed '%', whose dimension does not fit Q22; left unset
- implicit units: 'CV (%) Vc' — the LLM proposed '%', whose dimension does not fit Q63; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=bilastine
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp412671-tbl-0003:row0:col2 = 'Geriatric PopPK model (20 mg p.o.)'
- unparsed cell psp412671-tbl-0003:row0:col3 = 'Geriatric PopPK model (20 mg p.o.)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.857 (12/14 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cv (%) q]` |  | 8.51 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cv (%) vp]` |  | 10.33 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp412671-tbl-0003:row4:col1', 'psp412671-tbl-0003:row4:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp412671-tbl-0003:row2:col1', 'psp412671-tbl-0003:row2:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp412671-tbl-0003:row6:col1', 'psp412671-tbl-0003:row6:col2', 'psp412671-tbl-0003:row6:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp412671-tbl-0003:row5:col1', 'psp412671-tbl-0003:row5:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp412671-tbl-0003:row3:col1', 'psp412671-tbl-0003:row3:col3'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['psp412671-tbl-0003:row8:col1', 'psp412671-tbl-0003:row8:col3'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 |  | ['psp412671-tbl-0003:row9:col1', 'psp412671-tbl-0003:row9:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 12.8 L/h | ['psp412671-tbl-0003:row4:col1', 'psp412671-tbl-0003:row4:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 66.9 L | ['psp412671-tbl-0003:row2:col1', 'psp412671-tbl-0003:row2:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 36 L | ['psp412671-tbl-0003:row3:col1', 'psp412671-tbl-0003:row3:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbilastine%5D%20Bilastine_Kim2021_reference&body=Drug%3A%20bilastine%0ARecord%3A%20Bilastine_Kim2021_reference%0APaper%3A%20Kim_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bilastine/Bilastine_Kim2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 22:37 UTC</sub>
