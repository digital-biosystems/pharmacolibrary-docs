<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;azithromycin&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/&quot;},{&quot;label&quot;:&quot;Methaneethorn_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Azithromycin_Alshehri2023_reference&quot;,&quot;label&quot;:&quot;Alshehri_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Alshehri2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azithromycin_Benn2017_reference&quot;,&quot;label&quot;:&quot;Benn_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Benn2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azithromycin_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# azithromycin — `Azithromycin_Methaneethorn2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Azithromycin clearance and central volume of distribution lacked extracted values, so library placeholders were used.

<div class="pk-model-meta" hidden drug="azithromycin" model-id="Azithromycin_Methaneethorn2025_reference" status="model_quarantined" stale="false" population="mixed (adults, children, preterm newborns, pregnant women)" measured-compound="azithromycin" parameterization="mechanistic" topology="1C"></div>

## Citation
Methaneethorn J, Jiao Z, AlEjielat R, Jirasomprasert T. Influential predictors of azithromycin pharmacokinetics: a systematic review of population pharmacokinetics. Annals of medicine 57(1):2496792 (2025).
  ·  DOI: [10.1080/07853890.2025.2496792](https://doi.org/10.1080/07853890.2025.2496792)

## Population and dosing

**Population:** mixed (adults, children, preterm newborns, pregnant women) · condition mixed (healthy, infections, respiratory, CAP) · age group mixed.

**Dosing:** 500 mg, oral, single.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — mechanistic, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 0 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.909). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Azithromycin clearance and central volume of distribution lacked extracted values, so library placeholders were used.**

The record defines parameters for clearance and central volume of distribution without specific numeric estimates. Because these key pharmacokinetic values were missing, the model builder used default placeholders instead of fitted data. Consequently, the model was quarantined to prevent publication with unverified default assumptions. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of zheng et al 2018 [38]: this record has none, the second reading none. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| V1/F | Q290 | exact |
| V2/F | Q82 | exact |
| CL/F | Q27 | exact |
| Q2/F | Q69 | special_case |
| V1 | Q63 | exact |
| CL | Q22 | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Muto et al 2011 [35]' routed out of structural estimates ('Between-subject variability (%CV)')
- column 'pk parameter–covariate relationship' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'model qualification' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Salman et al 2010 [18]' — extend the ontology if this is a real PK parameter (source ['t0002:row1:col3'])
- dropped unlinked row (NIL): 'Zhang et al 2010 [29]' — extend the ontology if this is a real PK parameter (source ['t0002:row9:col3'])
- dropped unlinked row (NIL): 'Muto et al 2011 [35]' — extend the ontology if this is a real PK parameter (source ['t0002:row14:col3'])
- dropped unlinked row (NIL): 'Hassan et al 2011 [36]' — extend the ontology if this is a real PK parameter (source ['t0002:row20:col3'])
- dropped unlinked row (NIL): 'Fischer et al 2012 [19]' — extend the ontology if this is a real PK parameter (source ['t0002:row24:col3'])
- dropped unlinked row (NIL): 'Dumitrescu et al 2013 [30]' — extend the ontology if this is a real PK parameter (source ['t0002:row31:col3'])
- dropped unlinked row (NIL): 'Sampson et al 2014 [32]' — extend the ontology if this is a real PK parameter (source ['t0002:row39:col3'])
- dropped unlinked row (NIL): 'Zhao et al 2014 [17]' — extend the ontology if this is a real PK parameter (source ['t0002:row51:col3'])
- dropped unlinked row (NIL): 'Zheng et al 2014 [31]' — extend the ontology if this is a real PK parameter (source ['t0002:row59:col3'])
- dropped unlinked row (NIL): 'Merchan et al 2015 [37]' — extend the ontology if this is a real PK parameter (source ['t0002:row74:col3'])
- dropped unlinked row (NIL): 'Salman et al 2016 [34]' — extend the ontology if this is a real PK parameter (source ['t0002:row78:col3'])
- dropped unlinked row (NIL): 'Zheng et al 2018 [38]' — extend the ontology if this is a real PK parameter (source ['t0002:row95:col3', 't0002:row95:col7'])
- dropped unlinked row (NIL): 'Wu et al 2019 [33]' — extend the ontology if this is a real PK parameter (source ['t0002:row99:col3'])
- dropped unlinked row (NIL): 'Chotsiri et al 2022 [20]' — extend the ontology if this is a real PK parameter (source ['t0002:row103:col3'])
- dropped unlinked row (NIL): 'Zhang et al 2024 [39]' — extend the ontology if this is a real PK parameter (source ['t0002:row111:col3'])
- table mostly unlinked (15/15 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=azithromycin
- bound model equation to Q290 (V1/F): V1/F = 1,830 * (weight/70)^1.03 * (age/45)–0.256
- bound model equation to Q82 (V2/F): V2/F = 4,340 * (weight/70)^1
- bound model equation to Q27 (CL/F): CL/F = 103 * (weight/70)^0.917 * (age/45)–0.166
- bound model equation to Q69 (Q/F): Q2/F = 138 * (weight/70)^0.75
- bound model equation to Q63 (V1): V1 = 45.65 * (weight/14.4)^1
- bound model equation to Q22 (CL): CL = 1.27 * (weight/14.4)^0.75 * (age in month/39)^0.19
- Q290 (V1/F) is equation-defined: value moved to equation-variable 'V1/F'; equation kept verbatim
- Q82 (V2/F) is equation-defined: value moved to equation-variable 'V2/F'; equation kept verbatim
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'CL/F'; equation kept verbatim
- Q69 (Q/F) is equation-defined: value moved to equation-variable 'Q2/F'; equation kept verbatim
- Q63 (V1) is equation-defined: value moved to equation-variable 'V1'; equation kept verbatim
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL'; equation kept verbatim
- status held at "Needs review" — not promoted
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell t0002:row1:col2 = '3-CMT with zero-order followed by first-order absorption and linear elimination'
- unparsed cell t0002:row1:col5 = '76.9%'
- unparsed cell t0002:row1:col6 = 'Prop: (31.2%)'
- unparsed cell t0002:row9:col2 = '2-CMT with first-order absorption and elimination'
- unparsed cell t0002:row9:col5 = '83.2%'
- unparsed cell t0002:row9:col6 = 'Prop: (32.96%)Add: SD &lt; 0.01'
- unparsed cell t0002:row14:col2 = '2-CMT with first-order absorption and elimination'
- unparsed cell t0002:row14:col5 = '110%'
- unparsed cell t0002:row14:col6 = 'Prop: (30%)'
- unparsed cell t0002:row20:col2 = '2-CMT with first-order elimination'
- unparsed cell t0002:row20:col6 = 'Prop: (28.7%)'
- unparsed cell t0002:row24:col2 = '3-CMT with first-order absorption (and a lag time) and elimination'
- unparsed cell t0002:row24:col6 = 'Prop: (32%)'
- unparsed cell t0002:row31:col2 = '3-CMT with first-order absorption, lag time, and first-order elimination'
- unparsed cell t0002:row31:col5 = '26.2%'
- unparsed cell t0002:row31:col6 = 'Prop (plasma): (24.1%)Prop (blood): (23.2%)'
- unparsed cell t0002:row39:col2 = '4-CMT with first-order absorption and first-order elimination from central compartment'
- unparsed cell t0002:row39:col5 = '41%'
- unparsed cell t0002:row39:col6 = 'Prop (blood): (47%)Prop (PMBC): (74%))Prop (PMN): (64%)'
- unparsed cell t0002:row51:col2 = '3-CMT with first-order absorption and elimination'
- unparsed cell t0002:row51:col6 = 'NR: 0.406'
- unparsed cell t0002:row59:col2 = '3-CMT with first-order absorption, lag time, and first-order elimination and tissue distribution model in interstitial fluid of muscle and subcutaneous adipose tissue'
- unparsed cell t0002:row59:col6 = 'PlasmaProp: 0.14Add: 35.2Muscle ISFProp: 0.14Add: 0.51Subcutis ISFProp: 0.34Add: 1 × 10-6PMLcytosolProp: 0.23Add: 1 × 10-6'
- unparsed cell t0002:row74:col2 = '2-CMT with first-order elimination'
- unparsed cell t0002:row74:col5 = '78.2%'
- unparsed cell t0002:row74:col6 = 'Prop: (28%)'
- unparsed cell t0002:row78:col2 = '3-CMT with mixed zero- and first-order absorption, and first-order elimination'
- unparsed cell t0002:row78:col6 = 'Prop: (32%)'
- unparsed cell t0002:row95:col2 = '2-CMT with first-order elimination'
- unparsed cell t0002:row95:col5 = '84.9%'
- unparsed cell t0002:row95:col6 = 'Expo: (5.7%)'
- unparsed cell t0002:row99:col2 = '2-CMT with first-order elimination'
- unparsed cell t0002:row99:col5 = '189%'
- unparsed cell t0002:row99:col6 = 'Power: 1'
- unparsed cell t0002:row103:col2 = '3-CMT with first-order absorption, and first-order elimination'
- unparsed cell t0002:row103:col5 = 'IIV: 21.5%IOV: 14.9%'
- unparsed cell t0002:row103:col6 = 'Add: 0.0194'
- unparsed cell t0002:row111:col2 = '1-CMT with first-order elimination'
- unparsed cell t0002:row111:col5 = '6.19%CL: 3.04%Age on CL: 35.5%'
- unparsed cell t0002:row111:col6 = 'Prop: (24.31%)'
- LLM selected parameter table(s) 3
- captured model equation V1/F = 1,830 * (weight/70)^1.03 * (age/45)–0.256
- captured model equation V2/F = 4,340 * (weight/70)^1
- captured model equation CL/F = 103 * (weight/70)^0.917 * (age/45)–0.166
- captured model equation Q2/F = 138 * (weight/70)^0.75
- captured model equation V1 = 45.65 * (weight/14.4)^1
- captured model equation CL = 1.27 * (weight/14.4)^0.75 * (age in month/39)^0.19

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.909 (10/11 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[zheng et al 2018 [38]]` |  |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | pass | 6 |
| C0b_disposition_core | pass |  |
| C0c_disposition_complete | pass |  |
| C8_topology | pass |  |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | skipped |  |  | no structural disposition parameters in record |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bazithromycin%5D%20Azithromycin_Methaneethorn2025_reference&body=Drug%3A%20azithromycin%0ARecord%3A%20Azithromycin_Methaneethorn2025_reference%0APaper%3A%20Methaneethorn_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_azithromycin/Azithromycin_Methaneethorn2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 11:33 UTC</sub>
