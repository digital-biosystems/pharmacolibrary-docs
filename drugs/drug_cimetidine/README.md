<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;cimetidine&quot;}]"></div>

# cimetidine

- **generic name:** cimetidine
- **ATC codes:** `A02BA01`
- **DrugBank:** [DB00501](https://go.drugbank.com/drugs/DB00501) · **PubChem:** [CID 2756](https://pubchem.ncbi.nlm.nih.gov/compound/2756)
- **molar mass:** 252.339 g/mol (C10H16N6S) — DrugBank
- **groups:** approved, investigational

## About

Cimetidine is an H2-receptor antagonist that reduces stomach acid and is used for acid-related conditions such as gastroesophageal reflux disease, stomach and duodenal ulcers, heartburn, indigestion, and sometimes urticaria. It is an approved medicine, available over the counter and by prescription in many countries, though it is now used less often than newer acid-suppressing drugs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409492](https://www.wikidata.org/wiki/Q409492) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:37 | 3:12 | 0/0/0 | 1/0/0 | 0/0/0 | 328,571/10,925 | einfracz / qwen3.8-27b | 37 | 26/36 | 34/3 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Mody_2022_cell_viability](drugs/drug_cimetidine/pd_Mody_2022_cell_viability.md) | cell viability ← cimetidine · delayed effect through transit (transduction) compartments | — | Mody H et al., Pharmacodynamic Modeling to Evaluate th…, Cells (2022) | [10.3390/cells12010057](https://doi.org/10.3390/cells12010057) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cimetidine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/substrate, `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/substrate, `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inducer/substrate | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor/substrate | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor, `SLC22A7` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor, `CYP3A5` inhibitor, `FMO3` substrate, `SLC22A1` inhibitor/substrate, `SLC22A7` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `CYP3A5` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor/substrate, `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor/substrate, `SLC47A1` inhibitor/substrate, `SLC47A2` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `SLC47A1` inhibitor/substrate | DrugBank actor |
| — | adrenal gland | `CYP11B1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: FMO1 (substrate), HRH2 (target), SLC22A11 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 1048 matched, 221 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_29 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Katrukha_1986.pdf` | Katrukha SP et al., [Cimetidine pharmacokinetics], Farmakologiia i toksikologi… (1986) | popPK | 10 | not captured | [3770173](https://pubmed.ncbi.nlm.nih.gov/3770173) | The text explicitly reports quantitative pharmacokinetic parameters (half-lives, volume of distribution, clearance, bioavailability) for cimetidine in patients. |
| `Smyth_1990.pdf` | Smyth GB et al., Pharmacokinetic studies of cimetidine h…, Equine veterinary journal (1990) | popPK | 10 | [10.1111/j.2042-3306.1990.tb04206.x](https://doi.org/10.1111/j.2042-3306.1990.tb04206.x) | [2298190](https://pubmed.ncbi.nlm.nih.gov/2298190) | The study reports quantitative pharmacokinetic parameters (CL, Vss, Vc, t1/2, absorption extent) for cimetidine in horses with numeric values present in the abstract. |
| `Emami_1986.pdf` | Emami S et al., Desensitization by histamine of H2 rece…, Agents and actions (1986) | pd | 5 | [10.1007/BF01988002](https://doi.org/10.1007/BF01988002) | [2942011](https://www.ncbi.nlm.nih.gov/pubmed/2942011) | metadata signals extractable PD data (EC50) |
| `Gugler_1981.pdf` | Gugler R et al., Cimetidine plasma concentration-respons…, Clinical pharmacology and t… (1981) | pd | 5 | [10.1038/clpt.1981.105](https://doi.org/10.1038/clpt.1981.105) | [7226706](https://www.ncbi.nlm.nih.gov/pubmed/7226706) | metadata signals extractable PD data (sigmoid) |
| `Knop_2015.pdf` | Knop J et al., Renal tubular secretion of pramipexole, European journal of pharmac… (2015) | pd | 5 | [10.1016/j.ejps.2015.09.004](https://doi.org/10.1016/j.ejps.2015.09.004) | [26360835](https://www.ncbi.nlm.nih.gov/pubmed/26360835) | metadata signals extractable PD data (IC50) |
| `Koishikawa_2025.pdf` | Koishikawa T et al., Bridging in vitro and clinical data: Ex…, Drug metabolism and disposi… (2025) | pd | 5 | [10.1016/j.dmd.2025.100087](https://doi.org/10.1016/j.dmd.2025.100087) | [40460516](https://www.ncbi.nlm.nih.gov/pubmed/40460516) | metadata signals extractable PD data (IC50) |
| `Lalonde_1990.pdf` | Lalonde RL et al., Labetalol pharmacokinetics and pharmaco…, Clinical pharmacology and t… (1990) | pd | 5 | [10.1038/clpt.1990.187](https://doi.org/10.1038/clpt.1990.187) | [2225711](https://www.ncbi.nlm.nih.gov/pubmed/2225711) | metadata signals extractable PD data (Emax) |
| `Lee_2015.pdf` | Lee S et al., Ecotoxicological assessment of cimetidi…, Chemosphere (2015) | pd | 5 | [10.1016/j.chemosphere.2015.04.033](https://doi.org/10.1016/j.chemosphere.2015.04.033) | [25957140](https://www.ncbi.nlm.nih.gov/pubmed/25957140) | metadata signals extractable PD data (EC50) |
| `Zhang_2022.pdf` | Zhang X et al., Proton pump inhibitors interfere with t…, Toxicology in vitro : an in… (2022) | pd | 5 | [10.1016/j.tiv.2021.105292](https://doi.org/10.1016/j.tiv.2021.105292) | [34871754](https://www.ncbi.nlm.nih.gov/pubmed/34871754) | metadata signals extractable PD data (IC50) |
| `van_1988.pdf` | van Harten J et al., Pharmacokinetics and hemodynamic effect…, Clinical pharmacology and t… (1988) | pd | 5 | [10.1038/clpt.1988.40](https://doi.org/10.1038/clpt.1988.40) | [3345623](https://www.ncbi.nlm.nih.gov/pubmed/3345623) | metadata signals extractable PD data (sigmoid) |
| `Burgaud_1992.pdf` | Burgaud JL et al., Bronchodilator action of an agonist for…, Lung (1992) | pd | 4 | [10.1007/BF00175981](https://doi.org/10.1007/BF00175981) | [1323735](https://www.ncbi.nlm.nih.gov/pubmed/1323735) | metadata signals extractable PD data (Emax) |
| `Dohlsten_1986.pdf` | Dohlsten M et al., Production and characterization of rabb…, Molecular immunology (1986) | pd | 4 | [10.1016/0161-5890(86)90064-7](https://doi.org/10.1016/0161-5890(86)90064-7) | [3796625](https://www.ncbi.nlm.nih.gov/pubmed/3796625) | metadata signals extractable PD data (IC50) |
| `Gillis_1988.pdf` | Gillis AM et al., Voltage-dependent Vmax blockade in Na+-…, Canadian journal of physiol… (1988) | pd | 4 | [10.1139/y88-211](https://doi.org/10.1139/y88-211) | [2853642](https://www.ncbi.nlm.nih.gov/pubmed/2853642) | metadata signals extractable PD data (IC50) |
| `Harada_1994.pdf` | Harada Y et al., Receptor binding profiles of KB-5492, a…, European journal of pharmac… (1994) | pd | 4 | [10.1016/0014-2999(94)90558-4](https://doi.org/10.1016/0014-2999(94)90558-4) | [8045277](https://www.ncbi.nlm.nih.gov/pubmed/8045277) | metadata signals extractable PD data (IC50) |
| `Jusko_1994.pdf` | Jusko WJ et al., Physiologic indirect response models ch…, Clinical pharmacology and t… (1994) | pd | 4 | [10.1038/clpt.1994.155](https://doi.org/10.1038/clpt.1994.155) | [7955802](https://www.ncbi.nlm.nih.gov/pubmed/7955802) | metadata signals extractable PD data (indirectresponse) |
| `Lanas_1994.pdf` | Lanas AI et al., Effects of cholinergic, histaminergic,…, Scandinavian journal of gas… (1994) | pd | 4 | [10.3109/00365529409092493](https://doi.org/10.3109/00365529409092493) | [7973426](https://www.ncbi.nlm.nih.gov/pubmed/7973426) | metadata signals extractable PD data (EC50) |
| `Larsson_1984.pdf` | Larsson H et al., Effects of omeprazole and cimetidine on…, Digestion (1984) | pd | 4 | [10.1159/000199002](https://doi.org/10.1159/000199002) | [6327439](https://www.ncbi.nlm.nih.gov/pubmed/6327439) | metadata signals extractable PD data (EC50) |
| `Lo_1987.pdf` | Lo WW et al., Histamine stimulates inositol phosphate…, Biochemical and biophysical… (1987) | pd | 4 | [10.1016/0006-291x(87)91074-6](https://doi.org/10.1016/0006-291x(87)91074-6) | [3675593](https://www.ncbi.nlm.nih.gov/pubmed/3675593) | metadata signals extractable PD data (EC50) |
| `Mishra_1994.pdf` | Mishra Y et al., In-vitro interaction between H2 antagon…, The Journal of pharmacy and… (1994) | pd | 4 | [10.1111/j.2042-7158.1994.tb03779.x](https://doi.org/10.1111/j.2042-7158.1994.tb03779.x) | [7913133](https://www.ncbi.nlm.nih.gov/pubmed/7913133) | metadata signals extractable PD data (EC50) |
| `Sanchis_1993.pdf` | Sanchis Closa A et al., Lack of effect of cimetidine on furosem…, International journal of cl… (1993) | pd | 4 | not captured | [8225696](https://www.ncbi.nlm.nih.gov/pubmed/8225696) | metadata signals extractable PD data (Emax) |
| `Westerveld_1995.pdf` | Westerveld GJ et al., Anti-oxidant actions of oxymethazoline…, European journal of pharmac… (1995) | pd | 4 | [10.1016/0922-4106(95)90185-x](https://doi.org/10.1016/0922-4106(95)90185-x) | [8549644](https://www.ncbi.nlm.nih.gov/pubmed/8549644) | metadata signals extractable PD data (IC50) |
| `Arnold_1997.pdf` | Arnold GL et al., Dextromethorphan in nonketotic hypergly…, Journal of inherited metabo… (1997) | pgx | 8 | [10.1023/A:1005301321635](https://doi.org/10.1023/A:1005301321635) | [9061564](https://www.ncbi.nlm.nih.gov/pubmed/9061564) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Furuta_2001.pdf` | Furuta S et al., Inhibition of drug metabolism in human…, Xenobiotica; the fate of fo… (2001) | pgx | 7 | [10.1080/00498250110035615](https://doi.org/10.1080/00498250110035615) | [11334262](https://www.ncbi.nlm.nih.gov/pubmed/11334262) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Hanioka_1998.pdf` | Hanioka N et al., In vitro biotransformation of atrazine…, Chemico-biological interact… (1998) | pgx | 7 | [10.1016/s0009-2797(98)00086-6](https://doi.org/10.1016/s0009-2797(98)00086-6) | [9920461](https://www.ncbi.nlm.nih.gov/pubmed/9920461) | metadata signals extractable PGX data (CYP2B1, PK/PD-context) |
| `Hirota_2001.pdf` | Hirota N et al., In vitro/in vivo scaling of alprazolam…, Biopharmaceutics & drug dis… (2001) | pgx | 7 | [10.1002/bdd.261](https://doi.org/10.1002/bdd.261) | [11745908](https://www.ncbi.nlm.nih.gov/pubmed/11745908) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Maideen_2021.pdf` | Maideen NMP et al., A Review on Pharmacokinetic and Pharmac…, Current drug metabolism (2021) | pgx | 7 | [10.2174/1389200222666210614112529](https://doi.org/10.2174/1389200222666210614112529) | [34182907](https://www.ncbi.nlm.nih.gov/pubmed/34182907) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Nomoto_2005.pdf` | Nomoto M et al., [Inter- and intraindividual pharmacokin…, Rinsho shinkeigaku = Clinic… (2005) | pgx | 7 | not captured | [16447756](https://www.ncbi.nlm.nih.gov/pubmed/16447756) | metadata signals extractable PGX data (COMT, PK/PD-context) |
| `Rao_2007.pdf` | Rao N, The clinical pharmacokinetics of escita…, Clinical pharmacokinetics (2007) | pgx | 7 | [10.2165/00003088-200746040-00002](https://doi.org/10.2165/00003088-200746040-00002) | [17375980](https://www.ncbi.nlm.nih.gov/pubmed/17375980) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `von_1995.pdf` | von Rosensteil NA et al., Macrolide antibacterials. Drug interact…, Drug safety (1995) | pgx | 7 | [10.2165/00002018-199513020-00005](https://doi.org/10.2165/00002018-199513020-00005) | [7576262](https://www.ncbi.nlm.nih.gov/pubmed/7576262) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-15T03:35:23.364428+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abbas_2000 | not_relevant | 0 | 0 | The paper investigates cimetidine as a chemical inhibitor of cilostazol metabolism in vitro, not as a pharmacogenomic variant affecting cimetidine's own PK/PD. |
| PGx | Ailabouni_2024 | not_relevant | 0 | 0 | The paper reports on the pharmacokinetics of metformin, not cimetidine. |
| PGx | Ailabouni_2025 | not_relevant | 1 | 0 | The study reports genetic effects on the PK parameters of metformin (the victim drug) during a cimetidine interaction, not on the PK or PD parameters of cimetidine itself. |
| PGx | Alván_1991 | not_relevant | 0 | 0 | The paper discusses cimetidine only as an inhibitor of the debrisoquine hydroxylase isozyme in the context of its metabolic saturation, not as the substrate undergoing pharmacogenomic changes in PK/PD. |
| PGx | Arnold_1997 | not_relevant | 0 | 0 | The study focuses on the pharmacogenomics of dextromethorphan (CYP2D6), not cimetidine. |
| popPK | Bedarida_1995 | irrelevant | 0 | 0 | The study investigates histamine receptor-mediated vasodilation with cimetidine used only as an H2-receptor antagonist probe, not for pharmacokinetic parameter estimation. |
| popPK | Beukers_1997 | irrelevant | 0 | 0 | The study reports in-vitro receptor binding and functional characterization (Ki values) of cimetidine in insect cells, not pharmacokinetic disposition parameters. |
| PD | Blaber_1985 | not_relevant | 2 | 1 | The paper only qualitatively states that cimetidine did not antagonize histamine-induced bronchoconstriction, without providing numeric dose-response parameters or a concentration-effect curve for cimetidine. |
| popPK | Blandizzi_2001 | irrelevant | 0 | 0 | The study is a pharmacological characterization of H3 receptors in guinea pig ileum using cimetidine only as a non-active comparator H2 antagonist, reporting no pharmacokinetic parameters. |
| PD | Blandizzi_2001 | not_relevant | 0 | 0 | The paper reports that cimetidine had no effect on acetylcholine release and does not provide any numeric PD parameters or concentration-effect data for cimetidine. |
| PGx | Boof_2020 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (pharmacokinetic effect of cimetidine on lucerastat) rather than a pharmacogenomic effect based on genetic variants. |
| popPK | Brussee_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of the drug lucerastat, not cimetidine. |
| PD | Brussee_2026 | not_relevant | 0 | 0 | The paper describes a population pharmacokinetic (PK) model for lucerastat, not cimetidine, and focuses on exposure and dose adaptation based on renal function without reporting any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Burgaud_1992 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | Burgaud_1992 | not_relevant | 0 | 0 | The paper investigates the bronchodilator action of an H3-receptor agonist in guinea pigs and does not mention cimetidine or report any exposure-response or dose-response data for it. |
| popPK | Cetinkaya_2003 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of a transporter (hOCT2) using cimetidine only as an inhibitor probe, not a pharmacokinetic study reporting disposition parameters for cimetidine. |
| PD | Cetinkaya_2003 | not_relevant | 3 | 2 | The paper reports an in vitro IC50 for cimetidine inhibiting a transporter, which is a pharmacological potency parameter, but it does not report a pharmacodynamic exposure-response or dose-response relationship for the drug's clinical effect in a biological system. |
| PD | Chellingsworth_1988 | not_relevant | 1 | 0 | The paper reports PK interactions (AUC/Cmax changes) and a qualitative statement that PD (heart rate) was unchanged, but provides no numeric PD parameters or concentration-effect relationship for cimetidine. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of iohexol and creatinine, not cimetidine. |
| PD | Chen_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of iohexol and creatinine to estimate GFR and renal transporter activity, and does not report any pharmacodynamic or exposure-response relationship for cimetidine. |
| PGx | Chi_2016 | not_relevant | 1 | 0 | The paper focuses on the pharmacokinetics of ethanol and its metabolism by ADH, mentioning cimetidine only as an inhibitor of ADH without analyzing cimetidine's own pharmacokinetic profile or its modification by genetic variants. |
| popPK | Coleman_1999 | irrelevant | 0 | 0 | The study focuses on in vitro enzymatic inhibition of 4-PAPP bioactivation, with cimetidine serving only as a comparative inhibitor rather than the subject of pharmacokinetic analysis. |
| PGx | Curi-Pedrosa_1994 | not_relevant | 0 | 0 | The study evaluates drug-induced changes in CYP450 expression in vitro and does not report a pharmacogenomic effect of a human genetic variant on cimetidine pharmacokinetics. |
| popPK | DAgate_2024 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of aciclovir, not cimetidine. |
| PD | DAgate_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics of aciclovir in neonates and does not report any pharmacodynamic or exposure-response relationship for cimetidine. |
| PGx | Dayer_1989 | not_relevant | 0 | 0 | The paper investigates the metabolism of dextromethorphan and reports cimetidine only as a nonspecific inhibitor of the reaction in vitro, not as the primary drug subject to pharmacogenomic PK/PD analysis. |
| PGx | DeVane_2001 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of quetiapine and mentions only that cimetidine has no effect on it; it does not report pharmacogenomic effects on cimetidine. |
| popPK | Delasoud_2015 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on enzyme kinetics, not a pharmacokinetic study. |
| PGx | Derayea_2019 | not_relevant | 0 | 0 | The paper investigates drug binding to CYP2C19 using spectroscopy and does not report pharmacogenomic effects (gene variants) on cimetidine pharmacokinetics or pharmacodynamics. |
| PD | Desager_1990 | not_relevant | 1 | 0 | The study reports qualitative findings of no significant interaction and an insignificant trend in psychometric tests, but provides no numeric PD parameters or concentration-effect curves. |
| popPK | Dias_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for vildagliptin in rats, using cimetidine only as an internal standard for LC-MS/MS quantification. |
| popPK | Dodeja_2026 | irrelevant | 0 | 0 | The paper is a review of general study designs and modeling approaches for drug secretion in human milk and does not report specific quantitative PK parameters for cimetidine. |
| PD | Dodeja_2026 | not_relevant | 0 | 0 | The paper is a review on pharmacokinetic modeling of drug transfer into human milk and does not report any pharmacodynamic (PD) or exposure-response relationships for cimetidine. |
| PD | Dohlsten_1986 | not_relevant | 2 | 3 | The paper reports an IC50 for cimetidine in an in vitro antibody binding assay, which is a pharmacological binding affinity measurement, not a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect in a biological system. |
| PGx | Drögemöller_2017 | not_relevant | 0 | 0 | The paper investigates the association between SLC16A5 variants and cisplatin-induced ototoxicity, not pharmacokinetic or pharmacodynamic parameters of cimetidine. |
| PD | Ebert_2000 | not_relevant | 0 | 0 | The study reports that cimetidine had no effect on lamotrigine pharmacokinetics and that lamotrigine had no effect on EEG power, providing no numeric PD parameters or exposure-response relationship for cimetidine. |
| popPK | Edvinsson_1990 | irrelevant | 0 | 0 | The study examines cerebrovascular responses to capsaicin, and cimetidine is only mentioned as a non-affecting additive in the tissue bath, with no pharmacokinetic data provided. |
| PD | Edvinsson_1990 | not_relevant | 0 | 0 | The paper studies capsaicin, not cimetidine; cimetidine is only mentioned as an ineffective antagonist in the context of capsaicin's effects. |
| PD | Ellis_1984 | not_relevant | 2 | 1 | The study reports qualitative findings that cimetidine did not affect the pharmacodynamic properties (FEV1 reduction) or plasma levels of atenolol and metoprolol, but it does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for cimetidine. |
| popPK | Emami_1986 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| PD | Emami_1986 | not_relevant | 0 | 0 | The paper studies histamine desensitization in HGT-1 cells and does not report any pharmacodynamic or exposure-response data for cimetidine. |
| popPK | Emami_1986_2 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro assay measuring receptor affinity (Ki) in fetal gastric glands, not pharmacokinetic disposition parameters. |
| PD | Emami_1986_2 | not_relevant | 3 | 2 | The paper reports an in vitro binding affinity (Ki) for cimetidine, which is a pharmacological parameter but not a pharmacodynamic exposure-response or dose-response relationship (e.g., Emax, EC50 of effect) for the drug itself. |
| PGx | Ferguson_2017 | not_relevant | 0 | 0 | The paper discusses the metabolism of voriconazole and mentions cimetidine only as a co-administered drug, providing no data on cimetidine's PK/PD or any pharmacogenomic effects. |
| popPK | Fimbo_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ivermectin, not cimetidine. |
| PD | Fimbo_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for ivermectin, not cimetidine, and contains no pharmacodynamic or exposure-response analysis. |
| PGx | Fink_2023 | not_relevant | 0 | 0 | The paper reports a clinical adverse event (acute dystonia) in CYP2D6 poor metabolizers taking metoclopramide, not a change in cimetidine pharmacokinetics or pharmacodynamics. |
| popPK | Fort_1992 | irrelevant | 0 | 0 | Cimetidine is used only as a P450 inhibitor in an in vitro frog embryo teratogenesis assay, with no pharmacokinetic parameters reported. |
| PD | Fort_1992 | not_relevant | 0 | 0 | The paper focuses on acetaminophen developmental toxicity; cimetidine is only used as a qualitative inhibitor in a metabolic activation system, with no exposure-response or PD parameters reported for it. |
| PGx | Furuta_2001 | not_relevant | 0 | 0 | The study investigates drug-drug interaction inhibition in human liver microsomes, not the effect of genetic variants on cimetidine PK/PD. |
| PGx | Gill_1995 | not_relevant | 0 | 0 | The study focuses on dapsone metabolism and CYP enzyme variability, not cimetidine. |
| popPK | Gillis_1988 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| PD | Gillis_1988 | not_relevant | 0 | 0 | The paper investigates electrophysiological mechanisms of beta-1 and H2 receptor stimulation in myocardium and does not report pharmacokinetic or pharmacodynamic modeling for cimetidine. |
| popPK | Gisselmann_2004 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological characterization of Drosophila histamine receptors where cimetidine is used solely as a pharmacological antagonist, not as a subject drug for PK analysis. |
| PD | Gisselmann_2004 | not_relevant | 3 | 5 | The paper reports in vitro IC50 values for cimetidine blocking histamine-gated chloride channels in Drosophila, which is a pharmacological potency measurement rather than a pharmacodynamic exposure-response or dose-response relationship for the drug in a physiological or clinical context. |
| PGx | Greenblatt_1993 | not_relevant | 0 | 0 | The paper discusses alprazolam pharmacokinetics and notes that CYP3A4 (the enzyme metabolizing it) is not subject to genetic polymorphism; it does not report a pharmacogenomic effect for cimetidine. |
| popPK | Gugler_1981 | irrelevant | 0 | 0 | no_text gate: only 54 chars of text extracted (&lt; 400) |
| PGx | Guo_2021 | not_relevant | 0 | 0 | The paper is a general review of CYP1A2 metabolism and regulation; it mentions cimetidine only as an inhibitor of CYP1A2 activity but does not report how genetic variants affect cimetidine's PK or PD parameters. |
| PGx | Haehner_2004 | not_relevant | 0 | 0 | The paper reports in vitro CYP3A4 inhibition of nifedipine by cimetidine, not a pharmacogenomic effect on the PK/PD of cimetidine. |
| popPK | Hakim_2024 | irrelevant | 0 | 0 | The study investigates pharmacogenetics of metformin in Type 2 diabetes and contains no pharmacokinetic data for cimetidine. |
| PD | Hakim_2024 | not_relevant | 0 | 0 | The paper investigates the association between a genetic polymorphism and clinical response to metformin, not a pharmacodynamic or exposure-response relationship for cimetidine. |
| PGx | Hanioka_1998 | not_relevant | 0 | 0 | The paper studies atrazine metabolism in rats and only mentions cimetidine as an exogenous inhibitor, not the subject of pharmacogenomic analysis. |
| popPK | Hanke_2021 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of rosuvastatin, not cimetidine. |
| PD | Hanke_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) and drug-drug interactions (DDI) of rosuvastatin using PBPK and PopPK models; it does not report any pharmacodynamic (PD) or exposure-response relationships for cimetidine or any other drug. |
| popPK | Harada_1994 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Harada_1994 | not_relevant | 0 | 0 | The paper focuses on the receptor binding profile of KB-5492, not cimetidine, and does not report any pharmacodynamic or exposure-response data for cimetidine. |
| PD | Hazai_2002 | not_relevant | 0 | 0 | The paper states that cimetidine is not able to reduce NAPQI formation and does not provide any numeric PD parameters (e.g., IC50, Emax) or concentration-effect data for cimetidine. |
| PGx | Hernández-Lozano_2021 | not_relevant | 0 | 0 | The study investigates the effect of transporter knockout and drug inhibition on the pharmacokinetics of metoclopramide, not cimetidine; cimetidine was only used as an inhibitor. |
| PGx | Hirota_2001 | not_relevant | 0 | 0 | The paper studies the metabolism of alprazolam, not cimetidine, and uses cimetidine only as a reference inhibitor to validate the pharmacokinetic model. |
| PD | Hoffman_1999 | not_relevant | 3 | 0 | The study reports a qualitative finding that cimetidine did not alter the concentration-effect relationship, but the provided text does not contain numeric PD parameters or data points to derive a curve. |
| popPK | Hosseini_2018 | irrelevant | 0 | 0 | This is a software tool description (gPKPDSim) and does not report original PK parameters for cimetidine. |
| PD | Hosseini_2018 | not_relevant | 0 | 0 | The paper describes a software tool (gPKPDSim) and uses a monoclonal antibody as a case study for PK modeling; it does not report any pharmacodynamic data or exposure-response relationship for cimetidine. |
| popPK | Howden_2025 | irrelevant | 0 | 0 | The study explicitly excludes cimetidine from the analysis and focuses on the relationship between intragastric pH holding time and healing rates, not pharmacokinetic parameters. |
| popPK | Huang_1999 | irrelevant | 0 | 0 | This is a review of the quality and quantity of drug-drug interaction study designs in NDAs, not a primary pharmacokinetic study reporting quantitative parameters for cimetidine. |
| PD | Huang_2009 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for mushroom compounds and only mentions cimetidine as a qualitative comparator, providing no exposure-response or dose-response data for cimetidine itself. |
| PGx | Huang_2009 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of mushroom-derived compounds on CYP enzymes in vitro and mentions cimetidine only as a reference standard, without reporting any gene-variant-dependent PK or PD effects for cimetidine. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper proposes a general methodological framework for drug-drug interactions and does not report quantitative PK parameters for cimetidine. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper focuses on a coupled pharmacokinetic (PK) model for drug-drug interactions (metoprolol and captopril) and does not report any pharmacodynamic (PD) or exposure-response relationships for cimetidine. |
| PD | Ishizaki_1988 | not_relevant | 4 | 2 | The paper reports a significant correlation between enalaprilat concentration and ACE inhibition but does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted dose-response curve, only qualitative statements of similarity between trials. |
| popPK | Itoh_1986 | irrelevant | 2 | 2 | The study focuses on renal tubular transport mechanisms in isolated rat kidneys rather than systemic population pharmacokinetics, and no specific numeric clearance or volume parameters are provided in the evidence. |
| popPK | Izzo_1998 | irrelevant | 0 | 0 | The study is a pharmacological investigation of histamine receptors in guinea pig ileum where cimetidine is used only as a tool antagonist, not as the subject of pharmacokinetic analysis. |
| PGx | Jaiswal_2025 | not_relevant | 0 | 0 | The paper describes PBPK modeling of dordaviprone and its interactions with cimetidine, but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Jansen-Olesen_1997 | irrelevant | 0 | 0 | This is an in-vitro pharmacological and molecular biology study on histamine receptors in human cranial arteries, where cimetidine is used only as a non-pharmacokinetic H2 antagonist probe; no PK parameters are reported. |
| popPK | Jia_2023 | irrelevant | 0 | 0 | The paper is a review of traditional Chinese medications for gastric mucosal injury and contains no pharmacokinetic data for cimetidine. |
| PD | Jia_2023 | not_relevant | 0 | 0 | The paper is a review of traditional Chinese medications for gastric mucosal injury and does not report any pharmacodynamic or exposure-response data for cimetidine. |
| PGx | Jia_2024 | not_relevant | 0 | 0 | The paper is a PBPK modeling study of roflumilast and its drug-drug interactions; it does not report pharmacogenomic effects (gene variants) on cimetidine's PK/PD parameters. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The paper describes a machine learning framework for drug-drug interaction detection and does not contain any pharmacokinetic data or studies for cimetidine. |
| PD | Jia_2026 | not_relevant | 0 | 0 | The paper is a computational study on drug-drug interaction extraction using machine learning and contains no pharmacokinetic or pharmacodynamic data. |
| popPK | Jusko_1994 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Jusko_1994 | not_relevant | 1 | 0 | The text is a generic title or abstract snippet describing physiologic indirect response models in general, without reporting specific data, numeric parameters, or a concentration-effect relationship for cimetidine. |
| PD | Jørgensen_1991 | not_relevant | 1 | 0 | The paper reports qualitative changes in oesophageal pH and motility parameters (mean pH, spikes, MTT) but does not provide numeric PD parameters (Emax, EC50) or an exposure-response relationship. |
| PD | Kamali_1997 | not_relevant | 1 | 0 | The study reports PK changes (AUC/Cmax) and qualitative PD outcomes (BP/HR) but does not provide numeric PD parameters or an exposure-response model for cimetidine. |
| popPK | Kemal_2026 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of nemtabrutinib, not cimetidine, and cimetidine is only mentioned as a class of co-administered acid-reducing agents. |
| PD | Kemal_2026 | not_relevant | 0 | 0 | not captured |
| popPK | Kita_2017 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study of housefly chloride channels where cimetidine is only used as a test inhibitor, not a subject for PK parameter estimation. |
| PD | Kita_2017 | not_relevant | 0 | 0 | The paper reports that cimetidine is a poor inhibitor of histamine-gated chloride channels but provides no numeric PD parameters (e.g., IC50) or concentration-effect data for cimetidine. |
| PD | Klotz_1985 | not_relevant | 1 | 0 | The study reports a PK interaction (increased midazolam concentration) but explicitly states that no change in pharmacodynamic response (sedation/reaction time) was detected, providing no numeric PD parameters or exposure-response relationship. |
| PD | Koishikawa_2025 | not_relevant | 0 | 0 | The paper focuses on dolutegravir's inhibition of OCT2; cimetidine is only mentioned as a secondary example of uptake-time dependency without providing specific numeric PD parameters or a concentration-effect curve for it. |
| popPK | Koo_1983 | irrelevant | 0 | 0 | The study is an in vivo pharmacological receptor characterization (Schild plot) using cimetidine as an antagonist, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Kubacka_1987 | not_relevant | 3 | 2 | The study reports PK changes (AUC, clearance) and qualitative/mean effect changes (glucose/insulin AUC) but does not provide a concentration-effect curve or numeric PD parameters (Emax, EC50) for cimetidine. |
| popPK | Lacruz-Pleguezuelos_2023 | irrelevant | 0 | 0 | This is a database resource paper describing food-drug interactions and does not report any pharmacokinetic parameter values for cimetidine. |
| PD | Lacruz-Pleguezuelos_2023 | not_relevant | 0 | 0 | The paper describes a database of food-drug interactions and does not report any pharmacodynamic or exposure-response analysis for cimetidine. |
| popPK | Lalonde_1990 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Lalonde_1990 | not_relevant | 0 | 0 | The paper focuses on Labetalol, not Cimetidine. |
| popPK | Lanas_1994 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| PD | Lanas_1994 | not_relevant | 0 | 0 | The paper investigates the effects of cholinergic, histaminergic, and peptidergic stimulation on pepsinogen secretion, not the pharmacodynamics of cimetidine. |
| popPK | Larsson_1984 | irrelevant | 0 | 0 | no_text gate: only 148 chars of text extracted (&lt; 400) |
| popPK | Lee_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of histamine signaling in osteosarcoma cells where cimetidine is used only as an antagonist to identify receptor subtype, not for pharmacokinetic parameter estimation. |
| PD | Lee_2001 | not_relevant | 0 | 0 | The paper reports an EC50 for histamine (the agonist), not for cimetidine (the antagonist), and provides no numeric PD parameters or dose-response curve for cimetidine. |
| popPK | Lee_2015 | irrelevant | 0 | 0 | The paper is an ecotoxicological study on aquatic organisms (Daphnia, Moina, Zebrafish) and does not report pharmacokinetic parameters such as clearance or volume of distribution. |
| PGx | Lennard_1986 | not_relevant | 0 | 0 | The paper studies the metabolism of metoprolol, not cimetidine; cimetidine is only mentioned as an inhibitor of metoprolol metabolism. |
| PGx | Leopold_1986 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of bisoprolol, not cimetidine, and explicitly states that bisoprolol's metabolism is insensitive to cimetidine or genetic polymorphisms. |
| PGx | Levy_1995 | not_relevant | 0 | 0 | The paper discusses general CYP450 interactions for phenytoin and carbamazepine but does not report a pharmacogenomic effect (gene variant/genotype) on the PK or PD of cimetidine. |
| PGx | Lewis_1992 | not_relevant | 0 | 0 | The paper studies the metabolism of doxorubicin derivatives (MRA) and identifies CYP3A involvement, but cimetidine is only mentioned as a general CYP inhibitor; there is no analysis of how gene variants affect cimetidine's pharmacokinetics or pharmacodynamics. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The study focuses on venglustat and drug-drug interactions, not cimetidine, and contains no data on gene variants/genotypes affecting cimetidine PK or PD. |
| popPK | Liu_1998 | irrelevant | 0 | 0 | The study is an in vitro investigation of leukotriene receptor antagonists, and cimetidine is used only as a co-administered antihistamine probe without any pharmacokinetic parameters reported. |
| PD | Liu_1998 | not_relevant | 0 | 0 | The paper investigates pranlukast and zafirlukast; cimetidine is only mentioned as a non-inhibitory control without any dose-response analysis or numeric PD parameters. |
| PGx | Liu_2011 | not_relevant | 0 | 0 | The study investigates a drug-herb interaction (Flos carthami and metoprolol), not a pharmacogenomic effect on cimetidine. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The study is a population pharmacokinetic model for escitalopram, not cimetidine. |
| PD | Liu_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for escitalopram, not cimetidine, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Lo_1987 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | Lo_1987 | not_relevant | 0 | 0 | The paper focuses on histamine H1-receptor signaling in endothelial cells and does not mention cimetidine or report any pharmacodynamic parameters for it. |
| popPK | Ma_2023 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for valproic acid, not cimetidine. |
| PD | Ma_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PPK) model for valproic acid, not cimetidine, and contains no pharmacodynamic or exposure-response analysis. |
| PD | Maideen_2021 | not_relevant | 1 | 0 | The paper is a qualitative review of drug interactions and mentions cimetidine only as a CYP inhibitor that increases beta-blocker plasma concentrations, without providing any numeric PD parameters or exposure-response curves. |
| PGx | Maideen_2021 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions between beta-blockers and other agents (like cimetidine), not pharmacogenomic effects on cimetidine. |
| popPK | Marques_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of propranolol and omeprazole, not cimetidine. |
| PD | Marques_2026 | not_relevant | 0 | 0 | The paper focuses on PK modeling (PBPK and popPK) for propranolol and omeprazole, reporting no pharmacodynamic (PD) or exposure-response relationship for cimetidine or any other drug. |
| popPK | Matsumoto_1999 | irrelevant | 0 | 0 | The study investigates histamine receptor modulation of potassium currents in guinea-pig atrial cells using cimetidine only as a non-responding antagonist to distinguish H1 from H2 receptors, providing no pharmacokinetic data. |
| PD | Matsumoto_1999 | not_relevant | 0 | 0 | The paper investigates the pharmacology of histamine on potassium currents; cimetidine is used only as a negative control to demonstrate H1-receptor specificity and no PD parameters are reported for cimetidine. |
| popPK | Mauger_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of [11C]raclopride in rats, using cimetidine only as a co-administered CYP450 inhibitor to modulate raclopride metabolism, rather than modeling cimetidine's disposition. |
| PGx | Mayersohn_1995 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of moclobemide and mentions an interaction with cimetidine, but does not report pharmacogenomic effects (gene variants) on cimetidine's PK or PD. |
| popPK | Medina-Aymerich_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for alfentanil, not cimetidine. |
| PD | Medina-Aymerich_2025 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of alfentanil, not cimetidine, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Mishra_1994 | irrelevant | 0 | 0 | no_text gate: only 58 chars of text extracted (&lt; 400) |
| PD | Mishra_1994 | not_relevant | 0 | 0 | The paper describes an in-vitro interaction study between H2 antagonists and vecuronium, which does not constitute a pharmacodynamic exposure-response or dose-response analysis for cimetidine in a biological system with extractable PD parameters. |
| popPK | Mody_2022 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic modeling study of cimetidine's anticancer effects, not a pharmacokinetic study, and reports no disposition parameters (CL, V, t1/2) for cimetidine. |
| popPK | Murata_1989 | irrelevant | 3 | 0 | The paper focuses on the development of a computer program (MFA-MULTI) and applies it to cimetidine only as a case study to demonstrate the model's capability for double-peak absorption, without providing specific numeric PK parameter values in the text. |
| PD | Mutschler_1984 | not_relevant | 2 | 1 | The study reports qualitative findings that cimetidine did not affect the pharmacodynamic effect (inhibition of exercise-induced tachycardia) of beta-blockers, but it does not provide numeric PD parameters or an exposure-response curve for cimetidine itself. |
| PGx | Nagashima_2005 | not_relevant | 0 | 0 | The study investigates in vitro drug-drug interactions involving cimetidine as an inhibitor of lidocaine metabolism, but does not report any pharmacogenomic effects (gene variants) on cimetidine's PK or PD. |
| PGx | Najibi_2016 | not_relevant | 0 | 0 | The paper investigates the mechanism of trazodone-induced hepatotoxicity using enzyme inhibitors (including cimetidine) but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters of cimetidine or trazodone. |
| popPK | Nieskens_2020 | irrelevant | 0 | 0 | Cimetidine is used only as a pharmacological inhibitor (OCT2 inhibitor) in an in-vitro kidney-on-a-chip toxicity study for cisplatin, with no pharmacokinetic parameters reported for cimetidine itself. |
| PD | Niopas_1999 | not_relevant | 2 | 1 | The study reports a PK interaction (cimetidine increasing R-warfarin levels) but explicitly states that the pharmacodynamic endpoints (prothrombin time, factor-VII) were not significantly affected, and no concentration-effect or dose-response model with numeric PD parameters (Emax, EC50, etc.) is presented. |
| popPK | Nomoto_2005 | irrelevant | 0 | 0 | no_text gate: only 95 chars of text extracted (&lt; 400) |
| PGx | Nomoto_2005 | not_relevant | 0 | 0 | The provided text only contains a title about Parkinson's disease pharmacokinetics and does not mention cimetidine or any specific gene variants affecting its PK/PD. |
| popPK | Okudaira_1989 | irrelevant | 1 | 0 | Study is an isolated perfused rat kidney in-vitro investigation focusing on renal tubular transport mechanics rather than systemic population pharmacokinetic parameters. |
| PGx | Orishiki_1994 | not_relevant | 0 | 0 | The paper studies the effect of cimetidine on CYP2D protein levels and activity (drug-drug interaction/induction mechanism) in rats, not the effect of a genetic variant on cimetidine's pharmacokinetics or pharmacodynamics. |
| popPK | Ottosson_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacology and ligand binding study in guinea-pig brain vessels, not a pharmacokinetic study of cimetidine. |
| PD | Ottosson_1990 | not_relevant | 0 | 0 | The paper reports that cimetidine had no effect on histamine-induced contractions, providing no numeric PD parameters or exposure-response relationship for cimetidine. |
| PGx | Park_2005 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (cimetidine inhibiting omeprazole) in wild-type rats, not the effect of a gene variant/genotype on cimetidine's pharmacokinetics or pharmacodynamics. |
| PGx | Prescott_1983 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (e.g., cimetidine with acetaminophen) but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters of cimetidine. |
| PGx | Rao_2007 | not_relevant | 0 | 0 | The paper reviews the clinical pharmacokinetics of escitalopram and does not report any gene-specific effects on the pharmacokinetics of cimetidine. |
| popPK | Romane_2025 | irrelevant | 0 | 0 | The study is a structural/structural-EM study of the MATE1 transporter where cimetidine serves as an inhibitor ligand, not a PK study reporting cimetidine's own disposition parameters (CL, V, etc.). |
| PGx | Rosell_1995 | not_relevant | 0 | 0 | The study examines p53 and K-ras mutations in relation to paclitaxel efficacy and does not report pharmacogenomic effects on cimetidine. |
| PGx | Royer_1996 | not_relevant | 0 | 0 | The paper investigates the metabolism of docetaxel and paclitaxel, and cimetidine is only tested as an inhibitor; it does not report a pharmacogenomic effect on cimetidine's PK/PD parameters. |
| popPK | Ryu_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the PET radiotracer 18F-FCWAY, with cimetidine used only as a co-administered CYP2E1 inhibitor/comparator agent for which no specific PK parameters are reported. |
| PD | Salonen_1986 | not_relevant | 3 | 2 | The study reports qualitative changes in midazolam PD parameters due to cimetidine interaction but does not provide numeric PD parameters or an explicit concentration-effect model for cimetidine. |
| popPK | Sanchis_1993 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| PD | Sanchis_1993 | not_relevant | 0 | 0 | The paper reports a lack of effect of cimetidine on furosemide kinetics and dynamics, implying no significant PD relationship or numeric PD parameters were derived. |
| PD | Sandborn_1990 | not_relevant | 3 | 2 | The study compares PK and PD endpoints (gastric pH) between IV and oral routes but does not model the concentration-effect relationship or provide numeric PD parameters like Emax or EC50. |
| PGx | Sanderink_1997 | not_relevant | 0 | 0 | The paper focuses on the metabolism of riluzole and does not discuss cimetidine or pharmacogenomic effects on its PK/PD. |
| PGx | Satoh_2000 | not_relevant | 0 | 0 | The paper reports in vitro inhibition of CYP3A4 by cimetidine (IC50), not a pharmacogenomic effect (gene variant impact) on cimetidine's PK or PD parameters. |
| popPK | Schaefer_1995 | irrelevant | 0 | 0 | The paper is a review of quinolone antibiotic development and mentions cimetidine only as a probe drug for interactions, containing no PK parameters for cimetidine. |
| PD | Schwartz_1988 | not_relevant | 3 | 2 | The paper reports qualitative changes in pharmacodynamic responses (heart rate, blood pressure) and PK parameters (clearance) but does not provide a concentration-effect model, Emax/EC50 parameters, or a derivable PD curve for cimetidine. |
| PGx | Senda_1997 | not_relevant | 0 | 0 | The paper investigates the metabolism of brotizolam and lists cimetidine only as a CYP inhibitor used for isoform identification, without reporting any pharmacogenomic effects on cimetidine's PK or PD parameters. |
| popPK | Sharif_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of histamine receptors where cimetidine is used only as a comparative antagonist, with no pharmacokinetic parameters reported. |
| PD | Sharif_1996 | not_relevant | 3 | 4 | The paper reports IC50 values for cimetidine as a weak H2 antagonist in a cellular assay, but this is a pharmacological characterization of receptor subtype involvement rather than a pharmacodynamic exposure-response or dose-response analysis of the drug's therapeutic effect. |
| popPK | Shibasaki_1987 | irrelevant | 0 | 0 | The provided evidence consists only of software metadata (GROBID) and contains no scientific content, pharmacokinetic data, or mention of cimetidine. |
| popPK | Shibasaki_1988 | irrelevant | 0 | 0 | The provided evidence contains only metadata for a software tool (GROBID) and does not include the paper's title, abstract, or content, so no cimetidine pharmacokinetic data is present. |
| popPK | Shibasaki_1989 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding cimetidine pharmacokinetics. |
| popPK | Shibasaki_1989_2 | irrelevant | 0 | 0 | The provided evidence is empty or contains only metadata, with no information about cimetidine or pharmacokinetic parameters. |
| PGx | Shibata_1983 | not_relevant | 0 | 0 | The paper investigates cimetidine polymorphism (crystal forms) and dissolution rates, not pharmacogenomic variants affecting PK/PD parameters. |
| PD | Shin_2023 | not_relevant | 0 | 0 | The paper focuses on flavonoid inhibition of OCT2 and cisplatin cytotoxicity; cimetidine is only mentioned as a substrate, and no PD or exposure-response data for cimetidine are reported. |
| PD | Simons_1996 | not_relevant | 3 | 2 | The paper reports qualitative changes in pharmacodynamic effects (wheal suppression) and pharmacokinetic parameters, but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect relationship. |
| PGx | Spaldin_1994 | not_relevant | 0 | 0 | The paper investigates the in vitro inhibition of tacrine metabolism by cimetidine, not the effect of a gene variant on cimetidine's PK/PD. |
| PGx | Stadel_2008 | not_relevant | 0 | 0 | The study investigates the biochemical binding of [3H]cimetidine to a brain protein and does not assess how genetic variants affect the drug's PK or PD parameters. |
| PD | Staines_2021 | not_relevant | 0 | 0 | The paper reports that cimetidine had no inhibitory effects on PHOSPHO1 activity and does not provide numeric PD parameters (e.g., IC50) or a dose-response curve for cimetidine. |
| popPK | Steudel_1983 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of isosorbide-5-mononitrate, with cimetidine mentioned only as a co-medication that had no observed influence. |
| PGx | Stevens_1993 | not_relevant | 0 | 0 | The paper compares in vitro drug metabolism between human and rhesus monkey species, not pharmacogenomic variations within humans. |
| popPK | Suttle_1992 | irrelevant | 4 | 0 | The paper presents a pharmacokinetic model and mentions fitting cimetidine data, but the specific quantitative parameter values for cimetidine are not present in the provided evidence (likely in figures/tables not included). |
| popPK | Syafhan_2022 | irrelevant | 0 | 0 | The study focuses on metformin pharmacokinetics and adherence in diabetes, not cimetidine. |
| PD | Syafhan_2022 | not_relevant | 0 | 0 | The paper focuses on metformin adherence and PK modeling, not cimetidine, and does not report any pharmacodynamic or exposure-response relationships. |
| PGx | Sztajnkrycer_2003 | not_relevant | 0 | 0 | The study is a preclinical animal model assessing the hepatoprotective effect of cimetidine on pulegone toxicity, with no investigation of genetic variants or their impact on cimetidine's PK or PD parameters. |
| PGx | Takeda_2006 | not_relevant | 0 | 0 | The study investigates the enzyme inhibition of morphine metabolism by ketoconazole and other drugs (including cimetidine) in vitro, but does not report on the pharmacogenomics (gene variants) affecting the PK/PD of cimetidine. |
| popPK | Takita_2020 | irrelevant | 1 | 0 | The study focuses on physiologically-based modeling of creatinine kinetics and drug-creatinine interactions, not on cimetidine's disposition parameters (CL, V, etc.), and no numeric PK values for cimetidine are provided in the evidence. |
| PD | Takita_2020 | not_relevant | 2 | 1 | The paper focuses on physiologically-based pharmacokinetic (PBPK) modeling of creatinine and drug interactions in CKD, using PK models for cimetidine to simulate transporter inhibition, but it does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, IC50) for cimetidine's effect on serum creatinine. |
| popPK | Tamaoki_1991 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of histamine's effect on canine airway epithelium, where cimetidine is used only as a negative control antagonist, and no pharmacokinetic parameters are reported. |
| PD | Tamaoki_1991 | not_relevant | 0 | 0 | The paper studies histamine and azelastine; cimetidine is only mentioned as having no effect, with no PD parameters reported for it. |
| PGx | Tanaka_2006 | not_relevant | 0 | 0 | The paper studies drug-drug interactions affecting ropivacaine metabolism, not pharmacogenomic effects on cimetidine PK/PD. |
| popPK | Tenero_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dilevalol, using cimetidine only as a hepatic enzyme inhibitor comparator, with no PK parameters reported for cimetidine itself. |
| PD | Thijssen_1986 | not_relevant | 0 | 0 | The study reports a lack of effect of cimetidine on the pharmacodynamics of acenocoumarol and does not provide numeric PD parameters or concentration-effect curves for cimetidine. |
| popPK | Tingle_1990 | irrelevant | 0 | 0 | The study investigates dapsone metabolism and toxicity in vitro; cimetidine is used only as a co-administered P450 inhibitor and no PK parameters for cimetidine are reported. |
| popPK | Tingle_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cimetidine's inhibition of dapsone metabolism, not a pharmacokinetic study reporting disposition parameters for cimetidine. |
| popPK | Toda_1987 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of coronary artery responses to vasoactive agents in beagles, where cimetidine is used only as a H2-receptor antagonist to characterize receptor function, not for pharmacokinetic parameter estimation. |
| PD | Toda_1987 | not_relevant | 1 | 0 | The paper mentions cimetidine only qualitatively as an antagonist that attenuates histamine-induced relaxation, without providing any numeric PD parameters (e.g., Ki, IC50) or concentration-effect data for cimetidine itself. |
| PD | Toon_1988 | not_relevant | 0 | 0 | The study reports that cimetidine did not affect the pharmacodynamics of metoprolol and focuses on pharmacokinetic changes (bioavailability), providing no numeric PD parameters or exposure-response relationship for cimetidine. |
| PGx | Tsoutsoulopoulos_2020 | not_relevant | 0 | 0 | The paper studies the toxicity of sulfur mustard and uses cimetidine only as a CYP inhibitor to test mechanistic involvement, rather than reporting a pharmacogenomic effect on cimetidine's PK/PD parameters. |
| popPK | Tumusiime_2025 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for HIV antiretrovirals (cabotegravir and rilpivirine) and does not study cimetidine. |
| PD | Tumusiime_2025 | not_relevant | 0 | 0 | The paper is a clinical trial protocol for cabotegravir and rilpivirine, not cimetidine, and contains no pharmacodynamic or exposure-response analysis. |
| PGx | Uddin_2022 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of dofetilide, mentioning cimetidine only as a known inhibitor of the MATE1 transporter. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper describes drug-drug interactions affecting theophylline clearance and does not report pharmacogenomic effects on cimetidine. |
| popPK | Wang_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation using cimetidine solely as a control H2 antagonist, with no pharmacokinetic parameters reported for cimetidine. |
| PD | Wang_2006 | not_relevant | 0 | 0 | The paper reports that cimetidine had no significant effect on the measured endpoints, providing no numeric PD parameters or dose-response relationship for cimetidine. |
| PGx | Wang_2008 | not_relevant | 0 | 0 | The study investigates the effect of OCT2 polymorphisms on the pharmacokinetics of metformin, using cimetidine only as a transport inhibitor to probe the mechanism, rather than analyzing pharmacogenomic effects on cimetidine's own PK or PD parameters. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of delamanid, not cimetidine, and cimetidine is not mentioned as the subject drug. |
| PD | Wang_2020 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) analysis of delamanid, not cimetidine, and contains no pharmacodynamic or exposure-response modeling. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | Cimetidine is a comparator/co-administered drug in a study of ciclosporin pharmacokinetics, not the subject drug. |
| PD | Wang_2022 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic interaction (cimetidine reduces ciclosporin clearance) and dose recommendations, but does not report a pharmacodynamic (exposure-response or dose-response) relationship or numeric PD parameters for cimetidine. |
| PGx | Wendl_2022 | not_relevant | 0 | 0 | The paper does not report on the pharmacokinetics of cimetidine, but rather uses cimetidine as a perpetrator drug to simulate the pharmacokinetics of finerenone. |
| PD | Westerveld_1995 | not_relevant | 0 | 0 | The paper investigates the antioxidant properties of oxymethazoline and xylomethazoline; cimetidine is only mentioned as a reference compound for rate constants, and no PD or exposure-response relationship for cimetidine is reported. |
| popPK | Xu_2012 | irrelevant | 0 | 0 | Cimetidine is used only as a co-administered pharmacological antagonist (H2 blocker) in an in-vitro ion transport mechanism study, not as the subject drug for PK analysis. |
| PD | Xu_2012 | not_relevant | 0 | 0 | The paper studies emodin, not cimetidine; cimetidine is only used as a qualitative antagonist to block H2 receptors. |
| popPK | Yan_2026 | irrelevant | 0 | 0 | The study focuses on the PBPK modeling of rilzabrutinib, not cimetidine. |
| PD | Yan_2026 | not_relevant | 0 | 0 | The paper focuses on rilzabrutinib; cimetidine is only mentioned as a CYP3A4 inhibitor in DDI simulations, and no PD parameters for cimetidine are reported. |
| PD | Zhang_2007 | not_relevant | 0 | 0 | The paper reports in vitro transporter kinetics (IC50) for MATE1 and MATE2-K, not in vivo pharmacodynamic exposure-response or dose-response relationships for cimetidine. |
| PD | Zhang_2022 | not_relevant | 0 | 0 | The paper reports that cimetidine had no significant effect on RC48ADC activity, but it does not provide numeric PD parameters (e.g., IC50, Emax) or a concentration-effect curve for cimetidine itself. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of olanzapine and its interaction with paroxetine; cimetidine is not the subject drug. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of olanzapine and its interaction with paroxetine; it does not report any pharmacodynamic or exposure-response relationship for cimetidine. |
| PGx | Zhao_1997 | not_relevant | 0 | 0 | The paper reports in vitro CYP3A4 inhibition of quinine metabolism by various drugs, including cimetidine, but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Zhou_2020 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for paclitaxel liposome, while cimetidine is only mentioned as a premedication agent and its PK is not characterized. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of gabapentin, not cimetidine. |
| PGx | Zolk_2009 | not_relevant | 3 | 10 | The paper characterizes the effect of the OCT2 variant on the inhibition of substrate uptake (e.g., propranolol) by cimetidine, rather than reporting a pharmacokinetic or pharmacodynamic parameter change of cimetidine itself. |
| popPK | van_1988 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| PD | van_1988 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetic interaction between nisoldipine and cimetidine, reporting PK parameters (AUC, Cmax, t1/2) and hemodynamic changes, but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., EC50, Emax) for cimetidine. |
| PGx | von_1995 | not_relevant | 0 | 0 | The paper discusses macrolide-drug interactions and mentions cimetidine only as a rare interaction, but does not report any pharmacogenomic effects (gene variants altering PK/PD). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
