<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;streptozocin&quot;}]"></div>

# streptozocin

- **generic name:** streptozocin
- **ATC codes:** `L01AD04`
- **DrugBank:** [DB00428](https://go.drugbank.com/drugs/DB00428) · **PubChem:** [CID 29327](https://pubchem.ncbi.nlm.nih.gov/compound/29327)
- **molar mass:** 265.222 g/mol (C8H15N3O7) — DrugBank
- **groups:** approved, investigational

## About

Streptozocin is a nitrosourea antibiotic used to treat cancers, mainly pancreatic cancer, and also colorectal cancer and Hodgkin's lymphoma. It is an approved anticancer drug, though not authorised centrally in the European Union, and is used mainly in specialised cancer treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q257331](https://www.wikidata.org/wiki/Q257331) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:22 | 2:03 | 0/0/0 | 1/0/0 | 0/0/0 | 164,623/8,581 | einfracz / qwen3.8-27b | 11 | 5/14 | 10/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Fohlen_2021_viability](drugs/drug_streptozocin/pd_Fohlen_2021_viability.md) | cell viability ← streptozocin · direct sigmoid Emax (Hill) effect | — | Fohlen A et al., Anticancer Drugs for Intra-Arterial Tre…, Pharmaceuticals (Basel, Swi… (2021) | [10.3390/ph14070639](https://doi.org/10.3390/ph14070639) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=streptozocin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer | DrugBank actor |
| absorption | kidney | `ABCB1` inducer | DrugBank actor |
| absorption | liver | `ABCB1` inducer | DrugBank actor |
| absorption | placenta | `ABCB1` inducer | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer | DrugBank actor |
| absorption | testis | `ABCB1` inducer | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `CYP2E1` inducer | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation), OGA (inhibitor), SLC2A2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1142539 matched, 136 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gyves_1983.pdf` | Gyves JW et al., Hepatic arterial streptozocin: a clinic…, Cancer drug delivery (1983) | popPK | 10 | [10.1089/cdd.1983.1.63](https://doi.org/10.1089/cdd.1983.1.63) | [6242351](https://pubmed.ncbi.nlm.nih.gov/6242351) | The abstract explicitly reports quantitative PK parameters (half-life, clearance, volume of distribution) for streptozocin in human patients. |

<sub>queue written 2026-10-07T16:22:04.735046+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alyahya_2023 | not_relevant | 0 | 0 | The paper investigates the antidiabetic mechanisms of a plant extract in streptozocin-induced diabetic rats and does not report any pharmacogenomic effects on the PK or PD of streptozocin. |
| popPK | Andreeva-Gateva_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug KB-R7943, while streptozocin is only used as an inducer of the disease model (diabetes). |
| popPK | Auinger_2012 | irrelevant | 0 | 0 | no_text gate: only 381 chars of text extracted (&lt; 400) |
| popPK | Balogh_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of opioids (morphine, fentanyl, 14-O-MeM6SU) in a diabetic neuropathic pain model, using streptozocin solely to induce the disease state; no pharmacokinetic parameters for streptozocin are reported. |
| popPK | Barrington_1996 | irrelevant | 0 | 0 | Streptozocin is used as a tool to induce diabetes in rats, but the study measures adenosine receptor binding and adenylate cyclase activity, not the pharmacokinetics of streptozocin. |
| popPK | Batra_2026 | irrelevant | 0 | 0 | The paper is an in-vitro study on PD-L1 siRNA for immunotherapy and does not contain any pharmacokinetic data for streptozocin. |
| PD | Batra_2026 | not_relevant | 0 | 0 | The paper studies PD-L1 siRNA, not streptozocin, and does not report any pharmacodynamic or exposure-response relationship for the target drug. |
| popPK | Bertin_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetics for levosimendan and its metabolites, not streptozocin. |
| PD | Bertin_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for levosimendan and its metabolites, but it does not contain any pharmacodynamic (PD) data, exposure-response analysis, or numeric PD parameters. |
| popPK | Bhardwaj_1988 | irrelevant | 0 | 0 | The study investigates renal vascular physiology in diabetic rats and uses streptozocin as an inducer of diabetes, not as a subject drug for pharmacokinetic analysis. |
| PD | Bhardwaj_1988 | not_relevant | 4 | 2 | The paper reports qualitative changes in EC50 and maximal response for acetylcholine in diabetic rats but does not provide the specific numeric values for these parameters in the text. |
| popPK | Bhat_2025 | irrelevant | 0 | 0 | The paper is a scoping review of pharmacometrics/MIDD guidelines and does not report specific quantitative PK parameters for streptozocin. |
| PD | Bhat_2025 | not_relevant | 0 | 0 | The paper is a scoping review of Model-Informed Drug Development (MIDD) and does not contain any data, analysis, or parameters for streptozocin. |
| popPK | Blank_1989 | irrelevant | 0 | 0 | The paper is an in-vitro/in-vivo mechanistic study of renal transporters in diabetic rats where streptozocin is used only as a tool to induce diabetes, not as the subject of pharmacokinetic analysis. |
| PD | Blank_1989 | not_relevant | 0 | 0 | The paper analyzes renal transporter kinetics in diabetic rats but does not report a pharmacodynamic exposure-response or dose-response relationship for streptozocin itself. |
| popPK | Bloomgarden_2005 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| popPK | Bloomgarden_2008 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| popPK | Brensing_2002 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| popPK | Briki_2026 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of 5-fluorouracil, not streptozocin. |
| PD | Briki_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of 5-fluorouracil, not streptozocin, and does not report any pharmacodynamic (PD) or exposure-response parameters. |
| PGx | Cardinale_2011 | not_relevant | 0 | 0 | The paper reports on the differentiation and transplantation of multipotent stem/progenitor cells, and streptozocin is used only as a method to induce diabetes in animal models, with no analysis of its pharmacokinetics or pharmacodynamics related to genetic variants. |
| popPK | Carmines_1996 | irrelevant | 0 | 0 | Streptozocin is used only as a tool to induce diabetes, and the study reports renal physiological measurements, not pharmacokinetic parameters for streptozocin. |
| PD | Carmines_1996 | not_relevant | 0 | 0 | The paper investigates the effect of diabetes (induced by streptozocin) on renal vascular responsiveness to other agents (Bay K 8644, K+), but does not report a pharmacodynamic exposure-response or dose-response relationship for streptozocin itself. |
| popPK | Castellino_1994 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| popPK | Cerqueira_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for resveratrol in rats, not for streptozocin. |
| PD | Cerqueira_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics and tissue distribution of resveratrol, not streptozocin, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Cha_2025 | irrelevant | 0 | 0 | The paper describes pharmacokinetic/pharmacodynamic modeling of bacteriophages against Pseudomonas aeruginosa, not the drug streptozocin. |
| PD | Cha_2025 | not_relevant | 0 | 0 | The paper focuses on bacteriophage therapy for Pseudomonas aeruginosa and does not mention streptozocin or report any PD parameters for it. |
| popPK | Chawana_2025 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of the monoclonal antibody VRC07-523LS, not streptozocin. |
| PD | Chawana_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for VRC07-523LS but does not report any pharmacodynamic (PD) or exposure-response relationship, as no effect data or PD parameters are provided. |
| PD | Chen_2018 | not_relevant | 0 | 0 | The paper focuses on the formulation and kidney-targeted delivery of rhein nanoparticles, not on the pharmacodynamics of streptozocin, and does not report any exposure-response or dose-response parameters for streptozocin. |
| PD | Cherie_2020 | not_relevant | 0 | 0 | The paper studies a plant extract (Datura stramonium) and does not report any pharmacodynamic or exposure-response relationship for the drug streptozocin. |
| popPK | Courteix_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of morphine (and its metabolites), using streptozocin only as a tool to induce diabetes in rats. |
| popPK | Cristófani_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fenoprofen in streptozotocin-induced diabetic rats, not the pharmacokinetics of streptozocin itself. |
| popPK | DACHS_1964 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| popPK | Diack_2024 | irrelevant | 0 | 0 | The paper investigates the pharmacodynamics of faricimab, not the pharmacokinetics of streptozocin. |
| PD | Diack_2024 | not_relevant | 0 | 0 | The paper reports pharmacodynamics for faricimab, not streptozocin. |
| popPK | Duprat_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of quercetin in prostate cancer cells, not the pharmacokinetics of streptozocin. |
| popPK | Edlinger_2004 | irrelevant | 0 | 0 | no_text gate: only 328 chars of text extracted (&lt; 400) |
| PD | Emami_1999 | not_relevant | 4 | 2 | The paper describes a linear concentration-dependent effect of hydroxychloroquine (not streptozocin) on glucose and insulin in diabetic rats, but the provided text lacks specific numeric PD parameters (e.g., slope, intercept, or specific concentration-effect data points) required for extraction. |
| popPK | Fazio_2026 | irrelevant | 3 | 0 | The paper is a review discussing qualitative PK properties (rapid clearance, narrow volume) but lacks specific quantitative numerical values or a formal PK model. |
| popPK | Field_2002 | irrelevant | 0 | 0 | Streptozocin is used only as an agent to induce a pain model, not as the subject drug for pharmacokinetic analysis. |
| popPK | Flood_1990 | irrelevant | 0 | 0 | The paper is a behavioral study using streptozocin as a model induction agent for diabetes, not a pharmacokinetic study of streptozocin. |
| PD | Flood_1990 | not_relevant | 3 | 1 | The paper describes behavioral changes in a streptozocin-induced diabetic model and mentions a dose-response curve for a different drug (arecoline), but does not report a pharmacodynamic or exposure-response relationship for streptozocin itself with numeric parameters. |
| popPK | Flood_1993 | irrelevant | 0 | 0 | Streptozocin is used solely as an agent to induce diabetes in mice, and no pharmacokinetic parameters are reported. |
| PD | Flood_1993 | not_relevant | 0 | 0 | The paper investigates the dose-response of ramipril, not streptozocin; streptozocin is only used as a tool to induce diabetes and no PD parameters for it are reported. |
| popPK | Fujiwara_1988 | irrelevant | 0 | 0 | The study focuses on a different drug (CS-045) and uses streptozocin only as a tool to induce diabetes in mice, rather than analyzing its pharmacokinetics. |
| PD | Fujiwara_1988 | not_relevant | 2 | 1 | The paper describes qualitative dose-dependent effects and shifts in insulin dose-response curves for CS-045, but does not report numeric PD parameters (Emax, EC50) or an exposure-response relationship for streptozocin. |
| popPK | Gao_2019 | irrelevant | 0 | 0 | Streptozocin is used solely as a chemical agent to induce diabetes in mice, and the study investigates dietary interventions and oxidative stress markers rather than the pharmacokinetic disposition of streptozocin itself. |
| PD | Gao_2019 | not_relevant | 0 | 0 | The paper investigates the effect of GABA-fortified rice on STZ-induced diabetes; it does not report a pharmacodynamic or exposure-response relationship for streptozocin itself. |
| popPK | Garceau_1995 | irrelevant | 0 | 0 | no_text gate: only 358 chars of text extracted (&lt; 400) |
| popPK | Gawrońska-Szklarz_2003 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of lidocaine and its metabolite MEGX; streptozotocin is only used as a tool to induce diabetes, not as the subject drug for PK analysis. |
| popPK | Ginsparg_2026 | irrelevant | 0 | 0 | The study focuses on virtual screening and behavioral profiling of neuroactive ligands (specifically hypocretin receptor antagonists) in zebrafish, with no mention of streptozocin or its pharmacokinetics. |
| PD | Ginsparg_2026 | not_relevant | 0 | 0 | The paper focuses on virtual screening and functional profiling of hypocretin receptor antagonists in zebrafish; it does not mention or analyze streptozocin. |
| popPK | Groggel_1996 | irrelevant | 0 | 0 | The paper is a review of diabetic nephropathy and does not report any pharmacokinetic parameters for streptozocin. |
| popPK | Gu_2026 | irrelevant | 0 | 0 | The paper investigates LOXL4 and acetyldigoxin in lung cancer and does not mention streptozocin or report pharmacokinetic parameters for it. |
| PD | Gu_2026 | not_relevant | 0 | 0 | The paper investigates acetyldigoxin as a LOXL4 inhibitor in lung cancer and does not mention streptozocin or report any pharmacodynamic parameters for it. |
| popPK | Harvey_1988 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters (volume of distribution) for renal clearance markers (51Cr-EDTA and 125I-hippuran), not for the drug streptozocin, which is only used to induce the diabetic model. |
| popPK | Harvey_2002 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| popPK | He_2026 | irrelevant | 0 | 0 | The study focuses on the molecular mechanisms of lotus-derived alkaloids in breast cancer and does not involve streptozocin or any pharmacokinetic modeling. |
| PD | He_2026 | not_relevant | 0 | 0 | The paper investigates lotus-derived alkaloids (liensinine, isoliensinine, neferine) in breast cancer and does not mention streptozocin or report any pharmacodynamic parameters for it. |
| popPK | Hernández_2024 | irrelevant | 0 | 0 | Streptozotocin is used only as an induction agent to create a diabetic model; the study measures renal biomarkers and cytokine expression in rats, not streptozotocin pharmacokinetics. |
| popPK | Hostetter_1985 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of HIV-1 monoclonal antibodies (PGDM1400LS, PGT121.414.LS, VRC07-523LS), not streptozocin. |
| PD | Huang_2025 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics (PK) and dosing strategies for HIV-1 monoclonal antibodies, not streptozocin, and does not report a pharmacodynamic (PD) model or exposure-response relationship with numeric PD parameters. |
| popPK | Huynh_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetics for the HIV antibody VRC07-523LS, not for streptozocin. |
| PD | Huynh_2026 | not_relevant | 0 | 0 | The paper concerns the antibody VRC07-523LS, not streptozocin. |
| popPK | Ibrahim_1997 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| PGx | Jarrar_2018 | not_relevant | 0 | 0 | The paper investigates the effect of the diabetic state (induced by streptozocin) on CYP450 gene expression, not the effect of a genetic variant on the PK/PD of streptozocin. |
| PD | Jifar_2022 | not_relevant | 0 | 0 | The paper evaluates the pharmacological effects of a plant extract in a streptozotocin-induced model but does not report any pharmacodynamic (exposure-response or dose-response) relationship or numeric PD parameters for streptozotocin itself. |
| popPK | Karl_1990 | irrelevant | 0 | 0 | Streptozocin is used only as a tool to induce diabetes in rats; the study measures glucose metabolism parameters, not the pharmacokinetics of streptozocin. |
| PD | Karl_1990 | not_relevant | 0 | 0 | The paper investigates the effect of insulin on glucose metabolism in a streptozocin-induced diabetes model, not the pharmacodynamics of streptozocin itself. |
| PD | Kaur_2019 | not_relevant | 2 | 1 | The study reports qualitative pharmacodynamic interactions and percentage changes in glucose levels but does not provide numeric PD parameters (e.g., Emax, EC50) or a formal concentration-effect/dose-response model for streptozocin. |
| popPK | Kayukova_2026 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro antimicrobial/antidiabetic screening of amidoxime derivatives and does not mention streptozocin or report its pharmacokinetic parameters. |
| PD | Kayukova_2026 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro biological screening of novel amidoxime derivatives, not streptozocin, and does not provide any pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |
| popPK | Kimura_1996 | irrelevant | 0 | 0 | The study investigates the effect of the streptozocin-induced diabetic state on salivary secretion in mice, not the pharmacokinetic parameters of streptozocin itself. |
| PD | Kimura_1996 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any scientific content regarding streptozocin or pharmacodynamics. |
| popPK | Koele_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for the anti-tuberculosis drug BTZ-043, not streptozocin. |
| popPK | Koya_2005 | irrelevant | 0 | 0 | no_text gate: only 22 chars of text extracted (&lt; 400) |
| popPK | Kurup_2024 | irrelevant | 0 | 0 | The study models the pharmacokinetics of DZIF-10c (an antibody against SARS-CoV-2), not streptozocin. |
| PD | Kurup_2024 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PK) of DZIF-10c (an antibody) and does not contain any data, analysis, or mention of streptozocin. |
| popPK | Leal_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of propofol, using streptozocin only as an agent to induce diabetes in the rats. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper is a review on the epigenetics of diabetic nephropathy and does not contain any pharmacokinetic data or parameters for streptozocin. |
| popPK | Li_2022_2 | irrelevant | 0 | 0 | The paper is a review on macrophages in diabetic nephropathy where streptozocin (streptozotocin) is used only as a tool to induce diabetes models, with no pharmacokinetic data reported. |
| popPK | Martin_1977 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| popPK | Mashayekhi-Sardoo_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ranolazine in rats; streptozocin is used only to induce diabetes and is not the subject of the PK analysis. |
| popPK | Michel_1989 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of the contrast agent tempo carboxylic acid, using streptozocin only as a tool to induce diabetes in the rat model. |
| popPK | Michel_1992 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of the contrast agent gadolinium-DOTA (Gd-DOTA) in streptozocin-induced diabetic rats, using streptozocin only to induce diabetes rather than studying the drug itself. |
| popPK | Molitch_2003 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| popPK | Morcos_2007 | irrelevant | 0 | 0 | no_text gate: only 22 chars of text extracted (&lt; 400) |
| popPK | Morineau_2026 | irrelevant | 0 | 0 | The paper investigates gut microbiome dynamics associated with ibrutinib therapy, not the pharmacokinetics of streptozocin. |
| PD | Morineau_2026 | not_relevant | 0 | 0 | The paper investigates gut microbiome dynamics during ibrutinib therapy and does not report any pharmacodynamic or exposure-response relationship for streptozocin. |
| popPK | Na_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of HOSU-53, a DHODH inhibitor, and does not investigate streptozocin. |
| PD | Na_2025 | not_relevant | 0 | 0 | The paper describes a PK/PD model for HOSU-53 (JBZ-001), not streptozocin. |
| popPK | Nadai_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefazolin in rats, using streptozocin only as a tool to induce diabetes, not as the subject drug. |
| popPK | Nakashima_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefoperazone and cephradine, using streptozocin only to induce diabetes in the rat model. |
| popPK | Nakashima_1993 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of biperiden and scopolamine, using streptozocin only as an agent to induce diabetes. |
| popPK | Ngara_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of BTZ-043, bedaquiline, pretomanid, and linezolid, and does not involve streptozocin. |
| PD | Ngara_2025 | not_relevant | 0 | 0 | The paper focuses on the drug BTZ-043 and its interactions with other drugs; it does not report any pharmacodynamic or exposure-response data for streptozocin. |
| popPK | Nowak_1990 | irrelevant | 0 | 0 | The study investigates cholinergic neuromuscular transmission in diabetic rat intestine and uses streptozocin only as a tool to induce diabetes, not as a pharmacokinetic subject. |
| popPK | Owolabi_2024 | irrelevant | 0 | 0 | The study investigates the antimicrobial potential of plant extracts against Salmonella Typhi and does not involve streptozocin or pharmacokinetic analysis. |
| PD | Owolabi_2024 | not_relevant | 0 | 0 | The paper studies plant extracts against bacteria and does not involve streptozocin or any pharmacodynamic modeling. |
| PD | Oyama_2025 | not_relevant | 1 | 0 | The paper reports a qualitative hypoglycemic effect (40% reduction) in streptozocin-induced mice but provides no numeric PD parameters (Emax, EC50, etc.) or exposure-response analysis. |
| popPK | Pace_2026 | irrelevant | 0 | 0 | The paper focuses on fluorescence contrast agents for detecting circulating cancer cells and does not involve streptozocin or its pharmacokinetics. |
| PD | Pace_2026 | not_relevant | 0 | 0 | The paper discusses fluorescence contrast agents for imaging circulating tumor cells and does not mention streptozocin or report any pharmacodynamic or exposure-response data. |
| popPK | Prabhu_2018 | irrelevant | 0 | 0 | no_text gate: only 33 chars of text extracted (&lt; 400) |
| PD | Rao_2017 | not_relevant | 0 | 0 | The paper reports an IC50 for the plant extract (Momordica dioica) in an in vitro assay, but does not report any pharmacodynamic or exposure-response relationship for streptozotocin itself. |
| PD | Resztak_2014 | not_relevant | 2 | 1 | The paper compares PK and PD (blood glucose) outcomes between formulations but does not report a concentration-effect model or numeric PD parameters (e.g., Emax, EC50) for streptozocin or gliclazide. |
| popPK | SABOUR_1960 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| popPK | Sato_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of insulin in rats that were treated with streptozocin to induce diabetes, rather than studying the pharmacokinetics of streptozocin itself. |
| popPK | Sato_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of midazolam, not streptozocin. |
| PD | Sato_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of midazolam and CYP3A activity, not streptozocin, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Schimmel_1971 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| popPK | Schultz_2026 | irrelevant | 0 | 0 | The study focuses on Raman spectroscopy imaging of a different drug (BRP-685) in human macrophages and does not involve streptozocin or pharmacokinetic parameters. |
| PD | Schultz_2026 | not_relevant | 0 | 0 | The paper focuses on the intracellular localization of BRP-685 using Raman spectroscopy and does not report any pharmacodynamic or exposure-response data for streptozocin. |
| popPK | Shankar_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acetaminophen in streptozotocin-induced diabetic mice, not the pharmacokinetics of streptozocin itself. |
| PD | Shao_2019 | not_relevant | 0 | 0 | The paper focuses on carbon nanoparticles and does not report any pharmacodynamic or exposure-response data for streptozocin. |
| popPK | Soltani-Fard_2024 | irrelevant | 0 | 0 | The paper is a review on urinary biomarkers for diabetic nephropathy and does not contain pharmacokinetic data for streptozocin. |
| popPK | Sturaro_2026 | irrelevant | 0 | 0 | The paper focuses on the design of NOP receptor agonists and behavioral pharmacology in mice, containing no pharmacokinetic data or parameters for streptozocin. |
| PD | Sturaro_2026 | not_relevant | 0 | 0 | The paper focuses on the design of NOP receptor agonists and does not report any pharmacodynamic or exposure-response data for streptozocin. |
| popPK | Sun_2022 | irrelevant | 0 | 0 | The paper studies a RIPK1 inhibitor (SZM679) in a streptozocin-induced disease model, and does not report pharmacokinetic parameters for streptozocin. |
| PD | Sun_2022 | not_relevant | 1 | 0 | The paper reports in vitro binding constants (Kd) and an in vitro antinecroptotic EC50 for a different compound (SZM679), but provides no pharmacokinetic data, exposure-response analysis, or dose-response curve for streptozocin. |
| popPK | Tanigawa_2026 | irrelevant | 0 | 0 | The paper is a computational study on coronavirus genomes and has no relation to streptozocin pharmacokinetics. |
| PD | Tanigawa_2026 | not_relevant | 0 | 0 | The paper is a computational study of G-quadruplex structures in coronavirus genomes and does not report any pharmacodynamic or exposure-response data for streptozocin. |
| PD | Tian_2024 | not_relevant | 0 | 0 | The paper focuses on chemical composition and tissue distribution of a herbal formula in a streptozocin-induced diabetes model, but does not report any exposure-response or dose-response analysis for streptozocin or the herbal components. |
| popPK | Tofighi_2014 | irrelevant | 0 | 0 | The paper studies antidiabetic plant extracts in streptozocin-induced diabetic mice, not the pharmacokinetics of streptozocin itself. |
| popPK | Tsuboi_2024 | irrelevant | 0 | 0 | The paper is a letter to the editor regarding kidney biopsy findings in children with diabetes and does not contain any pharmacokinetic data for streptozocin. |
| popPK | Tung_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ampicillin and ceftriaxone, not streptozocin. |
| PD | Tung_2025 | not_relevant | 0 | 0 | The paper focuses on PK simulations and probability of target attainment (PTA) for ampicillin and ceftriaxone, not streptozocin, and does not report any pharmacodynamic (exposure-response) model or parameters. |
| popPK | Verma_2026 | irrelevant | 0 | 0 | The study presents a mathematical model of ion and water transport in the mouse eye for dry eye disease and does not report pharmacokinetic parameters for streptozocin. |
| PD | Verma_2026 | not_relevant | 0 | 0 | The paper presents a mechanistic model of ocular surface physiology for dry eye disease and does not mention streptozocin or report any pharmacodynamic parameters for it. |
| PD | Wang_2012 | not_relevant | 1 | 0 | The paper reports IC50 values for in vitro antioxidant/enzyme activities and qualitative in vivo protection against STZ-induced diabetes, but provides no numeric dose-response or exposure-response parameters for the drug streptozocin itself. |
| PD | Wang_2018 | not_relevant | 0 | 0 | The paper reports an IC50 for a novel compound (hr5F) against an enzyme, but does not report a pharmacodynamic or exposure-response relationship for streptozocin (STZ), which is used only as a tool to induce diabetes in the animal model. |
| popPK | Watkins_1986 | irrelevant | 0 | 0 | Streptozocin is used only as a tool to induce diabetes, while the pharmacokinetic parameters are for different drugs (eosin, sulfobromophthalein, etc.). |
| popPK | Watkins_1987 | irrelevant | 0 | 0 | Streptozocin is used as a tool to induce diabetes, and the pharmacokinetic parameters reported are for probe substrates (phenol red, ouabain, taurocholate), not streptozocin itself. |
| popPK | Watkins_1990 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| popPK | Weekers_2005 | irrelevant | 0 | 0 | no_text gate: only 389 chars of text extracted (&lt; 400) |
| popPK | Wehrfritz_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dipyrone (metamizole), not streptozocin. |
| PD | Wehrfritz_2026 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of dipyrone (metamizole), not streptozocin, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Woon_2023 | irrelevant | 0 | 0 | The paper is a metabolomics study for diagnosing diabetic nephropathy and contains no pharmacokinetic parameters or data for streptozocin. |
| popPK | Xia_2026 | irrelevant | 0 | 0 | The study focuses on the toxicology and transcriptomics of cytarabine in mice, not the pharmacokinetics of streptozocin. |
| PD | Xia_2026 | not_relevant | 0 | 0 | The paper studies cytarabine (Ara-C), not streptozocin, and focuses on multi-omics and histology rather than quantitative pharmacodynamic modeling. |
| PGx | Xu_2019 | not_relevant | 0 | 0 | The paper studies the PK/PD of berberine, not streptozocin, and does not report any pharmacogenomic effects (gene variants/genotypes). |
| PD | Xu_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of skin peptides from Takifugu bimaculatus, not streptozocin, and does not report any pharmacodynamic or exposure-response data for streptozocin. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | The paper is a mechanistic review of endothelial dysfunction in diabetic complications and contains no pharmacokinetic data for streptozocin. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The paper is a review of the adipose-renal axis in diabetic nephropathy and does not contain any pharmacokinetic data or parameters for streptozocin. |
| popPK | Yao_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of hydroxysafflor yellow A, not streptozocin, which is only used to induce diabetes in the mice. |
| popPK | ZINS_1949 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| PGx | Zhang_2011 | not_relevant | 0 | 0 | The paper does not report how a gene variant (genotype) alters the pharmacokinetics or pharmacodynamics of streptozocin. It studies the effect of streptozocin-induced diabetes (a physiological/environmental condition) on P-glycoprotein expression and function. Streptozocin is only used as a model induction agent, not as the drug for which PK/PD is being characterized by genotype. |
| PD | Zhang_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of mogrosides in streptozocin-induced diabetic rats and does not report any pharmacodynamic or exposure-response relationship for streptozocin itself. |
| popPK | Zysset_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of aminopyrine in rats where streptozocin is only used as an agent to induce diabetes, not as the subject drug. |
| popPK | unknown_1951 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
