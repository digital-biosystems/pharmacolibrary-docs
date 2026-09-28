<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03A&quot;,&quot;href&quot;:&quot;atc/C03A.md&quot;},{&quot;label&quot;:&quot;cyclothiazide&quot;}]"></div>

# cyclothiazide

- **generic name:** cyclothiazide
- **ATC codes:** `C03AA09`, `C03AB09`
- **DrugBank:** [DB00606](https://go.drugbank.com/drugs/DB00606) · **PubChem:** [CID 2910](https://pubchem.ncbi.nlm.nih.gov/compound/2910)
- **molar mass:** 389.878 g/mol (C14H16ClN3O4S2) — DrugBank
- **groups:** approved

## About

**Description.** As a diuretic, cyclothiazide inhibits active chloride reabsorption at the early distal tubule via the Na-Cl cotransporter, resulting in an increase in the excretion of sodium, chloride, and water. Thiazides like cyclothiazide also inhibit sodium ion transport across the renal tubular epithelium through binding to the thiazide sensitive sodium-chloride transporter. This results in an increase in potassium excretion via the sodium-potassium exchange mechanism. The antihypertensive mechanism of cyclothiazide is less well understood although it may be mediated through its action on carbonic anhydrases in the smooth muscle or through its action on the large-conductance calcium-activated potassium (KCa) channel, also found in the smooth muscle. Cyclothiazide is indicated as adjunctive therapy in edema associated with congestive heart failure, hepatic cirrhosis, and corticosteroid and estrogen therapy. It is also indicated in the management of hypertension either as the sole therapeutic agent or to enhance the effectiveness of other antihypertensive drugs in the more severe forms of hypertension.

**Indication.** Cyclothiazide is indicated as adjunctive therapy in edema associated with congestive heart failure, hepatic cirrhosis, and corticosteroid and estrogen therapy. It is also indicated in the management of hypertension either as the sole therapeutic agent or to enhance the effectiveness of other antihypertensive drugs in the more severe forms of hypertension.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 04:05 | 27:47 | 0/0/0 | 0/0/0 | 0/0/0 | 122,930/6,629 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 4/2 | 6/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cyclothiazide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CA1 (inhibitor), CA2 (inhibitor), FXYD2 (inhibitor), SFRP4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 308 matched, 99 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_15 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nooney_1995.pdf` | Nooney JM et al., Inhibition by cyclothiazide of neuronal…, British journal of pharmaco… (1995) | pd | 5 | [10.1111/j.1476-5381.1995.tb17188.x](https://doi.org/10.1111/j.1476-5381.1995.tb17188.x) | [7735691](https://www.ncbi.nlm.nih.gov/pubmed/7735691) | metadata signals extractable PD data (EC50) |
| `Aleu_1999.pdf` | Aleu J et al., Guanine nucleotides, including GMP, ant…, Journal of neurochemistry (1999) | pd | 4 | [10.1046/j.1471-4159.1999.0722170.x](https://doi.org/10.1046/j.1471-4159.1999.0722170.x) | [10217299](https://www.ncbi.nlm.nih.gov/pubmed/10217299) | metadata signals extractable PD data (EC50) |
| `Barnes-Davies_1995.pdf` | Barnes-Davies M et al., Pre- and postsynaptic glutamate recepto…, The Journal of physiology (1995) | pd | 4 | [10.1113/jphysiol.1995.sp020974](https://doi.org/10.1113/jphysiol.1995.sp020974) | [8568678](https://www.ncbi.nlm.nih.gov/pubmed/8568678) | metadata signals extractable PD data (EC50) |
| `Dorofeeva_2005.pdf` | Dorofeeva NA et al., Action of extracellular divalent cation…, Journal of neurochemistry (2005) | pd | 4 | [10.1111/j.1471-4159.2005.03533.x](https://doi.org/10.1111/j.1471-4159.2005.03533.x) | [16269006](https://www.ncbi.nlm.nih.gov/pubmed/16269006) | metadata signals extractable PD data (EC50) |
| `Fukushima_2014.pdf` | Fukushima K et al., Characterization of Human Hippocampal N…, Journal of biomolecular scr… (2014) | pd | 4 | [10.1177/1087057114541149](https://doi.org/10.1177/1087057114541149) | [24980597](https://www.ncbi.nlm.nih.gov/pubmed/24980597) | metadata signals extractable PD data (EC50) |
| `Hennegriff_1997.pdf` | Hennegriff M et al., Stable expression of recombinant AMPA r…, Journal of neurochemistry (1997) | pd | 4 | [10.1046/j.1471-4159.1997.68062424.x](https://doi.org/10.1046/j.1471-4159.1997.68062424.x) | [9166736](https://www.ncbi.nlm.nih.gov/pubmed/9166736) | metadata signals extractable PD data (EC50) |
| `Häusser_1997.pdf` | Häusser M et al., Dendritic and somatic glutamate recepto…, The Journal of physiology (1997) | pd | 4 | [10.1111/j.1469-7793.1997.077bo.x](https://doi.org/10.1111/j.1469-7793.1997.077bo.x) | [9174996](https://www.ncbi.nlm.nih.gov/pubmed/9174996) | metadata signals extractable PD data (IC50) |
| `Johansen_1995.pdf` | Johansen TH et al., Interactions among GYKI-52466, cyclothi…, Molecular pharmacology (1995) | pd | 4 | not captured | [7476926](https://www.ncbi.nlm.nih.gov/pubmed/7476926) | metadata signals extractable PD data (IC50) |
| `Kessler_1998.pdf` | Kessler M et al., Regional preferences of AMPA receptor m…, Brain research (1998) | pd | 4 | [10.1016/s0006-8993(97)01315-2](https://doi.org/10.1016/s0006-8993(97)01315-2) | [9479060](https://www.ncbi.nlm.nih.gov/pubmed/9479060) | metadata signals extractable PD data (EC50) |
| `Kessler_2006.pdf` | Kessler M et al., Use of [3H]fluorowillardiine to study p…, Brain research (2006) | pd | 4 | [10.1016/j.brainres.2005.09.024](https://doi.org/10.1016/j.brainres.2005.09.024) | [16256076](https://www.ncbi.nlm.nih.gov/pubmed/16256076) | metadata signals extractable PD data (EC50) |
| `Lukasiewicz_1997.pdf` | Lukasiewicz PD et al., AMPA-preferring receptors mediate excit…, Journal of neurophysiology (1997) | pd | 4 | [10.1152/jn.1997.77.1.57](https://doi.org/10.1152/jn.1997.77.1.57) | [9120596](https://www.ncbi.nlm.nih.gov/pubmed/9120596) | metadata signals extractable PD data (IC50) |
| `Mitchell_2007.pdf` | Mitchell NA et al., Targeting AMPA receptor gating processe…, Biophysical journal (2007) | pd | 4 | [10.1529/biophysj.106.095091](https://doi.org/10.1529/biophysj.106.095091) | [17208968](https://www.ncbi.nlm.nih.gov/pubmed/17208968) | metadata signals extractable PD data (EC50) |
| `Mørkve_2002.pdf` | Mørkve SH et al., Functional characteristics of non-NMDA-…, The Journal of physiology (2002) | pd | 4 | [10.1113/jphysiol.2002.020305](https://doi.org/10.1113/jphysiol.2002.020305) | [12096058](https://www.ncbi.nlm.nih.gov/pubmed/12096058) | metadata signals extractable PD data (EC50) |
| `Petitet_1995.pdf` | Petitet F et al., Effects of non-NMDA receptor modulators…, Journal of neurochemistry (1995) | pd | 4 | [10.1046/j.1471-4159.1995.64031410.x](https://doi.org/10.1046/j.1471-4159.1995.64031410.x) | [7532212](https://www.ncbi.nlm.nih.gov/pubmed/7532212) | metadata signals extractable PD data (EC50) |
| `Zorumski_1996.pdf` | Zorumski CF et al., Modulation of excitatory synaptic trans…, The Journal of physiology (1996) | pd | 4 | [10.1113/jphysiol.1996.sp021506](https://doi.org/10.1113/jphysiol.1996.sp021506) | [8842005](https://www.ncbi.nlm.nih.gov/pubmed/8842005) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-28T04:00:36.616326+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akaike_1997 | irrelevant | 0 | 0 | The paper is an electrophysiological study of glutamate receptors where cyclothiazide is used as a pharmacological tool to modulate receptor desensitization, not a pharmacokinetic study. |
| popPK | Aleu_1999 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Aleu_1999 | not_relevant | 0 | 0 | The paper investigates the effect of guanine nucleotides on kainate responses and does not mention cyclothiazide or report any exposure-response or dose-response data for it. |
| popPK | Arai_1995 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study on AMPA receptors where cyclothiazide is used only as a pharmacological tool to characterize receptor kinetics, not as a subject for pharmacokinetic analysis. |
| PD | Arai_1995 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for thiocyanate, not cyclothiazide; cyclothiazide is only mentioned qualitatively as an enhancer of AMPA receptor responses. |
| popPK | Arai_2000 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology and binding study of AMPA receptor modulators, not a pharmacokinetic study, and reports no disposition parameters for cyclothiazide. |
| popPK | Arai_2002 | irrelevant | 0 | 0 | The paper is a mechanistic study of AMPA receptor biophysics and does not report any pharmacokinetic parameters for cyclothiazide. |
| popPK | Barnes-Davies_1995 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | Barnes-Davies_1995 | not_relevant | 0 | 0 | The paper focuses on the physiological characterization of glutamate receptors in brain slices and does not report any pharmacodynamic or exposure-response analysis for cyclothiazide. |
| PD | Barygin_2016 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50) for perampanel, not cyclothiazide; cyclothiazide is only used as a modulator to alter perampanel's potency. |
| popPK | DAmico_2010 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of glutamate release where cyclothiazide is used as a tool compound to prevent receptor desensitization, not as the subject of pharmacokinetic analysis. |
| PD | DAmico_2010 | not_relevant | 0 | 0 | The paper reports dose-response parameters for AMPA and ATP, but cyclothiazide is only used as a fixed-concentration tool compound (10 μM) to prevent desensitization, with no exposure-response or dose-response analysis performed for it. |
| popPK | Dai_2001 | irrelevant | 0 | 0 | The paper is an electrophysiological study of AMPA receptors where cyclothiazide is used as a mechanistic tool to block desensitization, not a pharmacokinetic study reporting disposition parameters. |
| PD | Dai_2001 | not_relevant | 3 | 2 | The paper reports qualitative potentiation factors (e.g., 6.8-fold) for cyclothiazide but lacks a formal concentration-effect curve or numeric PD parameters (EC50/Emax) for the drug itself. |
| PD | Desai_1995 | not_relevant | 2 | 0 | The paper reports IC50 values for AMPA receptor antagonists (LY293558, GYKI 53655) in the presence and absence of cyclothiazide, but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve for cyclothiazide itself. |
| popPK | Dorofeeva_2005 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of AMPA receptor modulation by divalent cations, not a pharmacokinetic study, and cyclothiazide is used only as a pharmacological tool. |
| PD | Dron_2021 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50, Hill coefficient) for phenytoin, not cyclothiazide; cyclothiazide is only mentioned as a modulator of phenytoin's action without specific numeric PD data. |
| popPK | Duan_2000 | irrelevant | 0 | 0 | The paper is an electrophysiology study on crab neurons where cyclothiazide is used only as a pharmacological probe, with no pharmacokinetic parameters reported. |
| PD | Duan_2000 | not_relevant | 0 | 0 | The paper reports a dose-response curve for glutamate (EC50 0.15 mM), but cyclothiazide is only mentioned qualitatively as having no effect on desensitization, with no numeric PD parameters or exposure-response relationship provided for it. |
| popPK | Frega_2012 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological/toxicity assay using cyclothiazide as a pharmacological modulator, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Fukushima_2014 | irrelevant | 0 | 0 | no_text gate: only 167 chars of text extracted (&lt; 400) |
| PD | Fukushima_2014 | not_relevant | 0 | 0 | The paper focuses on characterizing human hippocampal neural stem/progenitor cells and their application to ionotropic glutamate receptor assays; it does not report pharmacodynamic or exposure-response data for cyclothiazide. |
| PD | Fukushima_2020 | not_relevant | 0 | 0 | Cyclothiazide is used as a positive modulator to elicit AMPA currents in the assay, but the paper does not report a concentration-effect relationship or PD parameters for cyclothiazide itself. |
| popPK | Hald_2009 | irrelevant | 0 | 0 | The paper is a structural and electrophysiological study of cyclothiazide's mechanism of action on ionotropic glutamate receptors, containing no pharmacokinetic or disposition parameters. |
| popPK | Hennegriff_1997 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Hennegriff_1997 | not_relevant | 0 | 0 | The paper focuses on the stable expression of AMPA receptor subunits and binding affinities, with no mention of cyclothiazide or any pharmacodynamic/exposure-response analysis. |
| popPK | Hoyt_1995 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of receptor modulation and does not report any pharmacokinetic parameters for cyclothiazide. |
| PD | Häusser_1997 | not_relevant | 0 | 0 | The paper focuses on the biophysical properties of glutamate receptors in Purkinje cells and does not report pharmacodynamic or exposure-response relationships for cyclothiazide. |
| popPK | Kertész_2004 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of AMPA receptor modulation in the retina, reporting IC50/EC50 values rather than pharmacokinetic disposition parameters. |
| popPK | Kessler_1998 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| PD | Kessler_1998 | not_relevant | 0 | 0 | The paper focuses on agonist binding autoradiography to determine regional preferences of AMPA receptor modulators, not on pharmacodynamic exposure-response or dose-response relationships for cyclothiazide. |
| popPK | Kessler_2000 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of receptor binding and splice variant preference, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Kessler_2006 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PD | Kessler_2006 | not_relevant | 0 | 0 | The paper focuses on the radioligand binding properties of AMPA receptor allosteric modulators using [3H]fluorowillardiine and does not report pharmacodynamic exposure-response or dose-response relationships for cyclothiazide. |
| popPK | Kinney_1997 | irrelevant | 0 | 0 | The paper is an electrophysiological study of synaptic mechanisms in rat cerebellum, not a pharmacokinetic study, and contains no disposition parameters for cyclothiazide. |
| PD | Kreitzer_2009 | not_relevant | 3 | 2 | The paper describes a qualitative change in the glutamate dose-response curve (broadening) in the presence of cyclothiazide but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect model for cyclothiazide itself. |
| PD | Lavrov_2020 | not_relevant | 2 | 1 | The text mentions a "dose-response" advantage for a specific compound (Compound 4) but does not provide numeric PD parameters, concentration-effect curves, or a formal PK/PD model for cyclothiazide itself, which is only mentioned as a binding mode reference. |
| popPK | Limon_2007 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study of AMPA receptors in Xenopus oocytes where cyclothiazide is used as a modulator, not a pharmacokinetic study of the drug itself. |
| PD | Limon_2007 | not_relevant | 1 | 0 | The paper mentions cyclothiazide only as a co-applied agent to enhance current amplitude in a qualitative comparison of receptor variants, without reporting specific concentration-effect data or numeric PD parameters for cyclothiazide itself. |
| popPK | Lindén_2001 | irrelevant | 0 | 0 | The paper is a receptor binding study where cyclothiazide is used as a competitive inhibitor to characterize a radioligand, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Lockhart_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of BDNF expression in neuronal cultures, not a pharmacokinetic study, and cyclothiazide is used only as a comparator agent. |
| PD | Lukasiewicz_1997 | not_relevant | 0 | 0 | The paper focuses on the physiological role of AMPA receptors in retinal ganglion cells and does not report pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for cyclothiazide. |
| PGx | McMahon_1999 | not_relevant | 0 | 0 | The paper investigates the modulation of glutamate receptors by nitric oxide and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of cyclothiazide. |
| popPK | Mitchell_2007 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Mitchell_2007 | not_relevant | 0 | 0 | The paper focuses on AMPA receptor gating mechanisms and allosteric modulators, with no mention of cyclothiazide or any pharmacodynamic/exposure-response analysis. |
| popPK | Mørkve_2002 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Mørkve_2002 | not_relevant | 0 | 0 | The paper focuses on the functional characteristics of glutamate receptors in retinal cells and does not mention cyclothiazide or report any pharmacodynamic or exposure-response data for it. |
| popPK | Neher_2001 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study using cyclothiazide as a tool to inhibit receptor desensitization, and it does not report pharmacokinetic parameters (CL, V, etc.) for the drug. |
| PGx | Neher_2001 | not_relevant | 0 | 0 | The paper describes a method for estimating transmitter release rates using cyclothiazide as a tool to prevent receptor desensitization, but it does not report any pharmacogenomic effects (gene variants) on the PK or PD of cyclothiazide. |
| popPK | Noda_2000 | irrelevant | 0 | 0 | The paper is an electrophysiological study of glutamate receptors in microglia where cyclothiazide is used as a pharmacological tool to block desensitization, not as the subject of a pharmacokinetic analysis. |
| PD | Noda_2000 | not_relevant | 0 | 0 | The paper reports electrophysiological characterization of glutamate receptors (KA/AMPA) and mentions cyclothiazide as a potentiator, but does not provide a concentration-effect curve or numeric PD parameters (e.g., EC50, Emax) for cyclothiazide itself. |
| popPK | Nooney_1995 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study examining the mechanism of action of cyclothiazide on nicotinic receptors, not a pharmacokinetic study. |
| popPK | Ohno_1998 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on neurotoxicity in cell cultures and does not report any pharmacokinetic parameters for cyclothiazide. |
| popPK | Palma_2002 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study using cyclothiazide as a pharmacological tool to modulate AMPA receptors, not a pharmacokinetic study. |
| PD | Palma_2002 | not_relevant | 1 | 0 | The paper reports a qualitative observation that cyclothiazide potentiates AMPA currents in Xenopus oocytes, but it does not provide a concentration-effect curve, dose-response data, or numeric PD parameters (e.g., EC50, Emax) for cyclothiazide. |
| popPK | Partin_1994 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study on AMPA receptor modulation and does not report any pharmacokinetic parameters for cyclothiazide. |
| popPK | Patneau_1993 | irrelevant | 0 | 0 | The paper is an electrophysiological study of cyclothiazide's mechanism of action on glutamate receptors, not a pharmacokinetic study, and reports no disposition parameters. |
| PD | Patneau_1993 | not_relevant | 4 | 3 | The paper reports electrophysiological effects of cyclothiazide (potentiation of peak current, block of desensitization) and mentions fitting dose-response curves for agonists, but it does not provide numeric PD parameters (e.g., Emax, EC50) for cyclothiazide itself, nor does it present a concentration-effect curve for cyclothiazide in the provided text. |
| popPK | Pellerin_2005 | irrelevant | 0 | 0 | The paper is a mechanistic study on astrocyte energetics and AMPA receptor modulation, not a pharmacokinetic study, and contains no PK parameters for cyclothiazide. |
| popPK | Phillips_2002 | irrelevant | 0 | 0 | The paper is a mechanistic study of AMPA receptor modulation and structure-activity relationships, not a pharmacokinetic study, and contains no disposition parameters for cyclothiazide. |
| popPK | Puia_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment investigating receptor modulation and toxicity, not a pharmacokinetic study, and reports no disposition parameters for cyclothiazide. |
| popPK | Rammes_1996 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study focusing on receptor kinetics and interactions, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Salonen_1982 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing antihypertensive effects and does not report pharmacokinetic parameters such as clearance or volume of distribution. |
| PD | Salonen_1982 | not_relevant | 1 | 0 | The paper reports clinical efficacy comparisons at fixed doses but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters like Emax or EC50. |
| popPK | Shen_1999 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study of AMPA receptors in carp retina where cyclothiazide is used as a modulator, not a pharmacokinetic study. |
| popPK | Sinclair_2003 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on AMPA receptor agonists where cyclothiazide is used only as a co-administered tool compound, with no pharmacokinetic parameters reported. |
| popPK | Szárics_2008 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic binding study of cyclothiazide to GABA receptors and does not report any pharmacokinetic disposition parameters. |
| popPK | Takatsuru_2007 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study using cyclothiazide as a pharmacological tool to modulate AMPA receptors, not a pharmacokinetic study reporting disposition parameters for the drug. |
| popPK | Telgkamp_1996 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of AMPA receptor modulation in astrocytes and does not report any pharmacokinetic parameters for cyclothiazide. |
| PD | Telgkamp_1996 | not_relevant | 0 | 0 | The paper studies the pharmacology of nickel and kainate on AMPA receptors; cyclothiazide is only mentioned qualitatively as a potentiator to confirm receptor subtype, with no concentration-effect data or PD parameters reported for it. |
| popPK | Thomas_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mGlu5 receptors where cyclothiazide is used as a desensitization inhibitor, not as a subject drug for pharmacokinetic analysis. |
| PD | Thomas_2000 | not_relevant | 1 | 0 | The paper reports pharmacological characterization of mGlu5 receptors using cyclothiazide as a desensitization inhibitor, but does not provide a concentration-effect curve or numeric PD parameters (e.g., EC50, Emax) for cyclothiazide itself. |
| popPK | Wall_2002 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study using cyclothiazide as a pharmacological tool to modulate receptor desensitization, not a pharmacokinetic study reporting disposition parameters. |
| PD | Wimmer_1977 | not_relevant | 1 | 0 | The text describes a clinical trial comparing fixed-dose combinations for efficacy and side effects but does not report any concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Yamada_1998 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of IDRA21's effect on synaptic currents, with cyclothiazide serving only as a comparator agent, and contains no pharmacokinetic parameters. |
| popPK | Zhang_2002 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study on zinc modulation of AMPA receptors, using cyclothiazide only as a pharmacological tool to block desensitization, with no pharmacokinetic parameters reported. |
| PD | Zhang_2002 | not_relevant | 0 | 0 | The paper reports dose-response parameters for zinc and glutamate, but cyclothiazide is used only as a tool compound to block desensitization, and no exposure-response or dose-response relationship for cyclothiazide itself is reported. |
| popPK | Zorumski_1996 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PD | Zorumski_1996 | not_relevant | 0 | 0 | The paper focuses on glutamate modulation of synaptic transmission and does not mention cyclothiazide or report any exposure-response or dose-response data for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
