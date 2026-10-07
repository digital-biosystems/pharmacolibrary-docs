<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01C&quot;,&quot;href&quot;:&quot;atc/H01C.md&quot;},{&quot;label&quot;:&quot;octreotide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Octreotide_Choe2017_reference&quot;,&quot;label&quot;:&quot;Choe_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_octreotide/Octreotide_Choe2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Octreotide_Min2025_reference&quot;,&quot;label&quot;:&quot;Min_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_octreotide/Octreotide_Min2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# octreotide

- **generic name:** octreotide
- **ATC codes:** `H01CB02`
- **DrugBank:** [DB00104](https://go.drugbank.com/drugs/DB00104) · **PubChem:** [CID 448601](https://pubchem.ncbi.nlm.nih.gov/compound/448601)
- **groups:** approved, investigational

## About

Octreotide, a somatostatin analogue, is used to treat acromegaly and various neuroendocrine conditions such as carcinoid syndrome and pancreatic cancer. It is an approved medicine, authorised in the European Union for acromegaly, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419935](https://www.wikidata.org/wiki/Q419935) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| octreotide | parent | 1019.25 | C49H66N10O10S2 | PubChem | [448601](https://pubchem.ncbi.nlm.nih.gov/compound/448601) | Ding_2004, Ma_2005, Zhou_2000 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:49 | 18:48 | 2/2/1 | 2/0/0 | 0/0/0 | 712,235/24,480 | einfracz / qwen3.8-27b | 27 | 4/22 | 27/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Choe_2017_reference](drugs/drug_octreotide/Octreotide_Choe2017_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Choe S et al., Parameter estimation for sigmoid E&lt;sub&gt;…, Translational and clinical… (2017) | [10.12793/tcp.2017.25.2.74](https://doi.org/10.12793/tcp.2017.25.2.74) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Min_2025_reference](drugs/drug_octreotide/Octreotide_Min2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Min JS et al., A Comprehensive Review on the Pharmacok…, Drug design, development an… (2025) | [10.2147/dddt.s506957](https://doi.org/10.2147/dddt.s506957) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Ma_2005_reference](drugs/drug_octreotide/Octreotide_Ma2005_reference.md) | — | 1-compartment (no model) | 3 | Ma P et al., Pharmacokinetic-pharmacodynamic compari…, Clinical pharmacology and t… (2005) | [10.1016/j.clpt.2005.04.003](https://doi.org/10.1016/j.clpt.2005.04.003) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Ding_2004_reference](drugs/drug_octreotide/Octreotide_Ding2004_reference.md) | — | 1-compartment (no model) | 6 | Ding JS et al., [Determination of octreotide in human p…, Yao xue xue bao = Acta phar… (2004) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Zhou_2000_reference](drugs/drug_octreotide/Octreotide_Zhou2000_reference.md) | — | 1-compartment (no model) | 2 | Zhou H et al., Population PK and PK/PD modelling of mi…, British journal of clinical… (2000) | [10.1046/j.1365-2125.2000.00297.x](https://doi.org/10.1046/j.1365-2125.2000.00297.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ma_2005_GH](drugs/drug_octreotide/pd_Ma_2005_GH.md) | growth hormone ← octreotide · direct Emax (saturable) effect | — | Ma P et al., Pharmacokinetic-pharmacodynamic compari…, Clinical pharmacology and t… (2005) | [10.1016/j.clpt.2005.04.003](https://doi.org/10.1016/j.clpt.2005.04.003) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhou_2000_IGF_1](drugs/drug_octreotide/pd_Zhou_2000_IGF_1.md) | serum IGF-1 ← octreotide · direct Emax (saturable) effect | — | Zhou H et al., Population PK and PK/PD modelling of mi…, British journal of clinical… (2000) | [10.1046/j.1365-2125.2000.00297.x](https://doi.org/10.1046/j.1365-2125.2000.00297.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=octreotide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCC2` inhibitor/substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: MPO (inhibitor), SSTR2 (binder), Somatostatin receptor (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 319 matched, 119 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 2  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ma_2005.pdf` | Ma P et al., Pharmacokinetic-pharmacodynamic compari…, Clinical pharmacology and t… (2005) | popPK | 10 | [10.1016/j.clpt.2005.04.003](https://doi.org/10.1016/j.clpt.2005.04.003) | [16003295](https://pubmed.ncbi.nlm.nih.gov/16003295) | The paper reports quantitative PK parameters (clearance 15.8 L/h, half-life 2.3 h) for octreotide in the abstract. |
| `Zhou_2000.pdf` | Zhou H et al., Population PK and PK/PD modelling of mi…, British journal of clinical… (2000) | popPK | 10 | [10.1046/j.1365-2125.2000.00297.x](https://doi.org/10.1046/j.1365-2125.2000.00297.x) | [11136293](https://pubmed.ncbi.nlm.nih.gov/11136293) | The paper is a population PK study of octreotide in humans, but while specific rate constants (Ke, KIR, KSR) are provided in the abstract, the central parameters (Clearance, Volume of Distribution) are described qualitatively with respect to covariates without explicit numeric values in the text. |
| `Comets_1999.pdf` | Comets E et al., Nonparametric analysis of the absorptio…, Journal of controlled relea… (1999) | popPK | 9 | [10.1016/s0168-3659(98)00194-1](https://doi.org/10.1016/s0168-3659(98)00194-1) | [10332054](https://pubmed.ncbi.nlm.nih.gov/10332054) | The study reports a two-compartment PK model for octreotide in rabbits, but specific numeric parameter values (CL, V, ka) are not provided in the evidence text. |
| `Ding_2004.pdf` | Ding JS et al., [Determination of octreotide in human p…, Yao xue xue bao = Acta phar… (2004) | popPK | 9 | not captured | [15493847](https://pubmed.ncbi.nlm.nih.gov/15493847) | The study reports quantitative pharmacokinetic parameters (Cmax, Tmax, T1/2, AUC) for octreotide in humans using a one-compartment model. |
| `Daddabbo_1995.pdf` | D'addabbo A et al., Description of a multicompartmental mod…, The quarterly journal of nu… (1995) | popPK | 8 | not captured | [9002758](https://pubmed.ncbi.nlm.nih.gov/9002758) | The paper describes a compartmental PK model for a radiolabeled octreotide analogue in humans, but no specific numeric parameter values (CL, V, etc.) are provided in the evidence text. |

<sub>queue written 2026-10-07T09:41:05.866704+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barakat_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Lu-177 DOTATATE, not octreotide. |
| popPK | Bashir_2020 | irrelevant | 0 | 0 | The study investigates the imaging kinetics of the radiolabeled tracer [68Ga]Ga-DOTA-TOC for somatostatin receptor quantification in tumors, not the systemic pharmacokinetic parameters (CL, V, t1/2) of octreotide for therapeutic disposition. |
| PGx | Brandman_2012 | not_relevant | 0 | 0 | The paper studies the effect of HCV genotypes on treatment response (SVR) and insulin sensitivity; it does not report pharmacogenomic effects on the PK or PD parameters of octreotide (which is used only as an adjunct to suppress endogenous insulin in the diagnostic test). |
| popPK | Brimhall_2018 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of somatropin, using octreotide only as a co-administered agent to suppress endogenous growth hormone; no PK parameters for octreotide are reported. |
| popPK | Cervia_2003 | irrelevant | 0 | 0 | The study is a mechanistic cell-based investigation of somatostatin receptor coupling and does not report pharmacokinetic parameters for octreotide. |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The paper focuses on a data harmonisation framework for COVID-19 drug targets and does not report any pharmacokinetic parameters for octreotide. |
| popPK | Choe_2017 | irrelevant | 0 | 0 | This is a simulation study using virtual drugs to evaluate PK/PD modeling methods; octreotide is only cited in the introduction as a background reference for other studies, not the subject of the data. |
| popPK | Comets_1999 | relevant | 9 | 1 | The study reports a two-compartment PK model for octreotide in rabbits, but specific numeric parameter values (CL, V, ka) are not provided in the evidence text. |
| popPK | Comets_2001 | irrelevant | 0 | 0 | The study evaluates statistical methods for comparing dissolution curves (in vitro release) rather than reporting pharmacokinetic disposition parameters in vivo. |
| popPK | Comets_2003 | irrelevant | 1 | 0 | The study is a population pharmacodynamic analysis modeling the inhibition of growth hormone by octreotide, not a pharmacokinetic study of octreotide's disposition parameters (CL, V, t1/2). |
| popPK | Cremonesi_1999 | irrelevant | 0 | 0 | The study evaluates the biodistribution and dosimetry of (111)In-DOTATOC (a radiolabelled somatostatin analogue), not the pharmacokinetic disposition parameters (CL, V, Q) of unlabelled octreotide. |
| popPK | Cuny_2021 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study assessing GH secretion inhibition where octreotide serves only as a comparator, not a pharmacokinetic study of the drug itself. |
| popPK | Daddabbo_1995 | relevant | 8 | 0 | The paper describes a compartmental PK model for a radiolabeled octreotide analogue in humans, but no specific numeric parameter values (CL, V, etc.) are provided in the evidence text. |
| popPK | Dasgupta_2021 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study of veldoreotide (comparing to octreotide) in cell lines, containing no pharmacokinetic or disposition parameters for octreotide. |
| popPK | Dubois_2012 | irrelevant | 0 | 0 | The study focuses on pharmacokinetics of somatropin and epoetin-alpha, not octreotide. |
| popPK | Durán-Prado_2007 | irrelevant | 0 | 0 | The study investigates porcine somatostatin receptor pharmacology and dynamics in vitro, not the pharmacokinetic disposition parameters (CL, V, etc.) of octreotide in a subject. |
| popPK | Florio_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of cell proliferation, not a pharmacokinetic study, and octreotide is used only as a comparator for antiproliferative efficacy. |
| popPK | Ghosh_2017 | irrelevant | 0 | 0 | The study focuses on the receptor pharmacology and imaging properties of DOTATOC analogs, using octreotide only as a blocking agent/comparator, and does not report PK disposition parameters for octreotide. |
| popPK | Greene_1996 | irrelevant | 0 | 0 | This is an in-vitro electrophysiological study on rat neurons, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Hansen_1994 | irrelevant | 0 | 0 | The study is an in-vitro physiological study of serotonin effects in pig jejunum where octreotide is used only as a pharmacological agent to test sensitivity, not for PK parameter estimation. |
| popPK | Henze_2005 | irrelevant | 1 | 2 | The study reports receptor-binding kinetic parameters (k1-k4) for a diagnostic PET tracer (68Ga-DOTA-TOC) in tumor tissue, not systemic disposition parameters (CL, V, t1/2) for octreotide itself. |
| popPK | Huang_1996 | irrelevant | 0 | 0 | This study investigates hemodynamic and vascular contractile responses to octreotide, reporting no pharmacokinetic parameters (CL, V, t1/2). |
| popPK | Iida_2021 | irrelevant | 2 | 0 | The study focuses on exposure-response (pharmacodynamics) of octreotide on growth hormone secretion, not quantitative pharmacokinetic parameters (CL, V, t1/2) for the drug itself. |
| popPK | Janssen_2022 | irrelevant | 1 | 0 | The paper is a review of machine learning methods in pharmacometrics and only mentions a study on Octreotide LAR absorption patterns as a methodological example without reporting quantitative PK parameters. |
| popPK | Jaquet_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological analysis of receptor expression and prolactin suppression, not a pharmacokinetic study reporting disposition parameters for octreotide. |
| popPK | Jaquet_2005 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic assay measuring hormone suppression in tumor cell cultures, not a pharmacokinetic study, and octreotide is used only as a comparator. |
| popPK | Jaquet_2005_2 | irrelevant | 0 | 0 | The study is an in vitro investigation of drug efficacy (GH suppression) in cell cultures, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Kapralos_2021 | relevant | 10 | 4 | The paper reports a population PK model for octreotide LAR, but the specific numeric values for clearance (CL) and volume (V) are explicitly stated to be in Table S1 (supplementary material), which is not provided in the evidence; only ka, AUC, and Cmax values are visible. |
| PGx | Kasuki_2016 | not_relevant | 2 | 10 | The study investigates gene variants (d3GHR) for the drug pegvisomant, not octreotide, and reports no pharmacokinetic or pharmacodynamic effects on octreotide. |
| popPK | Kidd_2006 | irrelevant | 0 | 0 | The study is an in-vitro functional characterization of enterochromaffin cells using octreotide as an inhibitory ligand, not a pharmacokinetic study. |
| popPK | Lambert_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the radiopharmaceutical 177Lu-Dotatate, not octreotide. |
| PGx | Li_2018 | not_relevant | 0 | 0 | The study investigates the antitumor efficacy of octreotide combined with cisplatin on thyroid cancer cells, not the effect of genetic variants on octreotide pharmacokinetics or pharmacodynamics. |
| PGx | Maladaki_2012 | not_relevant | 4 | 0 | The paper reports a successful treatment response to octreotide in a patient with specific UGT polymorphisms, but it does not measure or report changes in octreotide's pharmacokinetic or pharmacodynamic parameters resulting from the genotype. |
| popPK | Mangas-Sanjuán_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of desvenlafaxine, not octreotide; octreotide is only mentioned in the introduction as an example of a different guideline. |
| popPK | McKeen_1994 | irrelevant | 0 | 0 | This is a pharmacological study on receptor-mediated contractile responses in rat colon, not a pharmacokinetic study, and reports no disposition parameters (CL, V, t1/2) for octreotide. |
| popPK | McKeen_1995 | irrelevant | 0 | 0 | The study is an in-vitro physiological/pharmacological assay measuring ion transport and receptor potency (EC50) in rat tissue, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Min_2025 | irrelevant | 0 | 0 | The paper reviews the pharmacokinetics of GLP-1 receptor agonists (exenatide, liraglutide, etc.) and does not contain any data or mention of octreotide. |
| popPK | Miyazaki_2012 | irrelevant | 0 | 0 | The study uses octreotide as a radiolabeled therapeutic agent and analyzes MRI-derived blood flow and distribution volume parameters, not pharmacokinetic disposition parameters like clearance or half-life. |
| popPK | Modlin_2006 | irrelevant | 0 | 0 | The study is an in-vitro functional characterization of enterochromaffin cells where octreotide is used only as a stimulant to test 5-HT secretion, not as the subject of a pharmacokinetic analysis. |
| PGx | Mouron-Hryciuk_2021 | not_relevant | 0 | 0 | The paper reports a clinical case of congenital hyperinsulinism and gene variants; it mentions octreotide use but does not report any pharmacogenomic effect on octreotide's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Ng_2018 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for exendin-(9-39), not for the target drug octreotide. |
| popPK | Nunn_2003 | irrelevant | 0 | 0 | This is a pharmacological/receptor binding study characterizing a receptor antagonist (CYN 154806), not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for octreotide. |
| popPK | Nunn_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/pharmacological assay of receptor signaling (calcium and luciferase) and does not report population pharmacokinetic parameters. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators and contains no pharmacokinetic data or octreotide content. |
| popPK | Paci_2026 | irrelevant | 0 | 0 | The paper describes a nanofluidic drug delivery device and reports in vitro release rates, not the pharmacokinetic disposition parameters (CL, V, etc.) of octreotide. |
| popPK | Paciotti_2023 | irrelevant | 0 | 0 | The paper is a computational chemistry study on Rhodium complexes and does not contain pharmacokinetic data for octreotide, which is only mentioned as a context for bioconjugation. |
| popPK | Pai_2009 | irrelevant | 0 | 0 | The study is a simulation of pharmacodynamic parameter estimation (concentration-effect) and does not report quantitative pharmacokinetic disposition parameters (CL, V, Q, ka) for octreotide. |
| popPK | Peng_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of MK-3577, using octreotide only as a tool to suppress endogenous insulin during a challenge study, with no octreotide PK parameters reported. |
| popPK | Peterson_2023 | irrelevant | 0 | 0 | The paper investigates dosimetry of 177Lu-DOTATATE (a radiopharmaceutical) for peptide receptor radionuclide therapy, not the population pharmacokinetics (CL, V, etc.) of octreotide as a subject drug. |
| popPK | Puszkiel_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 177Lu-Dotatate, a radiolabeled peptide, not the drug octreotide. |
| PGx | Ristow_1997 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic consequences of PFK1-M deficiency on glucose metabolism (insulin secretion/resistance), not the pharmacokinetics or pharmacodynamics of octreotide itself (which was used only as a control drug in the sensitivity test). |
| PGx | Satpati_2017 | not_relevant | 0 | 0 | The paper describes chemical analogs and PK in animals/patients but does not report genetic variants affecting octreotide pharmacokinetics or pharmacodynamics. |
| popPK | Saveanu_2001 | irrelevant | 0 | 0 | The study is an in vitro pharmacological analysis of somatostatin receptor expression and GH suppression in tumor cells, reporting no population pharmacokinetic parameters for octreotide. |
| popPK | Saveanu_2002 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of a chimeric molecule (BIM-23A387) on GH/PRL secretion, with octreotide used only as a comparator agent and no PK parameters reported. |
| popPK | Saveanu_2006 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of GH suppression by various ligands in pituitary adenoma cell cultures, not a pharmacokinetic study of octreotide. |
| popPK | Schottelius_2005 | irrelevant | 1 | 0 | The study focuses on the biodistribution and receptor binding of radioiodinated sugar-conjugated analogues in mice and cells, not on standard quantitative PK parameters (CL, Vd, t1/2) of octreotide itself. |
| popPK | Siebinga_2024 | irrelevant | 0 | 0 | The study concerns the pharmacokinetics of the radiopharmaceutical Lu-177-HA-DOTATATE, not the drug octreotide. |
| popPK | Siehler_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of somatostatin receptor signaling and does not report any pharmacokinetic disposition parameters for octreotide. |
| popPK | Sturlaugsson_2026 | irrelevant | 0 | 0 | This is a physiological/endocrine study investigating hormonal responses to amino acid infusion where octreotide is used as a pharmacological tool/comparator, not a PK study reporting disposition parameters for octreotide. |
| PGx | Sun_2016 | not_relevant | 0 | 0 | The study examines the effects of pharmacological inhibitors and disease state (portal hypertension) on PK, but does not investigate specific gene variants or genotypes. |
| PGx | Sun_2021 | not_relevant | 0 | 0 | The study investigates the effect of disease state (portal hypertension) on the expression of transporters/metabolizers and the resulting change in drug absorption, but it does not report a pharmacogenomic effect (i.e., a change in PK/PD driven by a specific human gene variant or genotype). |
| popPK | Taylor_1996 | irrelevant | 0 | 0 | The study is an in vitro pharmacological assay measuring receptor activity in CHO-K1 cells, not a pharmacokinetic study of octreotide disposition. |
| popPK | Tian_2016 | irrelevant | 1 | 1 | The study is a methodological paper on bioequivalence testing in dogs for octreotide that reports only AUCs and confidence intervals, lacking the compartmental PK parameters (CL, V, Q, ka) required for the extraction. |
| PGx | Tiberg_2015 | not_relevant | 0 | 0 | The paper reports pharmacokinetics and pharmacodynamics of octreotide depot formulations in healthy volunteers but contains no data on genetic variants or genotypes. |
| popPK | Toffoletto_2016 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of recombinant human growth hormone (r-hGH), using octreotide only as a suppressive agent to lower endogenous GH levels, rather than as the subject drug. |
| popPK | Vasović_2026 | irrelevant | 0 | 0 | The paper is a general review on oral peptide delivery technologies and does not contain specific pharmacokinetic data or models for octreotide. |
| PGx | Zhu_2014 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions and cancer cell biology in vitro; it does not study pharmacogenomics (gene variants influencing drug PK/PD). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:41 UTC</sub>
