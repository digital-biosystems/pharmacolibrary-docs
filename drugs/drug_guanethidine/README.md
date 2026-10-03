<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02C&quot;,&quot;href&quot;:&quot;atc/C02C.md&quot;},{&quot;label&quot;:&quot;guanethidine&quot;}]"></div>

# guanethidine

- **generic name:** guanethidine
- **ATC codes:** `C02CC02`, `C02LF01`, `S01EX01`
- **DrugBank:** [DB01170](https://go.drugbank.com/drugs/DB01170) · **PubChem:** [CID 3518](https://pubchem.ncbi.nlm.nih.gov/compound/3518)
- **molar mass:** 198.3085 g/mol (C10H22N4) — DrugBank
- **groups:** approved, withdrawn

## About

**Description.** An antihypertensive agent that acts by inhibiting selectively transmission in post-ganglionic adrenergic nerves. It is believed to act mainly by preventing the release of norepinephrine at nerve endings and causes depletion of norepinephrine in peripheral sympathetic nerve terminals as well as in tissues. [PubChem]

**Indication.** For the treatment of moderate and severe hypertension, either alone or as an adjunct, and for the treatment of renal hypertension.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 06:20 | 5:18 | 0/0/0 | 0/1/0 | 0/0/0 | 36,691/2,011 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 2/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Silva_2005_E50_relaxation](drugs/drug_guanethidine/pd_Silva_2005_E50_relaxation.md) | relaxation of precontracted human corpus cavernosum strip (percent of tonic K+ 40 mM contraction) ← phentolamine · direct Emax (saturable) effect | — | Silva LF et al., Phentolamine relaxes human corpus caver…, International journal of im… (2005) | [10.1038/sj.ijir.3901269](https://doi.org/10.1038/sj.ijir.3901269) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=guanethidine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…3-30% of oral dose…”</sub> | prose |
| metabolism | kidney | <sub>“…excreted in the urine…”</sub> | prose |
| metabolism | liver | <sub>“…converted by the liver…”</sub> | prose |
| excretion | kidney | <sub>“…excreted in the urine…”</sub> | prose |
| excretion | liver | <sub>“…converted by the liver…”</sub> | prose |

<sub>Actors without a tissue in the table: SLC6A2 (inducer).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 155 matched, 88 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wethmar_2001.pdf` | Wethmar U et al., Interactions of ligands at angiotensin…, Japanese journal of pharmac… (2001) | pd | 5 | [10.1254/jjp.85.167](https://doi.org/10.1254/jjp.85.167) | [11286399](https://www.ncbi.nlm.nih.gov/pubmed/11286399) | metadata signals extractable PD data (IC50) |
| `De_2003.pdf` | De Salvatore G et al., Effects of in vivo treatment with inter…, Autonomic & autacoid pharma… (2003) | pd | 4 | [10.1046/j.1474-8673.2003.00286.x](https://doi.org/10.1046/j.1474-8673.2003.00286.x) | [14511072](https://www.ncbi.nlm.nih.gov/pubmed/14511072) | metadata signals extractable PD data (Emax) |
| `Dehpour_1994.pdf` | Dehpour AR et al., Effects of atropine, pirenzepine, cloni…, General pharmacology (1994) | pd | 4 | [10.1016/0306-3623(94)90102-3](https://doi.org/10.1016/0306-3623(94)90102-3) | [7835643](https://www.ncbi.nlm.nih.gov/pubmed/7835643) | metadata signals extractable PD data (IC50) |
| `Ding_2023.pdf` | Ding N et al., The enhancing effect of 5-HT on phasic…, European journal of pharmac… (2023) | pd | 4 | [10.1016/j.ejphar.2023.175715](https://doi.org/10.1016/j.ejphar.2023.175715) | [37059373](https://www.ncbi.nlm.nih.gov/pubmed/37059373) | metadata signals extractable PD data (Emax) |
| `Kitazawa_1998.pdf` | Kitazawa T et al., Involvement of 5-hydroxytryptamine7 rec…, British journal of pharmaco… (1998) | pd | 4 | [10.1038/sj.bjp.0701583](https://doi.org/10.1038/sj.bjp.0701583) | [9489604](https://www.ncbi.nlm.nih.gov/pubmed/9489604) | metadata signals extractable PD data (EC50) |
| `Kohjitani_2005.pdf` | Kohjitani A et al., Peripheral N-methyl-D-aspartate recepto…, Anesthesia and analgesia (2005) | pd | 4 | [10.1213/01.ANE.0000184137.37687.B7](https://doi.org/10.1213/01.ANE.0000184137.37687.B7) | [16301241](https://www.ncbi.nlm.nih.gov/pubmed/16301241) | metadata signals extractable PD data (EC50) |
| `Lefebvre_1992.pdf` | Lefebvre RA et al., Relaxant effects of BRL 38227 and pinac…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0014-2999(92)90087-k](https://doi.org/10.1016/0014-2999(92)90087-k) | [1582448](https://www.ncbi.nlm.nih.gov/pubmed/1582448) | metadata signals extractable PD data (Concentration-effect) |
| `Maggi_1994.pdf` | Maggi CA et al., Tachykinin NK3 receptor mediates NANC h…, Regulatory peptides (1994) | pd | 4 | [10.1016/0167-0115(94)90174-0](https://doi.org/10.1016/0167-0115(94)90174-0) | [7531357](https://www.ncbi.nlm.nih.gov/pubmed/7531357) | metadata signals extractable PD data (EC50) |
| `Menozzi_2018.pdf` | Menozzi A et al., Effects of selective α2 -adrenergic rec…, Journal of veterinary pharm… (2018) | pd | 4 | [10.1111/jvp.12470](https://doi.org/10.1111/jvp.12470) | [29164631](https://www.ncbi.nlm.nih.gov/pubmed/29164631) | metadata signals extractable PD data (Emax) |
| `Morris_1991.pdf` | Morris JL, Roles of neuropeptide Y and noradrenali…, Regulatory peptides (1991) | pd | 4 | [10.1016/0167-0115(91)90023-a](https://doi.org/10.1016/0167-0115(91)90023-a) | [1678196](https://www.ncbi.nlm.nih.gov/pubmed/1678196) | metadata signals extractable PD data (EC50) |
| `Wang_1993.pdf` | Wang YX et al., Functional integrity of the central and…, The Journal of pharmacology… (1993) | pd | 4 | not captured | [7682612](https://www.ncbi.nlm.nih.gov/pubmed/7682612) | metadata signals extractable PD data (Emax) |
| `da_2016.pdf` | da Silva MT et al., α-Terpineol Induces Gastric Retention o…, Planta medica (2016) | pd | 4 | [10.1055/s-0042-104657](https://doi.org/10.1055/s-0042-104657) | [27124242](https://www.ncbi.nlm.nih.gov/pubmed/27124242) | metadata signals extractable PD data (concentration-effect) |

<sub>queue written 2026-09-30T06:20:51.044863+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | ARNOLD_1963 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| popPK | Akata_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of volatile anesthetics on mesenteric arteries, using guanethidine only as a non-specific blocker of nerve terminals, and reports no pharmacokinetic parameters for guanethidine. |
| PD | Akata_1995 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of volatile anesthetics (halothane, isoflurane, enflurane), not guanethidine, which is used only as a background agent to block nerve terminals. |
| popPK | Boerman_2016 | irrelevant | 0 | 0 | The study is a vascular physiology investigation in mice where guanethidine is used solely as a tool to inhibit sympathetic neurotransmission, not as the subject of pharmacokinetic analysis. |
| PD | Boerman_2016 | not_relevant | 0 | 0 | The paper uses guanethidine solely as a pharmacological tool to block sympathetic neurotransmission in an isolated organ bath experiment; it does not report a pharmacodynamic exposure-response or dose-response relationship for guanethidine itself. |
| popPK | Cession-Fossion_1965 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| popPK | Chang_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of bladder physiology where guanethidine is used only as a pharmacological tool to block adrenergic nerves, not as a subject for pharmacokinetic analysis. |
| PD | Chang_2018 | not_relevant | 2 | 1 | The paper uses guanethidine as a qualitative pharmacological tool to block adrenergic nerves in an in vitro study of phenylephrine-induced bladder relaxation; it does not report a dose-response curve or numeric PD parameters for guanethidine itself. |
| popPK | Consigny_2014 | irrelevant | 0 | 0 | The study uses guanethidine as a chemical agent for renal denervation in a rat model and reports neurochemical outcomes (NE depletion), not pharmacokinetic parameters. |
| PD | Consigny_2014 | not_relevant | 1 | 0 | The paper mentions guanethidine as a validated neurotoxic agent for renal denervation but does not report any dose-response or concentration-effect data for it; the only dose-response curve provided is for paclitaxel. |
| popPK | De_2003 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | De_2003 | not_relevant | 0 | 0 | The paper investigates the effects of interleukins 1beta and 6 on vascular reactivity and does not mention guanethidine or report any exposure-response or dose-response data for it. |
| popPK | Dehpour_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of gastric fundus contractions where guanethidine is used only as a tool compound to block adrenergic transmission, not as the subject of a pharmacokinetic analysis. |
| PD | Dehpour_1994 | not_relevant | 0 | 0 | The paper reports IC50 values for atropine, pirenzepine, clonidine, morphine, and yohimbine, but guanethidine is only used as a fixed concentration (5 x 10^-6 M) to block adrenergic transmission; no dose-response curve or PD parameters are reported for guanethidine. |
| popPK | Dehpour_2002 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of NANC relaxation in rat muscles where guanethidine is used only as a blocking agent, not as the subject of pharmacokinetic analysis. |
| PD | Dehpour_2002 | not_relevant | 0 | 0 | The paper uses guanethidine as a pharmacological tool to block adrenergic transmission, but does not report a dose-response or exposure-response relationship for guanethidine itself. |
| popPK | Dick_1997 | irrelevant | 0 | 0 | Guanethidine is used only as a pharmacological tool to block adrenergic transmission in an in-vitro study of NOS inhibitors, with no pharmacokinetic parameters reported. |
| PD | Dick_1997 | not_relevant | 0 | 0 | The paper investigates NOS inhibitors in pig gastric fundus; guanethidine is used only as a pharmacological tool to block adrenergic tone, not as the subject of a PD or exposure-response analysis. |
| popPK | Ding_2023 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PD | Ding_2023 | not_relevant | 0 | 0 | The paper investigates the pharmacology of 5-HT on human ureter and does not mention guanethidine or report any exposure-response or dose-response data for it. |
| popPK | Ewert_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of Angiotensin II, where guanethidine is used only as a non-specific control agent to rule out adrenergic involvement, not as the subject of PK analysis. |
| PD | Ewert_2006 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of Angiotensin II, not guanethidine; guanethidine is only mentioned as a negative control that did not affect the response. |
| popPK | Faghir-Ghanesefat_2017 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of nicotinic receptors in rat tissue where guanethidine is used only as a non-specific adrenergic blocker, not as the subject of a pharmacokinetic analysis. |
| PD | Faghir-Ghanesefat_2017 | not_relevant | 0 | 0 | The paper investigates the role of α7-nAChR in rat corpus cavernosum using guanethidine only as a fixed-concentration blocker to isolate NANC responses, and does not report any exposure-response or dose-response relationship for guanethidine itself. |
| PGx | Fischer_1990 | not_relevant | 0 | 0 | The paper investigates the metabolism of fluperlapine, not guanethidine, and does not report pharmacogenomic effects on guanethidine PK/PD. |
| popPK | Gandía_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium channel blockade in chromaffin cells, not a pharmacokinetic study, and reports no disposition parameters for guanethidine. |
| popPK | Giuliani_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of NK3 receptors in guinea-pig colon where guanethidine is used only as a non-specific adrenergic blocker, not as the subject drug for PK analysis. |
| PD | Giuliani_1995 | not_relevant | 0 | 0 | The paper studies the pharmacology of SR 142801 and senktide in isolated guinea-pig colon; guanethidine is used only as a non-specific pharmacological tool (adrenergic blocker) and no PD relationship or parameters for guanethidine are reported. |
| popPK | Grisk_2005 | irrelevant | 0 | 0 | The study uses guanethidine as a tool for neonatal sympathectomy to investigate renal artery function, not to characterize its pharmacokinetic parameters. |
| PD | Grisk_2005 | not_relevant | 0 | 0 | The paper uses guanethidine as a tool for neonatal sympathectomy and reports pharmacological responses to other agonists (NE, vasopressin, ET-1), but does not report a pharmacodynamic or exposure-response relationship for guanethidine itself. |
| popPK | Guettler_2008 | irrelevant | 0 | 0 | The study investigates the neuropharmacological mechanism of nitroglycerin tolerance using guanethidine as a tool compound, and does not report any pharmacokinetic parameters for guanethidine. |
| PD | Guettler_2008 | not_relevant | 1 | 0 | The paper investigates the mechanism of nitroglycerin tolerance using guanethidine as a pharmacological tool (microinjection) rather than analyzing the pharmacodynamic exposure-response relationship of guanethidine itself. |
| popPK | He_2025 | irrelevant | 0 | 0 | The paper is a computational drug repositioning study for COVID-19, diabetes, and Alzheimer's, and does not report pharmacokinetic parameters for guanethidine. |
| PD | He_2025 | not_relevant | 0 | 0 | The paper describes a computational framework for drug repositioning using transcriptomic data and does not report any pharmacodynamic or exposure-response analysis for guanethidine. |
| popPK | Jiang_1996 | irrelevant | 0 | 0 | The study is a mechanistic investigation of aortic sensitivity to nifedipine in hypertensive rats, where guanethidine is used only as an antihypertensive treatment agent, and no pharmacokinetic parameters for guanethidine are reported. |
| PD | Jiang_1996 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of nifedipine on aortic rings, not guanethidine; guanethidine is only mentioned as a co-treatment for blood pressure control. |
| popPK | KIRKENDALL_1962 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PD | KIRKENDALL_1962 | not_relevant | 1 | 0 | The text is a title of a review article and does not contain the full text or specific numeric PD parameters for guanethidine. |
| popPK | Kamata_1988 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of VIP and non-adrenergic non-cholinergic neurons in rat stomach, using guanethidine only as a blocking agent, and reports no pharmacokinetic parameters for guanethidine. |
| PD | Kamata_1988 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50, EC50) for VIP, not guanethidine; guanethidine is used only as a pharmacological blocker to isolate non-adrenergic/non-cholinergic pathways. |
| popPK | Kim_1995 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of VIP-mediated relaxation in rabbit tissue, where guanethidine is used only as a non-specific adrenergic blocker, not as the subject drug for PK analysis. |
| PD | Kim_1995 | not_relevant | 0 | 0 | Guanethidine is used only as a pharmacological tool to block adrenergic transmission, and no exposure-response or dose-response relationship for guanethidine itself is reported. |
| popPK | Kitazawa_1998 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Kitazawa_1998 | not_relevant | 0 | 0 | The paper investigates the pharmacology of 5-hydroxytryptamine (serotonin) on porcine myometrium and does not mention guanethidine or report any exposure-response relationship for it. |
| popPK | Kohjitani_2001 | irrelevant | 0 | 0 | Guanethidine is used only as a pharmacological tool to block adrenergic nerves in an in-vitro mechanistic study, with no pharmacokinetic parameters reported. |
| PD | Kohjitani_2001 | not_relevant | 0 | 0 | Guanethidine is used only as a fixed-concentration pharmacological blocker to isolate NANC responses; the paper reports PD parameters (EC50) for ketamine and midazolam, not for guanethidine. |
| popPK | Kohjitani_2005 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation in rabbit esophageal smooth muscle where guanethidine is used only as a non-selective adrenergic blocker to isolate NANC responses, with no pharmacokinetic parameters reported. |
| PD | Kohjitani_2005 | not_relevant | 0 | 0 | Guanethidine is used only as a pharmacological tool to block adrenergic transmission in an in vitro tissue bath experiment; the paper reports PD parameters for NMDA receptor modulators (MK801, NMDA), not for guanethidine. |
| PGx | Konstandi_2006 | not_relevant | 0 | 0 | The paper uses guanethidine as a tool to deplete peripheral catecholamines to study CYP1A2 regulation, rather than reporting a pharmacogenomic effect on guanethidine's own PK or PD parameters. |
| PGx | Konstandi_2008 | not_relevant | 0 | 0 | The paper investigates the role of catecholamines in stress-induced CYP1A2 regulation using guanethidine as a pharmacological tool to deplete peripheral catecholamines, rather than reporting a pharmacogenomic effect of a gene variant on guanethidine's PK or PD. |
| popPK | Korolkiewicz_1997 | irrelevant | 0 | 0 | The study is a pharmacological investigation of galanin effects in rat gastric fundus where guanethidine is used only as a non-specific antagonist, with no pharmacokinetic parameters reported. |
| PD | Korolkiewicz_1997 | not_relevant | 0 | 0 | The paper studies galanin analogs; guanethidine is used only as a non-specific antagonist to rule out adrenergic involvement, with no dose-response or PD parameters reported for it. |
| popPK | LECOMTE_1964 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| PD | LECOMTE_1964 | not_relevant | 0 | 0 | The paper discusses cystamine, not guanethidine, and does not report any exposure-response or dose-response relationship for the target drug. |
| popPK | Lefebvre_1992 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| PD | Lefebvre_1992 | not_relevant | 0 | 0 | The paper investigates the relaxant effects of BRL 38227 and pinacidil, not guanethidine. |
| popPK | Maggi_1994 | irrelevant | 0 | 0 | The study is a pharmacological investigation of tachykinin receptors in guinea-pig colon, using guanethidine only as a non-specific adrenergic blocker, and reports no pharmacokinetic parameters. |
| PD | Maggi_1994 | not_relevant | 0 | 0 | The paper reports pharmacological data for tachykinins (senktide, neurokinin B), not guanethidine, which is used only as a background blocker. |
| popPK | Markowitz_1995 | irrelevant | 0 | 0 | The paper is a review of drug interactions and does not report original quantitative pharmacokinetic parameters for guanethidine. |
| PD | Markowitz_1995 | not_relevant | 1 | 0 | The paper is a qualitative review of drug interactions and does not report any numeric pharmacodynamic parameters or concentration-effect curves for guanethidine. |
| popPK | Martins_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of CCK effects on rat duodenum where guanethidine is used only as a non-specific blocker, not as the subject drug for PK analysis. |
| PD | Martins_2006 | not_relevant | 0 | 0 | Guanethidine is used only as a pharmacological tool to block adrenergic transmission, and no exposure-response or dose-response relationship for guanethidine itself is reported. |
| popPK | Martínez_1994 | irrelevant | 0 | 0 | The study is a pharmacological investigation of vascular contraction where guanethidine is used only as a tool compound to block nerve stimulation, not as the subject of pharmacokinetic analysis. |
| PD | Martínez_1994 | not_relevant | 0 | 0 | The paper studies the pharmacology of the human deferential artery using noradrenaline and electrical stimulation; guanethidine is used only as a tool to block nerve-mediated contractions, and no exposure-response or dose-response relationship for guanethidine is reported. |
| popPK | Medina_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of sildenafil on penile vessels where guanethidine is used only as a tool to block norepinephrine release, not as the subject of pharmacokinetic analysis. |
| PD | Medina_2000 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of sildenafil, not guanethidine; guanethidine is used only as a tool compound to block norepinephrine release. |
| popPK | Meini_1996 | irrelevant | 0 | 0 | The study is a pharmacological assay for bradykinin receptors where guanethidine is used only as a non-specific blocker, not as the subject drug for PK analysis. |
| PD | Meini_1996 | not_relevant | 0 | 0 | The paper uses guanethidine as a non-specific blocker in a bradykinin receptor assay and does not report any pharmacodynamic or exposure-response relationship for guanethidine itself. |
| popPK | Menozzi_2018 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| PD | Menozzi_2018 | not_relevant | 0 | 0 | The paper studies α2-adrenergic agonists in horse bronchi and does not mention guanethidine or report any exposure-response or dose-response data for it. |
| popPK | Middeke_2008 | irrelevant | 0 | 0 | The paper is a clinical review on dosing strategies for hypertension and mentions guanethidine only as a class of drug for withdrawal considerations, without reporting any pharmacokinetic parameters. |
| PD | Middeke_2008 | not_relevant | 1 | 0 | The text is a general review of dosing strategies and withdrawal phenomena; it mentions guanethidine only as an example of a drug requiring caution during withdrawal and provides no numeric PD parameters or concentration-effect data. |
| popPK | Minocha_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of erythromycin's effects on guinea pig intestine, where guanethidine is used only as a tool compound to block adrenergic neurons, not as the subject of pharmacokinetic analysis. |
| PD | Minocha_1991 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of erythromycin, not guanethidine; guanethidine is only used as a control agent. |
| popPK | Morris_1991 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | Morris_1991 | not_relevant | 0 | 0 | The paper focuses on the roles of neuropeptide Y and noradrenaline in guinea-pig vasculature and does not mention guanethidine or report any exposure-response or dose-response data for it. |
| popPK | Nangle_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neural regulation in mouse corpus cavernosum where guanethidine is used only as a pharmacological tool to block adrenergic transmission, not as the subject of a pharmacokinetic analysis. |
| popPK | Pagán_2009 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of vascular smooth muscle contraction in pig radial arteries, using guanethidine only as a tool compound to block noradrenergic transmission, and reports no pharmacokinetic parameters. |
| PD | Pagán_2009 | not_relevant | 1 | 0 | The paper reports qualitative inhibition of neurogenic vasoconstriction by guanethidine in an organ bath study but does not provide numeric concentration-effect parameters or a quantitative PD model for guanethidine. |
| popPK | Pencheva_1993 | irrelevant | 0 | 0 | The study is a pharmacological investigation of GABA receptors in cat ileum where guanethidine is used only as a negative control agent, with no pharmacokinetic parameters reported. |
| PD | Pencheva_1993 | not_relevant | 0 | 0 | The paper studies GABA and GABA-A receptors; guanethidine is only mentioned as a negative control that had no effect, with no PD parameters reported for it. |
| popPK | Postorino_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of neurotransmission where guanethidine is used only as a blocking agent, not as the subject of pharmacokinetic analysis. |
| PD | Postorino_1993 | not_relevant | 0 | 0 | The paper uses guanethidine only as a pharmacological tool to block adrenergic transmission and does not report any exposure-response or dose-response relationship for guanethidine itself. |
| popPK | REUSE_1960 | irrelevant | 0 | 0 | no_text gate: only 44 chars of text extracted (&lt; 400) |
| PD | REUSE_1960 | not_relevant | 0 | 0 | The provided text contains only the title and no body content, so no numeric PD parameters or exposure-response relationships can be extracted. |
| popPK | Radomirov_1992 | irrelevant | 0 | 0 | The study is a pharmacological investigation of endothelin-1 effects on rat vas deferens where guanethidine is used only as a tool drug to block sympathetic innervation, not as the subject of a pharmacokinetic analysis. |
| PD | Radomirov_1992 | not_relevant | 0 | 0 | The paper studies the effect of endothelin-1 on rat vas deferens; guanethidine is used only as a tool to block sympathetic innervation, and no exposure-response or dose-response relationship for guanethidine itself is reported. |
| popPK | Ralevic_1994 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology paper on neuropeptide Y in rat mesenteric arteries, where guanethidine is used only as a tool to block sympathetic transmission, and no pharmacokinetic parameters are reported. |
| PD | Ralevic_1994 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of neuropeptide Y and its antagonist alpha-trinositol; guanethidine is used only as a tool to block sympathetic transmission and no PD parameters for guanethidine are reported. |
| popPK | Ralevic_1996 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of vitamin E deficiency in rat mesenteric arteries where guanethidine is used only as a tool compound to block sympathetic transmission, not as the subject of a pharmacokinetic analysis. |
| PD | Ralevic_1996 | not_relevant | 0 | 0 | The paper uses guanethidine as a fixed-concentration tool compound to block sympathetic tone, but does not report a dose-response or exposure-response relationship for guanethidine itself. |
| popPK | Ralevic_1996_2 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of vasoconstrictor responses in rat mesenteric arteries, using guanethidine only as a tool for sympathectomy, and reports no pharmacokinetic parameters. |
| popPK | Ren_1994 | irrelevant | 0 | 0 | The study is a pharmacological investigation of vascular responses in isolated canine arteries where guanethidine is used only as a tool to inhibit nerve stimulation, not as a subject for pharmacokinetic analysis. |
| PD | Ren_1994 | not_relevant | 1 | 0 | The paper mentions guanethidine only qualitatively as an inhibitor of nerve-stimulated vasoconstriction, without providing any numeric dose-response data, concentration-effect curves, or PD parameters for guanethidine itself. |
| popPK | Sasaki_2007 | irrelevant | 0 | 0 | The study is a mechanistic organ culture experiment investigating testicular descent, using guanethidine only as a pharmacological antagonist without reporting any pharmacokinetic parameters. |
| PD | Sasaki_2007 | not_relevant | 1 | 0 | The paper reports a qualitative observation that guanethidine had no effect on contractility compared to baseline, but provides no numeric concentration-effect data, dose-response curve, or PD parameters for guanethidine. |
| popPK | Segarra_1999 | irrelevant | 0 | 0 | The study is a mechanistic investigation of adrenergic contraction in isolated dog pulmonary arteries where guanethidine is used only as a pharmacological tool to block nerve stimulation, not as the subject of a pharmacokinetic analysis. |
| PD | Segarra_1999 | not_relevant | 0 | 0 | Guanethidine is used only as a tool compound to block neurogenic contractions; no exposure-response or dose-response relationship for guanethidine itself is reported. |
| popPK | Silva_2005 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of phentolamine in human corpus cavernosum, where guanethidine is used only as a background agent to block adrenergic influences, and no pharmacokinetic parameters are reported. |
| popPK | Simionescu_1979 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| PD | Simionescu_1979 | not_relevant | 1 | 0 | The text is a title/abstract snippet describing a qualitative review of nonspecific pharmacodynamics without providing any numeric PD parameters or concentration-effect data. |
| popPK | Spencer_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment using guanethidine as a pharmacological tool to block sympathetic responses, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Tabrizchi_1992 | irrelevant | 0 | 0 | The study investigates the hemodynamic effects of angiotensin II in rats using guanethidine as a pharmacological tool to block sympathetic neurons, rather than reporting pharmacokinetic parameters for guanethidine. |
| PD | Tabrizchi_1992 | not_relevant | 0 | 0 | The paper investigates the dose-response relationship of angiotensin II, not guanethidine; guanethidine is used only as a pretreatment to block sympathetic effects. |
| popPK | Van_2001 | irrelevant | 0 | 0 | The study investigates the contractile effects of motilin and erythromycin on human colon smooth muscle, using guanethidine only as a non-interfering control agent, and reports no pharmacokinetic parameters. |
| PD | Van_2001 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of motilin and erythromycin, mentioning guanethidine only as a negative control that did not interfere with the effects, without reporting any dose-response or exposure-response data for guanethidine itself. |
| popPK | Vassilev_1992 | irrelevant | 0 | 0 | The study is a pharmacological investigation of prostaglandin effects in rat rectum where guanethidine is used only as a non-pharmacokinetic pharmacological tool, with no PK parameters reported. |
| PD | Vassilev_1992 | not_relevant | 0 | 0 | The paper investigates the contractile effects of prostaglandin E2 and its antagonists; guanethidine is used only as a pharmacological tool to block neural effects, and no exposure-response or dose-response relationship for guanethidine itself is reported. |
| popPK | Venkova_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of neuromuscular function where guanethidine is used as a blocking agent, not a pharmacokinetic study of the drug's disposition. |
| PD | Venkova_2000 | not_relevant | 0 | 0 | The paper uses guanethidine as a pharmacological tool to block adrenergic transmission in an in vitro neuromuscular study, not to characterize the pharmacodynamic exposure-response relationship of guanethidine itself. |
| popPK | Wang_1993 | irrelevant | 0 | 0 | no_text gate: only 188 chars of text extracted (&lt; 400) |
| PD | Wang_1993 | not_relevant | 0 | 0 | The paper investigates the effects of diphenyleneiodonium, not guanethidine, and does not report any pharmacodynamic parameters for guanethidine. |
| popPK | Wethmar_2001 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding/displacement experiment and does not report any pharmacokinetic disposition parameters for guanethidine. |
| PD | Wethmar_2001 | not_relevant | 0 | 0 | The paper discusses ligand interactions at angiotensin II and imidazoline receptors but does not report any pharmacodynamic or exposure-response data for guanethidine. |
| popPK | Yamamoto_1987 | irrelevant | 0 | 0 | The study focuses on coronary artery spasm pathogenesis in swine, using guanethidine only as a nerve transmitter blocker to test mechanism, with no pharmacokinetic parameters reported. |
| PD | Yamamoto_1987 | not_relevant | 0 | 0 | The paper studies histamine-induced coronary spasm; guanethidine is used only as a blocker to show it does not influence the histamine dose-response, and no PD parameters for guanethidine itself are reported. |
| popPK | Yu_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of furosemide on equine trachealis muscle, where guanethidine is used only as a pretreatment agent to block sympathetic transmission, not as the subject of pharmacokinetic analysis. |
| PD | Yu_1992 | not_relevant | 0 | 0 | The paper investigates the effect of furosemide on equine trachealis, using guanethidine only as a pretreatment to block adrenergic transmission, and does not report any pharmacodynamic or exposure-response relationship for guanethidine itself. |
| popPK | da_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of α-terpineol on gastric emptying, using guanethidine only as a mechanistic probe without reporting any pharmacokinetic parameters for it. |
| PD | da_2016 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of alpha-terpineol; guanethidine is only mentioned as a negative control agent that did not interfere with the effect, with no exposure-response or dose-response analysis provided for it. |
| popPK | van_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of mibefradil where guanethidine is used only as a tool compound to block sympathetic neurotransmitter release, with no pharmacokinetic parameters reported. |
| PD | van_2000 | not_relevant | 0 | 0 | The paper studies mibefradil and verapamil; guanethidine is only used as a tool compound to block EFS, not as the subject of a PD or exposure-response analysis. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
