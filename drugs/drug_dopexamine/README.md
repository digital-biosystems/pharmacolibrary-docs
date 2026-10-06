<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;dopexamine&quot;}]"></div>

# dopexamine

- **generic name:** dopexamine
- **ATC codes:** `C01CA14`
- **DrugBank:** [DB12313](https://go.drugbank.com/drugs/DB12313) · **PubChem:** [CID 55483](https://pubchem.ncbi.nlm.nih.gov/compound/55483)
- **molar mass:** 356.5017 g/mol (C22H32N2O2) — DrugBank
- **groups:** approved, withdrawn

## About

Dopexamine is a cardiac stimulant that acts as a dopamine agonist and beta-adrenergic agonist with vasodilator effects, used to support heart function. It has been withdrawn and is no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5297311](https://www.wikidata.org/wiki/Q5297311) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 04:57 | 3:38 | 0/0/0 | 0/0/0 | 0/0/0 | 123,788/4,501 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 2/6 | 5/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dopexamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: DRD2 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 60 matched, 86 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gray_1994.pdf` | Gray PA et al., Blood concentrations of dopexamine in p…, British journal of clinical… (1994) | popPK | 9 | [10.1111/j.1365-2125.1994.tb04247.x](https://doi.org/10.1111/j.1365-2125.1994.tb04247.x) | [8148227](https://pubmed.ncbi.nlm.nih.gov/8148227) | The study reports quantitative clearance values for dopexamine in human patients, derived from steady-state concentration data. |
| `Brown_1985.pdf` | Brown RA et al., Dopexamine: a novel agonist at peripher…, British journal of pharmaco… (1985) | pd | 4 | [10.1111/j.1476-5381.1985.tb10554.x](https://doi.org/10.1111/j.1476-5381.1985.tb10554.x) | [2862944](https://www.ncbi.nlm.nih.gov/pubmed/2862944) | metadata signals extractable PD data (IC50) |
| `Mitchell_1987.pdf` | Mitchell PD et al., Inhibition of Uptake1 by dopexamine hyd…, British journal of pharmaco… (1987) | pd | 4 | [10.1111/j.1476-5381.1987.tb11320.x](https://doi.org/10.1111/j.1476-5381.1987.tb11320.x) | [2890392](https://www.ncbi.nlm.nih.gov/pubmed/2890392) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T04:57:04.027466+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amenta_1991 | irrelevant | 0 | 0 | The study is a mechanistic/pharmacological investigation of receptor binding and vascular function in rat mesenteric vasculature, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Aninat_2008 | not_relevant | 0 | 0 | The study investigates the effect of catecholamines on hepatocyte inflammation and CYP450 expression in vitro, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of dopexamine. |
| popPK | Atallah_1992 | irrelevant | 0 | 0 | The study focuses on renal hemodynamic effects (blood flow and clearance rate) rather than pharmacokinetic disposition parameters (CL, V, t1/2) of dopexamine. |
| popPK | Bartsch_2004 | irrelevant | 0 | 0 | The study reports hemodynamic effects (blood flow velocity, cardiac index) rather than pharmacokinetic disposition parameters (clearance, volume, half-life). |
| popPK | Baumann_1990 | irrelevant | 0 | 0 | The study reports hemodynamic and renal effects (cardiac output, urine output) but does not provide pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Berendes_1997 | irrelevant | 0 | 0 | The study measures hemodynamic and inflammatory markers (creatinine clearance, cytokines) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for dopexamine. |
| popPK | Brown_1985 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PD | Brown_1985 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Chang_1996 | irrelevant | 0 | 0 | The study investigates cardiovascular pharmacodynamics (dose-response curves) in dogs, not pharmacokinetic parameters like clearance or volume. |
| popPK | Davies_2002 | irrelevant | 0 | 0 | The paper is a mechanistic study on blood-brain barrier breakdown where dopexamine is used as a pharmacological tool to modulate edema, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Dawson_1985 | irrelevant | 0 | 0 | The study reports acute haemodynamic and metabolic effects (cardiac index, SVR, etc.) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Dhainaut_1988 | irrelevant | 0 | 0 | The paper is a review of inotropic agents and their mechanisms of action, containing no original pharmacokinetic data or quantitative disposition parameters for dopexamine. |
| popPK | Einstein_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of cardiovascular responses (blood pressure, heart rate, contractility) to dopexamine in dogs and does not report any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Fitton_1990 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties but the provided evidence contains no quantitative PK parameter values (e.g., clearance, volume, half-life). |
| PD | Fitton_1990 | not_relevant | 2 | 0 | The text is a qualitative review summarizing general pharmacodynamic properties and clinical effects without providing specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling data. |
| popPK | Geisser_2004 | irrelevant | 0 | 0 | The study focuses on metabolic effects (carbohydrate, fat, protein) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for dopexamine. |
| popPK | Germann_1997 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of intestinal mucosal oxygenation in pigs and does not report pharmacokinetic parameters for dopexamine. |
| popPK | Gray_1991 | irrelevant | 0 | 0 | The study is a clinical trial comparing renal protective effects of dopexamine and dopamine, reporting no pharmacokinetic parameters. |
| popPK | Gömez-Garre_1996 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of renal function (clearance of markers like creatinine and PAH) in a disease model, not a pharmacokinetic study of dopexamine disposition. |
| popPK | Günnicker_1993 | irrelevant | 0 | 0 | The study reports hemodynamic efficacy (cardiac output, blood pressure) rather than pharmacokinetic disposition parameters (clearance, volume, half-life). |
| popPK | Hakim_1988 | irrelevant | 0 | 0 | The study reports only haemodynamic effects (cardiac index, SVR, heart rate) and contains no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Hollenberg_2013 | irrelevant | 0 | 0 | The paper is a commentary on an animal study focusing on immunomodulatory and hemodynamic effects, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Holzer_2001 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of gastric mucosal blood flow in rats and does not report any pharmacokinetic parameters (CL, V, t1/2) for dopexamine. |
| popPK | Jackson_1988 | irrelevant | 0 | 0 | The study reports hemodynamic effects (cardiac output, blood pressure) rather than pharmacokinetic disposition parameters (clearance, volume, half-life). |
| popPK | Lehtipalo_2002 | irrelevant | 0 | 0 | The study investigates regional vascular tone and oxygenation in pigs, not pharmacokinetic disposition parameters. |
| popPK | Leier_1988 | irrelevant | 0 | 0 | The study reports hemodynamic and renal functional responses to dopexamine infusions but does not provide any pharmacokinetic parameters (clearance, volume, half-life) for the drug. |
| popPK | Levy_1999 | irrelevant | 0 | 0 | The study is a hemodynamic and metabolic comparison of dobutamine and dopexamine in septic shock, reporting no pharmacokinetic parameters (CL, V, etc.). |
| popPK | MacConnachie_1996 | irrelevant | 0 | 0 | no_text gate: only 332 chars of text extracted (&lt; 400) |
| popPK | MacGregor_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of cAMP production in lymphocytes, not a pharmacokinetic study of dopexamine. |
| popPK | Marik_1999 | irrelevant | 0 | 0 | no_text gate: only 49 chars of text extracted (&lt; 400) |
| popPK | Martin_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of receptor down-regulation in rats and does not report pharmacokinetic parameters (CL, V, etc.) for dopexamine. |
| popPK | Martin_1995 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of renal vasodilation in isolated rat kidneys, reporting pA2 values and Schild slopes rather than pharmacokinetic disposition parameters. |
| popPK | Martin_1995_2 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of receptor-mediated vasodilation in an isolated perfused kidney, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Marx_2000 | irrelevant | 0 | 0 | The study evaluates the pharmacodynamic effects of dopexamine on hepatic function and hemodynamics, but does not report any pharmacokinetic parameters (clearance, volume, half-life) for the drug. |
| popPK | Mayeur_2010 | irrelevant | 0 | 0 | The study evaluates the hemodynamic and clinical effects of dopexamine in septic shock but does not report any pharmacokinetic parameters (clearance, volume, half-life, etc.). |
| popPK | Maynard_1995 | irrelevant | 0 | 0 | The study measures splanchnic blood flow using surrogate markers (lidocaine metabolism, ICG clearance) rather than reporting pharmacokinetic parameters for dopexamine itself. |
| popPK | Mazzuco_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasorelaxation in guinea pig pulmonary artery, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Mitchell_1987 | irrelevant | 0 | 0 | no_text gate: only 58 chars of text extracted (&lt; 400) |
| popPK | Moss_2004 | irrelevant | 0 | 0 | The study is a mechanistic investigation of cerebral edema and microvessel ultrastructure in pigs, reporting morphometric data rather than pharmacokinetic parameters for dopexamine. |
| popPK | Muir_1992 | irrelevant | 0 | 0 | The study reports only cardiovascular/hemodynamic effects (heart rate, cardiac output, etc.) and does not provide any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Myers_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assessment of vascular reactivity (EC50) and does not report pharmacokinetic disposition parameters such as clearance or volume of distribution. |
| popPK | Müller_1999 | irrelevant | 0 | 0 | The study measures splanchnic oxygenation parameters (tissue PO2, Pco2 gap) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Müller_2000 | irrelevant | 0 | 0 | The study reports hemodynamic and oxygenation effects of dopexamine, not pharmacokinetic parameters. |
| popPK | Napoleone_1992 | irrelevant | 0 | 0 | The study investigates receptor binding and cAMP generation in human heart tissue (in vitro/mechanistic) and does not report pharmacokinetic disposition parameters. |
| popPK | Napoleone_1993 | irrelevant | 0 | 0 | The study is a mechanistic investigation of receptor binding and cAMP generation in human kidney tissue, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Neustein_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic/arrhythmogenicity comparison in dogs and does not report pharmacokinetic parameters (CL, V, t1/2) for dopexamine. |
| popPK | Oberbeck_2004 | irrelevant | 0 | 0 | The study investigates the immunomodulatory effects of dopexamine in a sepsis model and does not report any pharmacokinetic parameters. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not contain any pharmacokinetic data for dopexamine. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not mention dopexamine or report any pharmacodynamic or exposure-response data. |
| popPK | Olsen_1993 | irrelevant | 0 | 0 | The study focuses on renal hemodynamic effects (ERPF, GFR) rather than systemic pharmacokinetic disposition parameters (CL, V, t1/2) for dopexamine. |
| popPK | Pearse_2014 | irrelevant | 0 | 0 | This is a clinical trial evaluating a hemodynamic therapy algorithm where dopexamine is used as a therapeutic agent, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Port_1990 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo pharmacodynamic assessment of inotropic effects and neurotransmitter depletion, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ralph_2002 | irrelevant | 0 | 0 | The study is a clinical trial assessing gastrointestinal and organ function outcomes, not a pharmacokinetic study reporting quantitative disposition parameters for dopexamine. |
| popPK | Sadique_2015 | irrelevant | 0 | 0 | The paper is a cost-effectiveness analysis of a clinical trial where dopexamine was used as a therapeutic agent, and it does not report any pharmacokinetic parameters (e.g., clearance, volume of distribution) for the drug. |
| popPK | Schilling_2001 | irrelevant | 0 | 0 | The study focuses on endocrine effects (prolactin, TSH, etc.) and hemodynamics, not pharmacokinetic disposition parameters. |
| popPK | Schmoelz_2006 | irrelevant | 0 | 0 | The study is a clinical trial assessing renal and hemodynamic effects, not a pharmacokinetic study, and reports no PK parameters for dopexamine. |
| popPK | Sedrish_1999 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic assessment of vasomotor response (relaxation/EC50) and does not report pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Smithies_1994 | irrelevant | 0 | 0 | The study measures hemodynamic and perfusion effects (cardiac index, gastric pH, indocyanine green clearance) rather than the pharmacokinetic disposition parameters (CL, V, ka) of dopexamine itself. |
| popPK | Stamler_1998 | irrelevant | 0 | 0 | The study is a hemodynamic and functional assessment of dopexamine's effects on gut and lung physiology in sheep, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Stangl_1990 | irrelevant | 0 | 0 | The study measures hemodynamic and hormonal (ANP/cGMP) responses to dopexamine, not pharmacokinetic disposition parameters. |
| popPK | Stephan_1990 | irrelevant | 0 | 0 | The study reports hemodynamic effects (cardiac index, vascular resistance) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Taylor_1993 | irrelevant | 0 | 0 | The study reports hemodynamic and oxygen consumption effects of dopexamine in lambs, but does not provide any pharmacokinetic parameters (clearance, volume, half-life, etc.). |
| popPK | Tretiakov_2025 | irrelevant | 0 | 0 | The paper is a review on machine learning for noncovalent interactions and contains no pharmacokinetic data for dopexamine. |
| PD | Tretiakov_2025 | not_relevant | 0 | 0 | The paper is a review on machine learning for noncovalent interactions and contains no pharmacodynamic or exposure-response data for dopexamine. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper is a comparative genomic analysis of a fungal strain and does not involve dopexamine or pharmacokinetics. |
| PD | Wang_2024 | not_relevant | 0 | 0 | The paper is a comparative genomic analysis of a fungal strain and does not contain any pharmacodynamic or exposure-response data for dopexamine. |
| popPK | Westphal_2004 | irrelevant | 0 | 0 | The study is a hemodynamic/pharmacodynamic assessment of dopexamine in sheep and does not report any pharmacokinetic parameters (clearance, volume, half-life, etc.). |
| popPK | Yelken_2004 | irrelevant | 0 | 0 | The study reports hemodynamic and renal functional parameters (blood pressure, urine volume, GFR) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for dopexamine. |
| popPK | Zhou_2015 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis of clinical outcomes (mortality, hemodynamics) for vasopressors in septic shock, not a pharmacokinetic study, and dopexamine is only a comparator agent. |
| popPK | unknown_1996 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | unknown_1996 | not_relevant | 0 | 0 | The provided text is only the title and metadata for a conference abstract book, containing no scientific content, data, or PD parameters. |
| popPK | van_1993 | irrelevant | 0 | 0 | The study reports hemodynamic and pharmacodynamic effects (conductance, blood pressure, urine volume) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
