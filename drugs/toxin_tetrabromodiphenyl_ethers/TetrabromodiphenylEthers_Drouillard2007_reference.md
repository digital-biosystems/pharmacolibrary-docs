<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Tetrabromodiphenyl ethers&quot;,&quot;href&quot;:&quot;drugs/toxin_tetrabromodiphenyl_ethers/&quot;},{&quot;label&quot;:&quot;Drouillard_2007 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TetrabromodiphenylEthers_Bloch2024_reference&quot;,&quot;label&quot;:&quot;Bloch_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Bloch2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TetrabromodiphenylEthers_Muirhead2006_reference&quot;,&quot;label&quot;:&quot;Muirhead_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Muirhead2006_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TetrabromodiphenylEthers_Drouillard2007_reference&quot;,&quot;label&quot;:&quot;Drouillard_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Drouillard2007_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;TetrabromodiphenylEthers_Staskal2005_reference&quot;,&quot;label&quot;:&quot;Staskal_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Staskal2005_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Tetrabromodiphenyl ethers — `TetrabromodiphenylEthers_Drouillard2007_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

> The tetrabromodiphenyl ether record relies on abstract-derived midpoint values for elimination parameters, including a terminal half-life of 25.15 days.

<div class="pk-model-meta" hidden drug="Tetrabromodiphenyl ethers" model-id="TetrabromodiphenylEthers_Drouillard2007_reference" status="needs_review" stale="false" population="juvenile American kestrels" measured-compound="Tetrabromodiphenyl ethers" parameterization="mechanistic" topology="retention"></div>

## Citation
Drouillard KG, Fernie KJ, Letcher RJ, Shutt LJ, Whitehead M, Gebink W et al. Bioaccumulation and biotransformation of 61 polychlorinated biphenyl and four polybrominated diphenyl ether congeners in juvenile American kestrels (Falco sparverius). Environmental toxicology and chemistry 26(2):313–324 (2007).
  ·  DOI: [10.1897/06-052r.1](https://doi.org/10.1897/06-052r.1)

## Population and dosing

**Population:** juvenile American kestrels · condition experimental exposure.

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| congeners containing chlorine substitutions at 4,4'-, 3',4,5'-, 3,4',5-, or 3,3',5,5'-positions. A toxicokinetic model, initially parameterized using adult toxicokinetic parameters, was used to describe concentration trends in juveniles over time. The adult model overestimated PCB concentrations but provided an adequate fit when elimination rate constants were increased by a factor of | kel | 12.7 | 1/h |
| to | Ae | 45.3 | mg |
| Half-lives | t1/2z | 25.15 | d |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The tetrabromodiphenyl ether record relies on abstract-derived midpoint values for elimination parameters, including a terminal half-life of 25.15 days.**

The model was constructed solely from the abstract, meaning reported summary statistics replaced fitted parameters. This resulted in a terminal elimination rate constant of 12.7 per hour and a terminal half-life of 25.15 days. The elimination rate constant was originally presented only as a range, with the record storing just its midpoint value. Extracted — tetrabromodiphenyl ethers: kel 12.7 1/h, Ae 45.3 mg, t1/2z 25.1 d.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| congeners containing chlorine substitutions at 4,4'-, 3',4,5'-, 3,4',5-, or 3,3',5,5'-positions. A toxicokinetic model, initially parameterized using adult toxicokinetic parameters, was used to describe concentration trends in juveniles over time. The adult model overestimated PCB concentrations but provided an adequate fit when elimination rate constants were increased by a factor of | `Q47` · kel | 12.7 | 1/h | 0.003528 | 1/s | 1/h | llm_confirmed (0.6) | Drouillard_2007:abstract |
| to | `Q91` · Ae | 45.3 | mg |  |  | mg | llm (0.6) | Drouillard_2007:abstract, Drouillard_2007:abstract, Drouillard_2007:abstract |
| Half-lives | `Q57` · t1/2z | 25.15 | d | 2.173e+06 | s | d | llm (0.6) | Drouillard_2007:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / Half-lives (Q57)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Retention factors for PCBs were dependent on chemical hydrophobicity and chlorine substitution patterns and ranged from less than 1 to' — extend the ontology if this is a real PK parameter (source ['Drouillard_2007:abstract'])
- dropped unlinked row (NIL): 'PCBs having vicinal hydrogen substitutions at meta-, para- carbons on at least one of the phenyl rings and between' — extend the ontology if this is a real PK parameter (source ['Drouillard_2007:abstract'])
- dropped unlinked row (NIL): 'and' — extend the ontology if this is a real PK parameter (source ['Drouillard_2007:abstract'])
- dropped unlinked row (NIL): "Retention factors for the PBDE congeners 2,2',4,4'-tetrabromodiphenyl ether (BDE 47), 2,2',4,4',6-pentabromodiphenyl ether (BDE 100), 2,2',4,4',5-pentabromodiphenyl ether (BDE 99), and 2,2',4,4',5,5'-hexabromodiphenyl ether (BDE 153) were from" — extend the ontology if this is a real PK parameter (source ['Drouillard_2007:abstract'])
- unit_dimension_unknown: '% of the total dose' (Ae )
- covariate category for t1/2z from footnote/prose kept as documentation only (['Drouillard_2007:abstract'])
- implicit units: "congeners containing chlorine substitutions at 4,4'-, 3',4,5'-, 3,4',5-, or 3,3',5,5'-positions. A toxicokinetic model, initially parameterized using adult toxicokinetic parameters, was used to describe concentration trends in juveniles over time. The adult model overestimated PCB concentrations but provided an adequate fit when elimination rate constants were increased by a factor of" → 1/h (from the popPK convention: "The parameter is described as an 'Elimination rate constant' (terminal/beta phase). In population pharmacokinetics, firs")
- implicit units: 'to' → mg (from the popPK convention: "The parameter 'Ae' is defined as the 'Amount of the administered dose excreted unchanged'. Amounts are conventionally ex")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Tetrabromodiphenyl ethers
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- toxin: Half-lives printed only as a range — the value is the range's midpoint; route to review
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'Tetrabromodiphenyl ethers' ('tetrabromodiphenyl ethers') — left in mass units
- molar mass: none found for 'Tetrabromodiphenyl ethers' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (a value printed only as a range — the record carries its midpoint)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Drouillard_2007_metadata.yaml (11 record(s)); values are summary statistics, not a fitted model
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Drouillard_2007:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Drouillard_2007:abstract'] |
| C5_dimension_Q91 | pass | [mass] |  | ['Drouillard_2007:abstract', 'Drouillard_2007:abstract', 'Drouillard_2007:abstract'] |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Drouillard2007_reference/TetrabromodiphenylEthers_Drouillard2007_reference_modelica.zip" download>TetrabromodiphenylEthers_Drouillard2007_reference_modelica.zip</a> <span class="pk-size">(5.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Drouillard2007_reference/TetrabromodiphenylEthers_Drouillard2007_reference_fmi.zip" download>TetrabromodiphenylEthers_Drouillard2007_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Drouillard2007_reference/TetrabromodiphenylEthers_Drouillard2007_reference_matlab.zip" download>TetrabromodiphenylEthers_Drouillard2007_reference_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Drouillard2007_reference/TetrabromodiphenylEthers_Drouillard2007_reference_sbml.zip" download>TetrabromodiphenylEthers_Drouillard2007_reference_sbml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Drouillard2007_reference/TetrabromodiphenylEthers_Drouillard2007_reference_cellml.zip" download>TetrabromodiphenylEthers_Drouillard2007_reference_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 2.173e+06 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Drouillard KG, Fernie KJ, Letcher RJ, Shutt LJ, Whitehead M, Gebink W et al. Bioaccumulation and biotransformation of 61 polychlorinated biphenyl and four polybrominated diphenyl ether congeners in juvenile American kestrels (Falco sparverius). Environmental toxicology and chemistry 26(2):313–324 (2007). [doi:10.1897/06-052r.1](https://doi.org/10.1897/06-052r.1)

**This record:** Pharmacolibrary, model `TetrabromodiphenylEthers_Drouillard2007_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Drouillard2007_reference>

```bibtex
@misc{pharmacolibrary_TetrabromodiphenylEthersDrouillard2007reference,
  title  = {{Pharmacolibrary model TetrabromodiphenylEthers_Drouillard2007_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Drouillard2007_reference},
  note   = {Parameters from doi:10.1897/06-052r.1},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

<dbs-fmusim paramsurl="drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Drouillard2007_reference/TetrabromodiphenylEthers_Drouillard2007_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Drouillard2007_reference/TetrabromodiphenylEthers_Drouillard2007_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `TetrabromodiphenylEthers_Drouillard2007_reference_params.json` · controls `TetrabromodiphenylEthers_Drouillard2007_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btetrabromodiphenyl_ethers%5D%20TetrabromodiphenylEthers_Drouillard2007_reference&body=Drug%3A%20tetrabromodiphenyl_ethers%0ARecord%3A%20TetrabromodiphenylEthers_Drouillard2007_reference%0APaper%3A%20Drouillard_2007%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Drouillard2007_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 06:27 UTC</sub>
