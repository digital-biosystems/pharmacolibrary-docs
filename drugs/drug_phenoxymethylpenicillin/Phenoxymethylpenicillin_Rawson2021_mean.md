<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;phenoxymethylpenicillin&quot;,&quot;href&quot;:&quot;drugs/drug_phenoxymethylpenicillin/&quot;},{&quot;label&quot;:&quot;Rawson_2021 \u00b7 mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Phenoxymethylpenicillin_Obura2025_reference&quot;,&quot;label&quot;:&quot;Obura_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_phenoxymethylpenicillin/Phenoxymethylpenicillin_Obura2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# phenoxymethylpenicillin — `Phenoxymethylpenicillin_Rawson2021_mean`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="phenoxymethylpenicillin" model-id="Phenoxymethylpenicillin_Rawson2021_mean" status="needs_review" stale="false" population="healthy adults" measured-compound="phenoxymethylpenicillin" parameterization="mechanistic" topology="1C"></div>

## Citation
Rawson TM, Wilson RC, Moore LSP, Macgowan AP, Lovering AM, Bayliss M et al. Exploring the Pharmacokinetics of Phenoxymethylpenicillin (Penicillin-V) in Adults: A Healthy Volunteer Study. Open forum infectious diseases 8(12):ofab573 (2021).
  ·  DOI: [10.1093/ofid/ofab573](https://doi.org/10.1093/ofid/ofab573)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = &gt;10.

**Dosing:** 500 mg, oral, multiple, every 6 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V, L | V | 46.39 | L |
| CL, L/h | CL | 97.88 | L/h |
| Ka, h-1 | kabs | 4.74 | h-1 |
| Tlag1, h | tlag | 0.25 | h |
| Kcp, h-1 | k12 | 12.66 | h-1 |
| Kpc, h-1 | k21 | 16.84 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — phenoxymethylpenicillin: V 46.4 L, CL 97.9 L/h, kabs 4.74 h-1, tlag 0.25 h, k12 12.7 h-1, k21 16.8 h-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has phenoxymethylpenicillin, the second reading phenoxymethylpenicillin (penicillin-V); it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V, L | `Q61` · V | 46.39 | L | 0.04639 | m3 | l | exact (1) | T1:row1:col1 |
| CL, L/h | `Q22` · CL | 97.88 | L/h | 2.719e-05 | m3/s | l/h | exact (1) | T1:row2:col1 |
| Ka, h-1 | `Q49` · kabs | 4.74 | h-1 | 0.001317 | 1/s | 1/h | exact (1) | T1:row3:col1 |
| Tlag1, h | `Q83` · tlag | 0.25 | h | 900 | s | h | llm (0.6) | T1:row4:col1 |
| Kcp, h-1 | `Q301` · k12 | 12.66 | h-1 | 0.003517 | 1/s | 1/h | exact (1) | T1:row7:col1 |
| Kpc, h-1 | `Q302` · k21 | 16.84 | h-1 | 0.004678 | 1/s | 1/h | exact (1) | T1:row8:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'Kub, h-1' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T1:row5:col1'])
- dropped unlinked row (NIL): 'Kbu, h-1' — extend the ontology if this is a real PK parameter (source ['T1:row6:col1'])
- dropped unlinked row (NIL): 'IC1, mg' — extend the ontology if this is a real PK parameter (source ['T1:row9:col1'])
- dropped unlinked row (NIL): 'IC2, mg' — extend the ontology if this is a real PK parameter (source ['T1:row10:col1'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (V, L); Q22 (CL, L/h)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=phenoxymethylpenicillin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'mean' subgroup of Rawson_2021 (paper reports 2 populations: mean, median)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.615 (8/13 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ic1]` |  | 40.22 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ic2]` |  | 8.71 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kub]` |  | 60.33 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | phenoxymethylpenicillin | phenoxymethylpenicillin (penicillin-V) | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | phenoxymethylpenicillin | penicillin-V (total and free) | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T1:row2:col1'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['T1:row7:col1'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['T1:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T1:row3:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T1:row1:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['T1:row4:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 97.88 | ['T1:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 97.9 L/h | ['T1:row2:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 46.4 L | ['T1:row1:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenoxymethylpenicillin%5D%20Phenoxymethylpenicillin_Rawson2021_mean&body=Drug%3A%20phenoxymethylpenicillin%0ARecord%3A%20Phenoxymethylpenicillin_Rawson2021_mean%0APaper%3A%20Rawson_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_phenoxymethylpenicillin/Phenoxymethylpenicillin_Rawson2021_mean%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 10:12 UTC</sub>
