<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Di-n-hexyl phthalate&quot;,&quot;href&quot;:&quot;drugs/toxin_di_n_hexyl_phthalate/&quot;},{&quot;label&quot;:&quot;Pirow_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;DiNHexylPhthalate_Pirow2024_reference&quot;,&quot;label&quot;:&quot;Pirow_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_di_n_hexyl_phthalate/DiNHexylPhthalate_Pirow2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Di-n-hexyl phthalate — `DiNHexylPhthalate_Pirow2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> The terminal elimination half-life for Mono-n-hexyl phthalate was recorded as 5.5 h, the midpoint of a reported range, rather than a fitted parameter.

<div class="pk-model-meta" hidden drug="Di-n-hexyl phthalate" model-id="DiNHexylPhthalate_Pirow2024_reference" status="needs_review" stale="false" population="humans (adults and children)" measured-compound="Mono-n-hexyl phthalate" parameterization="mechanistic" topology="retention"></div>

## Citation
Pirow R, Bernauer U, Blume A, Cieszynski A, Flingelli G, Heiland A et al. Mono-n-hexyl phthalate: exposure estimation and assessment of health risks based on levels found in human urine samples. Archives of toxicology 98(11):3659–3671 (2024).
  ·  DOI: [10.1007/s00204-024-03835-x](https://doi.org/10.1007/s00204-024-03835-x)

## Population and dosing

**Population:** humans (adults and children) · condition general population exposure / consumer product exposure modeling · age group mixed.

**Dosed compound ≠ measured compound:** dosed Di-n-hexyl phthalate, measured Mono-n-hexyl phthalate.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| elimination half-lives | t1/2z | 5.5 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The terminal elimination half-life for Mono-n-hexyl phthalate was recorded as 5.5 h, the midpoint of a reported range, rather than a fitted parameter.**

The record specifies a terminal elimination half-life of 5.5 h for Mono-n-hexyl phthalate. This value is flagged because it represents only the midpoint of a range printed in the source, rather than a distinct fitted estimate. The model structure is described as retention, with Mono-n-hexyl phthalate formed in the central compartment. Extracted — Mono-n-hexyl phthalate: t1/2z 5.5 h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| elimination half-lives | `Q57` · t1/2z | 5.5 | h | 1.98e+04 | s | h | toxin_unit_relink (0.85) | Pirow_2024:prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / elimination half-lives (Q57)

**Interpretation flags:**
- table representations disagree for 'Sunscreen'; source reconciliation required
- table representations disagree for 'Lip balm'; source reconciliation required
- table representations disagree for 'Pump spray for face'; source reconciliation required
- table representations disagree for 'Plastic sandals'; source reconciliation required
- dropped unlinked row (NIL): 'Sunscreen' — extend the ontology if this is a real PK parameter (source ['Tab4:row2:col2', 'Tab4:row2:col3', 'Tab4:row6:col2', 'Tab4:row6:col3'])
- dropped unlinked row (NIL): 'Lip balm' — extend the ontology if this is a real PK parameter (source ['Tab4:row3:col2', 'Tab4:row3:col3', 'Tab4:row7:col2', 'Tab4:row7:col3'])
- dropped unlinked row (NIL): 'Pump spray for face' — extend the ontology if this is a real PK parameter (source ['Tab4:row4:col2', 'Tab4:row4:col3', 'Tab4:row8:col2', 'Tab4:row8:col3'])
- dropped unlinked row (NIL): 'Plastic sandals' — extend the ontology if this is a real PK parameter (source ['Tab4:row9:col2', 'Tab4:row9:col3'])
- table mostly unlinked (4/4 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q57 ('elimination half-lives'=5.5) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Mono-n-hexyl phthalate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — other model — not a compartmental parent–metabolite model
- toxin: elimination half-lives printed only as a range — the value is the range's midpoint; route to review
- status held at "Needs review" — not promoted
- row roles: 4 per-group rows of Di-n-hexyl phthalate covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=other; 4/4 row label(s) assigned, 0 linked by role
- review gap-fill skipped: this record measures 'Mono-n-hexyl phthalate', not di_n_hexyl_phthalate — the review values are the parent's
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (a value printed only as a range — the record carries its midpoint)

**Extraction notes:**
- table Tab4: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 4
- toxin: the located table(s) gave no kinetic value — 9 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | pass | 1 |
| C0b_disposition_core | pass |  |
| C0c_disposition_complete | pass |  |
| C8_topology | pass |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_di_n_hexyl_phthalate/DiNHexylPhthalate_Pirow2024_reference/DiNHexylPhthalate_Pirow2024_reference_modelica.zip" download>DiNHexylPhthalate_Pirow2024_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_di_n_hexyl_phthalate/DiNHexylPhthalate_Pirow2024_reference/DiNHexylPhthalate_Pirow2024_reference_fmi.zip" download>DiNHexylPhthalate_Pirow2024_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_di_n_hexyl_phthalate/DiNHexylPhthalate_Pirow2024_reference/DiNHexylPhthalate_Pirow2024_reference_matlab.zip" download>DiNHexylPhthalate_Pirow2024_reference_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_di_n_hexyl_phthalate/DiNHexylPhthalate_Pirow2024_reference/DiNHexylPhthalate_Pirow2024_reference_sbml.zip" download>DiNHexylPhthalate_Pirow2024_reference_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_di_n_hexyl_phthalate/DiNHexylPhthalate_Pirow2024_reference/DiNHexylPhthalate_Pirow2024_reference_cellml.zip" download>DiNHexylPhthalate_Pirow2024_reference_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2503 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 1.98e+04 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Pirow R, Bernauer U, Blume A, Cieszynski A, Flingelli G, Heiland A et al. Mono-n-hexyl phthalate: exposure estimation and assessment of health risks based on levels found in human urine samples. Archives of toxicology 98(11):3659–3671 (2024). [doi:10.1007/s00204-024-03835-x](https://doi.org/10.1007/s00204-024-03835-x)

**This record:** Pharmacolibrary, model `DiNHexylPhthalate_Pirow2024_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_di_n_hexyl_phthalate/DiNHexylPhthalate_Pirow2024_reference>

```bibtex
@misc{pharmacolibrary_DiNHexylPhthalatePirow2024reference,
  title  = {{Pharmacolibrary model DiNHexylPhthalate_Pirow2024_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_di_n_hexyl_phthalate/DiNHexylPhthalate_Pirow2024_reference},
  note   = {Parameters from doi:10.1007/s00204-024-03835-x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

<dbs-fmusim paramsurl="drugs/toxin_di_n_hexyl_phthalate/DiNHexylPhthalate_Pirow2024_reference/DiNHexylPhthalate_Pirow2024_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_di_n_hexyl_phthalate/DiNHexylPhthalate_Pirow2024_reference/DiNHexylPhthalate_Pirow2024_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `DiNHexylPhthalate_Pirow2024_reference_params.json` · controls `DiNHexylPhthalate_Pirow2024_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdi_n_hexyl_phthalate%5D%20DiNHexylPhthalate_Pirow2024_reference&body=Drug%3A%20di_n_hexyl_phthalate%0ARecord%3A%20DiNHexylPhthalate_Pirow2024_reference%0APaper%3A%20Pirow_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_di_n_hexyl_phthalate/DiNHexylPhthalate_Pirow2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 22:53 UTC</sub>
