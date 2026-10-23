<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;lonafarnib&quot;,&quot;href&quot;:&quot;drugs/drug_lonafarnib/&quot;},{&quot;label&quot;:&quot;Canini_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lonafarnib_Canini2017_reference&quot;,&quot;label&quot;:&quot;Canini_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lonafarnib/Lonafarnib_Canini2017_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lonafarnib — `Lonafarnib_Canini2017_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Needs review), but the paper was screened again on 2026-10-07 17:48 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="lonafarnib" model-id="Lonafarnib_Canini2017_reference" status="extracted" stale="true" population="adults with chronic hepatitis delta virus infection" measured-compound="lonafarnib" parameterization="apparent" topology="1C"></div>

## Citation
Canini L, Koh C, Cotler SJ, Uprichard SL, Winters MA, Han MAT et al. Pharmacokinetics and pharmacodynamics modeling of lonafarnib in patients with chronic hepatitis delta virus infection. Hepatology communications 1(4):288–292 (2017).
  ·  DOI: [10.1002/hep4.1043](https://doi.org/10.1002/hep4.1043)

## Population and dosing

**Population:** adults with chronic hepatitis delta virus infection · condition chronic hepatitis delta virus infection · age group adult · n = 12.

**Dosing:** 100, 200 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_lonafarnib/Lonafarnib_Canini2017_reference/Lonafarnib_Canini2017_reference.svg" alt="Lonafarnib_Canini2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| ka [hr–1] | kabs | 0.43 | 1/h | 83 |
| Vd/F [L] | V/F | 223 | L | 49 |
| ke [hr–1] | kel | 0.045 | 1/h | 39 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**V has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — lonafarnib: kabs 0.43 1/h, V/F 223 L, kel 0.045 1/h, V 7.88.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has lonafarnib, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| ka [hr–1] | `Q49` · kabs | 0.43 | 1/h | 0.0001194 | 1/s | 1/h | 83 | llm_confirmed (0.6) | hep41043-tbl-0001:row2:col2, hep41043-tbl-0001:row2:col3 |
| Vd/F [L] | `Q76` · V/F | 223 | L | 0.223 | m3 | l | 49 | llm_confirmed (0.6) | hep41043-tbl-0001:row3:col2, hep41043-tbl-0001:row3:col3 |
| ke [hr–1] | `Q47` · kel | 0.045 | 1/h | 1.25e-05 | 1/s | 1/h | 39 | llm_confirmed (0.6) | hep41043-tbl-0001:row4:col2, hep41043-tbl-0001:row4:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 't0 [hr]' — extend the ontology if this is a real PK parameter (source ['hep41043-tbl-0001:row1:col2', 'hep41043-tbl-0001:row1:col3'])
- dropped PD-category row 'Emax' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['hep41043-tbl-0001:row5:col2'])
- dropped PD-category row 'EC50 [ng/mL]' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['hep41043-tbl-0001:row6:col2', 'hep41043-tbl-0001:row6:col3'])
- dropped unlinked row (NIL): 'h' — extend the ontology if this is a real PK parameter (source ['hep41043-tbl-0001:row7:col2'])
- dropped unlinked row (NIL): 'V0 [log10 IU/mL]' — extend the ontology if this is a real PK parameter (source ['hep41043-tbl-0001:row8:col2', 'hep41043-tbl-0001:row8:col3'])
- dropped unlinked row (NIL): 'δ [d–1]' — extend the ontology if this is a real PK parameter (source ['hep41043-tbl-0001:row9:col2'])
- dropped PD-category row 'c [d–1]' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['hep41043-tbl-0001:row10:col2', 'hep41043-tbl-0001:row10:col3'])
- implicit units: 'ka [hr–1]' → 1/h (from the paper text: "The text states: 'The drug absorption rate was estimated as ka = 0.43/hour'.")
- implicit units: 'ke [hr–1]' → 1/h (from the paper text: "The text states: 'the elimination rate ke as 0.045/hour'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lonafarnib
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- derived CL/F=10.035 L/h from Ke × V/F = CL/F (Q47 × Q76); not separately reported

**Extraction notes:**
- unparsed cell hep41043-tbl-0001:row6:col1 = 'LNF concentration leading to 50% of effectiveness'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.727 (8/11 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[t0 [hr]]` |  | 0.56 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | lonafarnib | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | lonafarnib | unknown | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['hep41043-tbl-0001:row4:col2', 'hep41043-tbl-0001:row4:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['hep41043-tbl-0001:row2:col2', 'hep41043-tbl-0001:row2:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['hep41043-tbl-0001:row3:col2', 'hep41043-tbl-0001:row3:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 223 L | ['hep41043-tbl-0001:row3:col2', 'hep41043-tbl-0001:row3:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_lonafarnib/Lonafarnib_Canini2017_reference/Lonafarnib_Canini2017_reference_modelica.zip" download>Lonafarnib_Canini2017_reference_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_lonafarnib/Lonafarnib_Canini2017_reference/Lonafarnib_Canini2017_reference_fmi.zip" download>Lonafarnib_Canini2017_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.6388 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 2.787e-06 | m3/s |
| input | model | `VdPerKg` | 0.003186 | m3/kg |
| input | model | `ka` | 0.0001194 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Canini L, Koh C, Cotler SJ, Uprichard SL, Winters MA, Han MAT et al. Pharmacokinetics and pharmacodynamics modeling of lonafarnib in patients with chronic hepatitis delta virus infection. Hepatology communications 1(4):288–292 (2017). [doi:10.1002/hep4.1043](https://doi.org/10.1002/hep4.1043)

**This record:** Pharmacolibrary v26.09, model `Lonafarnib_Canini2017_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_lonafarnib/Lonafarnib_Canini2017_reference>

```bibtex
@misc{pharmacolibrary_LonafarnibCanini2017reference,
  title  = {{Pharmacolibrary model Lonafarnib_Canini2017_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_lonafarnib/Lonafarnib_Canini2017_reference},
  note   = {Parameters from doi:10.1002/hep4.1043},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.43 /h, F 1). Doses in the paper: 100, 200 mg.

<dbs-fmusim paramsurl="drugs/drug_lonafarnib/Lonafarnib_Canini2017_reference/Lonafarnib_Canini2017_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_lonafarnib/Lonafarnib_Canini2017_reference/Lonafarnib_Canini2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Lonafarnib_Canini2017_reference_params.json` · controls `Lonafarnib_Canini2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blonafarnib%5D%20Lonafarnib_Canini2017_reference&body=Drug%3A%20lonafarnib%0ARecord%3A%20Lonafarnib_Canini2017_reference%0APaper%3A%20Canini_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lonafarnib/Lonafarnib_Canini2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:48 UTC</sub>
