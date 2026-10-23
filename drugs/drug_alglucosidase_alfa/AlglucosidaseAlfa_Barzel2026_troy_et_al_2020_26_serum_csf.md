<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;alglucosidase alfa&quot;,&quot;href&quot;:&quot;drugs/drug_alglucosidase_alfa/&quot;},{&quot;label&quot;:&quot;Barzel_2026 \u00b7 troy_et_al_2020_26_serum_csf&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AlglucosidaseAlfa_Tiraboschi2023_reference&quot;,&quot;label&quot;:&quot;Tiraboschi_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alglucosidase_alfa/AlglucosidaseAlfa_Tiraboschi2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alglucosidase alfa — `AlglucosidaseAlfa_Barzel2026_troy_et_al_2020_26_serum_csf`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-09-28 14:35 UTC) predates the latest extraction (2026-10-05 10:36 UTC); the status shown comes from the current checks. The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="alglucosidase alfa" model-id="AlglucosidaseAlfa_Barzel2026_troy_et_al_2020_26_serum_csf" status="needs_review" stale="true" population="patients with lysosomal storage diseases" measured-compound="alglucosidase_alfa" parameterization="mechanistic" topology="1C"></div>

## Citation
Barzel I, van der Ploeg AT, Pijnappel WWMP, van der Kuy PHM, van den Hout JMP, Preijers T. Population Pharmacokinetic/Pharmacodynamic Modeling of Therapeutic Enzymes in Lysosomal Storage Diseases. Clinical pharmacokinetics 65(5):647-664 (2026).
  ·  DOI: [10.1007/s40262-026-01636-2](https://doi.org/10.1007/s40262-026-01636-2)

## Population and dosing

**Population:** patients with lysosomal storage diseases · condition lysosomal storage diseases · age group mixed.

**Dosing:** 770, 4753, 16380, 358400 mg, iv, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has alglucosidase_alfa, the second reading alglucosidase alfa; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL | Q22 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Fixed effect parameters' — extend the ontology if this is a real PK parameter (source ['Barzel_2026_table_3:row0:col7'])
- dropped unlinked row (NIL): 'Inter-individual variability (CV%)' — extend the ontology if this is a real PK parameter (source ['Barzel_2026_table_3:row23:col7'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alglucosidase_alfa
- bound model equation to Q22 (CL): CL = 1.97 * (TBW/20)^0.587Q = 0.931 * (TBW/20)^0.587Vc =1.52 * (TBW/20)^0.483Vp = 3.11 * (TBW/20)^0.483
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL'; equation kept verbatim
- population split: 'troy et al., 2020 [26]serum/csf*' subgroup of Barzel_2026 (paper reports 5 populations: gras-colomer et al., 2021 [25]plasma/leukocyteθ, qi et al., 2018 [23]plasma, tiraboschi et al., 2023 [22]plasma, troy et al., 2020 [26]serum/csf*, tuffal et al., 2023 [21]plasma)
- molar mass: none found for 'alglucosidase_alfa' — its concentrations stay mass-only
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell Tab2:row2:col4 = '2-compartment'
- unparsed cell Tab2:row2:col8 = 'TBW on CL and Q (0.587, [0.444; 0.730]), Vc and Vp (0.483, [0315; 0.651])'
- unparsed cell Tab2:row5:col3 = 'NONMEM v7.4.1'
- unparsed cell Tab2:row5:col4 = '3-compartment'
- unparsed cell Tab2:row6:col3 = 'NONMEM v7.4.1'
- unparsed cell Tab2:row6:col4 = '3-compartment'
- unparsed cell Tab2:row6:col7 = 'Forward inclusion (alpha risk: 5%) and backward elimination (alpha risk: 0.1%)'
- unparsed cell Tab2:row6:col8 = 'Time-varying TBW on CL (0.896, [0.754; 1.04]), V1 (0.661, [0.578; 0.7444]) and Vm (0.463, [0.352;0.574])'
- unparsed cell Tab2:row7:col3 = 'NONMEM v7.3'
- unparsed cell Tab2:row7:col4 = 'CNS: 2-compartmentSerum: 1-compartment'
- unparsed cell Barzel_2026_table_3:row0:col4 = '3.85 × 10−2'
- unparsed cell Barzel_2026_table_3:row1:col3 = '1.10 × 10−2'
- unparsed cell Barzel_2026_table_3:row41:col3 = 'Plasma: 29Leukocyte: 11'
- unparsed cell Barzel_2026_table_3:row41:col6 = 'CSF: 98.1Serum: 67.5'
- companion parameter table 3 transcribed (62 record(s))
- LLM selected parameter table(s) 3
- captured model equation CL = 1.97 * (TBW/20)^0.587Q = 0.931 * (TBW/20)^0.587Vc =1.52 * (TBW/20)^0.483Vp = 3.11 * (TBW/20)^0.483

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (2/6 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | alglucosidase_alfa | alglucosidase alfa | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | alglucosidase_alfa | alglucosidase alfa | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | pass | 1 |
| C0b_disposition_core | pass |  |
| C0c_disposition_complete | fail |  |
| C8_topology | pass |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balglucosidase_alfa%5D%20AlglucosidaseAlfa_Barzel2026_troy_et_al_2020_26_serum_csf&body=Drug%3A%20alglucosidase_alfa%0ARecord%3A%20AlglucosidaseAlfa_Barzel2026_troy_et_al_2020_26_serum_csf%0APaper%3A%20Barzel_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alglucosidase_alfa/AlglucosidaseAlfa_Barzel2026_troy_et_al_2020_26_serum_csf%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 10:36 UTC</sub>
