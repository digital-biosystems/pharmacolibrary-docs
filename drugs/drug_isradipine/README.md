<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;isradipine&quot;}]"></div>

# isradipine

- **generic name:** isradipine
- **ATC codes:** `C08CA03`
- **DrugBank:** [DB00270](https://go.drugbank.com/drugs/DB00270) · **PubChem:** [CID 3784](https://pubchem.ncbi.nlm.nih.gov/compound/3784)
- **molar mass:** 371.3871 g/mol (C19H21N3O5) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Isradipine belongs to the dihydropyridine (DHP) class of calcium channel blockers (CCBs), the most widely used class of CCBs. It is structurally related to felodipine, nifedipine, and nimodipine and is the most potent calcium-channel blocking agent of the DHP class. Isradipine binds to calcium channels with high affinity and specificity and inhibits calcium flux into cardiac and arterial smooth muscle cells. It exhibits greater selectivity towards arterial smooth muscle cells owing to alternative splicing of the alpha-1 subunit of the channel and increased prevalence of inactive channels in smooth muscle cells. Isradipine may be used to treat mild to moderate essential hypertension.

**Indication.** For the management of mild to moderate essential hypertension. It may be used alone or concurrently with thiazide-type diuretics.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 08:44 | 38:59 | 0/0/0 | 0/0/0 | 0/0/0 | 119,219/7,301 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 3/2 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=isradipine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>“…subject to extensive first-pass metabolism…”</sub> | prose |
| absorption | small intestine | <sub>“…Isradipine is 90%-95% absorbed…”</sub> | prose |
| metabolism | liver | `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…25% to 30% in the feces…”</sub> | prose |
| excretion | kidney | <sub>“…excreted in the urine…”</sub> | prose |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1C (inhibitor), CACNA1D (inhibitor), CACNA1H (inhibitor), CACNA1S (inhibitor), CACNA2D1 (inhibitor), CACNA2D2 (inhibitor), CACNB2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 161 matched, 79 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Christensen_1993.pdf` | Christensen HR et al., Pharmacokinetics and dynamic response o…, Pharmacology & toxicology (1993) | popPK | 8 | [10.1111/j.1600-0773.1993.tb00585.x](https://doi.org/10.1111/j.1600-0773.1993.tb00585.x) | [8115311](https://pubmed.ncbi.nlm.nih.gov/8115311) | The paper is a relevant PK study for isradipine, but the provided evidence contains only qualitative descriptions and efficacy data, with no specific numeric PK parameter values (CL, V, t1/2, etc.) present. |
| `Laplanche_1991.pdf` | Laplanche R et al., Exploratory analysis of population phar…, Clinical pharmacology and t… (1991) | popPK | 8 | [10.1038/clpt.1991.102](https://doi.org/10.1038/clpt.1991.102) | [1830252](https://pubmed.ncbi.nlm.nih.gov/1830252) | The paper describes a population pharmacokinetic study of isradipine, but the provided evidence contains only qualitative descriptions of covariate effects without any specific numeric parameter values (e.g., CL, V, ka). |
| `Mellemkjaer_1992.pdf` | Mellemkjaer S et al., Isradipine dynamics and pharmacokinetic…, Pharmacology & toxicology (1992) | pd | 5 | [10.1111/j.1600-0773.1992.tb00489.x](https://doi.org/10.1111/j.1600-0773.1992.tb00489.x) | [1535129](https://www.ncbi.nlm.nih.gov/pubmed/1535129) | metadata signals extractable PD data (Emax) |
| `Venuto_2021.pdf` | Venuto CS et al., Isradipine plasma pharmacokinetics and…, Annals of clinical and tran… (2021) | pd | 5 | [10.1002/acn3.51300](https://doi.org/10.1002/acn3.51300) | [33460320](https://www.ncbi.nlm.nih.gov/pubmed/33460320) | metadata signals extractable PD data (exposure-response) |
| `Lee_2016.pdf` | Lee HA et al., Comparison of electrophysiological effe…, The Korean journal of physi… (2016) | pd | 4 | [10.4196/kjpp.2016.20.1.119](https://doi.org/10.4196/kjpp.2016.20.1.119) | [26807031](https://www.ncbi.nlm.nih.gov/pubmed/26807031) | metadata signals extractable PD data (IC50) |
| `López_1991.pdf` | López MG et al., (+)-isradipine but not (-)-Bay-K-8644 e…, British journal of pharmaco… (1991) | pd | 4 | [10.1111/j.1476-5381.1991.tb12168.x](https://doi.org/10.1111/j.1476-5381.1991.tb12168.x) | [1707711](https://www.ncbi.nlm.nih.gov/pubmed/1707711) | metadata signals extractable PD data (IC50) |
| `Ruck_1991.pdf` | Ruck A et al., Alpha- and beta-adrenoceptor regulation…, Biochemical pharmacology (1991) | pd | 4 | [10.1016/0006-2952(91)90681-t](https://doi.org/10.1016/0006-2952(91)90681-t) | [1648923](https://www.ncbi.nlm.nih.gov/pubmed/1648923) | metadata signals extractable PD data (EC50) |
| `Türkeş_2019.pdf` | Türkeş C et al., Anti-diabetic Properties of Calcium Cha…, Applied biochemistry and bi… (2019) | pd | 4 | [10.1007/s12010-019-03009-x](https://doi.org/10.1007/s12010-019-03009-x) | [30980289](https://www.ncbi.nlm.nih.gov/pubmed/30980289) | metadata signals extractable PD data (IC50) |
| `Uceda_1992.pdf` | Uceda G et al., Ca(2+)-activated K+ channels modulate m…, The Journal of physiology (1992) | pd | 4 | [10.1113/jphysiol.1992.sp019261](https://doi.org/10.1113/jphysiol.1992.sp019261) | [1282156](https://www.ncbi.nlm.nih.gov/pubmed/1282156) | metadata signals extractable PD data (EC50) |
| `Zhou_2014.pdf` | Zhou YT et al., Pharmacokinetic drug-drug interactions…, Therapeutics and clinical r… (2014) | pgx | 8 | [10.2147/TCRM.S55512](https://doi.org/10.2147/TCRM.S55512) | [24379677](https://www.ncbi.nlm.nih.gov/pubmed/24379677) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Backman_1999.pdf` | Backman JT et al., Mibefradil but not isradipine substanti…, Clinical pharmacology and t… (1999) | pgx | 7 | [10.1053/cp.1999.v66.a101461](https://doi.org/10.1053/cp.1999.v66.a101461) | [10546924](https://www.ncbi.nlm.nih.gov/pubmed/10546924) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-29T08:40:12.358734+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Akopov_1997 | not_relevant | 0 | 0 | The study investigates the effects of isradipine on carotid circulation in patients with varying degrees of arterial stenosis, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Al-Kofahi_2021 | irrelevant | 0 | 0 | The study focuses on tacrolimus pharmacokinetics and dosing, not isradipine. |
| PD | Al-Kofahi_2021 | not_relevant | 0 | 0 | The paper focuses on PK (clearance) modeling for tacrolimus, not isradipine, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Al_2014 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology and radioligand binding study where isradipine is used only as a radioligand probe, not as the subject drug for pharmacokinetic analysis. |
| PD | Al_2014 | not_relevant | 0 | 0 | The paper investigates the effects of anandamide on ion channels; isradipine is only mentioned as a radioligand for binding assays, not as the subject of a pharmacodynamic or exposure-response analysis. |
| popPK | Alptekin_2010 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of calcium channels where isradipine is used only as a radioligand for binding assays, not as the subject of pharmacokinetic analysis. |
| PD | Alptekin_2010 | not_relevant | 0 | 0 | The paper investigates the effect of AM404 on calcium channels and isradipine binding, but does not report a pharmacodynamic or exposure-response relationship for isradipine itself. |
| PGx | Backman_1999 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP3A4 inhibition) in a general population, not the effect of a specific gene variant or genotype on pharmacokinetics or pharmacodynamics. |
| popPK | Benquet_1999 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of calcium channels in cockroach neurons where isradipine is used only as a pharmacological probe, not a PK study. |
| PD | Benquet_1999 | not_relevant | 0 | 0 | The paper reports that isradipine (10 microM) had no effect on the current, providing no dose-response curve or numeric PD parameters for isradipine. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any quantitative pharmacokinetic parameters for isradipine. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain specific data, models, or numeric parameters for isradipine. |
| popPK | Chen_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neuronal injury where isradipine is used only as a pharmacological tool to modulate calcium channels, not as the subject of a pharmacokinetic analysis. |
| PD | Chen_2013 | not_relevant | 1 | 0 | The paper mentions isradipine only as a qualitative tool to test calcium channel involvement in an in vitro model, without reporting any dose-response data, concentration-effect curves, or numeric PD parameters. |
| popPK | Christensen_1993 | relevant | 8 | 0 | The paper is a relevant PK study for isradipine, but the provided evidence contains only qualitative descriptions and efficacy data, with no specific numeric PK parameter values (CL, V, t1/2, etc.) present. |
| popPK | Claing_1994 | irrelevant | 0 | 0 | The study is a pharmacological investigation of vascular responses to PAF in rats, using isradipine only as a mechanistic tool to block R-type calcium channels, and reports no pharmacokinetic parameters. |
| PD | Claing_1994 | not_relevant | 1 | 0 | The paper reports qualitative effects of isradipine on PAF-induced vasoactivity but provides no numeric concentration-effect data, dose-response curves, or PD parameters for isradipine. |
| popPK | Devoto_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine uptake inhibition, not a pharmacokinetic study, and isradipine is only a comparator agent. |
| PD | Devoto_1991 | not_relevant | 0 | 0 | The paper reports that isradipine was devoid of effect on dopamine uptake and does not provide any numeric PD parameters or concentration-effect data for isradipine. |
| PGx | Drocourt_2001 | not_relevant | 0 | 0 | The paper investigates the induction of CYP enzymes by isradipine in vitro but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Díaz-Araya_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antioxidant effects on lipid peroxidation in rat brain slices and does not report pharmacokinetic parameters for isradipine. |
| popPK | Gandía_1990 | irrelevant | 0 | 0 | The study is a mechanistic investigation of calcium channel sensitivity in adrenal glands, not a pharmacokinetic study, and reports no disposition parameters for isradipine. |
| popPK | Geer_1993 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology/pharmacology paper using isradipine as a channel antagonist probe, not a pharmacokinetic study. |
| PD | Geer_1993 | not_relevant | 0 | 0 | The paper reports that isradipine was ineffective (no effect) at a single concentration (10 microM) and does not provide any numeric PD parameters or dose-response curve for isradipine. |
| popPK | Himmel_2016 | irrelevant | 0 | 0 | The paper is a safety pharmacology study where isradipine is used only as a comparator agent, and no pharmacokinetic parameters for isradipine are reported. |
| PD | Himmel_2016 | not_relevant | 1 | 0 | The paper mentions isradipine only as a qualitative comparator in a behavioral assay, providing no numeric concentration-effect data, dose-response curve, or PD parameters for isradipine. |
| popPK | Hof_1989 | irrelevant | 0 | 0 | The study focuses on antivasoconstrictor pharmacodynamics and dose-response curves, not pharmacokinetic disposition parameters. |
| popPK | Hof_1991 | irrelevant | 0 | 0 | The paper is a mechanistic/review study on the pharmacodynamics of isradipine in atherosclerosis and does not report quantitative pharmacokinetic parameters. |
| PD | Hof_1991 | not_relevant | 2 | 0 | The text is a qualitative review/abstract discussing the mechanism of action and general dose-response characteristics (bell-shaped) without providing specific numeric PD parameters or extractable concentration-effect data. |
| popPK | Huang_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of risperidone, not the pharmacokinetics of isradipine. |
| PD | Huang_2024 | not_relevant | 0 | 0 | The paper reports a population PD model for risperidone, not isradipine. |
| popPK | Jean_1988 | irrelevant | 2 | 0 | The paper describes an analytical method for measuring isradipine and mentions its use in PK studies, but it does not report any quantitative pharmacokinetic parameter values (CL, V, etc.) for isradipine. |
| popPK | Kragie_1993 | irrelevant | 0 | 0 | The study is an in-vitro radioligand binding assay using isradipine as a probe ligand to measure calcium channel density, not a pharmacokinetic study reporting disposition parameters. |
| PD | Kragie_1993 | not_relevant | 4 | 3 | The paper reports dose-response curves for calcium, carbachol, and isoproterenol in hypothyroid rats, but does not report a pharmacodynamic or exposure-response relationship for the drug isradipine itself (which is used only as a radioligand for binding assays). |
| popPK | Köller_2021 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of indocyanine green (ICG), not isradipine. |
| PD | Köller_2021 | not_relevant | 0 | 0 | The paper focuses on a PBPK model for Indocyanine Green (ICG) to predict liver function and survival after hepatectomy; it does not contain any pharmacodynamic or exposure-response data for isradipine. |
| popPK | Laplanche_1991 | relevant | 8 | 0 | The paper describes a population pharmacokinetic study of isradipine, but the provided evidence contains only qualitative descriptions of covariate effects without any specific numeric parameter values (e.g., CL, V, ka). |
| popPK | Lee_2016 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Lee_2016 | not_relevant | 0 | 0 | The paper compares electrophysiological effects of calcium channel blockers but does not report specific exposure-response or dose-response PD parameters for isradipine. |
| PGx | Lemmer_2006 | not_relevant | 0 | 0 | The paper discusses circadian rhythms and chronopharmacology of isradipine but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Lillestłl_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of isradipine's relaxing effects on porcine coronary arteries, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Liu_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasoconstriction and endothelin levels, not a pharmacokinetic study reporting disposition parameters for isradipine. |
| popPK | López_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| popPK | Martinez-Guerrero_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on transporter inhibition where isradipine is identified as an inhibitor, not a pharmacokinetic study reporting disposition parameters for isradipine. |
| PD | Martinez-Guerrero_2025 | not_relevant | 0 | 0 | The paper identifies isradipine as an ENT1 inhibitor via screening but does not report any pharmacodynamic (exposure-response) or dose-response parameters for isradipine. |
| popPK | Melendez_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion channels in MDCK cells, not a pharmacokinetic study, and isradipine is used only as a probe agent. |
| popPK | Mellemkjaer_1992 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| PD | Mellemkjaer_1992 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and dynamics of isradipine in an isolated rabbit heart model, which typically involves measuring hemodynamic parameters (like contractility) without establishing a quantitative concentration-effect (PD) relationship with numeric parameters like Emax or EC50 in the context of systemic exposure-response modeling. |
| popPK | Miah_2026 | irrelevant | 0 | 0 | The paper is a scoping review on dietary effects on blood pressure and does not report pharmacokinetic parameters for isradipine. |
| PD | Miah_2026 | not_relevant | 0 | 0 | The paper is a scoping review of dietary interactions with antihypertensive drugs and does not report specific pharmacodynamic or exposure-response parameters for isradipine. |
| popPK | Minarovic_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding using felodipine, with isradipine used only as a competitive ligand, and reports no pharmacokinetic parameters. |
| PD | Minarovic_1998 | not_relevant | 0 | 0 | The paper reports binding affinity (Kd) and Hill coefficients for felodipine and isradipine in isolated membrane preparations, which are pharmacological binding parameters, not pharmacodynamic exposure-response or dose-response relationships for drug efficacy. |
| popPK | Moore_2021 | irrelevant | 0 | 0 | The paper is a physiological modeling study of calcium channel blockers in CKD and does not report pharmacokinetic parameters for isradipine. |
| PD | Moore_2021 | not_relevant | 0 | 0 | The paper uses a physiological simulation model (HumMod) to test hypotheses about CCB mechanisms in CKD and does not report experimental PK/PD data or numeric PD parameters for isradipine. |
| popPK | Morel_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium channel binding in rat aorta using isradipine as a radioligand, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Nagasamy_2021 | irrelevant | 2 | 0 | The study focuses on formulation development and comparative bioavailability (extent of absorption) in rabbits, but does not report quantitative compartmental PK parameters (CL, V, ka) for isradipine. |
| PD | Nagasamy_2021 | not_relevant | 0 | 0 | The paper focuses on physicochemical and pharmacokinetic characterization (release profile, absorption extent) but does not report any pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| PGx | Ortner_2017 | not_relevant | 0 | 0 | The paper investigates the pharmacological mechanism of isradipine on L-type calcium channels in Parkinson's disease models but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Ostacher_2014 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial for bipolar depression and does not report any pharmacokinetic parameters for isradipine. |
| popPK | Palmero_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial calcium transport where isradipine is used only as a pharmacological probe, not a PK study. |
| popPK | Perez-Reyes_2009 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study measuring channel block (IC50) and does not report any pharmacokinetic disposition parameters for isradipine. |
| popPK | Pirich_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet function and prostacyclin production, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Pizzi_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurotoxicity and does not report pharmacokinetic parameters for isradipine. |
| popPK | Poulat_1996 | irrelevant | 0 | 0 | The study is a mechanistic investigation of endothelin receptors in rat spinal cord where isradipine is used only as a tool compound (calcium channel inhibitor), not as the subject of pharmacokinetic analysis. |
| PD | Poulat_1996 | not_relevant | 0 | 0 | The paper studies endothelin receptor pharmacology in rat spinal cord; isradipine is only mentioned as a negative control (PN 200-110) with no PD parameters reported for it. |
| popPK | Qadri_2017 | irrelevant | 2 | 0 | The study focuses on transdermal formulation and pharmacodynamics (blood pressure reduction) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for isradipine. |
| PD | Qadri_2017 | not_relevant | 2 | 1 | The paper reports a qualitative antihypertensive effect (20% BP reduction) but lacks numeric concentration-effect data, dose-response curves, or specific PD parameters (Emax, EC50) required for extractable PD modeling. |
| popPK | Rameis_1993 | irrelevant | 1 | 0 | The paper is a general review of calcium antagonists that mentions isradipine only as an example of a second-generation agent without providing specific quantitative pharmacokinetic parameters for it. |
| PD | Rameis_1993 | not_relevant | 2 | 0 | The text is a general review of calcium antagonists that qualitatively mentions plasma-concentration-response relationships exist but provides no specific numeric PD parameters or data for isradipine. |
| popPK | Ruck_1991 | irrelevant | 0 | 0 | no_text gate: only 182 chars of text extracted (&lt; 400) |
| PD | Ruck_1991 | not_relevant | 0 | 0 | The paper focuses on adrenoceptor regulation in astrocytes and does not mention isradipine or report any pharmacodynamic parameters for it. |
| popPK | Schechter_1992 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats where isradipine is used as a comparator agent to test mechanism of action, and no pharmacokinetic parameters are reported. |
| PD | Schechter_1992 | not_relevant | 1 | 0 | The paper reports that isradipine had no effect on cathinone discrimination, providing no numeric PD parameters or exposure-response relationship for isradipine. |
| popPK | Schechter_1993 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment investigating cocaine discrimination in rats, not a pharmacokinetic study, and reports no disposition parameters for isradipine. |
| popPK | Schechter_1995 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment (drug discrimination) in rats and does not report pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Schröder_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of drug interactions in isolated guinea-pig atria and does not report any pharmacokinetic parameters for isradipine. |
| PD | Schröder_1993 | not_relevant | 4 | 2 | The paper describes concentration-response curves for isradipine in an in vitro model, but the provided text is an abstract that only qualitatively describes a "left-ward shift" without providing the specific numeric PD parameters (e.g., EC50, Emax) or the curve data itself. |
| popPK | Shenfield_1990 | relevant | 4 | 2 | The study reports basic PK metrics (Cmax, AUC) for isradipine but lacks the specific quantitative disposition parameters (CL, V, ka, half-life) required for population-PK modeling. |
| PD | Shenfield_1990 | not_relevant | 2 | 1 | The paper reports PK parameters and a qualitative statement that blood pressure control paralleled plasma concentrations, but it does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve. |
| popPK | Simonsen_1989 | irrelevant | 0 | 0 | The paper reports dose-response and adverse event data, not pharmacokinetic parameters. |
| popPK | Stokke_1992 | irrelevant | 0 | 0 | The study is an in-vitro binding assay using isradipine as a radioligand to characterize calcium channel interactions, not a pharmacokinetic study reporting disposition parameters. |
| PD | Stokke_1992 | not_relevant | 0 | 0 | The paper reports in vitro binding inhibition constants (K0.5) for amiloride and quinacrine on isradipine binding, which is a receptor binding study, not a pharmacodynamic exposure-response or dose-response analysis of isradipine's therapeutic effect. |
| popPK | Takenaka_1993 | irrelevant | 0 | 0 | The study is a mechanistic investigation of renal vasoconstriction using isradipine as a pharmacological tool, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Türkeş_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (PON1) and does not report pharmacokinetic disposition parameters for isradipine. |
| popPK | Türkeş_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of aldose reductase inhibition and does not report any pharmacokinetic parameters for isradipine. |
| popPK | Uceda_1992 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| PD | Uceda_1992 | not_relevant | 0 | 0 | The paper focuses on the physiological mechanism of Ca2+-activated K+ channels in cat chromaffin cells and does not mention isradipine or report any pharmacodynamic or exposure-response data for it. |
| popPK | Valera_2008 | irrelevant | 0 | 0 | The study is a mechanistic investigation of calcium channel up-regulation in rat vas deferens using isradipine only as a radioligand for binding assays, not as the subject drug for pharmacokinetic analysis. |
| PD | Valera_2008 | not_relevant | 3 | 2 | The paper reports qualitative changes in Emax and Bmax percentages for nifedipine exposure, but lacks numeric concentration-effect curves or specific PD parameters (like EC50) for isradipine. |
| popPK | Venuto_2021 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PD | Venuto_2021 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or data required to verify the presence of numeric PD parameters or an exposure-response analysis. |
| popPK | Verde_2002 | irrelevant | 0 | 0 | The study uses isradipine as a radioligand for binding assays to measure receptor density, not as a subject drug for pharmacokinetic parameter estimation. |
| PD | Verde_2002 | not_relevant | 3 | 2 | The paper reports changes in receptor density (Bmax) and maximal contraction (Emax) following chronic nifedipine treatment, but it does not provide a concentration-effect or dose-response curve for isradipine itself, nor does it derive standard PD parameters (like EC50) for isradipine's pharmacodynamic effect. |
| popPK | Viguier_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse drug reaction signatures and does not report any pharmacokinetic parameters for isradipine. |
| PD | Viguier_2024 | not_relevant | 0 | 0 | The paper analyzes adverse drug reaction signatures using pharmacovigilance data (VigiBase) and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for isradipine. |
| PGx | Wang_1999 | not_relevant | 0 | 0 | The paper reports in vitro inhibition of midazolam metabolism by isradipine, not a pharmacogenomic effect on isradipine's PK/PD. |
| popPK | Zaccara_2020 | irrelevant | 0 | 0 | The paper is a review of drug interactions and anticonvulsant properties, containing no pharmacokinetic parameters for isradipine. |
| PD | Zaccara_2020 | not_relevant | 1 | 0 | The paper is a qualitative review of cardiovascular drugs' effects on seizures and mentions isradipine as having anticonvulsant properties, but it does not provide any numeric PD parameters, concentration-effect curves, or dose-response data. |
| PGx | Zhou_2014 | not_relevant | 2 | 0 | The paper is a review of drug-drug interactions and only mentions pharmacogenetic status (CYP3A5) as a general factor without reporting specific quantitative PK/PD data for isradipine. |
| popPK | Zühlke_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium channel splice variants and isradipine binding (IC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The paper discusses various unrelated drugs (T3D-959, GM6, Nimodipine, etc.) and contains no mention of isradipine or its pharmacokinetic parameters. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The paper discusses T3D-959, not isradipine, and does not report specific numeric PD parameters for the queried drug. |
| popPK | van_1993 | irrelevant | 0 | 0 | The paper is a pharmacological review of calcium antagonists that does not report quantitative pharmacokinetic parameters for isradipine. |
| PD | van_1993 | not_relevant | 1 | 0 | The text is a qualitative review of calcium antagonist classes and does not provide specific numeric PD parameters or exposure-response data for isradipine. |
| PGx | Štěpánková_2016 | not_relevant | 0 | 0 | The paper investigates the effect of isradipine enantiomers on CYP450 expression and activity in vitro, rather than the effect of a human gene variant on isradipine's PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
