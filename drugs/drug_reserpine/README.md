<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;reserpine&quot;}]"></div>

# reserpine

- **generic name:** reserpine
- **ATC codes:** `C02AA02`, `C02LA01`, `C02LA51`, `C02LA71`
- **DrugBank:** [DB00206](https://go.drugbank.com/drugs/DB00206) · **PubChem:** [CID 5770](https://pubchem.ncbi.nlm.nih.gov/compound/5770)
- **molar mass:** 608.6787 g/mol (C33H40N2O9) — DrugBank
- **groups:** approved, withdrawn

## About

**Description.** An alkaloid found in the roots of Rauwolfia serpentina and R. vomitoria. Reserpine inhibits the uptake of norepinephrine into storage vesicles resulting in depletion of catecholamines and serotonin from central and peripheral axon terminals. It has been used as an antihypertensive and an antipsychotic as well as a research tool, but its adverse effects limit its clinical use.

The FDA withdrew its approval for the use of all oral dosage form drug products containing more than 1 mg of reserpine.[L43942]

**Indication.** For the treatment of hypertension

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 21:13 | 45:54 | 0/0/0 | 0/1/0 | 0/0/0 | 248,689/17,476 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 3/9 | 11/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.644). The first reading is what the record holds.">cross-check: disputed</span> | [Alfosea-Cuadrado_2024_MA](drugs/drug_reserpine/pd_Alfosea_Cuadrado_2024_MA.md) | monoamines ← reserpine · indirect response — drug inhibits the loss of monoamines | — | Alfosea-Cuadrado GM et al., Population Pharmacokinetic-Pharmacodyna…, Pharmaceutics (2024) | [10.3390/pharmaceutics16081101](https://doi.org/10.3390/pharmaceutics16081101) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=reserpine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor/substrate, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor/substrate, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP3A5` inducer, `SLC22A1` inhibitor, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A5` inducer | DrugBank actor |
| excretion | bile duct | <sub>“…inactive compounds. It is slowly excreted via the urine and feces.…”</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor, `SLC22A2` substrate | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: BIRC5 (binder), SLC18A1 (inhibitor), SLC18A2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 568 matched, 131 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_16 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Darchen_1989.pdf` | Darchen F et al., Reserpine binding to chromaffin granule…, Biochemistry (1989) | pd | 5 | [10.1021/bi00430a040](https://doi.org/10.1021/bi00430a040) | [2719928](https://www.ncbi.nlm.nih.gov/pubmed/2719928) | metadata signals extractable PD data (EC50) |
| `Shenker_1983.pdf` | Shenker A et al., Enhanced serotonin-stimulated adenylate…, Life sciences (1983) | pd | 5 | [10.1016/0024-3205(83)90763-4](https://doi.org/10.1016/0024-3205(83)90763-4) | [6573550](https://www.ncbi.nlm.nih.gov/pubmed/6573550) | metadata signals extractable PD data (EC50) |
| `Viglione_1992.pdf` | Viglione PN et al., Comparison of acute effects of mitoxant…, General pharmacology (1992) | pd | 5 | [10.1016/0306-3623(92)90240-k](https://doi.org/10.1016/0306-3623(92)90240-k) | [1426931](https://www.ncbi.nlm.nih.gov/pubmed/1426931) | metadata signals extractable PD data (Emax) |
| `Barthelmebs_1994.pdf` | Barthelmebs M et al., Vascular effects of loop diuretics: an…, Naunyn-Schmiedeberg's archi… (1994) | pd | 4 | [10.1007/BF00169839](https://doi.org/10.1007/BF00169839) | [8170505](https://www.ncbi.nlm.nih.gov/pubmed/8170505) | metadata signals extractable PD data (EC50) |
| `Blaschke_1980.pdf` | Blaschke M et al., [Effect of reserpine on monoamine uptak…, Acta biologica et medica Ge… (1980) | pd | 4 | not captured | [7245989](https://www.ncbi.nlm.nih.gov/pubmed/7245989) | metadata signals extractable PD data (EC50) |
| `Giuliani_1989.pdf` | Giuliani S et al., Modulatory action of galanin on respons…, European journal of pharmac… (1989) | pd | 4 | [10.1016/0014-2999(89)90399-3](https://doi.org/10.1016/0014-2999(89)90399-3) | [2472969](https://www.ncbi.nlm.nih.gov/pubmed/2472969) | metadata signals extractable PD data (EC50) |
| `Korth_1987.pdf` | Korth M et al., Muscarinic receptors mediate negative a…, British journal of pharmaco… (1987) | pd | 4 | [10.1111/j.1476-5381.1987.tb16827.x](https://doi.org/10.1111/j.1476-5381.1987.tb16827.x) | [2434180](https://www.ncbi.nlm.nih.gov/pubmed/2434180) | metadata signals extractable PD data (EC50) |
| `Kramer_1989.pdf` | Kramer HK et al., The effect of nicotine on catecholamine…, Brain research (1989) | pd | 4 | [10.1016/0006-8993(89)91677-6](https://doi.org/10.1016/0006-8993(89)91677-6) | [2605521](https://www.ncbi.nlm.nih.gov/pubmed/2605521) | metadata signals extractable PD data (IC50) |
| `Muller_1990.pdf` | Muller B et al., Involvement of rolipram-sensitive cycli…, Journal of cardiovascular p… (1990) | pd | 4 | [10.1097/00005344-199011000-00016](https://doi.org/10.1097/00005344-199011000-00016) | [1703603](https://www.ncbi.nlm.nih.gov/pubmed/1703603) | metadata signals extractable PD data (EC50) |
| `Nakanishi_1995.pdf` | Nakanishi N et al., Vesicular monoamine uptake by digitonin…, Journal of biochemistry (1995) | pd | 4 | [10.1093/oxfordjournals.jbchem.a124905](https://doi.org/10.1093/oxfordjournals.jbchem.a124905) | [8543561](https://www.ncbi.nlm.nih.gov/pubmed/8543561) | metadata signals extractable PD data (EC50) |
| `Redfern_1993.pdf` | Redfern WS et al., Modulation of central noradrenergic fun…, British journal of pharmaco… (1993) | pd | 4 | [10.1111/j.1476-5381.1993.tb12835.x](https://doi.org/10.1111/j.1476-5381.1993.tb12835.x) | [8095421](https://www.ncbi.nlm.nih.gov/pubmed/8095421) | metadata signals extractable PD data (EC50) |
| `Rubinstein_1990.pdf` | Rubinstein M et al., Adaptive mechanisms of striatal D1 and…, The Journal of pharmacology… (1990) | pd | 4 | not captured | [2138223](https://www.ncbi.nlm.nih.gov/pubmed/2138223) | metadata signals extractable PD data (EC50) |
| `Ruiz-Ortega_1995.pdf` | Ruiz-Ortega JA et al., The stimulatory effect of clonidine thr…, Naunyn-Schmiedeberg's archi… (1995) | pd | 4 | [10.1007/BF00176764](https://doi.org/10.1007/BF00176764) | [7477433](https://www.ncbi.nlm.nih.gov/pubmed/7477433) | metadata signals extractable PD data (Emax) |
| `Sharif_1994.pdf` | Sharif SI, Dopamine contracts the rat isolated sem…, Pharmacology (1994) | pd | 4 | [10.1159/000139196](https://doi.org/10.1159/000139196) | [7912441](https://www.ncbi.nlm.nih.gov/pubmed/7912441) | metadata signals extractable PD data (EC50) |
| `Wang_1993.pdf` | Wang YX et al., Functional integrity of the central and…, The Journal of pharmacology… (1993) | pd | 4 | not captured | [7682612](https://www.ncbi.nlm.nih.gov/pubmed/7682612) | metadata signals extractable PD data (Emax) |
| `Wang_2001.pdf` | Wang E et al., Quantitative distinctions of active sit…, Chemical research in toxico… (2001) | pgx | 7 | [10.1021/tx010125x](https://doi.org/10.1021/tx010125x) | [11743742](https://www.ncbi.nlm.nih.gov/pubmed/11743742) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-27T21:02:18.064913+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abdelfatah_2015 | not_relevant | 2 | 5 | The paper investigates the cytotoxicity of reserpine in cancer cell lines with specific genetic alterations (EGFR, p53, ABCB1), which is a pharmacodynamic effect in a preclinical model, but it does not report on human pharmacogenomic effects on standard PK/PD parameters (like AUC, Cmax, or clinical response metrics) in a pharmacogenomic context. |
| popPK | Atack_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of JNJ-40255293, using reserpine only as a comparator agent to induce hypolocomotion, with no PK parameters reported for reserpine. |
| popPK | Bagdy_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of serotonin release in rat brain slices where reserpine is used only as a pretreatment agent, not as the subject of pharmacokinetic analysis. |
| PD | Bagdy_1998 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for the 5-HT3 agonist 2-methyl-5-HT, not for reserpine, which is only used as a pretreatment to test vesicular storage. |
| popPK | Barthelmebs_1994 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| PD | Barthelmebs_1994 | not_relevant | 0 | 0 | The paper focuses on the vascular effects of loop diuretics in rats and does not mention reserpine or provide any pharmacodynamic data for it. |
| PD | Baru_1975 | not_relevant | 1 | 0 | The text is a qualitative summary of a study on the neurochemical basis of depression using reserpine as a model, with no mention of specific exposure-response data, dose-response curves, or numeric PD parameters. |
| PGx | Bessho_2006 | not_relevant | 0 | 0 | The paper studies resistance to CPT-11/SN-38 in lung cancer and uses reserpine only as a tool compound to inhibit ABCG2, not as the subject of pharmacogenomic analysis. |
| popPK | Blaschke_1980 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |
| popPK | Brown_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of dopamine mechanisms in guinea-pig tissues where reserpine is used only as a tool compound to block vesicular uptake, not as the subject of a pharmacokinetic analysis. |
| PD | Brown_1990 | not_relevant | 0 | 0 | The paper investigates the mechanisms of dopamine's action and mentions reserpine only as a tool to block vesicular uptake, providing no exposure-response or dose-response data for reserpine itself. |
| PGx | Burkert_2008 | not_relevant | 0 | 0 | The paper uses reserpine as a tool to define a cell population (Side Population) based on dye efflux, but does not report pharmacogenomic effects on reserpine's PK or PD parameters. |
| PGx | Chen_2014_2 | not_relevant | 2 | 5 | The paper reports an association between FBN1 variants and blood pressure control status in patients taking compound reserpine, but does not report specific pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, specific BP reduction magnitude) attributable to the genotype. |
| popPK | Clark_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of 3-PPP enantiomers at dopamine receptors, using reserpine only as a pretreatment agent, and reports no pharmacokinetic parameters for reserpine. |
| PD | Clark_1991 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of 3-PPP enantiomers; reserpine is only mentioned as a pretreatment agent to deplete dopamine, and no exposure-response or dose-response relationship for reserpine is reported. |
| popPK | Cubeddu_1989 | irrelevant | 0 | 0 | The study is a mechanistic investigation of dopamine release using reserpine only as a depleting agent, with no pharmacokinetic parameters reported. |
| PD | Cubeddu_1989 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of phorbol esters and dopamine receptors; reserpine is only mentioned as a pretreatment to deplete endogenous dopamine, and no exposure-response or dose-response relationship for reserpine is reported. |
| PD | DEREVENCO_1964 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to assess a PD relationship for reserpine. |
| popPK | Darchen_1989 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | Darchen_1989 | not_relevant | 0 | 0 | The paper focuses on in vitro binding kinetics and transporter conformations, not pharmacodynamic exposure-response or dose-effect relationships in a biological system. |
| popPK | Dorigo_1991 | irrelevant | 0 | 0 | The study investigates the inotropic mechanism of milrinone analogues in guinea-pig atria, using reserpine only as a pretreatment agent, and contains no pharmacokinetic parameters for reserpine. |
| popPK | Eckert_1976 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of noradrenaline distribution in rabbit aortic strips where reserpine is used only as a pretreatment agent, not as the subject drug for PK parameter estimation. |
| PGx | Englund_2014 | not_relevant | 0 | 0 | The paper investigates the CYP450 inhibitory properties of reserpine as a transporter inhibitor, not the effect of a gene variant on reserpine's PK/PD. |
| PD | FROMMEL_1957 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to extract a pharmacodynamic relationship. |
| PD | Ferguson_1984 | not_relevant | 0 | 0 | The paper focuses on beta-adrenergic receptor selectivity in rabbit hearts; reserpine is only mentioned as a pretreatment that did not prevent the effects of other drugs, with no PD or exposure-response analysis for reserpine itself. |
| popPK | Fitzgerald_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of monoamine release in rat brain slices where reserpine is used only as a pretreatment agent to deplete vesicular stores, not as the subject of pharmacokinetic analysis. |
| PD | Fitzgerald_1993 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of MDMA and amphetamine, not reserpine; reserpine is only used as a pretreatment to deplete vesicular stores. |
| popPK | Fleig_1986 | irrelevant | 0 | 0 | The study focuses on the distribution of propranolol in rabbit iris, with reserpine used only as a pretreatment agent, and no PK parameters for reserpine are reported. |
| popPK | Floran_2005 | irrelevant | 0 | 0 | The study is a mechanistic neuropharmacology investigation where reserpine is used only as a tool to deplete dopamine, not as the subject of pharmacokinetic analysis. |
| PD | Floran_2005 | not_relevant | 0 | 0 | The paper uses reserpine only as a tool to deplete dopamine in a neurophysiological study of GABA release; it does not report a pharmacodynamic or exposure-response relationship for reserpine itself. |
| popPK | Floreani_2004 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of carteolol's intrinsic sympathomimetic activity, using reserpine only as a pretreatment to deplete catecholamines, and reports no pharmacokinetic parameters for reserpine. |
| PD | Floreani_2004 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of carteolol, not reserpine; reserpine is only used to treat rats to deplete catecholamines. |
| PD | Gao_2022 | not_relevant | 0 | 0 | The paper uses reserpine only to induce a disease model (osteoporosis with kidney-yin deficiency) and focuses on identifying active ingredients of a traditional formulation via UPLC-MS and docking, without reporting any exposure-response or dose-response analysis for reserpine. |
| popPK | García-Vallejo_1994 | irrelevant | 0 | 0 | The study is a pharmacological investigation of the jaw-opening reflex in rats where reserpine is used only as a pretreatment agent to deplete catecholamines, not as the subject of pharmacokinetic analysis. |
| popPK | Gardier_1991 | irrelevant | 0 | 0 | The study is a mechanistic investigation of muscarinic receptor binding and airway smooth muscle contraction, not a pharmacokinetic study, and reports no disposition parameters for reserpine. |
| PD | Gardier_1991 | not_relevant | 3 | 2 | The paper reports a qualitative decrease in peak tension after reserpine treatment but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve for reserpine itself. |
| popPK | Giuliani_1989 | irrelevant | 0 | 0 | no_text gate: only 132 chars of text extracted (&lt; 400) |
| PD | Giuliani_1989 | not_relevant | 0 | 0 | The paper investigates the modulatory action of galanin on sensory nerve responses and does not mention reserpine or report any pharmacodynamic parameters for it. |
| popPK | Gobbi_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of serotonin release using reserpine only as a diagnostic agent, with no pharmacokinetic parameters reported. |
| PD | Gobbi_1993 | not_relevant | 0 | 0 | The paper investigates the effect of tetanus toxin on serotonin release and mentions reserpine only as a control for Ca2+-independent release, providing no exposure-response or dose-response data for reserpine itself. |
| popPK | Gomes_2001 | irrelevant | 0 | 0 | The paper is a toxicology study on a cobra venom toxin where reserpine is used only as a pretreatment agent to test hemorrhagic effects, with no pharmacokinetic parameters reported. |
| PD | Gomes_2001 | not_relevant | 0 | 0 | The paper reports the isolation and characterization of a snake venom toxin, not a pharmacodynamic or exposure-response analysis for the drug reserpine. |
| PD | Gonzalez_2009 | not_relevant | 0 | 0 | The paper investigates cannabinoid agonists (ACEA, WIN-55,212-2) and mentions reserpine only as a tool to deplete dopamine to test D2 receptor involvement, without reporting any pharmacodynamic parameters or exposure-response relationship for reserpine itself. |
| PGx | Granado_2011 | not_relevant | 0 | 0 | The paper studies the neurotoxicity of methamphetamine and MDMA in D2 receptor knockout mice; reserpine is only used as a control agent to rule out hyperthermia as the sole mechanism, and no pharmacogenomic effect on reserpine's PK/PD is reported. |
| PGx | Guay_2010 | not_relevant | 0 | 0 | The paper is a review of tetrabenazine and does not report pharmacogenomic effects on reserpine. |
| popPK | Hawthorn_1982 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of beta-adrenoceptor binding and supersensitivity, not a pharmacokinetic study, and reports no disposition parameters for reserpine. |
| popPK | Henseling_1976 | irrelevant | 0 | 0 | The study investigates the distribution of noradrenaline in rabbit aortic strips where reserpine is used only as a pretreatment agent, not as the subject drug for PK parameter estimation. |
| popPK | Henseling_1976_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of noradrenaline distribution in rabbit aortic strips where reserpine is used only as a pretreatment agent, not as the subject drug for PK parameter estimation. |
| popPK | Holtz_2026 | irrelevant | 0 | 0 | The paper is a synthetic biology study on biosensor engineering for monoterpene indole alkaloid production in yeast and does not report any pharmacokinetic parameters for reserpine. |
| PD | Holtz_2026 | not_relevant | 0 | 0 | The paper focuses on metabolic engineering and biosensor development for monoterpene indole alkaloid production, not on the pharmacodynamics or exposure-response relationships of reserpine in a biological system. |
| PGx | Hong_2016 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of reserpine (epigenetic regulation of Nrf2) in cell lines, not the effect of genetic variants on reserpine's pharmacokinetics or pharmacodynamics. |
| PGx | Hu_2020 | not_relevant | 0 | 0 | The paper uses reserpine to induce a depression model in mice to study hepatocellular carcinoma metastasis; it does not report pharmacogenomic effects on reserpine's PK or PD parameters. |
| popPK | Huang_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tetramethylpyrazine (TMP), using reserpine only as an agent to induce the disease model, and does not report PK parameters for reserpine. |
| PGx | Ingram_2013 | not_relevant | 0 | 0 | The paper investigates radiation resistance in medulloblastoma and uses reserpine as an ABC transporter inhibitor to test radiation sensitization, but does not report pharmacogenomic effects on reserpine's PK or PD parameters. |
| popPK | Inoue_1991 | irrelevant | 0 | 0 | The study focuses on in vivo receptor binding kinetics of radioligands in reserpine-treated mice, not on the pharmacokinetic disposition parameters (CL, V, etc.) of reserpine itself. |
| PD | Katreen_2026 | not_relevant | 0 | 0 | The paper uses reserpine only to induce a disease model and evaluates the therapeutic effects of other agents (hesperidin, levodopa) without reporting any exposure-response or dose-response parameters for reserpine itself. |
| PGx | Kawanabe_2006 | not_relevant | 0 | 0 | The paper uses reserpine as a tool compound to inhibit ABCG2 in stem cells, not to study the pharmacokinetics or pharmacodynamics of reserpine itself. |
| popPK | Kim_2001 | irrelevant | 0 | 0 | The study focuses on the antidepressant-like effects of p-synephrine stereoisomers, using reserpine only as a tool to induce hypothermia, and does not report any pharmacokinetic parameters for reserpine. |
| PD | Kim_2001 | not_relevant | 0 | 0 | The paper reports pharmacodynamic parameters (EC50, Ki) for p-synephrine stereoisomers, not for reserpine; reserpine is only used as a tool drug to induce hypothermia. |
| popPK | Kimura_1994 | irrelevant | 0 | 0 | The study investigates the cardiac pharmacodynamics of higenamine and aconitine in isolated murine atria, using reserpine only as a pretreatment agent without reporting any pharmacokinetic parameters for reserpine. |
| PD | Kimura_1994 | not_relevant | 0 | 0 | The paper investigates the PD of higenamine and aconitine; reserpine is only mentioned as a pretreatment that did not alter higenamine's effect, with no PD parameters reported for reserpine itself. |
| PGx | Konstandi_2006 | not_relevant | 0 | 0 | The paper investigates the regulation of CYP1A2 expression by adrenergic pathways using reserpine as a tool to deplete catecholamines, rather than reporting a pharmacogenomic effect of a gene variant on reserpine's PK or PD. |
| PGx | Konstandi_2008 | not_relevant | 0 | 0 | The paper investigates the role of catecholamines in stress-induced CYP1A2 modulation using reserpine as a pharmacological tool for catecholamine depletion, rather than reporting a pharmacogenomic effect of a gene variant on reserpine's PK or PD. |
| popPK | Korth_1987 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| PD | Korth_1987 | not_relevant | 0 | 0 | The paper focuses on muscarinic receptor pharmacology in myocardium and does not report any pharmacodynamic or exposure-response data for reserpine. |
| PD | Kramer_1989 | not_relevant | 1 | 0 | The paper reports an IC50 for nicotine, not reserpine, and only qualitatively describes reserpine's effect without providing numeric PD parameters or a dose-response curve for reserpine. |
| PGx | Kubota_2010 | not_relevant | 0 | 0 | The paper investigates the role of ABCG2 in oxidative stress resistance using reserpine as an inhibitor, but does not report pharmacogenomic effects on reserpine's PK or PD parameters. |
| PD | LA_1958 | not_relevant | 0 | 0 | The paper focuses on reserpine-free extracts, not the pharmacodynamics of reserpine itself. |
| PD | LECOMTE_1964 | not_relevant | 0 | 0 | The paper discusses cystamine, not reserpine, and does not report any pharmacodynamic parameters for the target drug. |
| PGx | Li_2026 | not_relevant | 0 | 0 | The paper reports reserpine as an ABCG2 inhibitor in a computational/cell-based study, not a pharmacogenomic effect of a gene variant on reserpine's PK/PD. |
| PGx | Luo_2012 | not_relevant | 0 | 0 | The paper uses reserpine only as a tool to identify side population cells in ovarian cancer and does not report pharmacogenomic effects on reserpine's PK or PD parameters. |
| popPK | Madaras-Kelly_2002 | irrelevant | 0 | 0 | The study focuses on fluoroquinolone resistance in Streptococcus pneumoniae, using reserpine only as an efflux pump inhibitor adjunct, and does not report pharmacokinetic parameters for reserpine. |
| popPK | Malmström_1997 | irrelevant | 0 | 0 | The study focuses on Neuropeptide Y receptor mechanisms and reports PK parameters for the antagonist BIBP 3226, while reserpine is only used as a pretreatment agent to deplete catecholamines. |
| popPK | Malmström_1997_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of BIBP 3226, using reserpine only as a pretreatment agent to deplete catecholamines in the animal model. |
| popPK | Mansouri_2008 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of PDE3 inhibitors in isolated rat atria, where reserpine is used only as a pretreatment agent, and no pharmacokinetic parameters for reserpine are reported. |
| PD | Mansouri_2008 | not_relevant | 0 | 0 | The paper studies PDE3 inhibitors in isolated rat atria; reserpine is only used to treat rats prior to isolation and no PD or exposure-response relationship for reserpine is reported. |
| popPK | Martins_2005 | irrelevant | 0 | 0 | The study investigates the mechanism of action of ropivacaine on smooth muscle, using reserpine only as a depleting agent to modify the experimental model, and reports no pharmacokinetic parameters for reserpine. |
| PD | Martins_2005 | not_relevant | 0 | 0 | The paper investigates the effect of ropivacaine on norepinephrine reuptake using reserpine only as a depleting agent, and does not report a pharmacodynamic or exposure-response relationship for reserpine itself. |
| PGx | Martsinkevich_1977 | not_relevant | 0 | 0 | The paper examines serotonin metabolism in children with mental retardation and mentions reserpine loading, but does not report a pharmacogenomic effect (gene variant) on reserpine PK or PD parameters. |
| PD | Meltzer_1981 | not_relevant | 1 | 0 | The paper mentions reserpine only in the context of qualitative behavioral/pharmacological paradigms (inhibition by nomifensine, enhancement by lithium) without providing any numeric concentration-effect data, dose-response curves, or PD parameters for reserpine itself. |
| popPK | Menargues_1990 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of alpha 2-adrenoceptors in rats where reserpine is used only as a depleting agent, with no pharmacokinetic parameters reported. |
| PD | Menargues_1990 | not_relevant | 3 | 2 | The paper reports qualitative modulation of mydriasis by reserpine and dose-response shifts for clonidine, but does not provide a concentration-effect or dose-response analysis for reserpine itself with extractable numeric PD parameters. |
| popPK | Morcillo_1984 | irrelevant | 0 | 0 | The study is a pharmacological investigation of tyramine responsiveness in isolated lung strips where reserpine is used only as a depleting agent, not as the subject of pharmacokinetic analysis. |
| popPK | Muller_1990 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| PD | Muller_1990 | not_relevant | 0 | 0 | The paper focuses on the mechanism of rolipram in cardiac contraction and does not report any pharmacodynamic or exposure-response data for reserpine. |
| popPK | Nagai_1985 | irrelevant | 0 | 0 | The study investigates the mechanism of action of DN-1417 on reserpine-induced seizures and brain monoamine levels, not the pharmacokinetic parameters (CL, V, etc.) of reserpine. |
| PD | Nagai_1985 | not_relevant | 3 | 2 | The paper reports a single fixed dose of reserpine (2 mg/kg) causing a specific effect (EC50 reduction to 55-77%), but does not provide a dose-response curve or concentration-effect relationship for reserpine itself, nor does it report numeric PD parameters (like Emax/EC50 for reserpine) derived from a PK/PD model. |
| popPK | Nakanishi_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay of vesicular amine transport in PC12 cells and does not report pharmacokinetic parameters for reserpine. |
| PD | Nakanishi_1995 | not_relevant | 3 | 2 | The paper reports a single-point qualitative observation that 500 nM reserpine completely blocked uptake, but does not provide a dose-response curve, Emax, or EC50 for reserpine. |
| popPK | Nakanishi_1995_2 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on catecholamine transport in PC12 cells, and reserpine is only mentioned as a comparator for inhibition profiles, with no PK parameters reported. |
| PD | Nakanishi_1995_2 | not_relevant | 0 | 0 | The paper studies cAMP modulation of monoamine transport in PC12 cells and only mentions reserpine as a qualitative comparison for the time-course profile, providing no PD parameters or exposure-response data for reserpine. |
| popPK | Obata_1999 | irrelevant | 0 | 0 | The study is a mechanistic investigation of dopamine oxidation and hydroxyl radical formation, not a pharmacokinetic study, and reports no disposition parameters for reserpine. |
| popPK | Obata_2000 | irrelevant | 0 | 0 | The study is a mechanistic investigation of adenosine metabolism and enzyme activity in rat hearts, not a pharmacokinetic study reporting disposition parameters for reserpine. |
| popPK | Pan_1989 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of cocaine and amphetamine, using reserpine only as a depleting agent to modulate neurotransmitter levels, with no pharmacokinetic parameters reported. |
| PD | Pan_1989 | not_relevant | 0 | 0 | The paper reports PD parameters for cocaine and amphetamine, but reserpine is used only as a depleting agent to test the mechanism of action, and no exposure-response or dose-response relationship for reserpine itself is reported. |
| PD | QUEVAUVILLER_1963 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| popPK | Qi_1992 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of adrenoceptor effects in mice where reserpine is used only as a tool to induce ptosis, with no pharmacokinetic parameters reported. |
| popPK | Quartermain_1983 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment investigating memory retrieval in mice, with no pharmacokinetic parameters or quantitative disposition data for reserpine reported. |
| PD | REUSE_1961 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to extract a PD relationship. |
| PD | REUSE_1962 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding reserpine or any other drug. |
| popPK | Redfern_1993 | irrelevant | 0 | 0 | no_text gate: only 60 chars of text extracted (&lt; 400) |
| PD | Redfern_1993 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding reserpine or any other drug. |
| PGx | Ritz_1999 | not_relevant | 0 | 0 | The paper studies P-glycoprotein-mediated resistance to okadaic acid in cell lines, using reserpine only as a chemosensitizer, and does not report pharmacogenomic effects on reserpine's PK or PD parameters. |
| popPK | Rubinstein_1990 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Rubinstein_1990 | not_relevant | 0 | 0 | The paper investigates receptor adaptive mechanisms (binding/functional changes) following reserpine treatment, not a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters. |
| PD | Rudd_2005 | not_relevant | 0 | 0 | The paper reports that reserpine did not inhibit serotonin uptake, but provides no numeric PD parameters (e.g., IC50, Emax) or dose-response curve for reserpine. |
| popPK | Ruiz-Ortega_1995 | irrelevant | 0 | 0 | The study is a neurophysiological investigation of clonidine's mechanism of action where reserpine is used only as a pretreatment agent to modulate serotonin levels, with no pharmacokinetic parameters reported. |
| PD | Ruiz-Ortega_1995 | not_relevant | 3 | 2 | The paper reports a dose-response relationship for clonidine (ED50, Emax), but reserpine is only used as a pretreatment agent to modulate the effect, and no specific PD parameters (e.g., EC50, Emax) are reported for reserpine itself. |
| popPK | Rukachaisirikul_2017 | irrelevant | 0 | 0 | The paper is a phytochemical study on alkaloid isolation and structure elucidation, reporting no pharmacokinetic parameters for reserpine. |
| PD | Rücker_1978 | not_relevant | 1 | 0 | The paper describes qualitative pharmacological effects (sedative, antihypertensive) and an LD50, but does not report any numeric exposure-response or dose-response parameters (e.g., EC50, Emax) for reserpine or valeranone. |
| PD | SCHIPA_1956 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to assess PD relationships. |
| PD | Schmidt_1980 | not_relevant | 3 | 0 | The paper describes qualitative dose-response observations (non-parallel curves, increased toxicity) but provides no numeric PD parameters, concentration-effect data, or derivable curves in the text. |
| PGx | Schuetz_1996 | not_relevant | 0 | 0 | The paper reports drug-induced upregulation of P-gp and CYP3A in cell lines, not the effect of a genetic variant on reserpine PK/PD. |
| popPK | Schultz_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and antiplasmodial activity of reserpine derivatives, containing no pharmacokinetic data. |
| PD | Schultz_2024 | not_relevant | 3 | 2 | The paper reports in vitro EC50 values for reserpine derivatives, which are pharmacological potency metrics, but does not report a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response relationship, or dose-response curve with derivable PD parameters (like Emax, slope, or E0) in the context of drug disposition. |
| popPK | Schömig_1987 | irrelevant | 0 | 0 | The paper is a mechanistic simulation of neuronal noradrenaline transport where reserpine is used only as a pretreatment condition, not as the subject drug for pharmacokinetic analysis. |
| popPK | Sharif_1994 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Sharif_1994 | not_relevant | 0 | 0 | The paper investigates the mechanism of dopamine action on rat seminal vesicles and does not mention reserpine or report any exposure-response or dose-response data for it. |
| popPK | Shenker_1983 | irrelevant | 0 | 0 | The study is a mechanistic receptor assay where reserpine is used only as a pretreatment agent to deplete serotonin, with no pharmacokinetic parameters reported. |
| PD | Simionescu_1981 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to extract a pharmacodynamic relationship. |
| PGx | Spengler_2009 | not_relevant | 0 | 0 | The paper describes a method for detecting P-glycoprotein activity using reserpine as an inhibitor, but does not report pharmacogenomic effects on reserpine's PK or PD parameters. |
| popPK | Trendelenburg_1984 | irrelevant | 0 | 0 | The study focuses on the extraneuronal metabolism of noradrenaline in rat hearts, using reserpine only as a pretreatment agent to deplete catecholamines, and does not report any pharmacokinetic parameters for reserpine. |
| PGx | Tsinkalovsky_2007 | not_relevant | 0 | 0 | The paper uses reserpine as a tool compound to inhibit the ABCG2 transporter for cell sorting, not to study the pharmacokinetics or pharmacodynamics of reserpine itself in relation to genetic variants. |
| popPK | Vander_1995 | irrelevant | 0 | 0 | The study is an in-vitro autoradiography investigation of a radioligand where reserpine is used only as a competing agent, not as the subject of pharmacokinetic analysis. |
| PD | Vander_1995 | not_relevant | 0 | 0 | The paper describes in vitro binding properties of a radioligand and notes that reserpine inhibits binding at a single concentration (1 µM), but it does not report a dose-response curve, Emax, IC50, or any quantitative pharmacodynamic model for reserpine. |
| popPK | Viglione_1992 | irrelevant | 0 | 0 | no_text gate: only 79 chars of text extracted (&lt; 400) |
| PD | Viglione_1992 | not_relevant | 0 | 0 | The paper investigates mitoxantrone and doxorubicin, not reserpine. |
| popPK | Wang_1993 | irrelevant | 0 | 0 | no_text gate: only 188 chars of text extracted (&lt; 400) |
| PD | Wang_1993 | not_relevant | 0 | 0 | The paper investigates the effects of diphenyleneiodonium, not reserpine, and does not report any pharmacodynamic parameters for reserpine. |
| PGx | Wang_2001 | not_relevant | 0 | 0 | The paper discusses reserpine as a specific inhibitor of P-glycoprotein in vitro, but does not report any pharmacogenomic effects (gene variants) on reserpine's PK or PD parameters. |
| PGx | Wang_2017 | not_relevant | 0 | 0 | The paper investigates the mechanism of PpIX accumulation in glioma stem cells and uses reserpine only as a negative control to rule out ABCG2 transporter involvement; it does not report a pharmacogenomic effect on reserpine's PK or PD parameters. |
| PGx | Wierdl_2003 | not_relevant | 0 | 0 | The paper focuses on CPT-11 resistance mechanisms involving ABCG2 and carboxylesterases, using reserpine only as an inhibitor to test ABCG2 function, not as the subject of pharmacogenomic analysis. |
| popPK | Williams_1983 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of receptor supersensitivity and does not report any pharmacokinetic parameters for reserpine. |
| popPK | Wu_2004 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study for SARS coronavirus where reserpine is a test compound, not a pharmacokinetic study. |
| popPK | Wölfel_1988 | irrelevant | 0 | 0 | The study focuses on in-vitro 5-HT transport kinetics in rabbit platelets, with reserpine used only as a pretreatment agent to deplete stores, and no pharmacokinetic parameters for reserpine are reported. |
| PD | Wölfel_1988 | not_relevant | 0 | 0 | The paper studies the effect of reserpine pretreatment on 5-HT uptake kinetics in rabbit platelets, finding no change in kinetic parameters (Km, Vmax), and does not report a concentration- or dose-response relationship for reserpine itself. |
| popPK | Wölfel_1992 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of the 5-HT transporter using reserpine only as a pretreatment agent, and it does not report any pharmacokinetic parameters for reserpine. |
| popPK | Xia_2022 | irrelevant | 0 | 0 | The study focuses on tulathromycin PK/PD and resistance mechanisms, using reserpine only as an efflux pump inhibitor for MIC testing, not as the subject drug for PK parameter estimation. |
| PGx | Yaguchi_2018 | not_relevant | 0 | 0 | The paper investigates the mechanism of estrogen-induced cell proliferation in cancer cells using reserpine as a tool compound, not the pharmacokinetics or pharmacodynamics of reserpine itself. |
| PGx | Zhanel_2003 | not_relevant | 0 | 0 | The paper studies bacterial resistance mechanisms in Streptococcus pneumoniae, not human pharmacogenomics or PK/PD parameters of reserpine. |
| popPK | Zhang_2018 | irrelevant | 0 | 0 | The study focuses on the PK/PD of danofloxacin, and reserpine is used only as an efflux pump inhibitor (comparator agent) to test resistance mechanisms, not as the subject drug for PK parameter estimation. |
| PD | Zhang_2018 | not_relevant | 0 | 0 | The paper focuses on danofloxacin PK/PD and resistance; reserpine is only mentioned as a negative control for efflux pumps with no PD or exposure-response analysis performed. |
| popPK | Zhang_2018_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of danofloxacin, and reserpine is used only as an efflux pump inhibitor in susceptibility testing, not as the subject drug for PK parameter estimation. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | Reserpine is used only as a tool to induce depression-like behavior, and the study focuses on the neuroprotective effects of Erxian decoction without reporting any pharmacokinetic parameters for reserpine. |
| PD | Zhang_2020 | not_relevant | 0 | 0 | The paper investigates the effects of Erxian decoction (EXD) and does not report a pharmacodynamic or exposure-response relationship for reserpine; reserpine is only used as a tool to induce a depression-like state. |
| PD | Zhi_2020 | not_relevant | 1 | 0 | The paper reports in vitro IC50 for a MAGL inhibitor and qualitative in vivo behavioral effects of reserpine, but does not provide a pharmacodynamic model or numeric exposure-response parameters for reserpine itself. |
| PGx | Zong_2019 | not_relevant | 0 | 0 | The study investigates the effect of a Traditional Chinese Medicine formula (Si-Ni-San) on CYP450 activity and depression markers in rats, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of reserpine. |
| popPK | de_2003 | irrelevant | 0 | 0 | The study is a pharmacological investigation of smooth muscle contractions where reserpine is used only as a tool to induce sympathectomy, not as the subject of pharmacokinetic analysis. |
| PD | de_2003 | not_relevant | 0 | 0 | The paper investigates the pharmacological interaction between angiotensin II and cholinergic transmission in tissues from rats pretreated with reserpine, but it does not report a pharmacodynamic (exposure-response) relationship for reserpine itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
