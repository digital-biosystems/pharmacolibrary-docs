<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;selumetinib&quot;,&quot;href&quot;:&quot;drugs/drug_selumetinib/&quot;},{&quot;label&quot;:&quot;Patel_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Selumetinib_Patel2018_reference&quot;,&quot;label&quot;:&quot;Patel_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_selumetinib/Selumetinib_Patel2018_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Selumetinib_Tong2019_reference&quot;,&quot;label&quot;:&quot;Tong_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_selumetinib/Selumetinib_Tong2019_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# selumetinib — `Selumetinib_Patel2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Selumetinib’s absorption rate constant, 0.622 nmol/hr, has amount-per-time units rather than inverse-time units, so the record was rejected.

<div class="pk-model-meta" hidden drug="selumetinib" model-id="Selumetinib_Patel2017_reference" status="rejected" stale="false" population="adults with advanced solid tumors and children with recurrent low-grade gliomas" measured-compound="selumetinib" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Patel YT, Daryani VM, Patel P, Zhou D, Fangusaro J, Carlile DJ et al. Population Pharmacokinetics of Selumetinib and Its Metabolite N-desmethyl-selumetinib in Adult Patients With Advanced Solid Tumors and Children With Low-Grade Gliomas. CPT: pharmacometrics & systems pharmacology 6(5):305–314 (2017).
  ·  DOI: [10.1002/psp4.12175](https://doi.org/10.1002/psp4.12175)

## Population and dosing

**Population:** adults with advanced solid tumors and children with recurrent low-grade gliomas · condition cancer · age group mixed · n = 105.

**Dosing:** 25, 75 mg (adults); mg/m2 (pediatric patients), oral, multiple, every 12 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| θ1 (nmol/hr) | kabs | 0.622 | nmol/hr | 0.062 |
| θ2 (hr) | tlag | 0.319 | hr | 0.0279 |
| θ3 (L/hr) | CL | 13.5 | L/hr | 0.662 |
| θ4 (L) | V1 | 32.6 | L | 1.78 |
| θ5 (L) | V2 | 55 | L | 5.34 |
| θ6 (L/hr) | Q | 8.2 | L/hr | 0.557 |
| θ8 | equation variable | 0.117 |  | 0.0865 |
| θ15 | V1 | 1.37 | L | 0.127 |
| θ16 (L/hr) | Q | 240 | L/hr | 20.4 |
| θ17 (L/hr) | CL | 49.5 | L/hr | 7.07 |
| θ18 (L) | V2 | 413 | L | 54.2 |
| θ19 (L/hr) | CLfm | 0.274 | L/hr | 0.0449 |
| θ20 | fm | 0.908 |  | 0.163 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.138). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Selumetinib’s absorption rate constant, 0.622 nmol/hr, has amount-per-time units rather than inverse-time units, so the record was rejected.**

The record identifies kabs as selumetinib’s absorption rate constant but reports it as 0.622 nmol/hr, an amount-per-time unit rather than inverse time. The reported unit could not be converted to SI, leaving this structural parameter without an SI value. Extracted — selumetinib: kabs 0.622 nmol/hr, tlag 0.319 hr, CL 13.5 L/hr, V1 32.6 L, V2 55 L, Q 8.2 L/hr; N-desmethyl-selumetinib: V1 1.37 L, Q 240 L/hr, CL 49.5 L/hr, V2 413 L, CLfm 0.274 L/hr, fm 0.908.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has selumetinib, the second reading unknown; it also differs on 24 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| θ1 (nmol/hr) | `Q49` · kabs | 0.622 | nmol/hr |  |  | nM/h | 0.062 | exact (1) | psp412175-tbl-0002:row2:col2, psp412175-tbl-0002:row2:col3 |
| θ2 (hr) | `Q83` · tlag | 0.319 | hr | 1148 | s | h | 0.0279 | exact (1) | psp412175-tbl-0002:row3:col2, psp412175-tbl-0002:row3:col3 |
| θ3 (L/hr) | `Q22` · CL | 13.5 | L/hr | 3.75e-06 | m3/s | l/h | 0.662 | exact (1) | psp412175-tbl-0002:row4:col2, psp412175-tbl-0002:row4:col3 |
| θ4 (L) | `Q63` · V1 | 32.6 | L | 0.0326 | m3 | l | 1.78 | exact (1) | psp412175-tbl-0002:row5:col1, psp412175-tbl-0002:row5:col2, psp412175-tbl-0002:row5:col3 |
| θ5 (L) | `Q64` · V2 | 55 | L | 0.055 | m3 | l | 5.34 | exact (1) | psp412175-tbl-0002:row6:col1, psp412175-tbl-0002:row6:col2, psp412175-tbl-0002:row6:col3 |
| θ6 (L/hr) | `Q30` · Q | 8.2 | L/hr | 2.278e-06 | m3/s | l/h | 0.557 | exact (1) | psp412175-tbl-0002:row7:col2, psp412175-tbl-0002:row7:col3 |
| θ8 | `Q900` · equation variable | 0.117 |  |  |  |  | 0.0865 | llm (0.6) | psp412175-tbl-0002:row9:col2, psp412175-tbl-0002:row9:col3 |
| θ15 | `Q63` · V1 | 1.37 | L | 0.00137 | m3 | l | 0.127 | exact (1) | psp412175-tbl-0002:row37:col2, psp412175-tbl-0002:row37:col3 |
| θ16 (L/hr) | `Q30` · Q | 240 | L/hr | 6.667e-05 | m3/s | l/h | 20.4 | exact (1) | psp412175-tbl-0002:row38:col2, psp412175-tbl-0002:row38:col3 |
| θ17 (L/hr) | `Q22` · CL | 49.5 | L/hr | 1.375e-05 | m3/s | l/h | 7.07 | exact (1) | psp412175-tbl-0002:row39:col2, psp412175-tbl-0002:row39:col3 |
| θ18 (L) | `Q64` · V2 | 413 | L | 0.413 | m3 | l | 54.2 | exact (1) | psp412175-tbl-0002:row40:col1, psp412175-tbl-0002:row40:col2, psp412175-tbl-0002:row40:col3 |
| θ19 (L/hr) | `Q370` · CLfm | 0.274 | L/hr | 7.611e-08 | m3/s | l/h | 0.0449 | exact (1) | psp412175-tbl-0002:row41:col2, psp412175-tbl-0002:row41:col3 |
| θ20 | `Q45` · fm | 0.908 |  |  |  |  | 0.163 | exact (1) | psp412175-tbl-0002:row42:col2, psp412175-tbl-0002:row42:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ωD1, IIV' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'ωALAG1, IIV' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'ωCL, IIV' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'ωV2, IIV' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'ωV3, IIV' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'ωQ, IIV' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'Corr(ηD1, ηALAG1)' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'Corr(ηD1, ηV2)' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'Corr(ηALAG1, ηV2)' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'Corr(ηCL, ηV2)' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'Corr(ηV3, ηQ)' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section residual_error: 'σprop2' routed out of structural estimates ('Residual variability for selumetinib')
- table section residual_error: 'σadd2' routed out of structural estimates ('Residual variability for selumetinib')
- table section iiv: 'ωFM,IIV' routed out of structural estimates ('Interindividual variability for N‐desmethyl‐selumetinib')
- table section iiv: 'ωCLMeta, IIV' routed out of structural estimates ('Interindividual variability for N‐desmethyl‐selumetinib')
- table section iiv: 'Corr(ηFM, ηCLMeta)' routed out of structural estimates ('Interindividual variability for N‐desmethyl‐selumetinib')
- table section residual_error: 'σprop2' routed out of structural estimates ('Residual variability for N‐desmethyl‐selumetinib')
- table section residual_error: 'σadd2' routed out of structural estimates ('Residual variability for N‐desmethyl‐selumetinib')
- column 'parameter description' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'θ1 (nmol/hr)' → Q49 (unit '[substance] / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('θ7 (1/hr)', value '3.7') — already have one for this compound
- unit_dimension_mismatch: 'θ9 (nmol/hr)' → Q49 (unit '[substance] / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('θ9 (nmol/hr)', value '4.09') — already have one for this compound
- dropped duplicate Q83 ('θ10 (hr)', value '0.348') — already have one for this compound
- dropped duplicate Q900 ('θ11', value '0.923') — already have one for this compound
- dropped duplicate Q900 ('θ12', value '1.24') — already have one for this compound
- dropped duplicate Q900 ('θ13', value '0.327') — already have one for this compound
- dropped duplicate Q900 ('θ14', value '0.187') — already have one for this compound
- unit inherited for V1 (Q63): 'L' from a same-Q-code sibling (this row's label had no unit)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (θ3 (L/hr)); Q63 (θ4 (L)); Q64 (θ5 (L)); Q30 (θ6 (L/hr)); Q63 (θ15); Q30 (θ16 (L/hr)); Q22 (θ17 (L/hr)); Q64 (θ18 (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=selumetinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 41/41 row label(s) assigned, 33 linked by role; re-tagged parent→N-desmethyl-selumetinib ×19

**Extraction notes:**
- unparsed cell psp412175-tbl-0002:row2:col1 = 'Duration of zero‐order drug input in the gut (D1)'
- unparsed cell psp412175-tbl-0002:row2:col4 = '0.612 (0.493–0.756)'
- unparsed cell psp412175-tbl-0002:row3:col1 = 'Lag‐time for drug appearance in the gut (ALAG1)'
- unparsed cell psp412175-tbl-0002:row3:col4 = '0.331 (0.293–0.376)'
- unparsed cell psp412175-tbl-0002:row4:col4 = '13.6 (12.7–14.7)'
- unparsed cell psp412175-tbl-0002:row5:col4 = '31.7 (16.9–37.9)'
- unparsed cell psp412175-tbl-0002:row6:col4 = '53.8 (43.7–67.0)'
- unparsed cell psp412175-tbl-0002:row7:col4 = '8.1 (6.3–10.4)'
- unparsed cell psp412175-tbl-0002:row8:col4 = '3.7 (1.1–5.1)'
- unparsed cell psp412175-tbl-0002:row9:col4 = '0.119 (0.024–0.209)'
- unparsed cell psp412175-tbl-0002:row10:col4 = '4.05 (2.46–4.57)'
- unparsed cell psp412175-tbl-0002:row11:col4 = '0.349 (0.303–0.475)'
- unparsed cell psp412175-tbl-0002:row12:col4 = '0.892 (0.615–1.251)'
- unparsed cell psp412175-tbl-0002:row13:col4 = '1.04 (0.22–2.08)'
- unparsed cell psp412175-tbl-0002:row14:col4 = '0.357 (0.137–0.596)'
- unparsed cell psp412175-tbl-0002:row15:col4 = '0.212 (0.110–0.316)'
- unparsed cell psp412175-tbl-0002:row17:col1 = 'Interindividual variance for D1'
- unparsed cell psp412175-tbl-0002:row17:col4 = '0.217 (0.084–0.495)'
- unparsed cell psp412175-tbl-0002:row18:col1 = 'Interindividual variance for ALAG1'
- unparsed cell psp412175-tbl-0002:row18:col4 = '0.168 (0.084–0.285)'
- unparsed cell psp412175-tbl-0002:row19:col4 = '0.076 (0.042–0.118)'
- unparsed cell psp412175-tbl-0002:row20:col1 = 'Interindividual variance for V2'
- unparsed cell psp412175-tbl-0002:row20:col4 = '0.173 (0.074–0.478)'
- unparsed cell psp412175-tbl-0002:row21:col1 = 'Interindividual variance for V3'
- unparsed cell psp412175-tbl-0002:row21:col4 = '0.340 (0.193–0.552)'
- unparsed cell psp412175-tbl-0002:row22:col4 = '0.279 (0.116–0.619)'
- unparsed cell psp412175-tbl-0002:row23:col1 = 'Correlation between ηD1 and ηALAG1'
- unparsed cell psp412175-tbl-0002:row24:col1 = 'Correlation between ηD1 and ηV2'
- unparsed cell psp412175-tbl-0002:row25:col1 = 'Correlation between ηALAG1 and ηV2'
- unparsed cell psp412175-tbl-0002:row26:col1 = 'Correlation between ηCL and ηV2'
- unparsed cell psp412175-tbl-0002:row27:col1 = 'Correlation between ηV3 and ηQ'
- unparsed cell psp412175-tbl-0002:row29:col1 = 'Inter‐occasion variance for D1'
- unparsed cell psp412175-tbl-0002:row29:col4 = '0.257 (0.109–0.566)'
- unparsed cell psp412175-tbl-0002:row30:col1 = 'Inter‐occasion variance for ALAG1'
- unparsed cell psp412175-tbl-0002:row30:col4 = '0.297 (0.196–0.409)'
- unparsed cell psp412175-tbl-0002:row31:col4 = '0.027 (0.013–0.042)'
- unparsed cell psp412175-tbl-0002:row32:col1 = 'Inter‐occasion variance for V2'
- unparsed cell psp412175-tbl-0002:row32:col4 = '0.235 (0.115–0.655)'
- unparsed cell psp412175-tbl-0002:row34:col4 = '0.119 (0.102–0.137)'
- unparsed cell psp412175-tbl-0002:row37:col4 = '1.37 (1.28–1.44)'
- unparsed cell psp412175-tbl-0002:row38:col4 = '246 (232–275)'
- unparsed cell psp412175-tbl-0002:row39:col4 = '50.0 (43.7–58.9)'
- unparsed cell psp412175-tbl-0002:row40:col4 = '413 (349–505)'
- unparsed cell psp412175-tbl-0002:row41:col4 = '0.274 (0.244–0.318)'
- unparsed cell psp412175-tbl-0002:row42:col4 = '0.909 (0.792–1.095)'
- unparsed cell psp412175-tbl-0002:row44:col4 = '0.215 (0.121–1.542)'
- unparsed cell psp412175-tbl-0002:row45:col4 = '0.226 (0.109–1.326)'
- unparsed cell psp412175-tbl-0002:row48:col4 = '0.138 (0.089–0.747)'
- unparsed cell psp412175-tbl-0002:row50:col4 = '0.294 (0.278–0.322)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.138 (4/29 fields) | 25 |

<details><summary>25 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[θ10]` |  | 0.348 | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ11]` |  | 0.923 | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ12]` |  | 1.24 | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ15].parameter_id` | Q63 | Q305 | mismatch |
| `qwen3.8-27b` | `parameters[θ16]` | 240 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ17]` | 49.5 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ18]` | 413 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ19]` | 0.274 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ1]` | 0.622 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ1]` |  | 0.622 | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ20]` | 0.908 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ2]` | 0.319 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ2]` |  | 0.319 | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ3]` | 13.5 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ3]` |  | 13.5 | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ4]` | 32.6 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ4]` |  | 32.6 | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ5]` | 55 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ5]` |  | 55 | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ6]` | 8.2 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ6]` |  | 8.2 | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ8]` | 0.117 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ9]` |  | 4.09 | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | selumetinib | unknown | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | selumetinib | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412175-tbl-0002:row4:col2', 'psp412175-tbl-0002:row4:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412175-tbl-0002:row39:col2', 'psp412175-tbl-0002:row39:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp412175-tbl-0002:row7:col2', 'psp412175-tbl-0002:row7:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp412175-tbl-0002:row38:col2', 'psp412175-tbl-0002:row38:col3'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['psp412175-tbl-0002:row41:col2', 'psp412175-tbl-0002:row41:col3'] |
| C5_dimension_Q49 | fail | [substance] / [time] | nmol/hr | ['psp412175-tbl-0002:row2:col2', 'psp412175-tbl-0002:row2:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp412175-tbl-0002:row5:col1', 'psp412175-tbl-0002:row5:col2', 'psp412175-tbl-0002:row5:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp412175-tbl-0002:row6:col1', 'psp412175-tbl-0002:row6:col2', 'psp412175-tbl-0002:row6:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp412175-tbl-0002:row40:col1', 'psp412175-tbl-0002:row40:col2', 'psp412175-tbl-0002:row40:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['psp412175-tbl-0002:row3:col2', 'psp412175-tbl-0002:row3:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 13.5 | ['psp412175-tbl-0002:row4:col2', 'psp412175-tbl-0002:row4:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 13.5 L/h | ['psp412175-tbl-0002:row4:col2', 'psp412175-tbl-0002:row4:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 49.5 L/h | ['psp412175-tbl-0002:row39:col2', 'psp412175-tbl-0002:row39:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 32.6 L | ['psp412175-tbl-0002:row5:col1', 'psp412175-tbl-0002:row5:col2', 'psp412175-tbl-0002:row5:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.37 L | ['psp412175-tbl-0002:row37:col2', 'psp412175-tbl-0002:row37:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 55 L | ['psp412175-tbl-0002:row6:col1', 'psp412175-tbl-0002:row6:col2', 'psp412175-tbl-0002:row6:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 413 L | ['psp412175-tbl-0002:row40:col1', 'psp412175-tbl-0002:row40:col2', 'psp412175-tbl-0002:row40:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bselumetinib%5D%20Selumetinib_Patel2017_reference&body=Drug%3A%20selumetinib%0ARecord%3A%20Selumetinib_Patel2017_reference%0APaper%3A%20Patel_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_selumetinib/Selumetinib_Patel2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 06:49 UTC</sub>
