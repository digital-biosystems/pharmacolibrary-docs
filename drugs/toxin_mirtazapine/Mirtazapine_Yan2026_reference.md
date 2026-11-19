<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Mirtazapine&quot;,&quot;href&quot;:&quot;drugs/toxin_mirtazapine/&quot;},{&quot;label&quot;:&quot;Yan_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mirtazapine_Bissinger2023_reference&quot;,&quot;label&quot;:&quot;Bissinger_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mirtazapine/Mirtazapine_Bissinger2023_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mirtazapine_Buhles2018_reference&quot;,&quot;label&quot;:&quot;Buhles_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mirtazapine/Mirtazapine_Buhles2018_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mirtazapine_Quimby2011_reference&quot;,&quot;label&quot;:&quot;Quimby_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mirtazapine/Mirtazapine_Quimby2011_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mirtazapine_Quimby2011v2_reference&quot;,&quot;label&quot;:&quot;Quimby_2011_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mirtazapine/Mirtazapine_Quimby2011v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mirtazapine_Timmer1997_reference&quot;,&quot;label&quot;:&quot;Timmer_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mirtazapine/Mirtazapine_Timmer1997_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Mirtazapine — `Mirtazapine_Yan2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Mirtazapine's absorption rate constant is listed as 1.2 L/h, conflicting with the required first-order rate unit of inverse time.

<div class="pk-model-meta" hidden drug="Mirtazapine" model-id="Mirtazapine_Yan2026_reference" status="rejected" stale="false" population="Chinese patients with depression" measured-compound="Mirtazapine" parameterization="apparent" topology="1C"></div>

## Citation
Yan H, Huang W, Xia H, Luo Y, Li Y, Shang D. Optimizing Mirtazapine Initial Dosing: A Population Analysis of the Effects of BMI, Paroxetine and Fluvoxamine. Drug design, development and therapy 20:601238 (2026).
  ·  DOI: [10.2147/dddt.s601238](https://doi.org/10.2147/dddt.s601238)

## Population and dosing

**Population:** Chinese patients with depression · condition depression · age group mixed · n = 105.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Ka (L/h) | kabs | 1.2 | L/h |  |  |
| CL/F (L/h) | CL/F | 28.9 | L/h | 4 | 0.0613 (None% RSE) |
| V/F (L) | V/F | 310 | L | 22 | 0.131 (None% RSE) |
| ΘCL- Fluvoxamine | CL_ratio | -0.511 |  | 13 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Mirtazapine's absorption rate constant is listed as 1.2 L/h, conflicting with the required first-order rate unit of inverse time.**

The absorption rate constant is recorded with a unit of liters per hour, which represents a volume flow rather than a first-order rate constant. This dimensional mismatch prevented the system from assigning a valid SI value. Consequently, the parameter remained unresolved, leading to the rejection of the model record. Extracted — mirtazapine: kabs 1.2 L/h, CL/F 28.9 L/h, V/F 310 L, CL_ratio -0.511.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (L/h) | `Q49` · kabs | 1.2 | L/h |  |  | l/h |  | exact (1) | t0002:row2:col1 |  |
| CL/F (L/h) | `Q27` · CL/F | 28.9 | L/h | 8.028e-06 | m3/s | l/h | 4 | exact (1) | t0002:row3:col1 | 0.0613 (None% RSE) |
| V/F (L) | `Q76` · V/F | 310 | L | 0.31 | m3 | l | 22 | exact (1) | t0002:row4:col1 | 0.131 (None% RSE) |
| ΘCL- Fluvoxamine | `Q31` · CL_ratio | -0.511 |  | -0.511 |  |  | 13 | llm_corrected (0.6) | t0002:row6:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F (L/h)' routed out of structural estimates ('IIV')
- table section iiv: 'V/F (L)' routed out of structural estimates ('IIV')
- unit_dimension_mismatch: 'Ka (L/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped 'ΘCL-Paroxetine' → Q22 = -0.269: a clearance of -0.269 is not a parameter value (source ['t0002:row5:col1'])
- dropped 'ΘCL-BMI' → Q22 = -0.294: a clearance of -0.294 is not a parameter value (source ['t0002:row7:col1'])
- dropped unlinked row (NIL): 'PRO' — extend the ontology if this is a real PK parameter (source ['t0002:row8:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Mirtazapine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table t0002: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['t0002:row3:col1'] |
| C5_dimension_Q49 | fail | 1 / [time] | L/h ([length] ** 3 / [time]) | ['t0002:row2:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['t0002:row4:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 28.9 L/h | ['t0002:row3:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 310 L | ['t0002:row4:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmirtazapine%5D%20Mirtazapine_Yan2026_reference&body=Drug%3A%20mirtazapine%0ARecord%3A%20Mirtazapine_Yan2026_reference%0APaper%3A%20Yan_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_mirtazapine/Mirtazapine_Yan2026_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 18:09 UTC</sub>
