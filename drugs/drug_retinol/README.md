<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11C&quot;,&quot;href&quot;:&quot;atc/A11C.md&quot;},{&quot;label&quot;:&quot;retinol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Retinol_Adams1995_4_hpr&quot;,&quot;label&quot;:&quot;Adams_1995_4_hpr&quot;,&quot;href&quot;:&quot;drugs/drug_retinol/Retinol_Adams1995_4_hpr.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Retinol_Adams1995_control&quot;,&quot;label&quot;:&quot;Adams_1995_control&quot;,&quot;href&quot;:&quot;drugs/drug_retinol/Retinol_Adams1995_control.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# retinol

- **generic name:** retinol
- **ATC codes:** `A11CA01`, `D10AD02`, `R01AX02`, `S01XA02`
- **DrugBank:** [DB00162](https://go.drugbank.com/drugs/DB00162)
- **groups:** approved, investigational, nutraceutical, vet_approved

## About

**Description.** Retinol and derivatives of retinol that play an essential role in metabolic functioning of the retina, the growth of and differentiation of epithelial tissue, the growth of bone, reproduction, and the immune response. Dietary vitamin A is derived from a variety of carotenoids found in plants. It is enriched in the liver, egg yolks, and the fat component of dairy products.

**Indication.** For the treatment of vitamin A deficiency.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 09:47 | 50:08 | 2/0/0 | 0/0/0 | 0/0/0 | 207,293/140,872 | ollama / qwen3.8:27b-mtp-q8_0 | 37 | 7/30 | 33/4 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Adams_1995_4_hpr](drugs/drug_retinol/Retinol_Adams1995_4_hpr.md) | Adams WR et al., Effects of N-(4-hydroxyphenyl)retinamid…, Proceedings of the Society… (1995) | [10.3181/00379727-208-43849](https://doi.org/10.3181/00379727-208-43849) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Adams_1995_control](drugs/drug_retinol/Retinol_Adams1995_control.md) | Adams WR et al., Effects of N-(4-hydroxyphenyl)retinamid…, Proceedings of the Society… (1995) | [10.3181/00379727-208-43849](https://doi.org/10.3181/00379727-208-43849) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Yee_2024](drugs/drug_retinol/pd_Yee_2024_unknown.md) | Yee C et al., Comparison of retinol binding protein 1…, Scientific reports (2024) | [10.1038/s41598-024-79699-z](https://doi.org/10.1038/s41598-024-79699-z) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Czuba_2024](drugs/drug_retinol/pd_Czuba_2024_CRBP1.md) | Czuba LC et al., LX-2 Stellate Cells Are a Model System…, Drug metabolism and disposi… (2024) | [10.1124/dmd.124.001679](https://doi.org/10.1124/dmd.124.001679) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Czuba_2024](drugs/drug_retinol/pd_Czuba_2024_IL_1_CRBP1.md) | Czuba LC et al., LX-2 Stellate Cells Are a Model System…, Drug metabolism and disposi… (2024) | [10.1124/dmd.124.001679](https://doi.org/10.1124/dmd.124.001679) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Czuba_2024](drugs/drug_retinol/pd_Czuba_2024_IL_1_LRAT.md) | Czuba LC et al., LX-2 Stellate Cells Are a Model System…, Drug metabolism and disposi… (2024) | [10.1124/dmd.124.001679](https://doi.org/10.1124/dmd.124.001679) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Czuba_2024](drugs/drug_retinol/pd_Czuba_2024_LRAT.md) | Czuba LC et al., LX-2 Stellate Cells Are a Model System…, Drug metabolism and disposi… (2024) | [10.1124/dmd.124.001679](https://doi.org/10.1124/dmd.124.001679) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=retinol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Readily absorbed from the normal gastrointestinal tract…”</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | <sub>“…Hepatic. Retinol is conjugated with glucuronic acid; the B-glucuron…”</sub> | prose |

<sub>Actors without a tissue in the table: ALDH1A1 (substrate), ALDH1A2 (substrate), ALDH1A3 (substrate), APOD (target), CYP26A1 (inducer), CYP26A1 (substrate), DHRS3 (substrate), DHRS4 (substrate), LRAT (substrate), PTGDS (target), RBP1 (binder), RBP2 (binder), RBP3 (binder), RBP4 (binder), RBP5 (binder), RBP7 (binder), RDH11 (substrate), RDH12 (substrate), RDH13 (substrate), RDH14 (substrate), RDH5 (substrate), RDH8 (substrate), RETSAT (substrate), RLBP1 (binder), RXRG (binder), STRA6 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 707 matched, 136 returned
- **screened:** 30  ·  **relevant:** 4
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_16 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Green_1993.pdf` | Green MH et al., Vitamin A metabolism in rat liver: a ki…, The American journal of phy… (1993) | popPK | 9 | [10.1152/ajpgi.1993.264.3.G509](https://doi.org/10.1152/ajpgi.1993.264.3.G509) | [8460704](https://pubmed.ncbi.nlm.nih.gov/8460704) | The paper describes a compartmental kinetic model for retinol in rats, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract text. |
| `Green_1994.pdf` | Green MH et al., Vitamin A intake and status influence r…, The Journal of nutrition (1994) | popPK | 9 | [10.1093/jn/124.12.477](https://doi.org/10.1093/jn/124.12.477) | [16856330](https://pubmed.ncbi.nlm.nih.gov/16856330) | The study reports quantitative compartmental PK parameters (transit times, pool sizes, utilization rates) for retinol in rats, with specific numeric values provided in the text. |
| `Lewis_1990.pdf` | Lewis KC et al., Retinol metabolism in rats with low vit…, Journal of lipid research (1990) | popPK | 9 | not captured | [2246607](https://pubmed.ncbi.nlm.nih.gov/2246607) | The paper describes a compartmental model for retinol in rats and provides specific quantitative turnover rates (e.g., 20 micrograms/day plasma turnover) in the text, though standard PK parameters like CL and V are not explicitly listed as such. |
| `Li_2020.pdf` | Li Y et al., Dietary Iron Repletion Stimulates Hepat…, The Journal of nutrition (2020) | popPK | 9 | [10.1093/jn/nxaa098](https://doi.org/10.1093/jn/nxaa098) | [32297934](https://pubmed.ncbi.nlm.nih.gov/32297934) | The study is a compartmental PK analysis of retinol in rats, but the specific numeric parameter values are not present in the provided text evidence. |
| `Lopez-Teros_2022.pdf` | Lopez-Teros V et al., Development of a Compartmental Model fo…, The Journal of nutrition (2022) | popPK | 9 | [10.1093/jn/nxac078](https://doi.org/10.1093/jn/nxac078) | [35349703](https://pubmed.ncbi.nlm.nih.gov/35349703) | The paper describes a compartmental model for retinol kinetics in humans, but the specific numeric parameter values are assigned to theoretical subjects and not explicitly listed in the provided evidence text. |
| `Willhite_1985.pdf` | Willhite CC et al., Comparative pharmacokinetics of vitamin…, Food and chemical toxicolog… (1985) | popPK | 9 | [10.1016/0278-6915(85)90220-0](https://doi.org/10.1016/0278-6915(85)90220-0) | [4038683](https://pubmed.ncbi.nlm.nih.gov/4038683) | The study is a pharmacokinetic investigation of retinol in animals using a compartmental model, but the evidence text only provides qualitative comparisons and relative differences (e.g., "60% greater") without specific numeric values for clearance, volume, or half-life. |
| `Green_2021.pdf` | Green MH et al., A Compartmental Model Describing the Ki…, The Journal of nutrition (2021) | popPK | 8 | [10.1093/jn/nxaa306](https://doi.org/10.1093/jn/nxaa306) | [33188397](https://pubmed.ncbi.nlm.nih.gov/33188397) | The paper describes a compartmental model for retinol kinetics, but the specific numeric PK parameters (CL, V, Q) are not explicitly listed in the provided text, which focuses on bioavailability and metabolic percentages. |
| `Formelli_2010.pdf` | Formelli F et al., Relationship among pharmacokinetics and…, Cancer chemotherapy and pha… (2010) | pd | 5 | [10.1007/s00280-010-1370-5](https://doi.org/10.1007/s00280-010-1370-5) | [20532509](https://www.ncbi.nlm.nih.gov/pubmed/20532509) | metadata signals extractable PD data (effectcompartment) |
| `Guo_2017.pdf` | Guo J et al., Butylated hydroxyanisole alters rat 5α-…, Neuroscience letters (2017) | pd | 4 | [10.1016/j.neulet.2017.05.034](https://doi.org/10.1016/j.neulet.2017.05.034) | [28552457](https://www.ncbi.nlm.nih.gov/pubmed/28552457) | metadata signals extractable PD data (IC50) |
| `Mao_2018.pdf` | Mao B et al., Methoxychlor and its metabolite HPTE in…, Neuroscience letters (2018) | pd | 4 | [10.1016/j.neulet.2018.08.008](https://doi.org/10.1016/j.neulet.2018.08.008) | [30107201](https://www.ncbi.nlm.nih.gov/pubmed/30107201) | metadata signals extractable PD data (IC50) |
| `Penzes_1997.pdf` | Penzes P et al., Enzymatic characteristics of retinal de…, Biochimica et biophysica ac… (1997) | pd | 4 | [10.1016/s0167-4838(97)00102-7](https://doi.org/10.1016/s0167-4838(97)00102-7) | [9392526](https://www.ncbi.nlm.nih.gov/pubmed/9392526) | metadata signals extractable PD data (IC50) |
| `Rivero-Pino_2025.pdf` | Rivero-Pino F et al., Characterization of Rugulopteryx okamur…, Food chemistry (2025) | pd | 4 | [10.1016/j.foodchem.2025.143084](https://doi.org/10.1016/j.foodchem.2025.143084) | [39884239](https://www.ncbi.nlm.nih.gov/pubmed/39884239) | metadata signals extractable PD data (EC50) |
| `Su_2018.pdf` | Su Y et al., Ziram inhibits rat neurosteroidogenic 5…, Toxicology mechanisms and m… (2018) | pd | 4 | [10.1080/15376516.2017.1355950](https://doi.org/10.1080/15376516.2017.1355950) | [28707553](https://www.ncbi.nlm.nih.gov/pubmed/28707553) | metadata signals extractable PD data (IC50) |
| `Thriemer_2005.pdf` | Thriemer K et al., In vitro activity of artemisinin alone…, Wiener klinische Wochenschr… (2005) | pd | 4 | [10.1007/s00508-005-0447-3](https://doi.org/10.1007/s00508-005-0447-3) | [16416385](https://www.ncbi.nlm.nih.gov/pubmed/16416385) | metadata signals extractable PD data (EC50) |
| `Xu_2017.pdf` | Xu R et al., Effects of perfluoroalkyl substances on…, Chemico-biological interact… (2017) | pd | 4 | [10.1016/j.cbi.2017.05.017](https://doi.org/10.1016/j.cbi.2017.05.017) | [28535922](https://www.ncbi.nlm.nih.gov/pubmed/28535922) | metadata signals extractable PD data (IC50) |
| `Kanduri_2016.pdf` | Kanduri C et al., The landscape of copy number variations…, Autism research : official… (2016) | pgx | 5 | [10.1002/aur.1502](https://doi.org/10.1002/aur.1502) | [26052927](https://www.ncbi.nlm.nih.gov/pubmed/26052927) | metadata signals extractable PGX data (CYP2E1) |

<sub>queue written 2026-09-16T07:01:33.273275+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Amedee-Manesme_1987 | not_relevant | 3 | 2 | The paper describes a diagnostic test (RDR) based on a single fixed dose and provides qualitative thresholds for liver concentration, but it does not report a pharmacodynamic model or numeric PD parameters (like Emax or EC50) for retinol. |
| popPK | Bauman_2006 | irrelevant | 0 | 0 | The paper is a mechanistic enzymology study on steroid dehydrogenases in prostate tissue, not a pharmacokinetic study of retinol. |
| popPK | Campbell_2022 | irrelevant | 0 | 0 | The study focuses on bone mineral density and kidney function in HIV patients, and retinol-binding protein is only mentioned as a renal biomarker, not as a subject drug for pharmacokinetic analysis. |
| popPK | Choi_2024 | irrelevant | 0 | 0 | The study is an in vitro/in silico toxicology investigation of AHR ligands where retinol is only a negative control, and no pharmacokinetic parameters are reported. |
| PD | Choi_2024 | not_relevant | 0 | 0 | The paper explicitly states that Retinol did not induce transcriptional activity, and no numeric PD parameters (e.g., EC50) are reported for it. |
| popPK | Czuba_2024 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of gene expression and metabolic activity in cell lines, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for retinol. |
| popPK | Exner_2007 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of antimalarial activity, not a pharmacokinetic study reporting disposition parameters for retinol. |
| PD | Faye_2021 | not_relevant | 2 | 1 | The study is a cross-sectional comparison of vitamin A status (MRDR, serum retinol) between supplemented and non-supplemented groups, reporting only group means and p-values without fitting a dose-response or concentration-effect model to derive PD parameters like Emax or EC50. |
| popPK | Ford_2017 | irrelevant | 2 | 0 | The study focuses on a method for estimating bioefficacy using isotope ratios and does not report quantitative population pharmacokinetic parameters (CL, V, etc.) for retinol. |
| popPK | Ford_2018 | relevant | 9 | 2 | The paper is a simulation study validating a population PK model for retinol, but the specific numeric parameter values are located in Supplemental Table 1 and figures which are not included in the provided evidence. |
| popPK | Formelli_2010 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PD | Formelli_2010 | not_relevant | 0 | 0 | The paper focuses on fenretinide, not retinol, and does not report a pharmacodynamic model or numeric exposure-response parameters for retinol itself. |
| popPK | Green_1993 | relevant | 9 | 2 | The paper describes a compartmental kinetic model for retinol in rats, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract text. |
| popPK | Green_2020 | irrelevant | 2 | 0 | The paper is a methodological review discussing the mathematics of retinol isotope dilution and compartmental modeling, but it does not report original quantitative pharmacokinetic parameters (such as clearance, volume, or rate constants) for retinol. |
| popPK | Green_2020_2 | irrelevant | 2 | 0 | The study uses theoretical/simulated data for 12 hypothetical adults rather than reporting original quantitative PK parameters (CL, V, etc.) from a real population pharmacokinetic study. |
| popPK | Green_2021 | relevant | 8 | 2 | The paper describes a compartmental model for retinol kinetics, but the specific numeric PK parameters (CL, V, Q) are not explicitly listed in the provided text, which focuses on bioavailability and metabolic percentages. |
| popPK | Green_2021_2 | irrelevant | 2 | 0 | The study is a simulation/modeling analysis using hypothetical data to determine optimal sampling times, and it does not report original quantitative PK parameter values (CL, V, etc.) for retinol in the provided evidence. |
| popPK | Green_2022_2 | irrelevant | 2 | 0 | The study is a theoretical simulation using assigned parameters rather than an original pharmacokinetic study reporting measured quantitative disposition parameters for retinol. |
| popPK | Green_2022_3 | irrelevant | 2 | 0 | The study is a theoretical simulation using assigned kinetic parameters for 12 hypothetical subjects rather than an original pharmacokinetic study reporting derived quantitative disposition parameters (CL, V, etc.) for retinol. |
| popPK | Green_2024 | irrelevant | 2 | 0 | The paper is a simulation study focused on the Retinol Isotope Dilution (RID) method for estimating total body stores, not a pharmacokinetic study reporting standard disposition parameters (CL, V, ka) for retinol. |
| popPK | Green_2024_2 | relevant | 10 | 2 | The paper is a population PK study of retinol, but the specific numeric values for the kinetic parameters (clearance, volume, transfer coefficients) are in Table 2, which is truncated in the provided evidence. |
| popPK | Groth_1981 | irrelevant | 0 | 0 | The study focuses on myoglobin kinetics, and retinol is only mentioned as a comparator for molecular weight and elimination characteristics, with no PK parameters reported for retinol. |
| PD | Guo_2017 | not_relevant | 0 | 0 | The paper investigates the effects of butylated hydroxyanisole on neurosteroid enzymes in rats and does not contain any pharmacodynamic or exposure-response data for retinol. |
| popPK | Hailili_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study on dietary carotenoid intake and cognitive function, not a pharmacokinetic study, and reports no disposition parameters for retinol. |
| popPK | Hamzah_2020 | irrelevant | 0 | 0 | The study focuses on tenofovir alafenamide safety, using retinol-binding protein as a renal biomarker rather than studying retinol pharmacokinetics. |
| popPK | Hidiroglou_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vitamin E (tocopherol) in sheep, with retinol serving only as a co-administered dietary agent to assess its effect on vitamin E status, not as the subject drug for PK parameter extraction. |
| PD | Kiziltas_2017 | not_relevant | 0 | 0 | The paper reports the chemical content of retinol in a plant extract and general hepatoprotective effects of the whole extract, but does not perform any pharmacokinetic or pharmacodynamic modeling for retinol specifically, nor does it provide concentration-effect data or numeric PD parameters for retinol. |
| PD | Kley_2024 | not_relevant | 0 | 0 | The paper investigates the inhibition of 3α-HSD enzymes by parabens and UV-filters, not the pharmacodynamics of retinol; retinol dehydrogenases are only mentioned as additional enzymes tested for activity, not as the subject of a PD analysis. |
| popPK | Knauer_2008 | irrelevant | 0 | 0 | The study investigates pharmacodynamic synergism in vitro, not pharmacokinetic disposition parameters for retinol. |
| popPK | Li_2020 | relevant | 9 | 2 | The study is a compartmental PK analysis of retinol in rats, but the specific numeric parameter values are not present in the provided text evidence. |
| PD | Liu_2025 | not_relevant | 0 | 0 | The paper focuses on kaempferol's anti-fibrotic mechanism via transcriptomics and network pharmacology; retinol is only mentioned as a metabolic pathway, and no PD or exposure-response data for retinol is reported. |
| popPK | Lopez-Teros_2022 | relevant | 9 | 2 | The paper describes a compartmental model for retinol kinetics in humans, but the specific numeric parameter values are assigned to theoretical subjects and not explicitly listed in the provided evidence text. |
| PD | Mao_2018 | not_relevant | 0 | 0 | The paper focuses on the inhibition of enzymes (3α-HSD and RDH2) by methoxychlor and HPTE, not on the pharmacodynamic exposure-response relationship of retinol itself. |
| popPK | Mertz_2000 | irrelevant | 0 | 0 | The paper is a mechanistic study on choroidal retinoic acid synthesis and eye growth, not a pharmacokinetic study reporting disposition parameters for retinol. |
| popPK | Mutumba_2024 | irrelevant | 0 | 0 | The study is a nutritional intervention trial measuring biomarkers of micronutrient status (e.g., retinol-binding protein) rather than a pharmacokinetic study, and it reports no disposition parameters (CL, V, ka, etc.) for retinol. |
| popPK | Novotny_1995 | irrelevant | 2 | 0 | The study focuses on beta-carotene metabolism and compartmental modeling, with retinol serving only as a metabolic product/comparator rather than the subject drug for PK parameter extraction. |
| PD | Ohdo_2022 | not_relevant | 1 | 0 | The paper is a review on chronopharmacology and mentions retinol accumulation in CKD as a mechanism for cardiac complications, but it does not report any quantitative exposure-response or dose-response data, curves, or PD parameters for retinol. |
| PD | Olson_1984 | not_relevant | 1 | 0 | The text is a qualitative review of vitamin A physiology and status assessment methods, providing no numeric PD parameters, dose-response curves, or PK/PD modeling data. |
| popPK | Ost_2007 | irrelevant | 0 | 0 | The paper investigates the mechanistic effects of retinol-binding protein-4 on insulin signaling in adipocytes and does not report any pharmacokinetic parameters for retinol. |
| popPK | Parizek_2007 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of antimalarial activity, not a pharmacokinetic study, and reports no disposition parameters for retinol. |
| popPK | Pedersen_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of retinoid effects on cholinergic properties in cell lines, not a pharmacokinetic study reporting disposition parameters for retinol. |
| popPK | Pein_2017 | irrelevant | 0 | 0 | The paper is a mechanistic study on lipidomics and Akt signaling, not a pharmacokinetic study, and reports no disposition parameters for retinol. |
| popPK | Penzes_1997 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PD | Penzes_1997 | not_relevant | 0 | 0 | The paper describes the enzymatic kinetics (Km, Vmax) of retinal dehydrogenase type I in E. coli, which is a biochemical enzyme study, not a pharmacodynamic exposure-response or dose-response analysis of retinol in a biological system. |
| popPK | Posch_1992 | irrelevant | 0 | 0 | The paper describes in-vitro enzymatic kinetics (Km, Vmax) of a dehydrogenase, not in-vivo pharmacokinetic disposition parameters (CL, V, t1/2) for retinol. |
| popPK | Prom_2022 | irrelevant | 0 | 0 | The study measures serum concentrations of retinol in calves but does not report pharmacokinetic parameters (CL, V, ka, etc.) or a PK model. |
| PD | Qing_2021 | not_relevant | 0 | 0 | The paper analyzes the dose-response relationship between urinary cadmium and kidney injury biomarkers (including retinol binding protein), not the pharmacodynamic effect of the drug retinol itself. |
| PD | Renner_1985 | not_relevant | 0 | 0 | The study explicitly states that no effect was seen when retinol was used, and the reported dose-response data pertains to beta-carotene, not retinol. |
| popPK | Rivero-Pino_2025 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Rivero-Pino_2025 | not_relevant | 0 | 0 | The paper characterizes algae bioactive compounds and does not report any pharmacodynamic or exposure-response data for retinol. |
| PD | Rohan_1995 | not_relevant | 1 | 0 | The paper is an epidemiological case-control study reporting relative risks based on dietary intake quartiles, not a pharmacodynamic study with numeric PD parameters (Emax, EC50) or concentration-effect curves. |
| popPK | Samal_2005 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of antimalarial activity, not a pharmacokinetic study, and reports no disposition parameters for retinol. |
| popPK | Sorg_2002 | irrelevant | 0 | 0 | The study investigates the depletion of epidermal vitamin A by UV radiation in mice and reports EC50 values for depletion, not pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| PD | Sovani_1994 | not_relevant | 2 | 1 | The paper reports clinical outcomes (healing rates, relapse risk) and identifies baseline retinol as a predictor, but it does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., EC50, Emax) or a concentration-effect curve. |
| PD | Su_2018 | not_relevant | 0 | 0 | The paper investigates the enzyme inhibition of Ziram on neurosteroidogenic enzymes and does not report any pharmacodynamic or exposure-response relationship for retinol. |
| PD | Suharno_1992 | not_relevant | 0 | 0 | The study is a cross-sectional epidemiological analysis of prevalence and associations, not a pharmacodynamic or exposure-response study with numeric PD parameters. |
| popPK | Thriemer_2005 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | Ubels_1986 | not_relevant | 2 | 1 | The paper describes qualitative dose-response relationships for secretagogues (pilocarpine, acetylcholine, VIP) on retinol secretion but does not provide numeric PD parameters or concentration-effect curves for retinol itself. |
| PD | Udomkesmalee_1992 | not_relevant | 2 | 1 | The paper reports qualitative correlations between plasma concentrations and functional indices (VRT, CIC) but does not provide numeric PD parameters (e.g., EC50, Emax) or a defined dose-response curve. |
| popPK | Willhite_1985 | relevant | 9 | 2 | The study is a pharmacokinetic investigation of retinol in animals using a compartmental model, but the evidence text only provides qualitative comparisons and relative differences (e.g., "60% greater") without specific numeric values for clearance, volume, or half-life. |
| PD | Xu_2017 | not_relevant | 0 | 0 | The paper investigates the effects of perfluoroalkyl substances on neurosteroid enzymes, not the pharmacodynamics of retinol. |
| popPK | Yee_2024 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on protein-protein interactions (retinol binding protein and cryptochrome) and does not report pharmacokinetic disposition parameters for retinol. |
| popPK | Zhao_2023 | irrelevant | 0 | 0 | The paper is a plant pathology study on Fusarium fungi and fungicides, where "retinol-binding protein-2" is only mentioned as a gene for molecular identification, not as a drug subject to pharmacokinetic analysis. |
| PD | Zhao_2023 | not_relevant | 0 | 0 | The paper reports fungicide sensitivity (EC50) for Fusarium pathogens, not a pharmacodynamic relationship for the drug retinol. |
| PD | Zhu_2026 | not_relevant | 0 | 0 | The paper is a metabolomics study identifying retinol as a biomarker distinguishing treatment groups, but it does not report a pharmacodynamic exposure-response or dose-response relationship for retinol itself. |
| popPK | el_1994 | irrelevant | 0 | 0 | The paper is an in-vitro enzymatic study of retinal dehydrogenase kinetics, not a pharmacokinetic study of retinol disposition. |
| PD | el_1994 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Michaelis-Menten/Allosteric parameters) for retinal dehydrogenase, not a pharmacodynamic exposure-response relationship for retinol in a biological system. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-16 07:05 UTC</sub>
