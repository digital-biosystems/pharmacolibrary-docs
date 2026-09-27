<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;levocarnitine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levocarnitine_Fornasini2007_reference&quot;,&quot;label&quot;:&quot;Fornasini_2007_reference&quot;,&quot;href&quot;:&quot;drugs/drug_levocarnitine/Levocarnitine_Fornasini2007_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levocarnitine_Uematsu1988_reference&quot;,&quot;label&quot;:&quot;Uematsu_1988_reference&quot;,&quot;href&quot;:&quot;drugs/drug_levocarnitine/Levocarnitine_Uematsu1988_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# levocarnitine

- **generic name:** levocarnitine
- **ATC codes:** `A16AA01`
- **DrugBank:** [DB00583](https://go.drugbank.com/drugs/DB00583) · **PubChem:** [CID 10917](https://pubchem.ncbi.nlm.nih.gov/compound/10917)
- **molar mass:** 161.1989 g/mol (C7H15NO3) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Constituent of striated muscle and liver. It is used therapeutically to stimulate gastric and pancreatic secretions and in the treatment of hyperlipoproteinemias.

**Indication.** For treatment of primary systemic carnitine deficiency, a genetic impairment of normal biosynthesis or utilization of levocarnitine from dietary sources, or for the treatment of secondary carnitine deficiency resulting from an inborn error of metabolism such as glutaric aciduria II, methyl malonic aciduria, propionic acidemia, and medium chain fatty acylCoA dehydrogenase deficiency. Used therapeutically to stimulate gastric and pancreatic secretions and in the treatment of hyperlipoproteinemias. Parenteral levocarnitine is indicated for the prevention and treatment of carnitine deficiency in patients with end-stage renal disease.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| l-carnitine | parent | 161.199 | C7H15NO3 | DrugBank | [10917](https://pubchem.ncbi.nlm.nih.gov/compound/10917) | Uematsu_1988 |
| levocarnitine | parent | 161.199 | C7H15NO3 | DrugBank | [10917](https://pubchem.ncbi.nlm.nih.gov/compound/10917) | Uematsu_1988 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 12:34 | 42:35 | 0/2/0 | 0/0/0 | 0/0/0 | 227,767/20,313 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 3/12 | 13/2 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Fornasini_2007_reference](drugs/drug_levocarnitine/Levocarnitine_Fornasini2007_reference.md) | 1-compartment (no model) | 0 | Fornasini G et al., A pharmacokinetic model for L-carnitine…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02926.x](https://doi.org/10.1111/j.1365-2125.2007.02926.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.154). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Uematsu_1988_reference](drugs/drug_levocarnitine/Levocarnitine_Uematsu1988_reference.md) | 1-compartment (no model) | 0 | Uematsu T et al., Pharmacokinetics and safety of l-carnit…, European journal of clinica… (1988) | [10.1007/BF00614562](https://doi.org/10.1007/BF00614562) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=levocarnitine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` inhibitor/substrate/unknown, `SLC22A5` substrate/unknown | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` substrate/unknown | DrugBank actor |
| absorption | small intestine | `SLC22A4` inhibitor/substrate/unknown, `SLC22A5` substrate/unknown | DrugBank actor |
| metabolism | liver | `CES1` unknown, `SLCO1B1` inhibitor, `XDH` unknown | DrugBank actor |
| metabolism | small intestine | `XDH` unknown | DrugBank actor |
| excretion | bile duct | <sub>“…administered radioactive dose was recovered from urine and feces in 5-11 days.…”</sub> | prose |
| excretion | kidney | `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CPT1A (activator), CPT1B (activator), CPT2 (unknown), CRAT (unknown), CROT (unknown), MPO (unknown), SLC22A16 (substrate), SLC25A20 (unknown), SLC25A29 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 400 matched, 61 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fornasini_2007.pdf` | Fornasini G et al., A pharmacokinetic model for L-carnitine…, British journal of clinical… (2007) | popPK | 10 | [10.1111/j.1365-2125.2007.02926.x](https://doi.org/10.1111/j.1365-2125.2007.02926.x) | [17506778](https://pubmed.ncbi.nlm.nih.gov/17506778) | The paper reports a three-compartment PK model for levocarnitine with specific numeric values for central volume and transfer rate constants provided in the text. |
| `Uematsu_1988.pdf` | Uematsu T et al., Pharmacokinetics and safety of l-carnit…, European journal of clinica… (1988) | popPK | 10 | [10.1007/BF00614562](https://doi.org/10.1007/BF00614562) | [3383994](https://pubmed.ncbi.nlm.nih.gov/3383994) | The study reports quantitative PK parameters (Vc, t1/2 gamma) for levocarnitine in humans, with values explicitly stated in the text. |
| `Rebouche_1983.pdf` | Rebouche CJ et al., Kinetic compartmental analysis of carni…, Archives of biochemistry an… (1983) | popPK | 8 | [10.1016/0003-9861(83)90387-9](https://doi.org/10.1016/0003-9861(83)90387-9) | [6830246](https://pubmed.ncbi.nlm.nih.gov/6830246) | The study reports quantitative compartmental kinetic parameters (turnover times, flux, pool sizes) for carnitine in dogs, which are directly extractable from the text. |
| `Attarwala_2023.pdf` | Attarwala H et al., Translational Pharmacokinetic/Pharmacod…, Nucleic acid therapeutics (2023) | pd | 5 | [10.1089/nat.2022.0036](https://doi.org/10.1089/nat.2022.0036) | [36577040](https://www.ncbi.nlm.nih.gov/pubmed/36577040) | metadata signals extractable PD data (PharmacodynamicModel) |
| `Kennedy_2000.pdf` | Kennedy JA et al., Effect of perhexiline and oxfenicine on…, Journal of cardiovascular p… (2000) | pd | 4 | [10.1097/00005344-200012000-00016](https://doi.org/10.1097/00005344-200012000-00016) | [11117381](https://www.ncbi.nlm.nih.gov/pubmed/11117381) | metadata signals extractable PD data (IC50) |
| `Wang_2022.pdf` | Wang DD et al., A machine-learning approach for predict…, Frontiers in nutrition (2022) | pd | 4 | [10.3389/fnut.2022.851275](https://doi.org/10.3389/fnut.2022.851275) | [36034907](https://www.ncbi.nlm.nih.gov/pubmed/36034907) | metadata signals extractable PD data (Emax) |
| `Robinson_2017.pdf` | Robinson BL et al., Cyclosporine exacerbates ketamine toxic…, Journal of applied toxicolo… (2017) | pgx | 7 | [10.1002/jat.3488](https://doi.org/10.1002/jat.3488) | [28569378](https://www.ncbi.nlm.nih.gov/pubmed/28569378) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Zhang_2025.pdf` | Zhang W et al., Multi-functional Chitosan Polymeric Mic…, Drug delivery and translati… (2025) | pgx | 5 | [10.1007/s13346-024-01597-8](https://doi.org/10.1007/s13346-024-01597-8) | [38643258](https://www.ncbi.nlm.nih.gov/pubmed/38643258) | metadata signals extractable PGX data (CYP3A4) |

<sub>queue written 2026-09-27T12:17:35.808908+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Akyüzlüer_2026 | not_relevant | 0 | 0 | The paper describes prescribing patterns of supplements in mitochondrial diseases and does not report pharmacokinetic or pharmacodynamic parameters of levocarnitine or any other drug. |
| PGx | Apostolopoulou_2015 | not_relevant | 0 | 0 | The paper reviews statin-induced myopathy and mentions carnitine palmitoyltransferase II deficiency as a susceptibility factor, but does not report pharmacogenomic effects on the PK or PD parameters of levocarnitine. |
| popPK | Attarwala_2023 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| PD | Attarwala_2023 | not_relevant | 0 | 0 | The paper focuses on mRNA-3927 for Propionic Acidemia and does not report pharmacodynamic or exposure-response data for levocarnitine. |
| PGx | Baldo_2026 | not_relevant | 0 | 0 | The paper describes a genetic variant affecting mitochondrial metabolism and response to riboflavin, not the pharmacokinetics or pharmacodynamics of levocarnitine. |
| PGx | Barr_2025 | not_relevant | 0 | 0 | The paper investigates dietary interventions (ammonium hydroxide enhancement) on liver metabolism in mice and does not report pharmacogenomic effects on the PK or PD of levocarnitine. |
| PGx | Bizjak_2020 | not_relevant | 0 | 0 | The paper describes a case of 3-methylglutaconic aciduria and precocious puberty, mentioning carnitine supplementation as a general treatment but reporting no pharmacokinetic or pharmacodynamic data for levocarnitine. |
| popPK | Dainty_1990 | irrelevant | 0 | 0 | The study investigates the pharmacological interaction of palmitoyl carnitine with rat aortic endothelium and does not report any pharmacokinetic parameters for levocarnitine. |
| PGx | Davies_2025 | not_relevant | 0 | 0 | The paper reports structural and functional data on the carnitine transporter OCTN2, not the pharmacokinetics or pharmacodynamics of the drug levocarnitine. |
| popPK | Farrell_1984 | irrelevant | 0 | 0 | The study is an in-vitro enzymatic characterization of carnitine acyltransferases in mouse liver, not a pharmacokinetic study of levocarnitine disposition. |
| PD | Farrell_1984 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Km, Hill coefficient) for carnitine acyltransferases, not a pharmacodynamic exposure-response or dose-response relationship for levocarnitine in a biological system. |
| PGx | Gilchrist_2025 | not_relevant | 0 | 0 | The paper investigates the causal effects of plasma metabolites (including carnitine derivatives) on psychiatric and neurodegenerative disease risk using Mendelian randomization, but does not report pharmacokinetic or pharmacodynamic parameters of levocarnitine as a drug. |
| popPK | Guo_2025 | irrelevant | 0 | 0 | The paper is a metabolomics study of ALS that identifies carnitine metabolism as a biomarker but does not report pharmacokinetic parameters for levocarnitine. |
| popPK | Haarhuis_2026 | irrelevant | 2 | 4 | The study focuses on TMAO pharmacokinetics following an oral carnitine challenge, reporting only non-compartmental parameters (AUC, Cmax, Tmax) for L-carnitine without clearance, volume, or compartmental modeling. |
| PGx | Handig_1996 | not_relevant | 0 | 0 | The paper describes a genetic mutation causing a metabolic enzyme deficiency (CPT II) and its clinical variability, but does not report pharmacokinetic or pharmacodynamic parameters of levocarnitine. |
| PGx | Huang_2017 | not_relevant | 0 | 0 | The paper studies arsenic metabolism in knockout mice and does not involve levocarnitine or its pharmacokinetics/pharmacodynamics. |
| PGx | Huang_2022 | not_relevant | 0 | 0 | The study investigates the effects of a fruit juice concentrate on uric acid excretion and gut microbiota in mice, with no mention of levocarnitine or pharmacogenomic variants. |
| PGx | Jegodzinski_2025 | not_relevant | 0 | 0 | The paper investigates metabolic changes in MASLD patients associated with the PNPLA3 variant, not the pharmacokinetics or pharmacodynamics of levocarnitine. |
| PGx | Jensen_2021 | not_relevant | 0 | 0 | The paper investigates isobutyrylcarnitine as a biomarker for OCT1 activity and does not report pharmacokinetic or pharmacodynamic parameters for levocarnitine. |
| PGx | Joshi_2020 | not_relevant | 0 | 0 | The paper discusses CPT II deficiency and its genetic basis but does not report pharmacokinetic or pharmacodynamic parameters of levocarnitine. |
| PGx | Kadoguchi_2022 | not_relevant | 0 | 0 | The paper describes in vitro uptake studies and transporter knockdowns, but does not report pharmacogenomic effects on the PK/PD of levocarnitine. |
| popPK | Kennedy_2000 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| PD | Kennedy_2000 | not_relevant | 0 | 0 | The paper investigates the effects of perhexiline and oxfenicine, not levocarnitine. |
| PGx | Koletzko_2018 | not_relevant | 0 | 0 | The paper studies HCV effects on lipid metabolism in cell lines and does not report pharmacogenomic effects on the PK or PD of levocarnitine. |
| PGx | Kolz_2009 | not_relevant | 0 | 0 | The paper investigates genetic variants associated with serum uric acid levels and their correlation with carnitine metabolites, but does not report pharmacokinetic or pharmacodynamic effects of levocarnitine administration. |
| popPK | Lai_2025 | irrelevant | 0 | 0 | The paper is a longitudinal epigenetic study on DNA methylation and type 2 diabetes, not a pharmacokinetic study of levocarnitine. |
| PGx | Lee_2023 | not_relevant | 0 | 0 | The paper investigates genetic determinants of endogenous serum propionylcarnitine levels and their association with metabolic syndrome, not the pharmacokinetics or pharmacodynamics of the drug levocarnitine. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper describes the engineering of a biosensor for detecting l-carnitine, not the pharmacogenomics of levocarnitine as a drug. |
| popPK | Lilly_1992 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on enzyme inhibition by etomoxiryl-CoA and does not report pharmacokinetic parameters for levocarnitine. |
| PD | Lilly_1992 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of etomoxiryl-CoA on carnitine acyltransferases, not the pharmacodynamics of levocarnitine. |
| PGx | Lorenzoni_2024 | not_relevant | 0 | 0 | The paper discusses the genetics of CPT II deficiency (a disease state) and does not report pharmacogenomic effects on the PK/PD of levocarnitine. |
| PGx | Lutter_2025 | not_relevant | 0 | 0 | The paper reports an association between BBOX1 mutations and anorexia nervosa risk, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of levocarnitine. |
| PGx | Mansoor_2024 | not_relevant | 0 | 0 | The paper reports the use of levocarnitine as a standard supportive treatment for methylmalonic acidemia but does not investigate how the MMUT genotype affects the pharmacokinetics or pharmacodynamics of the drug. |
| PGx | Marcadet_2026 | not_relevant | 0 | 0 | The paper investigates lipid metabolism and acylcarnitine levels in ALS models, not the pharmacokinetics or pharmacodynamics of levocarnitine as a drug. |
| PGx | Nishimura_2008 | not_relevant | 0 | 0 | The paper investigates fenofibrate-induced hepatocarcinogenesis in rats and does not involve levocarnitine or pharmacogenomic effects on its PK/PD parameters. |
| PGx | Panichsillaphakit_2025 | not_relevant | 0 | 0 | The paper reports a case of riboflavin deficiency causing MADD-like symptoms and does not investigate the effect of genetic variants on the pharmacokinetics or pharmacodynamics of levocarnitine. |
| PGx | Pavar_2023 | not_relevant | 0 | 0 | The paper discusses valproate toxicity and the use of L-carnitine as a treatment, but does not report a pharmacogenomic effect on the PK or PD of levocarnitine. |
| popPK | Pötgens_2021 | irrelevant | 0 | 0 | The paper is a metabolomics study of cancer cachexia in mice that reports changes in carnitine levels but does not provide pharmacokinetic parameters for levocarnitine. |
| PGx | Robinson_2017 | not_relevant | 0 | 0 | The paper studies a drug-drug interaction (Cyclosporine/Ketamine) and the reversal by Acetyl L-carnitine in zebrafish, but does not report pharmacogenomic effects of gene variants on levocarnitine PK/PD. |
| PGx | Roder_2024 | not_relevant | 0 | 0 | The paper describes a software tool for microbial genomics and analyzes bacterial gene associations with carnitine metabolism in yogurt, not human pharmacogenomics of levocarnitine. |
| PGx | Salomon_2014 | not_relevant | 0 | 0 | The paper characterizes a cell line model for lung transport and does not report pharmacogenomic effects on levocarnitine PK/PD. |
| popPK | Schiavo_2023 | irrelevant | 2 | 0 | The study focuses on a QSP model for valproic acid-induced hyperammonemia where levocarnitine is a co-administered therapeutic agent, and no specific quantitative PK parameters (CL, V, etc.) for levocarnitine are reported in the provided evidence. |
| PGx | Schumacher-Klinger_2018 | not_relevant | 0 | 0 | The paper focuses on the prodrug design of cyclic RGD peptides and does not involve levocarnitine or any pharmacogenomic analysis. |
| PGx | Seda_2008 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of rosiglitazone, not levocarnitine. |
| PGx | Soens_2026 | not_relevant | 0 | 0 | The paper is a proteomics atlas of lysine acetylation in mice and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of levocarnitine. |
| PGx | Taroni_1992 | not_relevant | 0 | 0 | The paper characterizes a genetic defect in a metabolic enzyme (CPT2) and its effect on enzyme kinetics, but does not report pharmacokinetic or pharmacodynamic parameters of the drug levocarnitine. |
| PGx | Verderio_1995 | not_relevant | 0 | 0 | The paper describes the gene structure and mutations of CPT II in a metabolic disorder, not the pharmacokinetics or pharmacodynamics of levocarnitine as a drug. |
| PGx | Wadman_2020 | not_relevant | 0 | 0 | The paper is a clinical review of drug treatments for SMA and does not report pharmacogenomic effects on the PK or PD of levocarnitine. |
| PGx | Wang_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of a herbal extract (Smilax glabra) on uric acid nephropathy in rats and does not report any pharmacogenomic effects on the PK or PD of levocarnitine. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The study is a model-based meta-analysis of efficacy (BMI change) using an Emax model, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Wang_2021_2 | irrelevant | 0 | 0 | The study reports pharmacodynamic efficacy parameters (Emax, ET50) for glycemic control, not pharmacokinetic disposition parameters (CL, V, ka) for levocarnitine. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | no_text gate: only 140 chars of text extracted (&lt; 400) |
| PD | Wang_2022 | not_relevant | 0 | 0 | The paper describes a machine-learning approach for predicting body weight changes and does not report pharmacokinetic data, exposure-response relationships, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for levocarnitine. |
| popPK | Wu_2011 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of tinnitus drugs and does not report pharmacokinetic parameters for levocarnitine. |
| PD | Wu_2011 | not_relevant | 0 | 0 | not captured |
| popPK | Wu_2014 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of L-carnitine's mechanism of action (GABA-A receptor modulation) and does not report any pharmacokinetic disposition parameters. |
| PGx | Yamada_2019 | not_relevant | 0 | 0 | The paper is a review of fatty acid oxidation disorders and does not report pharmacogenomic effects on the PK/PD of levocarnitine. |
| PGx | Yamazaki_2008 | not_relevant | 0 | 0 | The paper investigates the enzymatic properties of M-CPTI variants, not the pharmacokinetics or pharmacodynamics of levocarnitine. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation of paclitaxel micelles using L-carnitine as a carrier modifier, not on the pharmacogenomics of levocarnitine itself. |
| PGx | Zhou_2025 | not_relevant | 0 | 0 | The paper investigates the causal association between genetically predicted serum carnitine levels and cancer risk using Mendelian randomization, rather than the effect of a gene variant on the pharmacokinetics or pharmacodynamics of levocarnitine as a drug. |
| PGx | de_2023 | not_relevant | 0 | 0 | The paper is a review on the genetic and epigenetic regulation of the innate immune response to gout and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of levocarnitine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 12:17 UTC</sub>
