<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;primaquine&quot;,&quot;href&quot;:&quot;drugs/drug_primaquine/&quot;},{&quot;label&quot;:&quot;Lee_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Primaquine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_primaquine/Primaquine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Primaquine_Sridharan2019_reference&quot;,&quot;label&quot;:&quot;Sridharan_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_primaquine/Primaquine_Sridharan2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# primaquine — `Primaquine_Lee2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="primaquine" model-id="Primaquine_Lee2021_reference" status="rejected" stale="false" population="healthy Korean adults (normal and obese groups)" measured-compound="primaquine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Lee WY, Chae DW, Kim CO, Lee SE, Kwak YG, Yeom JS et al. Population Pharmacokinetics of Primaquine in the Korean Population. Pharmaceutics 13(5) (2021).
  ·  DOI: [10.3390/pharmaceutics13050652](https://doi.org/10.3390/pharmaceutics13050652)

## Population and dosing

**Population:** healthy Korean adults (normal and obese groups) · condition healthy · age group adult · n = 24.

**Dosing:** 15 mg, oral, multiple, every 24 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

<sub>reviewed by rule template (no LLM)</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CLMAO | Q351 | llm |
| CLCYP | Q370 | llm |
| CLM | Q22 | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2V3' routed out of structural estimates ('Inter-Individual Variabilities')
- table section iiv: 'ω2CLMAO' routed out of structural estimates ('Inter-Individual Variabilities')
- table section iiv: 'ω2CLCYP' routed out of structural estimates ('Inter-Individual Variabilities')
- table section iiv: 'ω2KA' routed out of structural estimates ('Inter-Individual Variabilities')
- table section iiv: 'ω2CLM' routed out of structural estimates ('Inter-Individual Variabilities')
- table section iiv: 'ω2ALAG' routed out of structural estimates ('Inter-Individual Variabilities')
- table section residual_error: 'σ2pro1' routed out of structural estimates ('Residual Error')
- table section residual_error: 'σ2add' routed out of structural estimates ('Residual Error')
- table section residual_error: 'σ2pro2' routed out of structural estimates ('Residual Error')
- dropped value-less row: 'V3'
- dropped value-less row: 'V4'
- unit_dimension_mismatch: 'CLMAO' → Q351 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'CLCYP' → Q370 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'CLM' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped value-less row: 'KA'
- dropped value-less row: 'ALAG1'
- dropped unlinked row (NIL): 'COVAS' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00652-t002:row9:col2', 'pharmaceutics-13-00652-t002:row9:col3'])
- dropped unlinked row (NIL): 'COVBW' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00652-t002:row10:col2', 'pharmaceutics-13-00652-t002:row10:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=primaquine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model (site hepatic: 'A minimal physiology-based pharmacokinetic model connected with a liver compartment comprehensively described the data, ')
- status held at route_to_review — not promoted
- row roles (LLM): model_class=pbpk; 18/18 row label(s) assigned, 10 linked by role; re-tagged parent→carboxyprimaquine ×3
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell pharmaceutics-13-00652-t002:row2:col2 = '142.2 (L)'
- unparsed cell pharmaceutics-13-00652-t002:row3:col2 = '30.1 (L)'
- unparsed cell pharmaceutics-13-00652-t002:row5:col1 = 'CL of PQ via CYP2D6 pathway'
- unparsed cell pharmaceutics-13-00652-t002:row7:col2 = '1.7 (h−1)'
- unparsed cell pharmaceutics-13-00652-t002:row8:col2 = '0.45 (h)'
- unparsed cell pharmaceutics-13-00652-t002:row12:col1 = 'BSV on V3'
- unparsed cell pharmaceutics-13-00652-t002:row12:col2 = '16.6 (CV%)'
- unparsed cell pharmaceutics-13-00652-t002:row13:col2 = '22.7 (CV%)'
- unparsed cell pharmaceutics-13-00652-t002:row14:col2 = '55.2 (CV%)'
- unparsed cell pharmaceutics-13-00652-t002:row15:col2 = '82.9 (CV%)'
- unparsed cell pharmaceutics-13-00652-t002:row16:col2 = '20 (CV%)'
- unparsed cell pharmaceutics-13-00652-t002:row17:col2 = '6.8 (CV%)'
- unparsed cell pharmaceutics-13-00652-t002:row19:col2 = '17.9 (CV%)'
- unparsed cell pharmaceutics-13-00652-t002:row20:col2 = '22.3 (SD)'
- unparsed cell pharmaceutics-13-00652-t002:row21:col2 = '15.7 (CV%)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | fail |  | 0 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q22 | fail | [luminosity] / [length] ** 2 | Unit | ['pharmaceutics-13-00652-t002:row6:col2', 'pharmaceutics-13-00652-t002:row6:col3'] |
| C5_dimension_Q351 | fail | [luminosity] / [length] ** 2 | Unit | ['pharmaceutics-13-00652-t002:row4:col2', 'pharmaceutics-13-00652-t002:row4:col3'] |
| C5_dimension_Q370 | fail | [luminosity] / [length] ** 2 | Unit | ['pharmaceutics-13-00652-t002:row5:col2', 'pharmaceutics-13-00652-t002:row5:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprimaquine%5D%20Primaquine_Lee2021_reference&body=Drug%3A%20primaquine%0ARecord%3A%20Primaquine_Lee2021_reference%0APaper%3A%20Lee_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_primaquine/Primaquine_Lee2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:50 UTC</sub>
