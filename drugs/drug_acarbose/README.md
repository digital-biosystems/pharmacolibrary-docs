<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;acarbose&quot;}]"></div>

# acarbose

- **generic name:** acarbose
- **ATC codes:** `A10BD17`, `A10BF01`
- **DrugBank:** [DB00284](https://go.drugbank.com/drugs/DB00284)
- **groups:** approved, investigational

## About

**Description.** Acarbose is a complex oligosaccharide that acts as an inhibitor of several enzymes responsible for the breakdown of complex carbohydrates in the intestines. It inhibits both pancreatic alpha-amylase and membrane-bound alpha-glucosidases - including intestinal glucoamylase, sucrase, maltase, and isomaltase - which are responsible for the metabolism of complex starches and oligo-, tri-, and disaccharides into absorbable simple sugars.[L31633,A37868] By inhibiting the activity of these enzymes, acarbose limits the absorption of dietary carbohydrates and the subsequent postprandial increase in blood glucose and insulin levels. Acarbose is therefore used in conjunction with diet, exercise, and other pharmacotherapies for the management of blood sugar levels in patients with type 2 diabetes.[L31628,L31633]

Acarbose is one of only two approved alpha-glucosidase inhibitors (the other being [miglitol]), receiving its first FDA approval in 1995 under the brand name Precose (since discontinued).[L31668] This class of antidiabetic therapy is not widely used due to their relatively modest impact on A1c, their requirement for thrice-daily dosing, and the potential for significant gastrointestinal adverse effects.[L31668]

**Indication.** Acarbose is indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus.[L31628]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 15:29 | 13:01 | 0/0/0 | 1/1/0 | 0/0/0 | 199,595/7,028 | ollama / qwen3.8:27b-mtp-q8_0 | 24 | 0/0 | 23/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Safamansouri_2014](drugs/drug_acarbose/pd_Safamansouri_2014_alpha_amylase_inhibitory_activity.md) | Safamansouri H et al., α-Amylase inhibitory activity of some t…, Journal of diabetes and met… (2014) | [10.1186/s40200-014-0114-1](https://doi.org/10.1186/s40200-014-0114-1) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Mauldina_2017](drugs/drug_acarbose/pd_Mauldina_2017_unknown.md) | Mauldina MG et al., α-Glucosidase Inhibitory Activity from…, Pharmacognosy magazine (2017) | [10.4103/pm.pm_25_17](https://doi.org/10.4103/pm.pm_25_17) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=acarbose) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…the parent drug. As acarbose is intended to work within the gut, its minimal degree of ora…”</sub> | prose |
| metabolism | small intestine | <sub>“…Acarbose is extensively metabolized within the gastrointestinal tract, primarily by intest…”</sub> | prose |
| excretion | bile duct | <sub>“…ghly half of an orally administered dose is excreted in the feces within 96 hours of admin…”</sub> | prose |
| excretion | kidney | <sub>“…f an orally administered dose) is excreted primarily by the kidneys, suggesting renal excr…”</sub> | prose |

<sub>Actors without a tissue in the table: AMY2A (inhibitor), GAA (inhibitor), MGAM (inhibitor), SI (inhibitor).</sub>

## Coverage

