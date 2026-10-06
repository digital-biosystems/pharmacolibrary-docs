<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;ifenprodil&quot;}]"></div>

# ifenprodil

- **generic name:** ifenprodil
- **ATC codes:** `C04AX28`
- **DrugBank:** [DB08954](https://go.drugbank.com/drugs/DB08954) · **PubChem:** [CID 3689](https://pubchem.ncbi.nlm.nih.gov/compound/3689)
- **molar mass:** 325.4446 g/mol (C21H27NO2) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Ifenprodil is a vasodilator and alpha blocker that was used as a peripheral vasodilator for circulatory disorders. It has been withdrawn and is no longer in clinical use, though it remains of research interest.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5991156](https://www.wikidata.org/wiki/Q5991156) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:17 | 5:22 | 0/0/0 | 3/0/0 | 0/0/0 | 158,087/4,651 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 3/5 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Delaney_2012_EPSC](drugs/drug_ifenprodil/pd_Delaney_2012_EPSC.md) | AMPA-receptor mediated EPSCs ← ifenprodil · direct Emax (saturable) effect | — | Delaney AJ et al., Ifenprodil reduces excitatory synaptic…, Journal of neurophysiology (2012) | [10.1152/jn.01066.2011](https://doi.org/10.1152/jn.01066.2011) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Gibson_2003_PI](drugs/drug_ifenprodil/pd_Gibson_2003_PI.md) | neurotoxicity ← ifenprodil · inhibition effect | — | Gibson DA et al., Polyamines contribute to ethanol withdr…, Alcoholism, clinical and ex… (2003) | [10.1097/01.ALC.0000075824.10502.DD](https://doi.org/10.1097/01.ALC.0000075824.10502.DD) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Thapaliya_2021_NMDA_receptor_mediated_currents](drugs/drug_ifenprodil/pd_Thapaliya_2021_NMDA_receptor_mediated_currents.md) | NMDA receptor-mediated currents ← ifenprodil · direct sigmoid Emax (Hill) effect | — | Thapaliya ER et al., Photochemical control of drug efficacy…, ChemPhotoChem (2021) | [10.1002/cptc.202000240](https://doi.org/10.1002/cptc.202000240) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ifenprodil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CELA1 (inhibitor), GRIN1 (target), GRIN2B (target), KCNJ3 (target), KCNJ5 (target), KCNJ6 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 164 matched, 122 returned
- **screened:** 4  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_19 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Legendre_1991.pdf` | Legendre P et al., Ifenprodil blocks N-methyl-D-aspartate…, Molecular pharmacology (1991) | pd | 5 | not captured | [1715017](https://www.ncbi.nlm.nih.gov/pubmed/1715017) | metadata signals extractable PD data (IC50) |
| `Abe_1993.pdf` | Abe K et al., Spermine promotes the survival of prima…, Brain research (1993) | pd | 4 | [10.1016/0006-8993(93)91759-l](https://doi.org/10.1016/0006-8993(93)91759-l) | [8481782](https://www.ncbi.nlm.nih.gov/pubmed/8481782) | metadata signals extractable PD data (concentration-effect) |
| `Buemi_2016.pdf` | Buemi MR et al., Structure-guided design of new indoles…, Bioorganic & medicinal chem… (2016) | pd | 4 | [10.1016/j.bmc.2016.02.021](https://doi.org/10.1016/j.bmc.2016.02.021) | [26912202](https://www.ncbi.nlm.nih.gov/pubmed/26912202) | metadata signals extractable PD data (IC50) |
| `Cahusac_2005.pdf` | Cahusac PM et al., Are unconventional NMDA receptors invol…, Neuroscience (2005) | pd | 4 | [10.1016/j.neuroscience.2005.03.018](https://doi.org/10.1016/j.neuroscience.2005.03.018) | [15908129](https://www.ncbi.nlm.nih.gov/pubmed/15908129) | metadata signals extractable PD data (IC50) |
| `Gavazzo_2008.pdf` | Gavazzo P et al., Molecular determinants of Pb2+ interact…, Neurochemistry international (2008) | pd | 4 | [10.1016/j.neuint.2007.07.003](https://doi.org/10.1016/j.neuint.2007.07.003) | [17706324](https://www.ncbi.nlm.nih.gov/pubmed/17706324) | metadata signals extractable PD data (IC50) |
| `Grimwood_1996.pdf` | Grimwood S et al., Modulation of 45Ca2+ influx into cells…, Journal of neurochemistry (1996) | pd | 4 | [10.1046/j.1471-4159.1996.66062589.x](https://doi.org/10.1046/j.1471-4159.1996.66062589.x) | [8632186](https://www.ncbi.nlm.nih.gov/pubmed/8632186) | metadata signals extractable PD data (IC50) |
| `Hwang_2023.pdf` | Hwang S et al., Inhibitory effects of N-methyl-D-aspart…, Naunyn-Schmiedeberg's archi… (2023) | pd | 4 | [10.1007/s00210-023-02521-6](https://doi.org/10.1007/s00210-023-02521-6) | [37166464](https://www.ncbi.nlm.nih.gov/pubmed/37166464) | metadata signals extractable PD data (IC50) |
| `Höfner_1996.pdf` | Höfner G et al., Characterisation of [3H]MK-801 binding…, Journal of receptor and sig… (1996) | pd | 4 | [10.3109/10799899609039953](https://doi.org/10.3109/10799899609039953) | [8968963](https://www.ncbi.nlm.nih.gov/pubmed/8968963) | metadata signals extractable PD data (EC50) |
| `Karbon_1993.pdf` | Karbon EW et al., NPC 16377, a potent and selective sigma…, The Journal of pharmacology… (1993) | pd | 4 | not captured | [8388461](https://www.ncbi.nlm.nih.gov/pubmed/8388461) | metadata signals extractable PD data (IC50) |
| `Kato_1999.pdf` | Kato K et al., TAK-147, an acetylcholinesterase inhibi…, Neuroscience letters (1999) | pd | 4 | [10.1016/s0304-3940(98)00943-4](https://doi.org/10.1016/s0304-3940(98)00943-4) | [10027686](https://www.ncbi.nlm.nih.gov/pubmed/10027686) | metadata signals extractable PD data (EC50) |
| `Kew_1996.pdf` | Kew JN et al., A novel mechanism of activity-dependent…, The Journal of physiology (1996) | pd | 4 | [10.1113/jphysiol.1996.sp021807](https://doi.org/10.1113/jphysiol.1996.sp021807) | [9003561](https://www.ncbi.nlm.nih.gov/pubmed/9003561) | metadata signals extractable PD data (IC50) |
| `Le_1994.pdf` | Le Bourdellès B et al., Cloning, functional coexpression, and p…, Journal of neurochemistry (1994) | pd | 4 | [10.1046/j.1471-4159.1994.62062091.x](https://doi.org/10.1046/j.1471-4159.1994.62062091.x) | [8189218](https://www.ncbi.nlm.nih.gov/pubmed/8189218) | metadata signals extractable PD data (EC50) |
| `Marvizón_1994.pdf` | Marvizón JC et al., [3H]dizocilpine association kinetics di…, Journal of neurochemistry (1994) | pd | 4 | [10.1046/j.1471-4159.1994.63030963.x](https://doi.org/10.1046/j.1471-4159.1994.63030963.x) | [7914227](https://www.ncbi.nlm.nih.gov/pubmed/7914227) | metadata signals extractable PD data (IC50) |
| `Misra_2000.pdf` | Misra C et al., Identification of subunits contributing…, The Journal of physiology (2000) | pd | 4 | [10.1111/j.1469-7793.2000.00147.x](https://doi.org/10.1111/j.1469-7793.2000.00147.x) | [10747189](https://www.ncbi.nlm.nih.gov/pubmed/10747189) | metadata signals extractable PD data (IC50) |
| `Priestley_1994.pdf` | Priestley T et al., Subtypes of NMDA receptor in neurones c…, Neuroreport (1994) | pd | 4 | [10.1097/00001756-199409080-00019](https://doi.org/10.1097/00001756-199409080-00019) | [7827326](https://www.ncbi.nlm.nih.gov/pubmed/7827326) | metadata signals extractable PD data (IC50) |
| `Priestley_1995.pdf` | Priestley T et al., Pharmacological properties of recombina…, Molecular pharmacology (1995) | pd | 4 | not captured | [7476914](https://www.ncbi.nlm.nih.gov/pubmed/7476914) | metadata signals extractable PD data (IC50) |
| `Steele_1990.pdf` | Steele JE et al., Spermidine enhancement of [3H]MK-801 bi…, European journal of pharmac… (1990) | pd | 4 | [10.1016/0922-4106(90)90023-q](https://doi.org/10.1016/0922-4106(90)90023-q) | [1979277](https://www.ncbi.nlm.nih.gov/pubmed/1979277) | metadata signals extractable PD data (IC50) |
| `Temme_2018.pdf` | Temme L et al., Comparative Pharmacological Study of Co…, ChemMedChem (2018) | pd | 4 | [10.1002/cmdc.201700810](https://doi.org/10.1002/cmdc.201700810) | [29377520](https://www.ncbi.nlm.nih.gov/pubmed/29377520) | metadata signals extractable PD data (IC50) |
| `Woodward_1992.pdf` | Woodward JJ et al., The putative polyamine antagonists ifen…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0014-2999(92)90414-y](https://doi.org/10.1016/0014-2999(92)90414-y) | [1351843](https://www.ncbi.nlm.nih.gov/pubmed/1351843) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T20:15:03.751885+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abe_1993 | irrelevant | 0 | 0 | The study is a mechanistic investigation of neuronal survival where ifenprodil is used only as a pharmacological antagonist, with no pharmacokinetic parameters reported. |
| PD | Abe_1993 | not_relevant | 1 | 0 | The paper describes a qualitative blocking effect of ifenprodil on spermine-induced survival but does not report any numeric PD parameters (e.g., IC50, Ki) or quantitative concentration-effect data for ifenprodil itself. |
| popPK | Ahlemeyer_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurotoxicity where ifenprodil is used only as a pharmacological tool to block NMDA receptors, with no pharmacokinetic parameters reported. |
| popPK | Alexander_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of phosphoinositide turnover in guinea pig brain slices, with ifenprodil used only as a pharmacological antagonist, and no pharmacokinetic parameters are reported. |
| PD | Alexander_1992 | not_relevant | 0 | 0 | The paper focuses on the modulatory effect of spermine on excitatory amino acid responses and only qualitatively states that ifenprodil did not reverse this effect, without providing any concentration-response data or numeric PD parameters for ifenprodil. |
| popPK | Allgaier_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of NMDA receptor pharmacology in cultured rat neurons, not a pharmacokinetic study of ifenprodil. |
| popPK | Bakker_1991 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay examining the mechanism of action of ifenprodil, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Bechthold_2021 | irrelevant | 0 | 0 | The paper focuses on the synthesis, stereochemistry, and in-vitro receptor binding affinity of ifenprodil, containing no pharmacokinetic disposition parameters. |
| popPK | Bednar_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/kinetic assay measuring receptor binding rates and dissociation half-lives, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Blevins_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of NMDA receptor sensitivity in cultured neurons, not a pharmacokinetic study reporting disposition parameters for ifenprodil. |
| popPK | Brewer_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neuronal excitotoxicity and receptor subunit expression, not a pharmacokinetic study of ifenprodil. |
| PD | Brewer_2007 | not_relevant | 2 | 1 | The paper reports a qualitative comparison of ifenprodil's efficacy in young vs. old neurons and mentions a Glu EC50 shift, but it does not provide numeric PD parameters (e.g., IC50, Emax) or a concentration-effect curve for ifenprodil. |
| popPK | Brothwell_2008 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study reporting pharmacodynamic potency (IC50) of ifenprodil on NMDA receptors, not pharmacokinetic disposition parameters. |
| popPK | Buemi_2016 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study reporting in-vitro IC50 values for NMDAR modulation, not a pharmacokinetic study with disposition parameters for ifenprodil. |
| PD | Buemi_2016 | not_relevant | 1 | 1 | The paper reports a single IC50 value for ifenprodil as a reference in a competition assay, but does not provide an exposure-response curve, dose-response data, or PK/PD model parameters. |
| popPK | Cahusac_2005 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of NMDA receptor subtypes in mechanoreceptors, reporting IC50 values for receptor blockade rather than pharmacokinetic disposition parameters (CL, V, etc.) for ifenprodil. |
| popPK | Capó_2025 | irrelevant | 0 | 0 | The paper is a review of NMDAR in CNS disorders and does not report any pharmacokinetic parameters for ifenprodil. |
| PD | Capó_2025 | not_relevant | 1 | 0 | The text is a general review of NMDAR in CNS disorders and does not report specific pharmacodynamic or exposure-response data for ifenprodil. |
| popPK | Cathala_2000 | irrelevant | 0 | 0 | The paper is an electrophysiological study of NMDA receptor subunit composition during development, using ifenprodil as a pharmacological tool to probe NR2B subunits, rather than a pharmacokinetic study reporting disposition parameters for ifenprodil. |
| PD | Cathala_2000 | not_relevant | 3 | 2 | The paper reports a single IC50 value for ifenprodil at one developmental stage (P12) to characterize receptor subunit composition, but does not provide a full concentration-effect curve, Emax, or a PK/PD model. |
| popPK | Chen_2010 | irrelevant | 0 | 0 | The study is a mechanistic investigation of NMDA receptor function in rat spinal cord slices where ifenprodil is used only as a pharmacological antagonist, with no pharmacokinetic parameters reported. |
| PD | Chen_2010 | not_relevant | 1 | 0 | The paper reports an EC50 for NMDA (258 nM) but only qualitatively states that ifenprodil abolished the effect, without providing any numeric concentration-effect data or PD parameters for ifenprodil. |
| popPK | Chen_2016 | irrelevant | 0 | 0 | The study reports pharmacodynamic endpoints (ED50, duration of block) rather than pharmacokinetic parameters (CL, V, ka). |
| popPK | Chenard_1995 | irrelevant | 0 | 0 | The paper is a structure-activity relationship (SAR) study focusing on the discovery of a new NMDA antagonist (CP-101,606) based on ifenprodil, and it reports no pharmacokinetic parameters for ifenprodil. |
| PD | Chenard_1995 | not_relevant | 3 | 2 | The paper reports an IC50 for a novel analog (CP-101,606) and qualitatively compares it to ifenprodil, but does not provide a dose-response curve or numeric PD parameters specifically for ifenprodil. |
| popPK | Church_1995 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiological study reporting IC50 values for calcium channel blockade, not a pharmacokinetic study with disposition parameters. |
| popPK | Clark_2010 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study investigating NMDAR subunit composition, not a pharmacokinetic study, and ifenprodil is used only as a pharmacological tool. |
| PD | Clark_2010 | not_relevant | 3 | 2 | The paper reports a single-point inhibition percentage for ifenprodil (55.8% at 10 µM) in an electrophysiology study, which is a qualitative/semi-quantitative pharmacological observation rather than a derived exposure-response or dose-response curve with numeric PD parameters like Emax or EC50. |
| popPK | Daeffler_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mast cell histamine release where ifenprodil is used only as a pharmacological tool/antagonist, not as the subject of a pharmacokinetic analysis. |
| PD | Daeffler_1999 | not_relevant | 1 | 0 | The paper only qualitatively states that ifenprodil "slightly inhibited" histamine release at high concentrations without providing specific concentration-effect data, EC50, or numeric PD parameters for ifenprodil. |
| popPK | Damascena_2026 | irrelevant | 0 | 0 | The study is an in-vitro neurochemical investigation of GABA uptake in chicken retina where ifenprodil is used only as a pharmacological tool to test NMDA receptor involvement, not as a subject for pharmacokinetic analysis. |
| PD | Damascena_2026 | not_relevant | 0 | 0 | The paper investigates the effect of ethanol on GABA uptake and uses ifenprodil only as a negative control to rule out NMDA receptor involvement, without reporting any dose-response or exposure-response parameters for ifenprodil itself. |
| popPK | Delaney_2012 | irrelevant | 0 | 0 | The paper is an electrophysiological study investigating the mechanism of action (P/Q-type calcium channel blockade) of ifenprodil, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Egunlusi_2024 | irrelevant | 0 | 0 | The paper is a review of molecular mechanisms and clinical applications of NMDA receptor antagonists, containing no original quantitative pharmacokinetic parameter values for ifenprodil. |
| PD | Egunlusi_2024 | not_relevant | 1 | 0 | The text is a general review of NMDA receptor antagonists and does not report specific numeric pharmacodynamic parameters or exposure-response data for ifenprodil. |
| PGx | El_2024 | not_relevant | 0 | 0 | The paper is an in-silico study of novel compounds and does not report pharmacogenomic effects on ifenprodil. |
| popPK | Gavazzo_2001 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on NMDA channel inhibition by lead, using ifenprodil only as a probe for subunit expression, and reports no pharmacokinetic parameters. |
| PD | Gavazzo_2001 | not_relevant | 0 | 0 | The paper reports IC50 values for lead (Pb2+) inhibition of NMDA receptors, not for ifenprodil; ifenprodil is only mentioned as a marker for subunit expression changes without providing numeric PD parameters for it. |
| popPK | Gavazzo_2008 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study on NMDA receptors in oocytes and does not report any pharmacokinetic parameters for ifenprodil. |
| PD | Gavazzo_2008 | not_relevant | 0 | 0 | The paper focuses on the molecular determinants of Pb2+ interaction with NMDA receptors; ifenprodil is only mentioned qualitatively in a competition/additivity context without any reported concentration-effect data or numeric PD parameters. |
| popPK | Gavazzo_2009 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study on NMDA receptors and nickel, with ifenprodil mentioned only as a reference for binding sites, and no pharmacokinetic parameters are reported. |
| PD | Gavazzo_2009 | not_relevant | 1 | 1 | The paper focuses on the molecular determinants of nickel's effects on NMDA receptors and only qualitatively mentions ifenprodil binding sites without providing any exposure-response data or numeric PD parameters for ifenprodil. |
| popPK | Gemignani_2000 | irrelevant | 0 | 0 | The study is a mechanistic investigation of NMDA receptor activation by HIV-1 gp120, where ifenprodil is used only as a pharmacological inhibitor/comparator, not as the subject of a pharmacokinetic analysis. |
| PD | Gemignani_2000 | not_relevant | 1 | 0 | The paper reports EC50 values for the HIV-1 protein gp120, not for ifenprodil; ifenprodil is only mentioned qualitatively as an inhibitor of the gp120 effect without providing specific concentration-response data or numeric PD parameters for ifenprodil itself. |
| popPK | Gibson_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurotoxicity in rat hippocampal slices, not a pharmacokinetic study, and reports no disposition parameters for ifenprodil. |
| popPK | Gitto_2012 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on NMDA receptor ligands where ifenprodil is used only as a radioligand for binding assays, not as a subject of pharmacokinetic analysis. |
| PD | Gitto_2012 | not_relevant | 1 | 1 | The paper reports a single binding affinity value (IC50) for a new compound displacing ifenprodil, but does not provide a concentration-effect curve or pharmacodynamic parameters for ifenprodil itself. |
| popPK | Gitto_2014 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel NMDA receptor ligands using ifenprodil only as a reference compound in binding assays, with no pharmacokinetic data reported. |
| PD | Gitto_2014 | not_relevant | 2 | 1 | The paper reports binding affinity (IC50) and a qualitative functional effect (reduction of EPSCs) for a new compound, but does not provide a concentration-effect curve or numeric PD parameters for ifenprodil itself. |
| popPK | Grimwood_1996 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| popPK | Guzikowski_2000 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study reporting synthesis and in-vitro receptor binding/functional data, not a pharmacokinetic study with disposition parameters. |
| PD | Guzikowski_2000 | not_relevant | 3 | 4 | The paper reports in vitro IC50 values and in vivo ED50 values for analogues, but does not provide an exposure-response or concentration-effect curve analysis for ifenprodil itself. |
| popPK | Hou_2023 | irrelevant | 0 | 0 | The study is a mechanistic investigation of a herbal formula where ifenprodil is used only as a positive control/comparator, and no pharmacokinetic parameters are reported. |
| PD | Hou_2023 | not_relevant | 1 | 0 | The study uses a single fixed dose of ifenprodil for comparison and does not report any concentration-effect or dose-response analysis or numeric PD parameters. |
| popPK | Huang_2014 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of NMDA receptor properties where ifenprodil is used as a pharmacological tool, not a pharmacokinetic study. |
| popPK | Hussy_1997 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological characterization of NMDA receptors in rat neurons, not a pharmacokinetic study of ifenprodil. |
| PD | Hussy_1997 | not_relevant | 1 | 0 | The paper characterizes NMDA receptor properties in neurons and notes low sensitivity to ifenprodil, but does not provide a dose-response curve or numeric PD parameters (e.g., IC50) for ifenprodil. |
| popPK | Hwang_2023 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ifenprodil's effect on ion channels, reporting no pharmacokinetic parameters. |
| popPK | Höfner_1996 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| PD | Höfner_1996 | not_relevant | 0 | 0 | The paper describes in vitro radioligand binding assays and cooperative modulation of MK-801 binding, not a pharmacodynamic exposure-response or dose-response relationship for ifenprodil in a biological system. |
| popPK | Ilyin_1996 | irrelevant | 0 | 0 | The study focuses on the mechanism of haloperidol on NMDA receptors in oocytes and neurons, with ifenprodil mentioned only as a mechanistic comparator, and contains no pharmacokinetic data. |
| PD | Ilyin_1996 | not_relevant | 0 | 0 | The paper reports pharmacodynamic parameters (IC50, Emax) for haloperidol, not ifenprodil; ifenprodil is only mentioned as a mechanistic comparison. |
| popPK | Karbon_1993 | irrelevant | 0 | 0 | The paper focuses on the receptor binding and neurochemical profile of NPC 16377, with ifenprodil serving only as a comparator agent and no pharmacokinetic parameters reported. |
| PD | Karbon_1993 | not_relevant | 0 | 0 | The paper focuses on the receptor binding and neurochemical profile of NPC 16377, mentioning ifenprodil only as a comparative reference for potency (IC50) without providing any exposure-response or dose-response data for ifenprodil itself. |
| popPK | Karlov_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on molecular modeling and synthesis of NMDA receptor modulators, with no pharmacokinetic data or disposition parameters for ifenprodil. |
| PD | Karlov_2022 | not_relevant | 1 | 1 | The paper reports in vitro IC50 values for a new compound and mentions ifenprodil only as a binding mode reference, without providing any pharmacokinetic or pharmacodynamic exposure-response data for ifenprodil. |
| popPK | Kato_1999 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| PD | Kato_1999 | not_relevant | 0 | 0 | The paper studies TAK-147, not ifenprodil, and focuses on choline acetyltransferase activity in cultured neurons without reporting ifenprodil PD parameters. |
| popPK | Kenakin_2007 | irrelevant | 0 | 0 | The paper is a theoretical review on allosteric receptor modeling and does not report any pharmacokinetic parameters for ifenprodil. |
| PD | Kenakin_2007 | not_relevant | 1 | 0 | The text is a theoretical discussion of allosteric models and mentions ifenprodil only as a qualitative example without providing any numeric PD parameters or data. |
| popPK | Kew_1996 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of NMDA receptor antagonism and does not report any pharmacokinetic parameters for ifenprodil. |
| popPK | Kleckner_1999 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on felbamate's interaction with NMDA receptors, with ifenprodil mentioned only as a comparator for mechanism, and contains no pharmacokinetic parameters. |
| PD | Kleckner_1999 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of felbamate; ifenprodil is only mentioned as a mechanistic comparator without providing any exposure-response or dose-response data for it. |
| popPK | Klein_2001 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of NMDA receptor properties in mouse neurons, using ifenprodil only as a pharmacological tool to characterize receptor subtypes, not to measure its pharmacokinetic parameters. |
| PD | Klein_2001 | not_relevant | 3 | 0 | The paper mentions ifenprodil inhibition qualitatively but does not provide specific numeric PD parameters (IC50, Emax) or concentration-effect curves for ifenprodil in the provided text. |
| popPK | Le_1994 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| PD | Le_1994 | not_relevant | 0 | 0 | The paper reports that ifenprodil had no modulatory effect on the receptors, providing no numeric PD parameters or concentration-response relationship. |
| popPK | Legendre_1991 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study examining the mechanism of NMDA receptor blockade, not a pharmacokinetic study reporting disposition parameters. |
| PD | Legendre_1991 | not_relevant | 0 | 0 | The provided text is only a title describing a mechanistic study of ifenprodil and contains no data, numeric parameters, or exposure-response analysis. |
| popPK | Li_2004 | irrelevant | 0 | 0 | The study is an electrophysiological characterization of NMDA receptors in rat neurons, reporting IC50 values for ifenprodil as a pharmacological tool, not pharmacokinetic disposition parameters. |
| popPK | Lu_2003 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on apoptosis and receptor mediation, not a pharmacokinetic study, and contains no PK parameters for ifenprodil. |
| PD | Lu_2003 | not_relevant | 2 | 1 | The paper describes qualitative effects of ifenprodil on cell death and mentions dose-response for NMDA, but does not provide numeric PD parameters (e.g., IC50, Emax) or a quantitative concentration-effect curve for ifenprodil. |
| popPK | Ma_2019 | irrelevant | 0 | 0 | The paper is a computational study on pharmacodynamics and molecular docking, containing no pharmacokinetic data for ifenprodil. |
| PD | Ma_2019 | not_relevant | 0 | 0 | The paper is a computational docking and pharmacophore study that does not report any experimental concentration-effect data, dose-response curves, or numeric PD parameters for ifenprodil. |
| popPK | Marvizón_1994 | irrelevant | 0 | 0 | The paper is an in-vitro binding kinetics study focusing on receptor mechanisms, not a pharmacokinetic study reporting disposition parameters for ifenprodil. |
| popPK | Matsumura_2014 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic interactions of anticonvulsants and does not report quantitative pharmacokinetic parameters for ifenprodil. |
| PD | Matsumura_2014 | not_relevant | 1 | 0 | The text is a review of isobolographic analyses for anticonvulsant combinations and does not report specific numeric PD parameters or exposure-response data for ifenprodil. |
| popPK | Mercer_1993 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay characterizing the pharmacology of ifenprodil, not a pharmacokinetic study reporting disposition parameters. |
| PD | Mercer_1993 | not_relevant | 3 | 5 | The paper reports in vitro receptor binding affinity parameters (KD, Bmax, IC50) rather than a pharmacodynamic exposure-response or dose-response relationship for a physiological effect. |
| popPK | Mikolajczak_2003 | irrelevant | 0 | 0 | The study is a behavioral pharmacology assessment of anxiolytic activity and does not report any pharmacokinetic parameters. |
| popPK | Misra_2000 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology investigation of NMDA receptor subunits in rat cerebellar Golgi cells, reporting IC50 values for receptor inhibition rather than pharmacokinetic disposition parameters for ifenprodil. |
| popPK | Mukai_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurosteroid effects on NMDA receptors, using ifenprodil only as a specific inhibitor/comparator, and reports no pharmacokinetic parameters. |
| PD | Mukai_2000 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for pregnenolone sulfate (PREGS), not ifenprodil; ifenprodil is only mentioned qualitatively as an inhibitor that abolished the response. |
| popPK | Ng_2008 | irrelevant | 0 | 0 | The paper is an in-vitro structural and binding study of the NR2B receptor protein, reporting binding constants (KD) and IC50 values, but it does not contain any pharmacokinetic disposition parameters (CL, V, ka, etc.) for ifenprodil. |
| popPK | Ng_2012 | irrelevant | 0 | 0 | The study is a mechanistic investigation of NMDA receptor cleavage and pharmacology, not a pharmacokinetic study of ifenprodil. |
| popPK | Nicolas_1994 | irrelevant | 0 | 0 | The study is an in-vitro autoradiographic binding study characterizing receptor affinity (IC50) and distribution, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Nicolas_1994 | not_relevant | 3 | 5 | The paper reports in vitro binding affinity (IC50) values for ifenprodil, which are pharmacological parameters but do not constitute a pharmacodynamic (exposure-response) model or dose-effect analysis in the context of drug action. |
| popPK | Nicolas_1994_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of NMDA receptor subtypes and does not report any pharmacokinetic parameters for ifenprodil. |
| popPK | Ogita_1992 | irrelevant | 0 | 0 | The study is an in-vitro biochemical investigation of receptor binding and does not report pharmacokinetic parameters. |
| popPK | Ortinau_2003 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology paper investigating ATP inhibition of NMDA receptors, using ifenprodil only as a selective antagonist to verify receptor subunit composition, with no pharmacokinetic data reported. |
| PD | Ortinau_2003 | not_relevant | 0 | 0 | The paper investigates the pharmacology of ATP on NMDA receptors; ifenprodil is only used as a tool compound to verify NR2B subunit expression, and no PD parameters or exposure-response relationships for ifenprodil are reported. |
| popPK | Priestley_1994 | irrelevant | 0 | 0 | The paper reports in-vitro pharmacological binding/functional data (IC50, Ki) for NMDA receptors, not pharmacokinetic disposition parameters. |
| popPK | Priestley_1995 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study reporting pharmacological affinity (IC50) values, not pharmacokinetic disposition parameters. |
| popPK | Quan_2023 | irrelevant | 0 | 0 | The study focuses on a novel compound (Z25) with ifenprodil serving only as a reference/comparator, and no PK parameters for ifenprodil are reported. |
| PD | Quan_2023 | not_relevant | 1 | 0 | The paper focuses on the discovery of a new compound (Z25) and only mentions ifenprodil as a structural reference/positive control without providing any specific pharmacodynamic parameters or exposure-response data for ifenprodil. |
| popPK | Reynolds_2024 | irrelevant | 0 | 0 | The study investigates the neurobiological effects of nicotine in mice and does not involve ifenprodil or any pharmacokinetic analysis. |
| PD | Reynolds_2024 | not_relevant | 0 | 0 | The paper studies the effects of nicotine on adolescent mice and does not mention ifenprodil or report any pharmacodynamic parameters for it. |
| popPK | Roger_2003 | irrelevant | 0 | 0 | The study focuses on a PET radiotracer, and ifenprodil is used only as a non-specific competitor in a competition study without reporting its pharmacokinetic parameters. |
| PD | Roger_2003 | not_relevant | 1 | 0 | The paper reports an IC50 for a new radiotracer analog, not ifenprodil, and the in vivo study with ifenprodil was a qualitative competition experiment that failed to demonstrate specific binding without providing numeric dose-response or concentration-effect parameters. |
| popPK | Roger_2004 | irrelevant | 0 | 0 | The study focuses on the radiosynthesis and biodistribution of [11C]EMD-95885, using ifenprodil only as a competitive ligand in a blocking study, and does not report pharmacokinetic parameters for ifenprodil. |
| PD | Roger_2004 | not_relevant | 1 | 0 | The paper reports a single IC50 value for EMD-95885 (not ifenprodil) and qualitative competition data for ifenprodil, but lacks any numeric dose-response curve, PK/PD model, or extractable PD parameters for ifenprodil. |
| popPK | Romei_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of GABA transport and release in mouse synaptosomes, using ifenprodil only as a pharmacological tool to block Na+/Ca2+ exchangers, and reports no pharmacokinetic parameters for ifenprodil. |
| PD | Romei_2015 | not_relevant | 1 | 0 | The paper reports an EC50 for GABA-induced efflux, but ifenprodil is only mentioned as a qualitative inhibitor of Na+/Ca2+ exchangers without any associated dose-response data or numeric PD parameters. |
| popPK | Steele_1990 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay where ifenprodil is used only as a competitive antagonist to characterize binding, not as a subject drug for pharmacokinetic analysis. |
| popPK | Steinmetz_2002 | irrelevant | 0 | 0 | The paper describes an in vitro cell line assay for NMDA receptor ligands and does not report any pharmacokinetic parameters for ifenprodil. |
| popPK | Suetake-Koga_2006 | irrelevant | 0 | 0 | The study focuses on the pharmacology of HON0001, using ifenprodil only as a radioligand for binding assays, and does not report PK parameters for ifenprodil. |
| PD | Suetake-Koga_2006 | not_relevant | 0 | 0 | The paper focuses on HON0001, not ifenprodil; ifenprodil is only used as a radioligand to determine HON0001's binding affinity, and no PD or exposure-response relationship for ifenprodil is reported. |
| popPK | Suárez_2006 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of NMDA receptor pharmacology where ifenprodil is used only as a selective antagonist, with no pharmacokinetic parameters reported. |
| PD | Suárez_2006 | not_relevant | 1 | 0 | The paper mentions ifenprodil only as a negative control (it did not inhibit the response) and does not provide any concentration-effect data, IC50, or dose-response parameters for ifenprodil. |
| popPK | Szumlinski_2016 | irrelevant | 0 | 0 | The study is a behavioral/pharmacodynamic investigation of ifenprodil's effect on cocaine-seeking behavior and does not report any pharmacokinetic parameters. |
| PD | Szumlinski_2016 | not_relevant | 2 | 1 | The paper reports a qualitative behavioral effect of a single fixed dose of ifenprodil (1.0 µg/side) but does not provide a concentration-effect curve, dose-response analysis, or numeric PD parameters (e.g., EC50, Emax). |
| popPK | Tai_2010 | irrelevant | 0 | 0 | The study is a mechanistic investigation of morphine tolerance and NMDA receptor expression where ifenprodil is used as a pharmacological tool, not a subject of pharmacokinetic analysis. |
| PD | Tai_2010 | not_relevant | 2 | 1 | The paper mentions ifenprodil only qualitatively as an antagonist that potentiated morphine effects, without providing any numeric dose-response parameters, concentration-effect curves, or PK/PD modeling for ifenprodil itself. |
| popPK | Tang_2023 | irrelevant | 0 | 0 | The paper is a computational virtual screening study using ifenprodil as a reference structure/pharmacophore, and it does not report any pharmacokinetic parameters for ifenprodil. |
| PD | Tang_2023 | not_relevant | 0 | 0 | The paper is a computational virtual screening study identifying a new compound (CNP0099440) using ifenprodil as a reference structure; it does not report any experimental pharmacodynamic data, exposure-response relationships, or numeric PD parameters for ifenprodil. |
| popPK | Temme_2018 | irrelevant | 0 | 0 | The study is a pharmacological investigation of receptor affinity and functional activity (in-vitro), not a pharmacokinetic study reporting disposition parameters for ifenprodil. |
| PD | Temme_2018 | not_relevant | 3 | 2 | The paper reports in vitro binding affinities and functional IC50 values for various NMDA blockers, but does not provide a pharmacokinetic/pharmacodynamic (PK/PD) model or exposure-response relationship for ifenprodil in a biological system. |
| popPK | Temme_2018_2 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the design and synthesis of new NMDA receptor antagonists, with no pharmacokinetic data or disposition parameters for ifenprodil. |
| PD | Temme_2018_2 | not_relevant | 3 | 2 | The paper reports a single IC50 value for a novel analog (4a) in a cytotoxicity assay, but does not provide a dose-response curve, Emax, or any exposure-response/PD model for ifenprodil itself. |
| popPK | Temme_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in-vitro binding affinity of GluN2B ligands, with no pharmacokinetic data for ifenprodil. |
| popPK | Temme_2020 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and pharmacological evaluation of novel NMDA receptor antagonists, with no pharmacokinetic data or disposition parameters for ifenprodil. |
| popPK | Tewes_2010 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in-vitro biological evaluation (affinity/cytotoxicity) of new NMDA receptor antagonists, with no pharmacokinetic data for ifenprodil. |
| PD | Tewes_2010 | not_relevant | 3 | 2 | The paper reports a single IC50 value (360 nM) for a novel analog (WMS-1405) in an in vitro assay, but does not provide a full concentration-effect curve, multiple data points, or a PK/PD model for ifenprodil itself. |
| popPK | Thapaliya_2021 | irrelevant | 0 | 0 | The paper is a mechanistic/photopharmacology study on caged and photoswitchable derivatives of ifenprodil, reporting no population pharmacokinetic parameters (CL, V, etc.) for the drug. |
| popPK | Trescher_1994 | irrelevant | 0 | 0 | The study is a neurotoxicology/pharmacology paper investigating quinolinate-induced injury, and ifenprodil is only mentioned as a non-protective agent without any pharmacokinetic data. |
| PD | Trescher_1994 | not_relevant | 0 | 0 | The paper reports that ifenprodil did not significantly protect against injury, providing no numeric PD parameters or exposure-response relationship for the drug. |
| popPK | Tsai_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and does not report pharmacokinetic parameters. |
| popPK | Uchino_2001 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study characterizing NMDA receptor antagonists, with ifenprodil serving only as a comparator agent and no pharmacokinetic parameters reported. |
| PD | Uchino_2001 | not_relevant | 3 | 2 | The paper reports IC50 values for ifenprodil in a cell-based assay, but these are functional potency metrics for a specific receptor subtype, not pharmacodynamic (exposure-response) parameters (like Emax, EC50 in vivo, or effect-compartment slope) derived from PK/PD modeling or dose-response analysis in a physiological context. |
| popPK | Vestring_2025 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study using ifenprodil as a comparator agent to characterize NMDA receptor subunits, and it does not report pharmacokinetic parameters for ifenprodil. |
| popPK | Wegner_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of glutamate receptor properties in neural progenitor cells, using ifenprodil as a pharmacological tool, and does not report any pharmacokinetic parameters. |
| PD | Wegner_2009 | not_relevant | 0 | 0 | The paper reports concentration-response data for glutamate and NMDA, but ifenprodil is only used qualitatively as a blocker to identify receptor subunits, with no numeric PD parameters or dose-response curve provided for ifenprodil. |
| popPK | White_2000 | irrelevant | 0 | 0 | The study focuses on the characterization of conantokin-R, with ifenprodil serving only as a comparator agent in seizure models without any reported pharmacokinetic parameters. |
| PD | White_2000 | not_relevant | 1 | 0 | The paper focuses on the characterization of conantokin-R; ifenprodil is only mentioned qualitatively as a comparator in seizure models without providing specific dose-response data or numeric PD parameters for it. |
| popPK | Williams_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on NMDA receptor subtypes in Xenopus oocytes and does not report any pharmacokinetic parameters. |
| popPK | Woodward_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine efflux and uptake, reporting no pharmacokinetic parameters for ifenprodil. |
| popPK | Wooters_2011 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment investigating discriminative stimulus effects, not a pharmacokinetic study, and reports no disposition parameters for ifenprodil. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The paper focuses on the discovery of novel NMDAR antagonists (compound 45e) and uses ifenprodil only as a comparator for potency and efficacy, without reporting any pharmacokinetic parameters for ifenprodil. |
| PD | Xu_2022 | not_relevant | 2 | 2 | The paper reports binding affinities (Ki) and functional IC50s for a new compound compared to ifenprodil, but does not provide an exposure-response or dose-response curve with numeric PD parameters (e.g., Emax, EC50) for ifenprodil itself. |
| popPK | Zeevalk_1990 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on excitotoxicity and does not report any pharmacokinetic parameters for ifenprodil. |
| popPK | Zeevalk_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of NMDA receptor antagonism in chick retina, reporting IC50 and efficacy data rather than pharmacokinetic disposition parameters. |
| popPK | Zhou_1996 | irrelevant | 0 | 0 | The paper is a structure-activity study of conantokin-G analogues and only mentions ifenprodil as a binding probe to demonstrate a distinct mechanism of action, providing no pharmacokinetic parameters. |
| PD | Zhou_1996 | not_relevant | 0 | 0 | The paper focuses on conantokin-G analogues and only mentions ifenprodil to show that con-G does not affect its binding, providing no PD or exposure-response data for ifenprodil. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
