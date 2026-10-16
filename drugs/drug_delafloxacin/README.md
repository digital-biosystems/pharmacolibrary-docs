<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;delafloxacin&quot;}]"></div>

# delafloxacin

- **generic name:** delafloxacin
- **ATC codes:** `J01MA23`
- **DrugBank:** [DB11943](https://go.drugbank.com/drugs/DB11943) · **PubChem:** [CID 487101](https://pubchem.ncbi.nlm.nih.gov/compound/487101)
- **molar mass:** 440.76 g/mol (C18H12ClF3N4O4) — DrugBank
- **groups:** approved, investigational

## About

Delafloxacin is a fluoroquinolone antibiotic used to treat bacterial infections, including community-acquired infections. It is approved and authorised in the European Union, though it remains a relatively specialised antibacterial rather than a widely used one.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5253067](https://www.wikidata.org/wiki/Q5253067) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:47 | 0:50 | 0/0/0 | 1/1/0 | 0/0/0 | 70,943/1,346 | einfracz / qwen3.8-27b | 18 | 0/18 | 18/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Lepak_2016_CFU](drugs/drug_delafloxacin/pd_Lepak_2016_CFU.md) | organism burden in the lung ← delafloxacin · direct Emax (saturable) effect | — | Lepak AJ et al., In Vivo Pharmacodynamic Target Assessme…, Antimicrobial agents and ch… (2016) | [10.1128/AAC.00647-16](https://doi.org/10.1128/AAC.00647-16) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Alexandre_2025_Totalpop](drugs/drug_delafloxacin/pd_Alexandre_2025_Totalpop.md) | bacterial killing ← delafloxacin · direct Emax (saturable) effect | — | Alexandre K et al., Effect of pH on antimicrobial activity…, Microbiology spectrum (2025) | [10.1128/spectrum.02338-25](https://doi.org/10.1128/spectrum.02338-25) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=delafloxacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` inducer, `CYP2E1` inducer, `CYP3A4` inducer, `UGT1A1` substrate, `UGT1A3` substrate, `UGT2B15` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ABCB5 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 51 matched, 46 returned
- **screened:** 7  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lepak_2016.pdf` | Lepak AJ et al., In Vivo Pharmacodynamic Target Assessme…, Antimicrobial agents and ch… (2016) | popPK | 8 | [10.1128/AAC.00647-16](https://doi.org/10.1128/AAC.00647-16) | [27216072](https://pubmed.ncbi.nlm.nih.gov/27216072) | The paper reports quantitative pharmacokinetic parameters (Cmax, AUC0-∞, and half-life) for delafloxacin in a murine lung infection model. |
| `Bassetti_2017.pdf` | Bassetti M et al., Clinical and pharmacokinetic drug evalu…, Expert opinion on drug meta… (2017) | pd | 5 | [10.1080/17425255.2017.1386654](https://doi.org/10.1080/17425255.2017.1386654) | [28988505](https://www.ncbi.nlm.nih.gov/pubmed/28988505) | metadata signals extractable PD data (PK/PD) |
| `Bauer_2013.pdf` | Bauer J et al., A combined pharmacodynamic quantitative…, Antimicrobial agents and ch… (2013) | pd | 5 | [10.1128/AAC.00181-13](https://doi.org/10.1128/AAC.00181-13) | [23571532](https://www.ncbi.nlm.nih.gov/pubmed/23571532) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-10-14T22:47:51.891062+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbas_2017 | irrelevant | 1 | 0 | This is a narrative review of novel antibiotics that discusses delafloxacin's properties but does not provide original quantitative pharmacokinetic parameter values in the text. |
| popPK | Alexandre_2025 | irrelevant | 1 | 1 | This is an in-vitro pharmacodynamic study of antimicrobial activity (MICs, time-killing) and does not report population-pharmacokinetic parameters (CL, V, Q, ka) for delafloxacin in a biological subject. |
| popPK | Ali_2026 | irrelevant | 0 | 0 | The study is a mechanistic drug repurposing investigation focusing on molecular docking, cell viability, and gene expression, with no pharmacokinetic parameters (CL, V, ka, etc.) reported for delafloxacin. |
| popPK | Avery_2018 | irrelevant | 1 | 0 | This is a review article summarizing efficacy and general PK/PD considerations without reporting original quantitative disposition parameters for delafloxacin. |
| popPK | Bassetti_2017 | irrelevant | 2 | 0 | This is a review article summarizing PK/PD characteristics without providing original quantitative parameter values in the text. |
| popPK | Bassetti_2018 | irrelevant | 2 | 0 | The paper is a narrative review discussing the development and clinical profile of delafloxacin without reporting specific quantitative pharmacokinetic parameter values (CL, V, etc.). |
| popPK | Bassetti_2022 | irrelevant | 0 | 0 | This is a narrative review of MRSA pneumonia treatments and does not report original quantitative pharmacokinetic parameters for delafloxacin. |
| popPK | Bauer_2013 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of antibiotic activity against biofilms and does not report pharmacokinetic parameters for delafloxacin. |
| popPK | Başaran_2025 | irrelevant | 1 | 0 | The paper is a review of resistance mechanisms and general PK/PD characteristics for multiple antibiotics, including delafloxacin, but provides no original quantitative disposition parameters or specific numeric values for delafloxacin. |
| popPK | Boyanov_2025 | irrelevant | 0 | 0 | The paper is a microbiological study on antimicrobial resistance (MICs and genetic mutations) in Streptococcus agalactiae, not a pharmacokinetic study of delafloxacin. |
| popPK | Carcione_2023 | irrelevant | 2 | 2 | The paper is a review that summarizes PK parameters for delafloxacin in a table (half-life, Vd, protein binding) but does not report original quantitative disposition parameters like clearance (CL) or intercompartmental clearance (Q) derived from a compartmental or population-PK model. |
| popPK | Crass_2019 | irrelevant | 0 | 0 | The paper is a regulatory review discussing renal function estimation methods using delafloxacin as an example, without reporting original quantitative PK parameters. |
| popPK | Fu_2024 | irrelevant | 0 | 0 | The paper is a review of antimicrobial pharmacokinetics in the elderly and does not mention delafloxacin or provide specific pharmacokinetic parameters for it. |
| popPK | Gumbo_2020 | irrelevant | 0 | 0 | The study is an in-vitro microbiological investigation of MICs and efficacy against Mycobacterium abscessus, not a pharmacokinetic study of delafloxacin. |
| popPK | Gómez-Zorrilla_2022 | irrelevant | 2 | 0 | This is a narrative review of delafloxacin for pneumonia that discusses PK/PD characteristics qualitatively but does not provide original quantitative population PK parameter values (CL, V, etc.) in the text. |
| popPK | Herbert_2022 | irrelevant | 0 | 0 | The paper is a review of fluoroquinolones for bacterial keratitis that reports MICs and general physicochemical properties (protein binding, solubility) but does not provide quantitative population pharmacokinetic parameters (CL, V, ka) for delafloxacin. |
| popPK | Jorgensen_2018 | relevant | 4 | 8 | The paper is a review that summarizes PK parameters (Vd, T1/2, AUC) for delafloxacin in Table 3, but it does not report clearance (CL) or a population PK model, and the values are adapted from other sources. |
| popPK | Kanesaka_2025 | irrelevant | 0 | 0 | This is a review article discussing combination therapies for gonorrhea and does not report original quantitative pharmacokinetic parameters for delafloxacin. |
| popPK | Kumar_2025 | irrelevant | 0 | 0 | The paper focuses on machine learning and molecular docking for GSK-3β inhibitors in Alzheimer's disease, not the pharmacokinetics of delafloxacin. |
| popPK | Lee_2019 | irrelevant | 2 | 0 | This is a narrative review of efficacy and safety for ABSSSI treatment, and no quantitative pharmacokinetic parameter values (CL, V, etc.) are present in the provided evidence. |
| popPK | Lv_2024 | relevant | 10 | 2 | The paper describes a specific population pharmacokinetic model for delafloxacin with mixed linear and nonlinear clearance, but the quantitative parameter estimates (CL, V, etc.) are explicitly stated to be in Table 2, which is not provided in the evidence. |
| popPK | Nascimben_2025 | irrelevant | 0 | 0 | The paper is a bioinformatics study on bacterial biofilm transcriptomics and contains no pharmacokinetic data for delafloxacin. |
| popPK | Nascimento-Carvalho_2021 | irrelevant | 2 | 0 | The paper is a review discussing clinical efficacy and safety, with no quantitative pharmacokinetic parameter values (CL, V, etc.) provided in the evidence. |
| popPK | Ocheretyaner_2018 | irrelevant | 2 | 0 | The paper is a review article describing the pharmacology and PK of delafloxacin, but the provided evidence contains no quantitative PK parameter values (CL, V, etc.). |
| popPK | Piquart_2026 | irrelevant | 0 | 0 | The study focuses on the in vitro activity and PK/PD modeling of temocillin, with delafloxacin serving only as a comparator for MIC determination. |
| popPK | Saravolatz_2019 | irrelevant | 2 | 0 | This is a review article discussing delafloxacin's pharmacokinetics, but the provided evidence contains no quantitative PK parameter values (CL, V, etc.). |
| popPK | Serra_2022 | irrelevant | 0 | 0 | The paper is a computational drug repurposing study for SARS-CoV-2, and delafloxacin is merely mentioned as a tested compound for antiviral activity, with no pharmacokinetic parameters reported. |
| popPK | Shiu_2019 | irrelevant | 2 | 0 | This is a review article summarizing clinical pharmacology without providing original quantitative compartmental PK parameters (CL, V, Q) or population model estimates. |
| popPK | Sturaro_2026 | irrelevant | 0 | 0 | The study evaluates the safety and efficacy of Cefotaxime and Polymyxin B in mice, with delafloxacin mentioned only as an example of a combination strategy in the introduction and not tested or characterized for pharmacokinetics. |
| popPK | Thabit_2016 | relevant | 8 | 2 | The study reports PK/PD profiling in a murine model, but specific quantitative disposition parameters (CL, V, ka) are not explicitly listed in the provided abstract text, likely residing in the full text or figures. |
| popPK | Van_2015 | irrelevant | 2 | 0 | The text is a qualitative overview of delafloxacin's pharmacology and clinical status without reporting specific quantitative PK parameters (CL, V, ka, etc.). |
| popPK | Vialichka_2022 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment (MICs and time-kill) of delafloxacin against bacteria, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Wiesner_2024 | irrelevant | 2 | 1 | This is a systematic review of food-drug interactions for quinolones; while delafloxacin is mentioned, no specific quantitative PK parameters (CL, V, ka) are reported in the evidence, only qualitative descriptions of bioavailability changes. |
| popPK | Zasheva_2024 | irrelevant | 0 | 0 | The paper is a review of regulatory approval and market access timelines for new antibiotics, containing no pharmacokinetic data or parameter estimates for delafloxacin or any other drug. |
| popPK | Zhao_2019 | irrelevant | 2 | 0 | The study reports pharmacodynamic targets (fAUC/MIC ratios) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for delafloxacin. |
| popPK | Zhao_2021 | irrelevant | 1 | 0 | This is a regulatory review of pharmacometrics in antimicrobial development; delafloxacin is mentioned only as a case study for oral/IV modeling without reporting specific quantitative PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
