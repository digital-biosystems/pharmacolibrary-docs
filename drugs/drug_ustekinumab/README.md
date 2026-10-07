<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;ustekinumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ustekinumab_Adedokun2022_reference&quot;,&quot;label&quot;:&quot;Adedokun_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ustekinumab/Ustekinumab_Adedokun2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ustekinumab_Lam2026_reference&quot;,&quot;label&quot;:&quot;Lam_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ustekinumab/Ustekinumab_Lam2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ustekinumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ustekinumab/Ustekinumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ustekinumab

- **generic name:** ustekinumab
- **ATC codes:** `L04AC05`
- **DrugBank:** [DB05679](https://go.drugbank.com/drugs/DB05679) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Ustekinumab, a monoclonal antibody that blocks interleukins, is used to treat plaque psoriasis, psoriatic arthritis, Crohn's disease, and ulcerative colitis. It is an approved medicine with several authorised products in the European Union, where it is used for these inflammatory conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420305](https://www.wikidata.org/wiki/Q420305) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:04 | 1:37 | 3/2/0 | 2/0/1 | 0/0/0 | 218,064/9,923 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Adedokun_2022_reference](drugs/drug_ustekinumab/Ustekinumab_Adedokun2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Adedokun OJ et al., Population Pharmacokinetics and Exposur…, Clinical therapeutics (2022) | [10.1016/j.clinthera.2022.08.010](https://doi.org/10.1016/j.clinthera.2022.08.010) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lam_2026_reference](drugs/drug_ustekinumab/Ustekinumab_Lam2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Lam E et al., Pharmacokinetics and Safety of Ustekinu…, Rheumatology and therapy (2026) | [10.1007/s40744-025-00820-3](https://doi.org/10.1007/s40744-025-00820-3) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_ustekinumab/Ustekinumab_RodrguezFernndez2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Rodríguez-Fernández K et al., Impact of Pharmacokinetic and Pharmacod…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030654](https://doi.org/10.3390/pharmaceutics14030654) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Aguiar_2021_base](drugs/drug_ustekinumab/Ustekinumab_Aguiar2021_base.md) | — | 2-compartment (no model) | 7 | Aguiar Zdovc J et al., Ustekinumab Dosing Individualization in…, Pharmaceutics (2021) | [10.3390/pharmaceutics13101587](https://doi.org/10.3390/pharmaceutics13101587) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Aguiar_2021_final](drugs/drug_ustekinumab/Ustekinumab_Aguiar2021_final.md) | — | 3-compartment (no model) | 8 (+1 cov.) | Aguiar Zdovc J et al., Ustekinumab Dosing Individualization in…, Pharmaceutics (2021) | [10.3390/pharmaceutics13101587](https://doi.org/10.3390/pharmaceutics13101587) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hu_2022_PASI](drugs/drug_ustekinumab/pd_Hu_2022_PASI.md) | Psoriasis area and severity Index ← ustekinumab · indirect response — drug inhibits the production of Psoriasis area and severity Index | — | Hu C et al., Improving categorical endpoint longitud…, Journal of pharmacokinetics… (2022) | [10.1007/s10928-021-09796-3](https://doi.org/10.1007/s10928-021-09796-3) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2022_fCal](drugs/drug_ustekinumab/pd_Wang_2022_fCal.md) | fecal calprotectin ← ustekinumab · indirect response — drug inhibits the production of fecal calprotectin | — | Wang Z et al., Population pharmacokinetic-pharmacodyna…, British journal of clinical… (2022) | [10.1111/bcp.14971](https://doi.org/10.1111/bcp.14971) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hu_2022_PGA](drugs/drug_ustekinumab/pd_Hu_2022_PGA.md) | physician's global assessment score ← ustekinumab · categorical (graded) response model | — | Hu C et al., Improving categorical endpoint longitud…, Journal of pharmacokinetics… (2022) | [10.1007/s10928-021-09796-3](https://doi.org/10.1007/s10928-021-09796-3) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Rodríguez-Fernández_2024_PASI](drugs/drug_ustekinumab/pd_Rodr_guez_Fern_ndez_2024_PASI.md) | Psoriasis Area and Severity Index ← ustekinumab · indirect response — drug inhibits the production of Psoriasis Area and Severity Index | model (no simulator) | Rodríguez-Fernández K et al., Model-Informed Precision Dosing for Per…, Pharmaceutics (2024) | [10.3390/pharmaceutics16101295](https://doi.org/10.3390/pharmaceutics16101295) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ustekinumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: IL12A (other/unknown), IL12B (inhibitor), IL23A (other/unknown), PDF (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 43 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 3  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Adedokun_2022.pdf` | Adedokun OJ et al., Population Pharmacokinetics and Exposur…, Clinical therapeutics (2022) | popPK | 10 | [10.1016/j.clinthera.2022.08.010](https://doi.org/10.1016/j.clinthera.2022.08.010) | [36150926](https://pubmed.ncbi.nlm.nih.gov/36150926) | The abstract explicitly reports quantitative population PK parameters (CL, Vss, Q, t1/2) for ustekinumab in human patients with Crohn's disease. |
| `Shao_2022.pdf` | Shao J et al., Integrated Population Pharmacokinetic A…, European journal of drug me… (2022) | popPK | 10 | [10.1007/s13318-022-00768-7](https://doi.org/10.1007/s13318-022-00768-7) | [35442011](https://pubmed.ncbi.nlm.nih.gov/35442011) | The paper describes a population PK model for ustekinumab but the evidence provided is the abstract, which lacks the specific numeric values for clearance, volume, or other parameters. |
| `Xu_2020.pdf` | Xu Y et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1002/jcph.1582](https://doi.org/10.1002/jcph.1582) | [32026499](https://pubmed.ncbi.nlm.nih.gov/32026499) | The paper is a population PK study of ustekinumab, but the specific numeric parameter values (CL, V, etc.) are not provided in the extracted evidence. |
| `Wang_2022.pdf` | Wang Z et al., Population pharmacokinetic-pharmacodyna…, British journal of clinical… (2022) | popPK | 5 | [10.1111/bcp.14971](https://doi.org/10.1111/bcp.14971) | [34197653](https://pubmed.ncbi.nlm.nih.gov/34197653) | While the paper describes a two-compartment popPK model, the abstract provided does not contain specific quantitative disposition parameter values (CL, V, Q, half-life); it only describes trends (covariate effects). |

<sub>queue written 2026-10-07T01:03:36.533351+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adedokun_2018 | irrelevant | 3 | 1 | The study describes qualitative pharmacokinetic features (dose proportionality, steady state) and exposure-response relationships with specific trough concentration cutoffs, but does not report quantitative disposition parameters like clearance (CL), volume of distribution (V), or half-life derived from a compartmental model. |
| popPK | Adedokun_2020 | irrelevant | 4 | 0 | The study reports descriptive pharmacokinetics (serum concentration-time profiles, dose-proportionality) and exposure-response relationships, but does not provide quantitative compartmental or population-PK parameter estimates (such as clearance, volume of distribution, or half-life). |
| popPK | Eylenbosch_2026 | irrelevant | 1 | 0 | The paper is a narrative review on the concept of model-informed precision dosing and does not contain original quantitative population pharmacokinetic parameter estimates for ustekinumab. |
| popPK | Guo_2022 | irrelevant | 0 | 0 | The paper is an ecological stoichiometry study of the plant Stellera chamaejasme and contains no pharmacokinetic data for the drug ustekinumab. |
| popPK | Hu_2022 | irrelevant | 1 | 0 | The paper describes a longitudinal exposure-response analysis using a categorical endpoint and does not report population pharmacokinetic parameters or numeric exposure values for ustekinumab. |
| popPK | Kimura_2026 | irrelevant | 1 | 0 | The paper focuses on empirical Bayes estimation and PD predictions using summary-level data without reporting numeric pharmacokinetic parameter values. |
| popPK | Roblin_2024 | irrelevant | 0 | 0 | The paper is a review of therapeutic drug monitoring and does not report original quantitative PK parameters for ustekinumab. |
| popPK | Rodríguez-Fernández_2022 | relevant | 9 | 3 | The paper is a review summarizing population PK models for ustekinumab and includes specific numeric parameter estimates (e.g., CL, V, ka) for some drugs (golimumab, secukinumab), but the specific population parameter values for ustekinumab are primarily described qualitatively or referred to in Tables 3/4 which are not fully provided as readable numeric lines in the evidence. |
| popPK | Rodríguez-Fernández_2024 | relevant | 9 | 2 | The paper describes a population PK model for ustekinumab in humans, but the specific numeric parameter estimates are located in Table 2 and Supplementary Tables which are not included in the provided evidence. |
| popPK | Shao_2022 | relevant | 10 | 3 | The paper describes a population PK model for ustekinumab but the evidence provided is the abstract, which lacks the specific numeric values for clearance, volume, or other parameters. |
| popPK | Steenholdt_2025 | irrelevant | 1 | 0 | The study reports clinical outcomes and trough concentration thresholds for biologic sequencing, but does not provide quantitative pharmacokinetic disposition parameters (CL, V, t1/2) or a PK model for ustekinumab. |
| popPK | Wang_2022 | irrelevant | 5 | 0 | While the paper describes a two-compartment popPK model, the abstract provided does not contain specific quantitative disposition parameter values (CL, V, Q, half-life); it only describes trends (covariate effects). |
| popPK | Wang_2026 | irrelevant | 2 | 0 | The study uses an "in-house developed" PK model to estimate clearance for clinical prediction, but does not report the quantitative PK parameter values (CL, V, Q, etc.) for ustekinumab in the provided text. |
| popPK | Xu_2020 | relevant | 10 | 0 | The paper is a population PK study of ustekinumab, but the specific numeric parameter values (CL, V, etc.) are not provided in the extracted evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:03 UTC</sub>
