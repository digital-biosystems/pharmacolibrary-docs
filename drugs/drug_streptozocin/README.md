<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;streptozocin&quot;}]"></div>

# streptozocin

- **generic name:** streptozocin
- **ATC codes:** `L01AD04`
- **DrugBank:** [DB00428](https://go.drugbank.com/drugs/DB00428)
- **groups:** approved, investigational

## About

**Description.** An antibiotic that is produced by Stretomyces achromogenes. It is used as an antineoplastic agent and to induce diabetes in experimental animals.

**Indication.** For the treatment of malignant neoplasms of pancreas (metastatic islet cell carcinoma).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 03:57 | 43:42 | 0/0/0 | 0/3/0 | 0/0/0 | 346,553/11,124 | ollama / qwen3.8:27b-mtp-q8_0 | 19 | 5/14 | 17/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.958). The first reading is what the record holds.">cross-check: disputed</span> | [Balogh_2019](drugs/drug_streptozocin/pd_Balogh_2019_GTP_S_binding.md) | Balogh M et al., Efficacy-Based Perspective to Overcome…, Frontiers in pharmacology (2019) | [10.3389/fphar.2019.00347](https://doi.org/10.3389/fphar.2019.00347) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.958). The first reading is what the record holds.">cross-check: disputed</span> | [Balogh_2019](drugs/drug_streptozocin/pd_Balogh_2019_PPT.md) | Balogh M et al., Efficacy-Based Perspective to Overcome…, Frontiers in pharmacology (2019) | [10.3389/fphar.2019.00347](https://doi.org/10.3389/fphar.2019.00347) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Fohlen_2021](drugs/drug_streptozocin/pd_Fohlen_2021_CV.md) | Fohlen A et al., Anticancer Drugs for Intra-Arterial Tre…, Pharmaceuticals (Basel, Swi… (2021) | [10.3390/ph14070639](https://doi.org/10.3390/ph14070639) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Holmes_1998](drugs/drug_streptozocin/pd_Holmes_1998_unknown.md) | Holmes BB et al., Heroin acts on delta opioid receptors i…, Proceedings of the Society… (1998) | [10.3181/00379727-218-44301](https://doi.org/10.3181/00379727-218-44301) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=streptozocin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer | DrugBank actor |
| absorption | kidney | `ABCB1` inducer | DrugBank actor |
| absorption | liver | `ABCB1` inducer | DrugBank actor |
| absorption | placenta | `ABCB1` inducer | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `CYP2E1` inducer | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer | DrugBank actor |
| excretion | kidney | <sub>“…N-nitrosourea group) is metabolized and/or excreted by the kidney.…”</sub> | prose |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation), OGA (inhibitor), SLC2A2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1142539 matched, 136 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gyves_1983.pdf` | Gyves JW et al., Hepatic arterial streptozocin: a clinic…, Cancer drug delivery (1983) | popPK | 10 | [10.1089/cdd.1983.1.63](https://doi.org/10.1089/cdd.1983.1.63) | [6242351](https://pubmed.ncbi.nlm.nih.gov/6242351) | The text explicitly reports quantitative pharmacokinetic parameters for streptozocin, including elimination half-life (35-40 min), total body clearance (400 ml/min), and volume of distribution (20-22 liters). |
| `Shao_2019.pdf` | Shao T et al., Carbon Nanoparticles Inhibit Α-Glucosid…, Molecules (Basel, Switzerla… (2019) | pd | 4 | [10.3390/molecules24183257](https://doi.org/10.3390/molecules24183257) | [31500170](https://www.ncbi.nlm.nih.gov/pubmed/31500170) | metadata signals extractable PD data (IC50) |
| `Xu_2024.pdf` | Xu M et al., Mechanism of Takifugu bimaculatus Skin…, Marine drugs (2024) | pd | 4 | [10.3390/md22080377](https://doi.org/10.3390/md22080377) | [39195493](https://www.ncbi.nlm.nih.gov/pubmed/39195493) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-15T03:50:18.635557+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alyahya_2023 | not_relevant | 0 | 0 | The paper studies the antidiabetic effects of a plant extract and mentions streptozocin only as a tool to induce diabetes in rats, without reporting any pharmacogenomic effects on the PK or PD of streptozocin itself. |
| popPK | Andreeva-Gateva_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of KB-R7943, using streptozotocin only as a disease model inducer, not as the subject drug. |
| popPK | Auinger_2012 | irrelevant | 0 | 0 | The paper is a clinical review of diabetic nephropathy management and contains no pharmacokinetic data or parameters for streptozocin. |
| popPK | Balogh_2019 | irrelevant | 0 | 0 | The study uses streptozocin only as a tool to induce a diabetic neuropathy model in rats and does not report any pharmacokinetic parameters for streptozocin itself. |
| popPK | Barrington_1996 | irrelevant | 0 | 0 | The study uses streptozocin only to induce diabetes in rats and focuses on adenosine receptor binding, not on the pharmacokinetics of streptozocin. |
| popPK | Batra_2026 | irrelevant | 0 | 0 | The paper focuses on the efficacy of PD-L1 siRNA for immunotherapy in NSCLC cells and does not involve streptozocin or pharmacokinetic parameters. |
| PD | Batra_2026 | not_relevant | 0 | 0 | The paper studies PD-L1 siRNA, not streptozocin, and does not report any pharmacodynamic or exposure-response relationship for the target drug. |
| popPK | Bertin_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for levosimendan and its metabolites, not streptozocin. |
| PD | Bertin_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for levosimendan and its metabolites, but it does not contain any pharmacodynamic (PD) data, exposure-response analysis, or numeric PD parameters. |
| popPK | Bhardwaj_1988 | irrelevant | 0 | 0 | The study investigates renal vascular physiology in streptozocin-induced diabetic rats, using streptozocin only as a tool to induce diabetes rather than as the subject of pharmacokinetic analysis. |
| PD | Bhardwaj_1988 | not_relevant | 4 | 2 | The paper reports qualitative changes in EC50 and maximal response for acetylcholine in diabetic rats but does not provide the specific numeric values for these parameters in the text. |
| popPK | Bhat_2025 | irrelevant | 0 | 0 | The paper is a scoping review on model-informed drug development (MIDD) and does not report any pharmacokinetic parameters for streptozocin. |
| PD | Bhat_2025 | not_relevant | 0 | 0 | The paper is a scoping review of Model-Informed Drug Development (MIDD) and does not contain any data, analysis, or parameters for streptozocin. |
| popPK | Blank_1989 | irrelevant | 0 | 0 | The study focuses on renal transporter kinetics in diabetic rats where streptozocin is used only as a tool to induce diabetes, not as the subject of pharmacokinetic analysis. |
| PD | Blank_1989 | not_relevant | 0 | 0 | The paper analyzes renal transporter kinetics in diabetic rats but does not report a pharmacodynamic exposure-response or dose-response relationship for streptozocin itself. |
| popPK | Bloomgarden_2005 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment and no pharmacokinetic data or parameters for streptozocin. |
| popPK | Bloomgarden_2008 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment and no pharmacokinetic data or parameters for streptozocin. |
| popPK | Brensing_2002 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment and no pharmacokinetic data or parameters for streptozocin. |
| popPK | Briki_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 5-fluorouracil, not streptozocin. |
| PD | Briki_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of 5-fluorouracil, not streptozocin, and does not report any pharmacodynamic (PD) or exposure-response parameters. |
| PGx | Cardinale_2011 | not_relevant | 0 | 0 | The paper describes stem cell differentiation and transplantation in streptozocin-induced diabetic mice, but does not report any pharmacogenomic effects on the PK or PD of streptozocin. |
| popPK | Carmines_1996 | irrelevant | 0 | 0 | The study uses streptozocin to induce diabetes in rats to investigate renal microvascular physiology, not to characterize the pharmacokinetics of streptozocin itself. |
| PD | Carmines_1996 | not_relevant | 0 | 0 | The paper investigates the effect of diabetes (induced by streptozocin) on renal vascular responsiveness to other agents (Bay K 8644, K+), but does not report a pharmacodynamic exposure-response or dose-response relationship for streptozocin itself. |
| popPK | Castellino_1994 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment ("Diabetic nephropathy") with no pharmacokinetic data, parameters, or context regarding streptozocin. |
| popPK | Cerqueira_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for resveratrol, not streptozocin. |
| PD | Cerqueira_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics and tissue distribution of resveratrol, not streptozocin, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Cha_2025 | irrelevant | 0 | 0 | The paper focuses on bacteriophage therapy for Pseudomonas aeruginosa and does not involve streptozocin. |
| PD | Cha_2025 | not_relevant | 0 | 0 | The paper focuses on bacteriophage therapy for Pseudomonas aeruginosa and does not mention streptozocin or report any PD parameters for it. |
| popPK | Chawana_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the monoclonal antibody VRC07-523LS, not streptozocin. |
| PD | Chawana_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for VRC07-523LS but does not report any pharmacodynamic (PD) or exposure-response relationship, as no effect data or PD parameters are provided. |
| PD | Chen_2018 | not_relevant | 0 | 0 | The paper focuses on the formulation and kidney-targeted delivery of rhein nanoparticles, not on the pharmacodynamics of streptozocin, and does not report any exposure-response or dose-response parameters for streptozocin. |
| PD | Cherie_2020 | not_relevant | 0 | 0 | The paper studies a plant extract (Datura stramonium) and does not report any pharmacodynamic or exposure-response relationship for the drug streptozocin. |
| popPK | Courteix_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of morphine in streptozocin-induced diabetic rats, not the pharmacokinetics of streptozocin itself. |
| popPK | Cristófani_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fenoprofen, not streptozocin, which is only used as an agent to induce diabetes in the animal model. |
| popPK | DACHS_1964 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment and no pharmacokinetic data or parameters for streptozocin. |
| popPK | Diack_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of faricimab, not the pharmacokinetics of streptozocin. |
| PD | Diack_2024 | not_relevant | 0 | 0 | The paper reports pharmacodynamics for faricimab, not streptozocin. |
| popPK | Duprat_2026 | irrelevant | 0 | 0 | The paper studies the mechanistic effects of quercetin on prostate cancer cells and does not involve streptozocin or pharmacokinetic parameters. |
| popPK | Edlinger_2004 | irrelevant | 0 | 0 | The paper is a clinical review of diabetic nephropathy management and contains no pharmacokinetic data or parameters for streptozocin. |
| PD | Emami_1999 | not_relevant | 4 | 2 | The paper describes a linear concentration-dependent effect of hydroxychloroquine (not streptozocin) on glucose and insulin in diabetic rats, but the provided text lacks specific numeric PD parameters (e.g., slope, intercept, or specific concentration-effect data points) required for extraction. |
| popPK | Fazio_2026 | irrelevant | 2 | 0 | The paper is a review that qualitatively describes pharmacokinetic properties (e.g., "rapid systemic clearance") but does not provide specific quantitative numeric values for streptozocin. |
| popPK | Field_2002 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study on neuropathic pain models where streptozocin is used only to induce the disease model, not as the subject drug for PK analysis. |
| popPK | Flood_1990 | irrelevant | 0 | 0 | The study focuses on behavioral and cognitive effects of streptozocin-induced diabetes, not pharmacokinetic parameters. |
| PD | Flood_1990 | not_relevant | 3 | 1 | The paper describes behavioral changes in a streptozocin-induced diabetic model and mentions a dose-response curve for a different drug (arecoline), but does not report a pharmacodynamic or exposure-response relationship for streptozocin itself with numeric parameters. |
| popPK | Flood_1993 | irrelevant | 0 | 0 | Streptozocin is used only as a tool to induce diabetes in mice, and the study focuses on the behavioral effects of ramipril, not the pharmacokinetics of streptozocin. |
| PD | Flood_1993 | not_relevant | 0 | 0 | The paper investigates the dose-response of ramipril, not streptozocin; streptozocin is only used as a tool to induce diabetes and no PD parameters for it are reported. |
| popPK | Fujiwara_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of the antidiabetic agent CS-045, with streptozocin used only as a tool to induce diabetes in a control group, and no PK parameters for streptozocin are reported. |
| PD | Fujiwara_1988 | not_relevant | 2 | 1 | The paper describes qualitative dose-dependent effects and shifts in insulin dose-response curves for CS-045, but does not report numeric PD parameters (Emax, EC50) or an exposure-response relationship for streptozocin. |
| popPK | Gao_2019 | irrelevant | 0 | 0 | Streptozocin is used only as a tool to induce diabetes in mice, and the study focuses on the effects of GABA-fortified rice on oxidative stress and gene expression, not on the pharmacokinetics of streptozocin. |
| PD | Gao_2019 | not_relevant | 0 | 0 | The paper investigates the effect of GABA-fortified rice on STZ-induced diabetes; it does not report a pharmacodynamic or exposure-response relationship for streptozocin itself. |
| popPK | Garceau_1995 | irrelevant | 0 | 0 | The paper is a review of diabetic nephropathy and contains no pharmacokinetic data or parameters for streptozocin. |
| popPK | Gawrońska-Szklarz_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lidocaine and MEGX, using streptozotocin only as an agent to induce diabetes, not as the subject drug. |
| popPK | Ginsparg_2026 | irrelevant | 0 | 0 | The paper describes a computational drug discovery pipeline for hypocretin receptor ligands and does not involve streptozocin or report any pharmacokinetic parameters. |
| PD | Ginsparg_2026 | not_relevant | 0 | 0 | The paper focuses on virtual screening and functional profiling of hypocretin receptor antagonists in zebrafish; it does not mention or analyze streptozocin. |
| popPK | Groggel_1996 | irrelevant | 0 | 0 | The paper is a review of diabetic nephropathy and does not contain any pharmacokinetic data or parameters for streptozocin. |
| popPK | Gu_2026 | irrelevant | 0 | 0 | The paper focuses on the mechanism of LOXL4-driven matrix stiffening and T cell function in lung cancer, with no mention of streptozocin or its pharmacokinetic parameters. |
| PD | Gu_2026 | not_relevant | 0 | 0 | The paper investigates acetyldigoxin as a LOXL4 inhibitor in lung cancer and does not mention streptozocin or report any pharmacodynamic parameters for it. |
| popPK | Harvey_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of clearance markers (51Cr-EDTA and 125I-OIH) in rats made diabetic by streptozotocin, not the pharmacokinetics of streptozocin itself. |
| popPK | Harvey_2002 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment and no pharmacokinetic data or parameters for streptozocin. |
| popPK | He_2026 | irrelevant | 0 | 0 | The paper investigates lotus-derived alkaloids in breast cancer and does not involve streptozocin or report any pharmacokinetic parameters. |
| PD | He_2026 | not_relevant | 0 | 0 | The paper investigates lotus-derived alkaloids (liensinine, isoliensinine, neferine) in breast cancer and does not mention streptozocin or report any pharmacodynamic parameters for it. |
| popPK | Hernández_2024 | irrelevant | 0 | 0 | Streptozocin is used only as a tool to induce diabetes in rats, and the study focuses on the pharmacological effects of a plant extract, not on the pharmacokinetics of streptozocin. |
| popPK | Hostetter_1985 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment and no pharmacokinetic data or parameters for streptozocin. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for HIV-1 monoclonal antibodies (PGDM1400LS, PGT121.414.LS, VRC07-523LS), not streptozocin. |
| PD | Huang_2025 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics (PK) and dosing strategies for HIV-1 monoclonal antibodies, not streptozocin, and does not report a pharmacodynamic (PD) model or exposure-response relationship with numeric PD parameters. |
| popPK | Huynh_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the HIV antibody VRC07-523LS, not streptozocin. |
| PD | Huynh_2026 | not_relevant | 0 | 0 | The paper concerns the antibody VRC07-523LS, not streptozocin. |
| popPK | Ibrahim_1997 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment and no pharmacokinetic data or parameters for streptozocin. |
| PGx | Jarrar_2018 | not_relevant | 0 | 0 | The study investigates the effect of diabetes (induced by streptozocin) on CYP450 gene expression, not the effect of a genetic variant on the pharmacokinetics or pharmacodynamics of streptozocin. |
| PD | Jifar_2022 | not_relevant | 0 | 0 | The paper evaluates the pharmacological effects of a plant extract in a streptozotocin-induced model but does not report any pharmacodynamic (exposure-response or dose-response) relationship or numeric PD parameters for streptozotocin itself. |
| popPK | Karl_1990 | irrelevant | 0 | 0 | The study uses streptozocin only to induce a disease model (NIDDM) and investigates glucose metabolism in muscle, not the pharmacokinetics of streptozocin itself. |
| PD | Karl_1990 | not_relevant | 0 | 0 | The paper investigates the effect of insulin on glucose metabolism in a streptozocin-induced diabetes model, not the pharmacodynamics of streptozocin itself. |
| PD | Kaur_2019 | not_relevant | 2 | 1 | The study reports qualitative pharmacodynamic interactions and percentage changes in glucose levels but does not provide numeric PD parameters (e.g., Emax, EC50) or a formal concentration-effect/dose-response model for streptozocin. |
| popPK | Kayukova_2026 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro biological activity of novel amidoxime compounds, not the pharmacokinetics of streptozocin. |
| PD | Kayukova_2026 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro biological screening of novel amidoxime derivatives, not streptozocin, and does not provide any pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |
| popPK | Kimura_1996 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no scientific content or pharmacokinetic data for streptozocin. |
| PD | Kimura_1996 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any scientific content regarding streptozocin or pharmacodynamics. |
| popPK | Koele_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug BTZ-043, not streptozocin. |
| popPK | Koya_2005 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment and no pharmacokinetic data or parameters for streptozocin. |
| popPK | Kurup_2024 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for the drug DZIF-10c (a SARS-CoV-2 neutralizing antibody), not streptozocin. |
| PD | Kurup_2024 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PK) of DZIF-10c (an antibody) and does not contain any data, analysis, or mention of streptozocin. |
| popPK | Leal_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of propofol, using streptozotocin only as an agent to induce diabetes in the animal model. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper is a review on epigenetics in diabetic nephropathy and does not contain any pharmacokinetic data for streptozocin. |
| popPK | Li_2022_2 | irrelevant | 0 | 0 | The paper is a review on macrophages in diabetic nephropathy where streptozotocin is used only as a model inducer, not as the subject drug for pharmacokinetic analysis. |
| popPK | Martin_1977 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment ("Diabetic nephropathy") with no pharmacokinetic data, parameters, or context regarding streptozocin. |
| popPK | Mashayekhi-Sardoo_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ranolazine, using streptozotocin only as an agent to induce diabetes, not as the subject drug. |
| popPK | Michel_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tempo carboxylic acid (TCA) in rats, using streptozocin only to induce diabetes as a disease model, not as the subject drug. |
| popPK | Michel_1992 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of gadolinium-DOTA (Gd-DOTA), not streptozocin, which is only used to induce diabetes in the animal model. |
| popPK | Molitch_2003 | irrelevant | 0 | 0 | The provided evidence contains only a title/heading and no pharmacokinetic data or parameters for streptozocin. |
| popPK | Morcos_2007 | irrelevant | 0 | 0 | The provided evidence contains only a topic tag and no pharmacokinetic data or study details for streptozocin. |
| popPK | Morineau_2026 | irrelevant | 0 | 0 | The paper studies gut microbiome dynamics in patients treated with ibrutinib and does not involve streptozocin or report any pharmacokinetic parameters. |
| PD | Morineau_2026 | not_relevant | 0 | 0 | The paper investigates gut microbiome dynamics during ibrutinib therapy and does not report any pharmacodynamic or exposure-response relationship for streptozocin. |
| popPK | Na_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of HOSU-53 (JBZ-001), not streptozocin. |
| PD | Na_2025 | not_relevant | 0 | 0 | The paper describes a PK/PD model for HOSU-53 (JBZ-001), not streptozocin. |
| popPK | Nadai_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefazolin in streptozotocin-induced diabetic rats, not the pharmacokinetics of streptozocin itself. |
| popPK | Nakashima_1992 | irrelevant | 0 | 0 | Streptozocin is used only as a tool to induce diabetes in rats, and the pharmacokinetic parameters reported are for the drugs cefoperazone and cephradine, not streptozocin. |
| popPK | Nakashima_1993 | irrelevant | 0 | 0 | Streptozocin is used as a tool to induce diabetes, not as the subject drug for pharmacokinetic analysis; the PK parameters reported are for biperiden and scopolamine. |
| popPK | Ngara_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of BTZ-043, bedaquiline, pretomanid, and linezolid, with no mention of streptozocin. |
| PD | Ngara_2025 | not_relevant | 0 | 0 | The paper focuses on the drug BTZ-043 and its interactions with other drugs; it does not report any pharmacodynamic or exposure-response data for streptozocin. |
| popPK | Nowak_1990 | irrelevant | 0 | 0 | The study investigates cholinergic neuromuscular transmission in diabetic rats where streptozocin is used only as a tool to induce diabetes, not as the subject drug for pharmacokinetic analysis. |
| popPK | Owolabi_2024 | irrelevant | 0 | 0 | The paper is an in-vitro and in-silico study on the antimicrobial potential of Hippocratea indica against Salmonella Typhi and does not involve streptozocin or pharmacokinetic parameters. |
| PD | Owolabi_2024 | not_relevant | 0 | 0 | The paper studies plant extracts against bacteria and does not involve streptozocin or any pharmacodynamic modeling. |
| PD | Oyama_2025 | not_relevant | 1 | 0 | The paper reports a qualitative hypoglycemic effect (40% reduction) in streptozocin-induced mice but provides no numeric PD parameters (Emax, EC50, etc.) or exposure-response analysis. |
| popPK | Pace_2026 | irrelevant | 0 | 0 | The paper focuses on fluorescence contrast agents for cancer detection and does not involve streptozocin or its pharmacokinetics. |
| PD | Pace_2026 | not_relevant | 0 | 0 | The paper discusses fluorescence contrast agents for imaging circulating tumor cells and does not mention streptozocin or report any pharmacodynamic or exposure-response data. |
| popPK | Prabhu_2018 | irrelevant | 0 | 0 | The paper title indicates a review of Vitamin D in diabetic nephropathy, with no evidence of streptozocin pharmacokinetic parameters. |
| PD | Rao_2017 | not_relevant | 0 | 0 | The paper reports an IC50 for the plant extract (Momordica dioica) in an in vitro assay, but does not report any pharmacodynamic or exposure-response relationship for streptozotocin itself. |
| PD | Resztak_2014 | not_relevant | 2 | 1 | The paper compares PK and PD (blood glucose) outcomes between formulations but does not report a concentration-effect model or numeric PD parameters (e.g., Emax, EC50) for streptozocin or gliclazide. |
| popPK | SABOUR_1960 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment regarding diabetic nephropathy and lacks any pharmacokinetic data or parameters for streptozocin. |
| popPK | Sato_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of insulin in rats treated with streptozotocin, not the pharmacokinetics of streptozotocin itself. |
| popPK | Sato_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of midazolam, not streptozocin. |
| PD | Sato_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of midazolam and CYP3A activity, not streptozocin, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Schimmel_1971 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment regarding diabetic nephropathy with no pharmacokinetic data or mention of streptozocin. |
| popPK | Schultz_2026 | irrelevant | 0 | 0 | The paper studies the drug BRP-685 using Raman spectroscopy and does not involve streptozocin or report any pharmacokinetic parameters. |
| PD | Schultz_2026 | not_relevant | 0 | 0 | The paper focuses on the intracellular localization of BRP-685 using Raman spectroscopy and does not report any pharmacodynamic or exposure-response data for streptozocin. |
| popPK | Shankar_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acetaminophen (APAP) in streptozotocin-induced diabetic mice, not the pharmacokinetics of streptozocin itself. |
| PD | Shao_2019 | not_relevant | 0 | 0 | The paper focuses on carbon nanoparticles and does not report any pharmacodynamic or exposure-response data for streptozocin. |
| popPK | Soltani-Fard_2024 | irrelevant | 0 | 0 | The paper is a review of urinary biomarkers in diabetic nephropathy and does not contain any pharmacokinetic data or parameters for streptozocin. |
| popPK | Sturaro_2026 | irrelevant | 0 | 0 | The paper focuses on the design of NOP receptor agonists (peptides) and does not involve streptozocin or report any pharmacokinetic parameters for it. |
| PD | Sturaro_2026 | not_relevant | 0 | 0 | The paper focuses on the design of NOP receptor agonists and does not report any pharmacodynamic or exposure-response data for streptozocin. |
| popPK | Sun_2022 | irrelevant | 0 | 0 | The paper studies a RIPK1 inhibitor (SZM679) in a streptozocin-induced disease model, not the pharmacokinetics of streptozocin itself. |
| PD | Sun_2022 | not_relevant | 1 | 0 | The paper reports in vitro binding constants (Kd) and an in vitro antinecroptotic EC50 for a different compound (SZM679), but provides no pharmacokinetic data, exposure-response analysis, or dose-response curve for streptozocin. |
| popPK | Tanigawa_2026 | irrelevant | 0 | 0 | The paper is a computational study on coronavirus G-quadruplex structures and does not involve streptozocin or pharmacokinetics. |
| PD | Tanigawa_2026 | not_relevant | 0 | 0 | The paper is a computational study of G-quadruplex structures in coronavirus genomes and does not report any pharmacodynamic or exposure-response data for streptozocin. |
| PD | Tian_2024 | not_relevant | 0 | 0 | The paper focuses on chemical composition and tissue distribution of a herbal formula in a streptozocin-induced diabetes model, but does not report any exposure-response or dose-response analysis for streptozocin or the herbal components. |
| popPK | Tofighi_2014 | irrelevant | 0 | 0 | Streptozocin is used only as a tool to induce diabetes in mice, and the study focuses on the antidiabetic effects of a plant extract, not on the pharmacokinetics of streptozocin. |
| popPK | Tsuboi_2024 | irrelevant | 0 | 0 | The paper is a letter to the editor regarding kidney biopsy findings in children with diabetes and contains no pharmacokinetic data or mention of streptozocin. |
| popPK | Tung_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ampicillin and ceftriaxone, not streptozocin. |
| PD | Tung_2025 | not_relevant | 0 | 0 | The paper focuses on PK simulations and probability of target attainment (PTA) for ampicillin and ceftriaxone, not streptozocin, and does not report any pharmacodynamic (exposure-response) model or parameters. |
| popPK | Verma_2026 | irrelevant | 0 | 0 | The paper is a mathematical modeling study of ocular surface ion and water transport for dry eye disease and does not involve streptozocin or its pharmacokinetics. |
| PD | Verma_2026 | not_relevant | 0 | 0 | The paper presents a mechanistic model of ocular surface physiology for dry eye disease and does not mention streptozocin or report any pharmacodynamic parameters for it. |
| PD | Wang_2012 | not_relevant | 1 | 0 | The paper reports IC50 values for in vitro antioxidant/enzyme activities and qualitative in vivo protection against STZ-induced diabetes, but provides no numeric dose-response or exposure-response parameters for the drug streptozocin itself. |
| PD | Wang_2018 | not_relevant | 0 | 0 | The paper reports an IC50 for a novel compound (hr5F) against an enzyme, but does not report a pharmacodynamic or exposure-response relationship for streptozocin (STZ), which is used only as a tool to induce diabetes in the animal model. |
| popPK | Watkins_1986 | irrelevant | 0 | 0 | Streptozocin is used only as a tool to induce diabetes, and the pharmacokinetic parameters reported are for other organic anions (e.g., rose bengal, indocyanine green), not streptozocin. |
| popPK | Watkins_1987 | irrelevant | 0 | 0 | Streptozocin is used only as a tool to induce diabetes, and the pharmacokinetic parameters reported are for probe substrates (phenol red, procainamide, ouabain, taurocholate), not for streptozocin itself. |
| popPK | Watkins_1990 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment and no pharmacokinetic data or parameters for streptozocin. |
| popPK | Weekers_2005 | irrelevant | 0 | 0 | The paper is a review of diabetic nephropathy pathophysiology and treatment, containing no pharmacokinetic data or parameters for streptozocin. |
| popPK | Wehrfritz_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dipyrone (metamizole), not streptozocin. |
| PD | Wehrfritz_2026 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of dipyrone (metamizole), not streptozocin, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Woon_2023 | irrelevant | 0 | 0 | The study is a metabolomics diagnostic study for diabetic nephropathy and does not report pharmacokinetic parameters for streptozocin. |
| popPK | Xia_2026 | irrelevant | 0 | 0 | The study focuses on the toxicological and multi-omic effects of cytarabine on the testis, not the pharmacokinetics of streptozocin. |
| PD | Xia_2026 | not_relevant | 0 | 0 | The paper studies cytarabine (Ara-C), not streptozocin, and focuses on multi-omics and histology rather than quantitative pharmacodynamic modeling. |
| PGx | Xu_2019 | not_relevant | 0 | 0 | The paper investigates the effect of a nanoemulsion formulation on berberine pharmacokinetics and efficacy, not the effect of a gene variant on streptozocin. |
| PD | Xu_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of skin peptides from Takifugu bimaculatus, not streptozocin, and does not report any pharmacodynamic or exposure-response data for streptozocin. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | The paper is a mechanistic review of diabetic nephropathy and retinopathy that does not mention streptozocin or report any pharmacokinetic parameters. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The paper is a review on the adipose-renal axis in diabetic nephropathy and does not contain any pharmacokinetic data or parameters for streptozocin. |
| popPK | Yao_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of hydroxysafflor yellow A (HSYA), not streptozocin, which is only used as an agent to induce the disease model. |
| popPK | ZINS_1949 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment and no pharmacokinetic data or parameters for streptozocin. |
| PGx | Zhang_2011 | not_relevant | 0 | 0 | The paper investigates the effect of a disease state (diabetes induced by streptozocin) on P-glycoprotein expression and function, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of streptozocin. |
| PD | Zhang_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of mogrosides in streptozocin-induced diabetic rats and does not report any pharmacodynamic or exposure-response relationship for streptozocin itself. |
| popPK | Zysset_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of aminopyrine in rats, using streptozotocin only as an agent to induce diabetes, not as the subject drug for PK analysis. |
| popPK | unknown_1951 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment and no pharmacokinetic data or study details for streptozocin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
