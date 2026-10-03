<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;cilazapril&quot;}]"></div>

# cilazapril

- **generic name:** cilazapril
- **ATC codes:** `C09AA08`, `C09BA08`
- **DrugBank:** [DB01340](https://go.drugbank.com/drugs/DB01340) · **PubChem:** [CID 56330](https://pubchem.ncbi.nlm.nih.gov/compound/56330)
- **molar mass:** 417.4986 g/mol (C22H31N3O5) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Cilazapril is an ACE inhibtor class drug used in the treatment of hypertension and heart failure. It belongs to the angiotensin-converting enzyme inhibitors (ACE inhibitors) class of drugs.  It is a prodrug that is hydrolyzed after absorption to its main metabolite cilazaprilat. It is branded as Inhibace in Canada and other countries, Vascace and Dynorm in a number of European countries, among many other names. None of these varieties are available in the United States.

**Indication.** Cilazapril is an ACE inhibtor class drug used in the treatment of hypertension and heart failure.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-02 17:22 | 11:02 | 0/1/1 | 4/0/0 | 0/0/0 | 447,142/7,259 | ollama / qwen3.8:27b-mtp-q8_0 | 28 | 21/6 | 15/13 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.3). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27, Q76, Q22 — no SI value to buil…</sub><br><sub>route_to: `human_review`</sub> | [Meredith_1989_reference](drugs/drug_cilazapril/Cilazapril_Meredith1989_reference.md) | — | 1-compartment (no model) | 5 | Meredith PA et al., The pharmacokinetics and angiotensin co…, British journal of clinical… (1989) | [10.1111/j.1365-2125.1989.tb03490.x](https://doi.org/10.1111/j.1365-2125.1989.tb03490.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Gross_1993_reference](drugs/drug_cilazapril/Cilazapril_Gross1993_reference.md) | — | general linear (no model) | 4 | Gross V et al., Angiotensin-converting enzyme (ACE)-inh…, Journal of hepatology (1993) | [10.1016/s0168-8278(05)80519-7](https://doi.org/10.1016/s0168-8278(05)80519-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Francis_1987_plasma_converting_enzyme_inhibition](drugs/drug_cilazapril/pd_Francis_1987_plasma_converting_enzyme_inhibition.md) | plasma converting enzyme inhibition ← cilazaprilat · target-mediated drug disposition | — | Francis RJ et al., Pharmacokinetics of the converting enzy…, Journal of cardiovascular p… (1987) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by openai:gpt-6-luna (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span> | [Krum_1992_ACE](drugs/drug_cilazapril/pd_Krum_1992_ACE.md) | angiotensin-converting enzyme (ACE) activity ← cilazaprilat · direct Emax (saturable) effect | — | Krum H et al., Steady-state pharmacokinetics and pharm…, Journal of cardiovascular p… (1992) | [10.1097/00005344-199209000-00017](https://doi.org/10.1097/00005344-199209000-00017) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Louis_1992_ACE](drugs/drug_cilazapril/pd_Louis_1992_ACE.md) | plasma angiotensin-converting enzyme (ACE) activity ← cilazaprilat · direct sigmoid Emax (Hill) effect | — | Louis WJ et al., Comparison of the pharmacokinetics and…, Clinical and experimental p… (1992) | [10.1111/j.1440-1681.1992.tb02811.x](https://doi.org/10.1111/j.1440-1681.1992.tb02811.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by openai:gpt-6-luna (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Meredith_1989_ACE_inhibition](drugs/drug_cilazapril/pd_Meredith_1989_ACE_inhibition.md) | plasma ACE inhibition ← cilazaprilat · target-mediated drug disposition | — | Meredith PA et al., The pharmacokinetics and angiotensin co…, British journal of clinical… (1989) | [10.1111/j.1365-2125.1989.tb03490.x](https://doi.org/10.1111/j.1365-2125.1989.tb03490.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cilazapril) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `SLC15A1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| excretion | kidney | `SLC15A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 55 matched, 55 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Francis_1987.pdf` | Francis RJ et al., Pharmacokinetics of the converting enzy…, Journal of cardiovascular p… (1987) | popPK | 9 | not captured | [2434791](https://pubmed.ncbi.nlm.nih.gov/2434791) | The study reports quantitative PK parameters (half-lives) for cilazaprilat (active metabolite) in humans, but specific clearance and volume values are not explicitly listed in the provided abstract text. |

<sub>queue written 2026-10-02T17:19:38.658230+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ajayi_1986 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (blood pressure, ACE inhibition, PRA) but does not report quantitative pharmacokinetic parameters (CL, V, ka, t1/2) for cilazapril or cilazaprilat. |
| popPK | Altunlu_2025 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of neuroprotective effects and molecular docking, containing no pharmacokinetic disposition parameters. |
| PD | Anderson_1996 | not_relevant | 0 | 0 | The provided text describes only the pharmacokinetic (PK) data analysis methods (compartmental modeling of plasma concentrations) and does not contain any information regarding pharmacodynamic (PD) endpoints, exposure-response relationships, or numeric PD parameters. |
| popPK | Attwood_1989 | irrelevant | 0 | 0 | The paper describes the chemical design and in-vitro enzyme inhibition (IC50) of cilazapril, not its pharmacokinetic disposition parameters. |
| PD | Attwood_1989 | not_relevant | 2 | 1 | The paper focuses on the chemical design and structure-activity relationship (SAR) of cilazapril, mentioning IC50 values for enzyme inhibition but lacking a pharmacokinetic/pharmacodynamic (PK/PD) model or exposure-response analysis in vivo. |
| popPK | Begg_1989 | irrelevant | 0 | 0 | The text is a review discussing general pharmacokinetic principles of ACE inhibitors in renal impairment without providing specific quantitative parameter values for cilazapril. |
| PD | Begg_1989 | not_relevant | 1 | 0 | The text is a qualitative review of PK principles in renal impairment and does not report any numeric PD parameters or concentration-effect data for cilazapril. |
| popPK | Belz_1987 | irrelevant | 1 | 0 | The study is a pharmacodynamic assessment of angiotensin I antagonism and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for cilazapril. |
| popPK | Belz_1989 | irrelevant | 2 | 0 | The study is a drug-drug interaction trial that reports qualitative changes in PK parameters (Cmax, AUC) but does not provide specific numeric values for clearance, volume, or half-life in the text. |
| popPK | Belz_1989_2 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of venoconstriction and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for cilazapril. |
| popPK | Belz_1994 | irrelevant | 2 | 0 | The paper is a review of pharmacodynamic studies (ACE inhibition, blood pressure) and does not report quantitative compartmental pharmacokinetic parameters (CL, V, Q) for cilazapril. |
| popPK | Buchwalder-Csajka_1999 | irrelevant | 0 | 0 | The study evaluates angiotensin challenge methodology for pharmacodynamic profiling and does not report quantitative pharmacokinetic parameters for cilazapril. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy that does not report any quantitative pharmacokinetic parameters for cilazapril. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any specific pharmacodynamic or exposure-response data for cilazapril. |
| popPK | Clozel_1993 | irrelevant | 0 | 0 | The paper focuses on the discovery and pharmacodynamics of the renin inhibitor remikiren, with cilazapril serving only as a comparator agent without any reported pharmacokinetic parameters. |
| PD | Clozel_1993 | not_relevant | 1 | 0 | The text is a discovery abstract for remikiren that only qualitatively compares its blood pressure effect to cilazapril without providing any numeric PD parameters or exposure-response data for cilazapril. |
| popPK | Deng_1993 | irrelevant | 0 | 0 | The study is a mechanistic vascular reactivity experiment in rats, not a pharmacokinetic study, and reports no disposition parameters for cilazapril. |
| PD | Deng_1993 | not_relevant | 3 | 2 | The study reports dose-response curves to endothelin-1 (a vasoconstrictor) in response to cilazapril treatment, but does not report a pharmacodynamic model or numeric PD parameters (e.g., EC50, Emax) for cilazapril itself. |
| PD | Ding_2000 | not_relevant | 2 | 1 | The paper is a review discussing PK/PD differences between ethnicities based on existing data, but it does not present a specific PD model or extractable numeric PD parameters (like Emax or EC50) for cilazapril in the provided text. |
| PGx | Ding_2000 | not_relevant | 2 | 0 | The paper is a review discussing ethnic differences and mentions the ACE I/D polymorphism, but it does not report specific pharmacogenomic effect sizes for cilazapril PK/PD parameters. |
| popPK | Ebihara_1996 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of cough reflex sensitivity in guinea pigs and does not report any pharmacokinetic parameters for cilazapril. |
| popPK | Erb_1991 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (pharmacological half-life, Ki-dose) derived from angiotensin I infusion, not quantitative pharmacokinetic disposition parameters (CL, V, ka) for cilazapril. |
| popPK | Essig_1989 | irrelevant | 1 | 0 | The study reports pharmacodynamic parameters (potency, duration of effect) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Fischli_1991 | irrelevant | 0 | 0 | The study characterizes the renin inhibitor Ro 42-5892, using cilazapril only as a comparator for blood pressure effects without reporting any pharmacokinetic parameters for cilazapril. |
| PD | Fischli_1991 | not_relevant | 2 | 1 | The paper focuses on the PD of Ro 42-5892; cilazapril is only mentioned as a qualitative comparator for blood pressure lowering effects without providing specific numeric PD parameters or exposure-response data for cilazapril. |
| popPK | Fiscon_2021 | irrelevant | 0 | 0 | The paper is a network-based drug repurposing algorithm study for COVID-19 and does not report any pharmacokinetic parameters for cilazapril. |
| PD | Fiscon_2021 | not_relevant | 0 | 0 | The paper is a computational network-based drug repurposing study that does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for cilazapril or any other drug. |
| popPK | Francis_1987 | relevant | 9 | 4 | The study reports quantitative PK parameters (half-lives) for cilazaprilat (active metabolite) in humans, but specific clearance and volume values are not explicitly listed in the provided abstract text. |
| popPK | Frohlich_1990 | irrelevant | 0 | 0 | The study focuses on cardiovascular mass and hemodynamic performance (pharmacodynamics) in rats, not on the pharmacokinetic disposition parameters (CL, V, etc.) of cilazapril. |
| PD | Frohlich_1990 | not_relevant | 1 | 0 | The paper reports qualitative structural and functional differences between ACE inhibitors but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters for cilazapril. |
| popPK | Frohlich_1991 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of cardiovascular structure and hemodynamics in rats, not a pharmacokinetic study reporting quantitative disposition parameters for cilazapril. |
| PD | Frohlich_1991 | not_relevant | 1 | 0 | The paper reports qualitative comparative effects of multiple ACE inhibitors on cardiovascular structure and function in rats but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters for cilazapril. |
| popPK | Gasic_1989 | irrelevant | 0 | 0 | The study investigates hemodynamic effects of cilazapril (blood pressure, vascular resistance) rather than pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Johnston_1988 | irrelevant | 1 | 0 | The study focuses on in vitro potency and plasma concentration measurement methods for ACE inhibitors, not on reporting quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for cilazapril. |
| PD | Johnston_1988 | not_relevant | 2 | 1 | The paper reports in vitro ID50/IC50 values for rat ACE and validates a plasma assay, but does not provide in vivo exposure-response or dose-response data for cilazapril. |
| popPK | Keltai_1993 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| popPK | Kihara_1999 | irrelevant | 0 | 0 | The study investigates the physiological effects of cilazapril on nerve blood flow and electrophysiology in diabetic rats, not its pharmacokinetic disposition parameters. |
| PD | Kihara_1999 | not_relevant | 3 | 2 | The study reports qualitative improvements in nerve blood flow and electrophysiology with cilazapril and a single-point local application, but does not provide a dose-response curve or numeric PD parameters (e.g., EC50, Emax) for cilazapril. |
| popPK | Kim_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fimasartan, and cilazapril is only mentioned as a comparator in the discussion. |
| popPK | Kleinbloesem_1989 | irrelevant | 2 | 0 | The text is a qualitative review of clinical pharmacology that mentions a terminal half-life range but lacks specific quantitative compartmental PK parameters (CL, V, Q, ka) or a population PK model. |
| popPK | Kleinbloesem_1989_2 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of cilazapril and propranolol focusing on hemodynamics and RAAS parameters, with no pharmacokinetic modeling or disposition parameters (CL, V, t1/2) reported. |
| PD | Kleinbloesem_1989_2 | not_relevant | 3 | 2 | The study reports qualitative pharmacodynamic effects (BP, HR, RAAS parameters) at fixed doses but does not provide numeric concentration-effect parameters (Emax, EC50) or a fitted PD model. |
| popPK | Kleinbloesem_1991 | irrelevant | 4 | 2 | The paper is a review that summarizes pharmacokinetic properties (half-lives) but does not report original quantitative disposition parameters like clearance (CL), volume (V), or intercompartmental clearance (Q) for cilazapril. |
| popPK | Kobrin_1991 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting blood pressure changes, not a pharmacokinetic study with quantitative disposition parameters. |
| PD | Kobrin_1991 | not_relevant | 3 | 2 | The paper describes a dose-response trial with qualitative comparisons of blood pressure reductions but does not provide specific numeric PD parameters (e.g., Emax, EC50) or detailed concentration-effect data in the provided text. |
| popPK | Krum_1992 | relevant | 8 | 4 | The study reports quantitative PK parameters (Tmax, t1/2, EC50) for cilazaprilat in humans, but lacks specific values for clearance (CL) or volume of distribution (V). |
| popPK | Lacourcière_1991 | irrelevant | 0 | 0 | The study reports only antihypertensive efficacy (blood pressure) and contains no pharmacokinetic parameters (CL, V, ka, etc.) for cilazapril. |
| PD | Lacourcière_1991 | not_relevant | 3 | 2 | The paper reports a dose-comparison study (2.5 vs 5 mg) with mean blood pressure reductions but does not provide concentration-effect data, PK parameters, or a fitted dose-response curve with numeric PD parameters (e.g., EC50, Emax). |
| popPK | Louis_1992 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for cilazapril (specifically its active metabolite cilazaprilat) in humans, including Cmax and plasma levels at specific time points, but lacks explicit clearance (CL), volume (V), or half-life values in the provided text. |
| popPK | Rosendorff_1992 | irrelevant | 0 | 0 | The study investigates hemodynamic and pressor sensitivity responses to cilazapril treatment, not its pharmacokinetic disposition parameters. |
| PD | Rosendorff_1992 | not_relevant | 3 | 2 | The study reports dose-response curves for exogenous agonists (phenylephrine/Ang II) and PD20 values, but these characterize receptor sensitivity rather than the pharmacodynamic effect of cilazapril itself; no concentration-effect or dose-effect parameters for cilazapril are provided. |
| popPK | Shah_2025 | irrelevant | 0 | 0 | The paper is a review on machine learning for food effects and mentions cilazapril only as a single example of a clinically irrelevant food interaction without providing any quantitative PK parameters. |
| PD | Shah_2025 | not_relevant | 0 | 0 | The paper is a review on machine learning for predicting food effects on drug absorption (PK) and does not report any pharmacodynamic or exposure-response data for cilazapril. |
| popPK | Somogyi-Végh_2019 | irrelevant | 0 | 0 | The paper is a retrospective analysis of drug-drug interaction prevalence in pharmacy dispensing data and does not report any pharmacokinetic parameters for cilazapril. |
| PD | Somogyi-Végh_2019 | not_relevant | 0 | 0 | The paper is a retrospective analysis of drug dispensing data to estimate the prevalence of drug-drug interactions; it contains no pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for cilazapril. |
| popPK | Song_2002 | irrelevant | 2 | 5 | The paper is a review of newer ACE inhibitors (trandolapril, moexipril, spirapril, temocapril, imidapril) and only lists cilazapril in a summary table of older agents without providing original quantitative PK data or a model for cilazapril. |
| PD | Song_2002 | not_relevant | 2 | 1 | The paper is a review that mentions cilazapril only in the context of PK parameters and general class effects, without providing specific numeric PD parameters or exposure-response data for cilazapril. |
| popPK | Thomson_1989 | irrelevant | 0 | 0 | The study investigates the population pharmacokinetics of lisinopril, not cilazapril (which is only mentioned in the discussion as a comparator for ACE binding). |
| PD | Thomson_1989 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of lisinopril, not cilazapril, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Waterfall_1989 | irrelevant | 2 | 0 | The paper is a preclinical pharmacology review focusing on ACE inhibition and hemodynamics, lacking quantitative pharmacokinetic parameters (CL, V, ka) for cilazapril. |
| PD | Waterfall_1989 | not_relevant | 3 | 2 | The paper is a review of preclinical pharmacology that reports qualitative dose-response trends and specific point estimates (e.g., IC50, max inhibition) but does not provide a formal PK/PD model or a complete concentration-effect curve with derivable PD parameters like Emax/EC50 for the drug's systemic effects. |
| popPK | Weber_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of remikiren, not cilazapril. |
| PD | Weber_1993 | not_relevant | 0 | 0 | The paper studies remikiren, not cilazapril. |
| popPK | Wellstein_1987 | irrelevant | 2 | 0 | The study reports pharmacodynamic effects (blood pressure response to angiotensin I) and a pharmacodynamic half-life, but does not provide quantitative pharmacokinetic parameters (CL, V, ka) for cilazapril. |
| popPK | Wright_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for colchicine, not cilazapril. |
| PD | Wright_2025 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of colchicine, not cilazapril, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Zhang_1994 | irrelevant | 0 | 0 | The study investigates the effects of cilazapril on insulin resistance and glucose metabolism in rabbits, not the pharmacokinetic disposition parameters (CL, V, ka) of cilazapril itself. |
| popPK | Łukawski_2011 | irrelevant | 0 | 0 | The study is a pharmacodynamic interaction study in mice using cilazapril as a co-administered agent, with no pharmacokinetic parameters reported. |
| PD | Łukawski_2011 | not_relevant | 3 | 2 | The study reports a qualitative pharmacodynamic interaction (enhancement of VPA efficacy by enalapril) and a shift in ED50, but it does not provide a concentration-effect or dose-response model for cilazapril itself, nor does it report numeric PD parameters (like Emax or EC50) for cilazapril. |
| popPK | Łukawski_2013 | irrelevant | 0 | 0 | The study is a pharmacodynamic interaction study in mice where cilazapril is a co-administered agent, and no pharmacokinetic parameters for cilazapril are reported. |
| PD | Łukawski_2013 | not_relevant | 2 | 1 | The study reports that cilazapril did not affect the protective activity of antiepileptics, providing no numeric PD parameters or exposure-response relationship for cilazapril. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-02 17:17 UTC</sub>
