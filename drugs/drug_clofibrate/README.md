<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;clofibrate&quot;}]"></div>

# clofibrate

- **generic name:** clofibrate
- **ATC codes:** `C10AB01`
- **DrugBank:** [DB00636](https://go.drugbank.com/drugs/DB00636) · **PubChem:** [CID 2796](https://pubchem.ncbi.nlm.nih.gov/compound/2796)
- **molar mass:** 242.699 g/mol (C12H15ClO3) — DrugBank
- **groups:** approved, withdrawn

## About

Clofibrate is a fibrate lipid-lowering drug that was used to treat high blood lipid levels such as hypertriglyceridemia and familial hyperlipidemia, as well as related conditions like arteriosclerosis and coronary artery disease. It has been withdrawn from the market, largely because of concerns about lack of benefit and safety issues including cancer-causing potential.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2701912](https://www.wikidata.org/wiki/Q2701912) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clofibric acid | metabolite | 214.645 | C10H11ClO3 | PubChem | [2797](https://pubchem.ncbi.nlm.nih.gov/compound/2797) | Lücker_1980 |
| etofylline | metabolite | 224.22 | C9H12N4O3 | PubChem | [1892](https://pubchem.ncbi.nlm.nih.gov/compound/1892) | Lücker_1980 |
| etofylline clofibrate | metabolite | 420.85 | C19H21ClN4O5 | PubChem | [41109](https://pubchem.ncbi.nlm.nih.gov/compound/41109) | Lücker_1980 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 1848 ‡ | L/h | 0.44 L·min−1·kg−1 | review reference | rat | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Świerczek_2022_reference](drugs/drug_clofibrate/Clofibrate_wierczek2022_reference.md) |
| V | V/F | 609 ‡ | L | 8.7 L·kg−1 | review reference | rat | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Świerczek_2022_reference](drugs/drug_clofibrate/Clofibrate_wierczek2022_reference.md) |
| ka | kabs | 34.8 | 1/h | 0.58 min−1 | review reference | rat | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Świerczek_2022_reference](drugs/drug_clofibrate/Clofibrate_wierczek2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Not simulated" data-sim="no"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Świerczek_2022_reference](drugs/drug_clofibrate/Clofibrate_wierczek2022_reference.md) | — | 1-compartment (no model) | 3 | Świerczek A et al., Pharmacokinetic/Pharmacodynamic Evaluat…, Pharmaceutics (2022) | [10.3390/pharmaceutics14051090](https://doi.org/10.3390/pharmaceutics14051090) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Lücker_1980_reference](drugs/drug_clofibrate/Clofibrate_Lcker1980_reference.md) | — | general linear (no model) | 0 | Lücker PW et al., [Metabolism and pharmacokinetics of eto…, Arzneimittel-Forschung (1980) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:50 | 17:12 | 1/1/0 | 0/0/0 | 0/0/0 | 269,180/15,619 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 0/7 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 99 matched, 87 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lücker_1980.pdf` | Lücker PW et al., [Metabolism and pharmacokinetics of eto…, Arzneimittel-Forschung (1980) | popPK | 8 | not captured | [7194058](https://pubmed.ncbi.nlm.nih.gov/7194058) | The study reports quantitative pharmacokinetic parameters (half-lives, Cmax) for clofibric acid, the active metabolite of clofibrate, in human volunteers. |
| `Nunes_2005.pdf` | Nunes B et al., Acute toxicity of widely used pharmaceu…, Ecotoxicology and environme… (2005) | pd | 4 | [10.1016/j.ecoenv.2004.08.010](https://doi.org/10.1016/j.ecoenv.2004.08.010) | [15922808](https://www.ncbi.nlm.nih.gov/pubmed/15922808) | metadata signals extractable PD data (IC50) |
| `Coulet_2000.pdf` | Coulet M et al., Evidence for cytochrome P4501A2-mediate…, Chemico-biological interact… (2000) | pgx | 7 | [10.1016/s0009-2797(00)00167-8](https://doi.org/10.1016/s0009-2797(00)00167-8) | [10936227](https://www.ncbi.nlm.nih.gov/pubmed/10936227) | metadata signals extractable PGX data (CYP1A1, PK/PD-context) |
| `Hoque_2015.pdf` | Hoque MT et al., In vivo and ex vivo regulation of breas…, Journal of neurochemistry (2015) | pgx | 7 | [10.1111/jnc.13389](https://doi.org/10.1111/jnc.13389) | [26465636](https://www.ncbi.nlm.nih.gov/pubmed/26465636) | metadata signals extractable PGX data (Abcg2, PK/PD-context) |
| `Jemnitz_2000.pdf` | Jemnitz K et al., Glucuronidation of thyroxine in primary…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [10611137](https://www.ncbi.nlm.nih.gov/pubmed/10611137) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `More_2017.pdf` | More VR et al., PPAR-α, a lipid-sensing transcription f…, Journal of cerebral blood f… (2017) | pgx | 7 | [10.1177/0271678X16650216](https://doi.org/10.1177/0271678X16650216) | [27193034](https://www.ncbi.nlm.nih.gov/pubmed/27193034) | metadata signals extractable PGX data (Abcb1, PK/PD-context) |
| `Osabe_2008.pdf` | Osabe M et al., Expression of hepatic UDP-glucuronosylt…, Drug metabolism and disposi… (2008) | pgx | 7 | [10.1124/dmd.107.017731](https://doi.org/10.1124/dmd.107.017731) | [17967931](https://www.ncbi.nlm.nih.gov/pubmed/17967931) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Takanohashi_2007.pdf` | Takanohashi T et al., Prediction of the metabolic interaction…, Drug metabolism and pharmac… (2007) | pgx | 7 | [10.2133/dmpk.22.409](https://doi.org/10.2133/dmpk.22.409) | [18159128](https://www.ncbi.nlm.nih.gov/pubmed/18159128) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-10-07T11:42:46.098819+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aromataris_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of chloride channel gating, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | The paper describes a machine learning method for identifying synergistic drug combinations in vitro and does not report pharmacokinetic parameters for clofibrate. |
| PGx | Buckley_2009 | not_relevant | 0 | 0 | The paper studies the induction of UGT mRNA expression by various drugs (including clofibrate) in mice, but does not report pharmacokinetic or pharmacodynamic parameters of clofibrate itself, nor does it involve human genetic variants. |
| popPK | Chen_2019 | irrelevant | 0 | 0 | The paper describes a chemical method for radiolabeling aromatic compounds with Fluorine-18 and does not report pharmacokinetic parameters for clofibrate. |
| PGx | Coulet_1998 | not_relevant | 0 | 0 | The paper studies the metabolism of thiabendazole, not clofibrate, and does not report pharmacogenomic effects on clofibrate PK/PD. |
| PGx | Coulet_2000 | not_relevant | 0 | 0 | The paper studies the metabolism of thiabendazole, and clofibrate is only mentioned as a CYP4A inducer used in the experimental setup, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Davila_1999 | not_relevant | 0 | 0 | The paper studies the induction of liver enzymes by clofibrate in rat hepatocytes, not the effect of a gene variant on clofibrate's pharmacokinetics or pharmacodynamics. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper is a risk assessment for perfluoroalkyl substances (PFASs) and does not mention clofibrate or its pharmacokinetics. |
| popPK | EFSA_2023 | irrelevant | 0 | 0 | The paper is a risk assessment of N-nitrosamines in food and does not contain any pharmacokinetic data for clofibrate. |
| PGx | Eghbalian_2022 | not_relevant | 0 | 0 | The paper is a systematic review of clofibrate's efficacy in treating neonatal jaundice and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | The paper is a review of drugs with acute kidney injury potential and does not report pharmacokinetic parameters for clofibrate. |
| PGx | Gerhold_2001 | not_relevant | 0 | 0 | The paper uses clofibrate as a positive control to validate microarray technology for measuring gene expression, but does not report pharmacogenomic effects on clofibrate's PK or PD parameters. |
| popPK | Giral_2007 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity analysis of PPAR agonists and does not report any pharmacokinetic parameters for clofibrate. |
| popPK | Grundy_1972 | irrelevant | 0 | 0 | The study focuses on cholesterol metabolism and sterol balance, not the pharmacokinetic disposition parameters (CL, V, ka) of clofibrate itself. |
| PGx | Hoque_2012 | not_relevant | 0 | 0 | The paper investigates the mechanism of BCRP induction by clofibrate in an in vitro cell model, not the effect of a human gene variant on clofibrate's PK or PD parameters. |
| PGx | Hoque_2015 | not_relevant | 0 | 0 | The study investigates the mechanism of Pparα-mediated regulation of Bcrp by clofibrate in mice, not the effect of a human gene variant on clofibrate's pharmacokinetics or pharmacodynamics. |
| PGx | Ikushiro_1995 | not_relevant | 0 | 0 | The paper studies drug-induced expression of UGT enzymes in rats, not the effect of a gene variant on clofibrate's PK/PD. |
| PGx | Irizar_1995 | not_relevant | 0 | 0 | The paper studies CYP expression in obese rats and mentions clofibrate only as an inducer, not as the drug of interest for which PK/PD parameters are being analyzed in relation to a genetic variant. |
| PGx | Jemnitz_2000 | not_relevant | 0 | 0 | The paper studies the induction of UGT enzymes by clofibrate in rat hepatocytes, not the effect of a gene variant on clofibrate's pharmacokinetics or pharmacodynamics. |
| PGx | Jemnitz_2002 | not_relevant | 0 | 0 | The paper investigates the in vitro induction of UGT1A1 by clofibrate in rat hepatocytes, not the effect of a human gene variant on clofibrate's pharmacokinetics or pharmacodynamics. |
| popPK | Kadyrov_2025 | irrelevant | 0 | 0 | The paper is a clinical chemistry atlas of toxicity in rats and does not report pharmacokinetic parameters for clofibrate. |
| popPK | Laville_2004 | irrelevant | 0 | 0 | The study is an in vitro toxicity assessment measuring cytotoxicity and enzyme activity, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Lee_1998 | not_relevant | 0 | 0 | The paper studies the metabolism of nonylphenol, not clofibrate, and uses clofibrate only as an enzyme inducer in the experimental setup. |
| popPK | Li_2002 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of LY-171883, and clofibrate is only used as a negative control with no pharmacokinetic parameters reported. |
| PGx | Léonard_2006 | not_relevant | 0 | 0 | The study investigates proteomic changes in rat liver induced by clofibrate but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Lötsch_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ibuprofen, not clofibrate. |
| popPK | Mayer_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of beclobrate and its metabolite beclobric acid, not clofibrate. |
| PGx | Miller_1998 | not_relevant | 0 | 0 | The paper is a general review of fibrate pharmacokinetics and does not report any specific gene variants or genotypes affecting clofibrate PK/PD. |
| PGx | More_2017 | not_relevant | 0 | 0 | The paper investigates the mechanism of PPAR-alpha activation by clofibrate on transporters, not the effect of a genetic variant on clofibrate's PK/PD. |
| PGx | Osabe_2008 | not_relevant | 0 | 0 | The paper investigates the effect of diet and clofibrate administration on enzyme expression in rats, but does not report a pharmacogenomic effect (gene variant/genotype) on the PK or PD of clofibrate. |
| popPK | Perlstein_2012 | irrelevant | 0 | 0 | The study focuses on warfarin pharmacogenetics and PK/PD modeling, not clofibrate. |
| PGx | Pyrig_1984 | not_relevant | 0 | 0 | The paper discusses the clinical use of clofibrate for lipid correction in glomerulonephritis but does not report any pharmacogenomic effects or genetic variants influencing its PK/PD. |
| PGx | Rey-Grobellet_1996 | not_relevant | 0 | 0 | The paper studies the metabolism of thiabendazole in rabbits and does not report pharmacogenomic effects on clofibrate PK/PD parameters. |
| popPK | Salman_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pentoxifylline, not clofibrate. |
| PGx | Skene_2001 | not_relevant | 0 | 0 | The paper studies the metabolism of melatonin and uses clofibrate only as a negative control inducer, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Sperry_2023 | irrelevant | 0 | 0 | The paper focuses on statins and COVID-19, with no mention of clofibrate or its pharmacokinetics. |
| PGx | Surry_2000 | not_relevant | 0 | 0 | The paper describes a method for measuring CYP induction in rat hepatocytes and reports Ind50 values for clofibrate, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Takanohashi_2007 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition of nateglinide metabolism by clofibrate) in vitro, not the effect of a gene variant on clofibrate's PK/PD. |
| popPK | Thomson_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lisinopril, not clofibrate. |
| PGx | Uckun_2002 | not_relevant | 0 | 0 | The paper studies the metabolism of the JAK inhibitor JANEX-1, not clofibrate, and does not report pharmacogenomic effects on clofibrate PK/PD. |
| PGx | Wen_2026 | not_relevant | 0 | 0 | The paper identifies clofibrate as a candidate drug for pediatric obstructive sleep-disordered breathing via transcriptomic analysis and molecular docking, but does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Yamazaki_2005 | not_relevant | 0 | 0 | The paper investigates in vitro transporter inhibition by fibrates but does not report any pharmacogenomic effects (gene variants) on the PK or PD of clofibrate. |
| popPK | Świerczek_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of compound 34 (a PDE4/7 inhibitor), not clofibrate. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 11:42 UTC</sub>
