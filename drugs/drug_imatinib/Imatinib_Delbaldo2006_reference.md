<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;imatinib&quot;,&quot;href&quot;:&quot;drugs/drug_imatinib/&quot;},{&quot;label&quot;:&quot;Delbaldo_2006 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Imatinib_Khosravan2016_reference&quot;,&quot;label&quot;:&quot;Khosravan_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_imatinib/Imatinib_Khosravan2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Imatinib_Garrett2023_reference&quot;,&quot;label&quot;:&quot;Garrett_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_imatinib/Imatinib_Garrett2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# imatinib — `Imatinib_Delbaldo2006_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="imatinib" model-id="Imatinib_Delbaldo2006_reference" status="needs_review" stale="false" population="patients with advanced gastrointestinal stromal tumors" measured-compound="imatinib" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Delbaldo C, Chatelut E, Ré M, Deroussent A, Séronie-Vivien S, Jambu A et al. Pharmacokinetic-pharmacodynamic relationships of imatinib and its main metabolite in patients with advanced gastrointestinal stromal tumors. Clinical cancer research : an official journal of the American Association for Cancer Research 12(20 Pt 1):6073–6078 (2006).
  ·  DOI: [10.1158/1078-0432.CCR-05-2596](https://doi.org/10.1158/1078-0432.CCR-05-2596)

## Population and dosing

**Population:** patients with advanced gastrointestinal stromal tumors · condition gastrointestinal stromal tumors · age group adult · n = 35.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h) | CL | 7.97 | L/h |
| CLM/fm (L/h) | CLfm | 58.6 | L/h |
| CGP 74588/imatinib area under the curve (AUC) ratio | AUC ratio | 0.25 | at steady state |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), qwen3.8-27b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — imatinib: CL 7.97 L/h, AUC ratio 0.25 at steady state; CGP 74588: CLfm 58.6 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has mechanistic, the second reading apparent; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 7.97 | L/h | 2.214e-06 | m3/s | l/h | exact (1) | Delbaldo_2006:abstract |
| CLM/fm (L/h) | `Q370` · CLfm | 58.6 | L/h | 1.628e-05 | m3/s | l/h | llm_confirmed (0.6) | Delbaldo_2006:abstract |
| CGP 74588/imatinib area under the curve (AUC) ratio | `Q21` · AUC ratio | 0.25 | at steady state |  |  | s^2·at·tate·teady | llm_corrected (0.6) | Delbaldo_2006:abstract, Delbaldo_2006:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- linked 'CLM/fm (L/h)' as 'formation clearance/F' → Q370 (CLfm) for CGP 74588 — compound marker removed
- unit_dimension_unknown: 'at steady state' (AUC ratio)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=imatinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 3/3 row label(s) assigned, 2 linked by role; re-tagged imatinib→parent ×1, imatinib→CGP 74588 ×1
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Delbaldo_2006_metadata.yaml (4 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (5/10 fields) | 5 |
| `qwen3.8-27b` | not confirmed | 0.154 (2/13 fields) | 11 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[cgp 74588/imatinib area under the curve (auc) ratio]` | 0.25 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cgp 74588/imatinib auc ratio]` |  | 0.25 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/fm].parameter_id` | Q370 | Q27 | mismatch |
| `gpt-oss-120b` | `parameters[r]` |  | 0.56 | only_one_extracted |
| `qwen3.8-27b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `qwen3.8-27b` | `parameters[(aag/1.15)]` | -0.52 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[(aag/1.15)]` | -0.6 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cgp 74588/imatinib area under the curve (auc) ratio]` |  | 0.25 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl (l/h) = 7.97 (aag/1.15)]` |  | 7.97 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` | 7.97 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[clm/fm (l/h) = 58.6 (aag/1.15)(-0.60) x 0.55]` |  | 58.6 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clm/fm]` | 58.6 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[first‐order absorption rate constant]` | 0.358 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[the lag time from dose administration to the beginning of the first‐order absorption]` | 0.442 |  | only_one_extracted |
| `qwen3.8-27b` | `screen.primary_analyte` | imatinib and CGP 74588 | imatinib | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Delbaldo_2006:abstract'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Delbaldo_2006:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.97 | ['Delbaldo_2006:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.97 L/h | ['Delbaldo_2006:abstract'] |

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bimatinib%5D%20Imatinib_Delbaldo2006_reference&body=Drug%3A%20imatinib%0ARecord%3A%20Imatinib_Delbaldo2006_reference%0APaper%3A%20Delbaldo_2006%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_imatinib/Imatinib_Delbaldo2006_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-24 00:12 UTC</sub>
