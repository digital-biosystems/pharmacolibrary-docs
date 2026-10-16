<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;canakinumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Canakinumab_Huang2023_reference&quot;,&quot;label&quot;:&quot;Huang_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canakinumab/Canakinumab_Huang2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Canakinumab_Urien2013_reference&quot;,&quot;label&quot;:&quot;Urien_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canakinumab/Canakinumab_Urien2013_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Krause_2014_Pflare&quot;,&quot;label&quot;:&quot;Krause_2014 \u00b7 Pflare&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_canakinumab/pd_Krause_2014_Pflare.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# canakinumab

- **generic name:** canakinumab
- **ATC codes:** `L04AC08`
- **DrugBank:** [DB06168](https://go.drugbank.com/drugs/DB06168) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Canakinumab is a monoclonal antibody that blocks interleukin signalling and is used to treat Cryopyrin-Associated Periodic Syndromes and juvenile idiopathic arthritis, with investigational use in gouty arthritis and cardiovascular conditions such as acute coronary syndrome. It is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3655009](https://www.wikidata.org/wiki/Q3655009) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:11 | 9:53 | 2/2/1 | 3/1/0 | 0/0/0 | 585,773/41,681 | einfracz / qwen3.8-27b | 36 | 8/21 | 36/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Huang_2023_reference](drugs/drug_canakinumab/Canakinumab_Huang2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Huang Y et al., Adults on pre-exposure prophylaxis (ten…, Nature communications (2023) | [10.1038/s41467-023-43399-5](https://doi.org/10.1038/s41467-023-43399-5) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.714). Primary extraction retained.">cross-check: partial</span> | [Urien_2013_reference](drugs/drug_canakinumab/Canakinumab_Urien2013_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Urien S et al., Anakinra pharmacokinetics in children a…, BMC pharmacology & toxicolo… (2013) | [10.1186/2050-6511-14-40](https://doi.org/10.1186/2050-6511-14-40) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.20).">human + animal</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Chakraborty_2012_reference](drugs/drug_canakinumab/Canakinumab_Chakraborty2012_reference.md) | — | 2-compartment (no model) | 6 (+5 cov.) | Chakraborty A et al., Pharmacokinetic and pharmacodynamic pro…, Clinical pharmacokinetics (2012) | [10.2165/11599820-000000000-00000](https://doi.org/10.2165/11599820-000000000-00000) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.536). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Ait-Oudhia_2012_reference](drugs/drug_canakinumab/Canakinumab_AitOudhia2012_reference.md) | — | 1-compartment (no model) | 6 | Ait-Oudhia S et al., Bridging Clinical Outcomes of Canakinum…, CPT: pharmacometrics & syst… (2012) | [10.1038/psp.2012.6](https://doi.org/10.1038/psp.2012.6) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Antón_2013_reference](drugs/drug_canakinumab/Canakinumab_Antn2013_reference.md) | — | 1-compartment (no model) | 0 | Antón J et al., PReS-FINAL-2330: Canakinumab treatment…, Pediatric rheumatology onli… (2013) | [10.1186/1546-0096-11-s2-p320](https://doi.org/10.1186/1546-0096-11-s2-p320) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.20).">human + animal</span> | [Chakraborty_2012_total_IL_1](drugs/drug_canakinumab/pd_Chakraborty_2012_total_IL_1.md) | total interleukin-1β ← canakinumab · target-mediated drug disposition | — | Chakraborty A et al., Pharmacokinetic and pharmacodynamic pro…, Clinical pharmacokinetics (2012) | [10.2165/11599820-000000000-00000](https://doi.org/10.2165/11599820-000000000-00000) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Cordeiro-Santanach_2025_IL_6](drugs/drug_canakinumab/pd_Cordeiro_Santanach_2025_IL_6.md) | IL-6 production ← canakinumab · direct sigmoid Emax (Hill) effect | — | Cordeiro-Santanach A et al., The effect of IL-1β inhibitor canakinum…, PloS one (2025) | [10.1371/journal.pone.0316110](https://doi.org/10.1371/journal.pone.0316110) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Krause_2014_Pflare](drugs/drug_canakinumab/pd_Krause_2014_Pflare.md) | probability of a flare in inflammatory symptoms ← canakinumab · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Krause A et al., Visualization and communication of phar…, CPT: pharmacometrics & syst… (2014) | [10.1038/psp.2014.13](https://doi.org/10.1038/psp.2014.13) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Bracis_2026_ACR20](drugs/drug_canakinumab/pd_Bracis_2026_ACR20.md) | ACR20 ← none · direct Emax (saturable) effect | — | Bracis C et al., Model-Based Meta-Analysis With MonolixS…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70158](https://doi.org/10.1002/psp4.70158) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=canakinumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL1B (antibody), IL1B (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 85 matched, 74 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 2  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tajiri_2024.pdf` | Tajiri A et al., Prediction of human serum concentration…, Xenobiotica; the fate of fo… (2024) | popPK | 8 | [10.1080/00498254.2024.2371921](https://doi.org/10.1080/00498254.2024.2371921) | [38977390](https://pubmed.ncbi.nlm.nih.gov/38977390) | The study reports quantitative PK parameters for canakinumab in marmosets and humans, but the specific numeric values are not present in the provided text. |
| `Feist_2018.pdf` | Feist E et al., Efficacy and safety of canakinumab in p…, Clinical and experimental r… (2018) | popPK | 5 | not captured | [29533755](https://pubmed.ncbi.nlm.nih.gov/29533755) | The paper reports on efficacy and exposure-response relationships rather than quantitative population pharmacokinetic model parameters (CL, V, Q, t1/2). |

<sub>queue written 2026-10-14T21:03:43.593824+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelgawwad_2026 | irrelevant | 0 | 0 | The paper is a mechanistic review of MPN thrombosis and inflammation that does not report any pharmacokinetic parameters for canakinumab. |
| popPK | Akay_2026 | irrelevant | 0 | 0 | This is a clinical outcomes study focusing on disease activity and dosing intervals, with no reporting of pharmacokinetic parameters like clearance or half-life. |
| PGx | Alghubayshi_2025 | not_relevant | 0 | 0 | The paper is a bioinformatic drug repurposing study that lists canakinumab as a candidate but does not report pharmacogenomic effects on its PK/PD parameters. |
| popPK | Bracis_2026 | irrelevant | 1 | 0 | The paper is a methodological tutorial on Model-Based Meta-Analysis (MBMA) of pharmacodynamic efficacy (rheumatoid arthritis response) for canakinumab, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Davidson_2022 | irrelevant | 0 | 0 | This is a clinical efficacy review of IL-1 blockers for COVID-19 that reports clinical outcomes (mortality, progression) but contains no pharmacokinetic disposition parameters (CL, V, t1/2). |
| PGx | Deshayes_2018 | not_relevant | 0 | 0 | The paper reports clinical efficacy in a specific disease population (MKD) but does not analyze gene variants or genotypes to determine their effect on canakinumab's PK or PD parameters. |
| popPK | Dua_2015 | irrelevant | 0 | 0 | The paper is a tutorial on Target-Mediated Drug Disposition (TMDD) models and does not report pharmacokinetic parameters for canakinumab. |
| popPK | Dudal_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of QBP359 (an anti-CCL21 antibody), not canakinumab. |
| PGx | Dunger-Baldauf_2022 | not_relevant | 0 | 0 | The paper reports population PK/PD analyses comparing clinical outcomes between systemic juvenile idiopathic arthritis and adult-onset Still's disease populations, but does not analyze the impact of specific gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | EFPIA_2016 | irrelevant | 0 | 0 | The paper is a white paper on Model-Informed Drug Discovery (MID3) practices and does not contain original pharmacokinetic data for canakinumab. |
| popPK | Ericsson_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of AZD5718 and rosuvastatin, with canakinumab mentioned only as a historical comparator in the introduction. |
| PGx | Erkilet_2023 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes in a patient cohort with specific MEFV mutations but does not report any pharmacokinetic (e.g., AUC, Cmax) or quantitative pharmacodynamic changes driven by genetic variants. |
| popPK | Feist_2018 | irrelevant | 5 | 0 | The paper reports on efficacy and exposure-response relationships rather than quantitative population pharmacokinetic model parameters (CL, V, Q, t1/2). |
| popPK | Fiscon_2021 | irrelevant | 0 | 0 | The paper describes a network-based algorithm for drug repurposing and does not report any pharmacokinetic parameters for canakinumab. |
| popPK | Herdiana_2025 | irrelevant | 0 | 0 | The paper is a review of gout arthritis treatment and nanoparticle delivery systems; canakinumab is mentioned only as a therapeutic option, and no pharmacokinetic data are reported. |
| popPK | Hirsch_2022 | irrelevant | 0 | 0 | The paper is a systematic review of SARS-CoV-2 monoclonal antibodies for prophylaxis and does not contain pharmacokinetic data for canakinumab. |
| popPK | Huang_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the HIV monoclonal antibody VRC01, not canakinumab, which is only mentioned in the introduction as a comparator example for drug interactions. |
| popPK | Kramer_2022 | irrelevant | 0 | 0 | The paper is a systematic review of JAK inhibitors for COVID-19 and does not contain pharmacokinetic data for canakinumab. |
| popPK | Krause_2014 | irrelevant | 1 | 0 | The paper is a software tutorial for Berkeley Madonna using a hypothetical anti-IL-1β antibody example, but it does not report quantitative PK parameters for the specific drug canakinumab. |
| popPK | Kuchimanchi_2018 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for evolocumab, not canakinumub. |
| popPK | Kumar_2024 | irrelevant | 0 | 0 | The study develops a population PBPK model for monoclonal antibodies in general (44-46 mAbs) and does not specifically report pharmacokinetic parameters for canakinumab. |
| popPK | Lachmann_2009 | relevant | 7 | 2 | The study uses canakinumab as a PK/PD probe to model IL-1β, describing a two-compartment model with specific PK parameters (ka, CL, V), but the numeric values for these parameters are located in Supplementary Table S2 which is not included in the evidence. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | The paper is a systematic review of the pharmacokinetics of anakinra, not canakinumab. |
| popPK | Liu_2011 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of anakinra in rats, not canakinumab. |
| PGx | Nasonov_2022 | not_relevant | 0 | 0 | The paper is a general review of interleukin-1 in diseases and pharmacotherapy options, and does not report specific pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of canakinumab. |
| PGx | Richette_2014 | not_relevant | 0 | 0 | The paper is a general review of pharmacokinetics for gout treatments and does not report any gene variants or genotypes affecting canakinumab. |
| popPK | Richter_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of an unspecified monoclonal antibody in mice to elucidate FcRn mechanisms, not the specific drug canakinumab. |
| popPK | Robarge_2024 | irrelevant | 2 | 0 | The paper is a cross-species analysis of 25 different monoclonal antibodies to establish rat/monkey prediction models for human PK, and does not report specific PK parameters for canakinumab. |
| PGx | Russwurm_2024 | not_relevant | 0 | 0 | The study reports clinical and renal outcomes (PD/efficacy) of anti-IL-1 therapy but does not report how the CAPS genotype affects the pharmacokinetics or pharmacodynamics of canakinumab itself. |
| popPK | Sobrino_2025 | irrelevant | 0 | 0 | The paper describes a gene therapy trial for sickle cell disease and does not contain pharmacokinetic data for canakinumab. |
| PGx | Srivastava_2026 | not_relevant | 2 | 2 | The text is a review discussing mechanisms and general precision medicine concepts (like CHIP) but does not report specific pharmacogenomic data or fitted effect sizes linking a gene variant to a PK or PD parameter of canakinumab. |
| PGx | Steiner_2023 | not_relevant | 0 | 0 | The paper reports that canakinumab was effective in treating TRAPS patients but does not investigate how a gene variant affects the drug's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Tajiri_2024 | relevant | 8 | 0 | The study reports quantitative PK parameters for canakinumab in marmosets and humans, but the specific numeric values are not present in the provided text. |
| popPK | Urien_2013 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for anakinra, not canakinumab. |
| popPK | Wang_2014 | irrelevant | 0 | 0 | The study focuses on siltuximab and IL-6 in cynomolgus monkeys, not canakinumab. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of firsekibart (anti-IL-1β), not canakinumab (anti-IL-1). |
| PGx | Zhang_2024 | not_relevant | 0 | 0 | The paper describes clinical responses to canakinumab in Yao syndrome patients but does not report pharmacokinetic or pharmacodynamic parameters or genotype-specific PK/PD effects. |
| PGx | Zhang_2026 | not_relevant | 0 | 0 | The study does not report pharmacokinetic or pharmacodynamic parameters of canakinumab; it only mentions its use in refractory cases without any data. |
| popPK | Zheng_2014 | irrelevant | 0 | 0 | The paper is a modeling study using a generic anti-ALK1 antibody to discuss pediatric dosing strategies and does not report pharmacokinetic parameters for canakinumab. |
| PGx | Çağlayan_2026 | not_relevant | 0 | 0 | The study assesses clinical efficacy in patients with specific MEFV mutations but does not report changes in pharmacokinetic or pharmacodynamic parameters driven by gene variants. |
| popPK | Świerczek_2024 | irrelevant | 0 | 0 | This is a general review of pharmacometrics in autoimmune diseases and does not report specific PK parameters for canakinumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 21:03 UTC</sub>
