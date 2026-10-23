<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;donepezil&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/&quot;},{&quot;label&quot;:&quot;Khwarg_2024 \u00b7 bootstrapa&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Donepezil_Rolan2025_reference&quot;,&quot;label&quot;:&quot;Rolan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Rolan2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Khwarg2024_final_model&quot;,&quot;label&quot;:&quot;Khwarg_2024_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Khwarg2024_final_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Lee2022_ir&quot;,&quot;label&quot;:&quot;Lee_2022_ir&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_ir.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Lee2022_sr_1&quot;,&quot;label&quot;:&quot;Lee_2022_sr_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_sr_1.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Park2025_reference&quot;,&quot;label&quot;:&quot;Park_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Park2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# donepezil — `Donepezil_Khwarg2024_bootstrapa`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="donepezil" model-id="Donepezil_Khwarg2024_bootstrapa" status="needs_review" stale="false" population="healthy adults" measured-compound="donepezil" parameterization="mechanistic" topology="1C"></div>

## Citation
Khwarg J, Lee H, Yu KS, Seol E, Chung JY. Population Pharmacokinetic Modeling and Simulation for Dose Optimization of GB-5001, a Long-Acting Intramuscular Injection of Donepezil, in Healthy Participants. Neurology and therapy 13(5):1453–1466 (2024).
  ·  DOI: [10.1007/s40120-024-00643-4](https://doi.org/10.1007/s40120-024-00643-4)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

**Dosing:** 10, 70, 140, 280 mg, im/oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Absorption lag time (depot 1) | tlag | 0.931 | h |
| Propofol Vd | V | 300.0 | L |
| Absorption rate constant, /hour | kabs | 2.73 | /hour |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.364). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Bakker_2021, Ynineb_2025) cannot stand in for this paper's evidence. Extracted — donepezil: tlag 0.931 h, V 300 L, kabs 2.73 /hour.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[absorption lag time].value`: this record has 0.931, the second reading 0.887; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Absorption lag time (depot 1) | `Q83` · tlag | 0.931 | h | 3352 | s | h | exact (1) | Tab2:row8:col2, Tab2:row8:col6 |
| Propofol Vd | `Q61` · V | 300.0 | L | 0.3 | m3 | L | review_gapfill (0.7) | Ynineb_2025:review |
| Absorption rate constant, /hour | `Q49` · kabs | 2.73 | /hour | 0.0007583 | 1/s | 1/h | review_gapfill (0.7) | Bakker_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Clearance | Q22 | exact |
| Intercompartmental clearance | Q30 | exact |
| F1 oral bioavailability | Q40 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- table section covariance: 'IIV volume of distribution (peripheral)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'IIV oral bioavailability' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Proportional error' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Additive error' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Intramuscular' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Fraction of dose (depot 5)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Absorption rate constant (depot 4)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Clearance' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Volume of distribution (central)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Intercompartmental clearance' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Volume of distribution (peripheral)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Duration of zero order absorption' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Absorption lag time (depot 4)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Absorption lag time (depot 5)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'IIV on clearance' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'IIV on volume of distribution (central)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Covariance clearance vs volume of distribution (central)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- dropped value-less row: 'Absorption rate constant (depot 1)' (captured trailing unit 'depot 1' for child rows)
- unit 'depot 1' inherited from a section-header row for CL (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit_dimension_unknown: 'depot 1' (CL)
- dropped value-less row: 'Volume of distribution (central)' (captured trailing unit 'central' for child rows)
- unit 'central' inherited from a section-header row for Q (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit_dimension_unknown: 'central' (Q)
- dropped value-less row: 'Volume of distribution (peripheral)' (captured trailing unit 'peripheral' for child rows)
- unit_dimension_unknown: 'depot 1' (tlag)
- implicit units: 'Absorption lag time (depot 1)' → h (from the popPK convention: 'The paper does not state a unit for the absorption lag time in the table or text. Lag times are conventionally reported ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=donepezil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'bootstrapa' subgroup of Khwarg_2024 (paper reports 2 populations: bootstrapa, final model)
- gap-filled Q61 (V) from Ynineb_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Bakker_2021's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab2:row2:col2 = 'F1'
- unparsed cell Tab2:row3:col2 = '0.203 h−1'
- unparsed cell Tab2:row3:col3 = '11.40%'
- unparsed cell Tab2:row4:col3 = '6.50%'
- unparsed cell Tab2:row5:col1 = 'V2'
- unparsed cell Tab2:row5:col2 = '39.5 L'
- unparsed cell Tab2:row5:col3 = '36.50%'
- unparsed cell Tab2:row6:col3 = '9.60%'
- unparsed cell Tab2:row7:col1 = 'V3'
- unparsed cell Tab2:row7:col2 = '1080 L'
- unparsed cell Tab2:row7:col3 = '5.90%'
- unparsed cell Tab2:row8:col1 = 'ALAG1'
- unparsed cell Tab2:row8:col3 = '1.70%'
- unparsed cell Tab2:row9:col2 = '0.0475 (22.1%)b'
- unparsed cell Tab2:row9:col3 = '39.20%'
- unparsed cell Tab2:row9:col4 = '48.30%'
- unparsed cell Tab2:row10:col2 = '1.59 (197.6%)b'
- unparsed cell Tab2:row10:col3 = '31.10%'
- unparsed cell Tab2:row10:col4 = '45.60%'
- unparsed cell Tab2:row12:col2 = '0.0153 (12.4%)b'
- unparsed cell Tab2:row12:col3 = '44.10%'
- unparsed cell Tab2:row12:col4 = '61%'
- unparsed cell Tab2:row13:col2 = '0.0162 (12.8%)b'
- unparsed cell Tab2:row13:col3 = '28.60%'
- unparsed cell Tab2:row13:col4 = '50.70%'
- unparsed cell Tab2:row14:col3 = '11.50%'
- unparsed cell Tab2:row15:col3 = '13%'
- unparsed cell Tab2:row16:col2 = 'F4'
- unparsed cell Tab2:row16:col4 = '1.90%'
- unparsed cell Tab2:row17:col1 = 'F5'
- unparsed cell Tab2:row17:col3 = '11.20%'
- unparsed cell Tab2:row18:col1 = 'KA4'
- unparsed cell Tab2:row18:col2 = '0.00402 h−1'
- unparsed cell Tab2:row18:col3 = '6.70%'
- unparsed cell Tab2:row19:col1 = 'KA5'
- unparsed cell Tab2:row19:col2 = '0.0134 h−1'
- unparsed cell Tab2:row19:col3 = '17.20%'
- unparsed cell Tab2:row19:col6 = '(0.011—0.034)'
- unparsed cell Tab2:row20:col3 = '6.10%'
- unparsed cell Tab2:row21:col1 = 'V2'
- unparsed cell Tab2:row21:col2 = '503 L'
- unparsed cell Tab2:row21:col3 = '29%'
- unparsed cell Tab2:row22:col3 = '18.10%'
- unparsed cell Tab2:row23:col1 = 'V3'
- unparsed cell Tab2:row23:col2 = '1160 L'
- unparsed cell Tab2:row23:col3 = '8.30%'
- unparsed cell Tab2:row24:col1 = 'D2'
- unparsed cell Tab2:row24:col3 = '0.20%'
- unparsed cell Tab2:row25:col1 = 'ALAG4'
- unparsed cell Tab2:row25:col3 = '0.50%'
- unparsed cell Tab2:row26:col1 = 'ALAG5'
- unparsed cell Tab2:row26:col3 = '0.20%'
- unparsed cell Tab2:row27:col2 = '0.0936 (31.3%)b'
- unparsed cell Tab2:row27:col3 = '24%'
- unparsed cell Tab2:row27:col4 = '18.10%'
- unparsed cell Tab2:row28:col2 = '1.13 (144.8%)b'
- unparsed cell Tab2:row28:col3 = '39.70%'
- unparsed cell Tab2:row28:col4 = '20.70%'
- unparsed cell Tab2:row29:col3 = '55.20%'
- unparsed cell Tab2:row29:col6 = '(− 0.02–0.239)'
- unparsed cell Tab2:row30:col3 = '5%'
- unparsed cell Tab2:row31:col3 = '14.40%'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.364 (4/11 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption lag time].value` | 0.931 | 0.887 | mismatch |
| `gpt-oss-120b` | `parameters[absorption rate constant].value` | 2.73 | 0.165 | mismatch |
| `gpt-oss-120b` | `parameters[clearance].value` |  | 12.602 | mismatch |
| `gpt-oss-120b` | `parameters[f1 oral bioavailability]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartmental clearance].value` |  | 70.362 | mismatch |
| `gpt-oss-120b` | `parameters[propofol vd]` | 300.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` |  | 19.526 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Bakker_2021:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Ynineb_2025:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab2:row8:col2', 'Tab2:row8:col6'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 300 L | ['Ynineb_2025:review'] |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdonepezil%5D%20Donepezil_Khwarg2024_bootstrapa&body=Drug%3A%20donepezil%0ARecord%3A%20Donepezil_Khwarg2024_bootstrapa%0APaper%3A%20Khwarg_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_donepezil/Donepezil_Khwarg2024_bootstrapa%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 01:30 UTC</sub>
