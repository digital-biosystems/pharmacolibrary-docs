<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;alirocumab&quot;,&quot;href&quot;:&quot;drugs/drug_alirocumab/&quot;},{&quot;label&quot;:&quot;Martinez_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alirocumab — `Alirocumab_Martinez2019_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="alirocumab" model-id="Alirocumab_Martinez2019_reference" status="needs_review" stale="false" population="healthy volunteers or hypercholesterolemic subjects" measured-compound="alirocumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Martinez JM, Brunet A, Hurbin F, DiCioccio AT, Rauch C, Fabre D. Population Pharmacokinetic Analysis of Alirocumab in Healthy Volunteers or Hypercholesterolemic Subjects Using a Michaelis-Menten Approximation of a Target-Mediated Drug Disposition Model-Support for a Biologics License Application Submission: Part I. Clinical pharmacokinetics 58(1):101–113 (2019).
  ·  DOI: [10.1007/s40262-018-0669-y](https://doi.org/10.1007/s40262-018-0669-y)

## Population and dosing

**Population:** healthy volunteers or hypercholesterolemic subjects · condition hypercholesterolemia · age group adult.

**Dosing:** 0.3, 1, 3, 6, 12, 50, 100, 150, 200, 250 mg/kg, mg, iv, sc, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Typical value of CLL (θ1, L/h)a | CL | 0.0114 | L/h |  |
| effect_of_wt_on_cll_12_a | effect_of_wt_on_cll_12_a | 3.24 |  |  |
| Typical value of V2 (θ2, L) | V2 | 2.66 | L | 4.34 (None% RSE) |
| Typical value of Ka (θ3, 1/h) | kabs | 0.0129 | 1/h |  |
| Typical value of V3 (θ4, L)b | V3 | 1.81 | L | 11.1 (None% RSE) |
| Typical value of Q (θ5, L/h) | Q | 0.0156 | L/h |  |
| Typical value of Vm (θ6, mg.h/L) | Vmax | 0.172 |  |  |
| Typical value of Km (θ7, mg/L)c | Km | 9.49 | mg/L | 12.0 (None% RSE) |
| Typical value of F (θ10) | Fab | 0.590 |  |  |
| Typical value of LAG (θ11, h) | tlag | 0.643 | h |  |
| theta_v3_age | theta_v3_age | 0.310 |  |  |
| V | V | 3.2 | L |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.071). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has alirocumab, the second reading unknown; it also differs on 25 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Typical value of CLL (θ1, L/h)a | `Q22` · CL | 0.0114 | L/h | 3.167e-09 | m3/s | L/h | llm (0.6) | Tab2:row2:col1, Tab2:row2:col2, Tab2:row2:col3, Tab2:row2:col4 |  |
| effect_of_wt_on_cll_12_a | `Q900` · effect_of_wt_on_cll_12_a | 3.24 |  |  |  |  |  | Tab2:row3:col4 |  |
| Typical value of V2 (θ2, L) | `Q64` · V2 | 2.66 | L | 0.00266 | m3 | L | llm_confirmed (0.6) | Tab2:row5:col1, Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col4 | 4.34 (None% RSE) |
| Typical value of Ka (θ3, 1/h) | `Q49` · kabs | 0.0129 | 1/h | 3.583e-06 | 1/s | 1/h | llm_confirmed (0.6) | Tab2:row6:col1, Tab2:row6:col2, Tab2:row6:col4 |  |
| Typical value of V3 (θ4, L)b | `Q77` · V3 | 1.81 | L | 0.00181 | m3 | L | llm_confirmed (0.6) | Tab2:row7:col1, Tab2:row7:col2, Tab2:row7:col3, Tab2:row7:col4 | 11.1 (None% RSE) |
| Typical value of Q (θ5, L/h) | `Q30` · Q | 0.0156 | L/h | 4.333e-09 | m3/s | L/h | llm (0.6) | Tab2:row9:col1, Tab2:row9:col2, Tab2:row9:col3, Tab2:row9:col4 |  |
| Typical value of Vm (θ6, mg.h/L) | `Q66` · Vmax | 0.172 |  |  |  |  | llm (0.6) | Tab2:row10:col1, Tab2:row10:col2, Tab2:row10:col3, Tab2:row10:col4 |  |
| Typical value of Km (θ7, mg/L)c | `Q1` · Km | 9.49 | mg/L |  |  | mg/L | llm_confirmed (0.6) | Tab2:row11:col1, Tab2:row11:col2, Tab2:row11:col3, Tab2:row11:col4 | 12.0 (None% RSE) |
| Typical value of F (θ10) | `Q40` · Fab | 0.590 |  |  |  |  | llm (0.6) | Tab2:row13:col1, Tab2:row13:col2, Tab2:row13:col3, Tab2:row13:col4 |  |
| Typical value of LAG (θ11, h) | `Q83` · tlag | 0.643 | h | 2315 | s | h | llm (0.6) | Tab2:row14:col1, Tab2:row14:col2, Tab2:row14:col3, Tab2:row14:col4 |  |
| theta_v3_age | `Q900` · theta_v3_age | 0.310 |  |  |  |  |  | Tab2:row8:col3, Tab2:row8:col4 |  |
| V | `Q61` · V | 3.2 | L | 0.0032 | m3 | L | review_gapfill (0.7) | Nolain_2022:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2 CLL' routed out of structural estimates ('Interindividual variability (CV %)')
- table section iiv: 'ω2 V2' routed out of structural estimates ('Interindividual variability (CV %)')
- table section iiv: 'ω2 V3' routed out of structural estimates ('Interindividual variability (CV %)')
- table section iiv: 'ω2 km' routed out of structural estimates ('Interindividual variability (CV %)')
- table section iiv: 'Block ηV3/F − ηKMd' routed out of structural estimates ('Interindividual variability (CV %)')
- table section iiv: 'ω 2 F' routed out of structural estimates ('Interindividual variability (CV %)')
- table section residual_error: 'Proportional term (θ8)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive term (θ9, mg/L)' routed out of structural estimates ('Residual variability')
- covariate level 'Effect of WT on CLL (θ12)a' → Q900:effect_of_wt_on_cll_12_a = 3.24 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Effect of STATIN on CLL (θ13)a' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col4'])
- dropped duplicate Q1 ('Effect of FPCSK9 on Km (θ14)c', value '8.97') — already have one for this compound
- implicit units: 'Typical value of CLL (θ1, L/h)a' → L/h (from the paper text: "The paper text states: 'The elimination was characterized by a first-order process described as an apparent linear clear")
- implicit units: 'Typical value of V2 (θ2, L)' → L (from the paper text: "The paper text states: 'described by an apparent distribution volume (V2, L)' and Table 2 lists 'Typical value of V2 (θ2")
- implicit units: 'Typical value of Ka (θ3, 1/h)' → 1/h (from the paper text: "The paper text states: 'a two-compartment model with an absorption constant (Ka, 1/h)' and Table 2 lists 'Typical value ")
- implicit units: 'Typical value of V3 (θ4, L)b' → L (from the paper text: "The paper text states: 'described by an apparent distribution volume (V3, L)' and Table 2 lists 'Typical value of V3 (θ4")
- implicit units: 'Typical value of Q (θ5, L/h)' → L/h (from the paper text: "The paper text states: 'The peripheral compartment was related to the central compartment by an intercompartmental clear")
- implicit units: 'Typical value of Vm (θ6, mg.h/L)' — the LLM proposed 'mg/h', whose dimension does not fit Q66; left unset
- implicit units: 'Typical value of Km (θ7, mg/L)c' → mg/L (from the paper text: "The paper text states: 'a parallel non-linear process described by the two Michaelis–Menten parameters, Vm (mg/h) and Km")
- implicit units: 'Typical value of LAG (θ11, h)' → h (from the paper text: "Table 2 lists 'Typical value of LAG (θ11, h)'.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alirocumab
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- gap-filled Q61 (V) from Nolain_2022's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab2:row2:col5 = '[0.0116; 0.0131]'
- unparsed cell Tab2:row3:col3 = '2.92·10−4'
- unparsed cell Tab2:row3:col5 = '[2.73·10−4; 3.11·10−4]'
- unparsed cell Tab2:row4:col3 = '6.44·10−3'
- unparsed cell Tab2:row4:col5 = '[5.66·10−3; 7.22·10−3]'
- unparsed cell Tab2:row5:col5 = '[2.95; 3.42]'
- unparsed cell Tab2:row6:col3 = '7.68·10−3'
- unparsed cell Tab2:row6:col5 = '[7.31·10−3; 8.06·10−3]'
- unparsed cell Tab2:row7:col5 = '[2.62; 2.95]'
- unparsed cell Tab2:row8:col5 = '[0.233; 0.386]'
- unparsed cell Tab2:row9:col5 = '[0.0166; 0.0203]'
- unparsed cell Tab2:row10:col5 = '[0.165; 0.202]'
- unparsed cell Tab2:row11:col5 = '[6.74; 8.72]'
- unparsed cell Tab2:row12:col3 = '− 0.541'
- unparsed cell Tab2:row12:col5 = '[− 0.638; − 0.444]'
- unparsed cell Tab2:row13:col5 = '[0.860; 0.865]'
- unparsed cell Tab2:row14:col5 = '[0.608; 0.674]'
- unparsed cell Tab2:row16:col1 = '0.402 (63.4%)'
- unparsed cell Tab2:row16:col3 = '0.232 (48.2%)'
- unparsed cell Tab2:row16:col5 = '[0.212; 0.252] (18.5)'
- unparsed cell Tab2:row17:col1 = '0.485 (69.7%)'
- unparsed cell Tab2:row17:col3 = '0.589 (76.7%)'
- unparsed cell Tab2:row17:col5 = '[0.537; 0.641] (42.5)'
- unparsed cell Tab2:row18:col1 = '0.151 (38.9%)'
- unparsed cell Tab2:row18:col3 = '0.0735 (27.1%)'
- unparsed cell Tab2:row18:col5 = '[0.0483; 0.0986] (60.4)'
- unparsed cell Tab2:row19:col1 = '0.337 (58.1%)'
- unparsed cell Tab2:row19:col3 = '0.298 (54.6%)'
- unparsed cell Tab2:row19:col5 = '[0.245; 0.351] (55.4)'
- unparsed cell Tab2:row20:col1 = '− 0.994'
- unparsed cell Tab2:row20:col3 = '− 0.793'
- unparsed cell Tab2:row21:col1 = '0.206 (45.3%e)'
- unparsed cell Tab2:row21:col3 = '1.060 (103%e)'
- unparsed cell Tab2:row21:col5 = '[0.920; 1.20] (49.5)'
- unparsed cell Tab2:row23:col1 = '0.261 (26.1%)'
- unparsed cell Tab2:row23:col3 = '0.259 (25.9%)'
- unparsed cell Tab2:row23:col5 = '[0.257; 0.262]'
- unparsed cell Tab2:row24:col5 = '[0.0405; 0.0526]'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.071 (2/28 fields) | 26 |

<details><summary>26 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[effect_of_wt_on_cll_12_a]` | 3.24 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_wt]` |  | 3.24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v3_age]` | 0.310 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v3_age]` |  | 0.310 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of cll (θ1, l/h)a]` | 0.0114 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of cll (θ1, l/h)a]` |  | 0.0114 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of f]` | 0.590 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of f]` |  | 0.590 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of ka]` | 0.0129 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of ka]` |  | 0.0129 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of km (θ7, mg/l)c]` | 9.49 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of km (θ7, mg/l)c]` |  | 9.49 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of lag]` | 0.643 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of lag]` |  | 0.643 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of q]` | 0.0156 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of q]` |  | 0.0156 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of v2]` | 2.66 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of v2]` |  | 2.66 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of v3 (θ4, l)b]` | 1.81 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of v3 (θ4, l)b]` |  | 1.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of vm]` | 0.172 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of vm]` |  | 0.172 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` | 3.2 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | alirocumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | alirocumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C2_base_Q1 | pass | 9.49 | 9.49 | 1 | 0.05 | footnote reference category |
| C2_base_Q22 | pass | 0.0114 | 0.0114 | 1 | 0.05 | footnote reference category |
| C2_base_Q30 | pass | 0.0156 | 0.0156 | 1 | 0.05 | footnote reference category |
| C2_base_Q40 | pass | 0.59 | 0.59 | 1 | 0.05 | footnote reference category |
| C2_base_Q49 | pass | 0.0129 | 0.0129 | 1 | 0.05 | footnote reference category |
| C2_base_Q61 | fail | 3.2 | 0.0114 | 0.0036 | 0.05 | footnote reference category |
| C2_base_Q64 | pass | 2.66 | 2.66 | 1 | 0.05 | footnote reference category |
| C2_base_Q66 | pass | 0.172 | 0.172 | 1 | 0.05 | footnote reference category |
| C2_base_Q77 | pass | 1.81 | 1.81 | 1 | 0.05 | footnote reference category |
| C2_base_Q83 | pass | 0.643 | 0.643 | 1 | 0.05 | footnote reference category |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  |  |  | ['Tab2:row11:col1', 'Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['Tab2:row9:col1', 'Tab2:row9:col2', 'Tab2:row9:col3', 'Tab2:row9:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Tab2:row6:col1', 'Tab2:row6:col2', 'Tab2:row6:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Nolain_2022:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  |  |  | ['Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col3', 'Tab2:row7:col4'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['Tab2:row14:col1', 'Tab2:row14:col2', 'Tab2:row14:col3', 'Tab2:row14:col4'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 |  |  |  | ['Tab2:row10:col1', 'Tab2:row10:col2', 'Tab2:row10:col3', 'Tab2:row10:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0114 |  |  | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0114 L/h |  |  | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.2 L |  |  | ['Nolain_2022:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.66 L |  |  | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balirocumab%5D%20Alirocumab_Martinez2019_reference&body=Drug%3A%20alirocumab%0ARecord%3A%20Alirocumab_Martinez2019_reference%0APaper%3A%20Martinez_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alirocumab/Alirocumab_Martinez2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 09:48 UTC</sub>
