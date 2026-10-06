<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;methoxamine&quot;}]"></div>

# methoxamine

- **generic name:** methoxamine
- **ATC codes:** `C01CA10`
- **DrugBank:** [DB00723](https://go.drugbank.com/drugs/DB00723) · **PubChem:** [CID 6082](https://pubchem.ncbi.nlm.nih.gov/compound/6082)
- **molar mass:** 211.2576 g/mol (C11H17NO3) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Methoxamine is a sympathomimetic alpha-1 agonist that acts as a vasoconstrictor and was used in cardiac therapy to raise blood pressure. It has been withdrawn from use and is no longer widely available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q685119](https://www.wikidata.org/wiki/Q685119) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 08:35 | 5:32 | 0/0/0 | 0/0/0 | 0/0/0 | 221,577/5,258 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 5/6 | 8/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methoxamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 598 matched, 118 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Akimoto_1989.pdf` | Akimoto Y et al., Effects of specific alpha-adrenoceptive…, Life sciences (1989) | pd | 4 | [10.1016/0024-3205(89)90493-1](https://doi.org/10.1016/0024-3205(89)90493-1) | [2564613](https://www.ncbi.nlm.nih.gov/pubmed/2564613) | metadata signals extractable PD data (IC50) |
| `Baan_1998.pdf` | Baan J et al., Effects of angiotensin II and losartan…, Journal of hypertension (1998) | pd | 4 | [10.1097/00004872-199816090-00011](https://doi.org/10.1097/00004872-199816090-00011) | [9746117](https://www.ncbi.nlm.nih.gov/pubmed/9746117) | metadata signals extractable PD data (Emax) |
| `Bevilacqua_1991.pdf` | Bevilacqua M et al., Alpha 1 adrenoceptor subtype mediates n…, Cardiovascular research (1991) | pd | 4 | [10.1093/cvr/25.4.290](https://doi.org/10.1093/cvr/25.4.290) | [1653111](https://www.ncbi.nlm.nih.gov/pubmed/1653111) | metadata signals extractable PD data (EC50) |
| `Dantas_2014.pdf` | Dantas da Silva Júnior E et al., Effects of clonidine in the isolated ra…, European journal of pharmac… (2014) | pd | 4 | [10.1016/j.ejphar.2014.01.027](https://doi.org/10.1016/j.ejphar.2014.01.027) | [24485887](https://www.ncbi.nlm.nih.gov/pubmed/24485887) | metadata signals extractable PD data (Emax) |
| `Elliott_1997.pdf` | Elliott J, Alpha-adrenoceptors in equine digital v…, Journal of veterinary pharm… (1997) | pd | 4 | [10.1046/j.1365-2885.1997.00078.x](https://doi.org/10.1046/j.1365-2885.1997.00078.x) | [9280371](https://www.ncbi.nlm.nih.gov/pubmed/9280371) | metadata signals extractable PD data (EC50) |
| `Hale_2002.pdf` | Hale TM et al., Recovery of erectile function after bri…, The Journal of urology (2002) | pd | 4 | not captured | [12050568](https://www.ncbi.nlm.nih.gov/pubmed/12050568) | metadata signals extractable PD data (EC50) |
| `Henry_1990.pdf` | Henry PJ et al., Beta 1-adrenoceptors mediate smooth mus…, British journal of pharmaco… (1990) | pd | 4 | [10.1111/j.1476-5381.1990.tb14666.x](https://doi.org/10.1111/j.1476-5381.1990.tb14666.x) | [2158831](https://www.ncbi.nlm.nih.gov/pubmed/2158831) | metadata signals extractable PD data (EC50) |
| `Parker_1999.pdf` | Parker C et al., Non-specific action of methoxamine on I…, British journal of pharmaco… (1999) | pd | 4 | [10.1038/sj.bjp.0702335](https://doi.org/10.1038/sj.bjp.0702335) | [10188969](https://www.ncbi.nlm.nih.gov/pubmed/10188969) | metadata signals extractable PD data (EC50) |
| `Sarsero_1998.pdf` | Sarsero D et al., Human vascular to cardiac tissue select…, British journal of pharmaco… (1998) | pd | 4 | [10.1038/sj.bjp.0702045](https://doi.org/10.1038/sj.bjp.0702045) | [9776350](https://www.ncbi.nlm.nih.gov/pubmed/9776350) | metadata signals extractable PD data (IC50) |
| `Starling_1987.pdf` | Starling MR et al., The relationship of various measures of…, Circulation (1987) | pd | 4 | [10.1161/01.cir.76.1.32](https://doi.org/10.1161/01.cir.76.1.32) | [3594773](https://www.ncbi.nlm.nih.gov/pubmed/3594773) | metadata signals extractable PD data (Emax) |
| `Starling_1989.pdf` | Starling MR, Responsiveness of the maximum time-vary…, American heart journal (1989) | pd | 4 | [10.1016/0002-8703(89)90019-7](https://doi.org/10.1016/0002-8703(89)90019-7) | [2589166](https://www.ncbi.nlm.nih.gov/pubmed/2589166) | metadata signals extractable PD data (Emax) |
| `Tabrizchi_1989.pdf` | Tabrizchi R et al., Benextramine and nifedipine distinguish…, Life sciences (1989) | pd | 4 | [10.1016/0024-3205(89)90242-7](https://doi.org/10.1016/0024-3205(89)90242-7) | [2559276](https://www.ncbi.nlm.nih.gov/pubmed/2559276) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T08:33:07.722721+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelmawla_1999 | irrelevant | 0 | 0 | Methoxamine is used as a pharmacological probe to test alpha-adrenoceptor function, not as the subject of a pharmacokinetic study. |
| popPK | Abel_1986 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor binding and contraction, not a pharmacokinetic study, and methoxamine is used only as a comparator agonist. |
| popPK | Afzal_2016 | irrelevant | 0 | 0 | Methoxamine is used only as a vasoconstrictor probe to assess renal vascular reactivity, not as the subject of a pharmacokinetic study. |
| popPK | Afzal_2020 | irrelevant | 0 | 0 | Methoxamine is used only as a vasoconstrictor probe to assess renal hemodynamics, not as the subject of a pharmacokinetic study. |
| popPK | Afzal_2022 | irrelevant | 0 | 0 | Methoxamine is used as a pharmacological tool to assess renal vascular reactivity, not as the subject of a pharmacokinetic study. |
| PD | Afzal_2022 | not_relevant | 2 | 1 | The paper reports qualitative changes in renal vascular responses to methoxamine (percent attenuation) but does not provide numeric concentration-effect curves, Emax, EC50, or other specific PD parameters for methoxamine. |
| PD | Akimoto_1989 | not_relevant | 0 | 0 | The paper investigates the effect of alpha-adrenoceptive agents on isoproterenol uptake in rat hearts and does not report any pharmacodynamic or exposure-response relationship for methoxamine. |
| popPK | Aqel_1986 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic investigation of arterial contraction in rats, using methoxamine as a receptor agonist rather than measuring its pharmacokinetic disposition parameters. |
| popPK | Armengot_1996 | irrelevant | 0 | 0 | The study measures laryngeal mucociliary clearance (a physiological transport rate) in rabbits, not the pharmacokinetic disposition parameters (CL, V, t1/2) of methoxamine. |
| popPK | Baan_1998 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| PD | Baan_1998 | not_relevant | 0 | 0 | The paper investigates the effects of angiotensin II and losartan, not methoxamine, and does not report PD parameters for the target drug. |
| PD | Babich_1997 | not_relevant | 2 | 1 | The paper reports a qualitative ranking of inhibition potency for methoxamine but does not provide numeric PD parameters (e.g., IC50, Emax) or a quantitative concentration-effect curve for methoxamine. |
| popPK | Baines_1987 | irrelevant | 0 | 0 | The study is a mechanistic renal physiology experiment using methoxamine as an alpha-1 adrenergic agonist to stimulate sodium reabsorption, not a pharmacokinetic study of methoxamine disposition. |
| PD | Barber_1986 | not_relevant | 0 | 0 | The paper reports that methoxamine did not alter basal neurotensin secretion at a single concentration (10 microM), providing no dose-response curve or numeric PD parameters for methoxamine. |
| PD | Belardinelli_2013 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of GS967; methoxamine is only mentioned as a tool compound to induce arrhythmias, and no exposure-response or dose-response analysis for methoxamine is reported. |
| popPK | Bevilacqua_1991 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| PD | Bevilacqua_1991 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of noradrenaline on human internal mammary artery and does not report any pharmacokinetic or pharmacodynamic data for methoxamine. |
| popPK | Blair_1983 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of methoxamine on renin secretion in dogs, not its pharmacokinetic disposition parameters. |
| PD | Boehm_1991 | not_relevant | 0 | 0 | The paper reports that methoxamine did not significantly reduce Ca2+ current at 10 umol/l, providing no numeric PD parameters or dose-response relationship for methoxamine. |
| popPK | Brown_1979 | irrelevant | 0 | 0 | The study is a pharmacological investigation of alpha-2 adrenoceptors in rat sympathetic ganglia, not a pharmacokinetic study of methoxamine. |
| popPK | Chia_2013 | irrelevant | 0 | 0 | Methoxamine is used only as a diagnostic agonist to assess renal hemodynamics, not as the subject of a pharmacokinetic study. |
| popPK | Corbo_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of propranolol, using methoxamine only as a tool to induce hypertension. |
| popPK | Cosford_1996 | irrelevant | 0 | 0 | The study investigates microdialysis extraction fractions of serotonin and norepinephrine, using methoxamine only as a pharmacological tool to test receptor effects, not as the subject of PK analysis. |
| popPK | Dantas_2014 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Dantas_2014 | not_relevant | 0 | 0 | The paper investigates the effects of clonidine, not methoxamine, and does not report any exposure-response or dose-response relationship for methoxamine. |
| popPK | Davies_2002 | irrelevant | 0 | 0 | The paper is a mechanistic study on blood-brain barrier breakdown where methoxamine is used only as a pharmacological tool to provoke oedema, not as a subject of pharmacokinetic analysis. |
| PD | Douglas_1990 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of endothelin-like peptides, using methoxamine only as a tool to pre-constrict vessels for vasodilation assays, and does not report a PD or exposure-response relationship for methoxamine itself. |
| popPK | Downing_1983 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of inotropic responses to methoxamine in lambs, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Elliott_1997 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| PD | Elverdin_1984 | not_relevant | 3 | 2 | The paper describes qualitative dose-response shifts and antagonist potency ratios for methoxamine but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for the drug itself. |
| PD | Endoh_1978 | not_relevant | 1 | 0 | The paper mentions methoxamine only qualitatively as an alpha-adrenoceptor stimulant that decreased active tension, without providing any numeric dose-response parameters or concentration-effect data for it. |
| PD | Escubedo_1992 | not_relevant | 0 | 0 | The paper reports PD parameters for Ro 5-4864 and PK 11195, not for methoxamine; methoxamine is only used as a stimulus in a secondary assay where no dose-response curve or PD parameters for methoxamine itself are reported. |
| PD | Francque_2012 | not_relevant | 2 | 1 | The paper mentions a dose-response to methoxamine but only provides a qualitative comparison (P-value) without reporting specific numeric PD parameters (EC50, Emax) or extractable curve data. |
| popPK | Fu_2020 | irrelevant | 0 | 0 | The study is a dose-response pharmacodynamic trial determining ED50/ED95 for preventing hypotension, not a pharmacokinetic study reporting clearance, volume, or half-life. |
| popPK | Fuder_1984 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of noradrenaline release in rat hearts, where methoxamine is used only as a negative control/comparator and no pharmacokinetic parameters are reported. |
| popPK | González_1996 | irrelevant | 0 | 0 | The study investigates the vascular pharmacology of agmatine in rat tail arteries, using methoxamine only as a non-specific alpha-adrenoceptor agonist for contraction assays, not as a subject for pharmacokinetic analysis. |
| PD | González_1996 | not_relevant | 3 | 2 | The paper reports a qualitative shift in the EC50 of methoxamine in the presence of agmatine, but does not provide a formal PD model or extractable numeric PD parameters (like Emax or specific EC50 values) for methoxamine itself. |
| popPK | Gracia-Sancho_2007 | irrelevant | 0 | 0 | Methoxamine is used as a tool compound to stimulate prostanoid release in an in-vitro mechanistic study, not as the subject of a pharmacokinetic analysis. |
| PD | Hale_2002 | not_relevant | 0 | 0 | The paper focuses on the recovery of erectile function after antihypertensive therapy and does not report any pharmacodynamic or exposure-response analysis for methoxamine. |
| popPK | Hartmann_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adrenergic receptor effects on contractility and phosphorylation, not a pharmacokinetic study. |
| popPK | Hasan_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of adrenoceptors in guinea-pig ileum, not a pharmacokinetic study of methoxamine. |
| PD | Hasan_1996 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any pharmacological data, PD models, or information regarding methoxamine. |
| popPK | Henry_1990 | irrelevant | 0 | 0 | no_text gate: only 79 chars of text extracted (&lt; 400) |
| PD | Henry_1990 | not_relevant | 0 | 0 | The paper focuses on beta-1 adrenoceptor-mediated smooth muscle relaxation in mouse trachea and does not mention methoxamine or report any exposure-response or dose-response data for it. |
| popPK | Hernández-Guerra_2013 | irrelevant | 0 | 0 | Methoxamine is used as a vasoconstrictor probe to assess endothelial function, not as the subject of a pharmacokinetic study. |
| popPK | Hori_1993 | irrelevant | 0 | 0 | The study is a functional morphometric analysis of microvascular mechanisms and blood flow in rats, not a pharmacokinetic study reporting disposition parameters for methoxamine. |
| PGx | Hori_1993 | not_relevant | 0 | 0 | The paper investigates microvascular mechanisms of tumor blood flow in rats using methoxamine as a vasopressor, but does not report any pharmacogenomic effects or gene variants. |
| popPK | Hu_2025 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of verapamil's antagonism of alpha-adrenoceptors using methoxamine as a tool agonist, not a pharmacokinetic study of methoxamine. |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vibegron's effects on smooth muscle, where methoxamine is used only as a non-selective alpha-adrenergic agonist for concentration-response curves, not as the subject of pharmacokinetic analysis. |
| popPK | Huang_2021 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of mirabegron's effects on human prostate smooth muscle, using methoxamine only as a tool compound (agonist) to induce contractions, not as the subject of pharmacokinetic analysis. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor antagonism in prostate tissue, not a pharmacokinetic study, and methoxamine is used only as a tool compound. |
| popPK | Hye_2007 | irrelevant | 0 | 0 | Methoxamine is used as a pharmacological tool to assess renal hemodynamics, not as the subject of a pharmacokinetic study. |
| popPK | Hye_2008 | irrelevant | 0 | 0 | The study investigates renal hemodynamics and adrenoceptor subtypes using methoxamine as a pharmacological agonist, not its pharmacokinetics. |
| popPK | Ingebretsen_1981 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cardiac physiology where methoxamine is used only as a negative control/comparator, with no pharmacokinetic parameters reported. |
| popPK | Iribe_2004 | irrelevant | 0 | 0 | The study is a hemodynamic investigation in dogs where methoxamine is used solely as a vasoconstrictor to alter afterload, with no pharmacokinetic parameters reported. |
| PD | Iribe_2004 | not_relevant | 0 | 0 | The paper investigates the hemodynamic effects of afterload on pulsus alternans using methoxamine only as a tool to increase afterload, and does not report any exposure-response or dose-response relationship or PD parameters for methoxamine. |
| popPK | Jepps_2015 | irrelevant | 0 | 0 | The study investigates ion channel physiology in rat arteries and uses methoxamine only as a vasoconstrictor probe, not as a subject for pharmacokinetic analysis. |
| popPK | Jones_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay measuring potency (EC50) in porcine tissue, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Khammy_2016 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of vascular reactivity (EC50/Emax) to methoxamine, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Khan_2007 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of renal vasoconstriction in rats using methoxamine as a tool compound, not a pharmacokinetic study. |
| popPK | Khan_2009 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of renal adrenoceptor subtypes in rats, using methoxamine as a functional agonist rather than measuring its pharmacokinetic parameters. |
| popPK | Khoobehi_2011 | irrelevant | 0 | 0 | Methoxamine is used only as a precontracting agent in an in-vitro aortic ring assay, not as the subject of pharmacokinetic analysis. |
| popPK | Klein_1979 | irrelevant | 0 | 0 | Methoxamine is used only as a pharmacological intervention to alter myocardial oxygen demand, not as the subject of pharmacokinetic analysis. |
| popPK | Klett_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of angiotensinogen synthesis in rat hepatocytes, where methoxamine is used only as a calcium-affecting agent to show it does not influence synthesis, with no pharmacokinetic parameters reported. |
| popPK | Li_1990 | irrelevant | 0 | 0 | The study investigates the hemodynamic effects of methoxamine on tumor blood flow in rats, not its pharmacokinetic disposition parameters. |
| popPK | Li_1993 | irrelevant | 0 | 0 | The study measures tumor blood flow using methoxamine as a vasoactive agent, not its pharmacokinetic parameters. |
| popPK | Li_2011 | irrelevant | 0 | 0 | The study investigates the vasorelaxant effects of fasudil mesylate, using methoxamine only as a contractile agent in in vitro assays, and does not report pharmacokinetic parameters for methoxamine. |
| popPK | Maclouf_1986 | irrelevant | 0 | 0 | The paper describes the development of a radioimmunoassay for prostaglandin D2 using methoxamine as a derivatizing reagent, not a pharmacokinetic study of methoxamine itself. |
| popPK | Macquin-Mavier_1991 | irrelevant | 0 | 0 | The study measures lung epithelial permeability using a radiotracer, and methoxamine is used only as a pharmacological agent to modulate bronchoconstriction, not as the subject of a pharmacokinetic analysis. |
| PD | McAdams_1986 | not_relevant | 0 | 0 | The text is a correction regarding antagonist pA2 values for prazosin and indoramin, containing no data or analysis for methoxamine. |
| popPK | Miyauchi_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of CGRP vasorelaxation where methoxamine is used only as a precontracting agent, not as the subject of pharmacokinetic analysis. |
| popPK | Moeller_2015 | irrelevant | 0 | 0 | The study uses methoxamine as a pharmacological tool to measure vascular resistance in rat livers, not to characterize its pharmacokinetic parameters. |
| popPK | Munzar_1999 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment investigating the discriminative-stimulus effects of methamphetamine, using methoxamine only as a comparator agent, and reports no pharmacokinetic parameters. |
| PD | Munzar_1999 | not_relevant | 1 | 0 | The paper reports qualitative behavioral shifts in dose-response curves for methamphetamine modulated by methoxamine, but provides no numeric PD parameters (e.g., EC50, Emax) or concentration-effect data for methoxamine itself. |
| PD | Ohizumi_1982 | not_relevant | 0 | 0 | The paper studies the effect of MCI-2016 on methoxamine responses in guinea-pig vas deferens, but does not report a pharmacodynamic (exposure- or dose-response) relationship for methoxamine itself. |
| popPK | Osborn_1982 | irrelevant | 0 | 0 | The study uses methoxamine as a pharmacological tool to investigate renal physiology and renin secretion, not to characterize the pharmacokinetic parameters of methoxamine itself. |
| popPK | Parker_1999 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PD | Parker_1999 | not_relevant | 0 | 0 | The paper investigates the electrophysiological mechanism of methoxamine on ion channels (Ito, hKv1.5, Kv4.2) and does not report pharmacodynamic exposure-response or dose-response relationships with numeric PD parameters. |
| popPK | Pettibone_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of L-654,284, using methoxamine only as a reference agonist for receptor selectivity, with no PK parameters reported for methoxamine. |
| popPK | Pirova_1990 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of renal excretory function and diuresis in rats, not a pharmacokinetic study reporting disposition parameters for methoxamine. |
| popPK | Qi_1992 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of adrenoceptor effects on palpebral fissure and lacrimation in mice, reporting no pharmacokinetic parameters for methoxamine. |
| PD | Ralevic_1996 | not_relevant | 0 | 0 | The paper uses methoxamine only as a tool to establish vascular tone in an isolated organ bath; it does not report a pharmacodynamic or exposure-response relationship for methoxamine itself. |
| popPK | Salazar-Bookaman_2006 | irrelevant | 0 | 0 | The study is a pharmacological investigation of receptor antagonism in guinea-pig ileum and does not report any pharmacokinetic parameters for methoxamine. |
| popPK | Sapienza_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular contractility and receptor binding, not a pharmacokinetic study of methoxamine. |
| PD | Sarsero_1998 | not_relevant | 0 | 0 | The paper focuses on calcium channel antagonists and does not mention methoxamine or report any pharmacodynamic parameters for it. |
| popPK | Simpson_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adrenergic receptor signaling in cultured rat heart cells, not a pharmacokinetic study of methoxamine. |
| popPK | Sladeczek_1988 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and functional assay (pharmacodynamics) and does not report pharmacokinetic parameters for methoxamine. |
| PD | Sladeczek_1988 | not_relevant | 3 | 2 | The paper reports binding affinities (Ki) and EC50 values for inositol phosphate accumulation, but methoxamine is only mentioned as an exception to a correlation trend without specific numeric PD parameters provided in the text. |
| PD | Smallwood_2005 | not_relevant | 0 | 0 | The paper is a molecular biology study on PKC-delta and actin binding; methoxamine is used only as a stimulant for NKCC1 activation, and no pharmacodynamic or exposure-response parameters for methoxamine are reported. |
| popPK | Starling_1987 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | Starling_1987 | not_relevant | 0 | 0 | The paper focuses on hemodynamic indices and left ventricular elastance in humans and does not report any pharmacodynamic or exposure-response analysis for methoxamine. |
| PD | Starling_1989 | not_relevant | 0 | 0 | The paper focuses on the responsiveness of maximum time-varying elastance to left ventricular contractile state and does not report a pharmacodynamic or exposure-response relationship for methoxamine. |
| popPK | Sudhir_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular reactivity where methoxamine is used as a tool compound, not a pharmacokinetic study. |
| PD | Sumner_1992 | not_relevant | 0 | 0 | The paper investigates 5-HT1 receptor mechanisms in dog saphenous vein; methoxamine is only mentioned as a negative control for alpha-1 adrenoceptor activity and no PD parameters for methoxamine are reported. |
| popPK | Tabrizchi_1989 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| PD | Tabrizchi_1989 | not_relevant | 0 | 0 | The paper focuses on the pharmacological classification of alpha-1 adrenoceptors using benextramine and nifedipine, and does not report any pharmacodynamic or exposure-response data for methoxamine. |
| PD | Takahashi_1985 | not_relevant | 0 | 0 | The paper uses methoxamine as a diagnostic provocation agent in phonocardiography but reports no concentration-effect or dose-response data, nor any numeric PD parameters. |
| popPK | Tan_1999 | irrelevant | 0 | 0 | The study is an in vitro electrophysiological investigation of adrenoceptor mechanisms in hamster neurons, using methoxamine only as a pharmacological tool, and reports no pharmacokinetic parameters. |
| PD | Tan_1999 | not_relevant | 1 | 0 | The paper reports an EC50 for norepinephrine, but for methoxamine it only provides a qualitative percentage of cells responding (35%) without numeric dose-response parameters or concentration-effect curves. |
| PD | Terrón_1997 | not_relevant | 0 | 0 | The paper investigates 5-HT receptor pharmacology using methoxamine only as a tool to raise blood pressure; it does not report a pharmacodynamic or exposure-response relationship for methoxamine itself. |
| popPK | Thakore_2011 | irrelevant | 0 | 0 | The study investigates the vascular pharmacology of calcimimetics in rat arteries, using methoxamine only as a precontracting agent, and reports no pharmacokinetic parameters for methoxamine. |
| PD | Thakore_2011 | not_relevant | 0 | 0 | The paper reports PD parameters (pEC50, Emax) for calcimimetics (cinacalcet, calindol), not for methoxamine, which is only used as a precontracting agent. |
| popPK | Todorov_1996 | irrelevant | 0 | 0 | The study is an in-vitro neurophysiological investigation of cotransmitter release where methoxamine is used only as a pharmacological tool (alpha-1 agonist), not as the subject of pharmacokinetic analysis. |
| popPK | Truett_1996 | irrelevant | 0 | 0 | The study uses methoxamine as a pharmacological tool to assess autonomic control of blood pressure, not to characterize its pharmacokinetic parameters. |
| PD | Truett_1996 | not_relevant | 4 | 2 | The paper describes a dose-response experiment with methoxamine but only reports qualitative changes (blunted peak response) and baseline/peak values for other drugs, without providing the specific dose-response curve data or numeric PD parameters (EC50, Emax) for methoxamine in the text. |
| PD | Winquist_1985 | not_relevant | 0 | 0 | The paper uses methoxamine only as a contractile agent to establish a baseline for studying endothelium-dependent relaxation by other agents (acetylcholine, A23187, etc.), and does not report a pharmacodynamic or exposure-response relationship for methoxamine itself. |
| popPK | Yang_2001 | irrelevant | 0 | 0 | Methoxamine is used only as a vasoconstrictor to establish tone in an in-vitro vascular reactivity study, with no pharmacokinetic parameters reported. |
| PD | Yang_2001 | not_relevant | 0 | 0 | The paper reports dose-response relationships for acetylcholine, sodium nitroprusside, and ATP, but methoxamine is used only as a fixed-concentration tool to establish vascular tone, not as the subject of a PD or exposure-response analysis. |
| popPK | Yang_2012 | irrelevant | 0 | 0 | Methoxamine is used only as a vasoconstrictor probe to assess hepatic endothelial dysfunction, not as the subject of a pharmacokinetic study. |
| PD | Yazawa_1993 | not_relevant | 0 | 0 | The paper characterizes alpha-1 adrenoceptor subtypes using binding assays and tissue contraction data; methoxamine is only listed in a qualitative order of binding effectiveness without any numeric PD parameters or exposure-response analysis. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract collection and contains no scientific content, data, or PD parameters for methoxamine. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 40 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a poster session and contains no scientific content, data, or mention of methoxamine or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