- **PubMed hits:** 1910 matched, 118 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_24 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Aiyedun_2024.pdf` | Aiyedun PO et al., Phytoecdysteroids from Dioscorea dumeto…, Fitoterapia (2024) | pd | 4 | [10.1016/j.fitote.2024.106103](https://doi.org/10.1016/j.fitote.2024.106103) | [38945493](https://www.ncbi.nlm.nih.gov/pubmed/38945493) | metadata signals extractable PD data (IC50) |
| `Al-Romaima_2024.pdf` | Al-Romaima A et al., Identification of New Diterpenoids from…, Journal of agricultural and… (2024) | pd | 4 | [10.1021/acs.jafc.3c05619](https://doi.org/10.1021/acs.jafc.3c05619) | [38157425](https://www.ncbi.nlm.nih.gov/pubmed/38157425) | metadata signals extractable PD data (IC50) |
| `Barber_2021.pdf` | Barber E et al., Flavonoids as Human Intestinal α-Glucos…, Foods (Basel, Switzerland) (2021) | pd | 4 | [10.3390/foods10081939](https://doi.org/10.3390/foods10081939) | [34441720](https://www.ncbi.nlm.nih.gov/pubmed/34441720) | metadata signals extractable PD data (IC50) |
| `Bhatnagar_2023.pdf` | Bhatnagar A et al., Molecular modelling and in vitro studie…, Journal of biomolecular str… (2023) | pd | 4 | [10.1080/07391102.2022.2058093](https://doi.org/10.1080/07391102.2022.2058093) | [35412420](https://www.ncbi.nlm.nih.gov/pubmed/35412420) | metadata signals extractable PD data (IC50) |
| `Boaduo_2014.pdf` | Boaduo NK et al., Evaluation of six plant species used tr…, Pharmaceutical biology (2014) | pd | 4 | [10.3109/13880209.2013.869828](https://doi.org/10.3109/13880209.2013.869828) | [24559378](https://www.ncbi.nlm.nih.gov/pubmed/24559378) | metadata signals extractable PD data (EC50) |
| `Hamedi_2020.pdf` | Hamedi A et al., A trisaccharide phenylethanoid glycosid…, Bioorganic chemistry (2020) | pd | 4 | [10.1016/j.bioorg.2020.103776](https://doi.org/10.1016/j.bioorg.2020.103776) | [32276136](https://www.ncbi.nlm.nih.gov/pubmed/32276136) | metadata signals extractable PD data (IC50) |
| `Huang_2018.pdf` | Huang HT et al., Isolation and Identification of Potent…, Molecules (Basel, Switzerla… (2018) | pd | 4 | [10.3390/molecules23112864](https://doi.org/10.3390/molecules23112864) | [30400247](https://www.ncbi.nlm.nih.gov/pubmed/30400247) | metadata signals extractable PD data (EC50) |
| `Ikoya_2026.pdf` | Ikoya S et al., Unlocking the Antidiabetic and Antioxid…, Chemistry & biodiversity (2026) | pd | 4 | [10.1002/cbdv.202503009](https://doi.org/10.1002/cbdv.202503009) | [42037570](https://www.ncbi.nlm.nih.gov/pubmed/42037570) | metadata signals extractable PD data (IC50) |
| `Javaid_2021.pdf` | Javaid A et al., Phytochemical Analysis and Antidiabetic…, Combinatorial chemistry & h… (2021) | pd | 4 | [10.2174/1386207323666200526134512](https://doi.org/10.2174/1386207323666200526134512) | [32452324](https://www.ncbi.nlm.nih.gov/pubmed/32452324) | metadata signals extractable PD data (IC50) |
| `Kiran_2023.pdf` | Kiran S et al., Three new α-glucosidase inhibitor benzo…, Natural product research (2023) | pd | 4 | [10.1080/14786419.2022.2116020](https://doi.org/10.1080/14786419.2022.2116020) | [36000210](https://www.ncbi.nlm.nih.gov/pubmed/36000210) | metadata signals extractable PD data (IC50) |
| `Krause_1982.pdf` | Krause HP et al., Inhibition of disaccharide digestion in…, Digestion (1982) | pd | 4 | [10.1159/000198755](https://doi.org/10.1159/000198755) | [6754513](https://www.ncbi.nlm.nih.gov/pubmed/6754513) | metadata signals extractable PD data (IC50) |
| `Liu_2014.pdf` | Liu Q et al., Bioactive diterpenoids and flavonoids f…, Journal of natural products (2014) | pd | 4 | [10.1021/np500150f](https://doi.org/10.1021/np500150f) | [24955889](https://www.ncbi.nlm.nih.gov/pubmed/24955889) | metadata signals extractable PD data (IC50) |
| `Liu_2026.pdf` | Liu H et al., Ultrasound-Assisted Extraction of Polyp…, Molecules (Basel, Switzerla… (2026) | pd | 4 | [10.3390/molecules31071138](https://doi.org/10.3390/molecules31071138) | [41976181](https://www.ncbi.nlm.nih.gov/pubmed/41976181) | metadata signals extractable PD data (EC50) |
| `Ooh_2014.pdf` | Ooh KF et al., High performance liquid chromatography…, Pharmacognosy magazine (2014) | pd | 4 | [10.4103/0973-1296.139767](https://doi.org/10.4103/0973-1296.139767) | [25298659](https://www.ncbi.nlm.nih.gov/pubmed/25298659) | metadata signals extractable PD data (EC50) |
| `Rashid_2022.pdf` | Rashid F et al., Integrating Pharmacological and Computa…, Molecules (Basel, Switzerla… (2022) | pd | 4 | [10.3390/molecules27175734](https://doi.org/10.3390/molecules27175734) | [36080496](https://www.ncbi.nlm.nih.gov/pubmed/36080496) | metadata signals extractable PD data (IC50) |
| `Singh_2024.pdf` | Singh CP et al., Two new cycloartane type triterpenes fr…, Natural product research (2024) | pd | 4 | [10.1080/14786419.2023.2172008](https://doi.org/10.1080/14786419.2023.2172008) | [36710465](https://www.ncbi.nlm.nih.gov/pubmed/36710465) | metadata signals extractable PD data (IC50) |
| `Thangsiri_2024.pdf` | Thangsiri S et al., Phenolic content of Thai Bao mango peel…, Saudi journal of biological… (2024) | pd | 4 | [10.1016/j.sjbs.2024.104033](https://doi.org/10.1016/j.sjbs.2024.104033) | [38946846](https://www.ncbi.nlm.nih.gov/pubmed/38946846) | metadata signals extractable PD data (IC50) |
| `Thu_2022.pdf` | Thu VK et al., Iridoid glycosides link with phenylprop…, Natural product research (2022) | pd | 4 | [10.1080/14786419.2021.1931189](https://doi.org/10.1080/14786419.2021.1931189) | [34039230](https://www.ncbi.nlm.nih.gov/pubmed/34039230) | metadata signals extractable PD data (IC50) |
| `Yadav_2025.pdf` | Yadav RK et al., LC-MS analysis and antioxidant, antibac…, PloS one (2025) | pd | 4 | [10.1371/journal.pone.0319338](https://doi.org/10.1371/journal.pone.0319338) | [40063879](https://www.ncbi.nlm.nih.gov/pubmed/40063879) | metadata signals extractable PD data (IC50) |
| `Zengin_2015.pdf` | Zengin G et al., Enzyme Inhibitory Properties, Antioxida…, Advances in pharmacological… (2015) | pd | 4 | [10.1155/2015/410675](https://doi.org/10.1155/2015/410675) | [26798334](https://www.ncbi.nlm.nih.gov/pubmed/26798334) | metadata signals extractable PD data (IC50) |
| `Zhang_2021.pdf` | Zhang X et al., Bioactive amides from Polygonum cuspida…, Journal of Asian natural pr… (2021) | pd | 4 | [10.1080/10286020.2021.1873298](https://doi.org/10.1080/10286020.2021.1873298) | [33459060](https://www.ncbi.nlm.nih.gov/pubmed/33459060) | metadata signals extractable PD data (IC50) |
| `Zhang_2023.pdf` | Zhang L et al., Physicochemical characterizations, α-am…, International journal of bi… (2023) | pd | 4 | [10.1016/j.ijbiomac.2023.126047](https://doi.org/10.1016/j.ijbiomac.2023.126047) | [37517764](https://www.ncbi.nlm.nih.gov/pubmed/37517764) | metadata signals extractable PD data (IC50) |
| `Bozkurt_2007.pdf` | Bozkurt O et al., Pharmacogenetics of glucose-lowering dr…, Molecular diagnosis & thera… (2007) | pgx | 8 | [10.1007/BF03256250](https://doi.org/10.1007/BF03256250) | [17963417](https://www.ncbi.nlm.nih.gov/pubmed/17963417) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Maruthur_2014.pdf` | Maruthur NM et al., The pharmacogenetics of type 2 diabetes…, Diabetes care (2014) | pgx | 8 | [10.2337/dc13-1276](https://doi.org/10.2337/dc13-1276) | [24558078](https://www.ncbi.nlm.nih.gov/pubmed/24558078) | metadata signals extractable PGX data (SLC22A1, PK/PD-context) |

<sub>queue written 2026-09-15T15:21:27.789872+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbas_2026 | irrelevant | 0 | 0 | The paper is a materials science study on the synthesis of iron oxide nanoparticles and does not report pharmacokinetic parameters for acarbose, which is only mentioned as a positive control in an in-vitro enzyme assay. |
| PD | Abbas_2026 | not_relevant | 0 | 0 | The paper reports the synthesis and characterization of iron oxide nanoparticles, not the pharmacodynamics of the drug acarbose. |
| PD | Aiyedun_2024 | not_relevant | 0 | 0 | The paper focuses on phytoecdysteroids from Dioscorea dumetorum and does not report any pharmacodynamic or exposure-response data for acarbose. |
| popPK | Al-Ghorbani_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel compounds with acarbose used only as a comparator for enzyme inhibition, containing no pharmacokinetic data. |
| PD | Al-Ghorbani_2023 | not_relevant | 1 | 2 | The paper reports in vitro enzyme inhibition IC50 values for acarbose as a reference standard, but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship in a biological system. |
| PD | Al-Romaima_2024 | not_relevant | 0 | 0 | The paper focuses on the isolation of new diterpenoids from coffee pulp and their in vitro alpha-glucosidase inhibition, not on the pharmacodynamics or exposure-response of the drug acarbose. |
| popPK | Assaggaf_2022 | irrelevant | 0 | 0 | The paper investigates the chemical composition and biological effects of Salvia officinalis essential oils, not the pharmacokinetics of acarbose. |
| PD | Assaggaf_2022 | not_relevant | 0 | 0 | The paper investigates the biological effects of Salvia officinalis essential oils, not the pharmacokinetics or pharmacodynamics of the drug acarbose. |
| popPK | Ayoup_2024 | irrelevant | 0 | 0 | The paper is an in-vitro medicinal chemistry study comparing new sulfonamide derivatives to acarbose as a reference inhibitor, with no pharmacokinetic data reported. |
| PD | Ayoup_2024 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) and glucose uptake (EC50) data for novel sulfonamide derivatives, using acarbose only as a comparative reference without providing specific numeric PD parameters or exposure-response relationships for acarbose itself. |
| popPK | Babaev_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on triterpenoids where acarbose is used only as a comparator for alpha-glucosidase inhibition, with no pharmacokinetic parameters reported. |
| PD | Babaev_2022 | not_relevant | 0 | 0 | The paper reports IC50 values for new triterpenoid compounds and compares them to acarbose, but does not report a pharmacodynamic model or exposure-response relationship for acarbose itself. |
| PD | Barber_2021 | not_relevant | 0 | 0 | The paper focuses on flavonoids as inhibitors and does not report pharmacodynamic or exposure-response data for acarbose. |
| PD | Bhatnagar_2023 | not_relevant | 0 | 0 | The paper focuses on Daruharidra as an alpha-amylase inhibitor and does not report pharmacodynamic or exposure-response data for acarbose. |
| PD | Bischoff_1994 | not_relevant | 1 | 0 | The text is a qualitative review of the pharmacology of acarbose and does not provide specific numeric PD parameters or extractable concentration-effect data. |
| PD | Bischoff_1995 | not_relevant | 2 | 0 | The text is a qualitative review of the mechanism of action and general effects of acarbose, mentioning dose-dependence but providing no numeric PD parameters, concentration-effect curves, or specific PK/PD model fits. |
| popPK | Blanch_2010 | irrelevant | 0 | 0 | The study focuses on ruminal fermentation and blood metabolites in dairy cows, not on the pharmacokinetic disposition parameters (CL, V, ka) of acarbose. |
| popPK | Boaduo_2014 | irrelevant | 0 | 0 | The study is an in vitro evaluation of plant species for diabetes and does not report pharmacokinetic parameters for acarbose. |
| PD | Boaduo_2014 | not_relevant | 0 | 0 | The paper evaluates plant species for diabetes treatment using in vitro methods and does not report pharmacodynamic or exposure-response data for the drug acarbose. |
| PGx | Bozkurt_2007 | not_relevant | 4 | 2 | The paper mentions an association between PPARG/ADIPOQ polymorphisms and conversion to diabetes with acarbose, but it is a systematic review lacking specific PK/PD parameter data or fitted effect sizes for acarbose. |
| popPK | Calcatierra_2015 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of new compounds where acarbose is used only as a comparator for enzyme inhibition, with no pharmacokinetic parameters reported. |
| popPK | Chai_2016 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of herbal extracts where acarbose is used only as a comparator for enzyme inhibition, not a PK study. |
| PD | Chai_2016 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition data for herbal fractions and only qualitatively compares them to acarbose without providing numeric PD parameters or exposure-response relationships for the drug. |
| popPK | Chen_2021 | irrelevant | 1 | 0 | The study evaluates bioequivalence using pharmacodynamic endpoints (serum glucose) rather than pharmacokinetic parameters, and no quantitative PK values for acarbose are reported. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper is a pharmacological study on natural products where acarbose is used only as a comparator for enzyme inhibition, with no pharmacokinetic parameters reported. |
| PD | Chen_2023 | not_relevant | 1 | 1 | The paper reports in vitro enzyme inhibition IC50 values for natural products and compares them to a single IC50 value for acarbose, but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for acarbose in vivo. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of quetiapine, and acarbose is only listed as a co-administered drug in the demographic table without any PK parameters reported for it. |
| PD | Chen_2024 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PPK) of quetiapine and does not report any pharmacodynamic (PD) or exposure-response relationship for acarbose. |
| PD | Clissold_1988 | not_relevant | 2 | 1 | The text is a qualitative review summarizing clinical outcomes and general pharmacodynamic properties without providing specific numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect curves. |
| popPK | Colin_2024 | irrelevant | 0 | 0 | The paper is a review of Cassia alata bioactive compounds where acarbose is only mentioned as a standard comparator for molecular docking and enzyme inhibition, with no pharmacokinetic parameters reported. |
| PD | Colin_2024 | not_relevant | 1 | 0 | The paper is a narrative review of Cassia alata bioactive compounds; acarbose is mentioned only as a standard comparator in in silico docking studies, with no pharmacodynamic or exposure-response data reported for it. |
| PD | Coniff_1995 | not_relevant | 3 | 2 | The paper reports a clinical dose-comparison study with mean effect differences and a qualitative trend toward dose-response, but it does not provide a formal PK/PD model, concentration-effect curve, or specific numeric PD parameters (e.g., Emax, EC50) that can be extracted. |
| popPK | Corlatti_2026 | irrelevant | 0 | 0 | The paper is a review of phytochemicals in the Helianthus genus and does not contain pharmacokinetic data for acarbose. |
| PD | Corlatti_2026 | not_relevant | 0 | 0 | The paper is a review of the Helianthus genus and does not contain any pharmacodynamic or exposure-response data for acarbose. |
| PD | Dhameja_2023 | not_relevant | 1 | 1 | The paper reports a single IC50 value for acarbose as a reference standard in an in vitro enzyme assay, which does not constitute a pharmacodynamic exposure-response or dose-response relationship analysis. |
| popPK | Dinu_2025 | irrelevant | 0 | 0 | The paper is a review on synthetic sulfonamides and antioxidants for diabetes management, and acarbose is only mentioned as a class of drug (alpha-glucosidase inhibitor) without any pharmacokinetic data. |
| PD | Dinu_2025 | not_relevant | 0 | 0 | The paper is a review on the synergism of synthetic sulfonamides and natural antioxidants for diabetes management; it does not report any pharmacodynamic or exposure-response data for acarbose. |
| popPK | Elmehalawy_2025 | irrelevant | 0 | 0 | The paper is a study on the synthesis and biological activity of silver nanoparticles, where acarbose is used only as a positive control for in-vitro enzyme inhibition assays, not as a subject for pharmacokinetic analysis. |
| PD | Elmehalawy_2025 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition percentages for acarbose as a positive control but does not provide a concentration-response curve, EC50, or any pharmacokinetic/pharmacodynamic modeling for the drug. |
| PD | Etemadi-Tajbakhsh_2020 | not_relevant | 1 | 0 | The paper reports a single comparative inhibitory percentage (76.9% of acarbose activity) for a plant compound at a specific concentration, but does not provide numeric PD parameters (IC50, Emax, etc.) or a dose-response curve for acarbose itself. |
| popPK | Ferreres_2012 | irrelevant | 0 | 0 | The paper is a phytochemical and in-vitro biological activity study of Bauhinia forficata, where acarbose is used only as a comparator for alpha-glucosidase inhibition, with no pharmacokinetic data reported. |
| PD | Ferreres_2012 | not_relevant | 0 | 0 | The paper focuses on the chemical profiling of Bauhinia forficata and compares its in vitro enzyme inhibition to acarbose, but does not report any pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for acarbose. |
| PD | Gao_2020 | not_relevant | 1 | 0 | The paper reports a single IC50 value for acarbose as a positive control in an in vitro enzyme assay, but does not provide a dose-response curve, concentration-effect data, or any pharmacokinetic/pharmacodynamic modeling for the drug. |
| popPK | Gharge_2025 | irrelevant | 0 | 0 | The study focuses on novel rhodanine-thiazole hybrids and does not report pharmacokinetic parameters for acarbose. |
| PD | Gharge_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel rhodanine-thiazole hybrids, not acarbose, and contains no pharmacodynamic or exposure-response analysis for the target drug. |
| PD | Gutiérrez-González_2021 | not_relevant | 2 | 1 | The paper reports in vitro enzyme inhibition IC50 values for natural products and acarbose, but does not provide a pharmacokinetic or pharmacodynamic exposure-response relationship in a biological system. |
| popPK | Guzmán-Flores_2026 | irrelevant | 0 | 0 | The paper is an in silico study on compounds for early childhood caries and does not involve acarbose or report any pharmacokinetic parameters. |
| PD | Guzmán-Flores_2026 | not_relevant | 0 | 0 | The paper is an in silico study on TLR2 and Streptococcus mutans and does not mention acarbose or report any pharmacodynamic or exposure-response data. |
| popPK | Hafez_2024 | irrelevant | 0 | 0 | The paper is a review of the pharmacological attributes of Acacia (Vachellia nilotica) and does not contain any pharmacokinetic data for acarbose. |
| PD | Hafez_2024 | not_relevant | 0 | 0 | The paper is a review of Vachellia nilotica (Acacia) and does not contain any pharmacodynamic or exposure-response data for acarbose. |
| PD | Hairani_2022 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for new chrysin derivatives, not a pharmacodynamic or exposure-response relationship for the drug acarbose in a biological system. |
| popPK | Hamedi_2020 | irrelevant | 0 | 0 | The paper focuses on a different compound (a trisaccharide phenylethanoid glycoside) and its mechanism of action, not the pharmacokinetics of acarbose. |
| PD | Hamedi_2020 | not_relevant | 0 | 0 | The paper studies a trisaccharide phenylethanoid glycoside from Scrophularia flava, not the drug acarbose. |
| PGx | He_2020 | not_relevant | 0 | 0 | The paper is a case report on Gitelman syndrome and T2DM; acarbose is mentioned only as a treatment for blood glucose control, with no analysis of how genetic variants affect its pharmacokinetics or pharmacodynamics. |
| PD | Hoang_2022 | not_relevant | 1 | 1 | The paper reports a single in vitro IC50 value for acarbose as a positive control for a new compound, which is a static potency metric, not a pharmacodynamic exposure-response or dose-response relationship analysis. |
| PGx | Hsu_2014 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy of acarbose in hepatitis C patients but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Huang_2018 | irrelevant | 0 | 0 | The paper focuses on the isolation of compounds from a mushroom and does not report pharmacokinetic parameters for acarbose. |
| PD | Huang_2018 | not_relevant | 0 | 0 | The paper focuses on the isolation and identification of antidiabetic compounds from a mushroom and does not report any pharmacodynamic or exposure-response analysis for acarbose. |
| popPK | Ibrahim_2018 | irrelevant | 0 | 0 | The paper is a simulation study on study design for glucose tolerance tests and does not report pharmacokinetic parameters for acarbose. |
| PD | Ibrahim_2018 | not_relevant | 0 | 0 | The paper is a simulation study on study design for hypothetical drug mechanisms and does not report specific pharmacodynamic data or numeric PD parameters for acarbose. |
| popPK | Ikoya_2026 | irrelevant | 0 | 0 | The paper focuses on in vitro and in silico studies of Phyllanthus amarus and does not report pharmacokinetic parameters for acarbose. |
| PD | Ikoya_2026 | not_relevant | 0 | 0 | The paper focuses on Phyllanthus amarus and does not report pharmacodynamic or exposure-response data for acarbose. |
| PD | Javaid_2021 | not_relevant | 0 | 0 | The paper focuses on Armoracia rusticana and does not report pharmacodynamic or exposure-response data for acarbose. |
| popPK | Kayukova_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel compounds where acarbose is used only as a reference drug for in vitro antidiabetic activity, with no pharmacokinetic data reported. |
| PD | Kayukova_2026 | not_relevant | 0 | 0 | The paper is a medicinal chemistry study reporting the synthesis and in vitro screening of new compounds, with no pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters for acarbose. |
| popPK | Ke_2024 | irrelevant | 0 | 0 | The paper is a mechanistic and synthetic study on xanthones where acarbose is used only as a comparator for in-vitro enzyme inhibition, with no pharmacokinetic parameters reported. |
| PD | Ke_2024 | not_relevant | 1 | 1 | The paper reports in vitro IC50 values for acarbose as a reference compound but does not present a pharmacokinetic or pharmacodynamic model, exposure-response analysis, or dose-response curve for acarbose in vivo. |
| popPK | Kinnings_2010 | irrelevant | 0 | 0 | The paper is a computational study on drug-target networks in Mycobacterium tuberculosis and mentions acarbose only as an example of a drug co-crystallized with multiple proteins, providing no pharmacokinetic parameters. |
| PD | Kiran_2023 | not_relevant | 0 | 0 | The paper reports the isolation and in vitro enzyme inhibition (IC50) of new compounds from Datura stramonium, not the pharmacodynamics or exposure-response of the drug acarbose. |
| popPK | Lani_2026 | irrelevant | 0 | 0 | The paper is a review of date palm nutraceuticals and does not contain any pharmacokinetic data or parameters for acarbose. |
| PD | Lani_2026 | not_relevant | 0 | 0 | The paper is a review of nutraceuticals from date palm (Phoenix dactylifera) and does not contain any pharmacodynamic or exposure-response data for acarbose. |
| PGx | Le_2025 | not_relevant | 0 | 0 | The paper reports the isolation of natural compounds and their in vitro inhibition of alpha-glucosidase, using acarbose only as a positive control; it does not investigate pharmacogenomic effects on acarbose PK/PD. |
| popPK | Lebang_2026 | irrelevant | 0 | 0 | The paper is a review of Clerodendrum plants for metabolic syndrome, and acarbose is mentioned only as a standard comparator for alpha-glucosidase inhibition, with no pharmacokinetic parameters reported. |
| PD | Lebang_2026 | not_relevant | 0 | 0 | The paper is a review of Clerodendrum plants and does not contain any pharmacodynamic or exposure-response data for acarbose. |
| popPK | Lee_2024 | irrelevant | 0 | 0 | The paper is a natural product isolation study where acarbose is used only as a reference standard for in vitro enzyme inhibition, with no pharmacokinetic data reported. |
| PD | Lee_2024 | not_relevant | 0 | 0 | The paper reports IC50 for acarbose only as a reference standard for novel fungal compounds, not as a pharmacodynamic analysis of acarbose itself. |
| PD | Li_2023 | not_relevant | 2 | 2 | The paper reports an in vitro IC50 for acarbose as a positive control but does not provide an exposure-response or dose-response curve, Emax, or PK/PD model for the drug. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of probe drugs (midazolam, dabigatran, etc.) to assess DMET activity, and acarbose is only listed as a medication used by participants, not as the subject drug. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics (PopPK) of probe drugs to assess drug-metabolizing enzyme and transporter (DMET) activities in type 2 diabetes, and does not report any pharmacodynamic (PD) or exposure-response relationships for acarbose or any other drug. |
| PD | Lin_2015 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition data (IC50) for plant compounds and compares them to acarbose, but does not report a pharmacodynamic or exposure-response relationship for acarbose itself. |
| popPK | Liu_2014 | irrelevant | 0 | 0 | The paper is a phytochemical study on Scoparia dulcis and does not involve acarbose pharmacokinetics. |
| PD | Liu_2014 | not_relevant | 0 | 0 | The paper focuses on the isolation and identification of bioactive compounds from Scoparia dulcis and does not contain any pharmacodynamic or exposure-response data for acarbose. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper focuses on the extraction and chemical profiling of polyphenols from Hericium erinaceus and does not involve acarbose pharmacokinetics. |
| PD | Liu_2026 | not_relevant | 0 | 0 | The paper focuses on the extraction and chemical profiling of polyphenols from Hericium erinaceus and does not mention acarbose or any pharmacodynamic modeling. |
| popPK | Lundquist_1992 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of acarbose on islet enzyme activity and insulin secretion, not pharmacokinetic disposition parameters. |
| PGx | Maruthur_2014 | not_relevant | 2 | 0 | The paper is a systematic review that lists gene loci associated with acarbose response but does not report specific quantitative PK/PD parameter changes or fitted effect sizes in the provided text. |
| PGx | Mattosova_2015 | not_relevant | 0 | 0 | The paper describes the use of acarbose as a laboratory reagent to inhibit maltase-glucoamylase for the diagnosis of Pompe disease, not as a therapeutic drug subject to pharmacogenomic analysis. |
| popPK | Mauldina_2017 | irrelevant | 0 | 0 | The study is an in-vitro pharmacognosy paper testing alpha-glucosidase inhibition of plant extracts, using acarbose only as a reference standard, and reports no pharmacokinetic parameters. |
| popPK | Messah_2026 | irrelevant | 0 | 0 | The study is an in vitro/in silico investigation of natural compounds where acarbose is used only as a reference inhibitor, with no pharmacokinetic parameters reported. |
| PD | Messah_2026 | not_relevant | 2 | 2 | The paper reports single-point IC50 values for acarbose as a reference standard in in vitro enzyme inhibition assays, but does not provide a full concentration-effect curve, dose-response model, or PK/PD analysis required to derive a pharmacodynamic relationship. |
| popPK | Mosbah_2019 | irrelevant | 0 | 0 | The paper is a study on the biological activities of isoxazolidine derivatives, where acarbose is used only as a standard comparator for alpha-amylase inhibition, not as the subject of a pharmacokinetic study. |
| PD | Mosbah_2019 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for new isoxazolidine derivatives and cites acarbose only as a standard comparator; it does not report a pharmacodynamic or exposure-response relationship for acarbose itself. |
| popPK | Muddather_2026 | irrelevant | 0 | 0 | The paper is a review of DPP-4 inhibitors in cancer and does not report pharmacokinetic parameters for acarbose. |
| PD | Muddather_2026 | not_relevant | 0 | 0 | The paper is a review of DPP-4 inhibitors in female cancers and does not mention acarbose or report any pharmacodynamic or exposure-response data. |
| popPK | Naji_2025 | irrelevant | 0 | 0 | The paper is a phytochemical and in silico study of a plant extract and does not report pharmacokinetic parameters for acarbose. |
| PD | Naji_2025 | not_relevant | 0 | 0 | The paper investigates the phytochemical and pharmacological properties of a plant extract (Corallocarpus glomeruliflorus) and does not report any pharmacodynamic or exposure-response data for the drug acarbose. |
| PGx | Natalia_2015 | not_relevant | 0 | 0 | The paper studies the effect of a disulfide bond on the stability and activity of a fungal alpha-amylase enzyme, not the pharmacokinetics or pharmacodynamics of the drug acarbose in humans. |
| popPK | Nguyen_2018 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on alpha-glucosidase inhibition, not a pharmacokinetic study, and acarbose is used only as a positive control. |
| popPK | Nurkolis_2023 | irrelevant | 0 | 0 | The study is an in-vitro biological activity assessment of green algae polysaccharides where acarbose is used only as a positive control, with no pharmacokinetic parameters reported. |
| PD | Nurkolis_2023 | not_relevant | 0 | 0 | The paper studies sulfated polysaccharides from green algae and only mentions acarbose as a positive control for comparison of EC50 values; it does not report a PD or exposure-response relationship for acarbose itself. |
| PD | Ogden_1989 | not_relevant | 0 | 0 | The paper uses acarbose as a ligand for affinity chromatography to purify alpha-amylase; the reported IC50 is a biochemical binding constant for the purification method, not a pharmacodynamic exposure-response relationship for the drug in vivo. |
| popPK | Ooh_2014 | irrelevant | 0 | 0 | The paper focuses on phytochemical profiling and antioxidant activities of wetland macrophytes, not the pharmacokinetics of acarbose. |
| PD | Ooh_2014 | not_relevant | 0 | 0 | The paper focuses on phytochemical profiling and in vitro enzyme inhibition of wetland plants, not on the pharmacokinetics or pharmacodynamics of the drug acarbose. |
| popPK | Ortaakarsu_2025 | irrelevant | 0 | 0 | The study is an in-vitro enzyme inhibition and in-silico docking study where acarbose is used only as a positive control/comparator, not as the subject of a pharmacokinetic analysis. |
| PD | Ortaakarsu_2025 | not_relevant | 0 | 0 | The paper investigates a plant extract (Cardaria draba), not the drug acarbose; acarbose is only mentioned as a standard reference in the assay method. |
| PD | Punia_2024 | not_relevant | 2 | 2 | The paper reports single-point IC50 values for acarbose as a reference standard in a medicinal chemistry study, but does not provide a full dose-response curve, PK/PD model, or derivable PD parameters (like Emax or slope) for the drug. |
| popPK | Qasem_2022 | irrelevant | 0 | 0 | The paper investigates the biological properties of Matricaria chamomilla essential oils and honey, not the pharmacokinetics of acarbose. |
| PD | Qasem_2022 | not_relevant | 0 | 0 | The paper investigates Matricaria chamomilla essential oils and honey, not acarbose, and reports no pharmacodynamic or exposure-response data for the target drug. |
| PD | Rashid_2022 | not_relevant | 0 | 0 | The paper focuses on the phytochemical analysis of Syzygium cumini and its anti-diabetic potential, with no mention of acarbose or any pharmacodynamic modeling. |
| PGx | Sadeghi_2025 | not_relevant | 0 | 0 | The paper investigates the therapeutic effects of a pepper fruit extract in a mouse model and does not report any pharmacogenomic effects on the PK or PD of acarbose. |
| popPK | Salehi_1995 | irrelevant | 0 | 0 | The study is a mechanistic investigation of acarbose's effect on islet enzyme activity and insulin secretion, not a pharmacokinetic study reporting disposition parameters. |
| PD | Salvatore_1996 | not_relevant | 3 | 2 | The paper is a review that qualitatively describes dose-dependent effects (e.g., 50, 100, 200 mg doses) and provides an in vitro affinity constant (Ki), but it does not report a fitted PK/PD model or extractable numeric PD parameters (like Emax, EC50, or slope) for the drug's effect in vivo. |
| PD | Scheen_1995 | not_relevant | 1 | 0 | The text is a qualitative review of drug interactions and does not report any numeric PD parameters or concentration-effect data for acarbose. |
| PGx | Seeringer_2010 | not_relevant | 2 | 5 | The paper reports an association between a gene variant and HbA1c levels (a clinical outcome) for insulinotropic drugs, but does not report specific pharmacokinetic or pharmacodynamic parameters for acarbose. |
| popPK | Senevirathne_2021 | irrelevant | 0 | 0 | The paper is an in-vitro study on the antiamylase and antiglycation properties of millets and sorghum, using acarbose only as a positive control for enzyme inhibition, and does not report any pharmacokinetic parameters for acarbose. |
| popPK | Shahzadi_2026 | irrelevant | 0 | 0 | The study investigates the phytochemical and pharmacological effects of Fraxinus xanthoxyloides bark, using acarbose only as an in-vitro positive control for enzyme inhibition, and does not report any pharmacokinetic parameters for acarbose. |
| PD | Shahzadi_2026 | not_relevant | 0 | 0 | The paper studies a plant extract (Fraxinus xanthoxyloides) and uses acarbose only as a positive control in in vitro enzyme assays; it does not report a pharmacodynamic or exposure-response relationship for acarbose itself. |
| PD | Singh_2024 | not_relevant | 0 | 0 | The paper reports the isolation and characterization of triterpenes from a plant and does not contain any pharmacodynamic or exposure-response data for acarbose. |
| PGx | Srinivasan_2018 | not_relevant | 0 | 0 | The text is a general introduction/review of antidiabetic drug pharmacogenetics and does not report specific data or effects for acarbose. |
| popPK | Su_2025 | irrelevant | 0 | 0 | The paper is a genetic association and drug repurposing study for Alzheimer's disease where acarbose is used as a comparator agent, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Su_2026 | irrelevant | 0 | 0 | The paper is a genetic association and drug repurposing study for Alzheimer's disease where acarbose is used only as a comparator drug, with no pharmacokinetic parameters reported. |
| popPK | Sultan_2025 | irrelevant | 0 | 0 | The paper is a synthetic chemistry and in-vitro biological evaluation study where acarbose is used only as a comparator for enzyme inhibition, not as the subject of a pharmacokinetic study. |
| PD | Sultan_2025 | not_relevant | 1 | 1 | The paper reports a single IC50 value for acarbose as a standard comparator in an in vitro assay, but does not provide a dose-response curve, concentration-effect data, or PK/PD model parameters for acarbose. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The paper is a narrative review of semi-mechanistic HbA1c models and does not report original quantitative pharmacokinetic parameters for acarbose. |
| PD | Tan_2026 | not_relevant | 1 | 0 | The paper is a narrative review of semi-mechanistic HbA1c models and does not report specific numeric PD parameters or exposure-response relationships for acarbose. |
| popPK | Tang_2026 | irrelevant | 0 | 0 | The paper is a bioinformatics study on miRNAs in rheumatoid arthritis where acarbose is only mentioned as a computationally screened candidate compound, with no pharmacokinetic data reported. |
| PD | Tang_2026 | not_relevant | 0 | 0 | The paper is a biomarker discovery study using machine learning on miRNA data; acarbose is only mentioned as a candidate compound from exploratory computational drug screening with no PK/PD data or dose-response analysis. |
| popPK | Tavares_2018 | irrelevant | 0 | 0 | The paper is a review of Juniperus metabolites and does not contain any pharmacokinetic data for acarbose. |
| PD | Tavares_2018 | not_relevant | 0 | 0 | The paper is a review of Juniperus metabolites and does not contain any pharmacodynamic or exposure-response data for acarbose. |
| PD | Thangsiri_2024 | not_relevant | 0 | 0 | The paper focuses on the phenolic content and in-vitro activities of Thai Bao mango peel, not on the pharmacodynamics of acarbose. |
| PD | Thu_2022 | not_relevant | 0 | 0 | The paper discusses the chemical interaction between iridoid glycosides and phenylpropanoids in Rehmannia glutinosa and does not contain any pharmacodynamic or exposure-response data for acarbose. |
| PD | Trinh_2023 | not_relevant | 1 | 1 | The paper reports a single IC50 value for acarbose as a positive control in an enzyme inhibition assay, which is not a pharmacodynamic exposure-response or dose-response relationship for the drug in a biological system. |
| PD | Truong_2024 | not_relevant | 1 | 1 | The paper reports a single IC50 value for acarbose as a positive control in an in vitro assay, which does not constitute a pharmacodynamic exposure-response or dose-response relationship analysis for the drug. |
| popPK | Vats_2025 | irrelevant | 0 | 0 | The paper is a review of the plant Tecomella undulata and does not contain pharmacokinetic data for acarbose. |
| PD | Vats_2025 | not_relevant | 0 | 0 | The paper is a review of the plant Tecomella undulata and does not contain any pharmacodynamic or exposure-response data for the drug acarbose. |
| popPK | Yadav_2025 | irrelevant | 0 | 0 | The paper focuses on the in vitro and in silico analysis of rice properties and does not involve acarbose pharmacokinetics. |
| PD | Yadav_2025 | not_relevant | 0 | 0 | The paper investigates the bioactivity of rice extracts and does not report any pharmacodynamic or exposure-response data for the drug acarbose. |
| popPK | Yan_2023 | irrelevant | 0 | 0 | The paper studies azathioprine and 6-mercaptopurine in the context of IBD and gut microbiota, with no mention of acarbose or its pharmacokinetic parameters. |
| PD | Yan_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of azathioprine therapy failure via gut microbiota and does not report any pharmacodynamic or exposure-response analysis for acarbose. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | The paper is a natural product isolation study where acarbose is used only as a positive control for enzyme inhibition, with no pharmacokinetic parameters reported. |
| PD | Yang_2022 | not_relevant | 0 | 0 | The paper reports IC50 values for novel triterpenoids and mentions acarbose only as a positive control with a single IC50 value, without providing an exposure-response or dose-response curve or model for acarbose. |
| PD | Yang_2023 | not_relevant | 1 | 1 | The paper reports a single in vitro IC50 value for acarbose as a positive control but does not provide a dose-response curve, PK/PD model, or exposure-response relationship. |
| PD | Yu_2020 | not_relevant | 0 | 0 | The paper reports the IC50 of a natural product (terpenoid) and compares it to acarbose, but does not report a pharmacodynamic model, exposure-response relationship, or dose-response curve for acarbose itself. |
| popPK | Zengin_2015 | irrelevant | 0 | 0 | The paper focuses on the phytochemical and antioxidant properties of medicinal plants and does not contain pharmacokinetic data for acarbose. |
| PD | Zengin_2015 | not_relevant | 0 | 0 | The paper focuses on the phytochemical profile and in vitro enzyme/antioxidant properties of medicinal plants, not on the pharmacokinetics or pharmacodynamics of the drug acarbose. |
| PD | Zhang_2021 | not_relevant | 0 | 0 | The paper focuses on bioactive amides from Polygonum cuspidatum and does not report any pharmacodynamic or exposure-response data for acarbose. |
| PD | Zhang_2023 | not_relevant | 0 | 0 | The paper focuses on the physicochemical characterization and in vitro α-amylase inhibitory activity of bacterial exopolysaccharides, not on the pharmacodynamics or exposure-response of the drug acarbose. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of aripiprazole, and acarbose is only listed as a concomitant medication in Table 2 without any PK parameters reported for it. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics (PK) and dosage optimization for aripiprazole, not acarbose, and does not report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study focuses on clozapine pharmacokinetics and dosing in bipolar disorder, with no mention of acarbose. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper focuses on clozapine pharmacokinetics and drug-drug interactions, not acarbose, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | de_2024 | irrelevant | 0 | 0 | The paper is a chemical characterization study of kombucha fermentation where acarbose is used only as a comparator for alpha-glucosidase inhibition, with no pharmacokinetic parameters reported. |
| PD | de_2024 | not_relevant | 0 | 0 | The paper is a chemical characterization study of kombucha fermentation products; acarbose is mentioned only as a reference standard for alpha-glucosidase inhibition, and no pharmacokinetic or pharmacodynamic modeling or exposure-response analysis for acarbose is performed. |
| popPK | van_2026 | irrelevant | 0 | 0 | The study is an in-vitro/in-silico mechanistic investigation of enzyme inhibition and cytotoxicity, not a pharmacokinetic study reporting quantitative disposition parameters for acarbose. |
| PD | van_2026 | not_relevant | 2 | 1 | The paper reports qualitative enzyme inhibition findings and mentions EC50 for cytotoxicity of a different compound (M. chamomilla), but does not provide numeric PD parameters (like Ki, IC50, or Emax) for acarbose's pharmacodynamic effect on glucose or enzyme activity in a clinical or PK/PD context. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_acarbose`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
