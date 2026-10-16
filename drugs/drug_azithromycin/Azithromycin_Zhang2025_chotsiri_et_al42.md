<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;azithromycin&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/&quot;},{&quot;label&quot;:&quot;Zhang_2025 \u00b7 chotsiri_et_al42&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Azithromycin_Alshehri2023_reference&quot;,&quot;label&quot;:&quot;Alshehri_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Alshehri2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azithromycin_Benn2017_reference&quot;,&quot;label&quot;:&quot;Benn_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Benn2017_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azithromycin_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# azithromycin — `Azithromycin_Zhang2025_chotsiri_et_al42`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Zhang R et al., Significant Predictors of Azithromycin…, Drug design, development an… (2025)
  ·  DOI: [10.2147/DDDT.S519597](https://doi.org/10.2147/DDDT.S519597)

<div class="pk-model-meta" hidden drug="azithromycin" model-id="Azithromycin_Zhang2025_chotsiri_et_al42" status="rejected" stale="false" population="mixed (preterm neonates, children, pregnant/non-pregnant women, adults)" measured-compound="azithromycin" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- column 'chotsiri et al (2022)42' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped value-less row: 'PK/PD Parameters and Formulas'
- routed 'cBetween- Subject Variability (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=azithromycin
- population split: 'chotsiri et al (2022)42' subgroup of Zhang_2025 (paper reports 6 populations: chotsiri et al (2022)42, sampson et al (2014)38, wu et al (2018)41, zhang et al(2024)47, zheng et al (2014)40, zheng et al (2018)46)
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- LLM selected parameter table(s) 2
- transposed table Zhang_2025_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Zhang_2025_table_2:row2:col2 = 'KaCLVcCLp1Vp1'
- unparsed cell Zhang_2025_table_2:row3:col2 = '1.05121–0.0379×(60.43-WT)1939–0.181×(AGE-19.03)2825650'
- unparsed cell Zhang_2025_table_2:row3:col3 = '0.18×WT0.750.931.014.2×WT'
- unparsed cell Zhang_2025_table_2:row3:col7 = '0.21×WT0.751.97×WT2.1×WT0.7517.9×WT'
- unparsed cell Zhang_2025_table_2:row3:col11 = '0.15×WT0.751.88×WT1.79×WT0.7513.00×WT'
- unparsed cell Zhang_2025_table_2:row4:col1 = '76.9/99.6/28.335.6///'
- unparsed cell Zhang_2025_table_2:row4:col3 = '23.5//14.2'
- unparsed cell Zhang_2025_table_2:row4:col4 = '110/3443//'
- unparsed cell Zhang_2025_table_2:row4:col5 = '//36/8611460/'
- unparsed cell Zhang_2025_table_2:row4:col6 = '58/100////29.5'
- unparsed cell Zhang_2025_table_2:row4:col8 = '/31.3113////'
- unparsed cell Zhang_2025_table_2:row4:col9 = '17.6/29.3168.3////0.22///26.931.50.22'
- unparsed cell Zhang_2025_table_2:row4:col10 = '/411225153/75/75///114'
- unparsed cell Zhang_2025_table_2:row4:col12 = '32.184.951.6/'
- unparsed cell Zhang_2025_table_2:row5:col1 = '31.2%'
- unparsed cell Zhang_2025_table_2:row5:col2 = '32.96%'
- unparsed cell Zhang_2025_table_2:row5:col3 = '28.7%'
- unparsed cell Zhang_2025_table_2:row5:col4 = '30%'
- unparsed cell Zhang_2025_table_2:row5:col5 = '32%'
- unparsed cell Zhang_2025_table_2:row5:col6 = 'εp: 24.6%εb: 20.8%'
- unparsed cell Zhang_2025_table_2:row5:col7 = '24.5%'
- unparsed cell Zhang_2025_table_2:row5:col8 = '40.6%'
- unparsed cell Zhang_2025_table_2:row5:col10 = 'Blood:47%PBMCs:74%PMNs:64%'
- unparsed cell Zhang_2025_table_2:row5:col11 = '28%'
- unparsed cell Zhang_2025_table_2:row5:col12 = '5.7%'
- unparsed cell Zhang_2025_table_2:row5:col13 = '100%'
- unparsed cell Zhang_2025_table_2:row5:col14 = '1.94%'
- unparsed cell Zhang_2025_table_2:row5:col15 = '24.31%'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (4/4 fields) | none |

_All readers agree on the compared fields of this record._

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

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_azithromycin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhang_2025` / `Zhang_2025::chotsiri_et_al42`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:33 UTC</sub>
