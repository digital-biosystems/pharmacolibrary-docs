<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;niraparib&quot;,&quot;href&quot;:&quot;drugs/drug_niraparib/&quot;},{&quot;label&quot;:&quot;Monk_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Niraparib_Gaffney2026_reference&quot;,&quot;label&quot;:&quot;Gaffney_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_niraparib/Niraparib_Gaffney2026_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Niraparib_Quesada2025_reference&quot;,&quot;label&quot;:&quot;Quesada_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_niraparib/Niraparib_Quesada2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# niraparib — `Niraparib_Monk2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has niraparib, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Monk BJ et al., Niraparib Population Pharmacokinetics a…, Clinical therapeutics (2024)
  ·  DOI: [10.1016/j.clinthera.2024.06.001](https://doi.org/10.1016/j.clinthera.2024.06.001)

<div class="pk-model-meta" hidden drug="niraparib" model-id="Niraparib_Monk2024_reference" status="rejected" stale="false" population="patients with solid tumors including ovarian cancer" measured-compound="niraparib" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F, L/h' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'Vc/F, L' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'Q1/F, L/h' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'Vp1/F, L' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'K a , 1/h' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'D1, fasted, h' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'T lag , h' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'F rel (-)' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'Q2/F, L/h' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'Vp2/F, L' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'CL/F: age exponent' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'CL/F: albumin exponent' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'CL/F: nCrCl exponent' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'Vc/F: BW exponent' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'D1: fed fractional change' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'D1: unknown prandial state fractional change' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section residual_error: 'Residual variability: SD PN001, log (ng/mL)' routed out of structural estimates ('Residual error')
- table section residual_error: 'Residual variability: SD NOVA, log (ng/mL)' routed out of structural estimates ('Residual error')
- table section residual_error: 'Residual variability: SD QUADRA, log (ng/mL)' routed out of structural estimates ('Residual error')
- table section residual_error: 'Residual variability: SD PRIMA, log (ng/mL)' routed out of structural estimates ('Residual error')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=niraparib
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell tab_1:row3:col3 = '16.5 (16.0-16.9)'
- unparsed cell tab_1:row3:col6 = '23.1 (19.1-26.9)'
- unparsed cell tab_1:row4:col3 = '418 (379-452)'
- unparsed cell tab_1:row5:col3 = '1.37 (0.979-1.78)'
- unparsed cell tab_1:row6:col3 = '313 (274-359)'
- unparsed cell tab_1:row7:col3 = '1.03 (0.850-1.21)'
- unparsed cell tab_1:row7:col6 = '70.7 (54.1-88.3)'
- unparsed cell tab_1:row8:col3 = '0.219 (0.0930-0.354)'
- unparsed cell tab_1:row8:col6 = '232 (173-349)'
- unparsed cell tab_1:row9:col3 = '0.469 (0.393-0.575)'
- unparsed cell tab_1:row10:col6 = '30.9 (27.7-34.3)'
- unparsed cell tab_1:row11:col3 = '69.4 (60.5-81.5)'
- unparsed cell tab_1:row12:col3 = '582 (509-661)'
- unparsed cell tab_1:row12:col6 = '113 (87.7-146)'
- unparsed cell tab_1:row13:col3 = '-0.183 (-0.369 to -0.0188)'
- unparsed cell tab_1:row14:col3 = '0.488 (0.310-0.663)'
- unparsed cell tab_1:row15:col3 = '0.240 (0.145-0.327)'
- unparsed cell tab_1:row16:col3 = '0.461 (0.270-0.629)'
- unparsed cell tab_1:row17:col3 = '16.7 (7.10-28.3)'
- unparsed cell tab_1:row18:col3 = '1.46 (0.610-3.75)'
- unparsed cell tab_1:row20:col3 = '0.214 (0.196-0.233)'
- unparsed cell tab_1:row21:col3 = '0.330 (0.297-0.361)'
- unparsed cell tab_1:row22:col3 = '0.379 (0.341-0.422)'
- unparsed cell tab_1:row23:col3 = '0.455 (0.423-0.491)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (2/4 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | niraparib | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | niraparib | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_niraparib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Monk_2024` / `Monk_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 21:09 UTC</sub>
