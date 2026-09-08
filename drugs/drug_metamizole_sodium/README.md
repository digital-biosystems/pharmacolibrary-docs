# metamizole sodium

- **generic name:** metamizole sodium
- **ATC codes:** `N02BB02`
- **DrugBank:** [DB04817](https://go.drugbank.com/drugs/DB04817)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Metamizole (dipyrone) is a pyrazolone derivative that belongs to the group of nonacid nonopioids. It is considered a potent analgesic and antipyretic with favourable gastrointestinal tolerability.[A251885] Metamizole was formerly marketed in the US as Dimethone tablets and injection, Protemp oral liquid, and other drug products, and was withdrawn due to its association with potentially fatal agranulocytosis. Approvals of the NDA's for metamizole drug products were withdrawn on June 27, 1977 (see the Federal Register of June 17, 1977, 42 FR 30893).[L42975] In 1963, metamizole was withdrawn from the Canadian market and banned in the UK, France, Sweden, Norway and Australia.[A251805] Metamizole is still used in certain countries in Europe, Asia and South America.[A251805]

**Indication.** Metamizole is banned in several countries, where it was previously used as a powerful analgesic and fever reducer. In countries where it is still available, metamizole is indicated for acute severe pain after injuries or surgeries, colic, tumor pain, and acute or severe pain symptoms, as well as high fever if other treatments are unsuccessful.[A251805]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 14:14 | 43:39 | 2/4/0 | 0/1/0 | 0/0/1 | 388,790/16,881 | ollama / qwen3.8:27b-mtp-q8_0 | 37 | 5/29 | 31/3 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Blaser_2021](drugs/drug_metamizole_sodium/MetamizoleSodium_Blaser2021_4_aa.md) | Blaser LS et al., Comparative Effects of Metamizole (Dipy…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.620635](https://doi.org/10.3389/fphar.2021.620635) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Blaser_2021](drugs/drug_metamizole_sodium/MetamizoleSodium_Blaser2021_4_aaa.md) | Blaser LS et al., Comparative Effects of Metamizole (Dipy…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.620635](https://doi.org/10.3389/fphar.2021.620635) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Blaser_2021](drugs/drug_metamizole_sodium/MetamizoleSodium_Blaser2021_4_faa.md) | Blaser LS et al., Comparative Effects of Metamizole (Dipy…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.620635](https://doi.org/10.3389/fphar.2021.620635) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Blaser_2021](drugs/drug_metamizole_sodium/MetamizoleSodium_Blaser2021_4_maa.md) | Blaser LS et al., Comparative Effects of Metamizole (Dipy…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.620635](https://doi.org/10.3389/fphar.2021.620635) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Blaser_2021](drugs/drug_metamizole_sodium/MetamizoleSodium_Blaser2021_metamizole_n_8.md) | Blaser LS et al., Comparative Effects of Metamizole (Dipy…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.620635](https://doi.org/10.3389/fphar.2021.620635) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Blaser_2021](drugs/drug_metamizole_sodium/MetamizoleSodium_Blaser2021_naproxen_n_7.md) | Blaser LS et al., Comparative Effects of Metamizole (Dipy…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.620635](https://doi.org/10.3389/fphar.2021.620635) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Blaser_2021](drugs/drug_metamizole_sodium/pd_Blaser_2021_6_keto_prostaglandin_F1.md) | Blaser LS et al., Comparative Effects of Metamizole (Dipy…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.620635](https://doi.org/10.3389/fphar.2021.620635) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **NAT2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Hein_2021](drugs/drug_metamizole_sodium/pgx_Hein_2021_NAT2_Q100.md) | Hein DW et al., Arylamine N-acetyltransferase acetylati…, Expert opinion on drug meta… (2021) | [10.1080/17425255.2021.1840551](https://doi.org/10.1080/17425255.2021.1840551) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 150 matched, 106 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 6  ·  extracted 2  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Asmardi_1985.pdf` | Asmardi G et al., Pharmacokinetics of dipyrone in man; ro…, European journal of drug me… (1985) | popPK | 10 | [10.1007/BF03189705](https://doi.org/10.1007/BF03189705) | [4043141](https://pubmed.ncbi.nlm.nih.gov/4043141) | The paper reports quantitative pharmacokinetic parameters (half-life, concentration ranges, urinary excretion amounts) for dipyrone (metamizole) and its metabolite MAA in humans. |
| `Levy_2010.pdf` | Levy M et al., Population pharmacokinetic analysis of…, International journal of cl… (2010) | popPK | 10 | [10.5414/cpp48791](https://doi.org/10.5414/cpp48791) | [21084034](https://pubmed.ncbi.nlm.nih.gov/21084034) | The paper is a population PK study of dipyrone (metamizole) metabolite MAA, but the specific numeric parameter values are not present in the provided evidence. |
| `Ziesenitz_2019.pdf` | Ziesenitz VC et al., Dose evaluation of intravenous metamizo…, European journal of clinica… (2019) | popPK | 9 | [10.1007/s00228-019-02720-2](https://doi.org/10.1007/s00228-019-02720-2) | [31388703](https://pubmed.ncbi.nlm.nih.gov/31388703) | The paper is a population PK study of metamizole, but the evidence only reports AUC values for the metabolite 4-methylaminoantipyrine, lacking specific clearance, volume, or rate constant parameters for the parent drug. |
| `de_2023.pdf` | de Paula VV et al., Pharmacokinetic profiles of the two maj…, Research in veterinary scie… (2023) | pd | 5 | [10.1016/j.rvsc.2023.01.007](https://doi.org/10.1016/j.rvsc.2023.01.007) | [36701839](https://www.ncbi.nlm.nih.gov/pubmed/36701839) | metadata signals extractable PD data (PK/PD) |
| `de_2017.pdf` | de Oliveira Schwaickhardt R et al., Combined use of VUV and UVC photoreacto…, The Science of the total en… (2017) | pd | 4 | [10.1016/j.scitotenv.2017.02.218](https://doi.org/10.1016/j.scitotenv.2017.02.218) | [28283289](https://www.ncbi.nlm.nih.gov/pubmed/28283289) | metadata signals extractable PD data (EC50) |
| `de_2022.pdf` | de Oliveira DR et al., 2-Arylpropionic Acid Pyrazolamides as C…, Pharmaceuticals (Basel, Swi… (2022) | pd | 4 | [10.3390/ph15121519](https://doi.org/10.3390/ph15121519) | [36558970](https://www.ncbi.nlm.nih.gov/pubmed/36558970) | metadata signals extractable PD data (EC50) |
| `Fortuny_2006.pdf` | Fortuny J et al., Use of analgesics and nonsteroidal anti…, Cancer epidemiology, biomar… (2006) | pgx | 5 | [10.1158/1055-9965.EPI-06-0038](https://doi.org/10.1158/1055-9965.EPI-06-0038) | [16985032](https://www.ncbi.nlm.nih.gov/pubmed/16985032) | metadata signals extractable PGX data (CYP2E1) |
| `García-Martín_2015.pdf` | García-Martín E et al., Genetic determinants of metamizole meta…, Pharmacogenetics and genomi… (2015) | pgx | 5 | [10.1097/FPC.0000000000000157](https://doi.org/10.1097/FPC.0000000000000157) | [26111152](https://www.ncbi.nlm.nih.gov/pubmed/26111152) | metadata signals extractable PGX data (CYP2C9) |
| `Martínez_2014.pdf` | Martínez C et al., Gender and functional CYP2C and NAT2 po…, Biochemical pharmacology (2014) | pgx | 5 | [10.1016/j.bcp.2014.09.005](https://doi.org/10.1016/j.bcp.2014.09.005) | [25241292](https://www.ncbi.nlm.nih.gov/pubmed/25241292) | metadata signals extractable PGX data (CYP2C) |
| `Stamer_2003.pdf` | Stamer UM et al., Impact of CYP2D6 genotype on postoperat…, Pain (2003) | pgx | 5 | [10.1016/s0304-3959(03)00212-4](https://doi.org/10.1016/s0304-3959(03)00212-4) | [14499440](https://www.ncbi.nlm.nih.gov/pubmed/14499440) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-08-28T14:04:26.571854+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abotaleb_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro pharmacological evaluation of a new compound (metamorphine) formed from morphine and metamizole, containing no pharmacokinetic parameters for metamizole sodium. |
| PD | Abotaleb_2025 | not_relevant | 0 | 0 | The paper reports in vitro pharmacological parameters (Ki, EC50) for a newly synthesized compound (metamorphine) and qualitative dose-response observations for metamizole, but does not report a pharmacodynamic (exposure-response) model or numeric PD parameters for metamizole sodium itself. |
| PGx | Agúndez_2015 | not_relevant | 2 | 0 | The paper is a review discussing the general role of drug metabolism and reactive metabolites in hypersensitivity reactions, mentioning metamizole only as an example of a drug involved in such reactions, without reporting specific pharmacogenomic effects on its PK or PD parameters. |
| PGx | Amo_2016 | not_relevant | 0 | 0 | The paper investigates genetic associations with the risk of hypersensitivity reactions (adverse events), not pharmacokinetic or pharmacodynamic parameters of metamizole sodium. |
| PD | Arcoverde_2023 | not_relevant | 2 | 1 | The study reports PK parameters and notes that concentrations exceeded the COX inhibition threshold, but it does not provide a quantitative exposure-response model, dose-response curve, or numeric PD parameters (e.g., Emax, EC50) for the drug's effect. |
| PGx | Bachmann_2021 | not_relevant | 0 | 0 | The paper investigates the effect of deglucuronidation on the phenotyping of CYP enzymes using a cocktail, with metamizole acting as an inducer; it does not report pharmacogenomic effects on the PK/PD of metamizole itself. |
| PGx | Bachmann_2021_2 | not_relevant | 0 | 0 | The paper investigates the effect of metamizole on CYP enzyme activity (drug-drug interaction) and does not report how genetic variants affect the PK/PD of metamizole itself. |
| PGx | Bacracheva_1997 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (cimetidine) and explicitly concludes that CYP2D6 genotype does not correlate with the observed metabolic changes. |
| PGx | Brinkman_2025 | not_relevant | 0 | 0 | The paper reviews general pharmacology and drug-drug interactions of metamizole but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| PD | Carrillo-Calzadilla_2017 | not_relevant | 3 | 2 | The paper investigates PK/PD interactions qualitatively (potentiation, tolerance) but does not report a formal concentration-effect model or numeric PD parameters (e.g., EC50, Emax) for metamizole. |
| PGx | Cismaru_2020 | not_relevant | 0 | 0 | The paper reports a GWAS for susceptibility to an adverse drug reaction (agranulocytosis), not a pharmacokinetic or pharmacodynamic parameter. |
| PGx | Cismaru_2020_2 | not_relevant | 0 | 0 | The paper investigates the association between HLA genes and the risk of an adverse drug reaction (agranulocytosis), not the effect of genetic variants on pharmacokinetic or pharmacodynamic parameters of metamizole sodium. |
| PD | Corvino_2023 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of phloroglucinol and clinical efficacy comparisons; it does not report any pharmacodynamic (exposure-response or dose-response) model or numeric PD parameters for metamizole sodium. |
| PD | Dannenberg_2016 | not_relevant | 2 | 0 | The study reports a qualitative impairment of aspirin's pharmacodynamic effect (platelet aggregation) by dipyrone and associated clinical outcomes, but it does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve for dipyrone. |
| popPK | Dias_2016 | irrelevant | 0 | 0 | The study investigates the antinociceptive activity of a plant extract using dipyrone (metamizole) only as a reference drug, and contains no pharmacokinetic parameters. |
| PD | Dias_2016 | not_relevant | 0 | 0 | The paper investigates the antinociceptive activity of a plant extract (Tibouchina pereirae), not the drug metamizole_sodium (dipyrone), and does not report any exposure-response or dose-response relationship for the target drug. |
| PD | Domínguez-Ramírez_2010 | not_relevant | 2 | 1 | The study reports qualitative changes in antinociceptive effect and morphine PK parameters (Cmax, AUC) but does not provide numeric PD parameters (e.g., ED50, Emax) or a quantitative concentration-effect curve for metamizole. |
| popPK | Ekobena_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for bictegravir, not metamizole_sodium. |
| PD | Ekobena_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for bictegravir, not metamizole_sodium, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| PGx | Fidelis_2025 | not_relevant | 0 | 0 | The paper investigates genetic associations with the adverse event of agranulocytosis, not pharmacokinetic or pharmacodynamic parameters. |
| popPK | Floren_2026 | irrelevant | 0 | 0 | The paper is a protocol for a systematic review on sex/gender differences in pain management efficacy and does not report any pharmacokinetic parameters for metamizole sodium. |
| PD | Floren_2026 | not_relevant | 0 | 0 | The paper is a protocol for a systematic review on sex/gender differences in perioperative pain management and does not report any pharmacodynamic data, exposure-response relationships, or numeric PD parameters for metamizole sodium. |
| PGx | Fortuny_2006 | not_relevant | 0 | 0 | The paper investigates the association between drug use and bladder cancer risk, not the effect of genetic variants on the pharmacokinetic or pharmacodynamic parameters of metamizole sodium. |
| PGx | García-Martín_2015 | not_relevant | 2 | 0 | The paper reports an association between genotype and clinical risk of hypersensitivity/anaphylaxis, but does not report quantitative changes in pharmacokinetic or pharmacodynamic parameters. |
| popPK | Geisslinger_1996 | irrelevant | 2 | 0 | The study focuses on platelet function and prostanoid biosynthesis rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for dipyrone (metamizole). |
| PD | Giorgi_2017 | not_relevant | 0 | 0 | The study reports only pharmacokinetic parameters (Cmax, Tmax, AUC) and notes no observed behavioral changes, providing no numeric PD parameters or exposure-response relationship. |
| PGx | Hein_2021 | not_relevant | 5 | 2 | The paper mentions metamizole as a drug subject to NAT2 polymorphism but provides no specific data, tables, or quantitative PK/PD parameters for it in the provided text. |
| popPK | Herbert_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of intestinal motility, not a pharmacokinetic study, and reports no disposition parameters for metamizole_sodium. |
| PD | Herbert_2005 | not_relevant | 0 | 0 | The paper explicitly states that dipyrone (metamizole) did not affect peristalsis and reports no numeric PD parameters or concentration-effect relationship for it. |
| popPK | Hertle_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of smooth muscle activity, not a pharmacokinetic study, and reports no disposition parameters for metamizole. |
| PD | Hertle_1984 | not_relevant | 0 | 0 | The paper explicitly states that metamizole had no direct effect on smooth muscle activity, and the reported PD parameters (EC50) are for pitofenone, not metamizole. |
| popPK | Himstedt_2020 | irrelevant | 0 | 0 | The study investigates the pulmonary pharmacokinetics of salmeterol, fluticasone, linezolid, and indomethacin in rats, with metamizole administered only as an analgesic for anesthesia and not as a subject drug for PK parameter estimation. |
| PD | Himstedt_2020 | not_relevant | 0 | 0 | The paper focuses on the pulmonary pharmacokinetics of salmeterol, fluticasone, linezolid, and indomethacin, and does not contain any data or analysis for metamizole_sodium. |
| popPK | Hoffmann_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of indocyanine green (ICG) in mice, and metamizole is only mentioned as an analgesic administered for pain relief, not as the subject of PK analysis. |
| PD | Hoffmann_2022 | not_relevant | 0 | 0 | The paper focuses on image analysis methods for MSOT data and does not report any pharmacodynamic or exposure-response relationship for metamizole sodium. |
| PD | Hohlfeld_2013 | not_relevant | 1 | 0 | The text is a review discussing the qualitative pharmacodynamic interaction between aspirin and NSAIDs (including metamizole) without providing specific numeric PD parameters or concentration-effect curves. |
| popPK | Karaźniewicz-Łada_2021 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic interactions among antiepileptic drugs and does not mention metamizole_sodium or report any parameters for it. |
| PD | Karaźniewicz-Łada_2021 | not_relevant | 0 | 0 | The paper is a review of pharmacokinetic drug-drug interactions and does not report any pharmacodynamic or exposure-response data for metamizole sodium. |
| popPK | Kumar_2025 | irrelevant | 0 | 0 | The paper is a transcriptomic study on migraine and stress response where metamizole is only mentioned as a rescue medication for a single adverse event, with no pharmacokinetic parameters reported. |
| PD | Kumar_2025 | not_relevant | 0 | 0 | The paper investigates the neuroendocrine response to citalopram in migraine patients and does not contain any data, analysis, or mention of metamizole_sodium. |
| popPK | Lacerda-Júnior_2025 | irrelevant | 0 | 0 | The study focuses on a dysmenorrhea model in rats and does not report pharmacokinetic parameters for metamizole sodium. |
| PD | Lacerda-Júnior_2025 | not_relevant | 0 | 0 | The paper does not report any pharmacodynamic or exposure-response data for metamizole_sodium; it focuses on a dysmenorrhea animal model and mentions dipyrone (metamizole) only as a standard medication for pain attenuation without providing specific PD parameters for it. |
| PD | Lebkowska-Wieruszewska_2018 | not_relevant | 0 | 0 | The study reports only pharmacokinetic parameters (Cmax, AUC, half-life) and qualitative adverse events, with no quantitative pharmacodynamic or exposure-response modeling. |
| PD | Levy_1995 | not_relevant | 0 | 0 | The text is a pharmacokinetic review of dipyrone (metamizole) focusing on metabolism, clearance, and bioavailability, with no quantitative pharmacodynamic or exposure-response data provided. |
| PGx | Levy_2001 | not_relevant | 0 | 0 | The study investigates dipyrone (metamizole), not metamizole_sodium, and reports no significant differences in PK parameters between groups. |
| popPK | Levy_2010 | relevant | 10 | 0 | The paper is a population PK study of dipyrone (metamizole) metabolite MAA, but the specific numeric parameter values are not present in the provided evidence. |
| PD | Li_2023 | not_relevant | 0 | 0 | The paper describes the development of an immunoassay for detecting a metabolite (4-methylaminoantipyrine) of dipyrone (metamizole), reporting analytical parameters (IC50 of the antibody, cutoff value) rather than pharmacodynamic or exposure-response relationships for the drug itself. |
| PGx | Macías_2021 | not_relevant | 0 | 0 | The study investigates the association between CYP2C gene polymorphisms and the risk of developing cross-hypersensitivity to NSAIDs (including metamizole), but it does not report changes in pharmacokinetic or pharmacodynamic parameters of metamizole sodium. |
| popPK | Morath_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of apixaban, not metamizole_sodium, which is only mentioned as a co-medication covariate. |
| PD | Morath_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for apixaban, not a pharmacodynamic (PD) or exposure-response model; no PD parameters (e.g., Emax, EC50) are reported. |
| popPK | Moura_2016 | irrelevant | 0 | 0 | The study focuses on the effective concentration of bupivacaine for femoral nerve blocks, and metamizole (dipyrone) is only mentioned as a rescue analgesic without any pharmacokinetic parameter reporting. |
| PD | Moura_2016 | not_relevant | 0 | 0 | The paper reports dose-response parameters (EC50/EC90) for bupivacaine, not metamizole_sodium. |
| PGx | Mouta_2025 | not_relevant | 0 | 0 | The study reports pharmacokinetic variability in dogs but does not identify specific gene variants or genotypes responsible for the differences. |
| popPK | Nandy_2010 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for doripenem, not metamizole_sodium, which is only listed as a concomitant medication. |
| PD | Nandy_2010 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for doripenem, not a pharmacodynamic (PD) or exposure-response model, and contains no numeric PD parameters. |
| PD | Nemec_2010_2 | not_relevant | 1 | 0 | The paper is a qualitative review of infusion combinations and mentions that lower doses of metamizole shorten analgesia duration, but it does not provide numeric PD parameters, concentration-effect curves, or quantitative exposure-response data. |
| PGx | PMID32189324_2020 | not_relevant | 0 | 0 | The paper discusses CYP2C9 pharmacogenomics for NSAIDs but explicitly lists metamizole as an alternative therapy not primarily metabolized by CYP2C9, providing no PK/PD data for it. |
| PD | Passoni_2021 | not_relevant | 2 | 1 | The paper reports a qualitative dose-response screening (uterotrophic assay) showing no effect, but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for dipyrone. |
| PD | Polzin_2015 | not_relevant | 1 | 0 | The text is a review of non-opioid analgesics and aspirin interactions, containing no specific data, models, or numeric PD parameters for metamizole sodium. |
| PD | Polzin_2015_2 | not_relevant | 3 | 2 | The study describes a qualitative drug-drug interaction and reversibility of effects but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for metamizole sodium. |
| PD | Polzin_2021 | not_relevant | 1 | 0 | The paper is an observational epidemiological study reporting clinical outcomes (mortality, MI) based on co-medication status, not a pharmacodynamic analysis with numeric PD parameters (Emax, EC50) or concentration-effect curves. |
| PGx | Qin_2012 | not_relevant | 0 | 0 | The paper investigates the effect of metamizole on the pharmacokinetics of bupropion, not the pharmacokinetics or pharmacodynamics of metamizole itself. |
| PGx | Radulovic_2021 | not_relevant | 2 | 0 | The paper reports a clinical adverse event (agranulocytosis) associated with genotypes but does not report quantitative changes in pharmacokinetic or pharmacodynamic parameters. |
| popPK | Rivera-Espinosa_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of buprenorphine, not metamizole_sodium, which is only mentioned as a permitted concomitant medication. |
| PD | Rivera-Espinosa_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PopPK) of buprenorphine and does not report any pharmacodynamic (PD) or exposure-response analysis for metamizole sodium or any other drug. |
| PD | Rosenkranz_1992 | not_relevant | 2 | 1 | The study reports qualitative changes in pharmacodynamic endpoints (urine flow, renin, prostaglandins) and PK parameters, but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| PGx | Roth_2026 | not_relevant | 0 | 0 | The paper is a population-level claims data study assessing the frequency of potential drug-drug-gene interactions (phenoconversion) and does not report specific pharmacokinetic or pharmacodynamic parameter changes for metamizole sodium. |
| popPK | Rudalska_2025 | irrelevant | 0 | 0 | The paper studies p38α inhibitors (e.g., compound 2015) for colorectal cancer and does not involve metamizole_sodium. |
| PD | Rudalska_2025 | not_relevant | 0 | 0 | The paper studies p38α inhibitors (e.g., compound 2015), not metamizole sodium, and does not report any pharmacodynamic parameters for the target drug. |
| PGx | Saussele_2007 | not_relevant | 0 | 0 | The paper reports drug-induced enzyme induction (drug-drug interaction potential) rather than a pharmacogenomic effect of a gene variant on the drug's PK/PD. |
| PD | Schmitz_2017 | not_relevant | 2 | 1 | The study reports a qualitative pharmacodynamic interaction (dipyrone blunts aspirin's antiplatelet effect) with group-level mean comparisons, but it does not provide a concentration-effect or dose-response curve, nor does it report specific PD parameters like Emax or EC50 for dipyrone. |
| PD | Seliger_2018 | not_relevant | 0 | 0 | The study is a retrospective epidemiological analysis of survival outcomes (Cox regression) based on binary drug use (yes/no), explicitly stating that dose-response analyses were not possible due to missing data; it does not report any pharmacodynamic parameters or concentration-effect relationships. |
| PGx | Shah_2019 | not_relevant | 2 | 0 | The paper discusses a potential association between HLA alleles and the risk of an adverse event (agranulocytosis) but does not report quantitative changes in pharmacokinetic or pharmacodynamic parameters. |
| popPK | Simon_2019 | irrelevant | 2 | 0 | This is a study protocol for an ongoing trial where metamizole is a secondary analgesic co-medication, and no quantitative PK parameter values are reported in the text. |
| PD | Simon_2019 | not_relevant | 0 | 0 | The paper is a study protocol describing the design and methods for a PK trial; it does not report results, data, or any numeric PD parameters for metamizole sodium. |
| PGx | Stamer_2003 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomic effect of CYP2D6 on tramadol, not metamizole_sodium. |
| popPK | Stoschus_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of phenobarbital, and metamizole is only mentioned as a co-medication covariate. |
| PD | Stoschus_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for phenobarbital, not a pharmacodynamic (PD) or exposure-response model for metamizole sodium. |
| popPK | Taubert_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for finafloxacin, not metamizole_sodium. |
| PD | Taubert_2018 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of finafloxacin (not metamizole sodium) and explicitly states that no pharmacodynamic surrogate parameter of clinical outcome could be identified. |
| PD | Todd_1985 | not_relevant | 0 | 0 | The paper is a review of suprofen, not metamizole sodium, and contains no numeric PD parameters or exposure-response analysis. |
| PD | Wang_2025 | not_relevant | 2 | 1 | The paper describes a formulation study with qualitative pharmacodynamic observations (extended action time) and PK parameters (half-life, AUC), but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect relationship. |
| popPK | Wehrfritz_2026 | relevant | 8 | 2 | The paper reports a PK analysis for metamizole (dipyrone) with a specific half-life value, but lacks other quantitative parameters like clearance or volume. |
| PD | Wehrfritz_2026 | not_relevant | 2 | 0 | The paper reports a pharmacokinetic (PK) analysis of a single overdose case with Michaelis-Menten parameters (Vmax, KM) but does not provide a pharmacodynamic (PD) model, exposure-response curve, or numeric PD parameters (e.g., Emax, EC50) linking concentration to effect. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of antiemetic drugs for postoperative nausea and vomiting and does not report pharmacokinetic parameters for metamizole_sodium. |
| PD | Weibel_2020 | not_relevant | 0 | 0 | The paper is a network meta-analysis of antiemetics for PONV and does not mention metamizole_sodium or report any pharmacodynamic or exposure-response parameters. |
| popPK | Weinstein_2018 | irrelevant | 0 | 0 | The paper is a systematic review on regional anaesthesia for postoperative pain and does not report pharmacokinetic parameters for metamizole_sodium. |
| PD | Weinstein_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical outcomes (persistent postoperative pain) and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters for metamizole sodium. |
| popPK | Weinstein_2018_2 | irrelevant | 0 | 0 | The paper is a systematic review on regional anaesthesia for postoperative pain and does not report pharmacokinetic parameters for metamizole_sodium. |
| PD | Weinstein_2018_2 | not_relevant | 0 | 0 | The paper is a systematic review of clinical outcomes (persistent postoperative pain) and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters for metamizole sodium. |
| popPK | Ziesenitz_2019 | relevant | 9 | 2 | The paper is a population PK study of metamizole, but the evidence only reports AUC values for the metabolite 4-methylaminoantipyrine, lacking specific clearance, volume, or rate constant parameters for the parent drug. |
| popPK | de_2017 | irrelevant | 0 | 0 | The paper is a wastewater treatment study that only qualitatively mentions the presence of dipyrone (metamizole) without reporting any pharmacokinetic parameters. |
| PD | de_2017 | not_relevant | 0 | 0 | The paper focuses on wastewater treatment and environmental impact assessment, not pharmacodynamics or drug exposure-response relationships. |
| popPK | de_2022 | irrelevant | 0 | 0 | The paper focuses on the synthesis and pharmacological activity of novel pyrazolamide compounds, not the pharmacokinetic parameters of metamizole sodium. |
| PD | de_2023 | not_relevant | 0 | 0 | The study reports only pharmacokinetic parameters (Cmax, t1/2, AUC) for metabolites and qualitative adverse effects, with no quantitative exposure-response or dose-response analysis. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | The provided evidence is only a conference header with no study data, parameters, or mention of metamizole_sodium. |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for metamizole sodium. |
| popPK | unknown_1996 | irrelevant | 0 | 0 | The paper is a collection of pediatric intensive care abstracts from 1996 and does not contain any pharmacokinetic data for metamizole_sodium. |
| PD | unknown_1996 | not_relevant | 0 | 0 | The provided text is only the title and metadata for a conference abstract book, containing no scientific content, data, or PD parameters for metamizole sodium. |
| popPK | unknown_2011 | irrelevant | 0 | 0 | The provided evidence is only a title of a conference abstract collection with no specific study data, drug mention, or pharmacokinetic parameters. |
| PD | unknown_2011 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or mention of metamizole sodium or pharmacodynamics. |
| popPK | unknown_2013 | irrelevant | 0 | 0 | The evidence consists only of a conference title and dates, containing no pharmacokinetic data or specific study content for metamizole_sodium. |
| PD | unknown_2013 | not_relevant | 0 | 0 | The provided text is only the title of a conference abstract collection and contains no specific data, models, or parameters for metamizole sodium. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | The provided evidence contains only conference metadata and no pharmacokinetic data or text regarding metamizole_sodium. |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of metamizole sodium pharmacodynamics. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The evidence consists only of a conference citation with no pharmacokinetic data or parameters for metamizole_sodium. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and does not contain any data, analysis, or parameters regarding metamizole sodium. |
| popPK | unknown_2018_2 | irrelevant | 0 | 0 | The evidence consists only of a conference title and contains no pharmacokinetic data or parameters for metamizole_sodium. |
| PD | unknown_2018_2 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific data, analysis, or mention of metamizole sodium pharmacodynamics. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | The evidence contains only conference metadata with no pharmacokinetic data or study content. |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of metamizole sodium pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_metamizole_sodium`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
