<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;belantamab mafodotin&quot;,&quot;href&quot;:&quot;drugs/drug_belantamab_mafodotin/&quot;},{&quot;label&quot;:&quot;Papathanasiou_2025 \u00b7 cys_mcmmaf_final_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BelantamabMafodotin_FerronBrady2021_reference&quot;,&quot;label&quot;:&quot;Ferron-Brady_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_belantamab_mafodotin/BelantamabMafodotin_FerronBrady2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# belantamab mafodotin — `BelantamabMafodotin_Papathanasiou2025_cys_mcmmaf_final_model`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. No parameter values were extracted.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `belantamab mafodotin`, measured `belantamab mafodotin ADC`.

## Citation
Papathanasiou T et al., Population Pharmacokinetics for Belanta…, Clinical pharmacokinetics (2025)
  ·  DOI: [10.1007/s40262-025-01508-1](https://doi.org/10.1007/s40262-025-01508-1)

<div class="pk-model-meta" hidden drug="belantamab mafodotin" model-id="BelantamabMafodotin_Papathanasiou2025_cys_mcmmaf_final_model" status="needs_review" stale="false" population="patients with relapsed/refractory multiple myeloma" measured-compound="belantamab mafodotin ADC" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CLi = θCLMMAF · (SBCMABL/50)θCL_SBCMABL· (WTBL/75)θCL_WTBL · exp(ηCLMMAF+ κCLMMAF, j) | Q22 | not captured | llm |
| cys-mcMMAF Vci = θcys-mcMMAF Vc · (SBCMABL/50)θcys-mcMMAF Vc_SBCMABL · (IGGBL/15)θcys-mcMMAF Vc_IGGBL · (ALBBL/40)θcys-mcMMAF Vc_ALBBL · (WTBL/75)θcys-mcMMAF Vc_WTBL · (IBMIBL/27)θcys-mcMMAF Vc_IBMIBL · (θCLMMAF_RACEA) [if Asian] · (θCLMMAF_RACEB) [if AA] · exp(ηcys-mcMMAF Vc + κcys-mcMMAF Vc, j) | Q900 | not captured | llm_corrected |
| K43 = θK43·exp(ηK43) | Q48 | not captured | llm_confirmed |
| IMAXi | Q323 | not captured | boundary |

## Departures & gaps

**Interpretation flags:**
- table section iov: 'On CLMMAF' routed out of structural estimates ('Inter-patient and inter-occasion variability CV%')
- table section iov: 'On cys-mcMMAF Vc' routed out of structural estimates ('Inter-patient and inter-occasion variability CV%')
- table section iov: 'On K43' routed out of structural estimates ('Inter-patient and inter-occasion variability CV%')
- table section iov: 'On IOV CLMMAF' routed out of structural estimates ('Inter-patient and inter-occasion variability CV%')
- table section iov: 'On IOV cys-mcMMAF Vc' routed out of structural estimates ('Inter-patient and inter-occasion variability CV%')
- table section residual_error: 'Proportional error CV%' routed out of structural estimates ('Residual error')
- table section residual_error: 'Y = IPRED + IPRED · ε1 + ε2' routed out of structural estimates ('Residual error')
- unit_dimension_unknown: 'ηCLMMAF+ κCLMMAF, j' (CL)
- unit_dimension_unknown: 'ηcys-mcMMAF Vc + κcys-mcMMAF Vc, j' (equation variable)
- unit_dimension_unknown: 'ηK43' (kcomp)
- routed 'Log-normal distribution CV% = SQRT(exp(Ω) − 1) · 100' → Q313 (IOV) to iov — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=belantamab mafodotin ADC
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- bound model equation to Q22 (CL): CLi = θCL*exp(CL,Time)*(ALBBL/40)^θCL_ALBBL * (SBCMABL/50)^θCL_SBCMABL * (IGGBL/15)^θCL_IGGBL
- model equation 'Qi = θQ * (WTBL/75)^θCL_WTBL * exp(ηQ)' not bound — neither LHS nor base term 'θQ' linked to an ontology parameter
- bound model equation to Q323 (Imax): IMAXi = θIMAX * (θIMAX_COMBO) [if not monotherapy] * (IGGBL/15)^θIMAX_IGGBL * (SBCMABL/50)^θIMAX_SBCMABL + (ηIMAX)
- model equation 'TI50i = θTI50 * (IGGBL/15)^θΤΙ50_IGGBL * exp(ηTI50)' not bound — neither LHS nor base term 'θTI50' linked to an ontology parameter
- Q22 (CL) is equation-defined: value moved to equation-variable 'CLi = θCLMMAF · (SBCMABL/50)θCL_SBCMABL· (WTBL/75)θCL_WTBL · exp(ηCLMMAF+ κCLMMAF, j)'; equation kept verbatim
- Q323 (Imax) is equation-defined: value moved to equation-variable 'IMAXi'; equation kept verbatim
- status held at route_to_review — not promoted
- population split: 'cys-mcmmaf final model' subgroup of Papathanasiou_2025 (paper reports 2 populations: cys-mcmmaf final model, estimate)
- molar mass: no plausible PubChem entry for 'belantamab mafodotin ADC' ('belantamab mafodotin') — left in mass units
- molar mass: none found for 'belantamab_mafodotin' — its concentrations stay mass-only
- molar mass: none found for 'belantamab mafodotin ADC' — its concentrations stay mass-only
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- table Papathanasiou_2025_table_p8_1: unbound_uncertainty
- table Papathanasiou_2025_table_p8_1: conflicting_units
- table Papathanasiou_2025_table_p8_1: unparsed_numeric_cell
- table Papathanasiou_2025_table_3: unbound_uncertainty
- table Papathanasiou_2025_table_3: unspecified_interval_bound
- table Papathanasiou_2025_table_3: units_need_context
- table Papathanasiou_2025_table_3: ragged_grid
- table Papathanasiou_2025_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (67 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3
- captured model equation CLi = θCL*exp(CL,Time)*(ALBBL/40)^θCL_ALBBL * (SBCMABL/50)^θCL_SBCMABL * (IGGBL/15)^θCL_IGGBL
- captured model equation Qi = θQ * (WTBL/75)^θCL_WTBL * exp(ηQ)
- captured model equation IMAXi = θIMAX * (θIMAX_COMBO) [if not monotherapy] * (IGGBL/15)^θIMAX_IGGBL * (SBCMABL/50)^θIMAX_SBCMABL + (ηIMAX)
- captured model equation TI50i = θTI50 * (IGGBL/15)^θΤΙ50_IGGBL * exp(ηTI50)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_belantamab_mafodotin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Papathanasiou_2025` / `Papathanasiou_2025::cys_mcmmaf_final_model`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 18:13 UTC</sub>
