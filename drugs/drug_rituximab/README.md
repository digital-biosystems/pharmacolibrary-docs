<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;rituximab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rituximab_Pasquiers2025_reference&quot;,&quot;label&quot;:&quot;Pasquiers_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rituximab/Rituximab_Pasquiers2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# rituximab

- **generic name:** rituximab
- **ATC codes:** `L01FA01`, `L01XC02`
- **DrugBank:** [DB00073](https://go.drugbank.com/drugs/DB00073) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Rituximab is a monoclonal antibody used to treat B-cell blood cancers such as non-Hodgkin and chronic lymphocytic leukemia and many autoimmune conditions including rheumatoid arthritis, vasculitis, and pemphigus. It is widely used and appears on the WHO essential medicines list, with several products authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412323](https://www.wikidata.org/wiki/Q412323) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:55 | 16:32 | 1/1/0 | 2/0/2 | 0/0/0 | 414,126/28,355 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 1/11 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Pasquiers_2025_reference](drugs/drug_rituximab/Rituximab_Pasquiers2025_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Pasquiers B et al., Comparison of rituximab induction and m…, EBioMedicine (2025) | [10.1016/j.ebiom.2025.105989](https://doi.org/10.1016/j.ebiom.2025.105989) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Serkland_2025_reference](drugs/drug_rituximab/Rituximab_Serkland2025_reference.md) | — | 1-compartment (no model) | 1 | Serkland TT et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2025) | [10.1002/bcp.70136](https://doi.org/10.1002/bcp.70136) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bensalem_2019_CD4](drugs/drug_rituximab/pd_Bensalem_2019_CD4.md) | CD4+ cell counts ← rituximab · indirect response — drug inhibits the production of CD4+ cell counts | — | Bensalem A et al., CD4+ count-dependent concentration-effe…, British journal of clinical… (2019) | [10.1111/bcp.14102](https://doi.org/10.1111/bcp.14102) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Bensalem_2019_DAS28](drugs/drug_rituximab/pd_Bensalem_2019_DAS28.md) | disease activity score in 28 joints ← rituximab · direct Emax (saturable) effect | — | Bensalem A et al., CD4+ count-dependent concentration-effe…, British journal of clinical… (2019) | [10.1111/bcp.14102](https://doi.org/10.1111/bcp.14102) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Li_2024_CD19_B_cell](drugs/drug_rituximab/pd_Li_2024_CD19_B_cell.md) | CD19+ B-cell ← rituximab · indirect response — drug inhibits the loss of CD19+ B-cell | model (no simulator) | Li Z et al., Kinetic-pharmacodynamic model to predic…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1526936](https://doi.org/10.3389/fphar.2024.1526936) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Pasquiers_2025_ANCA](drugs/drug_rituximab/pd_Pasquiers_2025_ANCA.md) | MPO-ANCA and PR3-ANCA ← rituximab · indirect response — drug inhibits the production of MPO-ANCA and PR3-ANCA | model (no simulator) | Pasquiers B et al., Comparison of rituximab induction and m…, EBioMedicine (2025) | [10.1016/j.ebiom.2025.105989](https://doi.org/10.1016/j.ebiom.2025.105989) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Pasquiers_2025_GG](drugs/drug_rituximab/pd_Pasquiers_2025_GG.md) | gammaglobulins ← rituximab · indirect response — drug inhibits the production of gammaglobulins | model (no simulator) | Pasquiers B et al., Comparison of rituximab induction and m…, EBioMedicine (2025) | [10.1016/j.ebiom.2025.105989](https://doi.org/10.1016/j.ebiom.2025.105989) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Vaskeikina_2026_FVC](drugs/drug_rituximab/pd_Vaskeikina_2026_FVC.md) | forced vital capacity ← rituximab · direct Emax (saturable) effect | model (no simulator) | Vaskeikina M et al., Systematic Review and Model-Based Meta-…, Pharmaceutics (2026) | [10.3390/pharmaceutics18020250](https://doi.org/10.3390/pharmaceutics18020250) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Vaskeikina_2026_mRSS](drugs/drug_rituximab/pd_Vaskeikina_2026_mRSS.md) | modified Rodnan skin score ← rituximab · direct Emax (saturable) effect | model (no simulator) | Vaskeikina M et al., Systematic Review and Model-Based Meta-…, Pharmaceutics (2026) | [10.3390/pharmaceutics18020250](https://doi.org/10.3390/pharmaceutics18020250) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rituximab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: MS4A1 (antibody), MS4A1 (regulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 119 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hartinger_2024.pdf` | Hartinger JM et al., A novel dosing approach for rituximab i…, Biomedicine & pharmacothera… (2024) | popPK | 10 | [10.1016/j.biopha.2024.116655](https://doi.org/10.1016/j.biopha.2024.116655) | [38678967](https://pubmed.ncbi.nlm.nih.gov/38678967) | The paper describes a population pharmacokinetic analysis of rituximab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract or evidence text. |
| `Serkland_2025.pdf` | Serkland TT et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2025) | popPK | 10 | [10.1002/bcp.70136](https://doi.org/10.1002/bcp.70136) | [40515509](https://pubmed.ncbi.nlm.nih.gov/40515509) | The study reports quantitative PK parameters (clearance, target-mediated elimination) for rituximab in humans, with specific numeric values provided in the abstract. |
| `Bensalem_2019.pdf` | Bensalem A et al., CD4+ count-dependent concentration-effe…, British journal of clinical… (2019) | popPK | 9 | [10.1111/bcp.14102](https://doi.org/10.1111/bcp.14102) | [31454097](https://pubmed.ncbi.nlm.nih.gov/31454097) | The study reports a 2-compartment PK model for rituximab in humans, but only the elimination half-life (18 days) is explicitly provided in the text, with other parameters likely in figures or supplementary material not included. |

<sub>queue written 2026-10-07T19:42:05.017059+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bender_2024 | irrelevant | 1 | 0 | The study focuses on the population pharmacokinetics of mosunetuzumab, with rituximab serving only as a residual prior therapy in the receptor occupancy model rather than the subject drug. |
| popPK | Bensalem_2019 | relevant | 9 | 2 | The study reports a 2-compartment PK model for rituximab in humans, but only the elimination half-life (18 days) is explicitly provided in the text, with other parameters likely in figures or supplementary material not included. |
| popPK | Colucci_2023 | irrelevant | 0 | 0 | The study is an observational clinical trial focusing on B-cell kinetics and relapse risk, not pharmacokinetic parameters (CL, V, etc.) of rituximab. |
| popPK | Deng_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for polatuzumab vedotin (an antibody-drug conjugate), not rituximab, which is only a co-administered comparator agent in the R-CHP regimen. |
| popPK | Gisleskog_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for ibrutinib, while rituximab is only a co-administered background therapy. |
| popPK | Hartinger_2024 | relevant | 10 | 0 | The paper describes a population pharmacokinetic analysis of rituximab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract or evidence text. |
| popPK | He_2020 | irrelevant | 0 | 0 | The study is a retrospective observational cohort analysis of clinical disability outcomes (EDSS) in multiple sclerosis patients, not a pharmacokinetic study, and contains no PK parameters for rituximab. |
| popPK | Leil_2021 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy (DAS28 scores) for rheumatoid arthritis treatments, not a pharmacokinetic study, and contains no PK parameters for rituximab. |
| popPK | Li_2024 | relevant | 4 | 5 | The study reports a kinetic-pharmacodynamic (K-PD) model for rituximab in humans, providing an elimination rate constant (Ke) and half-life (t1/2), but lacks standard compartmental PK parameters like clearance (CL) or volume of distribution (V). |
| popPK | Maher_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for interstitial lung disease reporting lung function outcomes (FVC), not a pharmacokinetic study with disposition parameters. |
| popPK | Morcos_2023 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for copanlisib, while rituximab is only a co-administered comparator agent. |
| popPK | Paci_2020 | irrelevant | 2 | 0 | The paper is a review discussing general PK/PD principles of monoclonal antibodies and mentions rituximab only as a historical example without providing specific quantitative parameter values. |
| popPK | Spagni_2024 | irrelevant | 0 | 0 | The study focuses on MuSK antibody biomarkers in myasthenia gravis, with rituximab serving only as a therapeutic agent rather than the subject of pharmacokinetic analysis. |
| popPK | Vaskeikina_2026 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy endpoints (mRSS and FVC) in systemic sclerosis, not a pharmacokinetic study of rituximab. |
| popPK | Zhao_2024 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for venetoclax, not rituximab; rituximab is only mentioned as a co-administered covariate. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:42 UTC</sub>
