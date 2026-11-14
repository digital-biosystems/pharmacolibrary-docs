<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Spironolactone&quot;,&quot;href&quot;:&quot;drugs/toxin_spironolactone/&quot;},{&quot;label&quot;:&quot;Soliman_2025 \u00b7 spironolactone_sp_model_value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Spironolactone_Manson2025_reference&quot;,&quot;label&quot;:&quot;Manson_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_spironolactone/Spironolactone_Manson2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Spironolactone — `Spironolactone_Soliman2025_spironolactone_sp_model_value`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Spironolactone" model-id="Spironolactone_Soliman2025_spironolactone_sp_model_value" status="needs_review" stale="false" population="healthy adults (model development) and neonates and infants (pediatric application)" measured-compound="Spironolactone; canrenone; 7alpha thio-methyl spironolactone" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Soliman A, Pippa LF, Lass J, Leroux S, Vozmediano V, de Moraes NV. Model-Informed Dose Optimization of Spironolactone in Neonates and Infants. Pharmaceuticals (Basel, Switzerland) 18(3) (2025).
  ·  DOI: [10.3390/ph18030355](https://doi.org/10.3390/ph18030355)

## Population and dosing

**Population:** healthy adults (model development) and neonates and infants (pediatric application) · condition healthy · age group mixed.

**Dosed compound ≠ measured compound:** dosed Spironolactone, measured Spironolactone; canrenone; 7alpha thio-methyl spironolactone.

## Model

**Structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MW (g/mol) | MW | 416.6 | g/mol |
| fu adult | fu | 0.14556 |  |
| Vss (L/Kg) | Vss | 2.81 | L/Kg |
| Kp scalar | Kp | 1 |  |
| Fbirth | fm | 0.205 |  |
| Adultmax | equation variable | 1 |  |
| CLoral | CL | 200 | mg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.385). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has Spironolactone; canrenone; 7alpha thio-methyl spironolactone, the second reading Spironolactone; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| MW (g/mol) | `Q374` · MW | 416.6 | g/mol | 0.4166 |  | g/(m·ol) | exact (1) | Soliman_2025_table_3:row0:col1 |
| fu adult | `Q46` · fu | 0.14556 |  | 0.1456 |  |  | llm_confirmed (0.6) | Soliman_2025_table_3:row4:col1 |
| Vss (L/Kg) | `Q65` · Vss | 2.81 | L/Kg | 0.1967 | m3 | l/kg | exact (1) | Soliman_2025_table_3:row12:col1 |
| Kp scalar | `Q410` · Kp | 1 |  |  |  |  | llm_confirmed (0.6) | Soliman_2025_table_3:row14:col1 |
| Fbirth | `Q45` · fm | 0.205 |  | 0.205 |  |  | llm (0.6) | Soliman_2025_table_4:row4:col1 |
| Adultmax | `Q900` · equation variable | 1 |  | 1 |  |  | llm (0.6) | Soliman_2025_table_4:row5:col1 |
| CLoral | `Q22` · CL | 200 | mg |  |  | mg | route_fold (0.9) | Soliman_2025:prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Metabolism | Q51 | llm |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'logP' — extend the ontology if this is a real PK parameter (source ['Soliman_2025_table_3:row2:col1'])
- dropped PD-category row 'B/P' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Soliman_2025_table_3:row3:col1'])
- dropped duplicate Q46 ('fu infants', value '0.201') — already have one for this compound
- dropped duplicate Q46 ('fu neonates', value '0.226') — already have one for this compound
- dropped duplicate Q46 ('fu, gut', value '1') — already have one for this compound
- dropped unlinked row (NIL): 'Age50' — extend the ontology if this is a real PK parameter (source ['Soliman_2025_table_4:row6:col1'])
- dropped unlinked row (NIL): 'Age cap' — extend the ontology if this is a real PK parameter (source ['Soliman_2025_table_4:row8:col1'])
- salvaged Q22 ('CLoral'=200) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Spironolactone; canrenone; 7alpha thio-methyl spironolactone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 3 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'spironolactone (sp) model value' subgroup of Soliman_2025 (paper reports 3 populations: 7α-thiomethyl spironolactone (tms) model value, canrenone (can) model value, spironolactone (sp) model value)
- row roles (LLM): model_class=pbpk; 0/14 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'Canrenone (CAN)' — its concentrations stay mass-only
- molar mass: none found for '7alpha thio-methyl spironolactone (TMS)' — its concentrations stay mass-only
- molar mass: none found for 'Spironolactone; canrenone; 7alpha thio-methyl spironolactone' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 3, 4
- table Soliman_2025_table_3: unbound_uncertainty
- toxin: the located table(s) gave no kinetic value — 10 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.385 (5/13 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['spironolactone', 'canrenone', 'ces1-mediated hydrolysis'], ['spironolactone', '7alpha thio-methyl spironolactone (tms)', 'ces1-mediated hydrolysis'], ['canrenone (can)', 'canrenoic acid', 'pon3-catalyzed hydrolysis']] | [['spironolactone', 'canrenone', 'metabolism via ces1'], ['spironolactone', '7α thio-methyl spironolactone', 'metabolism via ces1']] | mismatch |
| `gpt-oss:120b` | `parameters[adultmax]` | 1 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[b/p]` |  | 0.58 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cloral]` | 200 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[fbirth]` | 0.205 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[kp scalar]` | 1 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[metabolism]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `screen.primary_analyte` | Spironolactone; canrenone; 7alpha thio-methyl spironolactone | Spironolactone | mismatch |

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
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Soliman_2025_table_3:row0:col1'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Soliman_2025_table_3:row12:col1'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | mg | ['Soliman_2025:prose'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 200 | ['Soliman_2025:prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q65 | pass | volume within physiological range | 197 L | ['Soliman_2025_table_3:row12:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bspironolactone%5D%20Spironolactone_Soliman2025_spironolactone_sp_model_value&body=Drug%3A%20spironolactone%0ARecord%3A%20Spironolactone_Soliman2025_spironolactone_sp_model_value%0APaper%3A%20Soliman_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_spironolactone/Spironolactone_Soliman2025_spironolactone_sp_model_value%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 19:24 UTC</sub>
