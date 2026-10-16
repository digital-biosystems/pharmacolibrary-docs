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

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| carnitine (levocarnitine) | parent | 161.199 | C7H15NO3 | DrugBank | [10917](https://pubchem.ncbi.nlm.nih.gov/compound/10917) | Uematsu_1988 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:21 | 7:04 | 0/2/0 | 2/0/1 | 0/0/0 | 478,500/33,985 | einfracz / qwen3.8-27b | 26 | 3/23 | 24/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Fornasini_2007_reference](drugs/drug_levocarnitine/Levocarnitine_Fornasini2007_reference.md) | — | 1-compartment (no model) | 0 | Fornasini G et al., A pharmacokinetic model for L-carnitine…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02926.x](https://doi.org/10.1111/j.1365-2125.2007.02926.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (primary re-run, agreement 0.222), gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Uematsu_1988_reference](drugs/drug_levocarnitine/Levocarnitine_Uematsu1988_reference.md) | — | 1-compartment (no model) | 0 | Uematsu T et al., Pharmacokinetics and safety of l-carnit…, European journal of clinica… (1988) | [10.1007/BF00614562](https://doi.org/10.1007/BF00614562) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2021_2_FPG](drugs/drug_levocarnitine/pd_Wang_2021_2_FPG.md) | fasting plasma glucose ← L-carnitine · direct Emax (saturable) effect | — | Wang DD et al., Quantitative efficacy of L-carnitine su…, Expert review of clinical p… (2021) | [10.1080/17512433.2021.1917381](https://doi.org/10.1080/17512433.2021.1917381) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2021_2_HbA1c](drugs/drug_levocarnitine/pd_Wang_2021_2_HbA1c.md) | glycated hemoglobin ← L-carnitine · direct Emax (saturable) effect | — | Wang DD et al., Quantitative efficacy of L-carnitine su…, Expert review of clinical p… (2021) | [10.1080/17512433.2021.1917381](https://doi.org/10.1080/17512433.2021.1917381) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wu_2014_spike](drugs/drug_levocarnitine/pd_Wu_2014_spike.md) | spike activity ← L-carnitine · direct sigmoid Emax (Hill) effect | — | Wu C et al., Antioxidants L-carnitine and D-methioni…, Journal of neural transmiss… (2014) | [10.1007/s00702-014-1170-x](https://doi.org/10.1007/s00702-014-1170-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.857). Primary extraction retained.">cross-check: disputed</span> | [Wang_2021_BMI](drugs/drug_levocarnitine/pd_Wang_2021_BMI.md) | Body Mass ← l-carnitine · direct Emax (saturable) effect | — | Wang DD et al., The Effects of L-Carnitine, Acetyl-L-Ca…, Frontiers in nutrition (2021) | [10.3389/fnut.2021.748075](https://doi.org/10.3389/fnut.2021.748075) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=levocarnitine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` inhibitor/substrate/unknown, `SLC22A5` substrate/unknown | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` substrate/unknown | DrugBank actor |
| absorption | small intestine | `SLC22A4` inhibitor/substrate/unknown, `SLC22A5` substrate/unknown | DrugBank actor |
| metabolism | liver | `CES1` unknown, `SLCO1B1` inhibitor, `XDH` unknown | DrugBank actor |
| metabolism | small intestine | `XDH` unknown | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CPT1A (activator), CPT1B (activator), CPT2 (unknown), CRAT (unknown), CROT (unknown), MPO (unknown), SLC22A16 (substrate), SLC25A20 (unknown), SLC25A29 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 400 matched, 61 returned
- **screened:** 15  ·  **relevant:** 4
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Uematsu_1988.pdf` | Uematsu T et al., Pharmacokinetics and safety of l-carnit…, European journal of clinica… (1988) | popPK | 10 | [10.1007/BF00614562](https://doi.org/10.1007/BF00614562) | [3383994](https://pubmed.ncbi.nlm.nih.gov/3383994) | The study reports quantitative PK parameters (Vc, t1/2, urine recovery) for levocarnitine, though specific clearance and intercompartmental clearance values are not explicitly listed in the provided text. |
| `Fornasini_2007.pdf` | Fornasini G et al., A pharmacokinetic model for L-carnitine…, British journal of clinical… (2007) | popPK | 9 | [10.1111/j.1365-2125.2007.02926.x](https://doi.org/10.1111/j.1365-2125.2007.02926.x) | [17506778](https://pubmed.ncbi.nlm.nih.gov/17506778) | The study reports specific pharmacokinetic parameters (central volume Vc, transfer rate constants K3/K4) for L-carnitine in a three-compartment model in humans. |
| `Rebouche_1983.pdf` | Rebouche CJ et al., Kinetic compartmental analysis of carni…, Archives of biochemistry an… (1983) | popPK | 5 | [10.1016/0003-9861(83)90387-9](https://doi.org/10.1016/0003-9861(83)90387-9) | [6830246](https://pubmed.ncbi.nlm.nih.gov/6830246) | Study uses generic carnitine in dogs, not specifically levocarnitine, but reports quantitative compartmental parameters (turnover times, flux) for the parent compound. |
| `Kennedy_2000.pdf` | Kennedy JA et al., Effect of perhexiline and oxfenicine on…, Journal of cardiovascular p… (2000) | pd | 4 | [10.1097/00005344-200012000-00016](https://doi.org/10.1097/00005344-200012000-00016) | [11117381](https://www.ncbi.nlm.nih.gov/pubmed/11117381) | metadata signals extractable PD data (IC50) |
| `Robinson_2017.pdf` | Robinson BL et al., Cyclosporine exacerbates ketamine toxic…, Journal of applied toxicolo… (2017) | pgx | 7 | [10.1002/jat.3488](https://doi.org/10.1002/jat.3488) | [28569378](https://www.ncbi.nlm.nih.gov/pubmed/28569378) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Zhang_2025.pdf` | Zhang W et al., Multi-functional Chitosan Polymeric Mic…, Drug delivery and translati… (2025) | pgx | 5 | [10.1007/s13346-024-01597-8](https://doi.org/10.1007/s13346-024-01597-8) | [38643258](https://www.ncbi.nlm.nih.gov/pubmed/38643258) | metadata signals extractable PGX data (CYP3A4) |

<sub>queue written 2026-10-15T03:14:45.417399+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Akyüzlüer_2026 | not_relevant | 0 | 0 | The paper reports prescribing patterns of supplements in mitochondrial diseases and does not investigate the impact of genetic variants on the pharmacokinetics or pharmacodynamics of levocarnitine. |
| PGx | Apostolopoulou_2015 | not_relevant | 0 | 0 | The paper is a review on statin-induced myopathy and does not report pharmacogenomic effects on levocarnitine PK/PD parameters. |
| popPK | Attarwala_2023 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of mRNA-3927 (an mRNA therapeutic), not levocarnitine; carnitine derivatives are only mentioned as biomarkers. |
| PD | Attarwala_2023 | not_relevant | 0 | 0 | The paper focuses on mRNA-3927 for Propionic Acidemia and does not report pharmacodynamic or exposure-response data for levocarnitine. |
| PGx | Baldo_2026 | not_relevant | 0 | 0 | The paper describes the pathophysiology of a genetic metabolic disorder (MADD) and the effect of a supplement (riboflavin), but does not report the pharmacokinetics or pharmacodynamics of the drug levocarnitine. |
| PGx | Barr_2025 | not_relevant | 0 | 0 | The study investigates dietary protein effects on liver metabolism in mice and mentions carnitine as a metabolite, but does not study the PK/PD of the drug levocarnitine or its pharmacogenomics. |
| PGx | Bizjak_2020 | not_relevant | 0 | 0 | The paper describes a genetic case of 3-methylglutaconic aciduria and does not report a pharmacogenomic effect on the PK or PD of levocarnitine. |
| popPK | Dainty_1990 | irrelevant | 0 | 0 | The paper investigates the pharmacodynamic interaction of palmitoyl carnitine (not levocarnitine) with rat endothelium and does not report pharmacokinetic parameters. |
| PGx | Davies_2025 | not_relevant | 0 | 1 | The paper studies the structure and function of the OCTN2 transporter and disease-associated variants, but it does not report pharmacogenomic effects on the PK or PD parameters of the drug levocarnitine in a clinical or pharmacological context. |
| popPK | Farrell_1984 | irrelevant | 0 | 0 | The study characterizes enzyme kinetics (Km) of carnitine acyltransferases in mouse liver peroxisomes and does not report pharmacokinetic disposition parameters (CL, V, half-life) for levocarnitine. |
| PD | Farrell_1984 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Km, Hill coefficient) for carnitine acyltransferases, not a pharmacodynamic exposure-response or dose-response relationship for levocarnitine in a biological system. |
| PGx | Gilchrist_2025 | not_relevant | 0 | 0 | The paper uses Mendelian randomisation to investigate causal links between plasma metabolites and psychiatric/neurodegenerative disorders, not pharmacogenomic effects on the PK/PD of levocarnitine. |
| popPK | Guo_2025 | irrelevant | 0 | 0 | This is a metabolomics study of ALS patients investigating lipid and carnitine pathway associations with disease progression, not a pharmacokinetic study of levocarnitine disposition. |
| PGx | Handig_1996 | not_relevant | 0 | 0 | The paper describes the clinical phenotype of a genetic disease (CPT II deficiency) but does not report the effect of the gene variant on the pharmacokinetic or pharmacodynamic parameters of the drug levocarnitine. |
| PGx | Huang_2017 | not_relevant | 0 | 0 | The paper investigates arsenic metabolism in As3mt knockout mice and does not involve the drug levocarnitine. |
| PGx | Huang_2022 | not_relevant | 0 | 0 | The study investigates uric acid excretion in mice, not the pharmacokinetics or pharmacodynamics of levocarnitine or any gene variant effect on it. |
| PGx | Jegodzinski_2025 | not_relevant | 0 | 0 | The study investigates metabolic differences (lipids, metabolites) associated with the PNPLA3 genotype in MASLD patients, not the pharmacokinetics or pharmacodynamics of levocarnitine. |
| PGx | Jensen_2021 | not_relevant | 0 | 10 | The paper reports on the pharmacogenomics of isobutyrylcarnitine as a biomarker of OCT1, but does not report effects on the PK/PD parameters of the drug levocarnitine. |
| PGx | Joshi_2020 | not_relevant | 0 | 0 | The paper describes a genetic deficiency in the endogenous enzyme CPT II, not the pharmacokinetics or pharmacodynamics of levocarnitine as a drug. |
| PGx | Kadoguchi_2022 | not_relevant | 0 | 0 | The provided text details an inulin uptake study in cell lines and a list of siRNA targets, with no mention of levocarnitine, gene variants, or pharmacokinetic parameters. |
| popPK | Kennedy_2000 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| PD | Kennedy_2000 | not_relevant | 0 | 0 | The paper investigates the effects of perhexiline and oxfenicine, not levocarnitine. |
| PGx | Koletzko_2018 | not_relevant | 0 | 0 | The paper discusses HCV genotype effects on lipid metabolism and toxicity in an in vitro model, but does not involve levocarnitine or pharmacogenomic changes in PK/PD parameters for this drug. |
| PGx | Kolz_2009 | not_relevant | 0 | 0 | The study investigates genetic associations with uric acid levels and carnitine metabolites, not the pharmacokinetics or pharmacodynamics of exogenous levocarnitine therapy. |
| popPK | Lai_2025 | irrelevant | 0 | 0 | The paper is a longitudinal epigenetic study of DNA methylation in Type 2 diabetes and does not report pharmacokinetic parameters for levocarnitine. |
| PGx | Lee_2023 | not_relevant | 0 | 0 | The paper investigates genetic determinants of endogenous propionylcarnitine levels and disease risk, not pharmacokinetics or pharmacodynamics of exogenous levocarnitine drug administration. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper describes the directed evolution of a biosensor for l-carnitine detection, not human pharmacogenomics or PK/PD parameters. |
| popPK | Lilly_1992 | irrelevant | 0 | 0 | The study focuses on the in vitro enzymatic inhibition of carnitine acyltransferases by etomoxiryl-CoA, not the pharmacokinetics of levocarnitine. |
| PD | Lilly_1992 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of etomoxiryl-CoA on carnitine acyltransferases, not the pharmacodynamics of levocarnitine. |
| PGx | Lorenzoni_2024 | not_relevant | 0 | 0 | The paper discusses genetic variants in CPT2 associated with an inherited myopathy (disease mechanism), not the pharmacogenomic impact of a genotype on the pharmacokinetics or pharmacodynamics of levocarnitine as a drug. |
| PGx | Lutter_2025 | not_relevant | 0 | 0 | The paper investigates the genetic burden of BBOX1 mutations in anorexia nervosa patients and its link to carnitine synthesis defects, but it does not report a pharmacogenomic effect on the PK or PD parameters of levocarnitine treatment. |
| PGx | Mansoor_2024 | not_relevant | 2 | 1 | The paper describes a genetic diagnosis (MMUT mutation) and the standard clinical management with L-carnitine, but it does not report pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of levocarnitine. |
| PGx | Marcadet_2026 | not_relevant | 0 | 0 | The paper focuses on the metabolic effects of arimoclomol in an ALS mouse model and does not report pharmacokinetic or pharmacodynamic parameters for levocarnitine. |
| PGx | Nishimura_2008 | not_relevant | 0 | 0 | The study investigates fenofibrate-induced hepatocarcinogenesis in rats and does not report any pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of levocarnitine. |
| PGx | Panichsillaphakit_2025 | not_relevant | 0 | 0 | The paper describes a case of metabolic deficiency treated with levocarnitine, but it does not report any pharmacogenomic effect of a gene variant on the pharmacokinetics or pharmacodynamics of levocarnitine. |
| PGx | Pavar_2023 | not_relevant | 0 | 0 | The paper is a case report and review of valproate-induced toxicity and does not report pharmacogenomic effects on levocarnitine pharmacokinetics or pharmacodynamics. |
| popPK | Pötgens_2021 | irrelevant | 0 | 0 | The study is a metabolomics analysis of cancer cachexia in mice that reports changes in endogenous carnitine levels, not a pharmacokinetic study of levocarnitine with disposition parameters. |
| PGx | Robinson_2017 | not_relevant | 0 | 0 | This paper investigates a drug-drug interaction and mentions a related compound (ALCAR), but it does not report any pharmacogenomic effect on a PK or PD parameter of levocarnitine. |
| PGx | Roder_2024 | not_relevant | 0 | 0 | The paper describes a bioinformatics tool for microbial genome-wide association studies and a proof-of-concept analysis of bacterial metabolism in yogurt; it does not report pharmacogenomic effects on the PK or PD of levocarnitine in humans. |
| PGx | Salomon_2014 | not_relevant | 0 | 0 | The paper focuses on the characterization of NCI-H441 cells as a lung epithelium in vitro model and does not investigate pharmacogenomic effects on levocarnitine PK/PD parameters. |
| popPK | Schiavo_2023 | irrelevant | 1 | 0 | The study focuses on valproic acid pharmacokinetics and hyperammonemia; while the QSP model includes dynamics for endogenous carnitine, the provided evidence contains no quantitative pharmacokinetic parameter values (CL, V, etc.) for levocarnitine. |
| PGx | Schumacher-Klinger_2018 | not_relevant | 0 | 0 | The paper focuses on prodrug design for peptide bioavailability and does not involve levocarnitine or pharmacogenomics. |
| PGx | Seda_2008 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of rosiglitazone in rat strains, not levocarnitine. |
| PGx | Soens_2026 | not_relevant | 0 | 0 | The paper characterizes the mouse lysine acetylome and identifies a new acetylation site on carnitine O-acetyltransferase, but it does not report any pharmacogenomic effect on the pharmacokinetic or pharmacodynamic parameters of the drug levocarnitine. |
| PGx | Taroni_1992 | not_relevant | 0 | 0 | The paper characterizes a genetic disorder (CPT II deficiency) and its effect on endogenous enzyme kinetics, not the pharmacokinetics or pharmacodynamics of exogenous levocarnitine drug administration. |
| PGx | Verderio_1995 | not_relevant | 0 | 0 | The paper describes a genetic disorder (CPT II deficiency) and mutation characterization, not the pharmacokinetics or pharmacodynamics of levocarnitine administration. |
| PGx | Wadman_2020 | not_relevant | 0 | 0 | The paper reviews treatments for Spinal Muscular Atrophy (SMA) and reports efficacy outcomes, not pharmacokinetic or pharmacodynamic effects of levocarnitine stratified by genotype. |
| PGx | Wang_2019 | not_relevant | 0 | 0 | The study investigates the mechanism of a herbal extract in uric acid nephropathy and does not involve the pharmacogenomics of levocarnitine. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The study reports pharmacodynamic efficacy (BMI change) using an Emax model, not pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Wang_2021_2 | irrelevant | 0 | 0 | The study reports quantitative efficacy (Emax model) on glycemic control, not pharmacokinetic disposition parameters (CL, V, etc.) for levocarnitine. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study models the pharmacodynamic effect of carnitine on body weight in PCOS patients, not its pharmacokinetic disposition parameters (CL, V, etc.). |
| PD | Wang_2022 | not_relevant | 0 | 0 | The paper describes a machine-learning approach for predicting body weight changes and does not report pharmacokinetic data, exposure-response relationships, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for levocarnitine. |
| popPK | Wu_2011 | irrelevant | 0 | 0 | The study is an in vitro mechanistic assay measuring neuronal firing rates and drug potency (EC50), not a pharmacokinetic study reporting disposition parameters for levocarnitine. |
| PD | Wu_2011 | not_relevant | 0 | 0 | not captured |
| popPK | Wu_2014 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of L-carnitine's pharmacological mechanism (GABA receptor modulation) and reports no pharmacokinetic parameters. |
| PGx | Yamada_2019 | not_relevant | 1 | 1 | The paper is a review of fatty acid oxidation disorders that discusses L-carnitine therapy qualitatively, but it does not report specific pharmacokinetic or pharmacodynamic effects of gene variants on levocarnitine. |
| PGx | Yamazaki_2008 | not_relevant | 0 | 0 | The paper investigates M-CPTI enzyme variants affecting fatty acid oxidation, not the pharmacokinetics or pharmacodynamics of the drug levocarnitine. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper focuses on the oral bioavailability of paclitaxel using L-carnitine as a drug delivery excipient, not on the pharmacokinetics of levocarnitine or the effect of genetic variants on levocarnitine's PD. |
| PGx | Zhou_2025 | not_relevant | 0 | 0 | The paper investigates the causal association between genetically predicted serum carnitine levels and cancer risk using Mendelian randomization, rather than reporting how gene variants alter the pharmacokinetics or pharmacodynamics of exogenous levocarnitine administration. |
| PGx | de_2023 | not_relevant | 0 | 0 | The paper reviews the genetic and epigenetic regulation of innate immune responses in gout and does not investigate the pharmacokinetics or pharmacodynamics of levocarnitine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:14 UTC</sub>
