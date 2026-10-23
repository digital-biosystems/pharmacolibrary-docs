<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;avatrombopag&quot;,&quot;href&quot;:&quot;drugs/drug_avatrombopag/&quot;},{&quot;label&quot;:&quot;Liu_2025_2 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avatrombopag — `Avatrombopag_Liu2025v2_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:36 UTC (Needs review), but the paper was screened again on 2026-10-05 17:23 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The model does not reproduce the paper's terminal half-life (model/paper ratio 0.684).

<div class="pk-model-meta" hidden drug="avatrombopag" model-id="Avatrombopag_Liu2025v2_reference" status="needs_review" stale="true" population="healthy Chinese adults" measured-compound="avatrombopag" parameterization="apparent" topology="1C"></div>

## Citation
Liu X, Chen L, Ju G, Li C, Liu B, Fei Y et al. Investigation of the. Pharmaceuticals (Basel, Switzerland) 18(6) (2025).
  ·  DOI: [10.3390/ph18060903](https://doi.org/10.3390/ph18060903)

## Population and dosing

**Population:** healthy Chinese adults · condition healthy · age group adult · n = &gt;=92.

**Dosing:** 20 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F (L/h) | CL/F | 7.85 | L/h | 0.182 (None% RSE) |
| Vd/F (L) | V/F | 199 | L | 0.159 (None% RSE) |
| ka (/h) | kabs | 0.582 | /h | 0.504 (None% RSE) |
| MTT (h) | MTT | 1.33 | h | 0.131 (None% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (model/paper ratio 0.684).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (MTT), so that value has no SI equivalent. Extracted — avatrombopag: CL/F 7.85 L/h, V/F 199 L, kabs 0.582 /h, MTT 1.33 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has avatrombopag, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 7.85 | L/h | 2.181e-06 | m3/s | l/h | exact (1) | pharmaceuticals-18-00903-t003:row2:col1 | 0.182 (None% RSE) |
| Vd/F (L) | `Q76` · V/F | 199 | L | 0.199 | m3 | l | exact (1) | pharmaceuticals-18-00903-t003:row3:col1 | 0.159 (None% RSE) |
| ka (/h) | `Q49` · kabs | 0.582 | /h | 0.0001617 | 1/s | 1/h | exact (1) | pharmaceuticals-18-00903-t003:row4:col1 | 0.504 (None% RSE) |
| MTT (h) | `Q81` · MTT | 1.33 | h |  |  | h | exact (1) | pharmaceuticals-18-00903-t003:row5:col1 | 0.131 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'Vd/F' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'KA' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'MTT' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'OCC [KA]' routed out of structural estimates ('Between-subject variability')
- dropped unlinked row (NIL): 'COV1 *' — extend the ontology if this is a real PK parameter (source ['pharmaceuticals-18-00903-t003:row6:col1'])
- dropped unlinked row (NIL): 'COV2 *' — extend the ontology if this is a real PK parameter (source ['pharmaceuticals-18-00903-t003:row7:col1'])
- dropped unlinked row (NIL): 'COV3 *' — extend the ontology if this is a real PK parameter (source ['pharmaceuticals-18-00903-t003:row8:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=avatrombopag
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceuticals-18-00903-t003:row2:col2 = '14%'
- unparsed cell pharmaceuticals-18-00903-t003:row2:col3 = '7.81 [5.92–10.62]'
- unparsed cell pharmaceuticals-18-00903-t003:row3:col2 = '13%'
- unparsed cell pharmaceuticals-18-00903-t003:row3:col3 = '198.01 [149.77–267.64]'
- unparsed cell pharmaceuticals-18-00903-t003:row4:col2 = '13%'
- unparsed cell pharmaceuticals-18-00903-t003:row4:col3 = '0.581 [0.4723–0.785]'
- unparsed cell pharmaceuticals-18-00903-t003:row5:col2 = '5%'
- unparsed cell pharmaceuticals-18-00903-t003:row5:col3 = '1.33 [1.22–1.45]'
- unparsed cell pharmaceuticals-18-00903-t003:row6:col2 = '111%'
- unparsed cell pharmaceuticals-18-00903-t003:row6:col3 = '−0.0702 [−0.3069–0.2698]'
- unparsed cell pharmaceuticals-18-00903-t003:row7:col2 = '15%'
- unparsed cell pharmaceuticals-18-00903-t003:row7:col3 = '−0.28 [−0.47–0.01]'
- unparsed cell pharmaceuticals-18-00903-t003:row8:col2 = '56%'
- unparsed cell pharmaceuticals-18-00903-t003:row8:col3 = '0.186 [−0.216–0.431]'
- unparsed cell pharmaceuticals-18-00903-t003:row10:col2 = '35%'
- unparsed cell pharmaceuticals-18-00903-t003:row10:col3 = '0.174 [0.126–0.235]'
- unparsed cell pharmaceuticals-18-00903-t003:row11:col2 = '32%'
- unparsed cell pharmaceuticals-18-00903-t003:row11:col3 = '0.153 [0.106–0.204]'
- unparsed cell pharmaceuticals-18-00903-t003:row12:col2 = '35%'
- unparsed cell pharmaceuticals-18-00903-t003:row12:col3 = '0.48 [0.29–0.78]'
- unparsed cell pharmaceuticals-18-00903-t003:row13:col2 = '23%'
- unparsed cell pharmaceuticals-18-00903-t003:row13:col3 = '0.128 [0.093–0.169]'
- unparsed cell pharmaceuticals-18-00903-t003:row14:col2 = '12%'
- unparsed cell pharmaceuticals-18-00903-t003:row14:col3 = '0.922 [0.681–1.346]'
- unparsed cell pharmaceuticals-18-00903-t003:row17:col2 = '3.00%'
- unparsed cell pharmaceuticals-18-00903-t003:row17:col3 = '1.17 [0.86–1.48]'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.75 (6/8 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `screen.dose_compound` | avatrombopag | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | avatrombopag | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 25.68 | 17.57 | 0.6843 | 0.25 | reported t½β |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['pharmaceuticals-18-00903-t003:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['pharmaceuticals-18-00903-t003:row4:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['pharmaceuticals-18-00903-t003:row3:col1'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 7.85 L/h |  |  | ['pharmaceuticals-18-00903-t003:row2:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 199 L |  |  | ['pharmaceuticals-18-00903-t003:row3:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bavatrombopag%5D%20Avatrombopag_Liu2025v2_reference&body=Drug%3A%20avatrombopag%0ARecord%3A%20Avatrombopag_Liu2025v2_reference%0APaper%3A%20Liu_2025_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_avatrombopag/Avatrombopag_Liu2025v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-05 17:23 UTC</sub>
