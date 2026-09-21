<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;ertugliflozin&quot;}]"></div>

# ertugliflozin

- **generic name:** ertugliflozin
- **ATC codes:** `A10BD23`, `A10BD24`, `A10BK04`
- **DrugBank:** [DB11827](https://go.drugbank.com/drugs/DB11827)
- **groups:** approved, investigational

## About

**Description.** Ertugliflozin is a sodium-dependent glucose cotransporter-2 (SGLT2) inhibitor used to treat type II diabetes mellitus. It works to block glucose reabsorption from the glomerulus.[A31581] 

Ertugliflozin was first approved by the FDA in December 2017.[A261951, L1132] It was also approved by the European Commission in March 2018.[L48621]

**Indication.** Ertugliflozin is indicated as an adjunct to diet and exercise to improve glycemic control in adult patients with type 2 diabetes mellitus (T2DM).[L48466] It is also available in combination with either [metformin] or [sitagliptin].[L1134,L1135]

Ertugliflozin is not recommended for use to improve glycemic control in patients with type 1 diabetes mellitus.[L48466]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 20:40 | 1:58 | 0/0/0 | 0/1/0 | 0/0/1 | 1,784/286 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/2 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Fediuk_2021_3](drugs/drug_ertugliflozin/pd_Fediuk_2021_3_HbA1c.md) | Fediuk (2021) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Fediuk_2021_3](drugs/drug_ertugliflozin/pd_Fediuk_2021_3_UGE24.md) | Fediuk (2021) | — |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **UGT1A9** | `Q27` · CL/F | metabolism | [Fediuk_2021_3](drugs/drug_ertugliflozin/pgx_Fediuk_2021_3_UGT1A9_Q27.md) | Fediuk (2021) | — |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ertugliflozin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | bile duct | <sub>“…ism.[L48466] Several metabolites have been found in plasma, feces, and urine. In plasma, t…”</sub> | prose |
| metabolism | kidney | `UGT1A9` metabolism/substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `UGT1A1` inhibitor, `UGT1A4` inhibitor, `UGT1A9` metabolism/substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` inhibitor, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…d 50.2% of the drug-related radioactivity was eliminated in feces and urine, respectively.…”</sub> | prose |
| excretion | kidney | <sub>“…the drug-related radioactivity was eliminated in feces and urine, respectively. Only 1.5%…”</sub> | prose |
| target | kidney | `SLC5A2` inhibitor | DrugBank actor |

## Coverage

- **PubMed hits:** 34 matched, 34 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dawra_2018.pdf` | Dawra VK et al., Effect of Rifampin on the Pharmacokinet…, Clinical therapeutics (2018) | popPK | 10 | [10.1016/j.clinthera.2018.07.014](https://doi.org/10.1016/j.clinthera.2018.07.014) | [30170758](https://pubmed.ncbi.nlm.nih.gov/30170758) | The title confirms a PK study of ertugliflozin, but the provided evidence contains only the title and no numeric parameter values. |
| `Dawra_2019_2.pdf` | Dawra VK et al., A PK/PD study comparing twice-daily to…, International journal of cl… (2019) | popPK | 10 | [10.5414/CP203343](https://doi.org/10.5414/CP203343) | [30802200](https://pubmed.ncbi.nlm.nih.gov/30802200) | The paper is a PK/PD study of ertugliflozin, but the provided evidence contains only the title and no numeric parameter values. |
| `Fediuk_2021.pdf` | Fediuk DJ et al., Population Pharmacokinetic Model for Er…, Clinical pharmacology in dr… (2021) | popPK | 10 | [10.1002/cpdd.885](https://doi.org/10.1002/cpdd.885) | [33205593](https://pubmed.ncbi.nlm.nih.gov/33205593) | The paper describes a population PK model for ertugliflozin, but the provided evidence contains only qualitative descriptions of covariate effects and no specific numeric parameter values (e.g., CL, V, ka). |
| `Fediuk_2021_2.pdf` | Fediuk DJ et al., Population Pharmacokinetic Analyses of…, Clinical pharmacology in dr… (2021) | popPK | 10 | [10.1002/cpdd.970](https://doi.org/10.1002/cpdd.970) | [34213819](https://pubmed.ncbi.nlm.nih.gov/34213819) | The paper is a population PK study for ertugliflozin, but the evidence only provides relative percentage changes between ethnic groups rather than absolute numeric parameter values (e.g., specific CL or V in L/h or L). |
| `Kirkwood_2026.pdf` | Kirkwood NC et al., Pharmacokinetics of Ertugliflozin, a So…, Veterinary sciences (2026) | popPK | 9 | [10.3390/vetsci13050445](https://doi.org/10.3390/vetsci13050445) | [42188915](https://pubmed.ncbi.nlm.nih.gov/42188915) | The study reports quantitative non-compartmental pharmacokinetic parameters (Tmax, Cmax, T1/2, CL/F) for ertugliflozin in horses, with all numeric values explicitly present in the text. |
| `Li_2021.pdf` | Li Y et al., Pharmacokinetics and Pharmacodynamics o…, Clinical pharmacology in dr… (2021) | popPK | 8 | [10.1002/cpdd.908](https://doi.org/10.1002/cpdd.908) | [33434408](https://pubmed.ncbi.nlm.nih.gov/33434408) | The study reports PK parameters for ertugliflozin, but only provides half-life and exposure ratios, lacking specific numeric values for clearance, volume, or compartmental model parameters. |
| `Dawra_2019.pdf` | Dawra VK et al., A PK/PD study comparing twice-daily to…, International journal of cl… (2019) | pd | 5 | [10.5414/CP203343](https://doi.org/10.5414/CP203343) | [30802200](https://www.ncbi.nlm.nih.gov/pubmed/30802200) | metadata signals extractable PD data (PK/PD) |
| `Yao_2023.pdf` | Yao X et al., A model-based meta analysis study of so…, CPT: pharmacometrics & syst… (2023) | pd | 5 | [10.1002/psp4.12934](https://doi.org/10.1002/psp4.12934) | [36890732](https://www.ncbi.nlm.nih.gov/pubmed/36890732) | metadata signals extractable PD data (PK/PD) |
| `Bansal_2025.pdf` | Bansal N et al., Identification and investigation of hit…, Journal of molecular graphi… (2025) | pd | 4 | [10.1016/j.jmgm.2025.109036](https://doi.org/10.1016/j.jmgm.2025.109036) | [40199086](https://www.ncbi.nlm.nih.gov/pubmed/40199086) | metadata signals extractable PD data (IC50) |
| `Marshall_2021.pdf` | Marshall JC et al., Meta-Analysis of Noncompartmental Pharm…, Journal of clinical pharmac… (2021) | pgx | 8 | [10.1002/jcph.1866](https://doi.org/10.1002/jcph.1866) | [33813736](https://www.ncbi.nlm.nih.gov/pubmed/33813736) | metadata signals extractable PGX data (UGT1A9, PK/PD-context) |
| `Lapham_2020.pdf` | Lapham K et al., In Vitro Characterization of Ertugliflo…, Drug metabolism and disposi… (2020) | pgx | 7 | [10.1124/dmd.120.000171](https://doi.org/10.1124/dmd.120.000171) | [33020067](https://www.ncbi.nlm.nih.gov/pubmed/33020067) | metadata signals extractable PGX data (UGT1A9, PK/PD-context) |

<sub>queue written 2026-09-15T20:40:05.424620+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bansal_2025 | irrelevant | 0 | 0 | The paper focuses on drug repurposing for Alzheimer's disease targeting NMDA receptors and does not report pharmacokinetic parameters for ertugliflozin. |
| PD | Bansal_2025 | not_relevant | 0 | 0 | The paper focuses on drug repurposing for Alzheimer's disease targeting NMDA receptors and does not contain any pharmacodynamic or exposure-response data for ertugliflozin. |
| popPK | Cherney_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting renal function (eGFR) and albuminuria outcomes, not a pharmacokinetic study with disposition parameters like clearance or volume. |
| PD | Cherney_2020 | not_relevant | 3 | 2 | The paper reports clinical trial outcomes (eGFR, UACR) by fixed dose groups (5 mg vs 15 mg) over time, but does not provide exposure data (plasma concentrations) or fit a pharmacodynamic model (e.g., Emax, EC50) to derive numeric PD parameters. |
| popPK | Dawra_2018 | relevant | 10 | 0 | The title confirms a PK study of ertugliflozin, but the provided evidence contains only the title and no numeric parameter values. |
| PD | Dawra_2018 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetic interaction between rifampin and ertugliflozin, reporting PK parameters (AUC, Cmax, etc.) without providing any pharmacodynamic or exposure-response analysis. |
| PGx | Dawra_2018 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (rifampin) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Dawra_2019 | irrelevant | 2 | 0 | The study is a drug interaction assessment reporting only relative changes (AUC/Cmax ratios) rather than absolute quantitative disposition parameters (CL, V, ka) for ertugliflozin. |
| popPK | Dawra_2019_2 | relevant | 10 | 0 | The paper is a PK/PD study of ertugliflozin, but the provided evidence contains only the title and no numeric parameter values. |
| PD | Dawra_2019_2 | not_relevant | 0 | 0 | The provided text is only the title of the study and does not contain the full text, results, or any numeric PD parameters or curves. |
| popPK | Donnan_2018 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis of clinical outcomes (urinary tract infections) and does not report any pharmacokinetic parameters for ertugliflozin. |
| PD | Donnan_2018 | not_relevant | 2 | 1 | The paper is a network meta-analysis of clinical trial outcomes (UTI risk) comparing different dose levels, but it does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50) for ertugliflozin. |
| popPK | Fediuk_2021 | relevant | 10 | 0 | The paper describes a population PK model for ertugliflozin, but the provided evidence contains only qualitative descriptions of covariate effects and no specific numeric parameter values (e.g., CL, V, ka). |
| popPK | Fediuk_2021_2 | relevant | 10 | 2 | The paper is a population PK study for ertugliflozin, but the evidence only provides relative percentage changes between ethnic groups rather than absolute numeric parameter values (e.g., specific CL or V in L/h or L). |
| popPK | Fediuk_2021_3 | irrelevant | 2 | 1 | The paper is a review of Model-Informed Drug Development (MIDD) that summarizes PK findings (e.g., half-life, dose proportionality) but does not report original quantitative compartmental PK parameters (CL, V, Q, ka) or population model parameter estimates for ertugliflozin. |
| popPK | Gomes_2026 | irrelevant | 1 | 0 | The paper is a scoping review that qualitatively summarizes the effects of rifampicin on ertugliflozin without reporting original quantitative pharmacokinetic parameter values. |
| PD | Gomes_2026 | not_relevant | 1 | 0 | The paper is a scoping review that qualitatively summarizes PK effects of rifampicin on ertugliflozin but does not report or provide access to numeric PD parameters or concentration-effect curves. |
| popPK | Gumieniczek_2024 | irrelevant | 1 | 0 | The study focuses on lipophilicity analysis (chromatographic/computational) and only mentions PK parameters like clearance and volume in the context of correlation with lipophilicity, without reporting original quantitative PK model parameters for ertugliflozin. |
| PD | Gumieniczek_2024 | not_relevant | 1 | 0 | The paper analyzes lipophilicity and correlates it with static properties like IC50, but does not report an exposure-response or dose-response relationship with numeric PD parameters. |
| PD | Kirkwood_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics of ertugliflozin in horses and does not report any pharmacodynamic or exposure-response analysis. |
| PGx | Lapham_2020 | not_relevant | 0 | 0 | The paper characterizes in vitro enzyme kinetics and fractional metabolism of ertugliflozin but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Li_2021 | relevant | 8 | 2 | The study reports PK parameters for ertugliflozin, but only provides half-life and exposure ratios, lacking specific numeric values for clearance, volume, or compartmental model parameters. |
| popPK | Lloyd_2025 | irrelevant | 0 | 0 | The paper is a computational structural study (docking/MD) of SGLT2 binding and does not report any pharmacokinetic parameters for ertugliflozin. |
| PD | Lloyd_2025 | not_relevant | 0 | 0 | The paper is a computational structural bioinformatics study (docking and molecular dynamics) investigating potential polypharmacy interactions at the SGLT2 binding site; it does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for ertugliflozin. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (weight loss Emax and ET50) rather than pharmacokinetic disposition parameters (CL, V, ka, etc.) for ertugliflozin. |
| popPK | Yao_2023 | irrelevant | 0 | 0 | The provided evidence contains only the title of a meta-analysis and lacks any specific quantitative pharmacokinetic parameters or data for ertugliflozin. |
| PD | Yao_2023 | not_relevant | 0 | 0 | The provided text is only the title of a meta-analysis and does not contain the full text, data, or specific numeric PD parameters for ertugliflozin. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ertugliflozin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
