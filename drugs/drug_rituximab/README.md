<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;rituximab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rituximab_Bender2024_reference&quot;,&quot;label&quot;:&quot;Bender_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rituximab/Rituximab_Bender2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rituximab_Liu2022_reference&quot;,&quot;label&quot;:&quot;Liu_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rituximab/Rituximab_Liu2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Li_2024_E&quot;,&quot;label&quot;:&quot;Li_2024 \u00b7 E&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_rituximab/pd_Li_2024_E.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-10-15 03:10 | 3:51 | 2/2/1 | 3/1/0 | 0/0/0 | 282,610/19,949 | einfracz / qwen3.8-27b | 12 | 1/11 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Bender_2024_reference](drugs/drug_rituximab/Rituximab_Bender2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Bender B et al., Population pharmacokinetics and CD20 bi…, Clinical and translational… (2024) | [10.1111/cts.13825](https://doi.org/10.1111/cts.13825) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Liu_2022_reference](drugs/drug_rituximab/Rituximab_Liu2022_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Liu S et al., Rituximab exposure-response in triweekl…, Clinical and translational… (2022) | [10.1111/cts.13186](https://doi.org/10.1111/cts.13186) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Li_2024_reference](drugs/drug_rituximab/Rituximab_Li2024_reference.md) | — | 1-compartment (no model) | 1 | Li Z et al., Kinetic-pharmacodynamic model to predic…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1526936](https://doi.org/10.3389/fphar.2024.1526936) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.917). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Pasquiers_2025_reference](drugs/drug_rituximab/Rituximab_Pasquiers2025_reference.md) | — | general linear (no model) | 4 (+2 cov.) | Pasquiers B et al., Comparison of rituximab induction and m…, EBioMedicine (2025) | [10.1016/j.ebiom.2025.105989](https://doi.org/10.1016/j.ebiom.2025.105989) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Serkland_2025_reference](drugs/drug_rituximab/Rituximab_Serkland2025_reference.md) | — | 1-compartment (no model) | 2 | Serkland TT et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2025) | [10.1002/bcp.70136](https://doi.org/10.1002/bcp.70136) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Bensalem_2019_CD4](drugs/drug_rituximab/pd_Bensalem_2019_CD4.md) | CD4+ cell counts ← rituximab · indirect response — drug inhibits the production of CD4+ cell counts | — | Bensalem A et al., CD4+ count-dependent concentration-effe…, British journal of clinical… (2019) | [10.1111/bcp.14102](https://doi.org/10.1111/bcp.14102) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Bensalem_2019_DAS28](drugs/drug_rituximab/pd_Bensalem_2019_DAS28.md) | disease activity score in 28 joints ← rituximab · direct Emax (saturable) effect | — | Bensalem A et al., CD4+ count-dependent concentration-effe…, British journal of clinical… (2019) | [10.1111/bcp.14102](https://doi.org/10.1111/bcp.14102) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Li_2024_E](drugs/drug_rituximab/pd_Li_2024_E.md) | CD19+ B-cell ← rituximab · indirect response — drug inhibits the loss of CD19+ B-cell | ▶ model + simulator | Li Z et al., Kinetic-pharmacodynamic model to predic…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1526936](https://doi.org/10.3389/fphar.2024.1526936) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> | [Pasquiers_2025_ANCA](drugs/drug_rituximab/pd_Pasquiers_2025_ANCA.md) | MPO-ANCA and PR3-ANCA ← rituximab · delayed effect through transit (transduction) compartments | — | Pasquiers B et al., Comparison of rituximab induction and m…, EBioMedicine (2025) | [10.1016/j.ebiom.2025.105989](https://doi.org/10.1016/j.ebiom.2025.105989) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Pasquiers_2025_GG](drugs/drug_rituximab/pd_Pasquiers_2025_GG.md) | Gammaglobulin ← rituximab · indirect response — drug inhibits the production of Gammaglobulin | model (no simulator) | Pasquiers B et al., Comparison of rituximab induction and m…, EBioMedicine (2025) | [10.1016/j.ebiom.2025.105989](https://doi.org/10.1016/j.ebiom.2025.105989) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span> | [Vaskeikina_2026_FVC](drugs/drug_rituximab/pd_Vaskeikina_2026_FVC.md) | forced vital capacity ← none · direct Emax (saturable) effect | — | Vaskeikina M et al., Systematic Review and Model-Based Meta-…, Pharmaceutics (2026) | [10.3390/pharmaceutics18020250](https://doi.org/10.3390/pharmaceutics18020250) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span> | [Vaskeikina_2026_mRSS](drugs/drug_rituximab/pd_Vaskeikina_2026_mRSS.md) | modified Rodnan skin score ← none · direct Emax (saturable) effect | — | Vaskeikina M et al., Systematic Review and Model-Based Meta-…, Pharmaceutics (2026) | [10.3390/pharmaceutics18020250](https://doi.org/10.3390/pharmaceutics18020250) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=rituximab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: MS4A1 (antibody), MS4A1 (regulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 119 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 2  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hartinger_2024.pdf` | Hartinger JM et al., A novel dosing approach for rituximab i…, Biomedicine & pharmacothera… (2024) | popPK | 10 | [10.1016/j.biopha.2024.116655](https://doi.org/10.1016/j.biopha.2024.116655) | [38678967](https://pubmed.ncbi.nlm.nih.gov/38678967) | The paper describes a population pharmacokinetic model for rituximab, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| `Serkland_2025.pdf` | Serkland TT et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2025) | popPK | 10 | [10.1002/bcp.70136](https://doi.org/10.1002/bcp.70136) | [40515509](https://pubmed.ncbi.nlm.nih.gov/40515509) | The abstract reports quantitative pharmacokinetic parameters (clearance CL and target-mediated clearance kdeg) for rituximab in humans. |
| `Bensalem_2019.pdf` | Bensalem A et al., CD4+ count-dependent concentration-effe…, British journal of clinical… (2019) | popPK | 9 | [10.1111/bcp.14102](https://doi.org/10.1111/bcp.14102) | [31454097](https://pubmed.ncbi.nlm.nih.gov/31454097) | The study describes a 2-compartment population PK model for rituximab in humans, but only the elimination half-life (18 days) is provided in the evidence, with other key quantitative parameters (CL, V) absent. |

<sub>queue written 2026-10-15T03:06:58.977238+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bender_2024 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of mosunetuzumab; rituximab is only present as a residual comparator drug for CD20 binding competition, and its PK parameters (half-life 24 days) are fixed constants rather than the primary subject of analysis. |
| popPK | Bensalem_2019 | relevant | 9 | 1 | The study describes a 2-compartment population PK model for rituximab in humans, but only the elimination half-life (18 days) is provided in the evidence, with other key quantitative parameters (CL, V) absent. |
| popPK | Colucci_2023 | irrelevant | 0 | 0 | The study focuses on clinical outcomes (relapse risk) and biomarker associations (B-cell counts) in pediatric nephrotic syndrome, not on rituximab pharmacokinetics. |
| popPK | Deng_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for polatuzumab vedotin (an antibody-drug conjugate), not rituximab, which is only a co-administered drug. |
| popPK | Gisleskog_2025 | irrelevant | 0 | 0 | The study reports population PK parameters for ibrutinib, not rituximab (which is only a co-administered background therapy). |
| popPK | Hartinger_2024 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for rituximab, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| popPK | He_2020 | irrelevant | 0 | 0 | The study is a retrospective observational cohort analyzing disability outcomes (EDSS) in multiple sclerosis patients, reporting no pharmacokinetic parameters for rituximab. |
| popPK | Leil_2021 | irrelevant | 0 | 0 | The paper is a pharmacodynamic model-based meta-analysis of DAS28 efficacy scores for rheumatoid arthritis treatments, not a pharmacokinetic study of rituximab, and contains no PK parameters (CL, V, etc.). |
| popPK | Maher_2023 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of rituximab on lung function (FVC) in CTD-ILD, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Morcos_2023 | irrelevant | 0 | 0 | The study investigates the population pharmacokinetics of copanlisib, with rituximab serving only as a co-administered standard of care and covariate, not the subject drug. |
| popPK | Paci_2020 | irrelevant | 1 | 0 | This is a review article that discusses general PK concepts and references rituximab only to illustrate the history of monoclonal antibodies; it does not report original quantitative disposition parameters or specific numeric values for rituximab in the provided evidence. |
| popPK | Spagni_2024 | irrelevant | 0 | 0 | The study investigates serological biomarkers (antibody levels and affinity) in myasthenia gravis patients, with rituximab acting only as a therapeutic agent, and contains no pharmacokinetic parameters for rituximab. |
| popPK | Vaskeikina_2026 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy endpoints (mRSS, FVC) in systemic sclerosis, not a pharmacokinetic study of rituximab. |
| popPK | Zhao_2024 | irrelevant | 0 | 0 | The paper is a systematic review of pharmacokinetic models for venetoclax, not rituximab; rituximab is only mentioned as a co-administered covariate in venetoclax studies. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:07 UTC</sub>
