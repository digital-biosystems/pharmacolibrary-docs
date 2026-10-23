<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;sorafenib&quot;,&quot;href&quot;:&quot;drugs/drug_sorafenib/&quot;},{&quot;label&quot;:&quot;Liu_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sorafenib_Jain2011_reference&quot;,&quot;label&quot;:&quot;Jain_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sorafenib/Sorafenib_Jain2011_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sorafenib_Altalal2023_reference&quot;,&quot;label&quot;:&quot;Altalal_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sorafenib/Sorafenib_Altalal2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sorafenib_Huh2021_nexavar_200_mg&quot;,&quot;label&quot;:&quot;Huh_2021_nexavar_200_mg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sorafenib/Sorafenib_Huh2021_nexavar_200_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sorafenib_Huh2021_parameter_estimates_relative_standard_erro&quot;,&quot;label&quot;:&quot;Huh_2021_parameter_estimates_relative_standard_error&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sorafenib/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sorafenib_Huh2021_syo_1644_100_mg&quot;,&quot;label&quot;:&quot;Huh_2021_syo_1644_100_mg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sorafenib/Sorafenib_Huh2021_syo_1644_100_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sorafenib_Huh2021_syo_1644_150_mg&quot;,&quot;label&quot;:&quot;Huh_2021_syo_1644_150_mg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sorafenib/Sorafenib_Huh2021_syo_1644_150_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sorafenib_Huh2021_syo_1644_200_mg&quot;,&quot;label&quot;:&quot;Huh_2021_syo_1644_200_mg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sorafenib/Sorafenib_Huh2021_syo_1644_200_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sorafenib — `Sorafenib_Liu2018_reference`

> ## <span class="pk-badge pk-badge--orange" title="molar_mass_missing:sorafenib N-oxide: a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule">Needs review</span>

> Sorafenib N-oxide formation clearance was 0 in the constructed model, so the parent–metabolite record was held back despite reported metabolite parameters.

<div class="pk-model-meta" hidden drug="sorafenib" model-id="Sorafenib_Liu2018_reference" status="needs_review" stale="false" population="patients with acute myeloid leukemia" measured-compound="sorafenib" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Liu T, Ivaturi V, Sabato P, Gobburu JVS, Greer JM, Wright JJ et al. Sorafenib Dose Recommendation in Acute Myeloid Leukemia Based on Exposure-FLT3 Relationship. Clinical and translational science 11(4):435–443 (2018).
  ·  DOI: [10.1111/cts.12555](https://doi.org/10.1111/cts.12555)

## Population and dosing

**Population:** patients with acute myeloid leukemia · condition acute myeloid leukemia · n = 15.

**Dosing:** 400, 600 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka | kabs | 2.63 | 1/h |
| V | V | 127 | L |
| V 7 | V | 46.80 | L |
| CL | CL | 10.0 | L/h |
| K 64 | equation variable | 0.096 |  |
| CLm | CL | 79.80 | L/h |

## Caveats

- a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="molar_mass_missing:sorafenib N-oxide: a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.538). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Sorafenib N-oxide formation clearance was 0 in the constructed model, so the parent–metabolite record was held back despite reported metabolite parameters.**

The parameter list reports sorafenib N-oxide volume of 46.80 L and clearance of 79.80 L/h, but its volume, clearance, and formation clearance were all 0 in the constructed model; K64 is listed as 0.096 without a stated meaning. The paper’s parent–metabolite central structure was represented as a one-compartment enteral model, and missing metabolite molar mass meant the model assumed 1 mg of metabolite per mg of parent converted rather than molecule-for-molecule formation. F and Tlag used library defaults rather than estimates from this paper; these values affect the simulated profile but are unsupported by the paper. Extracted — sorafenib: kabs 2.63 1/h, V 127 L, CL 10 L/h; sorafenib N-oxide: V 46.8 L, CL 79.8 L/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the links between molecules: this record has sorafenib → sorafenib n-oxide (metabolism), the second reading sorafenib → sorafenib n-oxide metabolite (metabolism); it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka | `Q49` · kabs | 2.63 | 1/h | 0.0007306 | 1/s | 1/h | exact (1) | cts12555-tbl-0002:row2:col1, cts12555-tbl-0002:row2:col2, cts12555-tbl-0002:row2:col3, cts12555-tbl-0002:row2:col5, cts12555-tbl-0002:row2:col6 |
| V | `Q61` · V | 127 | L | 0.127 | m3 | L | exact (1) | cts12555-tbl-0002:row3:col2, cts12555-tbl-0002:row3:col3, cts12555-tbl-0002:row3:col5, cts12555-tbl-0002:row3:col6 |
| V 7 | `Q61` · V | 46.80 | L | 0.0468 | m3 | L | exact (1) | cts12555-tbl-0002:row4:col2, cts12555-tbl-0002:row4:col3, cts12555-tbl-0002:row4:col5, cts12555-tbl-0002:row4:col6 |
| CL | `Q22` · CL | 10.0 | L/h | 2.778e-06 | m3/s | L/h | exact (1) | cts12555-tbl-0002:row5:col2, cts12555-tbl-0002:row5:col3, cts12555-tbl-0002:row5:col5, cts12555-tbl-0002:row5:col6 |
| K 64 | `Q900` · equation variable | 0.096 |  |  |  |  | llm (0.6) | cts12555-tbl-0002:row7:col1, cts12555-tbl-0002:row7:col2, cts12555-tbl-0002:row7:col3, cts12555-tbl-0002:row7:col5, cts12555-tbl-0002:row7:col6 |
| CLm | `Q22` · CL | 79.80 | L/h | 2.217e-05 | m3/s | L/h | exact (1) | cts12555-tbl-0002:row10:col2, cts12555-tbl-0002:row10:col3, cts12555-tbl-0002:row10:col5, cts12555-tbl-0002:row10:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'TENT' — extend the ontology if this is a real PK parameter (source ['cts12555-tbl-0002:row8:col2', 'cts12555-tbl-0002:row8:col3', 'cts12555-tbl-0002:row8:col5', 'cts12555-tbl-0002:row8:col6'])
- dropped PD-category row 'IC50FLT3' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts12555-tbl-0002:row14:col2', 'cts12555-tbl-0002:row14:col3', 'cts12555-tbl-0002:row14:col5', 'cts12555-tbl-0002:row14:col6'])
- dropped PD-category row 'IC50ERK' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts12555-tbl-0002:row15:col2', 'cts12555-tbl-0002:row15:col3', 'cts12555-tbl-0002:row15:col5', 'cts12555-tbl-0002:row15:col6'])
- dropped PD-category row 'Imax,ERK' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts12555-tbl-0002:row16:col2', 'cts12555-tbl-0002:row16:col3', 'cts12555-tbl-0002:row16:col5', 'cts12555-tbl-0002:row16:col6'])
- implicit units: 'Ka' → 1/h (from the popPK convention: 'The text identifies Ka as an absorption rate constant; first-order rate constants are conventionally expressed in 1/h.')
- implicit units: 'V' → L (from the popPK convention: 'The text identifies V as an apparent volume of distribution; volumes are conventionally expressed in L, consistent with ')
- implicit units: 'V 7' → L (from the popPK convention: 'The text identifies V7 as an apparent volume of distribution; volumes are conventionally expressed in L, consistent with')
- implicit units: 'CL' → L/h (from the popPK convention: 'The text identifies CL as apparent clearance; clearances are conventionally expressed in L/h, consistent with the estima')
- implicit units: 'CLm' → L/h (from the popPK convention: 'The text identifies CLm as apparent clearance of the N-oxide metabolite; clearances are conventionally expressed in L/h,')
- metabolite volume: 'V 7' Q63→Q61 for sorafenib N-oxide — it is 1-compartment, so its central volume is its only volume
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (V); Q61 (V 7); Q22 (CL); Q22 (CLm)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sorafenib
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- row roles (LLM): model_class=compartmental; 11/11 row label(s) assigned, 21 linked by role; re-tagged parent→sorafenib N-oxide ×12
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cts12555-tbl-0002:row2:col4 = '63.40%'
- unparsed cell cts12555-tbl-0002:row2:col7 = '61.80%'
- unparsed cell cts12555-tbl-0002:row3:col4 = '74.40%'
- unparsed cell cts12555-tbl-0002:row3:col7 = '73.60%'
- unparsed cell cts12555-tbl-0002:row4:col4 = '122%'
- unparsed cell cts12555-tbl-0002:row4:col7 = '115%'
- unparsed cell cts12555-tbl-0002:row5:col4 = '55.00%'
- unparsed cell cts12555-tbl-0002:row5:col7 = '67.20%'
- unparsed cell cts12555-tbl-0002:row10:col4 = '117%'
- unparsed cell cts12555-tbl-0002:row10:col7 = '117%'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.538 (7/13 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['sorafenib', 'sorafenib n-oxide', 'metabolism']] | [['sorafenib', 'sorafenib n-oxide metabolite', 'metabolism']] | mismatch |
| `qwen3.8-27b` | `parameters[clm]` | 79.80 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[clm]` |  | 79.80 | only_one_extracted |
| `qwen3.8-27b` | `parameters[k 64].parameter_id` | Q900 | Q47 | mismatch |
| `qwen3.8-27b` | `parameters[v 7]` | 46.80 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v 7]` |  | 46.80 | only_one_extracted |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cts12555-tbl-0002:row5:col2', 'cts12555-tbl-0002:row5:col3', 'cts12555-tbl-0002:row5:col5', 'cts12555-tbl-0002:row5:col6'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cts12555-tbl-0002:row10:col2', 'cts12555-tbl-0002:row10:col3', 'cts12555-tbl-0002:row10:col5', 'cts12555-tbl-0002:row10:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cts12555-tbl-0002:row2:col1', 'cts12555-tbl-0002:row2:col2', 'cts12555-tbl-0002:row2:col3', 'cts12555-tbl-0002:row2:col5', 'cts12555-tbl-0002:row2:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['cts12555-tbl-0002:row3:col2', 'cts12555-tbl-0002:row3:col3', 'cts12555-tbl-0002:row3:col5', 'cts12555-tbl-0002:row3:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['cts12555-tbl-0002:row4:col2', 'cts12555-tbl-0002:row4:col3', 'cts12555-tbl-0002:row4:col5', 'cts12555-tbl-0002:row4:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10 | ['cts12555-tbl-0002:row5:col2', 'cts12555-tbl-0002:row5:col3', 'cts12555-tbl-0002:row5:col5', 'cts12555-tbl-0002:row5:col6'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10 L/h | ['cts12555-tbl-0002:row5:col2', 'cts12555-tbl-0002:row5:col3', 'cts12555-tbl-0002:row5:col5', 'cts12555-tbl-0002:row5:col6'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 79.8 L/h | ['cts12555-tbl-0002:row10:col2', 'cts12555-tbl-0002:row10:col3', 'cts12555-tbl-0002:row10:col5', 'cts12555-tbl-0002:row10:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 127 L | ['cts12555-tbl-0002:row3:col2', 'cts12555-tbl-0002:row3:col3', 'cts12555-tbl-0002:row3:col5', 'cts12555-tbl-0002:row3:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 46.8 L | ['cts12555-tbl-0002:row4:col2', 'cts12555-tbl-0002:row4:col3', 'cts12555-tbl-0002:row4:col5', 'cts12555-tbl-0002:row4:col6'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_metabolite_built[sorafenib N-oxide] | fail | own V, CL and formation clearance &gt; 0 | {'V': 0, 'CL': 0, 'formation': 0} | sorafenib N-oxide: V, CL, formation not set — the metabolite's compartment would be the template default |
| T3_metabolite_output[sorafenib N-oxide] | skipped |  |  | the simulation recorded no per-molecule outputs |
| T3_molar_mass[sorafenib N-oxide] | fail |  | {'MW': 0, 'MW_m1': 0} | a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_shared_parameters | pass | 2 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template | fail | parent_metabolite_central → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sorafenib/Sorafenib_Liu2018_reference/Sorafenib_Liu2018_reference_modelica.zip" download>Sorafenib_Liu2018_reference_modelica.zip</a> <span class="pk-size">(5.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sorafenib/Sorafenib_Liu2018_reference/Sorafenib_Liu2018_reference_matlab.zip" download>Sorafenib_Liu2018_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sorafenib/Sorafenib_Liu2018_reference/Sorafenib_Liu2018_reference_matlab_simbio.zip" download>Sorafenib_Liu2018_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sorafenib/Sorafenib_Liu2018_reference/Sorafenib_Liu2018_reference_sbml.zip" download>Sorafenib_Liu2018_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sorafenib/Sorafenib_Liu2018_reference/Sorafenib_Liu2018_reference_cellml.zip" download>Sorafenib_Liu2018_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Liu T, Ivaturi V, Sabato P, Gobburu JVS, Greer JM, Wright JJ et al. Sorafenib Dose Recommendation in Acute Myeloid Leukemia Based on Exposure-FLT3 Relationship. Clinical and translational science 11(4):435–443 (2018). [doi:10.1111/cts.12555](https://doi.org/10.1111/cts.12555)

**This record:** Pharmacolibrary v26.09, model `Sorafenib_Liu2018_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_sorafenib/Sorafenib_Liu2018_reference>

```bibtex
@misc{pharmacolibrary_SorafenibLiu2018reference,
  title  = {{Pharmacolibrary model Sorafenib_Liu2018_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_sorafenib/Sorafenib_Liu2018_reference},
  note   = {Parameters from doi:10.1111/cts.12555},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsorafenib%5D%20Sorafenib_Liu2018_reference&body=Drug%3A%20sorafenib%0ARecord%3A%20Sorafenib_Liu2018_reference%0APaper%3A%20Liu_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sorafenib/Sorafenib_Liu2018_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:09 UTC</sub>
