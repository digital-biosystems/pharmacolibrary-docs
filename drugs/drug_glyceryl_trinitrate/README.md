# glyceryl trinitrate

- **generic name:** glyceryl trinitrate
- **ATC codes:** `C01DA02`, `C05AE01`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 22:04 | 30:34 | 0/0/0 | 2/2/0 | 0/0/2 | 215,880/10,810 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 3/9 | 12/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kielbasa_2019](drugs/drug_glyceryl_trinitrate/pd_Kielbasa_2019_free_CGRP.md) | Kielbasa W et al., A new era for migraine: Pharmacokinetic…, Cephalalgia : an internatio… (2019) | [10.1177/0333102419840780](https://doi.org/10.1177/0333102419840780) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Matos_2022](drugs/drug_glyceryl_trinitrate/pd_Matos_2022_vasorelaxation.md) | Matos MJ et al., Synthesis and Vasorelaxant Activity of…, ChemMedChem (2022) | [10.1002/cmdc.202200476](https://doi.org/10.1002/cmdc.202200476) |
| <span class="pk-badge pk-badge--red">rejected</span> | [He_2023](drugs/drug_glyceryl_trinitrate/pd_He_2023_FBF.md) | He JD et al., The effect of vitamin C on nitroglyceri…, British journal of clinical… (2023) | [10.1111/bcp.15755](https://doi.org/10.1111/bcp.15755) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ishibashi_2013](drugs/drug_glyceryl_trinitrate/pd_Ishibashi_2013_NO2.md) | Ishibashi T et al., Effects of cyanamide, an aldehyde dehyd…, Biological & pharmaceutical… (2013) | [10.1248/bpb.b12-00855](https://doi.org/10.1248/bpb.b12-00855) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ishibashi_2013](drugs/drug_glyceryl_trinitrate/pd_Ishibashi_2013_unknown.md) | Ishibashi T et al., Effects of cyanamide, an aldehyde dehyd…, Biological & pharmaceutical… (2013) | [10.1248/bpb.b12-00855](https://doi.org/10.1248/bpb.b12-00855) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ALDH2** | `Q321` · EC50 | formation | [He_2023](drugs/drug_glyceryl_trinitrate/pgx_He_2023_ALDH2_Q321.md) | He JD et al., The effect of vitamin C on nitroglyceri…, British journal of clinical… (2023) | [10.1111/bcp.15755](https://doi.org/10.1111/bcp.15755) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ALDH2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Li_2006](drugs/drug_glyceryl_trinitrate/pgx_Li_2006_ALDH2_Q100.md) | Li Y et al., Mitochondrial aldehyde dehydrogenase-2…, The Journal of clinical inv… (2006) | [10.1172/JCI26564](https://doi.org/10.1172/JCI26564) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 241 matched, 118 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_20 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fung_1984.pdf` | Fung HL et al., Pharmacokinetics of nitroglycerin after…, Journal of pharmaceutical s… (1984) | popPK | 10 | [10.1002/jps.2600730704](https://doi.org/10.1002/jps.2600730704) | [6432996](https://pubmed.ncbi.nlm.nih.gov/6432996) | The paper reports quantitative pharmacokinetic parameters (clearance, half-life, bioavailability) for nitroglycerin (glyceryl trinitrate) in rats with specific numeric values present in the text. |
| `McNiff_1981.pdf` | McNiff EF et al., Nitroglycerin pharmacokinetics after in…, Journal of pharmaceutical s… (1981) | popPK | 10 | [10.1002/jps.2600700923](https://doi.org/10.1002/jps.2600700923) | [6101155](https://pubmed.ncbi.nlm.nih.gov/6101155) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for nitroglycerin (glyceryl trinitrate) in human subjects with specific numeric values provided in the text. |
| `Yap_1978.pdf` | Yap PS et al., Pharmacokinetics of nitroglycerin in ra…, Journal of pharmaceutical s… (1978) | popPK | 10 | [10.1002/jps.2600670446](https://doi.org/10.1002/jps.2600670446) | [417170](https://pubmed.ncbi.nlm.nih.gov/417170) | The study reports quantitative pharmacokinetic parameters (half-life, volume of distribution, bioavailability) for nitroglycerin (glyceryl trinitrate) in rats. |
| `Armstrong_1983.pdf` | Armstrong PW et al., Steady state pharmacokinetic haemodynam…, British journal of clinical… (1983) | popPK | 9 | [10.1111/j.1365-2125.1983.tb02182.x](https://doi.org/10.1111/j.1365-2125.1983.tb02182.x) | [6414501](https://pubmed.ncbi.nlm.nih.gov/6414501) | The study reports quantitative pharmacokinetic parameters for glyceryl trinitrate, including a one-compartment model time constant and clearance values, directly in the abstract text. |
| `Nakashima_1987.pdf` | Nakashima E et al., Transdermal bioavailability and first-p…, Journal of pharmacokinetics… (1987) | popPK | 9 | [10.1007/BF01066522](https://doi.org/10.1007/BF01066522) | [3119815](https://pubmed.ncbi.nlm.nih.gov/3119815) | The paper describes a compartmental PK model for nitroglycerin (glyceryl trinitrate) and reports a bioavailability fraction (F), but specific numeric values for clearance, volume, or rate constants are not explicitly listed in the provided evidence. |
| `Blei_1984.pdf` | Blei AT et al., Role of the liver in the disposition of…, Biochemical pharmacology (1984) | popPK | 8 | [10.1016/0006-2952(84)90645-2](https://doi.org/10.1016/0006-2952(84)90645-2) | [6431989](https://pubmed.ncbi.nlm.nih.gov/6431989) | The study reports quantitative systemic clearance (Cls) values for nitroglycerin (glyceryl trinitrate) in rats, which are explicitly provided in the text. |
| `Fenton_2006.pdf` | Fenton C et al., 0.4% nitroglycerin ointment : in the tr…, Drugs (2006) | popPK | 8 | [10.2165/00003495-200666030-00006](https://doi.org/10.2165/00003495-200666030-00006) | [16526822](https://pubmed.ncbi.nlm.nih.gov/16526822) | The evidence provides specific quantitative pharmacokinetic parameters (bioavailability, Vd, CL, t1/2) for glyceryl trinitrate in the text. |
| `He_1992.pdf` | He GW et al., Inhibitory effects of glyceryl trinitra…, British journal of clinical… (1992) | pd | 5 | [10.1111/j.1365-2125.1992.tb04130.x](https://doi.org/10.1111/j.1365-2125.1992.tb04130.x) | [1356404](https://www.ncbi.nlm.nih.gov/pubmed/1356404) | metadata signals extractable PD data (EC50) |
| `Huber_1991.pdf` | Huber T et al., [Biologic availability and hemodynamic…, Arzneimittel-Forschung (1991) | pd | 5 | not captured | [1772460](https://www.ncbi.nlm.nih.gov/pubmed/1772460) | metadata signals extractable PD data (EC50) |
| `Ignarro_1989.pdf` | Ignarro LJ et al., Basic polyamino acids rich in arginine,…, Circulation research (1989) | pd | 5 | [10.1161/01.res.64.2.315](https://doi.org/10.1161/01.res.64.2.315) | [2492213](https://www.ncbi.nlm.nih.gov/pubmed/2492213) | metadata signals extractable PD data (EC50) |
| `Kuhn_1989.pdf` | Kuhn M et al., Endothelium-dependent vasodilatation in…, Journal of cardiovascular p… (1989) | pd | 5 | not captured | [2484699](https://www.ncbi.nlm.nih.gov/pubmed/2484699) | metadata signals extractable PD data (EC50) |
| `Argan_2022.pdf` | Argan O et al., In vitro effects of thirty-eight cardia…, Chemical biology & drug des… (2022) | pd | 4 | [10.1111/cbdd.14054](https://doi.org/10.1111/cbdd.14054) | [35395139](https://www.ncbi.nlm.nih.gov/pubmed/35395139) | metadata signals extractable PD data (IC50) |
| `Dautov_2014.pdf` | Dautov RF et al., Hypoxic potentiation of nitrite effects…, Nitric oxide : biology and… (2014) | pd | 4 | [10.1016/j.niox.2014.05.005](https://doi.org/10.1016/j.niox.2014.05.005) | [24858215](https://www.ncbi.nlm.nih.gov/pubmed/24858215) | metadata signals extractable PD data (EC50) |
| `De_1999.pdf` | De la Lande IS et al., Tolerance induction by transdermal glyc…, European journal of pharmac… (1999) | pd | 4 | [10.1016/s0014-2999(99)00319-2](https://doi.org/10.1016/s0014-2999(99)00319-2) | [10422642](https://www.ncbi.nlm.nih.gov/pubmed/10422642) | metadata signals extractable PD data (EC50) |
| `Fujimoto_1994.pdf` | Fujimoto S, Effects of pimobendan, its active metab…, European journal of pharmac… (1994) | pd | 4 | [10.1016/0014-2999(94)90426-x](https://doi.org/10.1016/0014-2999(94)90426-x) | [7875231](https://www.ncbi.nlm.nih.gov/pubmed/7875231) | metadata signals extractable PD data (EC50) |
| `Maragos_1991.pdf` | Maragos CM et al., Complexes of .NO with nucleophiles as a…, Journal of medicinal chemis… (1991) | pd | 4 | [10.1021/jm00115a013](https://doi.org/10.1021/jm00115a013) | [1956043](https://www.ncbi.nlm.nih.gov/pubmed/1956043) | metadata signals extractable PD data (EC50) |
| `Salvemini_1993.pdf` | Salvemini D et al., Release of nitric oxide from glyceryl t…, British journal of pharmaco… (1993) | pd | 4 | [10.1111/j.1476-5381.1993.tb13587.x](https://doi.org/10.1111/j.1476-5381.1993.tb13587.x) | [8358544](https://www.ncbi.nlm.nih.gov/pubmed/8358544) | metadata signals extractable PD data (IC50) |
| `Santamore_1993.pdf` | Santamore WP et al., Disassociation of intrinsic and haemody…, Cardiovascular research (1993) | pd | 4 | [10.1093/cvr/27.11.2058](https://doi.org/10.1093/cvr/27.11.2058) | [8287418](https://www.ncbi.nlm.nih.gov/pubmed/8287418) | metadata signals extractable PD data (EC50) |
| `Torfgård_1990.pdf` | Torfgård K et al., Relaxation of bovine mesenteric arterie…, Pharmacology & toxicology (1990) | pd | 4 | [10.1111/j.1600-0773.1990.tb00816.x](https://doi.org/10.1111/j.1600-0773.1990.tb00816.x) | [2123985](https://www.ncbi.nlm.nih.gov/pubmed/2123985) | metadata signals extractable PD data (concentration-effect) |
| `Wallis_1999.pdf` | Wallis RM et al., Tissue distribution of phosphodiesteras…, The American journal of car… (1999) | pd | 4 | [10.1016/s0002-9149(99)00042-9](https://doi.org/10.1016/s0002-9149(99)00042-9) | [10078537](https://www.ncbi.nlm.nih.gov/pubmed/10078537) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-09T21:59:28.940924+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahlner_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug retention in organ bath materials, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ahmadi_2019 | irrelevant | 0 | 0 | The study investigates the protective effects of nitroglycerine on renal ischemia-reperfusion injury and reports functional outcomes (creatinine clearance, electrolytes) rather than pharmacokinetic disposition parameters for the drug itself. |
| PGx | Angus_1982 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of verapamil and glyceryl trinitrate in animal models but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PD | Argan_2022 | not_relevant | 0 | 0 | The paper investigates the in vitro effects of cardiac drugs on human serum paraoxonase, not the pharmacodynamic or exposure-response relationship of glyceryl trinitrate in vivo. |
| popPK | Aronson_2008 | irrelevant | 0 | 0 | The study is a clinical trial comparing the efficacy and safety of clevidipine and nitroglycerin for acute hypertension, reporting no pharmacokinetic parameters for glyceryl trinitrate. |
| popPK | Aziz_2025 | irrelevant | 0 | 0 | The paper is an in vitro/in silico study of novel pyridazin-3-one derivatives, using nitroglycerin (glyceryl trinitrate) only as a reference standard for vasorelaxant activity, and reports no pharmacokinetic parameters. |
| popPK | Bai_2011 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular reactivity and does not report pharmacokinetic parameters for glyceryl trinitrate. |
| PD | Bashir_1982 | not_relevant | 2 | 1 | The paper reports PK parameters and qualitative changes in blood pressure and heart rate, but it does not provide a quantitative concentration-effect relationship, dose-response curve, or numeric PD parameters (such as Emax or EC50). |
| popPK | Bellien_2017 | irrelevant | 0 | 0 | The study focuses on endothelin-1 physiology and vasodilation, using glyceryl trinitrate only as a diagnostic agent for endothelium-independent dilation without reporting any pharmacokinetic parameters. |
| popPK | Bennett_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nitrate tolerance in rat aorta and does not report pharmacokinetic parameters for glyceryl trinitrate. |
| popPK | Bennett_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular relaxation and biotransformation, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Berner_1994 | not_relevant | 1 | 0 | The text is a general review of transdermal pharmacokinetics that mentions concentration-effect relationships qualitatively but provides no numeric PD parameters or specific exposure-response data for glyceryl trinitrate. |
| PD | Bogaert_1987 | not_relevant | 1 | 0 | The text is a review that explicitly states it has not been possible to find a relationship between plasma concentrations and pharmacological effects, and it provides no numeric PD parameters. |
| popPK | Booth_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of GTN-induced relaxation and biotransformation in rabbit aorta, reporting pharmacodynamic parameters (EC50, NO production) rather than pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Bozinovski_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular relaxation and NO formation, not a pharmacokinetic study reporting disposition parameters for glyceryl trinitrate. |
| popPK | Briejer_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of nitric oxide involvement in guinea-pig colon relaxation, using glyceryl trinitrate only as a positive control agent, and reports no pharmacokinetic parameters. |
| PD | Briejer_1992 | not_relevant | 0 | 0 | The paper reports pharmacological data for 5-HT and uses glyceryl trinitrate (GTN) only as a positive control for NO-mediated relaxation, without providing a dose-response curve or numeric PD parameters for GTN itself. |
| popPK | Caponas_2001 | irrelevant | 0 | 0 | The paper is a literature review on the clinical efficacy of glyceryl trinitrate for uterine relaxation and does not report any pharmacokinetic parameters. |
| popPK | Cundall_2001 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (sphincter relaxation) rather than pharmacokinetic parameters (CL, V, t1/2) for glyceryl trinitrate. |
| popPK | Dautov_2014 | irrelevant | 0 | 0 | The paper title indicates a mechanistic study on nitrite effects in vessels and platelets, not a pharmacokinetic study of glyceryl trinitrate. |
| PD | Dautov_2014 | not_relevant | 0 | 0 | The paper focuses on nitrite (NO2-) effects in hypoxia, not glyceryl trinitrate (GTN), and does not report GTN exposure-response or dose-response parameters. |
| PGx | Dautov_2014 | not_relevant | 0 | 0 | The paper investigates the effects of hypoxia on nitrite, not the pharmacogenomics of glyceryl trinitrate. |
| popPK | De_1999 | irrelevant | 0 | 0 | The evidence provided contains only the title of a study on tolerance induction in rats, with no quantitative pharmacokinetic parameters or numeric values present. |
| PD | De_1999 | not_relevant | 0 | 0 | The provided text is only the title of a paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Deeks_2009 | irrelevant | 0 | 0 | The paper is a review of clevidipine, and glyceryl trinitrate (nitroglycerin) is only mentioned as a comparator agent without any specific pharmacokinetic parameter values provided for it. |
| popPK | DiFabio_2003 | irrelevant | 0 | 0 | The study is a mechanistic investigation of nitrate tolerance using concentration-response curves and enzyme activity assays, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PD | El-Nabarawy_2019 | not_relevant | 0 | 0 | The paper reports PK parameters and behavioral scores for zolmitriptan but does not provide a concentration-effect or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) for glyceryl trinitrate or zolmitriptan. |
| PD | Erb_1994 | not_relevant | 3 | 2 | The study reports bioequivalence metrics (max effect, AUC) for a fixed dose (0.8 mg) but does not provide a concentration-effect curve, dose-response relationship, or numeric PD parameters like Emax/EC50. |
| popPK | Ernstsen_2021 | irrelevant | 0 | 0 | The study uses glyceryl trinitrate (GTN) as a tool to induce a migraine model in mice to test the efficacy of sumatriptan and olcegepant, rather than reporting pharmacokinetic parameters for GTN itself. |
| PD | Ernstsen_2021 | not_relevant | 4 | 3 | The paper reports dose-response relationships for sumatriptan and olcegepant in a GTN mouse model, but it does not report numeric PD parameters (e.g., ED50, Emax) or concentration-effect curves, only statistical significance of dose groups. |
| popPK | Eugene_2016 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic dose-response modeling (blood flow changes) rather than pharmacokinetic disposition parameters (CL, V, ka) for glyceryl trinitrate. |
| popPK | Fujimoto_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of pimobendan on isolated rat vessels, using glyceryl trinitrate only as a comparator agent, and reports no pharmacokinetic parameters. |
| popPK | Fujimoto_1994 | irrelevant | 0 | 0 | The paper focuses on the effects of pimobendan and milrinone on isolated blood vessels and does not report pharmacokinetic parameters for glyceryl trinitrate. |
| PD | Fujimoto_1994 | not_relevant | 0 | 0 | The paper investigates the effects of pimobendan, UD-CG 212, and milrinone, not glyceryl trinitrate. |
| popPK | Fujimoto_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular relaxation in guinea-pig aorta, not a pharmacokinetic study, and glyceryl trinitrate is used only as a comparator agent. |
| PD | Fujimoto_2003 | not_relevant | 1 | 0 | The paper reports an EC50 for hydrogen peroxide, but only lists fixed concentrations for glyceryl trinitrate without providing a dose-response curve or numeric PD parameters for it. |
| popPK | Grayson_1975 | irrelevant | 0 | 0 | The study focuses on hemodynamic and metabolic effects (heat clearance/production) in dog hearts, not pharmacokinetic disposition parameters for glyceryl trinitrate. |
| popPK | Greco_2022 | irrelevant | 0 | 0 | The study investigates FAAH inhibitors (ARN14633, ARN14280) in a migraine model where nitroglycerin is used as a trigger, not as the subject drug for pharmacokinetic analysis. |
| PD | Greig_2005 | not_relevant | 3 | 2 | The study reports time-course hemodynamic effects (peak % change in AIx) for a fixed dose, but does not provide plasma concentration data or fit a concentration-effect model, so no numeric PD parameters (EC50, Emax, etc.) are extractable. |
| popPK | Gönel_2021 | irrelevant | 0 | 0 | The study is an in-vitro investigation of drug-reagent interactions on cardiac marker assays, not a pharmacokinetic study, and contains no PK parameters for glyceryl trinitrate. |
| PD | Hashimoto_2003 | not_relevant | 2 | 0 | The text is a review summary that discusses PK/PD concepts and metabolite ratios qualitatively but does not provide specific numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect curves. |
| popPK | He_1992 | irrelevant | 0 | 0 | The paper describes in-vitro pharmacological effects on arterial contraction, not pharmacokinetic disposition parameters. |
| popPK | Hodoglugil_1997 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilator effects on isolated rat aorta, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Holtz_1989 | irrelevant | 1 | 0 | The study focuses on pharmacodynamics (vasomotion and tolerance) in dogs and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for glyceryl trinitrate. |
| popPK | Huber_1991 | irrelevant | 0 | 0 | The provided evidence contains only the paper title and no quantitative pharmacokinetic parameters or data for glyceryl trinitrate. |
| popPK | Hussain_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasodilation and NO formation, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ignarro_1989 | irrelevant | 0 | 0 | The paper focuses on the mechanism of nitric oxide formation in pulmonary vessels and does not report pharmacokinetic parameters for glyceryl trinitrate. |
| PD | Ignarro_1989 | not_relevant | 0 | 0 | The paper focuses on the effects of polyamino acids on nitric oxide formation and does not report pharmacodynamic or exposure-response data for glyceryl trinitrate. |
| popPK | Ishibashi_2013 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic investigation of bioactivation pathways (ALDH2 inhibition) and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life for glyceryl trinitrate. |
| popPK | Kawamoto_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of biotransformation and relaxation in isolated bovine tissues, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Kielbasa_2019 | irrelevant | 0 | 0 | The paper is a review of monoclonal antibodies for migraine (galcanezumab, etc.) and mentions glyceryl trinitrate only as a trigger for migraine attacks, not as a subject of pharmacokinetic analysis. |
| popPK | Kuhn_1989 | irrelevant | 0 | 0 | The paper title indicates a mechanistic study on vasodilation in isolated arteries, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Kulinowski_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of Petasites hybridus constituents in a nitroglycerin-induced migraine model, not the pharmacokinetics of glyceryl trinitrate. |
| popPK | Kwon_1992 | irrelevant | 2 | 0 | The study focuses on nitroglycerin (a different drug) and its metabolites, not glyceryl trinitrate, and lacks specific quantitative PK parameters for the target drug. |
| popPK | Lau_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasorelaxation and metabolism in rabbit aortic strips, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Leftheriotis_1991 | irrelevant | 0 | 0 | The study investigates hemodynamic effects (blood flow and resistance) of nitroglycerin, not its pharmacokinetic disposition parameters. |
| popPK | Lehenkyi_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular smooth muscle relaxation and calcium dynamics, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Liu_1993 | irrelevant | 0 | 0 | The study is a mechanistic investigation of metabolic activation in rabbit aorta and does not report pharmacokinetic disposition parameters for glyceryl trinitrate. |
| popPK | MacPherson_2006 | irrelevant | 0 | 0 | The study focuses on the mechanism of nitrate tolerance (PDE5 activity) and hemodynamic responses, not on the quantitative pharmacokinetic disposition parameters (CL, V, ka) of glyceryl trinitrate. |
| popPK | Maragos_1991 | irrelevant | 0 | 0 | The paper focuses on the chemistry of nitric oxide complexes and vasorelaxant effects, not on the pharmacokinetic parameters of glyceryl trinitrate. |
| PD | Maragos_1991 | not_relevant | 0 | 0 | The paper focuses on the chemistry of NO complexes and general vasorelaxant effects, without reporting specific exposure-response or dose-response data for glyceryl trinitrate. |
| popPK | Mayer_2011 | irrelevant | 0 | 0 | The study focuses on the vascular effects of vandetanib and uses nitroglycerin (a nitrate donor) only as a diagnostic agent for vasodilation, without reporting any pharmacokinetic parameters for glyceryl trinitrate. |
| popPK | McGuire_1994 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of GTN biotransformation in isolated rat aorta and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Moe_1986 | irrelevant | 2 | 0 | The study reports peak concentrations and hemodynamic effects but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Münzel_1992 | irrelevant | 0 | 0 | The study focuses on the mechanism of interaction between L-methionine and glyceryl trinitrate (pharmacodynamics/hemodynamics) and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Nakashima_1987 | relevant | 9 | 2 | The paper describes a compartmental PK model for nitroglycerin (glyceryl trinitrate) and reports a bioavailability fraction (F), but specific numeric values for clearance, volume, or rate constants are not explicitly listed in the provided evidence. |
| popPK | Nethra_2022 | irrelevant | 1 | 0 | The study is a clinical trial assessing hemodynamic effects (blood pressure/heart rate) rather than pharmacokinetic disposition parameters, and no quantitative PK values (CL, V, ka) are reported. |
| popPK | Nigam_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition on vascular relaxation and does not report pharmacokinetic disposition parameters for glyceryl trinitrate. |
| popPK | Noonan_1986 | irrelevant | 2 | 0 | The paper discusses bioavailability and metabolites but does not report quantitative compartmental PK parameters (CL, V, Q, ka) for glyceryl trinitrate in the provided evidence. |
| popPK | OByrne_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme activity (XOR) and platelet aggregation, not a pharmacokinetic study reporting disposition parameters for glyceryl trinitrate. |
| popPK | Peacock_2009 | irrelevant | 0 | 0 | The paper is a review of clevidipine, and while it mentions nitroglycerin (glyceryl trinitrate) as a comparator, it does not report quantitative pharmacokinetic parameters for glyceryl trinitrate. |
| popPK | Pedersen_2015 | irrelevant | 0 | 0 | The paper is a mechanistic study on mast cell degranulation and does not report pharmacokinetic parameters for glyceryl trinitrate. |
| popPK | Pollak_2001 | irrelevant | 0 | 0 | The paper is a case report on sertraline-induced hypoglycemia where nitroglycerin is only listed as a co-administered medication, with no pharmacokinetic data for glyceryl trinitrate. |
| popPK | Radice_1987 | irrelevant | 0 | 0 | The study focuses on radionuclide ventriculography using Au-195m and uses nitroglycerin only as a hemodynamic challenge agent, reporting no pharmacokinetic parameters for glyceryl trinitrate. |
| popPK | Rösen_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular relaxation and tolerance, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Salvemini_1993 | not_relevant | 0 | 0 | The paper focuses on the mechanism of nitric oxide release by captopril versus enalaprilat, not on the pharmacodynamic exposure-response or dose-response relationship of glyceryl trinitrate itself. |
| popPK | Santamore_1993 | irrelevant | 0 | 0 | The provided evidence contains only a title suggesting a hemodynamic study, with no pharmacokinetic parameters or quantitative disposition data for glyceryl trinitrate. |
| PD | Santamore_1993 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to assess a pharmacodynamic relationship. |
| popPK | Scholefield_2003 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of glyceryl trinitrate for healing anal fissures and does not report any pharmacokinetic parameters. |
| popPK | Schröder_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of guanylate cyclase activation (structure-activity relationship) and does not report pharmacokinetic disposition parameters for glyceryl trinitrate. |
| PGx | Schröder_1988 | not_relevant | 0 | 0 | The study investigates cellular tolerance mechanisms in rat fibroblasts and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Schütte_1997 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of aerosolized NO donors in an animal model but does not report any pharmacogenomic effects or gene variant associations. |
| popPK | Serone_1996 | irrelevant | 0 | 0 | The study focuses on hemodynamic tolerance and baroreflex resetting in rabbits, reporting no pharmacokinetic parameters such as clearance, volume, or half-life for glyceryl trinitrate. |
| popPK | Shackcloth_2008 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasoconstriction where glyceryl trinitrate is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Shackcloth_2008 | not_relevant | 2 | 1 | The paper only mentions a single high concentration of glyceryl trinitrate (220 µM) that reduced contraction, without providing a dose-response curve, EC50, or other numeric PD parameters for the drug. |
| popPK | Sherikar_2019 | irrelevant | 0 | 0 | The study investigates novel chalcone derivatives for anti-inflammatory and vasorelaxant effects, using glyceryl trinitrate only as a standard comparator for NO release and EC50, without reporting any pharmacokinetic parameters for glyceryl trinitrate. |
| PD | Singh_1987 | not_relevant | 0 | 0 | The paper is a review of sotalol and only qualitatively mentions that sotalol reduces glyceryl trinitrate consumption, without providing any numeric PD parameters or exposure-response data for glyceryl trinitrate. |
| popPK | Somogyi-Végh_2019 | irrelevant | 0 | 0 | The paper is a retrospective analysis of drug-drug interaction prevalence in pharmacy dispensing data and does not report any pharmacokinetic parameters for glyceryl trinitrate. |
| PD | Somogyi-Végh_2019 | not_relevant | 0 | 0 | The paper is a retrospective analysis of drug interaction prevalence in prescription data and does not contain any pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for glyceryl trinitrate. |
| PD | Torfgård_1989 | not_relevant | 2 | 1 | The paper reports tissue distribution and a qualitative increase in cGMP in the brain, but provides no numeric concentration-effect data, dose-response curve, or PD parameters (Emax, EC50, etc.) for glyceryl trinitrate. |
| popPK | Vaksmann_2001 | irrelevant | 2 | 1 | The study is a hemodynamic/echocardiographic trial that reports only sparse plasma concentration measurements without deriving quantitative pharmacokinetic parameters like clearance, volume, or half-life. |
| PD | Wallis_1999 | not_relevant | 0 | 0 | The paper focuses on sildenafil and phosphodiesterase distribution, not glyceryl trinitrate. |
| PD | Wiegand_1992 | not_relevant | 3 | 2 | The paper reports qualitative changes in hemodynamic effects (tachycardia, blood pressure, digital pulse) over time and mentions accumulation, but it does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The study investigates the use of nitroglycerin as a vasodilator to improve imaging quality in CTA, not its pharmacokinetic parameters. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper is a bibliometric analysis of exercise therapy in neurological diseases and contains no pharmacokinetic data for glyceryl trinitrate. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper is a bibliometric analysis of exercise therapy in neurological diseases and contains no pharmacodynamic or exposure-response data for glyceryl trinitrate. |
| PD | Zhou_2019 | not_relevant | 2 | 1 | The paper reports qualitative findings on the mechanism of action (endothelium independence) but does not provide numeric concentration-effect curves, dose-response parameters, or a formal PK/PD model fit. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | The provided evidence is only a conference header with no study data, parameters, or text regarding glyceryl trinitrate pharmacokinetics. |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract collection and contains no scientific content, data, or PD parameters. |
| popPK | unknown_1994 | irrelevant | 0 | 0 | The provided evidence contains pharmacokinetic data for various other drugs (e.g., ethinylestradiol, procarbazine, acetylsalicylic acid) but does not mention glyceryl trinitrate or provide any parameters for it. |
| PD | unknown_1994 | not_relevant | 0 | 0 | The provided text is only a title and file description for a conference abstract collection, containing no specific data, models, or numeric parameters for glyceryl trinitrate. |
| popPK | unknown_2013 | irrelevant | 0 | 0 | The evidence consists only of a conference title and abstracts header with no specific study data, drug mention, or pharmacokinetic parameters. |
| PD | unknown_2013 | not_relevant | 0 | 0 | The provided text is only the title of a conference abstract collection and contains no specific data, models, or parameters for glyceryl trinitrate. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | The provided evidence contains only a conference title and no pharmacokinetic data or text regarding glyceryl trinitrate. |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or parameters regarding glyceryl trinitrate. |
| popPK | unknown_2026 | irrelevant | 0 | 0 | The evidence consists only of a conference title with no pharmacokinetic data or study details for glyceryl trinitrate. |
| PD | unknown_2026 | not_relevant | 0 | 0 | The provided text is only a title for a conference abstract collection and contains no data, analysis, or parameters regarding glyceryl trinitrate. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_glyceryl_trinitrate`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
