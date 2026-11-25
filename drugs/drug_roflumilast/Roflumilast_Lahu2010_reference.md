<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D05A&quot;,&quot;href&quot;:&quot;atc/D05A.md&quot;},{&quot;label&quot;:&quot;roflumilast&quot;,&quot;href&quot;:&quot;drugs/drug_roflumilast/&quot;},{&quot;label&quot;:&quot;Lahu_2010 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# roflumilast — `Roflumilast_Lahu2010_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume; cL has no unit.

<div class="pk-model-meta" hidden drug="roflumilast" model-id="Roflumilast_Lahu2010_reference" status="needs_review" stale="false" population="healthy adults and patients with moderate-to-severe COPD" measured-compound="roflumilast and roflumilast N-oxide" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Lahu G, Hünnemeyer A, Diletti E, Elmlinger M, Ruth P, Zech K et al. Population pharmacokinetic modelling of roflumilast and roflumilast N-oxide by total phosphodiesterase-4 inhibitory activity and development of a population pharmacodynamic-adverse event model. Clinical pharmacokinetics 49(9):589–606 (2010).
  ·  DOI: [10.2165/11536600-000000000-00000](https://doi.org/10.2165/11536600-000000000-00000)

## Population and dosing

**Population:** healthy adults and patients with moderate-to-severe COPD · condition healthy and COPD · age group adult.

**Dosing:** 250, 500 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed roflumilast, measured roflumilast and roflumilast N-oxide.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| clearance ... in healthy subjects | CL | 10.5 | L h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.429), qwen3.8-27b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; cL has no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL), so that value has no SI equivalent. None of the extracted parameters is roflumilast's own; they describe roflumilast and roflumilast N-oxide. Extracted — roflumilast and roflumilast N-oxide: CL 10.5 L h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has roflumilast and roflumilast N-oxide, the second reading roflumilast; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| clearance ... in healthy subjects | `Q22` · CL | 10.5 | L h | L h | boundary (0.8) | Lahu_2010:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- salvaged Q22 ('clearance ... in healthy subjects'=10.5) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=roflumilast and roflumilast N-oxide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'roflumilast and roflumilast N-oxide' ('roflumilast and roflumilast N-oxide') — left in mass units
- molar mass: none found for 'roflumilast and roflumilast N-oxide' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 1, 2
- table Lahu_2010_table_1: unbound_uncertainty
- table Lahu_2010_table_1: missing_label
- table Lahu_2010_table_1: unparsed_numeric_cell
- table Lahu_2010_table_2: unbound_uncertainty
- table Lahu_2010_table_2: unparsed_numeric_cell

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.429 (3/7 fields) | 4 |
| `qwen3.8-27b` | not confirmed | 0.6 (3/5 fields) | 2 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clearance ... in healthy subjects]` | 10.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f rel]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical clearance in copd patients]` |  | 6.36 | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | roflumilast and roflumilast N-oxide | roflumilast | mismatch |
| `qwen3.8-27b` | `parameters[f rel]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `screen.primary_analyte` | roflumilast and roflumilast N-oxide | roflumilast, roflumilast N-oxide | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | fail |  |  |  |  |  |
| C2_base_Q22 | pass | 10.5 | 10.5 | 1 | 0.05 | footnote reference category |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | L h |  |  | ['Lahu_2010:discussion_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.5 |  |  | ['Lahu_2010:discussion_prose'] |
| C8_topology | pass |  |  |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Broflumilast%5D%20Roflumilast_Lahu2010_reference&body=Drug%3A%20roflumilast%0ARecord%3A%20Roflumilast_Lahu2010_reference%0APaper%3A%20Lahu_2010%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_roflumilast/Roflumilast_Lahu2010_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 14:49 UTC</sub>
