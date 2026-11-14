<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Ethylene Oxide&quot;,&quot;href&quot;:&quot;drugs/toxin_ethylene_oxide/&quot;},{&quot;label&quot;:&quot;Li_2011 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;EthyleneOxide_Li2011_reference&quot;,&quot;label&quot;:&quot;Li_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ethylene_oxide/EthyleneOxide_Li2011_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ethylene Oxide — `EthyleneOxide_Li2011_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> VH has no unit.

<div class="pk-model-meta" hidden drug="Ethylene Oxide" model-id="EthyleneOxide_Li2011_reference" status="needs_review" stale="false" population="male B6C3F1 mice, male Fischer 344 rats, humans" measured-compound="Ethylene Oxide" parameterization="mechanistic" topology="retention"></div>

## Citation
Li Q, Csanády GA, Kessler W, Klein D, Pankratz H, Pütz C et al. Kinetics of ethylene and ethylene oxide in subcellular fractions of lungs and livers of male B6C3F1 mice and male fischer 344 rats and of human livers. Toxicological sciences : an official journal of the Society of Toxicology 123(2):384–398 (2011).
  ·  DOI: [10.1093/toxsci/kfr194](https://doi.org/10.1093/toxsci/kfr194)

## Population and dosing

**Population:** male B6C3F1 mice, male Fischer 344 rats, humans · condition in vitro.

**Dosed compound ≠ measured compound:** dosed Ethylene, measured Ethylene Oxide.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Liver | VH | 2.87 |  |
| elimination rate constant resulting from the nonenzymatic conjugation reaction only | kel | 3.12 | 1/h |
| mean half-life | t1/2z | 3.7 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**VH has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — ethylene oxide: VH 2.87, kel 3.12 1/h, t1/2z 3.7 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Liver | `Q368` · VH | 2.87 |  |  |  |  | exact (1) | Li_2011_table_3:row0:col3, Li_2011_table_3:row0:col4, Li_2011_table_3:row0:col5, Li_2011_table_3:row1:col3, Li_2011_table_3:row1:col4, Li_2011_table_3:row1:col5, Li_2011_table_3:row2:col4, Li_2011_table_3:row3:col3, Li_2011_table_3:row3:col4, Li_2011_table_3:row4:col3, Li_2011_table_3:row4:col4, Li_2011_table_3:row4:col5, Li_2011_table_3:row5:col3, Li_2011_table_3:row5:col4, Li_2011_table_3:row5:col5, Li_2011_table_3:row6:col3, Li_2011_table_3:row6:col4, Li_2011_table_3:row7:col3, Li_2011_table_3:row7:col4, Li_2011_table_3:row7:col5, Li_2011_table_3:row8:col3, Li_2011_table_3:row8:col4, Li_2011_table_3:row9:col3, Li_2011_table_3:row9:col4, Li_2011_table_3:row10:col3, Li_2011_table_3:row10:col4, Li_2011_table_3:row11:col3, Li_2011_table_3:row11:col4, Li_2011_table_3:row11:col5, Li_2011_table_3:row12:col3, Li_2011_table_3:row12:col4, Li_2011_table_3:row13:col3, Li_2011_table_3:row13:col4, Li_2011_table_3:row14:col3, Li_2011_table_3:row14:col4, Li_2011_table_3:row14:col5, Li_2011_table_3:row15:col3, Li_2011_table_3:row15:col4, Li_2011_table_3:row15:col5 |
| elimination rate constant resulting from the nonenzymatic conjugation reaction only | `Q47` · kel | 3.12 | 1/h | 0.0008667 | 1/s | 1/h | boundary (0.8) | Li_2011:other_prose |
| mean half-life | `Q57` · t1/2z | 3.7 | h | 1.332e+04 | s | h | half_life_rule (0.95) | Li_2011:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from elimination rate constant resulting from the nonenzymatic conjugation reaction only (Q47)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Mouse' — extend the ontology if this is a real PK parameter (source ['Li_2011_table_2:row0:col2', 'Li_2011_table_2:row0:col3', 'Li_2011_table_2:row0:col4'])
- dropped unlinked row (NIL): 'Rat' — extend the ontology if this is a real PK parameter (source ['Li_2011_table_2:row2:col2', 'Li_2011_table_2:row2:col3', 'Li_2011_table_2:row2:col4'])
- dropped unlinked row (NIL): 'Human' — extend the ontology if this is a real PK parameter (source ['Li_2011_table_2:row4:col2', 'Li_2011_table_2:row4:col3', 'Li_2011_table_2:row4:col4'])
- linked 'Liver' as 'hepatic volume' → Q368 (VH) for  — compound marker removed
- dropped unlinked row (NIL): 'Lung' — extend the ontology if this is a real PK parameter (source ['Li_2011_table_3:row16:col3', 'Li_2011_table_3:row16:col4', 'Li_2011_table_3:row16:col5', 'Li_2011_table_3:row17:col3', 'Li_2011_table_3:row17:col4', 'Li_2011_table_3:row17:col5'])
- table mostly unlinked (4/5 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q47 ('elimination rate constant resulting from the nonenzymatic conjugation reaction only'=3.12) from results prose — parameter table was unreadable
- salvaged Q57 ('mean half-life'=3.7) from results prose — parameter table was unreadable
- implicit units: 'Liver' — the LLM proposed 'L/h', whose dimension does not fit Q368; left unset
- implicit units: 'elimination rate constant resulting from the nonenzymatic conjugation reaction only' → 1/h (from the popPK convention: "The parameter is described as 'Elimination rate constant (terminal/beta phase)'. First-order rate constants (elimination")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ethylene Oxide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — pbpk model — not a compartmental parent–metabolite model (site hepatic: 'the record carries a hepatic compartment parameter (Q368)')
- status held at "Needs review" — not promoted
- row roles: 3 per-group rows of none variability but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=pbpk; 5/5 row label(s) assigned, 39 linked by role
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C5 dimensioned parameter(s) without a unit: Q368 — no SI value to build from)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- table Li_2011_table_2: unparsed_numeric_cell
- table Li_2011_table_3: unbound_uncertainty
- table Li_2011_table_3: unparsed_numeric_cell

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Li_2011:other_prose'] |
| C5_unit_missing_Q368 | fail | [length] ** 3 |  | ['Li_2011_table_3:row0:col3', 'Li_2011_table_3:row0:col4', 'Li_2011_table_3:row0:col5', 'Li_2011_table_3:row1:col3', 'Li_2011_table_3:row1:col4', 'Li_2011_table_3:row1:col5', 'Li_2011_table_3:row2:col4', 'Li_2011_table_3:row3:col3', 'Li_2011_table_3:row3:col4', 'Li_2011_table_3:row4:col3', 'Li_2011_table_3:row4:col4', 'Li_2011_table_3:row4:col5', 'Li_2011_table_3:row5:col3', 'Li_2011_table_3:row5:col4', 'Li_2011_table_3:row5:col5', 'Li_2011_table_3:row6:col3', 'Li_2011_table_3:row6:col4', 'Li_2011_table_3:row7:col3', 'Li_2011_table_3:row7:col4', 'Li_2011_table_3:row7:col5', 'Li_2011_table_3:row8:col3', 'Li_2011_table_3:row8:col4', 'Li_2011_table_3:row9:col3', 'Li_2011_table_3:row9:col4', 'Li_2011_table_3:row10:col3', 'Li_2011_table_3:row10:col4', 'Li_2011_table_3:row11:col3', 'Li_2011_table_3:row11:col4', 'Li_2011_table_3:row11:col5', 'Li_2011_table_3:row12:col3', 'Li_2011_table_3:row12:col4', 'Li_2011_table_3:row13:col3', 'Li_2011_table_3:row13:col4', 'Li_2011_table_3:row14:col3', 'Li_2011_table_3:row14:col4', 'Li_2011_table_3:row14:col5', 'Li_2011_table_3:row15:col3', 'Li_2011_table_3:row15:col4', 'Li_2011_table_3:row15:col5'] |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_ethylene_oxide/EthyleneOxide_Li2011_reference/EthyleneOxide_Li2011_reference_modelica.zip" download>EthyleneOxide_Li2011_reference_modelica.zip</a> <span class="pk-size">(5.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_ethylene_oxide/EthyleneOxide_Li2011_reference/EthyleneOxide_Li2011_reference_fmi.zip" download>EthyleneOxide_Li2011_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_ethylene_oxide/EthyleneOxide_Li2011_reference/EthyleneOxide_Li2011_reference_matlab.zip" download>EthyleneOxide_Li2011_reference_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_ethylene_oxide/EthyleneOxide_Li2011_reference/EthyleneOxide_Li2011_reference_sbml.zip" download>EthyleneOxide_Li2011_reference_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_ethylene_oxide/EthyleneOxide_Li2011_reference/EthyleneOxide_Li2011_reference_cellml.zip" download>EthyleneOxide_Li2011_reference_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.04405 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 799.8 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Li Q, Csanády GA, Kessler W, Klein D, Pankratz H, Pütz C et al. Kinetics of ethylene and ethylene oxide in subcellular fractions of lungs and livers of male B6C3F1 mice and male fischer 344 rats and of human livers. Toxicological sciences : an official journal of the Society of Toxicology 123(2):384–398 (2011). [doi:10.1093/toxsci/kfr194](https://doi.org/10.1093/toxsci/kfr194)

**This record:** Pharmacolibrary, model `EthyleneOxide_Li2011_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_ethylene_oxide/EthyleneOxide_Li2011_reference>

```bibtex
@misc{pharmacolibrary_EthyleneOxideLi2011reference,
  title  = {{Pharmacolibrary model EthyleneOxide_Li2011_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_ethylene_oxide/EthyleneOxide_Li2011_reference},
  note   = {Parameters from doi:10.1093/toxsci/kfr194},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

<dbs-fmusim paramsurl="drugs/toxin_ethylene_oxide/EthyleneOxide_Li2011_reference/EthyleneOxide_Li2011_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_ethylene_oxide/EthyleneOxide_Li2011_reference/EthyleneOxide_Li2011_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `EthyleneOxide_Li2011_reference_params.json` · controls `EthyleneOxide_Li2011_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bethylene_oxide%5D%20EthyleneOxide_Li2011_reference&body=Drug%3A%20ethylene_oxide%0ARecord%3A%20EthyleneOxide_Li2011_reference%0APaper%3A%20Li_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ethylene_oxide/EthyleneOxide_Li2011_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 16:08 UTC</sub>
