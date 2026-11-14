<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Clindamycin&quot;,&quot;href&quot;:&quot;drugs/toxin_clindamycin/&quot;},{&quot;label&quot;:&quot;Magr\u00e9ault_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clindamycin_Bouazza2012_reference&quot;,&quot;label&quot;:&quot;Bouazza_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clindamycin/Clindamycin_Bouazza2012_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clindamycin_Gonzalez2016_reference&quot;,&quot;label&quot;:&quot;Gonzalez_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clindamycin/Clindamycin_Gonzalez2016_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clindamycin_Mimram2022_reference&quot;,&quot;label&quot;:&quot;Mimram_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clindamycin/Clindamycin_Mimram2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clindamycin_Muller2010_reference&quot;,&quot;label&quot;:&quot;Muller_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clindamycin/Clindamycin_Muller2010_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clindamycin_Wang2023_reference&quot;,&quot;label&quot;:&quot;Wang_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clindamycin/Clindamycin_Wang2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clindamycin_Magrault2025_reference&quot;,&quot;label&quot;:&quot;Magr\u00e9ault_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clindamycin/Clindamycin_Magrault2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Clindamycin — `Clindamycin_Magrault2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Clindamycin" model-id="Clindamycin_Magrault2025_reference" status="needs_review" stale="false" population="patients treated for bone and joint infections" measured-compound="clindamycin" parameterization="mechanistic" topology="1C"></div>

## Citation
Magréault S, Berrah R, Kerroumi Y, Mimram L, Salmon D, Goulenok T et al. Dosing and route of administration of clindamycin given in combination with rifampicin. Clinical microbiology and infection : the official publication of the European Society of Clinical Microbiology and Infectious Diseases 31(5):832-838 (2025).
  ·  DOI: [10.1016/j.cmi.2025.01.005](https://doi.org/10.1016/j.cmi.2025.01.005)

## Population and dosing

**Population:** patients treated for bone and joint infections · condition bone and joint infection · age group adult · n = 124.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_clindamycin/Clindamycin_Magrault2025_reference/Clindamycin_Magrault2025_reference.svg" alt="Clindamycin_Magrault2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| clindamycin clearance increased by an average factor | CL_ratio | 3 |  |
| clindamycin bioavailability decrease for rifampicin doses of 600 mg | Fab | 56 |  |
| unbound area under the curve/MIC | AUC ratio | 60 |  |
| Reported Absolute (mL/min) Nonobese | CL | 65.0 | mL/min |
| V, population estimate (scaled to a 70-kg standardized adult WT) | V | 63.6 | liters |
| Ka | kabs | 3.53 | /h |
| tlag | tlag | 0.105 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.385). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of average factor of rifampicin increased clindamycin clearance: this record has none, the second reading 3; it also differs on 7 more fields. That field does not shape the model.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| clindamycin clearance increased by an average factor | `Q31` · CL_ratio | 3 |  | 3 |  |  | llm_corrected (0.6) | Magréault_2025:abstract |
| clindamycin bioavailability decrease for rifampicin doses of 600 mg | `Q40` · Fab | 56 |  |  |  |  | llm_confirmed (0.6) | Magréault_2025:abstract |
| unbound area under the curve/MIC | `Q21` · AUC ratio | 60 |  | 60 |  |  | llm_corrected (0.6) | Magréault_2025:abstract |
| Reported Absolute (mL/min) Nonobese | `Q22` · CL | 65.0 | mL/min | 1.083e-06 | m3/s | L/h | review_gapfill (0.7) | Gerhart_2022:review |
| V, population estimate (scaled to a 70-kg standardized adult WT) | `Q61` · V | 63.6 | liters | 0.0636 | m3 | L | review_gapfill (0.7) | Gonzalez_2016:review |
| Ka | `Q49` · kabs | 3.53 | /h | 0.0009806 | 1/s | 1/h | review_gapfill (0.7) | Mimram_2022:review |
| tlag | `Q83` · tlag | 0.105 | h | 378 | s | h | review_gapfill (0.7) | Pfaffendorf_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'plasma samples' — extend the ontology if this is a real PK parameter (source ['Magréault_2025:abstract'])
- dropped unlinked row (NIL): 'patients' — extend the ontology if this is a real PK parameter (source ['Magréault_2025:abstract'])
- dropped unlinked row (NIL): 'daily i.v. dose' — extend the ontology if this is a real PK parameter (source ['Magréault_2025:abstract'])
- dropped unlinked row (NIL): 'dose needed for MIC equal to the 0.25 mg/L EUCAST clinical breakpoint for Staphylococcus aureus' — extend the ontology if this is a real PK parameter (source ['Magréault_2025:abstract'])
- dropped unlinked row (NIL): 'EUCAST clinical breakpoint for Staphylococcus aureus' — extend the ontology if this is a real PK parameter (source ['Magréault_2025:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clindamycin
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Gerhart_2022's review values (primary lacked it)
- gap-filled Q61 (V) from Gonzalez_2016's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Mimram_2022's review values (primary lacked it)
- gap-filled Q83 (tlag) from Pfaffendorf_2026's review values (primary lacked it)
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (disposition incomplete — no disposition parameter from this paper; review-gap-filled from other paper(s): Gerhart_2022, Gonzalez_2016, Mimram_2022, Pfaffendorf_2026 — borrowed values do not complete its disposition core)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Magréault_2025_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.385 (5/13 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[average factor of rifampicin increased clindamycin clearance]` |  | 3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clindamycin bioavailability decrease for rifampicin doses of 600 mg]` | 56 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clindamycin clearance increased by an average factor]` | 3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[daily i.v. clindamycin dose]` |  | 3600 | only_one_extracted |
| `gpt-oss:120b` | `parameters[decrease in clindamycin bioavailability]` |  | 56 | only_one_extracted |
| `gpt-oss:120b` | `parameters[rifampicin dose]` |  | 600 | only_one_extracted |
| `gpt-oss:120b` | `parameters[unbound area under the curve/mic]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[unbound area under the curve/mic]` | 60 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Gerhart_2022:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Mimram_2022:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Gonzalez_2016:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Pfaffendorf_2026:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 65 | ['Gerhart_2022:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.9 L/h | ['Gerhart_2022:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 63.6 L | ['Gonzalez_2016:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_clindamycin/Clindamycin_Magrault2025_reference/Clindamycin_Magrault2025_reference_modelica.zip" download>Clindamycin_Magrault2025_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_clindamycin/Clindamycin_Magrault2025_reference/Clindamycin_Magrault2025_reference_fmi.zip" download>Clindamycin_Magrault2025_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_clindamycin/Clindamycin_Magrault2025_reference/Clindamycin_Magrault2025_reference_matlab.zip" download>Clindamycin_Magrault2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_clindamycin/Clindamycin_Magrault2025_reference/Clindamycin_Magrault2025_reference_matlab_simbio.zip" download>Clindamycin_Magrault2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_clindamycin/Clindamycin_Magrault2025_reference/Clindamycin_Magrault2025_reference_sbml.zip" download>Clindamycin_Magrault2025_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_clindamycin/Clindamycin_Magrault2025_reference/Clindamycin_Magrault2025_reference_cellml.zip" download>Clindamycin_Magrault2025_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.425 | kg/mol |
| input | dosing | `F` | 56 | 1 |
| input | dosing | `Tlag` | 378 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0012 | kg |
| input | model | `Cl` | 1.083e-06 | m3/s |
| input | model | `VdPerKg` | 0.0009086 | m3/kg |
| input | model | `ka` | 0.0009806 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Magréault S, Berrah R, Kerroumi Y, Mimram L, Salmon D, Goulenok T et al. Dosing and route of administration of clindamycin given in combination with rifampicin. Clinical microbiology and infection : the official publication of the European Society of Clinical Microbiology and Infectious Diseases 31(5):832-838 (2025). [doi:10.1016/j.cmi.2025.01.005](https://doi.org/10.1016/j.cmi.2025.01.005)

**This record:** Pharmacolibrary, model `Clindamycin_Magrault2025_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_clindamycin/Clindamycin_Magrault2025_reference>

```bibtex
@misc{pharmacolibrary_ClindamycinMagrault2025reference,
  title  = {{Pharmacolibrary model Clindamycin_Magrault2025_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_clindamycin/Clindamycin_Magrault2025_reference},
  note   = {Parameters from doi:10.1016/j.cmi.2025.01.005},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

**Administration: oral** — 1200 mg, single dose, first-order absorption (ka 3.53 /h, lag 6.3 min, F 56). _The paper's dose was not captured; the default is the WHO ATC DDD 1200 mg oral (J01FF01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_clindamycin/Clindamycin_Magrault2025_reference/Clindamycin_Magrault2025_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_clindamycin/Clindamycin_Magrault2025_reference/Clindamycin_Magrault2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Clindamycin_Magrault2025_reference_params.json` · controls `Clindamycin_Magrault2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclindamycin%5D%20Clindamycin_Magrault2025_reference&body=Drug%3A%20clindamycin%0ARecord%3A%20Clindamycin_Magrault2025_reference%0APaper%3A%20Magr%C3%A9ault_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_clindamycin/Clindamycin_Magrault2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 12:50 UTC</sub>
