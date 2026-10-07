<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;adalimumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Adalimumab_Chan2020_reference&quot;,&quot;label&quot;:&quot;Chan_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_adalimumab/Adalimumab_Chan2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Adalimumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_adalimumab/Adalimumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Adalimumab_van2024_reference&quot;,&quot;label&quot;:&quot;van_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_adalimumab/Adalimumab_van2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# adalimumab

- **generic name:** adalimumab
- **ATC codes:** `L04AA17`, `L04AB04`
- **DrugBank:** [DB00051](https://go.drugbank.com/drugs/DB00051) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Adalimumab is a monoclonal antibody that blocks tumour necrosis factor alpha and is used to treat inflammatory conditions such as rheumatoid and other arthritis, psoriasis, ankylosing spondylitis, uveitis, ulcerative colitis, Crohn's disease, and hidradenitis suppurativa. It is widely used and authorised in the European Union, where several products are approved, though some have been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q348260](https://www.wikidata.org/wiki/Q348260) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:34 | 1:36 | 3/2/0 | 1/0/2 | 0/0/0 | 177,274/8,918 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chan_2020_reference](drugs/drug_adalimumab/Adalimumab_Chan2020_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Chan P et al., Population Pharmacokinetics, Efficacy E…, Pharmaceutical research (2020) | [10.1007/s11095-019-2752-y](https://doi.org/10.1007/s11095-019-2752-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_adalimumab/Adalimumab_RodrguezFernndez2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Rodríguez-Fernández K et al., Impact of Pharmacokinetic and Pharmacod…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030654](https://doi.org/10.3390/pharmaceutics14030654) |
| <span class="pk-badge pk-badge--green">extracted</span> | [van_2024_reference](drugs/drug_adalimumab/Adalimumab_van2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | van Huizen A et al., Quantifying the Effect of Methotrexate…, The Journal of investigativ… (2024) | [10.1016/j.jid.2023.10.022](https://doi.org/10.1016/j.jid.2023.10.022) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [García-Otero_2022_reference](drugs/drug_adalimumab/Adalimumab_GarcaOtero2022_reference.md) | — | 1-compartment (no model) | 0 | García-Otero X et al., PET study of intravitreal adalimumab ph…, International journal of ph… (2022) | [10.1016/j.ijpharm.2022.122261](https://doi.org/10.1016/j.ijpharm.2022.122261) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Marquez-Megias_2023_reference](drugs/drug_adalimumab/Adalimumab_MarquezMegias2023_reference.md) | — | 1-compartment (no model) | 0 | Marquez-Megias S et al., Population Pharmacokinetic Model of Ada…, Biomedicines (2023) | [10.3390/biomedicines11102822](https://doi.org/10.3390/biomedicines11102822) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ternant_2015_DAS28](drugs/drug_adalimumab/pd_Ternant_2015_DAS28.md) | disease activity score in 28 joints ← adalimumab · direct Emax (saturable) effect | — | Ternant D et al., Pharmacokinetics and concentration-effe…, British journal of clinical… (2015) | [10.1111/bcp.12509](https://doi.org/10.1111/bcp.12509) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2024_clinical_remission_endoscopic_response](drugs/drug_adalimumab/pd_Chen_2024_clinical_remission_endoscopic_response.md) | clinical remission/endoscopic response ← adalimumab · categorical (graded) response model | — | Chen MJ et al., SERENE ER Analysis Part 1-SERENE CD: Ex…, Clinical pharmacology in dr… (2024) | [10.1002/cpdd.1438](https://doi.org/10.1002/cpdd.1438) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2024_clinical_remission_endoscopic_response_2](drugs/drug_adalimumab/pd_Chen_2024_clinical_remission_endoscopic_response_2.md) | clinical remission/endoscopic response ← adalimumab · categorical (graded) response model | — | Chen MJ et al., SERENE ER Analysis Part 1-SERENE CD: Ex…, Clinical pharmacology in dr… (2024) | [10.1002/cpdd.1438](https://doi.org/10.1002/cpdd.1438) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Ternant_2015_CRP](drugs/drug_adalimumab/pd_Ternant_2015_CRP.md) | C-reactive protein ← adalimumab · indirect response — drug inhibits the production of C-reactive protein | model (no simulator) | Ternant D et al., Pharmacokinetics and concentration-effe…, British journal of clinical… (2015) | [10.1111/bcp.12509](https://doi.org/10.1111/bcp.12509) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [van_2024_PASI](drugs/drug_adalimumab/pd_van_2024_PASI.md) | PASI ← adalimumab · indirect response — drug inhibits the production of PASI | model (no simulator) | van Huizen A et al., Quantifying the Effect of Methotrexate…, The Journal of investigativ… (2024) | [10.1016/j.jid.2023.10.022](https://doi.org/10.1016/j.jid.2023.10.022) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=adalimumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TNF (antibody), TNF (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 64 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 3  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Golhen_2025.pdf` | Golhen K et al., Influence of Disease Type and Activity…, Journal of clinical pharmac… (2025) | popPK | 10 | [10.1002/jcph.70045](https://doi.org/10.1002/jcph.70045) | [40410850](https://pubmed.ncbi.nlm.nih.gov/40410850) | The paper reports a pharmacometric model for adalimumab in children, but specific numeric parameter estimates (CL, V, half-life) are not provided in the text, only variability percentages and relative associations. |
| `Ternant_2015.pdf` | Ternant D et al., Pharmacokinetics and concentration-effe…, British journal of clinical… (2015) | popPK | 10 | [10.1111/bcp.12509](https://doi.org/10.1111/bcp.12509) | [25223394](https://pubmed.ncbi.nlm.nih.gov/25223394) | The paper reports quantitative population PK parameters (V/F, CL/F, ka) for adalimumab in humans with values explicitly listed in the abstract. |
| `García-Otero_2022.pdf` | García-Otero X et al., PET study of intravitreal adalimumab ph…, International journal of ph… (2022) | popPK | 9 | [10.1016/j.ijpharm.2022.122261](https://doi.org/10.1016/j.ijpharm.2022.122261) | [36208838](https://pubmed.ncbi.nlm.nih.gov/36208838) | Reports quantitative PK parameters (half-life, compartmental model) for intravitreal adalimumab in rats. |
| `Kimura_2018.pdf` | Kimura K et al., Pharmacokinetic and pharmacodynamic mod…, Biopharmaceutics & drug dis… (2018) | popPK | 9 | [10.1002/bdd.2134](https://doi.org/10.1002/bdd.2134) | [29790586](https://pubmed.ncbi.nlm.nih.gov/29790586) | The paper describes a pharmacokinetic and pharmacodynamic model for adalimumab in Crohn's disease, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Nader_2017.pdf` | Nader A et al., Population Pharmacokinetics and Immunog…, Clinical pharmacokinetics (2017) | popPK | 9 | [10.1007/s40262-016-0502-4](https://doi.org/10.1007/s40262-016-0502-4) | [28066879](https://pubmed.ncbi.nlm.nih.gov/28066879) | The study describes a population PK model for adalimumab, but specific numeric parameter estimates (CL, V, Q, etc.) are not provided in the text, only steady-state concentrations. |
| `Chen_2024.pdf` | Chen MJ et al., SERENE ER Analysis Part 1-SERENE CD: Ex…, Clinical pharmacology in dr… (2024) | popPK | 5 | [10.1002/cpdd.1438](https://doi.org/10.1002/cpdd.1438) | [38953542](https://pubmed.ncbi.nlm.nih.gov/38953542) | This is an exposure-response analysis that relies on an established PK model but does not report the specific quantitative PK parameter values (CL, V, etc.) for adalimumab in the provided evidence. |

<sub>queue written 2026-10-06T23:33:52.655915+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chan_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for fenebrutinib, not adalimumab; adalimumab is only an active comparator in the efficacy model. |
| popPK | Chen_2024 | relevant | 5 | 0 | This is an exposure-response analysis that relies on an established PK model but does not report the specific quantitative PK parameter values (CL, V, etc.) for adalimumab in the provided evidence. |
| popPK | Ding_2024 | relevant | 9 | 2 | The study performs population pharmacokinetic modeling for adalimumab (one-compartment, first-order absorption) and discusses covariates like ADA levels, but the specific numeric parameter estimates (TVP, IIV, residual error) are not provided in the extracted text, likely residing in figures or tables not included. |
| popPK | Eylenbosch_2026 | irrelevant | 0 | 0 | This is a narrative review discussing the concept of model-informed precision dosing without reporting any original quantitative pharmacokinetic parameter values for adalimumab. |
| popPK | Golhen_2025 | relevant | 10 | 2 | The paper reports a pharmacometric model for adalimumab in children, but specific numeric parameter estimates (CL, V, half-life) are not provided in the text, only variability percentages and relative associations. |
| popPK | Khatri_2019 | irrelevant | 1 | 0 | The paper is an exposure-response analysis for ABT-122 with adalimumab serving only as a comparator, and no quantitative PK parameters for adalimumab are reported in the evidence. |
| popPK | Kimura_2018 | relevant | 9 | 0 | The paper describes a pharmacokinetic and pharmacodynamic model for adalimumab in Crohn's disease, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Kinzer_2023 | irrelevant | 0 | 0 | The study is in vitro physicochemical and functional characterization, not pharmacokinetics, and reports no disposition parameters. |
| popPK | Lee_2024 | irrelevant | 0 | 0 | The study focuses on the structural development of a canine chimeric antibody using adalimumab as a template, reporting binding affinities rather than pharmacokinetic disposition parameters for adalimumab. |
| popPK | Leil_2021 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy (DAS28 scores) and does not report pharmacokinetic parameters for adalimumab. |
| popPK | Nader_2017 | relevant | 9 | 2 | The study describes a population PK model for adalimumab, but specific numeric parameter estimates (CL, V, Q, etc.) are not provided in the text, only steady-state concentrations. |
| popPK | Roblin_2024 | irrelevant | 0 | 0 | This is a review article discussing therapeutic drug monitoring strategies without providing original quantitative pharmacokinetic parameter values (CL, V, etc.) for adalimumab. |
| popPK | Rodríguez-Fernández_2022 | relevant | 6 | 2 | The paper is a review that summarizes population PK models for adalimumab but lacks specific numeric parameter values (CL, V) in the provided text, referring instead to Table 3 which is not included in the evidence. |
| popPK | Steenholdt_2025 | irrelevant | 1 | 1 | The study is a retrospective clinical cohort analysis of treatment sequencing in IBD, using adalimumab trough concentrations only as thresholds to classify failure mechanisms, without reporting any adalimumab-specific PK parameters like CL, V, or half-life. |
| popPK | Stodtmann_2024 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that relies on a pre-existing population PK model and does not report original quantitative disposition parameters (CL, V, etc.) for adalimumab in the evidence provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:34 UTC</sub>
