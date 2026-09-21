<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;quinidine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quinidine_Fattinger1991v2_reference&quot;,&quot;label&quot;:&quot;Fattinger_1991_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_quinidine/Quinidine_Fattinger1991v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quinidine_Kuroda2024_reference&quot;,&quot;label&quot;:&quot;Kuroda_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_quinidine/Quinidine_Kuroda2024_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quinidine_Rakhit1984_reference&quot;,&quot;label&quot;:&quot;Rakhit_1984_reference&quot;,&quot;href&quot;:&quot;drugs/drug_quinidine/Quinidine_Rakhit1984_reference.md&quot;,&quot;status&quot;:&quot;not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quinidine_Ueda1980_reference&quot;,&quot;label&quot;:&quot;Ueda_1980_reference&quot;,&quot;href&quot;:&quot;drugs/drug_quinidine/Quinidine_Ueda1980_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quinidine_Verme1992_reference&quot;,&quot;label&quot;:&quot;Verme_1992_reference&quot;,&quot;href&quot;:&quot;drugs/drug_quinidine/Quinidine_Verme1992_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# quinidine

- **generic name:** quinidine
- **ATC codes:** `C01BA01`
- **DrugBank:** [DB00908](https://go.drugbank.com/drugs/DB00908)
- **groups:** approved

## About

**Description.** Quinidine is a D-isomer of [quinine] present in the bark of the Cinchona tree and similar plant species. This alkaloid was first described in 1848 and has a long history as an antiarrhythmic medication.[A38016,A250050] Quinidine is considered the first antiarrhythmic drug (class Ia) and is moderately efficacious in the acute conversion of atrial fibrillation to normal sinus rhythm.[A38016] It prolongs cellular action potential by blocking sodium and potassium currents. A phenomenon known as “quinidine syncope” was first described in the 1950s, characterized by syncopal attacks and ventricular fibrillation in patients treated with this drug.[A38016] Due to its side effects and increased risk of mortality, the use of quinidine was reduced over the next few decades. However, it continues to be used in the treatment of Brugada syndrome, short QT syndrome and idiopathic ventricular fibrillation.[A250050]

**Indication.** Quinidine is indicated for the management and prophylactic therapy of atrial fibrillation/flutter, as well as the suppression of recurrent documented ventricular arrhythmias.[L42420,L3719] It is also used in the treatment of Brugada syndrome, short QT syndrome and idiopathic ventricular fibrillation.[A250050,A250055].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 16:52 | 6:48 | 3/1/1 | 1/0/0 | 0/0/0 | 148,039/12,474 | ollama / qwen3.8:27b-mtp-q8_0 | 21 | 4/4 | 8/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>route_to: `human_review`</sub> | [Fattinger_1991_2_reference](drugs/drug_quinidine/Quinidine_Fattinger1991v2_reference.md) | Fattinger K et al., Population pharmacokinetics of quinidine, British journal of clinical… (1991) | [10.1111/j.1365-2125.1991.tb05531.x](https://doi.org/10.1111/j.1365-2125.1991.tb05531.x) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag, k12, k21 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Kuroda_2024_reference](drugs/drug_quinidine/Quinidine_Kuroda2024_reference.md) | Kuroda T et al., Rational quinidine dosage regimen for a…, Frontiers in veterinary sci… (2024) | [10.3389/fvets.2024.1454342](https://doi.org/10.3389/fvets.2024.1454342) |
| <span class="pk-badge pk-badge--neutral">not simulated</span> | [Rakhit_1984_reference](drugs/drug_quinidine/Quinidine_Rakhit1984_reference.md) | Rakhit A et al., Pharmacokinetics of quinidine and three…, Journal of pharmacokinetics… (1984) | [10.1007/BF01063608](https://doi.org/10.1007/BF01063608) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Ueda_1980_reference](drugs/drug_quinidine/Quinidine_Ueda1980_reference.md) | Ueda CT et al., Comparative pharmacokinetics of quinidi…, Journal of pharmaceutical s… (1980) | [10.1002/jps.2600691212](https://doi.org/10.1002/jps.2600691212) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: biomarker_kinetics_as_drug_pk</sub><br><sub>route_to: `scholar`</sub> | [Verme_1992_reference](drugs/drug_quinidine/Quinidine_Verme1992_reference.md) | Verme CN et al., Pharmacokinetics of quinidine in male p…, Clinical pharmacokinetics (1992) | [10.2165/00003088-199222060-00005](https://doi.org/10.2165/00003088-199222060-00005) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Luo_2017](drugs/drug_quinidine/pd_Luo_2017_APD90.md) | Luo C et al., Modelling the effects of quinidine, dis…, Physiological measurement (2017) | [10.1088/1361-6579/aa8695](https://doi.org/10.1088/1361-6579/aa8695) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Luo_2017](drugs/drug_quinidine/pd_Luo_2017_CV.md) | Luo C et al., Modelling the effects of quinidine, dis…, Physiological measurement (2017) | [10.1088/1361-6579/aa8695](https://doi.org/10.1088/1361-6579/aa8695) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Luo_2017](drugs/drug_quinidine/pd_Luo_2017_ERP.md) | Luo C et al., Modelling the effects of quinidine, dis…, Physiological measurement (2017) | [10.1088/1361-6579/aa8695](https://doi.org/10.1088/1361-6579/aa8695) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Luo_2017](drugs/drug_quinidine/pd_Luo_2017_QT.md) | Luo C et al., Modelling the effects of quinidine, dis…, Physiological measurement (2017) | [10.1088/1361-6579/aa8695](https://doi.org/10.1088/1361-6579/aa8695) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Luo_2017](drugs/drug_quinidine/pd_Luo_2017_S2_min.md) | Luo C et al., Modelling the effects of quinidine, dis…, Physiological measurement (2017) | [10.1088/1361-6579/aa8695](https://doi.org/10.1088/1361-6579/aa8695) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Luo_2017](drugs/drug_quinidine/pd_Luo_2017_VW.md) | Luo C et al., Modelling the effects of quinidine, dis…, Physiological measurement (2017) | [10.1088/1361-6579/aa8695](https://doi.org/10.1088/1361-6579/aa8695) |

## Coverage

- **PubMed hits:** 114 matched, 20 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 5  ·  extracted 0  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guentert_1979.pdf` | Guentert TW et al., Quinidine pharmacokinetics in man: choi…, Journal of pharmacokinetics… (1979) | popPK | 10 | [10.1007/BF01062532](https://doi.org/10.1007/BF01062532) | [512840](https://pubmed.ncbi.nlm.nih.gov/512840) | The paper reports quantitative pharmacokinetic parameters (V1, Vdarea, clearance, rate constants) for quinidine in humans with specific numeric values provided in the text. |
| `Karbwang_1993.pdf` | Karbwang J et al., A comparison of the pharmacokinetic and…, British journal of clinical… (1993) | popPK | 10 | not captured | [8471402](https://pubmed.ncbi.nlm.nih.gov/8471402) | The abstract explicitly reports quantitative pharmacokinetic parameters for quinidine, including clearance, volume of distribution, and half-life. |
| `Rakhit_1984.pdf` | Rakhit A et al., Pharmacokinetics of quinidine and three…, Journal of pharmacokinetics… (1984) | popPK | 10 | [10.1007/BF01063608](https://doi.org/10.1007/BF01063608) | [6747817](https://pubmed.ncbi.nlm.nih.gov/6747817) | The paper reports quantitative disposition parameters (Vl, clearance, rate constants) for quinidine in humans with all numeric values explicitly present in the text. |
| `Verme_1992.pdf` | Verme CN et al., Pharmacokinetics of quinidine in male p…, Clinical pharmacokinetics (1992) | popPK | 10 | [10.2165/00003088-199222060-00005](https://doi.org/10.2165/00003088-199222060-00005) | [1587058](https://pubmed.ncbi.nlm.nih.gov/1587058) | The paper is a population PK study of quinidine reporting quantitative parameters like Vd (230L) and variability metrics, though specific mean clearance values are described qualitatively rather than as explicit numbers in the provided text. |
| `Ueda_1980.pdf` | Ueda CT et al., Comparative pharmacokinetics of quinidi…, Journal of pharmaceutical s… (1980) | popPK | 9 | [10.1002/jps.2600691212](https://doi.org/10.1002/jps.2600691212) | [7463324](https://pubmed.ncbi.nlm.nih.gov/7463324) | The study reports quantitative PK parameters for quinidine in rabbits, including specific half-life values and qualitative comparisons of clearance and volume, though some specific numeric values for CL and V are not explicitly listed in the text. |

<sub>queue written 2026-09-20T16:46:53.680073+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bergenholm_2016 | irrelevant | 2 | 0 | The study focuses on PKPD modeling of cardiac intervals (PR/QRS) in dogs, reporting pharmacodynamic sensitivity values rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for quinidine. |
| popPK | Kharasch_2004 | irrelevant | 0 | 0 | Quinidine is used solely as a P-gp inhibitor probe to study methadone pharmacokinetics, and no quantitative disposition parameters for quinidine itself are reported. |
| popPK | Luo_2017 | irrelevant | 0 | 0 | The paper is a computational electrophysiology study modeling quinidine's effect on ion channels and action potentials, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Nishimura_1990 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of quinidine's mechanism of action on ionic channels in rabbit atrioventricular nodes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Nyberg_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of edoxaban, with quinidine mentioned only as a concomitant P-gp inhibitor for dose adjustment, not as the subject drug. |
| PD | Nyberg_2016 | not_relevant | 0 | 0 | The paper analyzes the exposure-response relationship for edoxaban, not quinidine; quinidine is only mentioned as a P-glycoprotein inhibitor affecting edoxaban dosing. |
| popPK | Ohtani_1996 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no scientific content or pharmacokinetic data for quinidine. |
| PD | Ohtani_1996 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any scientific content regarding quinidine or pharmacodynamics. |
| popPK | Persoons_2021 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study where quinidine is only a comparator agent, and no pharmacokinetic parameters are reported. |
| popPK | Schlachter_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for atogepant, with quinidine serving only as a co-administered probe drug to assess drug-drug interactions. |
| popPK | Vazzana_2007 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of novel antiarrhythmic analogues where quinidine is used only as a comparator, with no pharmacokinetic parameters reported. |
| PD | Vazzana_2007 | not_relevant | 4 | 2 | The text mentions dose-dependent effects and compares potency to quinidine but does not provide specific numeric PD parameters (EC50, Emax) or extractable concentration-effect curves for quinidine. |
| popPK | Williams_1992 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for digoxin, with quinidine serving only as a covariate affecting digoxin clearance, rather than being the subject drug. |
| popPK | Winkle_1975 | irrelevant | 0 | 0 | The text is a general review of pharmacologic therapy for arrhythmias that mentions quinidine but provides no quantitative pharmacokinetic parameters or original data. |
| popPK | Yin_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of edoxaban, with quinidine serving only as a co-administered P-gp inhibitor to assess drug-drug interactions, not as the subject drug. |
| PD | Yin_2014 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of edoxaban and its interaction with quinidine (as a P-gp inhibitor), but does not report a pharmacodynamic or exposure-response relationship for quinidine itself. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_quinidine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
