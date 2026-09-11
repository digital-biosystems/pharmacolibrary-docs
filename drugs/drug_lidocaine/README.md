# lidocaine

- **generic name:** lidocaine
- **ATC codes:** `C01BB01`, `C05AD01`, `D04AB01`, `N01BB02`, `R02AD02`, `S01HA07`, `S02DA01`
- **DrugBank:** [DB00281](https://go.drugbank.com/drugs/DB00281)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Ever since its discovery and availability for sale and use in the late 1940s, lidocaine has become an exceptionally commonly used medication [T583]. In particular, lidocaine's principal mode of action in acting as a local anesthetic that numbs the sensations of tissues means the agent is indicated for facilitating local anesthesia for a large variety of surgical procedures [F4349, L5930, L5948]. It ultimately elicits its numbing activity by blocking sodium channels so that the neurons of local tissues that have the medication applied on are transiently incapable of signaling the brain regarding sensations [F4349, L5930, L5948]. In doing so, however, it can block or decrease muscle contractile, resulting in effects like vasodilation, hypotension, and irregular heart rate, among others [F4349, L5930, L5948]. As a result, lidocaine is also considered a class Ib anti-arrhythmic agent [L5930, L5948, F4468]. Nevertheless, lidocaine's local anesthetic action sees its use in many medical situations or circumstances that may benefit from its action, including the treatment of premature ejaculation [A177625].

Regardless, lidocaine is currently available as a relatively non-expensive generic medication that is written for in millions of prescriptions internationally on a yearly basis. It is even included in the World Health Organization's List of Essential Medicines [L6055].

**Indication.** Lidocaine is an anesthetic of the amide group indicated for production of local or regional anesthesia by infiltration techniques such as percutaneous injection and intravenous regional anesthesia by peripheral nerve block techniques such as brachial plexus and intercostal and by central neural techniques such as lumbar and caudal epidural blocks [F4349, L5930].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 10:41 | 12:41 | 2/2/0 | 4/0/3 | 0/0/2 | 79,409/32,797 | ollama / qwen3.8:27b-mtp-q8_0 | 21 | 8/13 | 18/3 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Bursi_2017](drugs/drug_lidocaine/Lidocaine_Bursi2017_reference.md) | Bursi R et al., Evaluation of the Population Pharmacoki…, European journal of drug me… (2017) | [10.1007/s13318-017-0400-7](https://doi.org/10.1007/s13318-017-0400-7) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Reichel_1998](drugs/drug_lidocaine/Lidocaine_Reichel1998_reference.md) | Reichel C et al., The lignocaine metabolite (MEGX) liver…, British journal of clinical… (1998) | [10.1046/j.1365-2125.1998.00829.x](https://doi.org/10.1046/j.1365-2125.1998.00829.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [He_2025](drugs/drug_lidocaine/Lidocaine_He2025_reference.md) | He C et al., Optimizing Lidocaine Dosing in Hepatect…, Drug design, development an… (2025) | [10.2147/DDDT.S485389](https://doi.org/10.2147/DDDT.S485389) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Kim_2021](drugs/drug_lidocaine/Lidocaine_Kim2021_reference.md) | Kim JH et al., Evaluation of Lidocaine and Metabolite…, Pharmaceutics (2021) | [10.3390/pharmaceutics13020203](https://doi.org/10.3390/pharmaceutics13020203) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Meng_2011](drugs/drug_lidocaine/pd_Meng_2011_unknown.md) | Meng QT et al., Local anesthetic inhibits hyperpolariza…, Molecular pharmacology (2011) | [10.1124/mol.110.070227](https://doi.org/10.1124/mol.110.070227) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Moreira-Junior_2024](drugs/drug_lidocaine/pd_Moreira_Junior_2024_TTX_R_INa.md) | Moreira-Junior L et al., Eugenol and lidocaine inhibit voltage-g…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1354737](https://doi.org/10.3389/fphar.2024.1354737) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Moreira-Junior_2024](drugs/drug_lidocaine/pd_Moreira_Junior_2024_total_INa.md) | Moreira-Junior L et al., Eugenol and lidocaine inhibit voltage-g…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1354737](https://doi.org/10.3389/fphar.2024.1354737) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ross_2024](drugs/drug_lidocaine/pd_Ross_2024_unknown.md) | Ross (2024) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ross_2024_2](drugs/drug_lidocaine/pd_Ross_2024_2_unknown.md) | Ross (2024) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Jia_2023](drugs/drug_lidocaine/pd_Jia_2023_unknown.md) | Jia D et al., Intravenous Lidocaine Decreased the Med…, Drug design, development an… (2023) | [10.2147/DDDT.S415872](https://doi.org/10.2147/DDDT.S415872) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lin_2024](drugs/drug_lidocaine/pd_Lin_2024_cough_during_tracheal_extubation.md) | Lin ZL et al., The Effect of Intravenous Lidocaine on…, Drug design, development an… (2024) | [10.2147/DDDT.S496608](https://doi.org/10.2147/DDDT.S496608) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Xu_2021](drugs/drug_lidocaine/pd_Xu_2021_unknown.md) | Xu Q et al., Sufentanil EC50 for endotracheal intuba…, BMC anesthesiology (2021) | [10.1186/s12871-021-01367-w](https://doi.org/10.1186/s12871-021-01367-w) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **SCN5A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Clancy_2007](drugs/drug_lidocaine/pgx_Clancy_2007_SCN5A_Q100.md) | Clancy CE et al., Pharmacogenetics and anti-arrhythmic dr…, American journal of physiol… (2007) | [10.1152/ajpheart.00312.2006](https://doi.org/10.1152/ajpheart.00312.2006) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP3A4** | `Q3` · CLint | metabolism | [Fang_2017](drugs/drug_lidocaine/pgx_Fang_2017_CYP3A4_Q3.md) | Fang P et al., Functional assessment of CYP3A4 allelic…, Drug design, development an… (2017) | [10.2147/DDDT.S152366](https://doi.org/10.2147/DDDT.S152366) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 364 matched, 71 returned
- **screened:** 13  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `De_2021.pdf` | De Cassai A et al., Pharmacokinetics of lidocaine after bil…, Regional anesthesia and pai… (2021) | popPK | 9 | [10.1136/rapm-2020-101718](https://doi.org/10.1136/rapm-2020-101718) | [32868484](https://pubmed.ncbi.nlm.nih.gov/32868484) | The study reports lidocaine PK parameters (Cmax, Tmax, AUC) and mentions a two-compartment model, but specific clearance, volume, and rate constants are not explicitly listed in the provided text. |
| `Goldberg_1982.pdf` | Goldberg MJ et al., Racial background and lidocaine pharmac…, Journal of clinical pharmac… (1982) | popPK | 8 | [10.1002/j.1552-4604.1982.tb02691.x](https://doi.org/10.1002/j.1552-4604.1982.tb02691.x) | [7130428](https://pubmed.ncbi.nlm.nih.gov/7130428) | The study reports lidocaine pharmacokinetic parameters (CL, V, t1/2) but the provided evidence contains only qualitative statements of "no significant differences" without specific numeric values. |
| `Ujhelyi_1993.pdf` | Ujhelyi MR et al., The pharmacokinetic and pharmacodynamic…, Clinical pharmacology and t… (1993) | pgx | 8 | [10.1038/clpt.1993.7](https://doi.org/10.1038/clpt.1993.7) | [8422740](https://www.ncbi.nlm.nih.gov/pubmed/8422740) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Gawronska-Szklarz_2006.pdf` | Gawronska-Szklarz B et al., Lidocaine pharmacokinetics in postmenop…, Menopause (New York, N.Y.) (2006) | pgx | 7 | [10.1097/01.gme.0000227057.68282.34](https://doi.org/10.1097/01.gme.0000227057.68282.34) | [16894333](https://www.ncbi.nlm.nih.gov/pubmed/16894333) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Ha_1996.pdf` | Ha HR et al., Interaction between amiodarone and lido…, Journal of cardiovascular p… (1996) | pgx | 7 | [10.1097/00005344-199610000-00009](https://doi.org/10.1097/00005344-199610000-00009) | [8891878](https://www.ncbi.nlm.nih.gov/pubmed/8891878) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Haraya_2016.pdf` | Haraya K et al., Prediction of inter-individual variabil…, Drug metabolism and pharmac… (2016) | pgx | 7 | [10.1016/j.dmpk.2016.03.003](https://doi.org/10.1016/j.dmpk.2016.03.003) | [27318879](https://www.ncbi.nlm.nih.gov/pubmed/27318879) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Isohanni_1999.pdf` | Isohanni MH et al., Effect of erythromycin and itraconazole…, Pharmacology & toxicology (1999) | pgx | 7 | [10.1111/j.1600-0773.1999.tb00890.x](https://doi.org/10.1111/j.1600-0773.1999.tb00890.x) | [10193676](https://www.ncbi.nlm.nih.gov/pubmed/10193676) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Isohanni_2006.pdf` | Isohanni MH et al., Effect of fluvoxamine and erythromycin…, Basic & clinical pharmacolo… (2006) | pgx | 7 | [10.1111/j.1742-7843.2006.pto_482.x](https://doi.org/10.1111/j.1742-7843.2006.pto_482.x) | [16918719](https://www.ncbi.nlm.nih.gov/pubmed/16918719) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Moisés_2008.pdf` | Moisés EC et al., Pharmacokinetics of lidocaine and its m…, European journal of clinica… (2008) | pgx | 7 | [10.1007/s00228-008-0544-0](https://doi.org/10.1007/s00228-008-0544-0) | [18679666](https://www.ncbi.nlm.nih.gov/pubmed/18679666) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Oztekin_2005.pdf` | Oztekin S et al., The effects of gender and menopause on…, European journal of drug me… (2005) | pgx | 7 | [10.1007/BF03190625](https://doi.org/10.1007/BF03190625) | [16435566](https://www.ncbi.nlm.nih.gov/pubmed/16435566) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Sarapa_2005.pdf` | Sarapa N et al., The effect of mild and moderate hepatic…, European journal of clinica… (2005) | pgx | 7 | [10.1007/s00228-005-0909-6](https://doi.org/10.1007/s00228-005-0909-6) | [15887009](https://www.ncbi.nlm.nih.gov/pubmed/15887009) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Afzal_2025.pdf` | Afzal A et al., Impact of CYP3A4 single nucleotide poly…, JPMA. The Journal of the Pa… (2025) | pgx | 5 | [10.47391/JPMA.20095](https://doi.org/10.47391/JPMA.20095) | [40698460](https://www.ncbi.nlm.nih.gov/pubmed/40698460) | metadata signals extractable PGX data (CYP3A4) |

<sub>queue written 2026-09-09T07:55:43.856930+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bodtger_2023 | irrelevant | 0 | 0 | The paper describes a diagnostic procedure (local anesthetic thoracoscopy) where lidocaine is used as a local anesthetic, but it does not report any pharmacokinetic parameters or quantitative disposition data for lidocaine. |
| PD | Chamelian_1994 | not_relevant | 2 | 1 | The study reports PK changes (clearance, concentration) and a correlation with AVP, but does not provide a pharmacodynamic model or numeric PD parameters (Emax, EC50) for lidocaine's therapeutic effect. |
| PGx | Costa_2021 | not_relevant | 2 | 10 | The study reports no significant difference in plasma protein binding (PK parameter) for lidocaine between ORM1 genotypes. |
| PGx | Datta_2025 | not_relevant | 0 | 0 | The paper is a general review of dental pharmacology and does not report specific pharmacogenomic effects on lidocaine PK/PD parameters. |
| popPK | De_2021 | relevant | 9 | 4 | The study reports lidocaine PK parameters (Cmax, Tmax, AUC) and mentions a two-compartment model, but specific clearance, volume, and rate constants are not explicitly listed in the provided text. |
| PGx | Ellis_1992 | not_relevant | 0 | 0 | The paper reports in vitro expression of CYP2D6 in yeast and its activity on substrates like metoprolol and sparteine, but does not report pharmacokinetic or pharmacodynamic parameters for lidocaine in humans or a pharmacogenomic effect on lidocaine disposition. |
| popPK | Foong_2024 | irrelevant | 2 | 1 | This is a systematic review that reports only summary ranges (e.g., Vss 66-194 L, CL 22-49 L/h) rather than original quantitative parameter estimates or model coefficients for a specific study. |
| PGx | Gawronska-Szklarz_2006 | not_relevant | 0 | 0 | The study investigates the effect of a disease state (diabetes) on lidocaine metabolism, not a genetic variant or genotype. |
| PGx | Gawronska-Szklarz_2006_2 | not_relevant | 0 | 0 | The study investigates the effect of hormone therapy (an environmental/drug factor) on lidocaine pharmacokinetics, not the effect of a gene variant or genotype. |
| popPK | Goldberg_1982 | relevant | 8 | 0 | The study reports lidocaine pharmacokinetic parameters (CL, V, t1/2) but the provided evidence contains only qualitative statements of "no significant differences" without specific numeric values. |
| PGx | Ha_1996 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (amiodarone inhibiting lidocaine metabolism) rather than a pharmacogenomic effect based on genetic variants. |
| PGx | Haraya_2016 | not_relevant | 0 | 0 | The paper focuses on CYP1A2 variability and does not report any genetic variants or pharmacogenomic effects on lidocaine pharmacokinetics. |
| PGx | Higuchi_2013 | not_relevant | 0 | 0 | The paper identifies metabolic enzymes (CES, CYP) involved in toxicity but does not report how specific genetic variants or genotypes alter PK/PD parameters. |
| PGx | Isohanni_1998 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (erythromycin/itraconazole) rather than pharmacogenomic effects of gene variants on lidocaine PK/PD. |
| PGx | Isohanni_1999 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP3A4 inhibition by erythromycin/itraconazole) rather than the effect of a specific gene variant or genotype on lidocaine pharmacokinetics. |
| PGx | Isohanni_2006 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (fluvoxamine/erythromycin) rather than the effect of a specific gene variant or genotype on lidocaine pharmacokinetics. |
| popPK | Jaya_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of propofol, and lidocaine is only mentioned as a co-administered agent for pain relief without any reported pharmacokinetic parameters. |
| PD | Jaya_2022 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, EC90, EC95) for propofol, not lidocaine; lidocaine is only mentioned as a co-administered analgesic. |
| popPK | Jia_2023 | irrelevant | 0 | 0 | The study is a pharmacodynamic trial measuring the EC50 of sufentanil, and lidocaine is used only as a co-administered agent without any reported pharmacokinetic parameters (CL, V, etc.) for lidocaine. |
| PGx | Kazemi-Darabadi_2023 | not_relevant | 0 | 0 | The study investigates the effect of a drug (rifampin) on lidocaine toxicity in rats, not the effect of a gene variant/genotype on PK/PD parameters. |
| PGx | Li_1995 | not_relevant | 0 | 0 | The study investigates drug-drug interaction (rifampicin induction) in hepatocytes, not the effect of a genetic variant or genotype on lidocaine pharmacokinetics. |
| popPK | Lin_2024 | irrelevant | 0 | 0 | The study evaluates the pharmacodynamic effect of lidocaine on remifentanil EC50 for cough suppression and explicitly states that plasma lidocaine concentrations were not measured. |
| PGx | Lozinski_2013 | not_relevant | 0 | 0 | The paper reviews the clinical pharmacology and safety of tumescent liposuction but does not report any pharmacogenomic effects on lidocaine PK or PD parameters. |
| PGx | Makihara_2024 | not_relevant | 2 | 0 | The paper reports mRNA expression levels of CYPs in skin tissue and their correlation with BMI, but does not measure or report any pharmacokinetic or pharmacodynamic parameters of lidocaine. |
| PGx | Masubuchi_1992 | not_relevant | 2 | 5 | The paper reports in vitro metabolic activation and covalent binding differences between rat strains (Dark Agouti vs Wistar), which is a preclinical animal model study rather than a human pharmacogenomic effect on a PK/PD parameter. |
| PGx | McDonald_2015 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving amiodarone and lidocaine but does not report any pharmacogenomic effects (gene variants) on lidocaine PK/PD. |
| popPK | Meng_2011 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of lidocaine's mechanism of action on HCN channels, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Moisés_2008 | not_relevant | 0 | 0 | The study investigates the effect of gestational diabetes mellitus (a disease state) on lidocaine pharmacokinetics, not a genetic variant or genotype. |
| popPK | Moreira-Junior_2024 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study focusing on the mechanism of ion channel inhibition, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Mustajoki_1994 | not_relevant | 0 | 0 | The study investigates the effect of a drug (heme arginate) on lidocaine metabolism, not the effect of a genetic variant or genotype. |
| PGx | Oztekin_2005 | not_relevant | 0 | 0 | The study investigates the effects of gender and menopause (phenotypic factors) rather than specific gene variants or genotypes, and found no significant differences in PK parameters. |
| popPK | Perez-Castro_2009 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring cell viability and apoptosis, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Peyronneau_1992 | not_relevant | 0 | 0 | The paper studies the expression of CYP3A4 in yeast and its catalytic activity on lidocaine, but does not report pharmacogenomic effects (gene variants) on PK/PD parameters in humans. |
| PGx | Reichel_1998 | not_relevant | 0 | 0 | The study investigates the effect of a drug (rifampicin) on the pharmacokinetics of lidocaine, not the effect of a gene variant or genotype. |
| popPK | Ross_2024 | irrelevant | 2 | 0 | The study reports local tissue concentrations and pharmacodynamic endpoints (EC50) for lidocaine in lambs, but does not provide systemic population pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Ross_2024_2 | irrelevant | 2 | 0 | The study reports tissue concentrations and effective concentrations (EC50/EC95) for local anesthesia in calves, but does not provide systemic pharmacokinetic parameters (CL, V, ka, t1/2) or a compartmental model. |
| PGx | Sarapa_2005 | not_relevant | 0 | 0 | The study investigates the effect of hepatic impairment on valdecoxib pharmacokinetics, using lidocaine only as a probe for CYP3A4 activity, and does not report pharmacogenomic effects on lidocaine. |
| popPK | Simpson_1978 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of althesin (alphaxalone), with lignocaine (lidocaine) serving only as a comparator, and no specific quantitative PK parameters for lidocaine are provided in the evidence. |
| PGx | Sotaniemi_1995 | not_relevant | 0 | 0 | The study investigates the effect of liver and kidney disease on lidocaine metabolism, not the effect of gene variants or genotypes. |
| PGx | Sotaniemi_1996 | not_relevant | 0 | 0 | The study investigates the effect of age on drug metabolism, not the effect of a specific gene variant or genotype. |
| PGx | Swart_2002 | not_relevant | 0 | 0 | The study investigates the effect of a drug inhibitor (erythromycin) on pharmacokinetics, not the effect of a gene variant or genotype. |
| PGx | Tam_1993 | not_relevant | 0 | 0 | The text is a general review of first-pass metabolism variability and mentions lidocaine only as an example of a drug bound by the lung, without reporting any specific gene variant or genotype affecting its PK/PD. |
| PGx | Tanaka_2006 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (inhibition of ropivacaine metabolism by premedications) in vitro, not the effect of a gene variant on lidocaine PK/PD. |
| PGx | Toner_2023 | not_relevant | 0 | 0 | The study collected pharmacogenomic data but found no statistically significant differences in lidocaine concentrations between phenotype groups. |
| PGx | Ujhelyi_1993 | not_relevant | 2 | 5 | The study reports a drug-drug interaction (propafenone affecting lidocaine PK) in a specific phenotype group (extensive metabolizers), but it does not report a pharmacogenomic effect (i.e., a comparison between different genotypes/phenotypes) on the PK/PD parameters. |
| PGx | Wang_2000 | not_relevant | 0 | 0 | The paper investigates the enzymatic pathways (CYP1A2/CYP3A4) responsible for lidocaine metabolism in vitro but does not report any pharmacogenomic effects of specific gene variants or genotypes on PK/PD parameters. |
| popPK | Whiting_1986 | irrelevant | 1 | 0 | The paper is a general review of population pharmacokinetics theory and mentions lidocaine only as an example of a drug where NONMEM has been applied, without providing any original quantitative parameter values. |
| popPK | Winkle_1975 | irrelevant | 1 | 0 | The text is a general review of pharmacologic therapy for arrhythmias that mentions lidocaine's pharmacokinetics conceptually but provides no quantitative disposition parameters or numeric values. |
| popPK | Xu_2021 | irrelevant | 0 | 0 | The study is a clinical trial determining the EC50 of sufentanil for intubation, using lidocaine only as a topical anesthetic adjunct without reporting any pharmacokinetic parameters for lidocaine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_lidocaine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
