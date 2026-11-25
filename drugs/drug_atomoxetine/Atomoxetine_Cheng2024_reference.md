<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;atomoxetine&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/&quot;},{&quot;label&quot;:&quot;Cheng_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atomoxetine_Li2012_reference&quot;,&quot;label&quot;:&quot;Li_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/Atomoxetine_Li2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Tobin2026_reference&quot;,&quot;label&quot;:&quot;Tobin_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/Atomoxetine_Tobin2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pgx_Tobin_2026_CYP2D6_Q27&quot;,&quot;label&quot;:&quot;Tobin_2026 \u00b7 CYP2D6&quot;,&quot;group&quot;:&quot;PGx&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/pgx_Tobin_2026_CYP2D6_Q27.md&quot;,&quot;status&quot;:&quot;Simulated \u00b7 quantitative&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atomoxetine — `Atomoxetine_Cheng2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="atomoxetine" model-id="Atomoxetine_Cheng2024_reference" status="needs_review" stale="false" population="children and adolescents with ADHD" measured-compound="atomoxetine" parameterization="apparent" topology="general_linear"></div>

## Citation
Cheng S, Al-Kofahi M, Leeder JS, Brown JT. Population Pharmacokinetic Analysis of Atomoxetine and its Metabolites in Children and Adolescents with Attention-Deficit/Hyperactivity Disorder. Clinical pharmacology and therapeutics 115(5):1033–1043 (2024).
  ·  DOI: [10.1002/cpt.3155](https://doi.org/10.1002/cpt.3155)

## Population and dosing

**Population:** children and adolescents with ADHD · condition ADHD · age group mixed · n = 23.

**Dosing:** 0.5, 40 mg/kg (for &lt; 70 kg) and mg (for &gt; 70 kg), oral, single.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| cyp2d6_as_le_0.5 | cyp2d6_as_le_0.5 | 1 | unitless |  |
| KATR (1/hour) | kabs | 7.35 | 1/hour | 8 |
| KELR (1/hour) | kel | 0.00211 | 1/hour | 19 |
| BASE (unitless) | equation variable | 0.0284 | unitless | 14 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. A reported unit could not be converted (cyp2d6_as_le_0.5 and equation variable), so that value has no SI equivalent. None of the extracted parameters is atomoxetine's own; they describe 4-hydroxyatomoxetine. Extracted — 4-hydroxyatomoxetine: kabs 7.35 1/hour, kel 0.00211 1/hour.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has atomoxetine → 4-hydroxyatomoxetine (metabolism); atomoxetine → n-desmethylatomoxetine (metabolism); atomoxetine → 2-carboxymethylatomoxetine (metabolism), the second reading none; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| cyp2d6_as_le_0.5 | `Q900` · cyp2d6_as_le_0.5 | 1 | unitless |  |  | unitless |  |  | Cheng_2024_table_p5_1:row2:col1 |
| KATR (1/hour) | `Q49` · kabs | 7.35 | 1/hour | 0.002042 | 1/s | 1/h | 8 | exact (1) | Cheng_2024_table_p5_1:row13:col1 |
| KELR (1/hour) | `Q47` · kel | 0.00211 | 1/hour | 5.861e-07 | 1/s | 1/h | 19 | exact (1) | Cheng_2024_table_p5_1:row14:col1, Cheng_2024_table_p5_1:row37:col1 |
| BASE (unitless) | `Q900` · equation variable | 0.0284 | unitless |  |  | unitless | 14 | llm (0.6) | Cheng_2024_table_p5_1:row27:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| V/F (L) | Q290 | exact |
| Q/F (L/hour) | Q69 | exact |
| V2/F (L) | Q82 | exact |
| CL/F (L/hour) | Q27 | exact |
| theta_q22_cyp2d6 | Q900 |  |

## Departures & gaps

**Interpretation flags:**
- covariate level 'CYP2D6 AS ≤ 0.5' → Q900:cyp2d6_as_le_0.5 = 1 (linear_fractional on the model)
- dropped unlinked row (NIL): 'EX (unitless)' — extend the ontology if this is a real PK parameter (source ['Cheng_2024_table_p5_1:row26:col1'])
- unit_dimension_unknown: 'unitless' (equation variable)
- unit inherited for cyp2d6_as_le_0.5 (Q900): 'unitless' from a same-Q-code sibling (this row's label had no unit)
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atomoxetine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 3 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment (site presystemic: 'These differences in ATX bioavailability between CYP2D6 AS groups are consistent with the literature, and are primarily ')
- pharmacogenetic covariate 'cyp2d6_as_le_0.5' (cyp2d6) — PGx domain
- pharmacogenetic covariate 'theta_q22_cyp2d6' (cyp2d6) — PGx domain
- status held at "Needs review" — not promoted
- row roles: per-genotype parameters — typical value from the reference group: CYP2D6 AS ≤ 0.5, CYP2D6 AS 0.5
- row roles (LLM): model_class=compartmental; 13/13 row label(s) assigned, 16 linked by role; re-tagged parent→4-hydroxyatomoxetine ×18
- molar mass: no plausible PubChem entry for '2-carboxymethylatomoxetine' ('2-carboxymethylatomoxetine') — left in mass units
- molar mass: none found for '2-carboxymethylatomoxetine' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (4/20 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['atomoxetine', '4-hydroxyatomoxetine', 'metabolism'], ['atomoxetine', 'n-desmethylatomoxetine', 'metabolism'], ['atomoxetine', '2-carboxymethylatomoxetine', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[base]` | 0.0284 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[katr]` |  | 7.35 | only_one_extracted |
| `gpt-oss-120b` | `parameters[katr]` | 7.35 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kelr]` |  | 0.00211 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kelr]` | 0.00211 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_cyp2d6]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_cyp2d6]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` |  |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Cheng_2024_table_p5_1:row24:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Cheng_2024_table_p5_1:row10:col1', 'Cheng_2024_table_p5_1:row21:col1', 'Cheng_2024_table_p5_1:row34:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Cheng_2024_table_p5_1:row14:col1', 'Cheng_2024_table_p5_1:row37:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Cheng_2024_table_p5_1:row13:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Cheng_2024_table_p5_1:row11:col1', 'Cheng_2024_table_p5_1:row22:col1', 'Cheng_2024_table_p5_1:row35:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Cheng_2024_table_p5_1:row12:col1', 'Cheng_2024_table_p5_1:row23:col1', 'Cheng_2024_table_p5_1:row36:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batomoxetine%5D%20Atomoxetine_Cheng2024_reference&body=Drug%3A%20atomoxetine%0ARecord%3A%20Atomoxetine_Cheng2024_reference%0APaper%3A%20Cheng_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atomoxetine/Atomoxetine_Cheng2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 11:06 UTC</sub>
