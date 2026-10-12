<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;itraconazole&quot;,&quot;href&quot;:&quot;drugs/drug_itraconazole/&quot;},{&quot;label&quot;:&quot;Chu_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Itraconazole_Comisar2025_reference&quot;,&quot;label&quot;:&quot;Comisar_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_itraconazole/Itraconazole_Comisar2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# itraconazole — `Itraconazole_Chu2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.043). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record mixes ravuconazole parameters with itraconazole data and contains an unreachable metabolite compartment.**

Itraconazole parameters such as clearance are incorrectly assigned to the ravuconazole molecule in the parameter list. The hydroxyitraconazole metabolite is linked to itraconazole but lacks a defined compartment path, rendering it unreachable in the model structure. Extracted — ravuconazole: kabs 0.0796 ka, Vmax 4.55, Km 4 Km, V1 20.8 L, Q 9.03 L/h, V2 262 L; itraconazole: CL 10.7 L/h; hydroxyitraconazole: CL 5.16 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has fosravuconazole, itraconazole, the second reading fosravuconazole and itraconazole; it also differs on 21 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `fosravuconazole, itraconazole`, measured `itraconazole, hydroxyitraconazole`.

## Citation
Chu WY et al., Pharmacokinetics and Pharmacodynamics o…, The Journal of infectious d… (2025)
  ·  DOI: [10.1093/infdis/jiaf279](https://doi.org/10.1093/infdis/jiaf279)

## Model component
<dbs-pgx drug="itraconazole" model-id="Itraconazole_Chu2025_reference" status="rejected" stale="false" population="adults with eumycetoma" measured-compound="itraconazole, hydroxyitraconazole" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 8 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Rate of absorption (ka) | `Q49` · kabs | 0.0796 | ka | not captured | [ka] | not captured | exact (1.0) | jiaf279-T2:row2:col1, jiaf279-T2:row2:col2, jiaf279-T2:row14:col1, jiaf279-T2:row14:col2 | — | not captured |
| Maximum velocity (Vmax)b | `Q66` · Vmax | 4.55 | not captured | not captured | not captured | not captured | boundary (0.8) | jiaf279-T2:row3:col2, jiaf279-T2:row3:col3 | — | not captured |
| Michaelis-Menten constant (Km) | `Q1` · Km | 4 | Km | not captured | [km] | not captured | llm_confirmed (0.6) | jiaf279-T2:row4:col2 | — | not captured |
| Volume of distribution central compartment (Vc)b | `Q63` · V1 | 20.8 | L | 0.020800000000000003 | L | not captured | exact (1.0) | jiaf279-T2:row5:col2, jiaf279-T2:row5:col3 | — | not captured |
| Intercompartmental clearance (Q)b | `Q30` · Q | 9.03 | L/h | 2.508333333333333e-06 | L/h | not captured | exact (1.0) | jiaf279-T2:row6:col2, jiaf279-T2:row6:col3 | — | not captured |
| Volume of distribution peripheral compartment (Vp)b | `Q64` · V2 | 262 | L | 0.262 | L | not captured | exact (1.0) | jiaf279-T2:row7:col2, jiaf279-T2:row7:col3 | — | not captured |
| Clearance of itraconazole (CLp)b | `Q22` · CL | 10.7 | L/h | 2.972222222222222e-06 | L/h | not captured | boundary (0.8) | jiaf279-T2:row15:col2, jiaf279-T2:row15:col3 | — | not captured |
| Clearance of metabolite hydroxyitraconazole (CLm)b | `Q22` · CL | 5.16 | L/h | 1.4333333333333335e-06 | L/h | not captured | exact (1.0) | jiaf279-T2:row17:col2, jiaf279-T2:row17:col3 | — | not captured |
| theta_q61_category | `Q900` · theta_q61_category | 25.5 | not captured | not captured | not captured | not captured | not captured (not captured) | jiaf279-T2:row16:col2, jiaf279-T2:row16:col3 | — | not captured |
| theta_q63_category | `Q900` · theta_q63_category | 4.85 | not captured | not captured | not captured | not captured | not captured (not captured) | jiaf279-T2:row18:col2, jiaf279-T2:row18:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Rate of absorption (ka)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'Michaelis-Menten constant (Km)' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Fold increase in F during the loading dose phasec' — extend the ontology if this is a real PK parameter (source ['jiaf279-T2:row8:col2', 'jiaf279-T2:row8:col3'])
- routed 'Between-subject variability in Vc' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Between-subject variability in Km' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Between-occasion variability in F' → Q313 (IOV) to iov — variability estimate, not a structural parameter
- dropped PD-category row 'Maximum effect of autoinhibition (Emax)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jiaf279-T2:row19:col2'])
- dropped PD-category row 'Itraconazole plus hydroxyitraconazole concentration at 50% of autoinhibition effect (EC50)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jiaf279-T2:row20:col2', 'jiaf279-T2:row20:col3'])
- routed 'Between-subject variability in CLp' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Between-subject variability in Vp' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Between-subject variability in CLm' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- covariate effect for Q61 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q63 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Maximum velocity (Vmax)b' — the LLM proposed 'mg/h', whose dimension does not fit Q66; left unset
- implicit units: 'Volume of distribution central compartment (Vc)b' → L (from the paper text: "The text states: 'The Vd for the central and the peripheral compartments were 20.8 L (95% CI, 12.2–33.3) and 262 L (95% ")
- implicit units: 'Intercompartmental clearance (Q)b' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for Q in the text or table caption. However, Q is an intercompartmental cle')
- implicit units: 'Volume of distribution peripheral compartment (Vp)b' → L (from the paper text: "The text states: 'The Vd for the central and the peripheral compartments were 20.8 L (95% CI, 12.2–33.3) and 262 L (95% ")
- implicit units: 'Clearance of itraconazole (CLp)b' → L/h (from the paper text: "The text states: 'In the final population PK model for itraconazole and hydroxyitraconazole, the CL values were estimate")
- implicit units: 'Clearance of metabolite hydroxyitraconazole (CLm)b' → L/h (from the paper text: "The text states: 'In the final population PK model for itraconazole and hydroxyitraconazole, the CL values were estimate")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Volume of distribution central compartment (Vc)b); Q30 (Intercompartmental clearance (Q)b); Q64 (Volume of distribution peripheral compartment (Vp)b); Q22 (Clearance of itraconazole (CLp)b); Q22 (Clearance of metabolite hydroxyitraconazole (CLm)b)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=itraconazole, hydroxyitraconazole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 18 linked by role; re-tagged itraconazole, hydroxyitraconazole→ravuconazole ×25, itraconazole, hydroxyitraconazole→itraconazole ×13, itraconazole, hydroxyitraconazole→hydroxyitraconazole ×8
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jiaf279-T2:row2:col3 = '.0526–.118'
- unparsed cell jiaf279-T2:row14:col3 = '.00328–.00429'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8-27b` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.043 (1/23 fields) | 22 |

<details><summary>22 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['fosravuconazole', 'ravuconazole', 'metabolism'], ['itraconazole', 'hydroxyitraconazole', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[clearance of metabolite hydroxyitraconazole (clm)b]` | 5.16 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance of metabolite hydroxyitraconazole (clm)b]` | not captured | 5.16 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fold increase in f during the loading dose phasec]` | not captured | 1.63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartmental clearance (q)b]` | not captured | 9.03 | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartmental clearance (q)b]` | 9.03 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximum velocity (vmax)b]` | not captured | 4.55 | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximum velocity (vmax)b]` | 4.55 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[michaelis-menten constant]` | not captured | 4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[michaelis-menten constant]` | 4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[rate of absorption]` | not captured | 0.00376 | only_one_extracted |
| `gpt-oss-120b` | `parameters[rate of absorption]` | 0.0796 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_category].value` | 25.5 | 4.85 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q63_category]` | 4.85 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_category]` | not captured | 25.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution central compartment (vc)b]` | not captured | 20.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution central compartment (vc)b]` | 20.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution peripheral compartment (vp)b]` | not captured | 262 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution peripheral compartment (vp)b]` | 262 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | fosravuconazole, itraconazole | fosravuconazole and itraconazole | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | itraconazole, hydroxyitraconazole | itraconazole | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | fail | [length] | Km | not captured | not captured | ['jiaf279-T2:row4:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jiaf279-T2:row15:col2', 'jiaf279-T2:row15:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jiaf279-T2:row17:col2', 'jiaf279-T2:row17:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jiaf279-T2:row6:col2', 'jiaf279-T2:row6:col3'] |
| C5_dimension_Q49 | fail | [time] | ka | not captured | not captured | ['jiaf279-T2:row2:col1', 'jiaf279-T2:row2:col2', 'jiaf279-T2:row14:col1', 'jiaf279-T2:row14:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['jiaf279-T2:row5:col2', 'jiaf279-T2:row5:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['jiaf279-T2:row7:col2', 'jiaf279-T2:row7:col3'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 | not captured | not captured | not captured | ['jiaf279-T2:row3:col2', 'jiaf279-T2:row3:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.7 | not captured | not captured | ['jiaf279-T2:row15:col2', 'jiaf279-T2:row15:col3'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10.7 L/h | not captured | not captured | ['jiaf279-T2:row15:col2', 'jiaf279-T2:row15:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.16 L/h | not captured | not captured | ['jiaf279-T2:row17:col2', 'jiaf279-T2:row17:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 20.8 L | not captured | not captured | ['jiaf279-T2:row5:col2', 'jiaf279-T2:row5:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 262 L | not captured | not captured | ['jiaf279-T2:row7:col2', 'jiaf279-T2:row7:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_itraconazole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chu_2025` / `Chu_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:32 UTC</sub>
