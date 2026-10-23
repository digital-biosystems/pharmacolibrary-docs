<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;simvastatin&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/&quot;},{&quot;label&quot;:&quot;Tsamandouras_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Simvastatin_Corsini1999_reference&quot;,&quot;label&quot;:&quot;Corsini_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Corsini1999_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Mauro1993_reference&quot;,&quot;label&quot;:&quot;Mauro_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Mauro1993_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Sun2022_reference&quot;,&quot;label&quot;:&quot;Sun_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Sun2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Friedrich2014_reference&quot;,&quot;label&quot;:&quot;Friedrich_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Friedrich2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Jadhav2023_reference&quot;,&quot;label&quot;:&quot;Jadhav_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Jadhav2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Wei_2014_LDL_C&quot;,&quot;label&quot;:&quot;Wei_2014 \u00b7 LDL-C&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/pd_Wei_2014_LDL_C.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# simvastatin — `Simvastatin_Tsamandouras2015_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Simvastatin record refused because the tissue-to-plasma partition coefficient unit 'a' is not a recognized volume ratio, blocking structural consistency checks.

<div class="pk-model-meta" hidden drug="simvastatin" model-id="Simvastatin_Tsamandouras2015_reference" status="rejected" stale="false" population="healthy volunteers" measured-compound="simvastatin" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Tsamandouras N, Dickinson G, Guo Y, Hall S, Rostami-Hodjegan A, Galetin A et al. Development and Application of a Mechanistic Pharmacokinetic Model for Simvastatin and its Active Metabolite Simvastatin Acid Using an Integrated Population PBPK Approach. Pharmaceutical research 32(6):1864–1883 (2015).
  ·  DOI: [10.1007/s11095-014-1581-2](https://doi.org/10.1007/s11095-014-1581-2)

## Population and dosing

**Population:** healthy volunteers · age group adult · n = &gt;=34.

**Dosing:** 40 mg, oral, multiple, every 24 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL&lt;sub&gt;int,CYP3A,vitro&lt;/sub&gt; (µL/min/pmol CYP3A) | CLint | 14.208 | µL/min/pmol CYP3A | 7.97 |
| KP&lt;sub&gt;T,B,rob&lt;/sub&gt; | Kp | 35.19 | a | 7.34 |
| CL&lt;sub&gt;int,CYP3A,vitro&lt;/sub&gt; (mL/min/mg of MP) | CLint | 0.0504 | mL/min/mg of MP | 12.55 |
| KP'&lt;sub&gt;T,B,rob&lt;/sub&gt; | Kp | 61.00 | a | 17.33 |
| CL&lt;sub&gt;U,act&lt;/sub&gt; (L/h) | CL | 8001.1 | L/h | 21.23 |
| theta_kp_pm | theta_kp_pm | 4362.8 |  | 23.72 |
| theta_kp_pm | theta_kp_pm | 1.4562 |  | 18.66 |
| VD(CLA) (L) | V | 100.0 | L |  |
| Ka, h−1 | kabs | 1.41 | h−1 |  |
| LAG (hr) | tlag | 0.212 | hr |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Simvastatin record refused because the tissue-to-plasma partition coefficient unit 'a' is not a recognized volume ratio, blocking structural consistency checks.**

Two partition coefficients are reported with the dimensionless placeholder 'a', which is not a standard unit for tissue-to-plasma ratios and thus cannot be interpreted in the model's physical framework. A dimensionality check failed on this structural parameter because the undefined unit prevents proper scaling. The second reader also disputed the metabolic link classification and cited a conflicting partition coefficient value of 18.716. Extracted — simvastatin: CLint 14.2 µL/min/pmol CYP3A, Kp 35.2 a, V 100 L, kabs 1.41 h−1, tlag 0.212 hr; simvastatin acid: CLint 0.0504 mL/min/mg of MP, Kp 61 a, CL 8e+03 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has simvastatin → simvastatin acid (metabolism), the second reading simvastatin → simvastatin acid (interconversion); it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL&lt;sub&gt;int,CYP3A,vitro&lt;/sub&gt; (µL/min/pmol CYP3A) | `Q3` · CLint | 14.208 | µL/min/pmol CYP3A |  |  | µl/(min·pM·a·cyp3) | 7.97 | llm_corrected (0.6) | Tsamandouras_2015_table_3:row2:col1, Tsamandouras_2015_table_3:row2:col2 |
| KP&lt;sub&gt;T,B,rob&lt;/sub&gt; | `Q410` · Kp | 35.19 | a |  |  | a | 7.34 | llm_confirmed (0.6) | Tsamandouras_2015_table_3:row4:col1, Tsamandouras_2015_table_3:row4:col2, Tsamandouras_2015_table_3:row20:col1, Tsamandouras_2015_table_3:row20:col2 |
| CL&lt;sub&gt;int,CYP3A,vitro&lt;/sub&gt; (mL/min/mg of MP) | `Q3` · CLint | 0.0504 | mL/min/mg of MP |  |  | ml/(min·mg·ofmp) | 12.55 | llm_corrected (0.6) | Tsamandouras_2015_table_3:row6:col1, Tsamandouras_2015_table_3:row6:col2 |
| KP'&lt;sub&gt;T,B,rob&lt;/sub&gt; | `Q410` · Kp | 61.00 | a |  |  | a | 17.33 | llm_confirmed (0.6) | Tsamandouras_2015_table_3:row8:col1, Tsamandouras_2015_table_3:row8:col2, Tsamandouras_2015_table_3:row22:col1, Tsamandouras_2015_table_3:row22:col2 |
| CL&lt;sub&gt;U,act&lt;/sub&gt; (L/h) | `Q22` · CL | 8001.1 | L/h | 0.002223 | m3/s | l/h | 21.23 | llm_confirmed (0.6) | Tsamandouras_2015_table_3:row9:col1, Tsamandouras_2015_table_3:row9:col2 |
| theta_kp_pm | `Q900` · theta_kp_pm | 4362.8 |  |  |  |  | 23.72 |  | Tsamandouras_2015_table_3:row3:col1, Tsamandouras_2015_table_3:row3:col2 |
| theta_kp_pm | `Q900` · theta_kp_pm | 1.4562 |  |  |  |  | 18.66 |  | Tsamandouras_2015_table_3:row7:col1, Tsamandouras_2015_table_3:row7:col2 |
| VD(CLA) (L) | `Q61` · V | 100.0 | L | 0.1 | m3 | L |  | review_gapfill (0.7) | Methaneethorn_2014_3:review |
| Ka, h−1 | `Q49` · kabs | 1.41 | h−1 | 0.0003917 | 1/s | 1/h |  | review_gapfill (0.7) | Jadhav_2023:review |
| LAG (hr) | `Q83` · tlag | 0.212 | hr | 763.2 | s | h |  | review_gapfill (0.7) | Kim_2011:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'P&lt;sub&gt;eff&lt;/sub&gt; (cm/h)' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2015_table_3:row1:col1', 'Tsamandouras_2015_table_3:row1:col2'])
- unit_dimension_unknown: 'µL/min/pmol CYP3A' (CLint)
- unit_dimension_mismatch: 'KP&lt;sub&gt;T,B,rob&lt;/sub&gt;' → Q410 (unit '[time]' vs ontology 'dimensionless') — route to review
- unit_dimension_mismatch: 'KP&lt;sub&gt;T,Blit&lt;/sub&gt;' → Q410 (unit '[time]' vs ontology 'dimensionless') — route to review
- dropped duplicate Q410 ('KP&lt;sub&gt;T,Blit&lt;/sub&gt;', value '3033.6') — already have one for this compound
- unit_dimension_unknown: 'mL/min/mg of MP' (CLint)
- unit_dimension_mismatch: "KP'&lt;sub&gt;T,B,rob&lt;/sub&gt;" → Q410 (unit '[time]' vs ontology 'dimensionless') — route to review
- dropped unlinked row (NIL): 'k&lt;sub&gt;hydr,pl&lt;/sub&gt; (h&lt;sup&gt;-1&lt;/sup&gt;)' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2015_table_3:row10:col1', 'Tsamandouras_2015_table_3:row10:col2'])
- dropped unlinked row (NIL): 'k&lt;sub&gt;hydr,buff&lt;/sub&gt; (h&lt;sup&gt;-1&lt;/sup&gt;)' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2015_table_3:row11:col1', 'Tsamandouras_2015_table_3:row11:col2'])
- dropped unlinked row (NIL): 'k&lt;sub&gt;hydr,59&lt;/sub&gt; (h&lt;sup&gt;-1&lt;/sup&gt;)' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2015_table_3:row12:col1', 'Tsamandouras_2015_table_3:row12:col2'])
- unit_dimension_unknown: 'µL/min/mg of MP' (CLint)
- dropped duplicate Q3 ('CL&lt;sub&gt;int,glic,vitro&lt;/sub&gt; (µL/min/mg of MP)', value '0.3703') — already have one for this compound
- dropped unlinked row (NIL): 'k&lt;sub&gt;hydr,hybrid&lt;/sub&gt; (h&lt;sup&gt;-1&lt;/sup&gt;)' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2015_table_3:row14:col1', 'Tsamandouras_2015_table_3:row14:col2'])
- dropped unlinked row (NIL): 'GRT' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2015_table_3:row16:col1', 'Tsamandouras_2015_table_3:row16:col2'])
- dropped unlinked row (NIL): 'SIRT' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2015_table_3:row17:col1', 'Tsamandouras_2015_table_3:row17:col2'])
- dropped unlinked row (NIL): 'P&lt;sub&gt;eff&lt;/sub&gt;' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2015_table_3:row18:col1', 'Tsamandouras_2015_table_3:row18:col2'])
- unit_dimension_mismatch: 'CL&lt;sub&gt;int,CYP3A,vitro&lt;/sub&gt;' → Q3 (unit '[time]' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- dropped duplicate Q3 ('CL&lt;sub&gt;int,CYP3A,vitro&lt;/sub&gt;', value '38.30') — already have one for this compound
- unit_dimension_mismatch: 'CL&lt;sub&gt;U,act&lt;/sub&gt;' → Q22 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CL&lt;sub&gt;U,act&lt;/sub&gt;', value '71.87') — already have one for this compound
- dropped unlinked row (NIL): 'k&lt;sub&gt;hydr,hybrid&lt;/sub&gt;' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2015_table_3:row24:col1', 'Tsamandouras_2015_table_3:row24:col2'])
- dropped unlinked row (NIL): 'eps&lt;sub&gt;SV&lt;/sub&gt;' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2015_table_3:row26:col1', 'Tsamandouras_2015_table_3:row26:col2'])
- dropped unlinked row (NIL): 'eps&lt;sub&gt;SVA&lt;/sub&gt;' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2015_table_3:row27:col1', 'Tsamandouras_2015_table_3:row27:col2'])
- implicit units: 'CL&lt;sub&gt;int,CYP3A,vitro&lt;/sub&gt; (µL/min/pmol CYP3A)' — the LLM proposed 'µL/min/pmol CYP3A', whose dimension does not fit Q3; left unset
- implicit units: 'CL&lt;sub&gt;int,CYP3A,vitro&lt;/sub&gt; (mL/min/mg of MP)' — the LLM proposed 'mL/min/mg of MP', whose dimension does not fit Q3; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=simvastatin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — pbpk model — not a compartmental parent–metabolite model (site presystemic: 'This provides additional confidence that the model adequately captures the first pass metabolism of SV.')
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=pbpk; 22/22 row label(s) assigned, 0 linked by role; re-tagged parent→simvastatin acid ×16
- gap-filled Q61 (V) from Methaneethorn_2014_3's review values (primary lacked it)
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Jadhav_2023's review values (primary lacked it)
- gap-filled Q83 (tlag) from Kim_2011's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.6 (15/25 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['simvastatin', 'simvastatin acid', 'metabolism']] | [['simvastatin', 'simvastatin acid', 'interconversion']] | mismatch |
| `gpt-oss-120b` | `parameters[cl&lt;sub&gt;int,cyp3a,vitro&lt;/sub&gt;]` | 0.0504 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl&lt;sub&gt;int,cyp3a,vitro&lt;/sub&gt;].parameter_id` | Q3 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[k&lt;sub&gt;hydr,hybrid&lt;/sub&gt;]` |  | 2.7457 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k&lt;sub&gt;hydr,pl&lt;/sub&gt;]` |  | 0.1264 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kp'&lt;sub&gt;t,b,rob&lt;/sub&gt;].value` | 61.00 | 1.0476 | mismatch |
| `gpt-oss-120b` | `parameters[kp&lt;sub&gt;t,b,rob&lt;/sub&gt;].value` | 35.19 | 18.716 | mismatch |
| `gpt-oss-120b` | `parameters[lag]` | 0.212 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[rate of absorption (ka)]` | 0.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 100.0 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tsamandouras_2015_table_3:row9:col1', 'Tsamandouras_2015_table_3:row9:col2'] |
| C5_dimension_Q410 | fail | [time] | a | ['Tsamandouras_2015_table_3:row4:col1', 'Tsamandouras_2015_table_3:row4:col2', 'Tsamandouras_2015_table_3:row20:col1', 'Tsamandouras_2015_table_3:row20:col2'] |
| C5_dimension_Q410 | fail | [time] | a | ['Tsamandouras_2015_table_3:row8:col1', 'Tsamandouras_2015_table_3:row8:col2', 'Tsamandouras_2015_table_3:row22:col1', 'Tsamandouras_2015_table_3:row22:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Jadhav_2023:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Methaneethorn_2014_3:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Kim_2011:review'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [time] / [mass] | µL/min/pmol CYP3A | ['Tsamandouras_2015_table_3:row2:col1', 'Tsamandouras_2015_table_3:row2:col2'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [time] / [mass] | mL/min/mg of MP | ['Tsamandouras_2015_table_3:row6:col1', 'Tsamandouras_2015_table_3:row6:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 8001 | ['Tsamandouras_2015_table_3:row9:col1', 'Tsamandouras_2015_table_3:row9:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8e+03 L/h | ['Tsamandouras_2015_table_3:row9:col1', 'Tsamandouras_2015_table_3:row9:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 100 L | ['Methaneethorn_2014_3:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsimvastatin%5D%20Simvastatin_Tsamandouras2015_reference&body=Drug%3A%20simvastatin%0ARecord%3A%20Simvastatin_Tsamandouras2015_reference%0APaper%3A%20Tsamandouras_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_simvastatin/Simvastatin_Tsamandouras2015_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-09-26 20:48 UTC</sub>
