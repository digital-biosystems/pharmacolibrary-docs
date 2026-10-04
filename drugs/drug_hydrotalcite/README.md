<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02A&quot;,&quot;href&quot;:&quot;atc/A02A.md&quot;},{&quot;label&quot;:&quot;hydrotalcite&quot;}]"></div>

# hydrotalcite

- **generic name:** hydrotalcite
- **ATC codes:** `A02AD04`
- **DrugBank:** [DB13322](https://go.drugbank.com/drugs/DB13322) · **PubChem:** not captured
- **molar mass:** 619.973 g/mol (CH24Al2Mg6O24) — DrugBank
- **groups:** approved, investigational, withdrawn

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 08:22 | 5:44 | 0/0/0 | 0/0/0 | 0/0/0 | 225,094/4,407 | ollama / qwen3.8:27b-mtp-q8_0 | 25 | 2/25 | 24/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 91 matched, 69 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arcanjo_2018.pdf` | Arcanjo GS et al., Heterogeneous photocatalysis using TiO2…, Journal of environmental ma… (2018) | pd | 4 | [10.1016/j.jenvman.2018.01.033](https://doi.org/10.1016/j.jenvman.2018.01.033) | [29408063](https://www.ncbi.nlm.nih.gov/pubmed/29408063) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T08:22:09.412827+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alahiotis_1983 | irrelevant | 0 | 0 | The paper studies lactate dehydrogenase in Drosophila and does not involve the drug hydrotalcite or pharmacokinetics. |
| popPK | Alam_2024 | irrelevant | 0 | 0 | The paper describes a material science study on selenium sorption using layered double hydroxides, not a pharmacokinetic study of the drug hydrotalcite. |
| popPK | Anwar_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of phenytoin (PHT) delivered via a hydrotalcite (LDH) carrier, not the pharmacokinetics of hydrotalcite itself. |
| popPK | Arcanjo_2018 | irrelevant | 0 | 0 | no_text gate: only 178 chars of text extracted (&lt; 400) |
| PD | Arcanjo_2018 | not_relevant | 0 | 0 | The paper describes a heterogeneous photocatalytic process for wastewater treatment, not a pharmacodynamic or exposure-response study of a drug. |
| popPK | Asadi_2022 | irrelevant | 0 | 0 | The paper describes the in-vitro synthesis and release kinetics of ascorbic acid from a hydrotalcite nanocarrier, not the pharmacokinetics of hydrotalcite as a drug. |
| popPK | Aslam_2025 | irrelevant | 0 | 0 | The study focuses on a saponin gallate-loaded nanocarrier (Zn/Ga@Gd-LDH) and does not investigate the pharmacokinetics of hydrotalcite. |
| popPK | Baniahmad_2021 | irrelevant | 0 | 0 | The study investigates the in-vitro drug release of alendronate from a layered double hydroxide (LDH) carrier, not the pharmacokinetics of hydrotalcite as a subject drug. |
| popPK | Brandt_1987 | irrelevant | 0 | 0 | The paper studies lactate dehydrogenase in rat mitochondria and does not involve hydrotalcite or pharmacokinetics. |
| popPK | Bruna_2019 | irrelevant | 0 | 0 | The paper describes the immobilization of an enzyme on layered double hydroxides (LDH) for catalytic applications, not the pharmacokinetics of the drug hydrotalcite. |
| popPK | Capsoni_2018 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in-vitro dissolution of a carprofen-LDH hybrid, not the pharmacokinetics of hydrotalcite. |
| popPK | Cheng_2021 | irrelevant | 0 | 0 | The paper studies Mg-Al layered double hydroxide (LDH) films on magnesium alloys for orthopedic implants, not the pharmacokinetics of the drug hydrotalcite. |
| popPK | Choi_2011 | irrelevant | 0 | 0 | The paper is a review of LDHs as delivery carriers focusing on uptake mechanisms and toxicity, not a pharmacokinetic study reporting quantitative disposition parameters for hydrotalcite. |
| PD | Choi_2011 | not_relevant | 1 | 0 | The text is an abstract describing a review of uptake mechanisms and toxicity, mentioning dose-response relationships qualitatively but providing no numeric PD parameters or specific concentration-effect data. |
| PD | Choi_2021 | not_relevant | 1 | 0 | The paper reports pharmacokinetic (PK) data for a hydrotalcite-niclosamide formulation but does not provide a pharmacodynamic (PD) model, dose-response curve, or numeric PD parameters (e.g., Emax, EC50) derived from the study's own data; it only cites an external in vitro IC50 value. |
| popPK | Cometa_2023 | irrelevant | 0 | 0 | The paper describes the development of a drug delivery composite for Boswellia serrata extract, not the pharmacokinetics of hydrotalcite. |
| PD | Cometa_2023 | not_relevant | 0 | 0 | The paper reports qualitative in vitro bioactivity comparisons (antimicrobial and anti-inflammatory) between formulations but does not provide concentration-effect curves, dose-response data, or numeric PD parameters (e.g., EC50, Emax). |
| popPK | Damasceno_2023 | irrelevant | 0 | 0 | The study focuses on glibenclamide nanoparticles using layered double hydroxides as a carrier, not hydrotalcite as the subject drug, and reports efficacy/safety rather than PK parameters. |
| popPK | Ding_2024 | irrelevant | 0 | 0 | The paper describes the synthesis of Pt/NiFe-LDH hybrids for the detection of polyphenols and does not involve the drug hydrotalcite or any pharmacokinetic studies. |
| popPK | Everaert_2021 | irrelevant | 0 | 0 | The paper studies molybdenum release from layered double hydroxides (LDHs) as fertilizer compounds, not the pharmacokinetics of the drug hydrotalcite. |
| popPK | Finck_1983 | irrelevant | 0 | 0 | The paper is a clinical study on melanoma patients monitoring serum LDH levels and contains no pharmacokinetic data for hydrotalcite. |
| popPK | Gani_2019 | irrelevant | 0 | 0 | The study investigates the anti-cancer efficacy of protocatechuic acid-layered double hydroxide nanoparticles in mice, not the pharmacokinetics of hydrotalcite. |
| popPK | Gao_2019 | irrelevant | 0 | 0 | The paper describes a photocatalyst for CO2 reduction, not the pharmacokinetics of the drug hydrotalcite. |
| popPK | Gao_2020 | irrelevant | 0 | 0 | The paper studies arsenic adsorption on layered double hydroxides (LDH) in soil, which is unrelated to the pharmacokinetics of the drug hydrotalcite. |
| popPK | Grover_2022 | irrelevant | 0 | 0 | The paper investigates the adsorption of dyes by a magnesium/aluminum layered double hydroxide composite, which is a materials science study unrelated to the pharmacokinetics of the drug hydrotalcite. |
| popPK | Gu_2022 | irrelevant | 0 | 0 | The study investigates flurbiprofen as a model drug in a layered double hydroxide delivery system, not hydrotalcite as the subject drug. |
| popPK | Gutiérrez-Gutiérrez_2020 | irrelevant | 0 | 0 | The study focuses on curcumin encapsulated in layered double hydroxides (LDH) for anticancer/antiparasitic activity, not the pharmacokinetics of the drug hydrotalcite. |
| popPK | Huang_2021 | irrelevant | 0 | 0 | The study investigates a layered double hydroxide (LDH) nanoparticle delivery system for insulin, not the pharmacokinetics of the drug hydrotalcite. |
| popPK | Huo_2022 | irrelevant | 0 | 0 | The paper investigates the adsorption of perfluorooctanoic acid by layered double hydroxides (LDHs) and does not involve the drug hydrotalcite or any pharmacokinetic parameters. |
| popPK | Jia_2025 | irrelevant | 0 | 0 | The paper describes a layered double hydroxide (LDH) nano-adjuvant for cancer immunotherapy, not the drug hydrotalcite, and contains no pharmacokinetic parameters. |
| popPK | KRAUS_1964 | irrelevant | 0 | 0 | The paper describes genetic variants of human erythrocyte lactate dehydrogenase and contains no pharmacokinetic data for hydrotalcite. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | The paper describes the adsorption of chromate ions by layered double hydroxide (LDH) nanocomposites for environmental remediation, not the pharmacokinetics of the drug hydrotalcite. |
| popPK | Kuo_2015 | irrelevant | 0 | 0 | The study focuses on layered double hydroxide (LDH) nanoparticles as a drug delivery vehicle for cisplatin, not the pharmacokinetics of the drug hydrotalcite. |
| popPK | Lazarević_2025 | irrelevant | 0 | 0 | The study is an in vitro PAMPA experiment investigating the effect of hydrotalcite (as an antacid) on the permeability of gliclazide, not a pharmacokinetic study of hydrotalcite itself. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The paper describes a nanohybrid for photodynamic therapy and does not report pharmacokinetic parameters for hydrotalcite. |
| popPK | Li_2016 | irrelevant | 0 | 0 | The study focuses on the synthesis of nanocomposites for drug delivery and in vitro cell growth inhibition, containing no pharmacokinetic data for hydrotalcite. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The paper studies the CO2 adsorption performance of layered double hydroxide (LDH) materials, not the pharmacokinetics of the drug hydrotalcite. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The study focuses on the design and synthesis of novel antifungal inhibitors using an LDH carrier, not the pharmacokinetics of hydrotalcite. |
| popPK | Maekawa_1995 | irrelevant | 0 | 0 | The paper discusses lactate dehydrogenase (LDH) isozymes and has no content related to hydrotalcite pharmacokinetics. |
| popPK | Malekkhaiat_2017 | irrelevant | 0 | 0 | The paper investigates the antimicrobial mechanism of layered double hydroxide nanoparticles in vitro, not the pharmacokinetics of hydrotalcite. |
| popPK | Masini_1987 | irrelevant | 0 | 0 | The study investigates histamine and LDH release in guinea-pig myocardium and does not involve hydrotalcite or pharmacokinetic parameters. |
| popPK | Matusik_2019 | irrelevant | 0 | 0 | The paper investigates the adsorption of As(V) and Cr(VI) by hydrotalcite-based materials in wastewater treatment, which is a materials science/environmental chemistry study, not a pharmacokinetic study. |
| popPK | Maziarz_2019 | irrelevant | 0 | 0 | The paper investigates sulfate removal from wastewater using layered double hydroxides (LDH) and calcium hydroxide, which is a water treatment study unrelated to the pharmacokinetics of the drug hydrotalcite. |
| popPK | Megalathan_2016 | irrelevant | 0 | 0 | The paper studies the in-vitro release of curcuminoids from layered double hydroxides (LDHs), not the pharmacokinetics of hydrotalcite. |
| popPK | Nie_2022 | irrelevant | 0 | 0 | The paper describes the use of Mg/Al layered double hydroxide nanosheets as an adsorbent for phosphate removal in wastewater, which is a materials science/environmental engineering study, not a pharmacokinetic study of the drug hydrotalcite. |
| popPK | Prasher_2023 | irrelevant | 0 | 0 | no_text gate: only 274 chars of text extracted (&lt; 400) |
| popPK | Pu_2020 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro release of danshensu loaded in hydrotalcite nanoparticles, not the pharmacokinetics of hydrotalcite itself. |
| PD | Pu_2020 | not_relevant | 0 | 0 | The paper focuses on the formulation and in vitro characterization (release, morphology, hemolysis) of hydrotalcite-PLGA nanoparticles, reporting no pharmacodynamic or exposure-response data for hydrotalcite. |
| popPK | Rebitski_2019 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro release of a herbicide from a hydrotalcite-based material, not the pharmacokinetics of hydrotalcite as a drug. |
| popPK | Rejnö_1976 | irrelevant | 0 | 0 | The paper studies LDH isoenzymes in equine synovial fluid and does not involve the drug hydrotalcite or any pharmacokinetic parameters. |
| popPK | Shen_2025 | irrelevant | 0 | 0 | The paper studies a magnesium-strontium-cerium-aluminum layered double hydroxide (LDH) nanomaterial for myocardial injury, not the drug hydrotalcite, and reports no pharmacokinetic parameters. |
| popPK | Su_2023 | irrelevant | 0 | 0 | The paper describes a chemical catalyst for degrading sulfamethoxazole and does not involve the drug hydrotalcite or any pharmacokinetic parameters. |
| popPK | Sun_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and thermal properties of a layered double hydroxide/silica aerogel composite material, not the pharmacokinetics of the drug hydrotalcite. |
| popPK | Teng_2025 | irrelevant | 0 | 0 | The paper describes a photocatalytic material (MgAl-LDH) for hydrogen peroxide production and contains no pharmacokinetic data for the drug hydrotalcite. |
| popPK | Tong_2024 | irrelevant | 0 | 0 | The paper is a materials science/environmental remediation study on mercury contamination, not a pharmacokinetic study of the drug hydrotalcite. |
| popPK | VESELL_1962 | irrelevant | 0 | 0 | The paper is a biochemical study on lactic dehydrogenase isozymes in erythrocytes and contains no pharmacokinetic data for hydrotalcite. |
| popPK | Vatier_1994 | irrelevant | 0 | 0 | The study evaluates antacid activity (pH changes) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for hydrotalcite. |
| PD | Vatier_1994 | not_relevant | 4 | 2 | The paper describes a dose-response relationship (1, 2, or 3 tablets) and provides a theoretical maximal capacity (~95 H+ mmol), but it lacks specific numeric PD parameters (like EC50, Emax, or slope) or a detailed concentration-effect curve in the provided abstract. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of berberine (BBR) using hydrotalcite as a drug delivery carrier, not the pharmacokinetics of hydrotalcite itself. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper studies layered double hydroxide (LDH) nanosheets as a drug delivery vehicle for cancer therapy, not the pharmacokinetics of the drug hydrotalcite. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper investigates the formation of chromium-based layered double hydroxides for soil remediation, not the pharmacokinetics of the drug hydrotalcite. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper describes the synthesis and electrocatalytic properties of layered double hydroxides (LDHs) for energy applications, not the pharmacokinetics of the drug hydrotalcite. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The paper studies a platinum-based layered double hydroxide nanomaterial for cancer therapy, not the drug hydrotalcite, and contains no pharmacokinetic parameters. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | The paper studies CoBiMn-layered double hydroxide nanoparticles for sonodynamic therapy, not the drug hydrotalcite, and contains no pharmacokinetic parameters. |
| popPK | Yao_1987 | irrelevant | 0 | 0 | The paper studies the effect of gossypol on rat testicular lactate dehydrogenase-X and does not involve hydrotalcite or pharmacokinetic parameters. |
| popPK | Yu_2019 | irrelevant | 0 | 0 | The paper studies layered double hydroxide (LDH) nanocomposites as vaccine carriers, not the drug hydrotalcite, and reports no pharmacokinetic parameters. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and phosphate adsorption performance of layered double hydroxides (hydrotalcite-like materials) in an in-vitro environmental context, not the pharmacokinetics of the drug hydrotalcite. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper studies a layered double hydroxide (LDH) nanomaterial as a drug delivery carrier for miRNA, not the drug hydrotalcite, and contains no pharmacokinetic parameters. |
| popPK | Zhu_2021 | irrelevant | 0 | 0 | The paper studies Mg/Al layered double hydroxide nanoparticles as a biomaterial for spinal cord injury, not the drug hydrotalcite, and reports no pharmacokinetic parameters. |
| popPK | unknown_1975 | irrelevant | 0 | 0 | no_text gate: only 23 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
