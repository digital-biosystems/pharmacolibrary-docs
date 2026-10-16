<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;etanercept&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Etanercept_Ling2024_reference&quot;,&quot;label&quot;:&quot;Ling_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_etanercept/Etanercept_Ling2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Breedveld_2018_ESR&quot;,&quot;label&quot;:&quot;Breedveld_2018 \u00b7 ESR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_etanercept/pd_Breedveld_2018_ESR.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Breedveld_2018_IL_6&quot;,&quot;label&quot;:&quot;Breedveld_2018 \u00b7 IL-6&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_etanercept/pd_Breedveld_2018_IL_6.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Breedveld_2018_MMP_3&quot;,&quot;label&quot;:&quot;Breedveld_2018 \u00b7 MMP-3&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_etanercept/pd_Breedveld_2018_MMP_3.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Breedveld_2018_Painful_joints&quot;,&quot;label&quot;:&quot;Breedveld_2018 \u00b7 Painful joints&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_etanercept/pd_Breedveld_2018_Painful_joints.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Breedveld_2018_Swollen_joints&quot;,&quot;label&quot;:&quot;Breedveld_2018 \u00b7 Swollen joints&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_etanercept/pd_Breedveld_2018_Swollen_joints.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# etanercept

- **generic name:** etanercept
- **ATC codes:** `L04AB01`
- **DrugBank:** [DB00005](https://go.drugbank.com/drugs/DB00005) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Etanercept is a TNF inhibitor used to treat inflammatory conditions such as rheumatoid and psoriatic arthritis, juvenile idiopathic arthritis, ankylosing spondylitis, and psoriasis. It is approved and widely used, with several products authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415343](https://www.wikidata.org/wiki/Q415343) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:07 | 1:27 | 0/2/1 | 2/0/2 | 0/0/0 | 91,534/7,417 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Ling_2024_reference](drugs/drug_etanercept/Etanercept_Ling2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Ling SF et al., Population Pharmacokinetic Analysis and…, Pharmaceutics (2024) | [10.3390/pharmaceutics16060702](https://doi.org/10.3390/pharmaceutics16060702) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lee_2003_reference](drugs/drug_etanercept/Etanercept_Lee2003_reference.md) | — | 1-compartment (no model) | 0 | Lee H et al., Population pharmacokinetic and pharmaco…, Clinical pharmacology and t… (2003) | [10.1016/s0009-9236(02)17635-1](https://doi.org/10.1016/s0009-9236(02)17635-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhou_2004_reference](drugs/drug_etanercept/Etanercept_Zhou2004_reference.md) | — | 1-compartment (no model) | 0 | Zhou H et al., Unaltered etanercept pharmacokinetics w…, Journal of clinical pharmac… (2004) | [10.1177/0091270004268049](https://doi.org/10.1177/0091270004268049) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hsu_2014_ACR_20_50_70](drugs/drug_etanercept/pd_Hsu_2014_ACR_20_50_70.md) | American College of Rheumatology (ACR) 20/50/70 response rate ← etanercept · direct Emax (saturable) effect | — | Hsu LF et al., Evaluation of etanercept dose reduction…, International journal of cl… (2014) | [10.5414/CP202131](https://doi.org/10.5414/CP202131) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hsu_2014_DAS28](drugs/drug_etanercept/pd_Hsu_2014_DAS28.md) | disease activity score in 28 joints ← etanercept · direct Emax (saturable) effect | — | Hsu LF et al., Evaluation of etanercept dose reduction…, International journal of cl… (2014) | [10.5414/CP202131](https://doi.org/10.5414/CP202131) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Lon_2011_paw_edema](drugs/drug_etanercept/pd_Lon_2011_paw_edema.md) | paw edema ← etanercept · indirect response — drug inhibits the production of paw edema | — | Lon HK et al., Pharmacokinetic-pharmacodynamic disease…, Pharmaceutical research (2011) | [10.1007/s11095-011-0396-7](https://doi.org/10.1007/s11095-011-0396-7) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Breedveld_2018_ESR](drugs/drug_etanercept/pd_Breedveld_2018_ESR.md) | change from baseline in erythrocyte sedimentation rate ← etanercept · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Breedveld FC et al., A Pilot Dose-Finding Study of Etanercep…, Clinical and translational… (2018) | [10.1111/cts.12502](https://doi.org/10.1111/cts.12502) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Breedveld_2018_IL_6](drugs/drug_etanercept/pd_Breedveld_2018_IL_6.md) | change from baseline in interleukin-6 ← etanercept · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Breedveld FC et al., A Pilot Dose-Finding Study of Etanercep…, Clinical and translational… (2018) | [10.1111/cts.12502](https://doi.org/10.1111/cts.12502) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Breedveld_2018_MMP_3](drugs/drug_etanercept/pd_Breedveld_2018_MMP_3.md) | change from baseline in matrix metalloproteinase-3 ← etanercept · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Breedveld FC et al., A Pilot Dose-Finding Study of Etanercep…, Clinical and translational… (2018) | [10.1111/cts.12502](https://doi.org/10.1111/cts.12502) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Breedveld_2018_Painful_joints](drugs/drug_etanercept/pd_Breedveld_2018_Painful_joints.md) | change from baseline in number of painful joints ← etanercept · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Breedveld FC et al., A Pilot Dose-Finding Study of Etanercep…, Clinical and translational… (2018) | [10.1111/cts.12502](https://doi.org/10.1111/cts.12502) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Breedveld_2018_Swollen_joints](drugs/drug_etanercept/pd_Breedveld_2018_Swollen_joints.md) | change from baseline in number of swollen joints ← etanercept · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Breedveld FC et al., A Pilot Dose-Finding Study of Etanercep…, Clinical and translational… (2018) | [10.1111/cts.12502](https://doi.org/10.1111/cts.12502) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lee_2003_ACR20](drugs/drug_etanercept/pd_Lee_2003_ACR20.md) | ACR20 ← etanercept · categorical (graded) response model | — | Lee H et al., Population pharmacokinetic and pharmaco…, Clinical pharmacology and t… (2003) | [10.1016/s0009-9236(02)17635-1](https://doi.org/10.1016/s0009-9236(02)17635-1) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=etanercept).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: C1QA (target), FCGR1A (target), FCGR2A (target), FCGR2B (target), FCGR2C (target), FCGR3A (target), FCGR3B (target), LTA (antibody), TNF (antibody), TNF (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 17 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Korth-Bradley_2000.pdf` | Korth-Bradley JM et al., The pharmacokinetics of etanercept in h…, The Annals of pharmacothera… (2000) | popPK | 10 | [10.1345/aph.19126](https://doi.org/10.1345/aph.19126) | [10676822](https://pubmed.ncbi.nlm.nih.gov/10676822) | The paper reports quantitative population PK parameters (CL, Vd, t1/2) for etanercept in healthy humans directly in the text. |
| `Lee_2003.pdf` | Lee H et al., Population pharmacokinetic and pharmaco…, Clinical pharmacology and t… (2003) | popPK | 10 | [10.1016/s0009-9236(02)17635-1](https://doi.org/10.1016/s0009-9236(02)17635-1) | [12709725](https://pubmed.ncbi.nlm.nih.gov/12709725) | The evidence explicitly reports population PK parameters for etanercept including clearance, interindividual variability, absorption half-life, and elimination half-life. |
| `Zhou_2004.pdf` | Zhou H et al., Unaltered etanercept pharmacokinetics w…, Journal of clinical pharmac… (2004) | popPK | 10 | [10.1177/0091270004268049](https://doi.org/10.1177/0091270004268049) | [15496641](https://pubmed.ncbi.nlm.nih.gov/15496641) | The paper reports a population PK model for etanercept with all key quantitative parameters (CL, V, Q, ka, F) explicitly listed in the abstract. |
| `Li_2017.pdf` | Li M et al., A novel model for the pharmacokinetic s…, Biochemical pharmacology (2017) | popPK | 8 | [10.1016/j.bcp.2017.08.011](https://doi.org/10.1016/j.bcp.2017.08.011) | [28822784](https://pubmed.ncbi.nlm.nih.gov/28822784) | The paper describes a pharmacokinetic model for etanercept, but no quantitative parameter values (CL, V, etc.) are present in the provided evidence, which consists only of the title and abstract. |
| `Lon_2011.pdf` | Lon HK et al., Pharmacokinetic-pharmacodynamic disease…, Pharmaceutical research (2011) | popPK | 8 | [10.1007/s11095-011-0396-7](https://doi.org/10.1007/s11095-011-0396-7) | [21360252](https://pubmed.ncbi.nlm.nih.gov/21360252) | The paper describes a PK/PD model in rats but provides no numeric parameter values in the extracted evidence. |
| `Hsu_2014.pdf` | Hsu LF et al., Evaluation of etanercept dose reduction…, International journal of cl… (2014) | popPK | 6 | [10.5414/CP202131](https://doi.org/10.5414/CP202131) | [24887337](https://pubmed.ncbi.nlm.nih.gov/24887337) | The paper uses a PK model for simulation but the actual numeric parameter values are not present in the provided text. |

<sub>queue written 2026-10-14T22:06:16.879922+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abma_2020 | irrelevant | 0 | 0 | The study investigates the anti-inflammatory effects of Lipoxin A4 on airway hyperreactivity in mice, using etanercept only as a tool compound/inhibitor, and does not report any pharmacokinetic parameters for etanercept. |
| popPK | Breedveld_2018 | relevant | 9 | 2 | The paper describes a PK study with quantitative parameters (Cl/F, V/F, t1/2) in the main text, but the specific numeric values are in Table 3 which is referenced but not included in the evidence. |
| popPK | Carballo_2022 | irrelevant | 0 | 0 | The study assesses clinical efficacy (DAS28 scores) and treatment persistence, containing no pharmacokinetic parameters such as clearance or volume. |
| popPK | Ebina_2025 | irrelevant | 0 | 0 | The study is a clinical outcomes analysis regarding treatment retention and disease activity scores, not a pharmacokinetic study reporting disposition parameters for etanercept. |
| popPK | Hsu_2014 | irrelevant | 6 | 0 | The paper uses a PK model for simulation but the actual numeric parameter values are not present in the provided text. |
| popPK | Hutmacher_2007 | irrelevant | 2 | 0 | The study focuses on an exposure-response (PD) model for efficacy (PASI75) using empirical exposure metrics (AUC, trough) without reporting specific quantitative PK disposition parameters (CL, V, Q) for etanercept. |
| popPK | Leil_2021 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy (DAS28 scores) for rheumatoid arthritis treatments, not a pharmacokinetic study; it reports no disposition parameters (CL, V, t1/2) for etanercept. |
| popPK | Li_2017 | relevant | 8 | 0 | The paper describes a pharmacokinetic model for etanercept, but no quantitative parameter values (CL, V, etc.) are present in the provided evidence, which consists only of the title and abstract. |
| popPK | Lon_2011 | irrelevant | 8 | 0 | The paper describes a PK/PD model in rats but provides no numeric parameter values in the extracted evidence. |
| popPK | Wong_2019 | irrelevant | 2 | 0 | Study is a PK-PD efficacy analysis in rats without extraction of specific quantitative disposition parameters (CL, V, etc.) for etanercept. |
| popPK | van_2022 | irrelevant | 0 | 0 | The study is a real-world cohort analysis comparing clinical efficacy and patient-reported outcomes (well-being, disease activity) of etanercept and adalimumab in juvenile idiopathic arthritis, containing no pharmacokinetic data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 22:06 UTC</sub>
