<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Sodium perchlorate&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_perchlorate/&quot;},{&quot;label&quot;:&quot;Eder_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumPerchlorate_Kotzerke1998_reference&quot;,&quot;label&quot;:&quot;Kotzerke_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_perchlorate/SodiumPerchlorate_Kotzerke1998_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumPerchlorate_Yu2002_reference&quot;,&quot;label&quot;:&quot;Yu_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_perchlorate/SodiumPerchlorate_Yu2002_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumPerchlorate_Eder2020_reference&quot;,&quot;label&quot;:&quot;Eder_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_perchlorate/SodiumPerchlorate_Eder2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sodium perchlorate — `SodiumPerchlorate_Eder2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 192, model 192).

<div class="pk-model-meta" hidden drug="Sodium perchlorate" model-id="SodiumPerchlorate_Eder2020_reference" status="needs_review" stale="false" population="human volunteers" measured-compound="Perchlorate" parameterization="mechanistic" topology="1C"></div>

## Citation
Eder S, Hermann C, Lamkowski A, Kinoshita M, Yamamoto T, Abend M et al. A comparison of thyroidal protection by stable iodine or perchlorate in the case of acute or prolonged radioiodine exposure. Archives of toxicology 94(9):3231–3247 (2020).
  ·  DOI: [10.1007/s00204-020-02809-z](https://doi.org/10.1007/s00204-020-02809-z)

## Population and dosing

**Population:** human volunteers · condition healthy · age group adult.

**Dosing:** 10, 100, 500, 1000 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed Sodium perchlorate, measured Perchlorate.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_sodium_perchlorate/SodiumPerchlorate_Eder2020_reference/SodiumPerchlorate_Eder2020_reference.svg" alt="SodiumPerchlorate_Eder2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| estimated approximate volume of distribution | V | 16 | l |
| decay constant for I-131 | kel | 0.086625 | day−1 |
| half-life of I-131 | t1/2z | 8 | days |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 192, model 192).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. None of the extracted parameters is sodium perchlorate's own; they describe Perchlorate. Extracted — Perchlorate: V 16 l, kel 0.0866 day−1, t1/2z 8 days.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| estimated approximate volume of distribution | `Q61` · V | 16 | l | 0.016 | m3 | L | boundary (0.8) | Eder_2020:other_prose |
| decay constant for I-131 | `Q47` · kel | 0.086625 | day−1 | 1.003e-06 | 1/s | 1/h | toxin_unit_relink (0.85) | Eder_2020:other_prose |
| half-life of I-131 | `Q57` · t1/2z | 8 | days | 6.912e+05 | s | h | toxin_unit_relink (0.85) | Eder_2020:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '1 × 50 mg' — extend the ontology if this is a real PK parameter (source ['Tab3:row1:col1', 'Tab3:row1:col2'])
- dropped unlinked row (NIL): '1 × 50 mg' — extend the ontology if this is a real PK parameter (source ['Tab3:row1:col3'])
- dropped unlinked row (NIL): '2 × 50 mg' — extend the ontology if this is a real PK parameter (source ['Tab3:row2:col1', 'Tab3:row2:col2'])
- dropped unlinked row (NIL): '2 × 50 mg' — extend the ontology if this is a real PK parameter (source ['Tab3:row2:col3'])
- dropped unlinked row (NIL): '1 × 100 mg' — extend the ontology if this is a real PK parameter (source ['Tab3:row3:col1', 'Tab3:row3:col2'])
- dropped unlinked row (NIL): '1 × 100 mg' — extend the ontology if this is a real PK parameter (source ['Tab3:row3:col3'])
- dropped unlinked row (NIL): '2 × 100 mg' — extend the ontology if this is a real PK parameter (source ['Tab3:row4:col1', 'Tab3:row4:col2'])
- dropped unlinked row (NIL): '2 × 100 mg' — extend the ontology if this is a real PK parameter (source ['Tab3:row4:col3'])
- dropped unlinked row (NIL): '1 × 200 mg' — extend the ontology if this is a real PK parameter (source ['Tab3:row5:col1', 'Tab3:row5:col2'])
- dropped unlinked row (NIL): '1 × 200 mg' — extend the ontology if this is a real PK parameter (source ['Tab3:row5:col3'])
- dropped unlinked row (NIL): '1 × 500 mg' — extend the ontology if this is a real PK parameter (source ['Tab3:row6:col1', 'Tab3:row6:col2'])
- dropped unlinked row (NIL): '1 × 500 mg' — extend the ontology if this is a real PK parameter (source ['Tab3:row6:col3'])
- dropped unlinked row (NIL): '2 × 500 mg' — extend the ontology if this is a real PK parameter (source ['Tab3:row7:col1', 'Tab3:row7:col2'])
- dropped unlinked row (NIL): '2 × 500 mg' — extend the ontology if this is a real PK parameter (source ['Tab3:row7:col3'])
- dropped unlinked row (NIL): '1 × 1000 mg' — extend the ontology if this is a real PK parameter (source ['Tab3:row8:col1', 'Tab3:row8:col2'])
- dropped unlinked row (NIL): '1 × 1000 mg' — extend the ontology if this is a real PK parameter (source ['Tab3:row8:col3'])
- NIL: refused to back-fill base 'E' from footnote/prose loose number None (source ['Tab3:footnote']); the table cell was unparseable — needs review
- table mostly unlinked (16/16 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q61 ('estimated approximate volume of distribution'=16) from results prose — parameter table was unreadable
- salvaged Q47 ('decay constant for I-131'=0.086625) from results prose — parameter table was unreadable
- salvaged Q57 ('half-life of I-131'=8) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Perchlorate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- review gap-fill skipped: this record measures 'Perchlorate', not sodium_perchlorate — the review values are the parent's
- derived CL=0.05775 L/h from Ke × V = CL (Q47 × Q61); not separately reported

**Extraction notes:**
- table Tab3: units_need_context

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 16 L | ['Eder_2020:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_derived_parameters |  | pass | 1 deterministic parameter derivation(s) emitted | derived values and bindings match the report |  | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable |  | pass | C_central (measured=Perchlorate) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_t_half_terminal | reference | pass | 192 | 192 | 1 | days→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 13.13 | 192 | 14.63 | h→SI vs simulated h |
| T1_tmax | reference | skipped | 7.48 | 0.1833 |  | unresolved time unit 'µmol l−1 day−1' |
| T1_tmax | reference | skipped |  | 0.1833 |  | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_sodium_perchlorate/SodiumPerchlorate_Eder2020_reference/SodiumPerchlorate_Eder2020_reference_modelica.zip" download>SodiumPerchlorate_Eder2020_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_sodium_perchlorate/SodiumPerchlorate_Eder2020_reference/SodiumPerchlorate_Eder2020_reference_fmi.zip" download>SodiumPerchlorate_Eder2020_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.09945 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.604e-08 | m3/s |
| input | model | `VdPerKg` | 0.0002286 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Eder S, Hermann C, Lamkowski A, Kinoshita M, Yamamoto T, Abend M et al. A comparison of thyroidal protection by stable iodine or perchlorate in the case of acute or prolonged radioiodine exposure. Archives of toxicology 94(9):3231–3247 (2020). [doi:10.1007/s00204-020-02809-z](https://doi.org/10.1007/s00204-020-02809-z)

**This record:** Pharmacolibrary, model `SodiumPerchlorate_Eder2020_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_sodium_perchlorate/SodiumPerchlorate_Eder2020_reference>

```bibtex
@misc{pharmacolibrary_SodiumPerchlorateEder2020reference,
  title  = {{Pharmacolibrary model SodiumPerchlorate_Eder2020_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_sodium_perchlorate/SodiumPerchlorate_Eder2020_reference},
  note   = {Parameters from doi:10.1007/s00204-020-02809-z},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. Doses in the paper: 10, 100, 500, 1000 mg.

<dbs-fmusim paramsurl="drugs/toxin_sodium_perchlorate/SodiumPerchlorate_Eder2020_reference/SodiumPerchlorate_Eder2020_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_sodium_perchlorate/SodiumPerchlorate_Eder2020_reference/SodiumPerchlorate_Eder2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `SodiumPerchlorate_Eder2020_reference_params.json` · controls `SodiumPerchlorate_Eder2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_perchlorate%5D%20SodiumPerchlorate_Eder2020_reference&body=Drug%3A%20sodium_perchlorate%0ARecord%3A%20SodiumPerchlorate_Eder2020_reference%0APaper%3A%20Eder_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sodium_perchlorate/SodiumPerchlorate_Eder2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 07:52 UTC</sub>
