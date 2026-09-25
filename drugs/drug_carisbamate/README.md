<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;carisbamate&quot;}]"></div>

# carisbamate

- **generic name:** carisbamate
- **ATC codes:** `N03AX19`
- **DrugBank:** [DB12338](https://go.drugbank.com/drugs/DB12338)
- **groups:** investigational

## About

**Description.** Carisbamate has been investigated in Alcohol Abuse, Substance Abuse, and Alcohol Dependence.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 17:17 | 5:23 | 0/0/0 | 2/0/0 | 0/0/0 | 170,733/3,578 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 2/4 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hung_2023](drugs/drug_carisbamate/pd_Hung_2023_hyperpolarization_activated_cation_current_Ih.md) | Hung TY et al., Concerted suppressive effects of carisb…, Frontiers in cellular neuro… (2023) | [10.3389/fncel.2023.1159067](https://doi.org/10.3389/fncel.2023.1159067) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hung_2023](drugs/drug_carisbamate/pd_Hung_2023_late_voltage_gated_Na_current_INa_L.md) | Hung TY et al., Concerted suppressive effects of carisb…, Frontiers in cellular neuro… (2023) | [10.3389/fncel.2023.1159067](https://doi.org/10.3389/fncel.2023.1159067) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hung_2023](drugs/drug_carisbamate/pd_Hung_2023_transient_voltage_gated_Na_current_INa_T.md) | Hung TY et al., Concerted suppressive effects of carisb…, Frontiers in cellular neuro… (2023) | [10.3389/fncel.2023.1159067](https://doi.org/10.3389/fncel.2023.1159067) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mateias_2024](drugs/drug_carisbamate/pd_Mateias_2024_APD90.md) | Mateias AL et al., Inhibitory Effects of Cenobamate on Mul…, Biomolecules (2024) | [10.3390/biom14121582](https://doi.org/10.3390/biom14121582) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mateias_2024](drugs/drug_carisbamate/pd_Mateias_2024_ICaL.md) | Mateias AL et al., Inhibitory Effects of Cenobamate on Mul…, Biomolecules (2024) | [10.3390/biom14121582](https://doi.org/10.3390/biom14121582) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mateias_2024](drugs/drug_carisbamate/pd_Mateias_2024_IKr.md) | Mateias AL et al., Inhibitory Effects of Cenobamate on Mul…, Biomolecules (2024) | [10.3390/biom14121582](https://doi.org/10.3390/biom14121582) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mateias_2024](drugs/drug_carisbamate/pd_Mateias_2024_IKs.md) | Mateias AL et al., Inhibitory Effects of Cenobamate on Mul…, Biomolecules (2024) | [10.3390/biom14121582](https://doi.org/10.3390/biom14121582) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mateias_2024](drugs/drug_carisbamate/pd_Mateias_2024_late_INa.md) | Mateias AL et al., Inhibitory Effects of Cenobamate on Mul…, Biomolecules (2024) | [10.3390/biom14121582](https://doi.org/10.3390/biom14121582) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mateias_2024](drugs/drug_carisbamate/pd_Mateias_2024_peak_INa.md) | Mateias AL et al., Inhibitory Effects of Cenobamate on Mul…, Biomolecules (2024) | [10.3390/biom14121582](https://doi.org/10.3390/biom14121582) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 21 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Levy_2008.pdf` | Levy R et al., Pharmacokinetics, safety, and tolerabil…, Epilepsy research (2008) | popPK | 9 | [10.1016/j.eplepsyres.2007.12.013](https://doi.org/10.1016/j.eplepsyres.2007.12.013) | [18280116](https://pubmed.ncbi.nlm.nih.gov/18280116) | The paper is a primary PK study of carisbamate, but the provided evidence contains only qualitative descriptions of results without specific numeric parameter values (e.g., CL, V, t1/2). |
| `Moore_2012.pdf` | Moore K et al., Effect of mild and moderate hepatic imp…, Journal of clinical pharmac… (2012) | popPK | 9 | [10.1177/0091270011403313](https://doi.org/10.1177/0091270011403313) | [21566203](https://pubmed.ncbi.nlm.nih.gov/21566203) | The study reports quantitative PK parameters for carisbamate, including specific half-life values (11h, 21h) and geometric mean ratios for AUC and Cmax, though absolute clearance values are described qualitatively. |
| `Zannikos_2009.pdf` | Zannikos P et al., Pharmacokinetics of carisbamate (RWJ-33…, Epilepsia (2009) | popPK | 9 | [10.1111/j.1528-1167.2009.02081.x](https://doi.org/10.1111/j.1528-1167.2009.02081.x) | [19453703](https://pubmed.ncbi.nlm.nih.gov/19453703) | The paper reports quantitative pharmacokinetic parameters for carisbamate, including specific ranges for oral clearance (35.1-41.4 ml/h/kg) and half-life (11.5-12.8 h) in the results section. |
| `Vashi_2026.pdf` | Vashi V et al., Carisbamate treatment of adult and pedi…, Epilepsy research (2026) | popPK | 8 | [10.1016/j.eplepsyres.2026.107869](https://doi.org/10.1016/j.eplepsyres.2026.107869) | [42431071](https://pubmed.ncbi.nlm.nih.gov/42431071) | The study reports quantitative PK parameters (t1/2, accumulation ratios) for carisbamate, but lacks specific values for clearance (CL) and volume (V) in the provided text. |

<sub>queue written 2026-09-21T17:16:12.169256+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bhamidipati_2017 | irrelevant | 2 | 0 | The paper focuses on allometric scaling of urinary excretion amounts for multiple drugs, including carisbamate, but does not report specific compartmental PK parameters (CL, V, ka) for carisbamate as the primary subject. |
| popPK | Cady_2009 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for migraine prophylaxis and does not report any pharmacokinetic parameters for carisbamate. |
| PD | Cady_2009 | not_relevant | 2 | 1 | The paper reports a clinical dose-response trial with no statistically significant differences between doses and placebo, and does not provide PK data or numeric PD parameters (e.g., Emax, EC50) to derive a pharmacodynamic model. |
| popPK | Choi_2026 | irrelevant | 0 | 0 | The paper is a review of the discovery of cenobamate, where carisbamate is only mentioned as a precursor/comparator, and no quantitative pharmacokinetic parameters for carisbamate are reported. |
| PD | Choi_2026 | not_relevant | 3 | 2 | The paper is a review of cenobamate (not carisbamate) and only provides qualitative context or preclinical PK/PD data for cenobamate, lacking specific numeric PD parameters for carisbamate. |
| popPK | Gonzalez_2012 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of warfarin as the subject drug, with carisbamate acting only as a co-administered agent, and no quantitative PK parameters for carisbamate are reported. |
| PD | Gonzalez_2012 | not_relevant | 1 | 0 | The paper reports that the pharmacodynamic effect (INR) was unaltered and provides no numeric PD parameters or concentration-effect relationship. |
| popPK | Hung_2023 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study investigating the mechanism of action on ion channels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Landmark_2008 | irrelevant | 0 | 0 | The paper is a review of chemical modifications of antiepileptic drugs and does not report any quantitative pharmacokinetic parameters for carisbamate. |
| PD | Landmark_2008 | not_relevant | 1 | 0 | The paper is a review of chemical modifications of antiepileptic drugs and does not report any specific pharmacodynamic or exposure-response data for carisbamate. |
| popPK | Levy_2008 | relevant | 9 | 2 | The paper is a primary PK study of carisbamate, but the provided evidence contains only qualitative descriptions of results without specific numeric parameter values (e.g., CL, V, t1/2). |
| popPK | Liu_2009 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study reporting electrophysiological parameters (IC50) rather than pharmacokinetic disposition parameters. |
| popPK | Luszczki_2009 | irrelevant | 2 | 0 | The paper is a review article summarizing mechanisms and PK profiles without providing original quantitative parameter values for carisbamate. |
| popPK | Mateias_2024 | irrelevant | 0 | 0 | The study focuses on the in vitro cardiac safety pharmacology of cenobamate, not the pharmacokinetics of carisbamate. |
| popPK | Nasreddine_2010 | irrelevant | 1 | 0 | The paper is a narrative review of emerging antiepileptic drugs and does not report original quantitative pharmacokinetic parameter values for carisbamate. |
| popPK | Vashi_2026 | relevant | 8 | 4 | The study reports quantitative PK parameters (t1/2, accumulation ratios) for carisbamate, but lacks specific values for clearance (CL) and volume (V) in the provided text. |
| popPK | Vohora_2010 | irrelevant | 1 | 0 | The paper is a review article discussing carisbamate as a third-generation antiepileptic drug, but the provided evidence contains no quantitative pharmacokinetic parameter values. |
| PGx | Zannikos_2009 | not_relevant | 0 | 0 | The study compares pharmacokinetics between Japanese and Caucasian populations based on body weight differences, not on specific gene variants or genotypes. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
