<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Piperaquine&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/&quot;},{&quot;label&quot;:&quot;Chotsiri_2021 \u00b7 prior_estimateb&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Piperaquine_Zaloumis2012_reference&quot;,&quot;label&quot;:&quot;Zaloumis_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Zaloumis2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Wattanakul_2021_PCIR&quot;,&quot;label&quot;:&quot;Wattanakul_2021 \u00b7 PCIR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/pd_Wattanakul_2021_PCIR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Felices_2025_QTcF&quot;,&quot;label&quot;:&quot;Felices_2025 \u00b7 \u0394\u0394QTcF&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/pd_Felices_2025_QTcF.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Wicha_2022_Pviable&quot;,&quot;label&quot;:&quot;Wicha_2022 \u00b7 Pviable&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/pd_Wicha_2022_Pviable.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Piperaquine — `Piperaquine_Chotsiri2021_prior_estimateb`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> MTT has no unit.

<div class="pk-model-meta" hidden drug="Piperaquine" model-id="Piperaquine_Chotsiri2021_prior_estimateb" status="needs_review" stale="false" population="pregnant women receiving IPTp with dihydroartemisinin-piperaquine" measured-compound="piperaquine" parameterization="apparent" topology="1C"></div>

## Citation
Chotsiri P, Gutman JR, Ahmed R, Poespoprodjo JR, Syafruddin D, Khairallah C et al. Piperaquine Pharmacokinetics during Intermittent Preventive Treatment for Malaria in Pregnancy. Antimicrobial agents and chemotherapy 65(3) (2021).
  ·  DOI: [10.1128/AAC.01150-20](https://doi.org/10.1128/AAC.01150-20)

## Population and dosing

**Population:** pregnant women receiving IPTp with dihydroartemisinin-piperaquine · condition malaria prophylaxis in pregnancy · age group adult.

**Dosing:** 320 mg, oral, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| MTT (h) | MTT | 2.04 | h |  |
| CL/F (liters/h) | CL/F | 59.4 | liters/h | 19.6 (None% RSE) |
| VC/F (liters) | V1/F | 2140 | liters | 38.5 (None% RSE) |
| Q1/F (liters/h) | Q/F | 276 | liters/h | 34.6 (None% RSE) |
| VP2/F (liters) | V3/F | 20700 | liters |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**MTT has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (MTT), so that value has no SI equivalent. Extracted — piperaquine: MTT 2.04 h, CL/F 59.4 liters/h, V1/F 2.14e+03 liters, Q/F 276 liters/h, V3/F 2.07e+04 liters.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| MTT (h) | `Q81` · MTT | 2.04 | h |  |  | h | exact (1) | T2:row2:col1 |  |
| CL/F (liters/h) | `Q27` · CL/F | 59.4 | liters/h | 1.65e-05 | m3/s | l/h | exact (1) | T2:row3:col1 | 19.6 (None% RSE) |
| VC/F (liters) | `Q290` · V1/F | 2140 | liters | 2.14 | m3 | l | exact (1) | T2:row4:col1 | 38.5 (None% RSE) |
| Q1/F (liters/h) | `Q69` · Q/F | 276 | liters/h | 7.667e-05 | m3/s | l/h | exact (1) | T2:row5:col1 | 34.6 (None% RSE) |
| VP2/F (liters) | `Q78` · V3/F | 20700 | liters | 20.7 | m3 | l | exact (1) | T2:row8:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F (liters/h)' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'VC/F (liters)' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'Q2/F (liters/h)' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iov: 'MTT (h)' routed out of structural estimates ('Interoccasion variability (%CV)')
- table section iov: 'F' routed out of structural estimates ('Interoccasion variability (%CV)')
- dropped duplicate Q290 ('VP1/F (liters)', value '3560') — already have one for this compound
- dropped duplicate Q69 ('Q2/F (liters/h)', value '105') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=piperaquine
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- population split: 'prior estimateb' subgroup of Chotsiri_2021 (paper reports 2 populations: population estimatec, prior estimateb)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 3 transcribed (0 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (9/9 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T2:row3:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T2:row4:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['T2:row5:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['T2:row8:col1'] |
| C5_unit_missing_Q81 | fail | [time] | h | ['T2:row2:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 59.4 L/h | ['T2:row3:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.14e+03 L | ['T2:row4:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb/Piperaquine_Chotsiri2021_prior_estimateb_modelica.zip" download>Piperaquine_Chotsiri2021_prior_estimateb_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb/Piperaquine_Chotsiri2021_prior_estimateb_fmi.zip" download>Piperaquine_Chotsiri2021_prior_estimateb_fmi.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb/Piperaquine_Chotsiri2021_prior_estimateb_matlab.zip" download>Piperaquine_Chotsiri2021_prior_estimateb_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb/Piperaquine_Chotsiri2021_prior_estimateb_matlab_simbio.zip" download>Piperaquine_Chotsiri2021_prior_estimateb_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb/Piperaquine_Chotsiri2021_prior_estimateb_sbml.zip" download>Piperaquine_Chotsiri2021_prior_estimateb_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb/Piperaquine_Chotsiri2021_prior_estimateb_cellml.zip" download>Piperaquine_Chotsiri2021_prior_estimateb_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Chotsiri P, Gutman JR, Ahmed R, Poespoprodjo JR, Syafruddin D, Khairallah C et al. Piperaquine Pharmacokinetics during Intermittent Preventive Treatment for Malaria in Pregnancy. Antimicrobial agents and chemotherapy 65(3) (2021). [doi:10.1128/AAC.01150-20](https://doi.org/10.1128/AAC.01150-20)

**This record:** Pharmacolibrary, model `Piperaquine_Chotsiri2021_prior_estimateb`. <https://pharmacolibrary.github.io/#/drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb>

```bibtex
@misc{pharmacolibrary_PiperaquineChotsiri2021priorestimateb,
  title  = {{Pharmacolibrary model Piperaquine_Chotsiri2021_prior_estimateb}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb},
  note   = {Parameters from doi:10.1128/AAC.01150-20},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpiperaquine%5D%20Piperaquine_Chotsiri2021_prior_estimateb&body=Drug%3A%20piperaquine%0ARecord%3A%20Piperaquine_Chotsiri2021_prior_estimateb%0APaper%3A%20Chotsiri_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-07 07:37 UTC</sub>
