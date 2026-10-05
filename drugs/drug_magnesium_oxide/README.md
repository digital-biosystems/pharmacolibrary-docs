<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02A&quot;,&quot;href&quot;:&quot;atc/A02A.md&quot;},{&quot;label&quot;:&quot;magnesium oxide&quot;}]"></div>

# magnesium oxide

- **generic name:** magnesium oxide
- **ATC codes:** `A02AA02`, `A06AD02`, `A12CC10`
- **DrugBank:** [DB01377](https://go.drugbank.com/drugs/DB01377) · **PubChem:** [CID 14792](https://pubchem.ncbi.nlm.nih.gov/compound/14792)
- **molar mass:** 40.304 g/mol (MgO) — DrugBank
- **groups:** approved, investigational

## About

Magnesium oxide is used as an antacid for acid-related stomach complaints, as a laxative for constipation, and as a magnesium mineral supplement. It is an approved, widely available over-the-counter medicine used for these common indications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q214769](https://www.wikidata.org/wiki/Q214769) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 08:32 | 4:24 | 0/0/0 | 0/0/0 | 0/0/0 | 208,570/1,334 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 2/23 | 15/2 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 65 matched, 45 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ghobadian_2015.pdf` | Ghobadian M et al., Toxic effects of magnesium oxide nanopa…, Ecotoxicology and environme… (2015) | pd | 5 | [10.1016/j.ecoenv.2015.08.009](https://doi.org/10.1016/j.ecoenv.2015.08.009) | [26283286](https://www.ncbi.nlm.nih.gov/pubmed/26283286) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T08:29:27.714430+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Fahdawi_2023 | irrelevant | 0 | 0 | The paper is an in-vitro study on the synthesis and anticancer effects of silver-doped magnesia nanoparticles, containing no pharmacokinetic data for magnesium oxide. |
| popPK | Al-Harbi_2024 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro bioactivity of magnesium oxide nanoparticles, not the pharmacokinetics of magnesium oxide as a drug. |
| popPK | Al_2024 | irrelevant | 0 | 0 | The paper describes the synthesis and antibacterial/anticancer properties of magnesium oxide nanoparticles, not the pharmacokinetics of magnesium oxide as a drug. |
| popPK | Alaithan_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and characterization of chitosan films containing magnesium oxide for wound healing, not a pharmacokinetic study of magnesium oxide as a drug. |
| PD | Alaithan_2023 | not_relevant | 2 | 2 | The paper reports a single IC50 value for a nanocomposite scaffold in a cell viability assay, which is a material toxicity/efficacy metric, not a pharmacodynamic exposure-response relationship for magnesium oxide as a drug. |
| popPK | Alghuwainem_2022 | irrelevant | 0 | 0 | The paper is a materials science study on wound dressing films containing magnesium oxide nanoparticles, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Barrón_2016 | irrelevant | 0 | 0 | The paper describes the thermoluminescence dosimetry properties of a MgO-CeO2 phosphor material, not the pharmacokinetics of magnesium oxide as a drug. |
| PD | Barrón_2016 | not_relevant | 0 | 0 | The paper describes the radiation dosimetry properties of a magnesium oxide-cerium oxide phosphor material, not the pharmacodynamics of magnesium oxide as a drug. |
| popPK | Behzadi_2019 | irrelevant | 0 | 0 | The study investigates in-vitro binding of magnesium oxide nanoparticles to human serum albumin and cytotoxicity, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for magnesium oxide. |
| popPK | Benetti_2016 | irrelevant | 0 | 0 | The study focuses on esomeprazole pharmacokinetics, with magnesium oxide serving only as an excipient/alkalinizing agent in the formulation. |
| PD | Benetti_2016 | not_relevant | 0 | 0 | The paper studies esomeprazole, not magnesium oxide; magnesium oxide is only mentioned as an excipient in the tablet formulation. |
| popPK | Ghaffari_2023 | irrelevant | 0 | 0 | The study investigates the antiprotozoal activity of magnesium oxide nanoparticles, not the pharmacokinetic disposition parameters of magnesium oxide. |
| popPK | Ghobadian_2015 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| popPK | Greenberg_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for moxifloxacin, not magnesium_oxide. |
| PD | Greenberg_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for moxifloxacin, not magnesium oxide, and does not provide numeric pharmacodynamic (PD) parameters such as Emax or EC50. |
| popPK | Hemanth_2024 | irrelevant | 0 | 0 | The paper is an in-vitro study on the antioxidant, anti-inflammatory, and anti-cancer properties of a magnesium oxide-doped biocomposite material, not a pharmacokinetic study of magnesium oxide as a drug. |
| popPK | Hsiao_2026 | irrelevant | 0 | 0 | The paper is a clinical cohort study analyzing adverse outcomes (AKI, ESRD, etc.) associated with magnesium oxide use, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Hsiao_2026 | not_relevant | 3 | 2 | The study reports epidemiological hazard ratios and a qualitative dose-response pattern based on medication possession ratio (MPR), but it does not provide a pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) linking drug concentration or specific dose to physiological effect. |
| popPK | Hussein_2018 | irrelevant | 0 | 0 | The study investigates the antiprotozoal activity of magnesium oxide nanoparticles against oocysts in vitro, not the pharmacokinetics of magnesium oxide in a biological system. |
| popPK | Jain_2024 | irrelevant | 0 | 0 | The paper investigates the thermoluminescence properties of MgO phosphor for dosimetry, not the pharmacokinetics of magnesium oxide as a drug. |
| PD | Jain_2024 | not_relevant | 0 | 0 | The paper describes the dosimetric properties of a magnesium oxide phosphor material for radiation detection, not the pharmacodynamics of magnesium oxide as a drug in a biological system. |
| popPK | Karaźniewicz-Łada_2021 | irrelevant | 0 | 0 | The paper is a review of antiepileptic drugs and does not report pharmacokinetic parameters for magnesium oxide. |
| PD | Karaźniewicz-Łada_2021 | not_relevant | 0 | 0 | The paper is a review of pharmacokinetic drug-drug interactions and does not report any pharmacodynamic or exposure-response data for magnesium oxide. |
| popPK | Karthik_2019 | irrelevant | 0 | 0 | The paper describes the fabrication and in-vitro photocatalytic/antibacterial properties of MgO nanostructures, not pharmacokinetics. |
| PD | Karthik_2019 | not_relevant | 3 | 2 | The paper reports an IC50 value for anticancer activity, which is a single dose-response point, but lacks the full concentration-effect curve or multiple data points required to derive a robust PD relationship or model parameters like Emax and slope. |
| popPK | Kashihara_2019 | irrelevant | 1 | 0 | The study investigates the effect of magnesium oxide on the pharmacokinetics of L-dopa/carbidopa, making magnesium oxide a co-administered agent rather than the subject drug for which PK parameters are reported. |
| popPK | Kawakami_2015 | irrelevant | 0 | 0 | The paper is a review where magnesium oxide is only a co-administered agent affecting gabapentin's pharmacokinetics, not the subject drug. |
| PD | Kawakami_2015 | not_relevant | 1 | 0 | The paper is a review that qualitatively mentions magnesium oxide reducing gabapentin absorption but provides no numeric PD parameters or exposure-response data for magnesium oxide. |
| PGx | Kawakami_2015 | not_relevant | 0 | 0 | The paper mentions magnesium oxide only as a concomitant medication affecting gabapentin absorption, not as the subject of a pharmacogenomic study. |
| popPK | Khatua_2022 | irrelevant | 0 | 0 | The paper investigates the antimicrobial and anticancer properties of magnesium oxide nanoparticles, not the pharmacokinetics of magnesium oxide as a drug. |
| popPK | Langford_2026 | irrelevant | 0 | 0 | The study focuses on breath-based diagnostics for bovine respiratory disease and the effects of oxytetracycline on volatile organic compounds, with no mention of magnesium oxide pharmacokinetics. |
| PD | Langford_2026 | not_relevant | 0 | 0 | The paper investigates the effect of oxytetracycline on breath VOCs, not magnesium oxide, and does not report any pharmacodynamic parameters or exposure-response relationships for magnesium oxide. |
| popPK | Mizaki_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mycophenolic acid (MPA) from mycophenolate mofetil, with magnesium oxide only mentioned as a concomitant medication affecting Tmax. |
| popPK | Naguib_2022 | irrelevant | 0 | 0 | The paper investigates the antimicrobial properties of dental cements modified with magnesium oxide nanoparticles, not the pharmacokinetics of magnesium oxide as a drug. |
| PD | Naguib_2022 | not_relevant | 3 | 2 | The study reports qualitative dose-response trends (inhibition zones and optical density) for MgO nanoparticles in dental cements but does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect model. |
| popPK | Otabor_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and material properties of magnesium oxide nanoparticles, not the pharmacokinetics of magnesium oxide as a drug. |
| PD | Otabor_2026 | not_relevant | 0 | 0 | The paper reports material characterization and static biological assays (IC50, zone of inhibition) for nanoparticles, not a pharmacodynamic exposure-response or dose-response relationship for a drug in a biological system. |
| popPK | Ravi_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro anticancer activity of magnesium nanoferrite nanoparticles, not the pharmacokinetics of magnesium oxide. |
| popPK | Selim_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro biological activities of MgO-ZnO nanoparticles, not the pharmacokinetics of magnesium oxide as a drug. |
| popPK | Selim_2025_2 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro antimicrobial/antioxidant properties of magnesium oxide nanoparticles, containing no pharmacokinetic data or disposition parameters. |
| popPK | Shahid_2025 | irrelevant | 0 | 0 | The paper is an in-vitro study on the anti-cancer efficacy of magnesium oxide nanoparticles and does not report any pharmacokinetic parameters. |
| popPK | Shankar_2023 | irrelevant | 0 | 0 | The paper is an econometric study on environmental efficiency and greenhouse gas emissions, containing no pharmacokinetic data for magnesium oxide. |
| PD | Shankar_2023 | not_relevant | 0 | 0 | The paper analyzes economic productivity and environmental efficiency using directional distance functions, not pharmacodynamics or drug exposure-response relationships. |
| popPK | Shekofteh_2024 | irrelevant | 0 | 0 | The paper describes the synthesis and photocatalytic properties of a magnesium oxide nanocomposite, not the pharmacokinetics of magnesium oxide as a drug. |
| PD | Shekofteh_2024 | not_relevant | 0 | 0 | The paper reports the IC50 of a nanocomposite material in a cytotoxicity assay, which is a material property/toxicology metric, not a pharmacodynamic exposure-response relationship for the drug magnesium oxide. |
| popPK | Shivappa_2026 | irrelevant | 0 | 0 | The paper is an in-vitro study on the synthesis and cytotoxicity of MgO nanoparticles, not a pharmacokinetic study of magnesium oxide. |
| popPK | Soliman_2025 | irrelevant | 0 | 0 | The paper is an in-vitro study on the synthesis and biological activity (anticancer, antimicrobial) of magnesium oxide nanoparticles, containing no pharmacokinetic data. |
| popPK | Swetha_2026 | relevant | 4 | 8 | The study reports quantitative non-compartmental absorption parameters (Cmax, AUC, Tmax) for magnesium oxide, but explicitly states that clearance (CL), volume (V), and half-life (t1/2) were not estimated due to the lack of a terminal phase. |
| popPK | Tabrez_2022 | irrelevant | 0 | 0 | The paper is an in-vitro study on the anticancer efficacy of magnesium oxide nanoparticles, reporting no pharmacokinetic parameters. |
| PGx | Taj_2024 | not_relevant | 0 | 0 | The paper studies the effect of magnesium oxide nanoparticles on spinach plants under cadmium stress, not the pharmacogenomics of magnesium oxide in humans. |
| popPK | Tang_2024 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic effects of dietary magnesium on mineral bone disorder variables (calcium, FGF23) in cats, not a pharmacokinetic study reporting disposition parameters (CL, V, ka) for magnesium oxide. |
| popPK | Uematsu_2025 | irrelevant | 0 | 0 | The study is a retrospective clinical analysis of hypermagnesemia incidence and risk factors, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka, etc.) for magnesium oxide. |
| popPK | Venkatappa_2022 | irrelevant | 0 | 0 | The paper is a study on the antioxidant and anticoagulant properties of magnesium oxide nanoparticles, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.). |
| popPK | Yaghubi_2021 | irrelevant | 0 | 0 | The study evaluates the antimicrobial activity (MIC/MBC) of magnesium oxide nanoparticles against tuberculosis, not pharmacokinetic parameters. |
| PD | Yaghubi_2021 | not_relevant | 3 | 2 | The paper reports MIC, MBC, and IC50 values for nanoparticles, which are static antimicrobial susceptibility metrics, not a pharmacodynamic exposure-response or dose-response relationship for the drug magnesium oxide in a biological system with derivable PD parameters like Emax or EC50 in the context of PK/PD modeling. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | no_text gate: only 40 chars of text extracted (&lt; 400) |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of magnesium oxide pharmacodynamics. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific data, models, or parameters for magnesium oxide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
