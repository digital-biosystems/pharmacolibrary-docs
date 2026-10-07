<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;upadacitinib&quot;}]"></div>

# upadacitinib

- **generic name:** upadacitinib
- **ATC codes:** `L04AA44`, `L04AF03`
- **DrugBank:** [DB15091](https://go.drugbank.com/drugs/DB15091) · **PubChem:** not captured
- **molar mass:** 380.375 g/mol (C17H19F3N6O) — DrugBank
- **groups:** approved, investigational

## About

Upadacitinib, a Janus kinase inhibitor, is used to treat inflammatory conditions such as rheumatoid and psoriatic arthritis, axial spondyloarthritis, giant cell arteritis, atopic dermatitis, ulcerative colitis, and Crohn disease. It is an approved, authorised medicine in the European Union and is widely used for these immune-mediated diseases.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27074125](https://www.wikidata.org/wiki/Q27074125) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| upadacitinib | parent | 380.375 | C17H19F3N6O | DrugBank | — | Klünder_2018, Klünder_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:03 | 3:10 | 0/0/2 | 2/0/1 | 0/0/0 | 377,018/20,806 | einfracz / qwen3.8-27b | 13 | 4/9 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q31 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Klünder_2018_reference](drugs/drug_upadacitinib/Upadacitinib_Klnder2018_reference.md) | — | 2-compartment (no model) | 7 (+2 cov.) | Klünder B et al., Population Pharmacokinetics of Upadacit…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0605-6](https://doi.org/10.1007/s40262-017-0605-6) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q31, Q1 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Klünder_2019_reference](drugs/drug_upadacitinib/Upadacitinib_Klnder2019_reference.md) | — | 2-compartment (no model) | 10 (+3 cov.) | Klünder B et al., Population Pharmacokinetics of Upadacit…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00739-3](https://doi.org/10.1007/s40262-019-00739-3) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Mohamed_2020_Endoscopic_remission](drugs/drug_upadacitinib/pd_Mohamed_2020_Endoscopic_remission.md) | Endoscopic remission ← upadacitinib · direct Emax (saturable) effect | — | Mohamed MF et al., Exposure-Response Analyses for Upadacit…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1668](https://doi.org/10.1002/cpt.1668) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mohamed_2020_Endoscopic_response_25](drugs/drug_upadacitinib/pd_Mohamed_2020_Endoscopic_response_25.md) | Endoscopic response 25% ← upadacitinib · direct Emax (saturable) effect | — | Mohamed MF et al., Exposure-Response Analyses for Upadacit…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1668](https://doi.org/10.1002/cpt.1668) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mohamed_2020_Endoscopic_response_50](drugs/drug_upadacitinib/pd_Mohamed_2020_Endoscopic_response_50.md) | Endoscopic response 50% ← upadacitinib · direct Emax (saturable) effect | — | Mohamed MF et al., Exposure-Response Analyses for Upadacit…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1668](https://doi.org/10.1002/cpt.1668) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Nader_2020_Hgb_2_g_dL_decrease](drugs/drug_upadacitinib/pd_Nader_2020_Hgb_2_g_dL_decrease.md) | &gt; 2 g/dL decrease in hemoglobin from baseline at Week 12/14 ← upadacitinib · direct sigmoid Emax (Hill) effect | — | Nader A et al., Exposure-Response Analyses of Upadaciti…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1671](https://doi.org/10.1002/cpt.1671) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Nader_2020_Hgb_2_g_dL_decrease_2](drugs/drug_upadacitinib/pd_Nader_2020_Hgb_2_g_dL_decrease_2.md) | &gt; 2 g/dL decrease in hemoglobin from baseline at Week 24/26 ← upadacitinib · direct linear effect | — | Nader A et al., Exposure-Response Analyses of Upadaciti…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1671](https://doi.org/10.1002/cpt.1671) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Nader_2020_Lymphopenia_Grade_3](drugs/drug_upadacitinib/pd_Nader_2020_Lymphopenia_Grade_3.md) | lymphopenia Grade 3 or higher at Week 12/14 ← upadacitinib · direct linear effect | — | Nader A et al., Exposure-Response Analyses of Upadaciti…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1671](https://doi.org/10.1002/cpt.1671) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Nader_2020_Serious_infections](drugs/drug_upadacitinib/pd_Nader_2020_Serious_infections.md) | serious infections at Week 24/26 ← upadacitinib · direct linear effect | — | Nader A et al., Exposure-Response Analyses of Upadaciti…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1671](https://doi.org/10.1002/cpt.1671) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Mohamed_2020_CDAI_150](drugs/drug_upadacitinib/pd_Mohamed_2020_CDAI_150.md) | CDAI &lt; 150 ← upadacitinib · categorical (graded) response model | — | Mohamed MF et al., Exposure-Response Analyses for Upadacit…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1668](https://doi.org/10.1002/cpt.1668) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Mohamed_2020_CR](drugs/drug_upadacitinib/pd_Mohamed_2020_CR.md) | Clinical response ← upadacitinib · categorical (graded) response model | — | Mohamed MF et al., Exposure-Response Analyses for Upadacit…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1668](https://doi.org/10.1002/cpt.1668) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Mohamed_2020_CR_2_8_1_0](drugs/drug_upadacitinib/pd_Mohamed_2020_CR_2_8_1_0.md) | Clinical remission 2.8 of 1.0 ← upadacitinib · categorical (graded) response model | — | Mohamed MF et al., Exposure-Response Analyses for Upadacit…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1668](https://doi.org/10.1002/cpt.1668) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Mohamed_2021_EASI_75](drugs/drug_upadacitinib/pd_Mohamed_2021_EASI_75.md) | EASI-75 ← upadacitinib · direct Emax (saturable) effect | — | Mohamed MF et al., Exposure-Response Analyses for Upadacit…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1782](https://doi.org/10.1002/jcph.1782) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Mohamed_2021_EASI_90](drugs/drug_upadacitinib/pd_Mohamed_2021_EASI_90.md) | EASI-90 ← upadacitinib · direct Emax (saturable) effect | — | Mohamed MF et al., Exposure-Response Analyses for Upadacit…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1782](https://doi.org/10.1002/jcph.1782) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Mohamed_2021_IGA_0_1](drugs/drug_upadacitinib/pd_Mohamed_2021_IGA_0_1.md) | IGA 0/1 ← upadacitinib · direct Emax (saturable) effect | — | Mohamed MF et al., Exposure-Response Analyses for Upadacit…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1782](https://doi.org/10.1002/jcph.1782) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Nader_2020_ACR20_50_70](drugs/drug_upadacitinib/pd_Nader_2020_ACR20_50_70.md) | ACR20/50/70 response ← upadacitinib · categorical (graded) response model | — | Nader A et al., Exposure-Response Analyses of Upadaciti…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1671](https://doi.org/10.1002/cpt.1671) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Nader_2020_LDA_CR](drugs/drug_upadacitinib/pd_Nader_2020_LDA_CR.md) | low disease activity (LDA; defined as DAS28-CRP ≤ 3.2)/clinical remission (CR; defined as DAS28-CRP &lt; 2.6) responses ← upadacitinib · categorical (graded) response model | — | Nader A et al., Exposure-Response Analyses of Upadaciti…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1671](https://doi.org/10.1002/cpt.1671) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=upadacitinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: JAK1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 32 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ismail_2023.pdf` | Ismail M et al., Population pharmacokinetic and exposure…, British journal of clinical… (2023) | popPK | 10 | [10.1111/bcp.15803](https://doi.org/10.1111/bcp.15803) | [37232215](https://pubmed.ncbi.nlm.nih.gov/37232215) | The paper is a population pharmacokinetic study for upadacitinib, but the specific numeric parameter values (CL, V, ka, etc.) are not provided in the abstract, likely residing in tables or the main text not fully included in the evidence. |
| `Bhatnagar_2024_2.pdf` | Bhatnagar S et al., Pharmacokinetics and Exposure-Response…, Clinical pharmacology and t… (2024) | popPK | 9 | [10.1002/cpt.3359](https://doi.org/10.1002/cpt.3359) | [38982567](https://pubmed.ncbi.nlm.nih.gov/38982567) | The paper is a population pharmacokinetic and exposure-response study for upadacitinib in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text, which only contains qualitative conclusions and dose recommendations. |
| `Qian_2024.pdf` | Qian Y et al., Extrapolation of Upadacitinib Efficacy…, Clinical pharmacology and t… (2024) | popPK | 8 | [10.1002/cpt.3441](https://doi.org/10.1002/cpt.3441) | [39344158](https://pubmed.ncbi.nlm.nih.gov/39344158) | The paper describes a population pharmacokinetic model for upadacitinib, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract evidence. |

<sub>queue written 2026-10-07T01:00:59.204049+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baraliakos_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study (SELECT-AXIS 2) reporting ASAS40, ASDAS, and adverse event rates, containing no pharmacokinetic parameters (CL, V, ka, etc.) for upadacitinib. |
| popPK | Baraliakos_2024 | irrelevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes (ASAS responses, adverse events) for upadacitinib in ankylosing spondylitis, containing no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Bhatnagar_2024 | relevant | 9 | 3 | The paper reports a population PK model for upadacitinib with specific parameter estimates (Vc ~171 L) in the text, but the full set of quantitative parameters (CL, Q, IIV) is located in Table S3 (supplementary material) which is not included. |
| popPK | Bhatnagar_2024_2 | relevant | 9 | 1 | The paper is a population pharmacokinetic and exposure-response study for upadacitinib in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text, which only contains qualitative conclusions and dose recommendations. |
| popPK | Ismail_2023 | relevant | 10 | 3 | The paper is a population pharmacokinetic study for upadacitinib, but the specific numeric parameter values (CL, V, ka, etc.) are not provided in the abstract, likely residing in tables or the main text not fully included in the evidence. |
| popPK | Mohamed_2019 | irrelevant | 1 | 0 | The paper is an exposure-response (PD) analysis using plasma concentrations as a covariate; it does not report new population PK parameter estimates (CL, V, etc.), which are cited from previous studies. |
| popPK | Mohamed_2020 | relevant | 7 | 2 | The paper describes a population PK model and reports qualitative covariate effects (e.g., 15% lower CL/F in women) but the specific numeric parameter estimates (CL, V, ka) are located in Supplementary Tables (S3, S4) which are not included in the evidence. |
| popPK | Mohamed_2021 | irrelevant | 2 | 0 | This is an exposure-response (efficacy) study that references a population PK model but does not report the specific quantitative disposition parameters (CL, V, Q) or model structure details, only general half-life ranges and Cmax values. |
| popPK | Muensterman_2022 | relevant | 6 | 3 | The study describes a population PK model for upadacitinib, but the specific numeric parameter estimates (CL, V, Q, ka) are stated to be in Table S3 (Supplementary Material) which is not provided, only exposure metrics (Cavg) are available. |
| popPK | Nader_2020 | irrelevant | 0 | 0 | The paper is an exposure-response (efficacy/safety) analysis, not a pharmacokinetic study, and does not report quantitative disposition parameters (CL, V, ka, etc.) for upadacitinib. |
| popPK | Ponce-Bobadilla_2023 | relevant | 10 | 2 | The paper describes a population PK model for upadacitinib, but the specific numeric parameter values (CL/F, V/F) are explicitly stated to be in OSM Table 6, which is not provided in the evidence; only variability percentages are visible. |
| popPK | Qian_2024 | relevant | 8 | 0 | The paper describes a population pharmacokinetic model for upadacitinib, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract evidence. |
| popPK | Sonomoto_2026 | irrelevant | 0 | 0 | The paper is a clinical effectiveness study comparing JAK inhibitors in rheumatoid arthritis patients and does not contain any pharmacokinetic or pharmacodynamic parameters for upadacitinib. |
| popPK | Tachet_2025 | irrelevant | 0 | 0 | This is a study protocol for a prospective observational study that has not yet reported final quantitative pharmacokinetic parameter estimates, as the data analysis is ongoing. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:01 UTC</sub>
