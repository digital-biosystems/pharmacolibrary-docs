<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Entacapone&quot;,&quot;href&quot;:&quot;drugs/toxin_entacapone/&quot;},{&quot;label&quot;:&quot;Heikkinen_2001 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Entacapone_Forsberg2003_reference&quot;,&quot;label&quot;:&quot;Forsberg_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_entacapone/Entacapone_Forsberg2003_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Entacapone_Rouru1999_reference&quot;,&quot;label&quot;:&quot;Rouru_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_entacapone/Entacapone_Rouru1999_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Entacapone_Baek2018_reference&quot;,&quot;label&quot;:&quot;Baek_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_entacapone/Entacapone_Baek2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Entacapone_Chen2012_reference&quot;,&quot;label&quot;:&quot;Chen_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_entacapone/Entacapone_Chen2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Entacapone — `Entacapone_Heikkinen2001_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> No value for entacapone's clearance — all 9 extracted parameters describe entacapone / 13C-entacapone, not entacapone; t6_deviations.

<div class="pk-model-meta" hidden drug="Entacapone" model-id="Entacapone_Heikkinen2001_reference" status="model_quarantined" stale="false" population="healthy male volunteers" measured-compound="entacapone / 13C-entacapone" parameterization="mechanistic" topology="1C"></div>

## Citation
Heikkinen H, Saraheimo M, Antila S, Ottoila P, Pentikäinen PJ. Pharmacokinetics of entacapone, a peripherally acting catechol-O-methyltransferase inhibitor, in man. A study using a stable isotope techique. European journal of clinical pharmacology 56(11):821–826 (2001).
  ·  DOI: [10.1007/s002280000244](https://doi.org/10.1007/s002280000244)

## Population and dosing

**Population:** healthy male volunteers · condition healthy · age group adult · n = 8.

**Dosed compound ≠ measured compound:** dosed entacapone (13C-entacapone i.v.; unlabelled entacapone oral), measured entacapone / 13C-entacapone.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Volume of the central compartment (Vc) | V | 0.08 | l/kg |
| volume of distribution at steady state (Vss) | Vss | 0.27 | l/kg |
| Total plasma clearance (Cltot) | CLnorm | 11.7 | ml/min kg(-1) |
| t1/2alpha | t1/2α | 0.05 | h |
| t1/2beta | t1/2β | 0.38 | h |
| t1/2gamma | t1/2γ | 2.4 | h |
| Terminal elimination phase accounted for | AUC%ext | 9 | % of the total area under the plasma concentration-time curve (AUC) |
| AUC | AUC | 409 | ng h/ml |
| recovery of free and conjugated unchanged 13C-entacapone in urine | fe | 38.1 | % of the i.v. |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.095). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for entacapone's clearance — all 9 extracted parameters describe entacapone / 13C-entacapone, not entacapone; t6_deviations.**

The model was built, but entacapone's clearance had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — entacapone / 13C-entacapone: V 0.08 l/kg, Vss 0.27 l/kg, CLnorm 11.7 ml/min kg(-1), t1/2α 0.05 h, t1/2β 0.38 h, t1/2γ 2.4 h, AUC%ext 9 % of the total area under the plasma concentration-time curve (AUC), AUC 409 ng h/ml, … (+1).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has entacapone (13C-entacapone i.v.; unlabelled entacapone oral), the second reading Entacapone; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Volume of the central compartment (Vc) | `Q61` · V | 0.08 | l/kg | 0.0056 | m3 | l/kg | exact (1) | Heikkinen_2001:abstract |
| volume of distribution at steady state (Vss) | `Q65` · Vss | 0.27 | l/kg | 0.0189 | m3 | l/kg | llm_corrected (0.6) | Heikkinen_2001:abstract |
| Total plasma clearance (Cltot) | `Q354` · CLnorm | 11.7 | ml/min kg(-1) | 1.365e-05 | m3/s | ml/(min·kg) | llm_corrected (0.6) | Heikkinen_2001:abstract |
| t1/2alpha | `Q59` · t1/2α | 0.05 | h | 180 | s | h | half_life_rule (0.95) | Heikkinen_2001:abstract |
| t1/2beta | `Q60` · t1/2β | 0.38 | h | 1368 | s | h | half_life_rule (0.95) | Heikkinen_2001:abstract |
| t1/2gamma | `Q89` · t1/2γ | 2.4 | h | 8640 | s | h | half_life_rule (0.95) | Heikkinen_2001:abstract |
| Terminal elimination phase accounted for | `Q84` · AUC%ext | 9 | % of the total area under the plasma concentration-time curve (AUC) | 0.09 |  | %·area·auc·concentration·curve·of·plasma·the^2·time·total·under | llm (0.6) | Heikkinen_2001:abstract |
| AUC | `Q88` · AUC | 409 | ng h/ml | 1.472 | kg*s/m3 | (h·ng)/ml | exact (1) | Heikkinen_2001:abstract |
| recovery of free and conjugated unchanged 13C-entacapone in urine | `Q44` · fe | 38.1 | % of the i.v. | 0.381 |  | %·i·of·the·v | llm (0.6) | Heikkinen_2001:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: '% of the total area under the plasma concentration-time curve (AUC)' (AUC%ext)
- unit_dimension_unknown: '% of the i.v.' (fe)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=entacapone / 13C-entacapone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Volume of the central compartment (Vc)' is the general volume)
- status held at "Needs review" — not promoted
- molar mass: none found for 'entacapone / 13C-entacapone' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Heikkinen_2001_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.095 (2/21 fields) | 19 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc]` |  | 409 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc]` | 409 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[recovery of free and conjugated unchanged 13c-entacapone in urine]` |  | 38.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[recovery of free and conjugated unchanged 13c-entacapone in urine]` | 38.1 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2alpha]` |  | 0.05 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2alpha]` | 0.05 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2beta]` |  | 0.38 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2beta]` | 0.38 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2gamma]` |  | 2.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2gamma]` | 2.4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[terminal elimination phase accounted for]` | 9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[total plasma clearance]` |  | 11.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[total plasma clearance]` | 11.7 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution at steady state]` |  | 0.27 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution at steady state]` | 0.27 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of the central compartment]` |  | 0.08 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of the central compartment]` | 0.08 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | entacapone (13C-entacapone i.v.; unlabelled entacapone oral) | Entacapone | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | entacapone / 13C-entacapone | Entacapone | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Heikkinen_2001:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Heikkinen_2001:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Heikkinen_2001:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Heikkinen_2001:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Heikkinen_2001:abstract'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Heikkinen_2001:abstract'] |
| C5_dimension_Q89 | pass | [time] |  | ['Heikkinen_2001:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.6 L | ['Heikkinen_2001:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 18.9 L | ['Heikkinen_2001:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | pass | 1 scholar param(s) emitted or defaulted | 1 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bentacapone%5D%20Entacapone_Heikkinen2001_reference&body=Drug%3A%20entacapone%0ARecord%3A%20Entacapone_Heikkinen2001_reference%0APaper%3A%20Heikkinen_2001%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_entacapone/Entacapone_Heikkinen2001_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 04:30 UTC</sub>
