<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Zinc oxide&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_oxide/&quot;},{&quot;label&quot;:&quot;Konduru_2014 \u00b7 zno&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ZincOxide_Creutzenberg2022_reference&quot;,&quot;label&quot;:&quot;Creutzenberg_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_oxide/ZincOxide_Creutzenberg2022_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ZincOxide_Watson2015_reference&quot;,&quot;label&quot;:&quot;Watson_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_oxide/ZincOxide_Watson2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ZincOxide_Yu2021_b_zno&quot;,&quot;label&quot;:&quot;Yu_2021_b_zno&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_oxide/ZincOxide_Yu2021_b_zno.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ZincOxide_Yu2021_n_zno&quot;,&quot;label&quot;:&quot;Yu_2021_n_zno&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_oxide/ZincOxide_Yu2021_n_zno.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ZincOxide_Yu2021_zn_ions&quot;,&quot;label&quot;:&quot;Yu_2021_zn_ions&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_oxide/ZincOxide_Yu2021_zn_ions.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Zinc oxide — `ZincOxide_Konduru2014_zno`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Only clearance was extracted — no volume; body_burden and CL have no unit.

<div class="pk-model-meta" hidden drug="Zinc oxide" model-id="ZincOxide_Konduru2014_zno" status="needs_review" stale="false" population="male rats" measured-compound="65Zn (radioactive zinc)" parameterization="mechanistic" topology="1C"></div>

## Citation
Konduru NV, Murdaugh KL, Sotiriou GA, Donaghey TC, Demokritou P, Brain JD et al. Bioavailability, distribution and clearance of tracheally-instilled and gavaged uncoated or silica-coated zinc oxide nanoparticles. Particle and fibre toxicology 11:44 (2014).
  ·  DOI: [10.1186/s12989-014-0044-6](https://doi.org/10.1186/s12989-014-0044-6)

## Population and dosing

**Population:** male rats · condition healthy · age group adult.

**Dosed compound ≠ measured compound:** dosed zinc oxide nanoparticles (uncoated and SiO2-coated), measured 65Zn (radioactive zinc).

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Blood | equation variable | 2.54 |  | 0.07 |
| Total recovered | body_burden | 87.78 |  | 2.35 |
| t1/2: 65ZnO | t1/2z | 0.3 | hours |  |
| clearance from the lungs over | CL | 28 | days |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; body_burden and CL have no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL), so that value has no SI equivalent. Extracted — zinc oxide: body_burden 87.8; 65Zn (radioactive zinc): t1/2z 0.3 hours, CL 28 days.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has zinc oxide nanoparticles (uncoated and SiO2-coated), the second reading Zinc oxide nanoparticles; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Blood | `Q900` · equation variable | 2.54 |  | 2.54 |  |  | 0.07 | llm (0.6) | Konduru_2014_table_1:row2:col1 |
| Total recovered | `Q414` · body_burden | 87.78 |  |  |  |  | 2.35 | llm (0.6) | Konduru_2014_table_1:row18:col1 |
| t1/2: 65ZnO | `Q57` · t1/2z | 0.3 | hours | 1080 | s | h |  | boundary (0.8) | Konduru_2014:other_prose |
| clearance from the lungs over | `Q22` · CL | 28 | days |  |  | days |  | boundary (0.8) | Konduru_2014:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Lungs' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_1:row1:col1'])
- dropped unlinked row (NIL): 'Lymph nodes' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_1:row3:col1'])
- dropped unlinked row (NIL): 'Bone marrow' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_1:row4:col1'])
- dropped unlinked row (NIL): 'Bone' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_1:row5:col1'])
- dropped unlinked row (NIL): 'Skin' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_1:row6:col1'])
- dropped unlinked row (NIL): 'Brain' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_1:row7:col1'])
- dropped unlinked row (NIL): 'Skeletal muscle' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_1:row8:col1'])
- dropped unlinked row (NIL): 'Testes' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_1:row9:col1'])
- dropped unlinked row (NIL): 'Kidneys' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_1:row10:col1'])
- dropped duplicate Q900 ('Spleen', value '0.50') — already have one for this compound
- dropped unlinked row (NIL): 'Heart' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_1:row12:col1'])
- dropped unlinked row (NIL): 'Liver' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_1:row13:col1'])
- dropped unlinked row (NIL): 'Stomach' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_1:row14:col1'])
- dropped unlinked row (NIL): 'Small intestine' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_1:row15:col1'])
- dropped unlinked row (NIL): 'Large intestine' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_1:row16:col1'])
- dropped unlinked row (NIL): 'Cecum' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_1:row17:col1'])
- salvaged Q57 ('t1/2: 65ZnO'=0.3) from results prose — parameter table was unreadable
- salvaged Q22 ('clearance from the lungs over'=28) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=65Zn (radioactive zinc)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'zno' subgroup of Konduru_2014 (paper reports 2 populations: sio 2 -coated zno, zno)
- molar mass: none found for '65Zn (radioactive zinc)' — its concentrations stay mass-only
- review gap-fill skipped: this record measures '65Zn (radioactive zinc)', not zinc_oxide — the review values are the parent's

**Extraction notes:**
- table Konduru_2014_table_1: units_need_context
- table Konduru_2014_table_1: unparsed_numeric_cell

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.375 (6/16 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[blood].parameter_id` | Q900 | Q54 | mismatch |
| `gpt-oss:120b` | `parameters[bone marrow]` |  | 3.37 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance from the lungs over]` | 28 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[liver]` |  | 12.23 | only_one_extracted |
| `gpt-oss:120b` | `parameters[lungs]` |  | 16.08 | only_one_extracted |
| `gpt-oss:120b` | `parameters[stomach]` |  | 1.01 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2: 65zno]` | 0.3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[total recovered].parameter_id` | Q414 | Q87 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | zinc oxide nanoparticles (uncoated and SiO2-coated) | Zinc oxide nanoparticles | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | 65Zn (radioactive zinc) | 65Zn | mismatch |

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
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | days | ['Konduru_2014:discussion_prose'] |
| C5_unit_missing_Q414 | fail | [mass] |  | ['Konduru_2014_table_1:row18:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 28 | ['Konduru_2014:discussion_prose'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzinc_oxide%5D%20ZincOxide_Konduru2014_zno&body=Drug%3A%20zinc_oxide%0ARecord%3A%20ZincOxide_Konduru2014_zno%0APaper%3A%20Konduru_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_zinc_oxide/ZincOxide_Konduru2014_zno%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 00:55 UTC</sub>
