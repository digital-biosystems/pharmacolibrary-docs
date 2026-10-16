<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;infliximab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Infliximab_Eser2021_reference&quot;,&quot;label&quot;:&quot;Eser_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_infliximab/Infliximab_Eser2021_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Infliximab_Little2022_reference&quot;,&quot;label&quot;:&quot;Little_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_infliximab/Infliximab_Little2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Infliximab_Song2025_reference&quot;,&quot;label&quot;:&quot;Song_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_infliximab/Infliximab_Song2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Infliximab_Hemperly2025_parameter_estimates&quot;,&quot;label&quot;:&quot;Hemperly_2025_parameter_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_infliximab/Infliximab_Hemperly2025_parameter_estimates.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Infliximab_Hemperly2025_population&quot;,&quot;label&quot;:&quot;Hemperly_2025_population&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_infliximab/Infliximab_Hemperly2025_population.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-10-15 04:03 | 4:56 | 3/1/2 | 0/0/0 | 0/0/0 | 241,371/45,625 | einfracz / qwen3.8-27b | 9 | 0/9 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Eser_2021_reference](drugs/drug_infliximab/Infliximab_Eser2021_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 (+7 cov.) | Eser A et al., Increased Induction Infliximab Clearanc…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1732](https://doi.org/10.1002/jcph.1732) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span> | [Little_2022_reference](drugs/drug_infliximab/Infliximab_Little2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Little RD et al., Therapeutic Drug Monitoring of Subcutan…, Journal of clinical medicine (2022) | [10.3390/jcm11206173](https://doi.org/10.3390/jcm11206173) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.941). Primary extraction retained.">cross-check: partial</span> | [Song_2025_reference](drugs/drug_infliximab/Infliximab_Song2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Song JH et al., Population Pharmacokinetic Model for th…, Gut and liver (2025) | [10.5009/gnl240503](https://doi.org/10.5009/gnl240503) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `scholar`</sub> | [Hemperly_2025_parameter_estimates](drugs/drug_infliximab/Infliximab_Hemperly2025_parameter_estimates.md) | ▶ model + simulator | 2-compartment, IV | 4 | Hemperly A et al., Pharmacokinetics and Exposure-Response…, Journal of clinical medicine (2025) | [10.3390/jcm14227968](https://doi.org/10.3390/jcm14227968) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `scholar`</sub> | [Hemperly_2025_population](drugs/drug_infliximab/Infliximab_Hemperly2025_population.md) | ▶ model + simulator | 2-compartment, IV | 4 | Hemperly A et al., Pharmacokinetics and Exposure-Response…, Journal of clinical medicine (2025) | [10.3390/jcm14227968](https://doi.org/10.3390/jcm14227968) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hemperly_2025_final_parameter_estimates_se](drugs/drug_infliximab/Infliximab_Hemperly2025_final_parameter_estimates_se.md) | — | 2-compartment (no model) | 4 (+2 cov.) | Hemperly A et al., Pharmacokinetics and Exposure-Response…, Journal of clinical medicine (2025) | [10.3390/jcm14227968](https://doi.org/10.3390/jcm14227968) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=infliximab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: TNF (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 113 matched, 20 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 6  ·  extracted 3  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2025.pdf` | Wang Z et al., Optimizing the switch from escalated in…, Journal of Crohn's & colitis (2025) | popPK | 10 | [10.1093/ecco-jcc/jjaf151](https://doi.org/10.1093/ecco-jcc/jjaf151) | [40875539](https://pubmed.ncbi.nlm.nih.gov/40875539) | The paper describes a population PK/PD study for infliximab, but the extracted evidence contains only qualitative summaries and simulation probabilities, lacking the specific numeric PK parameter values (e.g., CL, V). |
| `Nassar-Sheikh_2022.pdf` | Nassar-Sheikh Rashid A et al., Population Pharmacokinetics of Inflixim…, Therapeutic drug monitoring (2022) | popPK | 9 | [10.1097/FTD.0000000000000914](https://doi.org/10.1097/FTD.0000000000000914) | [34292215](https://pubmed.ncbi.nlm.nih.gov/34292215) | The paper describes a population PK model for infliximab but the specific numeric parameter values (CL, V, etc.) are not provided in the text, only the model structure and qualitative results. |
| `Kimura_2020.pdf` | Kimura K et al., Prediction of treatment failure during…, European journal of pharmac… (2020) | popPK | 7 | [10.1016/j.ejps.2020.105317](https://doi.org/10.1016/j.ejps.2020.105317) | [32205229](https://pubmed.ncbi.nlm.nih.gov/32205229) | The paper uses a PK/PD model for infliximab in humans to predict treatment failure, but the specific quantitative disposition parameter values (CL, V, etc.) are not provided in the extracted evidence, only correlations and predictive accuracy. |
| `Hemperly_2018.pdf` | Hemperly A et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2018) | popPK | 6 | [10.1007/s40262-017-0627-0](https://doi.org/10.1007/s40262-017-0627-0) | [29330783](https://pubmed.ncbi.nlm.nih.gov/29330783) | The paper is a review that reports specific quantitative PK parameters (Vd 4.5-6 L, t1/2 14 days) in the text, but lacks the full population model parameter estimates (e.g., median CL, inter-individual variability) typical of primary PK studies. |

<sub>queue written 2026-10-15T03:59:35.687565+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Faghihi_2019 | irrelevant | 2 | 0 | The study focuses on the formulation and local biological efficacy of inhaled infliximab in mice, reporting TNF-alpha suppression and stability metrics rather than systemic pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Heikal_2024 | relevant | 4 | 1 | The study is a validation/evaluation of population pharmacokinetic models for infliximab, but the text does not report specific numeric parameter values (CL, V) for the subject population, only bias and prediction errors for existing models. |
| popPK | Hemperly_2018 | relevant | 6 | 3 | The paper is a review that reports specific quantitative PK parameters (Vd 4.5-6 L, t1/2 14 days) in the text, but lacks the full population model parameter estimates (e.g., median CL, inter-individual variability) typical of primary PK studies. |
| popPK | Irie_2025 | relevant | 5 | 2 | The study uses a population PK model for infliximab (reporting individual estimates of CL and V1) but does not provide the structural model's typical parameter values (population means) in the text. |
| popPK | Kantasiripitak_2022 | irrelevant | 2 | 0 | The study evaluates the predictive performance of existing population PK models for dosing optimization but does not report original quantitative PK parameter estimates (CL, V, etc.) for infliximab; specific parameter values are not listed in the provided text. |
| popPK | Kimura_2019 | irrelevant | 3 | 0 | The abstract describes a PK/PD modeling study for infliximab but does not contain specific numeric disposition parameters (CL, V, etc.) or indicate that quantitative PK values are presented in the provided evidence. |
| popPK | Kimura_2020 | relevant | 7 | 0 | The paper uses a PK/PD model for infliximab in humans to predict treatment failure, but the specific quantitative disposition parameter values (CL, V, etc.) are not provided in the extracted evidence, only correlations and predictive accuracy. |
| popPK | Kinzer_2023 | irrelevant | 0 | 0 | This study focuses on physicochemical characterization and in vitro functional binding/effector assays, reporting no pharmacokinetic disposition parameters. |
| popPK | Little_2022 | relevant | 5 | 4 | This is a narrative review that cites quantitative population PK parameters (CL, F, t1/2) from the pivotal Hanzel et al. study, but does not present original primary data or a full compartmental model structure itself. |
| popPK | Mould_2015 | irrelevant | 2 | 0 | This is a review of dashboard systems for dose optimization and does not report original quantitative population PK parameters (CL, V, etc.) for infliximab. |
| popPK | Nassar-Sheikh_2022 | relevant | 9 | 1 | The paper describes a population PK model for infliximab but the specific numeric parameter values (CL, V, etc.) are not provided in the text, only the model structure and qualitative results. |
| popPK | Pool_2026 | irrelevant | 2 | 0 | The study reports beta-coefficients from regression models for trough levels rather than quantitative population pharmacokinetic parameters (CL, V, Q, ka) for infliximab. |
| popPK | Roblin_2024 | irrelevant | 1 | 0 | This is a narrative review on therapeutic drug monitoring strategies that discusses the utility of population pharmacokinetic modeling but does not report any original quantitative PK parameter values (e.g., CL, V) for infliximab. |
| popPK | Samuels_2025 | relevant | 8 | 3 | The paper describes a population PK model for infliximab and reports specific numeric Emax parameters for clearance covariates, but the core PK parameter values (CL, V) are referenced as coming from a previously published model or are only available in supplementary tables not fully detailed in the text. |
| popPK | Steenholdt_2025 | irrelevant | 1 | 0 | The paper is a clinical sequencing outcome study that uses drug concentration thresholds to classify failure but does not report pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Vande_2019 | irrelevant | 2 | 0 | The study is an exposure-response analysis of infliximab in ulcerative colitis patients, not a primary pharmacokinetic study, and does not report model parameter estimates (CL, V, Q, ka) or half-life. |
| popPK | Wang_2025 | relevant | 10 | 0 | The paper describes a population PK/PD study for infliximab, but the extracted evidence contains only qualitative summaries and simulation probabilities, lacking the specific numeric PK parameter values (e.g., CL, V). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 04:01 UTC</sub>
