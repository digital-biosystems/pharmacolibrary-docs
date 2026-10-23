<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;tadalafil&quot;,&quot;href&quot;:&quot;drugs/drug_tadalafil/&quot;},{&quot;label&quot;:&quot;Ferguson-Sells_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tadalafil_Kohno2014_reference&quot;,&quot;label&quot;:&quot;Kohno_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tadalafil/Tadalafil_Kohno2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tadalafil_Na2019_group_t&quot;,&quot;label&quot;:&quot;Na_2019_group_t&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tadalafil/Tadalafil_Na2019_group_t.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tadalafil — `Tadalafil_FergusonSells2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-09-28 14:40 UTC) predates the latest extraction (2026-10-06 16:41 UTC); the status shown comes from the current checks. No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="tadalafil" model-id="Tadalafil_FergusonSells2022_reference" status="rejected" stale="true" population="adults and pediatric patients with pulmonary arterial hypertension" measured-compound="tadalafil" parameterization="mechanistic" topology="1C"></div>

## Citation
Ferguson-Sells L, Velez de Mendizabal N, Li B, Small D. Population Pharmacokinetics of Tadalafil in Pediatric Patients with Pulmonary Arterial Hypertension: A Combined Adult/Pediatric Model. Clinical pharmacokinetics 61(2):249–262 (2022).
  ·  DOI: [10.1007/s40262-021-01052-8](https://doi.org/10.1007/s40262-021-01052-8)

## Population and dosing

**Population:** adults and pediatric patients with pulmonary arterial hypertension · condition pulmonary arterial hypertension · age group mixed · n = /.

**Dosing:** 2.5, 10, 20, 40 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka (h-1) | kabs | 0.860 | h-1 |
| Fe | fe | 1 | % SEE |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (fe), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tadalafil, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka (h-1) | `Q49` · kabs | 0.860 | h-1 | 0.0002389 | 1/s | 1/h | exact (1) | Tab2:row1:col1 |
| Fe | `Q44` · fe | 1 | % SEE |  |  | s·%·ee | exact (1) | Tab2:row9:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Additive (ng/mL)' routed out of structural estimates ('Residual errorf')
- column 'weight [kg]b' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'age [years]c' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'dose [mg]d' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'predicted typical value of the parametera (90% prediction interval)' classified 'ci' by the LLM but kept as the estimate: the header names the point value
- dropped unlinked row (NIL): 'Patients taking bosentan' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col1'])
- dropped unlinked row (NIL): 'Not taking bosentan (calculated)' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col1'])
- dropped unlinked row (NIL): '70 kg patient' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col1'])
- dropped unlinked row (NIL): 'Effect of weight' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col1'])
- unit_dimension_unknown: '% SEE' (fe)
- dropped unlinked row (NIL): 'Effect of age on F' — extend the ontology if this is a real PK parameter (source ['Tab2:row11:col1'])
- dropped unlinked row (NIL): 'Typical adult, PHIRST-1 adult model' — extend the ontology if this is a real PK parameter (source ['Ferguson-Sells_2022_table_3:row2:col1', 'Ferguson-Sells_2022_table_3:row2:col2', 'Ferguson-Sells_2022_table_3:row2:col3'])
- dropped unlinked row (NIL): 'Typical adult, pediatric model' — extend the ontology if this is a real PK parameter (source ['Ferguson-Sells_2022_table_3:row3:col1', 'Ferguson-Sells_2022_table_3:row3:col2', 'Ferguson-Sells_2022_table_3:row3:col3', 'Ferguson-Sells_2022_table_3:row9:col1', 'Ferguson-Sells_2022_table_3:row9:col2', 'Ferguson-Sells_2022_table_3:row9:col3'])
- dropped unlinked row (NIL): '≥ 40 kg' — extend the ontology if this is a real PK parameter (source ['Ferguson-Sells_2022_table_3:row4:col1', 'Ferguson-Sells_2022_table_3:row4:col2', 'Ferguson-Sells_2022_table_3:row4:col3', 'Ferguson-Sells_2022_table_3:row10:col1', 'Ferguson-Sells_2022_table_3:row10:col2', 'Ferguson-Sells_2022_table_3:row10:col3'])
- dropped unlinked row (NIL): '25 to &lt; 40 kg' — extend the ontology if this is a real PK parameter (source ['Ferguson-Sells_2022_table_3:row5:col1', 'Ferguson-Sells_2022_table_3:row5:col2', 'Ferguson-Sells_2022_table_3:row5:col3', 'Ferguson-Sells_2022_table_3:row11:col1', 'Ferguson-Sells_2022_table_3:row11:col2', 'Ferguson-Sells_2022_table_3:row11:col3'])
- dropped unlinked row (NIL): '&lt; 25 kg' — extend the ontology if this is a real PK parameter (source ['Ferguson-Sells_2022_table_3:row6:col1', 'Ferguson-Sells_2022_table_3:row6:col2', 'Ferguson-Sells_2022_table_3:row6:col3', 'Ferguson-Sells_2022_table_3:row12:col1', 'Ferguson-Sells_2022_table_3:row12:col2', 'Ferguson-Sells_2022_table_3:row12:col3'])
- dropped unlinked row (NIL): 'Typical adult PHIRST-1 model' — extend the ontology if this is a real PK parameter (source ['Ferguson-Sells_2022_table_3:row8:col1', 'Ferguson-Sells_2022_table_3:row8:col2', 'Ferguson-Sells_2022_table_3:row8:col3', 'Ferguson-Sells_2022_table_3:row8:col6'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tadalafil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row1:col2 = '201%b (26.4)'
- unparsed cell Tab2:row1:col3 = '0.891 (0.652, 1.22)'
- unparsed cell Tab2:row1:col4 = '198 (91.5, 390)'
- unparsed cell Tab2:row4:col2 = '48.5%b (11.0)'
- unparsed cell Tab2:row4:col3 = '3.22 (3.00, 3.46)'
- unparsed cell Tab2:row4:col4 = '48.2 (42.3, 53.8)'
- unparsed cell Tab2:row7:col2 = '32.1%b (42.3)'
- unparsed cell Tab2:row7:col3 = '88.1 (79.5, 99.5)'
- unparsed cell Tab2:row7:col4 = '31.0 (13.8, 48.2)'
- unparsed cell Tab2:row11:col3 = '0.101 (0.0121, 0.190)'
- unparsed cell Tab2:row13:col3 = '43.3 (17.4, 70.0)'
- unparsed cell Ferguson-Sells_2022_table_3:row2:col4 = '2.46e1.59'
- unparsed cell Ferguson-Sells_2022_table_3:row2:col5 = '123f79.7'
- unparsed cell Ferguson-Sells_2022_table_3:row2:col6 = '14,82511,524'
- unparsed cell Ferguson-Sells_2022_table_3:row2:col7 = '618g480g'
- unparsed cell Ferguson-Sells_2022_table_3:row2:col8 = '34.7g34.7g'
- unparsed cell Ferguson-Sells_2022_table_3:row3:col4 = '2.33 (1.06–4.84)'
- unparsed cell Ferguson-Sells_2022_table_3:row3:col5 = '107 (65.8–178)'
- unparsed cell Ferguson-Sells_2022_table_3:row3:col6 = '17,100 (8260–37,800)'
- unparsed cell Ferguson-Sells_2022_table_3:row3:col7 = '714 (344–1570)'
- unparsed cell Ferguson-Sells_2022_table_3:row3:col8 = '32.0 (13.2–79.4)'
- unparsed cell Ferguson-Sells_2022_table_3:row4:col4 = '2.63 (1.29–5.73)'
- unparsed cell Ferguson-Sells_2022_table_3:row4:col5 = '85.6 (50.4–145)'
- unparsed cell Ferguson-Sells_2022_table_3:row4:col6 = '15,200 (6980–31,100)'
- unparsed cell Ferguson-Sells_2022_table_3:row4:col7 = '633 (291–1300)'
- unparsed cell Ferguson-Sells_2022_table_3:row4:col8 = '22.6 (8.98–55.6)'
- unparsed cell Ferguson-Sells_2022_table_3:row5:col4 = '2.38 (1.09–4.85)'
- unparsed cell Ferguson-Sells_2022_table_3:row5:col5 = '45.7 (27.5–76.5)'
- unparsed cell Ferguson-Sells_2022_table_3:row5:col6 = '8390 (4130–18,400)'
- unparsed cell Ferguson-Sells_2022_table_3:row5:col7 = '350 (172–767)'
- unparsed cell Ferguson-Sells_2022_table_3:row5:col8 = '13.5 (5.56–34.3)'
- unparsed cell Ferguson-Sells_2022_table_3:row6:col4 = '2.45 (1.20–5.19)'
- unparsed cell Ferguson-Sells_2022_table_3:row6:col5 = '24.6 (15.1–41.0)'
- unparsed cell Ferguson-Sells_2022_table_3:row6:col6 = '8170 (3850–16,700)'
- unparsed cell Ferguson-Sells_2022_table_3:row6:col7 = '340 (161–694)'
- unparsed cell Ferguson-Sells_2022_table_3:row6:col8 = '6.94 (2.88–17.7)'
- unparsed cell Ferguson-Sells_2022_table_3:row8:col4 = '4.31e2.79'
- unparsed cell Ferguson-Sells_2022_table_3:row8:col5 = '123f79.7'
- unparsed cell Ferguson-Sells_2022_table_3:row8:col7 = '400g286g'
- unparsed cell Ferguson-Sells_2022_table_3:row8:col8 = '19.8g19.8g'
- unparsed cell Ferguson-Sells_2022_table_3:row9:col4 = '4.05 (1.93–8.10)'
- unparsed cell Ferguson-Sells_2022_table_3:row9:col5 = '107 (64.8–181)'
- unparsed cell Ferguson-Sells_2022_table_3:row9:col6 = '9870 (4940–20,700)'
- unparsed cell Ferguson-Sells_2022_table_3:row9:col7 = '411 (206–863)'
- unparsed cell Ferguson-Sells_2022_table_3:row9:col8 = '18.5 (8.11–44.8)'
- unparsed cell Ferguson-Sells_2022_table_3:row10:col4 = '4.45 (2.05–9.36)'
- unparsed cell Ferguson-Sells_2022_table_3:row10:col5 = '86.9 (52.9–146)'
- unparsed cell Ferguson-Sells_2022_table_3:row10:col6 = '8990 (4270–19,500)'
- unparsed cell Ferguson-Sells_2022_table_3:row10:col7 = '375 (178–815)'
- unparsed cell Ferguson-Sells_2022_table_3:row10:col8 = '13.3 (5.65–33.9)'
- unparsed cell Ferguson-Sells_2022_table_3:row11:col4 = '4.00 (1.89–8.21)'
- unparsed cell Ferguson-Sells_2022_table_3:row11:col5 = '46.8 (26.5–78.8)'
- unparsed cell Ferguson-Sells_2022_table_3:row11:col6 = '5000 (2440–10,600)'
- unparsed cell Ferguson-Sells_2022_table_3:row11:col7 = '209 (102–440)'
- unparsed cell Ferguson-Sells_2022_table_3:row11:col8 = '8.08 (3.15–20.3)'
- unparsed cell Ferguson-Sells_2022_table_3:row12:col4 = '4.39 (2.12–9.22)'
- unparsed cell Ferguson-Sells_2022_table_3:row12:col5 = '24.5 (14.5–42.5)'
- unparsed cell Ferguson-Sells_2022_table_3:row12:col6 = '4550 (2170–9450)'
- unparsed cell Ferguson-Sells_2022_table_3:row12:col7 = '190 (90.4–394)'
- unparsed cell Ferguson-Sells_2022_table_3:row12:col8 = '3.78 (1.60–9.23)'
- companion parameter table 3 transcribed (31 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (2/10 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[fe]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fe]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.860 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 0.860 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q87_age]` |  | 0.100 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical adult, phirst-1 adult model]` |  | 4020 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tadalafil | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tadalafil | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row1:col1'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btadalafil%5D%20Tadalafil_FergusonSells2022_reference&body=Drug%3A%20tadalafil%0ARecord%3A%20Tadalafil_FergusonSells2022_reference%0APaper%3A%20Ferguson-Sells_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tadalafil/Tadalafil_FergusonSells2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 16:41 UTC</sub>
