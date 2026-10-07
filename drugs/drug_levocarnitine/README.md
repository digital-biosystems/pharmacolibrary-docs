<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;levocarnitine&quot;}]"></div>

# levocarnitine

- **generic name:** levocarnitine
- **ATC codes:** `A16AA01`
- **DrugBank:** [DB00583](https://go.drugbank.com/drugs/DB00583) · **PubChem:** [CID 10917](https://pubchem.ncbi.nlm.nih.gov/compound/10917)
- **molar mass:** 161.1989 g/mol (C7H15NO3) — DrugBank
- **groups:** approved, investigational

## About

Levocarnitine is an amino acid derivative used to treat carnitine deficiency and related metabolic conditions. It is an approved medicine and is also being studied for other investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20735709](https://www.wikidata.org/wiki/Q20735709) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:47 | 3:21 | 0/2/0 | 1/0/1 | 0/0/0 | 243,800/12,723 | einfracz / qwen3.8-27b | 26 | 3/23 | 24/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Fornasini_2007_reference](drugs/drug_levocarnitine/Levocarnitine_Fornasini2007_reference.md) | — | 1-compartment (no model) | 0 | Fornasini G et al., A pharmacokinetic model for L-carnitine…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02926.x](https://doi.org/10.1111/j.1365-2125.2007.02926.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Uematsu_1988_reference](drugs/drug_levocarnitine/Levocarnitine_Uematsu1988_reference.md) | — | 1-compartment (no model) | 0 | Uematsu T et al., Pharmacokinetics and safety of l-carnit…, European journal of clinica… (1988) | [10.1007/BF00614562](https://doi.org/10.1007/BF00614562) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Wu_2014_spike_activity](drugs/drug_levocarnitine/pd_Wu_2014_spike_activity.md) | spike activity ← L-carnitine · direct sigmoid Emax (Hill) effect | — | Wu C et al., Antioxidants L-carnitine and D-methioni…, Journal of neural transmiss… (2014) | [10.1007/s00702-014-1170-x](https://doi.org/10.1007/s00702-014-1170-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Wang_2021_BMI](drugs/drug_levocarnitine/pd_Wang_2021_BMI.md) | Body Mass index ← l-carnitine · direct Emax (saturable) effect | — | Wang DD et al., The Effects of L-Carnitine, Acetyl-L-Ca…, Frontiers in nutrition (2021) | [10.3389/fnut.2021.748075](https://doi.org/10.3389/fnut.2021.748075) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=levocarnitine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` inhibitor/substrate/unknown, `SLC22A5` substrate/unknown | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` substrate/unknown | DrugBank actor |
| absorption | small intestine | `SLC22A4` inhibitor/substrate/unknown, `SLC22A5` substrate/unknown | DrugBank actor |
| metabolism | liver | `CES1` unknown, `SLCO1B1` inhibitor, `XDH` unknown | DrugBank actor |
| metabolism | small intestine | `XDH` unknown | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CPT1A (activator), CPT1B (activator), CPT2 (unknown), CRAT (unknown), CROT (unknown), MPO (unknown), SLC22A16 (substrate), SLC25A20 (unknown), SLC25A29 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 400 matched, 61 returned
- **screened:** 14  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fornasini_2007.pdf` | Fornasini G et al., A pharmacokinetic model for L-carnitine…, British journal of clinical… (2007) | popPK | 10 | [10.1111/j.1365-2125.2007.02926.x](https://doi.org/10.1111/j.1365-2125.2007.02926.x) | [17506778](https://pubmed.ncbi.nlm.nih.gov/17506778) | The study reports a compartmental PK model for L-carnitine in humans with specific numeric values for central volume and transfer rate constants in the abstract, though other key parameters like clearances and half-lives are not explicitly listed in the provided text. |
| `Uematsu_1988.pdf` | Uematsu T et al., Pharmacokinetics and safety of l-carnit…, European journal of clinica… (1988) | popPK | 10 | [10.1007/BF00614562](https://doi.org/10.1007/BF00614562) | [3383994](https://pubmed.ncbi.nlm.nih.gov/3383994) | Reports a three-compartment PK model for levocarnitine in humans with Vc and t1/2 gamma values, but full parameter set (CL, Q, ka) is not explicitly listed in the provided evidence. |
| `Kennedy_2000.pdf` | Kennedy JA et al., Effect of perhexiline and oxfenicine on…, Journal of cardiovascular p… (2000) | pd | 4 | [10.1097/00005344-200012000-00016](https://doi.org/10.1097/00005344-200012000-00016) | [11117381](https://www.ncbi.nlm.nih.gov/pubmed/11117381) | metadata signals extractable PD data (IC50) |
| `Robinson_2017.pdf` | Robinson BL et al., Cyclosporine exacerbates ketamine toxic…, Journal of applied toxicolo… (2017) | pgx | 7 | [10.1002/jat.3488](https://doi.org/10.1002/jat.3488) | [28569378](https://www.ncbi.nlm.nih.gov/pubmed/28569378) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Zhang_2025.pdf` | Zhang W et al., Multi-functional Chitosan Polymeric Mic…, Drug delivery and translati… (2025) | pgx | 5 | [10.1007/s13346-024-01597-8](https://doi.org/10.1007/s13346-024-01597-8) | [38643258](https://www.ncbi.nlm.nih.gov/pubmed/38643258) | metadata signals extractable PGX data (CYP3A4) |

<sub>queue written 2026-10-07T17:44:48.639443+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Akyüzlüer_2026 | not_relevant | 0 | 0 | The paper reports prescribing patterns of supplements in mitochondrial diseases but does not analyze how genetic variants affect the pharmacokinetics or pharmacodynamics of levocarnitine. |
| PGx | Apostolopoulou_2015 | not_relevant | 0 | 0 | The paper reviews statin-induced myopathy mechanisms and genetics (SLCO1B1, CPT2), but does not report pharmacokinetic or pharmacodynamic parameters of levocarnitine. |
| popPK | Attarwala_2023 | irrelevant | 0 | 0 | The study models the pharmacokinetics of mRNA-3927 (an mRNA therapeutic for propionic acidemia), not the drug levocarnitine; levocarnitine is not the subject drug. |
| PD | Attarwala_2023 | not_relevant | 0 | 0 | The paper focuses on mRNA-3927 for Propionic Acidemia and does not report pharmacodynamic or exposure-response data for levocarnitine. |
| PGx | Baldo_2026 | not_relevant | 0 | 0 | The paper reports on a genetic variant causing MADD and its metabolic effects (e.g., acylcarnitine levels, oxygen consumption), but it does not study the pharmacokinetics or pharmacodynamics of the drug levocarnitine. |
| PGx | Barr_2025 | not_relevant | 0 | 0 | The paper investigates the effects of dietary protein and ammonium hydroxide on liver metabolism in mice and does not involve the administration of levocarnitine or pharmacogenomic analysis of its PK/PD parameters. |
| PGx | Bizjak_2020 | not_relevant | 0 | 0 | The paper reports a clinical case of 3-MGA-I due to an AUH mutation; it discusses leucine restriction and carnitine supplementation but does not analyze the effect of any gene variant on the pharmacokinetics or pharmacodynamics of levocarnitine or any other drug. |
| popPK | Dainty_1990 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of palmitoyl carnitine on rat aorta (endothelial interactions), not the pharmacokinetic disposition of levocarnitine. |
| PGx | Davies_2025 | not_relevant | 2 | 3 | The paper reports structural and functional characterizations of the OCTN2 transporter and its variants using L-carnitine as a probe substrate, but does not report a pharmacogenomic effect on the PK or PD of levocarnitine as a therapeutic drug. |
| popPK | Farrell_1984 | irrelevant | 0 | 0 | The study is an in-vitro enzymological characterization of carnitine acyltransferases in mouse liver, not a pharmacokinetic study of levocarnitine disposition. |
| PD | Farrell_1984 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Km, Hill coefficient) for carnitine acyltransferases, not a pharmacodynamic exposure-response or dose-response relationship for levocarnitine in a biological system. |
| PGx | Gilchrist_2025 | not_relevant | 0 | 0 | The study investigates Mendelian randomization of metabolites on disease risk, not the pharmacokinetics or pharmacodynamics of the drug levocarnitine. |
| popPK | Guo_2025 | irrelevant | 0 | 0 | The study is a metabolomic analysis of lipid and carnitine metabolites in ALS, not a pharmacokinetic study of levocarnitine. |
| popPK | Haarhuis_2026 | irrelevant | 3 | 4 | The study focuses on TMAO pharmacokinetics following a levocarnitine challenge (where levocarnitine is a precursor/co-administered agent rather than the subject of a PK model), and while non-compartmental levocarnitine parameters (AUC, Cmax, Tmax) are reported, half-life is not determinable due to missed peak capture. |
| PGx | Handig_1996 | not_relevant | 0 | 0 | The paper reports a genetic mutation in a metabolic enzyme (CPT II) causing a disease, not a pharmacogenomic effect on the PK/PD of the drug levocarnitine. |
| PGx | Huang_2017 | not_relevant | 0 | 0 | The paper investigates the metabolomic profiles of arsenic methyltransferase knockout mice and does not mention levocarnitine or its pharmacokinetic/pharmacodynamic parameters. |
| PGx | Huang_2022 | not_relevant | 0 | 0 | The study focuses on uric acid excretion and gut microbiota in CKD mice, not on the PK/PD of levocarnitine or pharmacogenomic effects. |
| PGx | Jegodzinski_2025 | not_relevant | 0 | 0 | The paper studies metabolic changes in MASLD patients, not the pharmacokinetics or pharmacodynamics of levocarnitine. |
| PGx | Jensen_2021 | not_relevant | 0 | 0 | The paper investigates isobutyrylcarnitine as a biomarker for OCT1 transporters and does not report PK or PD parameters for levocarnitine. |
| PGx | Joshi_2020 | not_relevant | 0 | 0 | The paper describes the pathophysiology and genetics of CPT II deficiency, a disease state, but does not report a pharmacogenomic effect on the PK or PD parameters of levocarnitine. |
| PGx | Kadoguchi_2022 | not_relevant | 0 | 0 | The provided text details supplemental data for inulin uptake, siRNA sequences, and transporter data for various other drugs (e.g., abemaciclib, aripiprazole), with no mention of levocarnitine or pharmacogenomic effects on its PK/PD. |
| popPK | Kennedy_2000 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| PD | Kennedy_2000 | not_relevant | 0 | 0 | The paper investigates the effects of perhexiline and oxfenicine, not levocarnitine. |
| PGx | Koletzko_2018 | not_relevant | 0 | 0 | The paper studies the effect of HCV infection on fatty acid metabolism and lipotoxicity in vitro, with no mention of levocarnitine pharmacokinetics or pharmacodynamics. |
| PGx | Kolz_2009 | not_relevant | 0 | 0 | The paper focuses on genetic variants influencing serum uric acid concentrations and does not report the PK/PD of levocarnitine. |
| popPK | Lai_2025 | irrelevant | 0 | 0 | The paper is a longitudinal epigenetics study investigating DNA methylation associations with Type 2 diabetes and does not report any pharmacokinetic parameters for levocarnitine. |
| PGx | Lee_2023 | not_relevant | 0 | 0 | The paper investigates genetic factors influencing endogenous propionylcarnitine concentrations and MetS risk, rather than the pharmacokinetics or pharmacodynamics of exogenous levocarnitine administration. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper reports on the engineering of a biosensor for l-carnitine detection using protein mutagenesis, not on human pharmacogenomics affecting PK/PD parameters. |
| popPK | Lilly_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition kinetics, not a pharmacokinetic study of levocarnitine disposition. |
| PD | Lilly_1992 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of etomoxiryl-CoA on carnitine acyltransferases, not the pharmacodynamics of levocarnitine. |
| PGx | Lorenzoni_2024 | not_relevant | 0 | 0 | The paper describes a genetic update for CPT II deficiency and does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of levocarnitine. |
| PGx | Lutter_2025 | not_relevant | 1 | 5 | The paper investigates a genetic association with a disease phenotype (anorexia nervosa) and its underlying metabolic pathway (carnitine synthesis), not a pharmacogenomic effect on the PK/PD of a specific drug. |
| PGx | Mansoor_2024 | not_relevant | 0 | 0 | The paper describes the diagnosis of a genetic disorder and the qualitative administration of L-carnitine as treatment, but it does not report any pharmacokinetic or pharmacodynamic data or the impact of the genotype on drug levels or response. |
| PGx | Marcadet_2026 | not_relevant | 0 | 0 | The paper studies lipid metabolism in ALS and does not report pharmacogenomic effects on the PK or PD of levocarnitine. |
| PGx | Nishimura_2008 | not_relevant | 0 | 0 | The paper studies fenofibrate-induced hepatocarcinogenesis in rats and mentions carnitine acetyltransferase activity, but does not investigate levocarnitine pharmacokinetics/pharmacodynamics or genetic variants affecting them. |
| PGx | Panichsillaphakit_2025 | not_relevant | 0 | 0 | The paper reports a case of metabolic deficiency caused by nutritional lack of riboflavin, not a pharmacogenomic effect of a gene variant on levocarnitine PK/PD. |
| PGx | Pavar_2023 | not_relevant | 0 | 0 | The paper is a case report on valproate-induced encephalopathy and does not report a pharmacogenomic effect on levocarnitine's PK or PD parameters. |
| popPK | Pötgens_2021 | irrelevant | 0 | 0 | The study is a metabolomics investigation in mice that measures tissue levels of carnitine as a marker of metabolic disturbance, not a pharmacokinetic study of levocarnitine dosing. |
| popPK | Rebouche_1983 | irrelevant | 1 | 3 | The study uses radiolabeled carnitine to quantify the metabolic pool size and turnover kinetics of endogenous carnitine, not the disposition (CL, V) of exogenous levocarnitine. |
| PGx | Robinson_2017 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction between cyclosporine and ketamine, not a pharmacogenomic effect on levocarnitine pharmacokinetics or pharmacodynamics. |
| PGx | Roder_2024 | not_relevant | 0 | 0 | The paper describes microbial metabolism of carnitine in yogurt production, not pharmacogenomics of levocarnitine in humans. |
| PGx | Salomon_2014 | not_relevant | 0 | 0 | The paper describes a cell line model for lung transport but does not study the effect of gene variants on PK/PD parameters for levocarnitine. |
| popPK | Schiavo_2023 | irrelevant | 3 | 0 | The paper focuses on a QSP model for valproic acid-induced hyperammonemia where L-carnitine is a co-administered treatment/endogenous component, not a standalone PK study reporting specific disposition parameters for levocarnitine. |
| PGx | Schumacher-Klinger_2018 | not_relevant | 0 | 0 | The paper studies the prodrug design and pharmacokinetics of cyclic RGD peptides, not levocarnitine, and contains no pharmacogenomic data. |
| PGx | Seda_2008 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of rosiglitazone, not levocarnitine. |
| PGx | Soens_2026 | not_relevant | 0 | 0 | The paper presents a mouse acetylome atlas and discusses post-translational acetylation of enzymes like Crat, but it does not report on pharmacokinetic or pharmacodynamic parameters of levocarnitine altered by specific gene variants or genotypes. |
| PGx | Taroni_1992 | not_relevant | 0 | 0 | The paper investigates a genetic defect in a metabolic enzyme (CPT2) and its biochemical consequences, but does not report on the pharmacokinetics or pharmacodynamics of the drug levocarnitine. |
| PGx | Verderio_1995 | not_relevant | 0 | 0 | The paper describes the structural basis of a CPT II gene mutation in a metabolic disorder and does not evaluate pharmacokinetic or pharmacodynamic changes of levocarnitine. |
| PGx | Wadman_2020 | not_relevant | 0 | 0 | The paper is a Cochrane review of drug treatments for SMA and does not investigate pharmacogenomic effects on levocarnitine PK/PD. |
| PGx | Wang_2019 | not_relevant | 0 | 0 | The paper investigates the effect of a herbal extract (Smilax glabra) on uric acid nephropathy and does not report any pharmacogenomic effects on the PK/PD of levocarnitine. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The study performs a pharmacodynamic model (Emax on BMI change) rather than a pharmacokinetic analysis, and reports no disposition parameters such as clearance, volume, or half-life. |
| popPK | Wang_2021_2 | irrelevant | 0 | 0 | The study reports pharmacodynamic/efficacy parameters (Emax, ET50) for glycemic control, not pharmacokinetic parameters (CL, V, ka) for levocarnitine. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study models the effect of carnitine supplementation on body weight (pharmacodynamics/efficacy) in PCOS patients, not the pharmacokinetic disposition parameters (CL, V, etc.) of levocarnitine. |
| PD | Wang_2022 | not_relevant | 0 | 0 | The paper describes a machine-learning approach for predicting body weight changes and does not report pharmacokinetic data, exposure-response relationships, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for levocarnitine. |
| popPK | Wu_2011 | irrelevant | 0 | 0 | The study is an in vitro electrophysiology experiment assessing the mechanism of action (EC50) of levocarnitine on neuronal firing, not a pharmacokinetic study. |
| PD | Wu_2011 | not_relevant | 0 | 0 | not captured |
| popPK | Wu_2014 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of levocarnitine (GABA-A receptor modulation) in vitro, not its pharmacokinetic disposition parameters. |
| PGx | Yamada_2019 | not_relevant | 2 | 0 | The paper is a review of mitochondrial fatty acid oxidation disorders and discusses the clinical use of levocarnitine, but it does not report specific pharmacogenomic effects of gene variants on the PK or PD parameters of levocarnitine. |
| PGx | Yamazaki_2008 | not_relevant | 0 | 0 | The paper studies the effect of SNPs on the enzymatic properties of CPT1I (fatty acid metabolism), not the pharmacokinetics or pharmacodynamics of the drug levocarnitine. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper focuses on drug delivery formulation for Paclitaxel and does not report any pharmacogenomic effects on levocarnitine PK/PD parameters. |
| PGx | Zhou_2025 | not_relevant | 0 | 10 | The study is a Mendelian randomization analysis of the causal link between serum carnitine levels and cancer risk, not a pharmacogenomic study of the PK or PD of levocarnitine as a drug. |
| PGx | de_2023 | not_relevant | 0 | 0 | The paper is a review of gout pathogenesis and immune response, and does not report pharmacogenomic effects on the PK/PD of levocarnitine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:44 UTC</sub>
