<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;naldemedine&quot;,&quot;href&quot;:&quot;drugs/drug_naldemedine/&quot;},{&quot;label&quot;:&quot;Kubota_2018 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# naldemedine — `Naldemedine_Kubota2018_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">built, not shipped</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**No value for naldemedine's clearance, volume of distribution and absorption rate constant; the covariate scenarios were not simulated (+2 more).**

The model was built, but naldemedine's clearance, volume of distribution and absorption rate constant had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (equation variable), so that value has no SI equivalent. Extracted — naldemedine: Q/F 4.77 L/h, V2/F 41.8 L, tlag 0.195 hr.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Kubota R et al., Population Pharmacokinetics and Exposur…, Pharmaceutical research (2018)
  ·  DOI: [10.1007/s11095-018-2501-7](https://doi.org/10.1007/s11095-018-2501-7)

<div class="pk-model-meta" hidden drug="naldemedine" model-id="Naldemedine_Kubota2018_reference" status="model_quarantined" stale="false" population="healthy subjects, patients with chronic non-cancer pain and OIC, and cancer patients with OIC" measured-compound="naldemedine" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 3 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| THETA (2) | `Q900` · equation variable | -0.195 | 2 | not captured | [2] | not captured | llm (0.6) | Tab3:row4:col1 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 4.77 | L/h | 1.325e-06 | [l] / [h] | not captured | exact (1.0) | Tab3:row16:col1 | — | 46.3 (None% RSE) |
| Vp/F | `Q82` · V2/F | 41.8 | L | 0.0418 | L | not captured | exact (1.0) | Tab3:row17:col1 | — | 36.3 (None% RSE) |
| ALAG (hr) | `Q83` · tlag | 0.195 | hr | 702.0 | [h] | not captured | exact (1.0) | Tab3:row18:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL/F (L/h) | Q27 | not captured | exact |
| Vc/F (L) | Q290 | not captured | exact |
| Ka (hr−1) | Q49 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'Vc/F' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'Ka' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'Q/F' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'Vp/F' routed out of structural estimates ('Inter-individual variability (CV%)')
- table representations disagree for 'CL/F (L/h)'; source reconciliation required
- table representations disagree for 'THETA (1)'; source reconciliation required
- table representations disagree for 'THETA (2)'; source reconciliation required
- table representations disagree for 'THETA (3)'; source reconciliation required
- table representations disagree for 'THETA (4)'; source reconciliation required
- table representations disagree for 'THETA (5)'; source reconciliation required
- table representations disagree for 'Vc/F (L)'; source reconciliation required
- table representations disagree for 'THETA (6)'; source reconciliation required
- table representations disagree for 'THETA (7)'; source reconciliation required
- table representations disagree for 'THETA (8)'; source reconciliation required
- table representations disagree for 'THETA (9)'; source reconciliation required
- table representations disagree for 'Ka (hr−1)'; source reconciliation required
- table representations disagree for 'THETA (10)'; source reconciliation required
- table representations disagree for 'THETA (11)'; source reconciliation required
- table representations disagree for 'Q/F (L/h)'; source reconciliation required
- table representations disagree for 'Vp/F'; source reconciliation required
- table representations disagree for 'ALAG (hr)'; source reconciliation required
- table representations disagree for 'proportional'; source reconciliation required
- dropped unlinked row (NIL): 'THETA (1)' — extend the ontology if this is a real PK parameter (source ['Tab3:row3:col1'])
- dropped duplicate Q900 ('THETA (3)', value '0.0739') — already have one for this compound
- dropped duplicate Q900 ('THETA (4)', value '0.870') — already have one for this compound
- dropped duplicate Q900 ('THETA (5)', value '0.902') — already have one for this compound
- dropped unlinked row (NIL): 'THETA (6)' — extend the ontology if this is a real PK parameter (source ['Tab3:row9:col1'])
- dropped unlinked row (NIL): 'THETA (7)' — extend the ontology if this is a real PK parameter (source ['Tab3:row10:col1'])
- dropped unlinked row (NIL): 'THETA (8)' — extend the ontology if this is a real PK parameter (source ['Tab3:row11:col1'])
- dropped unlinked row (NIL): 'THETA (9)' — extend the ontology if this is a real PK parameter (source ['Tab3:row12:col1'])
- dropped unlinked row (NIL): 'THETA (10)' — extend the ontology if this is a real PK parameter (source ['Tab3:row14:col1'])
- dropped duplicate Q900 ('THETA (11)', value '-1.16') — already have one for this compound
- routed 'proportional' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- implicit units: 'Vp/F' → L (from the paper text: "The paper text states: 'The population parameter estimates were: ... Vp/F = 41.8 L'")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=naldemedine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- bound model equation to Q27 (CL/F): CL/F = THETA (1) * (Age/52) ** THETA (2) * (CLcr/108) ** THETA (3) * THETA (4) ** White * THETA (5) ** Gender
- bound model equation to Q49 (kabs): Ka = THETA (10) * (Age/52) ** THETA (11)
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'CL/F (L/h)'; equation kept verbatim
- Q49 (kabs) is equation-defined: value moved to equation-variable 'Ka (hr−1)'; equation kept verbatim
- status held at route_to_review — not promoted

**Extraction notes:**
- table Tab3: unbound_uncertainty
- table Tab3: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 3
- captured model equation CL/F = THETA (1) * (Age/52) ** THETA (2) * (CLcr/108) ** THETA (3) * THETA (4) ** White * THETA (5) ** Gender
- captured model equation Ka = THETA (10) * (Age/52) ** THETA (11)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row2:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row13:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row16:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row17:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab3:row18:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q82 | pass | volume within physiological range | 41.8 L | not captured | not captured | ['Tab3:row17:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | fail | 3 scholar param(s) emitted or defaulted | 2 covered | not captured | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_naldemedine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kubota_2018` / `Kubota_2018::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_naldemedine/models/modelica/_needs_review/Naldemedine_Kubota2018_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_naldemedine/models/modelica/_needs_review/Naldemedine_Kubota2018_reference.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 01:00 UTC</sub>
