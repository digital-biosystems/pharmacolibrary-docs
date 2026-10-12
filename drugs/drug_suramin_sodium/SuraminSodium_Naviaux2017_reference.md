<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;suramin sodium&quot;,&quot;href&quot;:&quot;drugs/drug_suramin_sodium/&quot;},{&quot;label&quot;:&quot;Naviaux_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SuraminSodium_Kosarek2006_reference&quot;,&quot;label&quot;:&quot;Kosarek_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_suramin_sodium/SuraminSodium_Kosarek2006_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SuraminSodium_Naviaux2017_reference&quot;,&quot;label&quot;:&quot;Naviaux_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_suramin_sodium/SuraminSodium_Naviaux2017_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# suramin sodium — `SuraminSodium_Naviaux2017_reference`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has suramin, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Naviaux RK et al., Low-dose suramin in autism spectrum dis…, Annals of clinical and tran… (2017)
  ·  DOI: [10.1002/acn3.424](https://doi.org/10.1002/acn3.424)

<div class="pk-model-meta" hidden drug="suramin sodium" model-id="SuraminSodium_Naviaux2017_reference" status="curated_candidate" stale="false" population="children with autism spectrum disorder" measured-compound="suramin" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| steady‐state volume of distribution | `Q61` · V | 0.83 | L/kg | 0.0581 | L | not captured | boundary (0.8) | Naviaux_2017:other_prose | — | not captured |
| clearance | `Q22` · CL | 1.95 | mL/h/kg | 3.7916666666666665e-08 | L/h | not captured | exact (1.0) | Naviaux_2017:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'raw' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'social' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'restr/rep' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'stereotypy' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'language' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'sociability' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'e. language' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'social inter.' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ados‐2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'eowpvt' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'abc' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'atec' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'cgi' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'rbq' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Outcome' — extend the ontology if this is a real PK parameter (source ['acn3424-tbl-0004:row0:col5', 'acn3424-tbl-0004:row0:col6', 'acn3424-tbl-0004:row0:col7', 'acn3424-tbl-0004:row0:col11', 'acn3424-tbl-0004:row0:col13', 'acn3424-tbl-0004:row0:col14', 'acn3424-tbl-0004:row0:col15', 'acn3424-tbl-0004:row0:col17', 'acn3424-tbl-0004:row0:col18', 'acn3424-tbl-0004:row1:col4', 'acn3424-tbl-0004:row1:col5', 'acn3424-tbl-0004:row1:col6', 'acn3424-tbl-0004:row1:col7', 'acn3424-tbl-0004:row1:col8', 'acn3424-tbl-0004:row1:col10', 'acn3424-tbl-0004:row1:col11', 'acn3424-tbl-0004:row1:col12', 'acn3424-tbl-0004:row1:col13', 'acn3424-tbl-0004:row1:col14', 'acn3424-tbl-0004:row1:col15', 'acn3424-tbl-0004:row1:col16', 'acn3424-tbl-0004:row1:col17', 'acn3424-tbl-0004:row1:col18', 'acn3424-tbl-0004:row1:col19'])
- dropped unlinked row (NIL): 'Suramin' — extend the ontology if this is a real PK parameter (source ['acn3424-tbl-0004:row2:col4', 'acn3424-tbl-0004:row2:col8', 'acn3424-tbl-0004:row2:col10', 'acn3424-tbl-0004:row2:col12', 'acn3424-tbl-0004:row2:col16', 'acn3424-tbl-0004:row2:col19', 'acn3424-tbl-0004:row3:col5', 'acn3424-tbl-0004:row3:col6', 'acn3424-tbl-0004:row3:col7', 'acn3424-tbl-0004:row3:col11', 'acn3424-tbl-0004:row3:col13', 'acn3424-tbl-0004:row3:col14', 'acn3424-tbl-0004:row3:col15', 'acn3424-tbl-0004:row3:col17', 'acn3424-tbl-0004:row3:col18', 'acn3424-tbl-0004:row4:col4', 'acn3424-tbl-0004:row4:col5', 'acn3424-tbl-0004:row4:col6', 'acn3424-tbl-0004:row4:col7', 'acn3424-tbl-0004:row4:col8', 'acn3424-tbl-0004:row4:col10', 'acn3424-tbl-0004:row4:col11', 'acn3424-tbl-0004:row4:col12', 'acn3424-tbl-0004:row4:col13', 'acn3424-tbl-0004:row4:col14', 'acn3424-tbl-0004:row4:col15', 'acn3424-tbl-0004:row4:col16', 'acn3424-tbl-0004:row4:col17', 'acn3424-tbl-0004:row4:col18', 'acn3424-tbl-0004:row4:col19', 'acn3424-tbl-0004:row5:col4', 'acn3424-tbl-0004:row5:col5', 'acn3424-tbl-0004:row5:col6', 'acn3424-tbl-0004:row5:col7', 'acn3424-tbl-0004:row5:col8', 'acn3424-tbl-0004:row5:col10', 'acn3424-tbl-0004:row5:col11', 'acn3424-tbl-0004:row5:col12', 'acn3424-tbl-0004:row5:col13', 'acn3424-tbl-0004:row5:col14', 'acn3424-tbl-0004:row5:col15', 'acn3424-tbl-0004:row5:col16', 'acn3424-tbl-0004:row5:col17', 'acn3424-tbl-0004:row5:col18', 'acn3424-tbl-0004:row5:col19', 'acn3424-tbl-0004:row6:col4', 'acn3424-tbl-0004:row6:col5', 'acn3424-tbl-0004:row6:col6', 'acn3424-tbl-0004:row6:col7', 'acn3424-tbl-0004:row6:col8', 'acn3424-tbl-0004:row6:col10', 'acn3424-tbl-0004:row6:col11', 'acn3424-tbl-0004:row6:col12', 'acn3424-tbl-0004:row6:col13', 'acn3424-tbl-0004:row6:col14', 'acn3424-tbl-0004:row6:col15', 'acn3424-tbl-0004:row6:col16', 'acn3424-tbl-0004:row6:col19', 'acn3424-tbl-0004:row7:col4', 'acn3424-tbl-0004:row7:col5', 'acn3424-tbl-0004:row7:col6', 'acn3424-tbl-0004:row7:col7', 'acn3424-tbl-0004:row7:col8', 'acn3424-tbl-0004:row7:col10', 'acn3424-tbl-0004:row7:col11', 'acn3424-tbl-0004:row7:col12', 'acn3424-tbl-0004:row7:col13', 'acn3424-tbl-0004:row7:col14', 'acn3424-tbl-0004:row7:col15', 'acn3424-tbl-0004:row7:col17', 'acn3424-tbl-0004:row7:col18', 'acn3424-tbl-0004:row7:col19'])
- dropped PD-category row 'Placebo' → Q341 (placebo_Emax, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['acn3424-tbl-0004:row8:col4', 'acn3424-tbl-0004:row8:col8', 'acn3424-tbl-0004:row8:col10', 'acn3424-tbl-0004:row8:col12', 'acn3424-tbl-0004:row8:col16', 'acn3424-tbl-0004:row8:col19', 'acn3424-tbl-0004:row9:col5', 'acn3424-tbl-0004:row9:col6', 'acn3424-tbl-0004:row9:col7', 'acn3424-tbl-0004:row9:col11', 'acn3424-tbl-0004:row9:col13', 'acn3424-tbl-0004:row9:col14', 'acn3424-tbl-0004:row9:col15', 'acn3424-tbl-0004:row9:col17', 'acn3424-tbl-0004:row9:col18', 'acn3424-tbl-0004:row10:col4', 'acn3424-tbl-0004:row10:col5', 'acn3424-tbl-0004:row10:col6', 'acn3424-tbl-0004:row10:col7', 'acn3424-tbl-0004:row10:col8', 'acn3424-tbl-0004:row10:col10', 'acn3424-tbl-0004:row10:col11', 'acn3424-tbl-0004:row10:col12', 'acn3424-tbl-0004:row10:col13', 'acn3424-tbl-0004:row10:col14', 'acn3424-tbl-0004:row10:col15', 'acn3424-tbl-0004:row10:col16', 'acn3424-tbl-0004:row10:col17', 'acn3424-tbl-0004:row10:col18', 'acn3424-tbl-0004:row10:col19', 'acn3424-tbl-0004:row11:col4', 'acn3424-tbl-0004:row11:col5', 'acn3424-tbl-0004:row11:col6', 'acn3424-tbl-0004:row11:col7', 'acn3424-tbl-0004:row11:col8', 'acn3424-tbl-0004:row11:col10', 'acn3424-tbl-0004:row11:col11', 'acn3424-tbl-0004:row11:col12', 'acn3424-tbl-0004:row11:col13', 'acn3424-tbl-0004:row11:col14', 'acn3424-tbl-0004:row11:col15', 'acn3424-tbl-0004:row11:col16', 'acn3424-tbl-0004:row11:col17', 'acn3424-tbl-0004:row11:col18', 'acn3424-tbl-0004:row11:col19', 'acn3424-tbl-0004:row12:col4', 'acn3424-tbl-0004:row12:col5', 'acn3424-tbl-0004:row12:col6', 'acn3424-tbl-0004:row12:col7', 'acn3424-tbl-0004:row12:col8', 'acn3424-tbl-0004:row12:col10', 'acn3424-tbl-0004:row12:col11', 'acn3424-tbl-0004:row12:col12', 'acn3424-tbl-0004:row12:col13', 'acn3424-tbl-0004:row12:col14', 'acn3424-tbl-0004:row12:col15', 'acn3424-tbl-0004:row12:col16', 'acn3424-tbl-0004:row12:col19', 'acn3424-tbl-0004:row13:col4', 'acn3424-tbl-0004:row13:col8', 'acn3424-tbl-0004:row13:col10', 'acn3424-tbl-0004:row13:col12', 'acn3424-tbl-0004:row13:col19'])
- salvaged Q61 ('steady‐state volume of distribution'=0.83) from results prose — parameter table was unreadable
- salvaged Q22 ('clearance'=1.95) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=suramin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table acn3424-tbl-0004: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell acn3424-tbl-0004:row2:col5 = '−7.0 to −2.2'
- unparsed cell acn3424-tbl-0004:row2:col6 = '−5.6 to −0.8'
- unparsed cell acn3424-tbl-0004:row2:col7 = '−2.5 to −0.29'
- unparsed cell acn3424-tbl-0004:row2:col11 = '−6.9 to −1.1'
- unparsed cell acn3424-tbl-0004:row2:col13 = '−4.0 to −0.36'
- unparsed cell acn3424-tbl-0004:row2:col14 = '−6.8 to −0.36'
- unparsed cell acn3424-tbl-0004:row2:col15 = '−2.7 to −0.49'
- unparsed cell acn3424-tbl-0004:row2:col17 = '−3.6 to −0.35'
- unparsed cell acn3424-tbl-0004:row2:col18 = '−3.6 to −0.35'
- unparsed cell acn3424-tbl-0004:row3:col2 = '95% CI'
- unparsed cell acn3424-tbl-0004:row3:col4 = '−2.3 to −0.9'
- unparsed cell acn3424-tbl-0004:row3:col8 = '−14.5 to +6.1'
- unparsed cell acn3424-tbl-0004:row3:col10 = '−6.2 to −1.0'
- unparsed cell acn3424-tbl-0004:row3:col12 = '−20 to −0.46'
- unparsed cell acn3424-tbl-0004:row3:col16 = '−3.4 to −0.15'
- unparsed cell acn3424-tbl-0004:row3:col19 = '−10.4 to +4.0'
- unparsed cell acn3424-tbl-0004:row8:col5 = '−2.7 to +1.9'
- unparsed cell acn3424-tbl-0004:row8:col6 = '−2.2 to +2.2'
- unparsed cell acn3424-tbl-0004:row8:col7 = '−3.0 to +2.2'
- unparsed cell acn3424-tbl-0004:row8:col11 = '−4.3 to +6.3'
- unparsed cell acn3424-tbl-0004:row8:col13 = '−5.0 to +5.0'
- unparsed cell acn3424-tbl-0004:row8:col14 = '−4.3 to +2.6'
- unparsed cell acn3424-tbl-0004:row8:col15 = '−3.8 to +3.4'
- unparsed cell acn3424-tbl-0004:row8:col17 = '−0.55 to +0.55'
- unparsed cell acn3424-tbl-0004:row8:col18 = '−0.55 to +0.55'
- unparsed cell acn3424-tbl-0004:row9:col2 = '95% CI'
- unparsed cell acn3424-tbl-0004:row9:col4 = '−1.1 to +0.28'
- unparsed cell acn3424-tbl-0004:row9:col8 = '−3.8 to +7.8'
- unparsed cell acn3424-tbl-0004:row9:col10 = '−2.0 to +2.8'
- unparsed cell acn3424-tbl-0004:row9:col12 = '−10 to +25'
- unparsed cell acn3424-tbl-0004:row9:col16 = '−0.55 to +0.55'
- unparsed cell acn3424-tbl-0004:row9:col19 = '−4.9 to 3.3'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (2/8 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clearance]` | 1.95 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | not captured | 1.95 | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady‐state volume of distribution]` | 0.83 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady‐state volume of distribution]` | not captured | 0.83 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | suramin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | suramin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.95 | not captured | not captured | ['Naviaux_2017:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.136 L/h | not captured | not captured | ['Naviaux_2017:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 58.1 L | not captured | not captured | ['Naviaux_2017:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=suramin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | pass | 352.79999999999995 | 295.02764657475376 | 0.8362 | days→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_suramin_sodium/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Naviaux_2017` / `Naviaux_2017::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_suramin_sodium/models/modelica/SuraminSodium_Naviaux2017_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_suramin_sodium/models/modelica/SuraminSodium_Naviaux2017_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_suramin_sodium/models/modelica/SuraminSodium_Naviaux2017_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_suramin_sodium/SuraminSodium_Naviaux2017_reference/SuraminSodium_Naviaux2017_reference_modelica.zip" download>SuraminSodium_Naviaux2017_reference_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_suramin_sodium/SuraminSodium_Naviaux2017_reference/SuraminSodium_Naviaux2017_reference_fmi.zip" download>SuraminSodium_Naviaux2017_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_suramin_sodium/SuraminSodium_Naviaux2017_reference/SuraminSodium_Naviaux2017_reference_matlab.zip" download>SuraminSodium_Naviaux2017_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_suramin_sodium/SuraminSodium_Naviaux2017_reference/SuraminSodium_Naviaux2017_reference_matlab_simbio.zip" download>SuraminSodium_Naviaux2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_suramin_sodium/SuraminSodium_Naviaux2017_reference/SuraminSodium_Naviaux2017_reference_sbml.zip" download>SuraminSodium_Naviaux2017_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_suramin_sodium/SuraminSodium_Naviaux2017_reference/SuraminSodium_Naviaux2017_reference_cellml.zip" download>SuraminSodium_Naviaux2017_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_suramin_sodium/SuraminSodium_Naviaux2017_reference/SuraminSodium_Naviaux2017_reference.svg" alt="SuraminSodium_Naviaux2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 1400 mg infusion over 10 min, single dose. Dose in the paper: 1400 mg.

<dbs-fmusim paramsurl="drugs/drug_suramin_sodium/SuraminSodium_Naviaux2017_reference/SuraminSodium_Naviaux2017_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_suramin_sodium/SuraminSodium_Naviaux2017_reference/SuraminSodium_Naviaux2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `SuraminSodium_Naviaux2017_reference_params.json` · controls `SuraminSodium_Naviaux2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:30 UTC</sub>
