<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Bupivacaine&quot;,&quot;href&quot;:&quot;drugs/toxin_bupivacaine/&quot;},{&quot;label&quot;:&quot;Eljebari_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bupivacaine_Araneda2025_reference&quot;,&quot;label&quot;:&quot;Araneda_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_bupivacaine/Bupivacaine_Araneda2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bupivacaine_Dings2026_reference&quot;,&quot;label&quot;:&quot;Dings_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_bupivacaine/Bupivacaine_Dings2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bupivacaine_Litonius2012_reference&quot;,&quot;label&quot;:&quot;Litonius_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_bupivacaine/Bupivacaine_Litonius2012_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bupivacaine_McDaniel2021_reference&quot;,&quot;label&quot;:&quot;McDaniel_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_bupivacaine/Bupivacaine_McDaniel2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bupivacaine_Eljebari2014_reference&quot;,&quot;label&quot;:&quot;Eljebari_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_bupivacaine/Bupivacaine_Eljebari2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Bupivacaine_Venkatachalam2022_reference&quot;,&quot;label&quot;:&quot;Venkatachalam_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_bupivacaine/Bupivacaine_Venkatachalam2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Bupivacaine — `Bupivacaine_Eljebari2014_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Bupivacaine" model-id="Bupivacaine_Eljebari2014_reference" status="needs_review" stale="false" population="patients scheduled for elective lower extremity surgery" measured-compound="Bupivacaine" parameterization="mechanistic" topology="1C"></div>

## Citation
Eljebari H, Jebabli N, Salouage I, Gaies E, Lakhal M, Boussofara M et al. Population pharmacokinetics of bupivacaine in combined lumbar and sciatic nerve block. Indian journal of pharmacology 46(2):201-206 (2014).
  ·  DOI: [10.4103/0253-7613.129318](https://doi.org/10.4103/0253-7613.129318)

## Population and dosing

**Population:** patients scheduled for elective lower extremity surgery · condition healthy · age group adult · n = 31.

**Dosing:** 150 mg, other, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_bupivacaine/Bupivacaine_Eljebari2014_reference/Bupivacaine_Eljebari2014_reference.svg" alt="Bupivacaine_Eljebari2014_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| T1/2 of bupivacaine | t1/2z | 100.43 | min |
| population clearance | CL | 930 | ml/min |
| central volume of distribution | V | 134 | L |
| Absorption rate constants of bupivacaine in the lumbar plexus (Ka1 = K13 | kabs | 0.0046 | /min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| T1/2 of bupivacaine | `Q57` · t1/2z | 100.43 | min | 6026 | s | h | boundary (0.8) | Eljebari_2014:results_prose |
| population clearance | `Q22` · CL | 930 | ml/min | 1.55e-05 | m3/s | L/h | boundary (0.8) | Eljebari_2014:results_prose |
| central volume of distribution | `Q61` · V | 134 | L | 0.134 | m3 | L | boundary_compartment (0.9) | Eljebari_2014:results_prose |
| Absorption rate constants of bupivacaine in the lumbar plexus (Ka1 = K13 | `Q49` · kabs | 0.0046 | /min | 7.667e-05 | 1/s | 1/h | review_gapfill (0.7) | Eljebari_2014:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section iiv: 'CL (ml/min) θ1=930 (930±282.24)' routed out of structural estimates ('Inter individual variability (CV %)')
- table section iiv: 'VC (ml) θ2=134 000 (134000±33510)' routed out of structural estimates ('Inter individual variability (CV %)')
- table section iiv: 'Ka2 (min-1) θ4=0.292 (0.292±0.162)' routed out of structural estimates ('Inter individual variability (CV %)')
- dropped value-less row: 'Table 2. Population pharmacokinetic parameters of the final model with two absorption kinetics of bupivacaine (n=31)' (captured trailing unit 'n=31' for child rows)
- salvaged Q57 ('T1/2 of bupivacaine'=100.43) from results prose — parameter table was unreadable
- salvaged Q22 ('population clearance'=930) from results prose — parameter table was unreadable
- salvaged Q63 ('central volume of distribution'=134) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Bupivacaine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- model equation 'θi = TV (θi)* exp (ηθi)' not bound — neither LHS nor base term 'TV' linked to an ontology parameter
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'central volume of distribution' is the general volume)
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Eljebari_2014's review values (primary lacked it)
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C6_cl_magnitude failed (ratio None))

**Extraction notes:**
- table Eljebari_2014_table_p4_1: unbound_uncertainty
- final table T2: no supported point estimates; targeted recovery unresolved
- captured model equation θi = TV (θi)* exp (ηθi)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Eljebari_2014:review'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 930 | ['Eljebari_2014:results_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 55.8 L/h | ['Eljebari_2014:results_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 134 L | ['Eljebari_2014:results_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_bupivacaine/Bupivacaine_Eljebari2014_reference/Bupivacaine_Eljebari2014_reference_modelica.zip" download>Bupivacaine_Eljebari2014_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_bupivacaine/Bupivacaine_Eljebari2014_reference/Bupivacaine_Eljebari2014_reference_fmi.zip" download>Bupivacaine_Eljebari2014_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_bupivacaine/Bupivacaine_Eljebari2014_reference/Bupivacaine_Eljebari2014_reference_matlab.zip" download>Bupivacaine_Eljebari2014_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_bupivacaine/Bupivacaine_Eljebari2014_reference/Bupivacaine_Eljebari2014_reference_matlab_simbio.zip" download>Bupivacaine_Eljebari2014_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_bupivacaine/Bupivacaine_Eljebari2014_reference/Bupivacaine_Eljebari2014_reference_sbml.zip" download>Bupivacaine_Eljebari2014_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_bupivacaine/Bupivacaine_Eljebari2014_reference/Bupivacaine_Eljebari2014_reference_cellml.zip" download>Bupivacaine_Eljebari2014_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2884 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00015 | kg |
| input | model | `Cl` | 1.55e-05 | m3/s |
| input | model | `VdPerKg` | 0.001914 | m3/kg |
| input | model | `ka` | 7.667e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Eljebari H, Jebabli N, Salouage I, Gaies E, Lakhal M, Boussofara M et al. Population pharmacokinetics of bupivacaine in combined lumbar and sciatic nerve block. Indian journal of pharmacology 46(2):201-206 (2014). [doi:10.4103/0253-7613.129318](https://doi.org/10.4103/0253-7613.129318)

**This record:** Pharmacolibrary, model `Bupivacaine_Eljebari2014_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_bupivacaine/Bupivacaine_Eljebari2014_reference>

```bibtex
@misc{pharmacolibrary_BupivacaineEljebari2014reference,
  title  = {{Pharmacolibrary model Bupivacaine_Eljebari2014_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_bupivacaine/Bupivacaine_Eljebari2014_reference},
  note   = {Parameters from doi:10.4103/0253-7613.129318},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

**Administration: oral** — 150 mg, single dose, first-order absorption (ka 0.276 /h, F 0.9). Dose in the paper: 150 mg.

<dbs-fmusim paramsurl="drugs/toxin_bupivacaine/Bupivacaine_Eljebari2014_reference/Bupivacaine_Eljebari2014_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_bupivacaine/Bupivacaine_Eljebari2014_reference/Bupivacaine_Eljebari2014_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Bupivacaine_Eljebari2014_reference_params.json` · controls `Bupivacaine_Eljebari2014_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbupivacaine%5D%20Bupivacaine_Eljebari2014_reference&body=Drug%3A%20bupivacaine%0ARecord%3A%20Bupivacaine_Eljebari2014_reference%0APaper%3A%20Eljebari_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_bupivacaine/Bupivacaine_Eljebari2014_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 12:43 UTC</sub>
