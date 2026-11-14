<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Teniposide&quot;}]"></div>

# Teniposide

- **generic name:** Teniposide
- **T3DB:** [T3D4715](http://www.t3db.ca/toxins/T3D4715) · **DrugBank:** [DB00444](https://go.drugbank.com/drugs/DB00444) · **PubChem:** [CID 34698](https://pubchem.ncbi.nlm.nih.gov/compound/34698)
- **groups:** approved, investigational

## About

A semisynthetic derivative of podophyllotoxin that exhibits antitumor activity. Teniposide inhibits DNA synthesis by forming a complex with topoisomerase II and DNA. This complex induces breaks in double stranded DNA and prevents repair by topoisomerase II binding. …

- **Category:** Drug, Synthetic Toxin
- **Sources and uses:** Teniposide is used for the treatment of refractory acute lymphoblastic leukaemia
- **Mechanism of toxicity:** The mechanism of action appears to be related to the inhibition of type II topoisomerase activity since teniposide does not intercalate into DNA or bind strongly to DNA. Teniposide binds to and inhibits DNA topoisomerase II. …
- **Carcinogenicity:** IARC group 2A, probably carcinogenic to humans.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4715">T3DB T3D4715</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 29767-20-2 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:75988">ChEBI 75988</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| teniposide | parent | 656.7 | C32H32O13S | PubChem | [34698](https://pubchem.ncbi.nlm.nih.gov/compound/34698) | Canal_1985, Evans_1982, Rodman_1993 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Evans_1982_reference](drugs/toxin_teniposide/Teniposide_Evans1982_reference.md) | held back | 1-compartment, IV | 2 | Evans WE et al., Pharmacokinetics of Teniposide (VM26) a…, Cancer chemotherapy and pha… (1982) | [10.1007/BF00254537](https://doi.org/10.1007/BF00254537) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [Canal_1985_reference](drugs/toxin_teniposide/Teniposide_Canal1985_reference.md) | — | 1-compartment (no model) | 1 | Canal P et al., Pharmacokinetics of teniposide (VM 26)…, Cancer chemotherapy and pha… (1985) | [10.1007/BF00257526](https://doi.org/10.1007/BF00257526) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Petros_1991_reference](drugs/toxin_teniposide/Teniposide_Petros1991_reference.md) | — | 1-compartment (no model) | 0 | Petros WP et al., Pharmacokinetics of continuous-infusion…, Cancer chemotherapy and pha… (1991) | [10.1007/BF00688865](https://doi.org/10.1007/BF00688865) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Rodman_1993_reference](drugs/toxin_teniposide/Teniposide_Rodman1993_reference.md) | — | 1-compartment (no model) | 1 | Rodman JH et al., Escalating teniposide systemic exposure…, Journal of clinical oncolog… (1993) | [10.1200/JCO.1993.11.2.287](https://doi.org/10.1200/JCO.1993.11.2.287) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=teniposide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` substrate | DrugBank actor |
| distribution | testis | `ABCG2` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C9` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | `ABCG2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC6 (substrate), TOP2A (inhibitor), TOP2B (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 00:45 | 11:23 | 1/3/0 | 0/0/0 | 0/0/0 | 246,750/27,319 | ollama / glm-5.3-flash | 4 | 0/3 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 139 matched, 104 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 4  ·  extracted 0  ·  needs review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_13 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Evans_1982.pdf` | Evans WE et al., Pharmacokinetics of Teniposide (VM26) a…, Cancer chemotherapy and pha… (1982) | popPK | 10 | [10.1007/BF00254537](https://doi.org/10.1007/BF00254537) | [7083455](https://pubmed.ncbi.nlm.nih.gov/7083455) | Reports numeric teniposide clearance (5.2 ± 1.0 ml/min/m2) and distribution volumes directly in the abstract. |
| `Petros_1991.pdf` | Petros WP et al., Pharmacokinetics of continuous-infusion…, Cancer chemotherapy and pha… (1991) | popPK | 9 | [10.1007/BF00688865](https://doi.org/10.1007/BF00688865) | [1999001](https://pubmed.ncbi.nlm.nih.gov/1999001) | Teniposide clearance, steady-state concentrations, and systemic exposure were determined in 28 pediatric patients; abstract gives median concentration (11.9 µg/ml) but full numeric clearance values may be in tables not shown. |
| `Canal_1985.pdf` | Canal P et al., Pharmacokinetics of teniposide (VM 26)…, Cancer chemotherapy and pha… (1985) | popPK | 8 | [10.1007/BF00257526](https://doi.org/10.1007/BF00257526) | [4017164](https://pubmed.ncbi.nlm.nih.gov/4017164) | Human PK study of teniposide with clearance and AUC values summarized in text, though some parameters (half-lives, Vd) may only be in tables not fully shown. |
| `Gigante_1995.pdf` | Gigante M et al., Effect of cyclosporine on teniposide ph…, Anti-cancer drugs (1995) | popPK | 8 | [10.1097/00001813-199506000-00019](https://doi.org/10.1097/00001813-199506000-00019) | [7670149](https://pubmed.ncbi.nlm.nih.gov/7670149) | Teniposide pharmacokinetics (AUC with/without CsA) are reported for human cancer patients, but the evidence shows only the average % change (41%), not the actual numeric AUC values, which likely reside in tables/figures not provided. |
| `Montaldo_1990.pdf` | Montaldo PG et al., Pharmacokinetics of intrapleural versus…, Oncology (1990) | popPK | 8 | [10.1159/000226785](https://doi.org/10.1159/000226785) | [2300386](https://pubmed.ncbi.nlm.nih.gov/2300386) | Human pharmacokinetic study of teniposide after intrapleural and IV administration, but the abstract only describes concentrations qualitatively — numeric parameter values are not present in the evidence provided. |
| `Rodman_1990.pdf` | Rodman JH et al., Pharmacokinetics of continuous infusion…, Cancer research (1990) | popPK | 8 |  | [2194652](https://pubmed.ncbi.nlm.nih.gov/2194652) | A pharmacokinetic study of teniposide in pediatric leukemia patients, but the abstract gives no numeric teniposide parameter values (clearance, half-life, etc. appear to be in the full paper/figures not provided here). |
| `Rodman_1993.pdf` | Rodman JH et al., Escalating teniposide systemic exposure…, Journal of clinical oncolog… (1993) | popPK | 8 | [10.1200/JCO.1993.11.2.287](https://doi.org/10.1200/JCO.1993.11.2.287) | [8426206](https://pubmed.ncbi.nlm.nih.gov/8426206) | Reports numeric teniposide clearance values (3.7–21.6 mL/min/m²) and pharmacokinetic modeling in the evidence text itself, not supplementary material. |
| `Chatelut_1991.pdf` | Chatelut E et al., Teniposide and cisplatin given by intra…, Annals of oncology : offici… (1991) | popPK | 7 | [10.1093/oxfordjournals.annonc.a057910](https://doi.org/10.1093/oxfordjournals.annonc.a057910) | [2043492](https://pubmed.ncbi.nlm.nih.gov/2043492) | Phase I pharmacokinetic study of teniposide in humans, but the actual numeric parameter values are not provided in the abstract. |
| `Evans_1998.pdf` | Evans WE et al., Conventional compared with individualiz…, The New England journal of… (1998) | popPK | 7 | [10.1056/NEJM199802193380803](https://doi.org/10.1056/NEJM199802193380803) | [9468466](https://pubmed.ncbi.nlm.nih.gov/9468466) | Teniposide clearance rates were measured in each patient for dose individualization, but no numeric clearance values for teniposide appear in the abstract text. |
| `Figoli_1987.pdf` | Figoli F et al., Pharmacokinetics of VM 26 given intrape…, Cancer chemotherapy and pha… (1987) | popPK | 7 | [10.1007/BF00570493](https://doi.org/10.1007/BF00570493) | [2824081](https://pubmed.ncbi.nlm.nih.gov/2824081) | Human PK of teniposide (AUC ratios, absorption, levels) is reported, but numeric parameter values (t½, clearance, AUC values) appear in figures/tables not included in the abstract evidence. |
| `McLeod_1992.pdf` | McLeod HL et al., Disposition of antineoplastic agents in…, The British journal of canc… (1992) | popPK | 6 |  | [1503923](https://pubmed.ncbi.nlm.nih.gov/1503923) | Teniposide systemic clearance and terminal half-life in children/infants are reported, but no numeric values for teniposide appear in the abstract (only comparative statements); values likely in tables/full text not provided. |
| `Stewart_1993.pdf` | Stewart DJ et al., Human autopsy tissue distribution of th…, Cancer chemotherapy and pha… (1993) | popPK | 6 | [10.1007/BF00735921](https://doi.org/10.1007/BF00735921) | [8339387](https://pubmed.ncbi.nlm.nih.gov/8339387) | Reports human tissue concentrations of teniposide at post-dose autopsy times, but actual numeric concentration values are not present in the abstract; only dose and day ranges are given. |
| `van_1997.pdf` | van Tellingen O et al., The vascular compartment hampers accura…, Cancer chemotherapy and pha… (1997) | popPK | 5 | [10.1007/s002800050665](https://doi.org/10.1007/s002800050665) | [9225951](https://pubmed.ncbi.nlm.nih.gov/9225951) | Reports teniposide brain-tumor tissue uptake (0.15-0.27 µg/g) with plasma level (~0.20 µg/ml) at 24 h, deriving a rough tissue:plasma penetration, but only few numeric values and no fitted kinetic parameters. |

<sub>queue written 2026-11-13 00:42 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allen_1975 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PGx | Allen_2003 | not_relevant | 4 | 6 | Etoposide-focused in vitro/mouse transporter study; teniposide only tested as resistance substrate in vitro, no genetic variant-PK/PD effect for teniposide. |
| PGx | Bao_2025 | not_relevant | 1 | 2 | Teniposide is only listed as a predicted potential drug from GDSC/CTRP screening; no gene variant effect on teniposide PK/PD parameters is reported. |
| PGx | Baumhäkel_2001 | not_relevant | 0 | 0 | In vitro drug-drug interaction study of CYP3A4 inhibition; no genetic variant/genotype effect on teniposide PK/PD reported. |
| popPK | Blanco_2000 | relevant | 4 | 2 | Teniposide microsomal metabolism (a kinetic parameter of teniposide's own biotransformation) was assayed in human liver microsomes, but only P-values appear in the text — no numeric Vmax values are provided, likely residing in figures/tables not included. |
| PGx | Blanco_2000 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype is studied; only age effects on CYP activity toward teniposide are reported. |
| popPK | Bénit_2016 | relevant | 3 | 3 | A review reporting ~2- to 3-fold faster clearance of teniposide with EIAEDs, but only summary fold-changes appear, with no specific numeric half-life, clearance or volume values in the provided text. |
| popPK | Canetta_1982 | irrelevant | 1 | 0 | This is a review/overview mentioning teniposide pharmacokinetics in general terms with no numeric kinetic parameters, and the values are not present in the evidence. |
| popPK | Chatelut_1989 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| popPK | Chatelut_1991 | relevant | 7 | 3 | Phase I pharmacokinetic study of teniposide in humans, but the actual numeric parameter values are not provided in the abstract. |
| popPK | Clark_1992 | irrelevant | 2 | 1 | This is a narrative review of etoposide/teniposide clinical pharmacology with essentially no new numeric kinetic parameters of its own; only rounded percentages (10–25% excretion/metabolism for teniposide) appear, and most discussion centers on etoposide. |
| PGx | De_1990 | not_relevant | 5 | 6 | Cell-line resistance model showing altered teniposide-induced topoisomerase II DNA cleavage; no germline gene variant/genotype effect on PK or PD parameter of teniposide in patients. |
| popPK | Estlin_2001 | irrelevant | 3 | 0 | Only a passing mention of interpatient PK variation of teniposide; no numeric kinetic parameters appear, and any values would be in cited literature. |
| popPK | Evans_1998 | relevant | 7 | 4 | Teniposide clearance rates were measured in each patient for dose individualization, but no numeric clearance values for teniposide appear in the abstract text. |
| popPK | Figoli_1987 | relevant | 7 | 3 | Human PK of teniposide (AUC ratios, absorption, levels) is reported, but numeric parameter values (t½, clearance, AUC values) appear in figures/tables not included in the abstract evidence. |
| popPK | Gigante_1995 | relevant | 8 | 4 | Teniposide pharmacokinetics (AUC with/without CsA) are reported for human cancer patients, but the evidence shows only the average % change (41%), not the actual numeric AUC values, which likely reside in tables/figures not provided. |
| popPK | Groninger_2004 | irrelevant | 2 | 1 | This is a review of paediatric pharmacokinetics with no numeric teniposide kinetic parameters provided in the evidence. |
| popPK | Hartmann_2006 | irrelevant | 2 | 1 | A narrative review with no numeric kinetic parameters for teniposide reported in the evidence. |
| popPK | Hussner_2015 | irrelevant | 3 | 1 | Teniposide appears only as an uptake substrate/candidate drug identified via OATP2B1, with no quantitative kinetic parameters and likely no numeric values in the evidence. |
| popPK | Jankowski_1977 | irrelevant | 0 | 0 | This is an in vitro chemo-sensitivity culture study with no quantitative kinetic parameters for teniposide (VM-26). |
| PGx | Karadeniz_2015 | not_relevant | 0 | 0 | Paper studies plant extract cytotoxicity in MDR cell lines; teniposide only mentioned as historical background, no gene-variant PK/PD effect reported. |
| popPK | Kumawat_2025 | irrelevant | 0 | 0 | Teniposide appears only as a docking reference; no kinetic parameters of any kind are reported. |
| PGx | Luo_2023 | not_relevant | 1 | 1 | Teniposide only appears as a predicted drug candidate from pharmacogenomic screening; no gene-variant effect on a PK/PD parameter is reported. |
| popPK | Masson_1997 | irrelevant | 1 | 0 | A narrative review merely mentioning teniposide as a candidate for dose individualisation, with no numeric kinetic parameters for it. |
| PGx | Masson_1997 | not_relevant | 2 | 0 | Teniposide only mentioned as a candidate for PK-based individualisation; no gene variant–PK/PD effect reported. |
| popPK | McLeod_1992 | relevant | 6 | 2 | Teniposide systemic clearance and terminal half-life in children/infants are reported, but no numeric values for teniposide appear in the abstract (only comparative statements); values likely in tables/full text not provided. |
| popPK | McLeod_1998 | irrelevant | 1 | 0 | Review mentioning teniposide clearance changes qualitatively; no numeric kinetic values present. |
| popPK | Meyer-Almes_2020 | irrelevant | 0 | 0 | Teniposide appears only as a docking hit in a virtual screening study of SARS-CoV-2 3CLpro inhibitors; no kinetic parameters of any kind. |
| popPK | Montaldo_1990 | relevant | 8 | 2 | Human pharmacokinetic study of teniposide after intrapleural and IV administration, but the abstract only describes concentrations qualitatively — numeric parameter values are not present in the evidence provided. |
| PGx | Pang_2001 | not_relevant | 2 | 1 | Teniposide is only used as an internal standard in an analytical assay for etoposide; no pharmacogenomic PK/PD effect for teniposide is reported. |
| popPK | Pui_1999 | irrelevant | 3 | 1 | This is an outcome/prognosis study; teniposide pharmacokinetics are mentioned only as sex-comparison results with no numeric kinetic parameters (clearance, half-life, Vd) reported. |
| PGx | Rameika_2025 | not_relevant | 5 | 3 | Only a qualitative statement that rapid NAT2 allele cell lines show increased teniposide toxicity; no PK/PD parameter or fitted effect size reported in the abstract. |
| popPK | Reitman_1990 | irrelevant | 0 | 0 | Teniposide is used only as a topoisomerase II cleavage reagent in a chromatin study, with no kinetic parameters reported. |
| PGx | Relling_1990 | not_relevant | 2 | 2 | Teniposide appears only as an in vitro inhibitor of CYP2C-mediated reactions; no gene variant effect on teniposide PK/PD is reported. |
| popPK | Relling_1993 | irrelevant | 4 | 3 | Teniposide pharmacokinetics were characterized but the abstract reports only antiemetic outcomes and cytarabine concentration; no numeric teniposide kinetic values appear here. |
| PGx | Relling_1994 | not_relevant | 3 | 5 | Identifies CYP3A4-mediated metabolism of teniposide via enzyme activity/inhibition correlations, but reports no gene variant/genotype effect on a PK/PD parameter. |
| PGx | Relling_1999 | not_relevant | 1 | 5 | The pharmacogenomic effects (TPMT on thioguanine nucleotides and 6-MP dosing) pertain to mercaptopurine, not teniposide, which is only mentioned as background combination therapy. |
| popPK | Rodman_1990 | relevant | 8 | 3 | A pharmacokinetic study of teniposide in pediatric leukemia patients, but the abstract gives no numeric teniposide parameter values (clearance, half-life, etc. appear to be in the full paper/figures not provided here). |
| popPK | Rousseau_2000 | irrelevant | 2 | 1 | A review of MAP Bayesian dose individualisation mentioning teniposide only as an example; no numeric kinetic parameters for teniposide appear in the evidence. |
| popPK | Rousseau_2002 | irrelevant | 3 | 0 | A review of TDM pharmacokinetic modelling methods that merely mentions teniposide among many drugs, with no numeric kinetic parameters for it provided. |
| PGx | Saeed_2014 | not_relevant | 3 | 4 | Paper studies honokiol, using teniposide only as context; no gene variant effect on teniposide PK/PD parameters is reported. |
| popPK | Stewart_1993 | relevant | 6 | 3 | Reports human tissue concentrations of teniposide at post-dose autopsy times, but actual numeric concentration values are not present in the abstract; only dose and day ranges are given. |
| PGx | Vasilev_2006 | not_relevant | 2 | 2 | Study describes CYP3A4-mediated biotransformation of deoxypodophyllotoxin and comparative reactivity with teniposide in vitro, not a gene variant/genotype effect on teniposide PK/PD parameters. |
| popPK | Verheul_2021 | irrelevant | 0 | 0 | Teniposide appears only as a screened drug; no kinetic parameters (half-life, clearance, etc.) for it are reported. |
| PGx | Wang_2005 | not_relevant | 6 | 9 | CYP3A5 transfection did not alter teniposide sensitivity (resistance multiple 1.04), so no pharmacogenomic effect on teniposide is reported. |
| popPK | Wright_1990 | relevant | 4 | 9 | In vitro study reporting numeric partition coefficients (Kp) for teniposide into phospholipid membranes, but these are liposome/bilayer physicochemical values in synthetic vesicles rather than in vivo whole-body or tissue:plasma toxicokinetic parameters. |
| PGx | Zhou-Pan_1993 | not_relevant | 0 | 0 | Teniposide is only mentioned as an inhibitor of vinblastine metabolism (DDI), with no pharmacogenomic effect on teniposide PK/PD reported. |
| PGx | van_2008 | not_relevant | 7 | 0 | Abstract of a review mentioning teniposide; no specific PK/PD pharmacogenomic effect data retrievable from text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bteniposide%5D&body=Drug%3A%20teniposide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_teniposide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 00:43 UTC</sub>
