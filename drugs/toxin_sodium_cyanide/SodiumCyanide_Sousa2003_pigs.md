<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Sodium cyanide&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_cyanide/&quot;},{&quot;label&quot;:&quot;Sousa_2003 \u00b7 pigs&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumCyanide_Thompson2012_reference&quot;,&quot;label&quot;:&quot;Thompson_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_cyanide/SodiumCyanide_Thompson2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumCyanide_Sousa2003_goats&quot;,&quot;label&quot;:&quot;Sousa_2003_goats&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_goats.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumCyanide_Sousa2003_pigs&quot;,&quot;label&quot;:&quot;Sousa_2003_pigs&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_pigs.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;SodiumCyanide_Sousa2003_rats&quot;,&quot;label&quot;:&quot;Sousa_2003_rats&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_rats.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sodium cyanide — `SodiumCyanide_Sousa2003_pigs`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Cmax and AUC have no unit.

<div class="pk-model-meta" hidden drug="Sodium cyanide" model-id="SodiumCyanide_Sousa2003_pigs" status="needs_review" stale="false" population="rats, pigs and goats" measured-compound="Cyanide" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Sousa AB, Manzano H, Soto-Blanco B, Górniak SL. Toxicokinetics of cyanide in rats, pigs and goats after oral dosing with potassium cyanide. Archives of toxicology 77(6):330–334 (2003).
  ·  DOI: [10.1007/s00204-003-0446-y](https://doi.org/10.1007/s00204-003-0446-y)

## Population and dosing

**Population:** rats, pigs and goats · condition oral dosing · age group adult · n = 54.

**Dosing:** 210 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed Potassium cyanide, measured Cyanide.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_pigs/SodiumCyanide_Sousa2003_pigs.svg" alt="SodiumCyanide_Sousa2003_pigs diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C max (lmol/l) | Cmax | 57.5 | lmol/l |
| T max (min) | tmax | 30 | min |
| t 1/2 b (h) | t1/2β | 0.54 | h |
| K el | kel | 1.28 | 1/h |
| Cl (ml/min per kg) | CL | 0.367 | ml/min per kg |
| Vd (l/kg) | V | 0.29 | l/kg |
| AUC (lmol.l/h) | AUC | 140.7 | lmol.l/h |
| T max (h) | tmax | 6 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Cmax and AUC have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Cmax and AUC), so that value has no SI equivalent. Extracted — sodium cyanide: Cmax 57.5 lmol/l, tmax 30 min, t1/2β 0.54 h, kel 1.28 1/h, CL 0.367 ml/min per kg, V 0.29 l/kg, AUC 141 lmol.l/h; Thiocyanate: tmax 6 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C max (lmol/l) | `Q32` · Cmax | 57.5 | lmol/l |  |  | m·ol | space_fold (0.95) | tab_0:row1:col2, Sousa_2003_table_2:row0:col2 |
| T max (min) | `Q56` · tmax | 30 | min | 1800 | s | min | space_fold (0.95) | tab_0:row2:col2 |
| t 1/2 b (h) | `Q60` · t1/2β | 0.54 | h | 1944 | s | h | llm_corrected (0.6) | tab_0:row3:col2, Sousa_2003_table_2:row2:col2 |
| K el | `Q47` · kel | 1.28 | 1/h | 0.0003556 | 1/s | 1/h | space_fold (0.95) | tab_0:row4:col2, Sousa_2003_table_2:row3:col2 |
| Cl (ml/min per kg) | `Q22` · CL | 0.367 | ml/min per kg | 4.282e-07 | m3/s | ml/(min·kg) | exact (1) | tab_0:row5:col2, Sousa_2003_table_2:row4:col2 |
| Vd (l/kg) | `Q61` · V | 0.29 | l/kg | 0.0203 | m3 | l/kg | exact (1) | tab_0:row6:col2, Sousa_2003_table_2:row5:col2 |
| AUC (lmol.l/h) | `Q88` · AUC | 140.7 | lmol.l/h |  |  | (l^2·m·ol)/h | exact (1) | tab_0:row7:col2, Sousa_2003_table_2:row6:col2 |
| T max (h) | `Q56` · tmax | 6 | h | 2.16e+04 | s | h | space_fold (0.95) | Sousa_2003_table_2:row1:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'lmol/l' (Cmax)
- unit_dimension_unknown: 'lmol.l/h' (AUC)
- implicit units: 'K el' → 1/h (from the printed half-life: 'K el = 1.28 and t 1/2 b (h) = 0.54 h: λ·t½ = ln2 only in 1/h')
- implicit units: 'C max (lmol/l)' — the LLM proposed 'umol/L', whose dimension does not fit Q32; left unset
- implicit units: 'AUC (lmol.l/h)' — the LLM proposed 'umol·L/h', whose dimension does not fit Q88; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Cyanide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'pigs' subgroup of Sousa_2003 (paper reports 3 populations: goats, pigs, rats)
- row roles (LLM): model_class=noncompartmental; 8/8 row label(s) assigned, 18 linked by role; re-tagged parent→Cyanide ×39, parent→Thiocyanate ×3
- review gap-fill skipped: this record measures 'Cyanide', not sodium_cyanide — the review values are the parent's
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C5 dimensioned parameter(s) without a unit: Q32, Q88 — no SI value to build from)
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- companion parameter table 2 transcribed (21 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_0:row5:col2', 'Sousa_2003_table_2:row4:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['tab_0:row4:col2', 'Sousa_2003_table_2:row3:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['tab_0:row2:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['Sousa_2003_table_2:row1:col2'] |
| C5_dimension_Q60 | pass | [time] |  | ['tab_0:row3:col2', 'Sousa_2003_table_2:row2:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_0:row6:col2', 'Sousa_2003_table_2:row5:col2'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | lmol/l | ['tab_0:row1:col2', 'Sousa_2003_table_2:row0:col2'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | lmol.l/h | ['tab_0:row7:col2', 'Sousa_2003_table_2:row6:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.367 | ['tab_0:row5:col2', 'Sousa_2003_table_2:row4:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.54 L/h | ['tab_0:row5:col2', 'Sousa_2003_table_2:row4:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 20.3 L | ['tab_0:row6:col2', 'Sousa_2003_table_2:row5:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_pigs/SodiumCyanide_Sousa2003_pigs_modelica.zip" download>SodiumCyanide_Sousa2003_pigs_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_pigs/SodiumCyanide_Sousa2003_pigs_fmi.zip" download>SodiumCyanide_Sousa2003_pigs_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_pigs/SodiumCyanide_Sousa2003_pigs_matlab.zip" download>SodiumCyanide_Sousa2003_pigs_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_pigs/SodiumCyanide_Sousa2003_pigs_matlab_simbio.zip" download>SodiumCyanide_Sousa2003_pigs_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_pigs/SodiumCyanide_Sousa2003_pigs_sbml.zip" download>SodiumCyanide_Sousa2003_pigs_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_pigs/SodiumCyanide_Sousa2003_pigs_cellml.zip" download>SodiumCyanide_Sousa2003_pigs_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.026 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00021 | kg |
| input | model | `Cl` | 4.282e-07 | m3/s |
| input | model | `VdPerKg` | 0.00029 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Sousa AB, Manzano H, Soto-Blanco B, Górniak SL. Toxicokinetics of cyanide in rats, pigs and goats after oral dosing with potassium cyanide. Archives of toxicology 77(6):330–334 (2003). [doi:10.1007/s00204-003-0446-y](https://doi.org/10.1007/s00204-003-0446-y)

**This record:** Pharmacolibrary, model `SodiumCyanide_Sousa2003_pigs`. <https://pharmacolibrary.github.io/#/drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_pigs>

```bibtex
@misc{pharmacolibrary_SodiumCyanideSousa2003pigs,
  title  = {{Pharmacolibrary model SodiumCyanide_Sousa2003_pigs}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_pigs},
  note   = {Parameters from doi:10.1007/s00204-003-0446-y},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

**Administration: intravenous** — 210 mg infusion over 10 min, single dose. Dose in the paper: 210 mg.

<dbs-fmusim paramsurl="drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_pigs/SodiumCyanide_Sousa2003_pigs_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_pigs/SodiumCyanide_Sousa2003_pigs_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `SodiumCyanide_Sousa2003_pigs_params.json` · controls `SodiumCyanide_Sousa2003_pigs_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_cyanide%5D%20SodiumCyanide_Sousa2003_pigs&body=Drug%3A%20sodium_cyanide%0ARecord%3A%20SodiumCyanide_Sousa2003_pigs%0APaper%3A%20Sousa_2003%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_pigs%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 00:38 UTC</sub>
