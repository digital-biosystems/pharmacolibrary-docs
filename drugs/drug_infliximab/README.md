<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;infliximab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Infliximab_Eser2021_reference&quot;,&quot;label&quot;:&quot;Eser_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_infliximab/Infliximab_Eser2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Infliximab_Little2022_reference&quot;,&quot;label&quot;:&quot;Little_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_infliximab/Infliximab_Little2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# infliximab

- **generic name:** infliximab
- **ATC codes:** `L04AB02`
- **DrugBank:** [DB00065](https://go.drugbank.com/drugs/DB00065) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Infliximab is a monoclonal antibody that blocks tumour necrosis factor alpha and is used to treat inflammatory conditions such as rheumatoid and psoriatic arthritis, Crohn's disease, ulcerative colitis, psoriasis, and ankylosing spondylitis. It is approved and widely used, with several products authorised in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415264](https://www.wikidata.org/wiki/Q415264) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:55 | 3:37 | 2/2/0 | 0/0/1 | 0/0/0 | 328,920/18,466 | einfracz / qwen3.8-27b | 9 | 0/9 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Eser_2021_reference](drugs/drug_infliximab/Infliximab_Eser2021_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 (+7 cov.) | Eser A et al., Increased Induction Infliximab Clearanc…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1732](https://doi.org/10.1002/jcph.1732) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Little_2022_reference](drugs/drug_infliximab/Infliximab_Little2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Little RD et al., Therapeutic Drug Monitoring of Subcutan…, Journal of clinical medicine (2022) | [10.3390/jcm11206173](https://doi.org/10.3390/jcm11206173) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hemperly_2025_reference](drugs/drug_infliximab/Infliximab_Hemperly2025_reference.md) | — | 2-compartment (no model) | 3 (+3 cov.) | Hemperly A et al., Pharmacokinetics and Exposure-Response…, Journal of clinical medicine (2025) | [10.3390/jcm14227968](https://doi.org/10.3390/jcm14227968) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Song_2025_reference](drugs/drug_infliximab/Infliximab_Song2025_reference.md) | — | 2-compartment (no model) | 7 | Song JH et al., Population Pharmacokinetic Model for th…, Gut and liver (2025) | [10.5009/gnl240503](https://doi.org/10.5009/gnl240503) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Samuels_2025_ESR](drugs/drug_infliximab/pd_Samuels_2025_ESR.md) | erythrocyte sedimentation rate ← infliximab dose number · direct Emax (saturable) effect | model (no simulator) | Samuels A et al., Integrating early response biomarkers i…, Clinical and translational… (2025) | [10.1111/cts.70086](https://doi.org/10.1111/cts.70086) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Samuels_2025_albumin](drugs/drug_infliximab/pd_Samuels_2025_albumin.md) | serum albumin ← infliximab dose number · direct Emax (saturable) effect | model (no simulator) | Samuels A et al., Integrating early response biomarkers i…, Clinical and translational… (2025) | [10.1111/cts.70086](https://doi.org/10.1111/cts.70086) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Samuels_2025_nCD64](drugs/drug_infliximab/pd_Samuels_2025_nCD64.md) | neutrophil CD64 ← infliximab dose number · direct Emax (saturable) effect | model (no simulator) | Samuels A et al., Integrating early response biomarkers i…, Clinical and translational… (2025) | [10.1111/cts.70086](https://doi.org/10.1111/cts.70086) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Samuels_2025_weight](drugs/drug_infliximab/pd_Samuels_2025_weight.md) | weight ← infliximab dose number · direct Emax (saturable) effect | model (no simulator) | Samuels A et al., Integrating early response biomarkers i…, Clinical and translational… (2025) | [10.1111/cts.70086](https://doi.org/10.1111/cts.70086) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=infliximab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: TNF (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 113 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 2  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2025.pdf` | Wang Z et al., Optimizing the switch from escalated in…, Journal of Crohn's & colitis (2025) | popPK | 10 | [10.1093/ecco-jcc/jjaf151](https://doi.org/10.1093/ecco-jcc/jjaf151) | [40875539](https://pubmed.ncbi.nlm.nih.gov/40875539) | The paper is a population PK/PD study of infliximab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence (abstract only). |
| `Nassar-Sheikh_2022.pdf` | Nassar-Sheikh Rashid A et al., Population Pharmacokinetics of Inflixim…, Therapeutic drug monitoring (2022) | popPK | 9 | [10.1097/FTD.0000000000000914](https://doi.org/10.1097/FTD.0000000000000914) | [34292215](https://pubmed.ncbi.nlm.nih.gov/34292215) | The study is a population PK analysis of infliximab, but specific numeric parameter values (CL, V, etc.) are not present in the provided text. |
| `Kimura_2020.pdf` | Kimura K et al., Prediction of treatment failure during…, European journal of pharmac… (2020) | popPK | 8 | [10.1016/j.ejps.2020.105317](https://doi.org/10.1016/j.ejps.2020.105317) | [32205229](https://pubmed.ncbi.nlm.nih.gov/32205229) | The study performs a population PK/PD model of infliximab in humans, but specific quantitative parameter values (e.g., mean CL, V) are not explicitly listed in the provided abstract text. |
| `Vande_2019.pdf` | Vande Casteele N et al., Infliximab Exposure-Response Relationsh…, Clinical gastroenterology a… (2019) | popPK | 6 | [10.1016/j.cgh.2018.10.036](https://doi.org/10.1016/j.cgh.2018.10.036) | [30613004](https://pubmed.ncbi.nlm.nih.gov/30613004) | The paper reports quantitative clearance thresholds (e.g., &lt;0.397 L/d) and a 2-compartment model, but the primary focus is exposure-response rather than comprehensive PK parameter estimation. |

<sub>queue written 2026-10-06T23:52:58.019399+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Faghihi_2019 | irrelevant | 2 | 0 | The study focuses on formulation stability and local in vivo activity (TNF-alpha suppression) in mice, without reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for infliximab. |
| popPK | Heikal_2024 | irrelevant | 2 | 0 | The paper is an external evaluation of existing models and reports only performance metrics (bias/error) rather than the original quantitative PK parameter estimates (CL, V, etc.) for infliximab. |
| popPK | Hemperly_2018 | irrelevant | 4 | 2 | The paper is a review article that cites general ranges (Vss 4.5-6 L, t1/2 14 days) but does not report original quantitative PK parameters (CL, V, Q) from a specific population PK study. |
| popPK | Irie_2025 | relevant | 8 | 2 | The study applies a population PK model for infliximab in pediatric patients but reports prediction errors (RMSE) rather than explicit quantitative parameter estimates (e.g., typical CL, V) in the provided text. |
| popPK | Kantasiripitak_2022 | irrelevant | 1 | 0 | The paper evaluates the predictive performance of existing models for dosing optimization but does not report original quantitative population PK parameter estimates (CL, V, Q) for infliximab. |
| popPK | Kimura_2019 | irrelevant | 2 | 0 | The paper describes a PK/PD modeling study for clinical response but the provided evidence contains no numeric PK parameter values (CL, V, etc.). |
| popPK | Kimura_2020 | relevant | 8 | 2 | The study performs a population PK/PD model of infliximab in humans, but specific quantitative parameter values (e.g., mean CL, V) are not explicitly listed in the provided abstract text. |
| popPK | Kinzer_2023 | irrelevant | 0 | 0 | The study is a physicochemical and functional characterization (binding affinity, glycan analysis) and does not report pharmacokinetic disposition parameters (CL, V, half-life) for infliximab. |
| popPK | Mould_2015 | irrelevant | 1 | 0 | The paper is a review discussing the design of dose optimization dashboard systems with infliximab as a reference example, and it does not report any quantitative pharmacokinetic parameter values. |
| popPK | Nassar-Sheikh_2022 | relevant | 9 | 2 | The study is a population PK analysis of infliximab, but specific numeric parameter values (CL, V, etc.) are not present in the provided text. |
| popPK | Pool_2026 | irrelevant | 4 | 1 | The study performs statistical association analysis of covariates with trough levels rather than fitting a compartmental or population PK model to derive quantitative parameters like clearance or volume of distribution. |
| popPK | Roblin_2024 | irrelevant | 2 | 0 | This is a review of therapeutic drug monitoring strategies in inflammatory bowel disease that discusses population PK concepts and dashboards but does not report original quantitative disposition parameter values (CL, V, etc.) for infliximab. |
| popPK | Samuels_2025 | relevant | 6 | 2 | The study extends a published population PK model for infliximab in humans but reports covariate change parameters (Emax) rather than the primary PK parameter values (CL, V) which are cited from a prior publication. |
| popPK | Steenholdt_2025 | irrelevant | 1 | 0 | The study is a clinical outcomes analysis of biologic sequencing in IBD that uses infliximab trough levels only to classify failure mechanisms (PK vs PD) and does not report population pharmacokinetic parameters (CL, V, t1/2) for infliximab. |
| popPK | Vande_2019 | relevant | 6 | 4 | The paper reports quantitative clearance thresholds (e.g., &lt;0.397 L/d) and a 2-compartment model, but the primary focus is exposure-response rather than comprehensive PK parameter estimation. |
| popPK | Wang_2025 | relevant | 10 | 0 | The paper is a population PK/PD study of infliximab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence (abstract only). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:53 UTC</sub>
