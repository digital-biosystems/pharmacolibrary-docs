<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Fludarabine&quot;,&quot;href&quot;:&quot;drugs/toxin_fludarabine/&quot;},{&quot;label&quot;:&quot;Mseddi_2026 \u00b7 flu_atp&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fludarabine_Knebel1998_reference&quot;,&quot;label&quot;:&quot;Knebel_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fludarabine/Fludarabine_Knebel1998_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fludarabine_Port2006_reference&quot;,&quot;label&quot;:&quot;Port_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fludarabine/Fludarabine_Port2006_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fludarabine_sterborg2015_reference&quot;,&quot;label&quot;:&quot;\u00d6sterborg_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fludarabine/Fludarabine_sterborg2015_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Fludarabine — `Fludarabine_Mseddi2026_flu_atp`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Kel and CLNR have no unit; disposition incomplete — retention function missing λ1 or its half-life — TK_Retention cannot be filled.

<div class="pk-model-meta" hidden drug="Fludarabine" model-id="Fludarabine_Mseddi2026_flu_atp" status="needs_review" stale="false" population="pediatric HSCT patients (model trained in healthy European Caucasian adults and East Asian pediatric patients)" measured-compound="fludarabine (Flu)" parameterization="mechanistic" topology="retention"></div>

## Citation
Mseddi M, Nath C, Ben Hassine K, Mlakar V, Gloor Y, Gonzales F et al. Physiologically Based Pharmacokinetic Virtual Twin Approach for Fludarabine Dosing in Pediatric Hematopoietic Stem Cell Transplantation. CPT: pharmacometrics & systems pharmacology 15(3):e70218 (2026).
  ·  DOI: [10.1002/psp4.70218](https://doi.org/10.1002/psp4.70218)

## Population and dosing

**Population:** pediatric HSCT patients (model trained in healthy European Caucasian adults and East Asian pediatric patients) · condition pediatric hematopoietic stem cell transplantation (lymphodepleting chemotherapy); adult validation includes B-cell chronic lymphocytic leukemia · age group mixed · n = 28 (virtual twin cohort); plus 43 pediatric and adult validation datasets.

**Dosed compound ≠ measured compound:** dosed fludarabine monophosphate (Flu-AMP), measured fludarabine (Flu).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k | kel | 32 |  |
| nonrenal clearance | CLNR | 47 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kel and CLNR have no unit; disposition incomplete — retention function missing λ1 or its half-life — TK_Retention cannot be filled.**

Without a unit the value cannot be converted, so the model cannot use it. None of the extracted parameters is fludarabine's own; they describe fludarabine (Flu). Extracted — fludarabine (Flu): kel 32, CLNR 47.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has fludarabine (Flu), the second reading Fludarabine; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| k | `Q47` · kel | 32 |  | 1/h | exact (1) | Mseddi_2026:prose |
| nonrenal clearance | `Q79` · CLNR | 47 |  | L/h | exact (1) | Mseddi_2026:prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Log P' — extend the ontology if this is a real PK parameter (source ['Mseddi_2026_table_S8:row3:col3'])
- dropped unlinked row (NIL): 'Red blood cells to plasma permeability' — extend the ontology if this is a real PK parameter (source ['Mseddi_2026_table_S8:row11:col3'])
- salvaged Q47 ('k'=32) from results prose — parameter table was unreadable
- salvaged Q79 ('nonrenal clearance'=47) from results prose — parameter table was unreadable
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 1 column 274 (char 273)) — units left missing
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fludarabine (Flu)
- toxin: 3 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- population split: 'flu-atp' subgroup of Mseddi_2026 (paper reports 5 populations: flu, flu-atp, flu-hx, observed value, predicted value)
- row roles (LLM): model_class=pbpk; 0/15 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'fludarabine (Flu)' — its concentrations stay mass-only
- molar mass: none found for 'fludarabine-hypoxanthine (Flu-Hx)' — its concentrations stay mass-only
- molar mass: none found for 'fludarabine triphosphate (Flu-ATP)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table psp470218-tbl-0001: representations disagree; selected evidence retained, not merged
- table Mseddi_2026_table_S8: unknown_column_role
- table Mseddi_2026_table_S8: missing_label
- table Mseddi_2026_table_S8: units_need_context
- table Mseddi_2026_table_S8: ragged_grid
- table Mseddi_2026_table_S8: unparsed_numeric_cell
- companion parameter table S8 transcribed (32 record(s))
- LLM selected parameter table(s) 1, S8
- toxin: the located table(s) gave no kinetic value — 7 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.429 (3/7 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[k]` | 32 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[nonrenal clearance]` | 47 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[red blood cells to plasma permeability]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `screen.primary_analyte` | fludarabine (Flu) | Fludarabine | mismatch |

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
| C5_unit_missing_Q47 | fail | 1 / [time] |  | ['Mseddi_2026:prose'] |
| C5_unit_missing_Q79 | fail | [length] ** 3 / [time] |  | ['Mseddi_2026:prose'] |
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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_fludarabine/Fludarabine_Mseddi2026_flu_atp/Fludarabine_Mseddi2026_flu_atp_matlab.zip" download>Fludarabine_Mseddi2026_flu_atp_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_fludarabine/Fludarabine_Mseddi2026_flu_atp/Fludarabine_Mseddi2026_flu_atp_sbml.zip" download>Fludarabine_Mseddi2026_flu_atp_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_fludarabine/Fludarabine_Mseddi2026_flu_atp/Fludarabine_Mseddi2026_flu_atp_cellml.zip" download>Fludarabine_Mseddi2026_flu_atp_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Mseddi M, Nath C, Ben Hassine K, Mlakar V, Gloor Y, Gonzales F et al. Physiologically Based Pharmacokinetic Virtual Twin Approach for Fludarabine Dosing in Pediatric Hematopoietic Stem Cell Transplantation. CPT: pharmacometrics & systems pharmacology 15(3):e70218 (2026). [doi:10.1002/psp4.70218](https://doi.org/10.1002/psp4.70218)

**This record:** Pharmacolibrary, model `Fludarabine_Mseddi2026_flu_atp`. <https://pharmacolibrary.github.io/#/drugs/toxin_fludarabine/Fludarabine_Mseddi2026_flu_atp>

```bibtex
@misc{pharmacolibrary_FludarabineMseddi2026fluatp,
  title  = {{Pharmacolibrary model Fludarabine_Mseddi2026_flu_atp}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_fludarabine/Fludarabine_Mseddi2026_flu_atp},
  note   = {Parameters from doi:10.1002/psp4.70218},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfludarabine%5D%20Fludarabine_Mseddi2026_flu_atp&body=Drug%3A%20fludarabine%0ARecord%3A%20Fludarabine_Mseddi2026_flu_atp%0APaper%3A%20Mseddi_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_fludarabine/Fludarabine_Mseddi2026_flu_atp%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 05:11 UTC</sub>
