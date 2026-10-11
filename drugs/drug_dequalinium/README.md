<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;dequalinium&quot;}]"></div>

# dequalinium

- **generic name:** dequalinium
- **ATC codes:** `D08AH01`, `G01AC05`, `R02AA02`
- **DrugBank:** [DB04209](https://go.drugbank.com/drugs/DB04209) · **PubChem:** [CID 2993](https://pubchem.ncbi.nlm.nih.gov/compound/2993)
- **molar mass:** 456.6654 g/mol (C30H40N4) — DrugBank
- **groups:** approved

## About

Dequalinium is an antiseptic used against infections of the skin, vagina, and throat. It is an approved antiseptic, used mainly in topical preparations for these areas.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q81984379](https://www.wikidata.org/wiki/Q81984379) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:38 | 0:31 | 0/0/0 | 1/1/0 | 0/0/0 | 72,545/1,685 | einfracz / qwen3.8-27b | 3 | 0/5 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bugay_2020_fractional_inhibition](drugs/drug_dequalinium/pd_Bugay_2020_fractional_inhibition.md) | fractional inhibition of M3 muscarinic receptor activation ← dequalinium chloride · direct sigmoid Emax (Hill) effect | — | Bugay V et al., Bis-Quinolinium Cyclophane Blockers of…, Frontiers in pharmacology (2020) | [10.3389/fphar.2020.552211](https://doi.org/10.3389/fphar.2020.552211) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Dawkins_2005_efferent_effects](drugs/drug_dequalinium/pd_Dawkins_2005_efferent_effects.md) | efferent effects ← dequalinium · inhibition effect | — | Dawkins R et al., Pharmacology of acetylcholine-mediated…, Journal of neurophysiology (2005) | [10.1152/jn.01283.2004](https://doi.org/10.1152/jn.01283.2004) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dequalinium) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CALM1 (target), CNGA1 (blocker), CNGA2 (blocker), KCNMA1 (inhibitor), KCNN1 (blocker), KCNN2 (blocker), KCNN3 (blocker), PRKCA (inhibitor), SNCA (modulator), XIAP (inhibitor), XIAP (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 41 matched, 39 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Castle_1993.pdf` | Castle NA et al., Dequalinium: a potent inhibitor of apam…, European journal of pharmac… (1993) | pd | 4 | [10.1016/0014-2999(93)90590-e](https://doi.org/10.1016/0014-2999(93)90590-e) | [8100530](https://www.ncbi.nlm.nih.gov/pubmed/8100530) | metadata signals extractable PD data (IC50) |
| `Dunn_1993.pdf` | Dunn PM, Ganglion-blocking activity of dequalini…, European journal of pharmac… (1993) | pd | 4 | [10.1016/0014-2999(93)90570-8](https://doi.org/10.1016/0014-2999(93)90570-8) | [8382618](https://www.ncbi.nlm.nih.gov/pubmed/8382618) | metadata signals extractable PD data (EC50) |
| `Dunn_1994.pdf` | Dunn PM, Dequalinium, a selective blocker of the…, European journal of pharmac… (1994) | pd | 4 | [10.1016/0014-2999(94)90596-7](https://doi.org/10.1016/0014-2999(94)90596-7) | [8157060](https://www.ncbi.nlm.nih.gov/pubmed/8157060) | metadata signals extractable PD data (IC50) |
| `Dunn_1996.pdf` | Dunn PM et al., Discrimination between subtypes of apam…, British journal of pharmaco… (1996) | pd | 4 | [10.1111/j.1476-5381.1996.tb15151.x](https://doi.org/10.1111/j.1476-5381.1996.tb15151.x) | [8825340](https://www.ncbi.nlm.nih.gov/pubmed/8825340) | metadata signals extractable PD data (IC50) |
| `Gutierrez-Lugo_2009.pdf` | Gutierrez-Lugo MT et al., Dequalinium, a new inhibitor of Mycobac…, Journal of biomolecular scr… (2009) | pd | 4 | [10.1177/1087057109335743](https://doi.org/10.1177/1087057109335743) | [19525487](https://www.ncbi.nlm.nih.gov/pubmed/19525487) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T21:37:37.709181+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amiri_2023 | irrelevant | 0 | 0 | The paper is a computational study on drug repurposing via graph embedding and does not contain any pharmacokinetic data for dequalinium. |
| PD | Amiri_2023 | not_relevant | 0 | 0 | The paper describes a computational method for predicting drug-target interactions using graph embedding and does not report any pharmacodynamic or exposure-response data for dequalinium. |
| popPK | Belanger-Coast_2022 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study reporting IC50 values for receptor antagonism, not a pharmacokinetic study with disposition parameters. |
| popPK | Bodden_1986 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on calmodulin inhibition and cell proliferation, reporting no pharmacokinetic parameters for dequalinium. |
| popPK | Bugay_2020 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics (muscarinic receptor antagonism) of dequalinium and its derivatives, not pharmacokinetic parameters. |
| popPK | Carignani_2002 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study characterizing potassium channels, using dequalinium chloride only as a pharmacological probe/blocker, not as a subject for pharmacokinetic analysis. |
| PD | Carignani_2002 | not_relevant | 3 | 2 | The paper reports only a single-point inhibition (&lt;50%) for dequalinium at 200 µM without providing an IC50 or dose-response curve, making it insufficient for extractable PD modeling. |
| popPK | Castle_1993 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| popPK | Chan_2000 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on neurotoxicity and does not report any pharmacokinetic parameters for dequalinium. |
| popPK | Chan_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurotoxicity and does not report any pharmacokinetic parameters for dequalinium. |
| popPK | Chubanov_2012 | irrelevant | 0 | 0 | The paper is a mechanistic study on ion channel modulation where dequalinium is used as a pharmacological tool/comparator, not a PK study. |
| PD | Chubanov_2012 | not_relevant | 2 | 1 | The paper reports an IC50 for NS8593 but only qualitatively mentions dequalinium as an inhibitor without providing specific numeric PD parameters or a concentration-effect curve for it. |
| popPK | Dawkins_2005 | irrelevant | 0 | 0 | The study investigates the pharmacology of cholinergic signaling in the lateral line organ using dequalinium as a pharmacological antagonist, not for its population pharmacokinetics. |
| popPK | Dunn_1993 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| popPK | Dunn_1994 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| popPK | Dunn_1996 | irrelevant | 0 | 0 | no_text gate: only 153 chars of text extracted (&lt; 400) |
| PD | Dunn_1996 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of gallamine and UCL 1530 on ion channels, with no mention of dequalinium or any exposure-response relationship for it. |
| popPK | Gurovic_2011 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay where dequalinium is used only as a reference compound, with no pharmacokinetic parameters reported. |
| PD | Gurovic_2011 | not_relevant | 3 | 2 | The paper reports an IC50 for the primary compound (Heliantriol B2) and qualitatively states it is more active than dequalinium, but it does not provide numeric PD parameters (IC50, Emax, etc.) or a concentration-effect curve for dequalinium itself. |
| popPK | Gutierrez-Lugo_2009 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Gutierrez-Lugo_2009 | not_relevant | 0 | 0 | The paper describes the discovery and mechanism of action of dequalinium as a mycothiol ligase inhibitor but does not report pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters (e.g., EC50, Emax) in a clinical or PK/PD context. |
| popPK | Hait_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytotoxicity and drug accumulation in cell lines, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Imrie_2020 | irrelevant | 0 | 0 | The paper describes a deep generative model for 3D linker design and does not contain any pharmacokinetic data for dequalinium. |
| PD | Imrie_2020 | not_relevant | 0 | 0 | The paper describes a deep generative model for 3D molecular linker design and contains no pharmacodynamic, exposure-response, or dose-response data for dequalinium or any other drug. |
| popPK | Long_2007 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of coronary artery relaxation mechanisms where dequalinium is used only as a potassium channel antagonist tool compound, not as the subject drug for PK analysis. |
| PD | Long_2007 | not_relevant | 0 | 0 | The paper investigates the mechanism of hemokinin-1-induced vasodilation and mentions dequalinium only as a negative control antagonist that did not inhibit the response, without reporting any dose-response or exposure-response data for dequalinium itself. |
| popPK | Malik-Hall_2000 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on ion channel blocking activity (IC50) and does not report pharmacokinetic parameters for dequalinium. |
| popPK | Mallick_2019 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro characterization of nanoparticles using dequalinium as a targeting moiety, with no pharmacokinetic parameters reported. |
| PD | Mallick_2019 | not_relevant | 1 | 1 | The paper reports an IC50 for curcumin (the payload) but does not provide a pharmacodynamic model or exposure-response relationship for dequalinium itself. |
| popPK | Manetta_1996 | irrelevant | 0 | 0 | The study focuses on the cytotoxic activity of novel phosphonium salts (APPCL and APPI), with dequalinium mentioned only as a background comparator, and no pharmacokinetic parameters are reported. |
| popPK | Modica-Napolitano_2003 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay using dequalinium as a mitochondrial inhibitor, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Mursaleen_2020 | irrelevant | 0 | 0 | The study is an in-vitro formulation and mechanistic study where dequalinium is used as a nanocarrier component, not as the subject drug for pharmacokinetic analysis. |
| PD | Mursaleen_2020 | not_relevant | 0 | 0 | The paper focuses on the formulation of NAC nanocarriers and reports qualitative/semi-quantitative protective effects at a single concentration (1000 μM) without deriving numeric PD parameters (e.g., EC50, Emax) or a dose-response curve for dequalinium. |
| popPK | Mursaleen_2021 | irrelevant | 0 | 0 | The study focuses on the neuroprotective effects of hydroxytyrosol nanocarriers in an in vitro model, where dequalinium is only a component of the carrier system and no pharmacokinetic parameters are reported. |
| PD | Mursaleen_2021 | not_relevant | 0 | 0 | The paper focuses on the formulation and delivery of hydroxytyrosol using dequalinium-based nanocarriers, reporting no pharmacodynamic or exposure-response data for dequalinium itself. |
| popPK | Mursaleen_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nanocarrier delivery and mitochondrial targeting, not a pharmacokinetic study reporting disposition parameters for dequalinium. |
| PD | Mursaleen_2023 | not_relevant | 0 | 0 | The paper investigates the nanocarrier delivery and protective effects of curcumin, NAC, and deferoxamine, with dequalinium serving only as a component of the carrier system; no pharmacodynamic or exposure-response analysis for dequalinium is reported. |
| popPK | Palmer_2008 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology paper using dequalinium as a channel blocker, not a pharmacokinetic study. |
| PGx | Pereira_2026 | not_relevant | 0 | 0 | The paper reports in vitro pharmacological activity of dequalinium against a specific bacterial strain (N. gonorrhoeae), not pharmacogenomic effects on human PK/PD parameters. |
| popPK | Qin_2000 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on protein kinase C inhibition and does not report any pharmacokinetic parameters for dequalinium. |
| popPK | Qu_2005 | irrelevant | 0 | 0 | The paper is an electrophysiology study investigating the molecular mechanism of dequalinium block on ion channels, not a pharmacokinetic study. |
| popPK | Rotenberg_1998 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on protein kinase C inhibition and does not report any pharmacokinetic parameters for dequalinium. |
| popPK | Strøbaek_2000 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study of ion channels where dequalinium is used as a blocker, not a pharmacokinetic study of dequalinium disposition. |
| popPK | Wann_1999 | irrelevant | 0 | 0 | The paper is an electrophysiology study characterizing potassium channels in rat hippocampal neurons, where dequalinium is used only as a blocking agent to test channel sensitivity, not as a subject drug for pharmacokinetic analysis. |
| PD | Wann_1999 | not_relevant | 0 | 0 | The paper reports that the channel is insensitive to dequalinium, providing no exposure-response relationship or numeric PD parameters for the drug. |
| popPK | Wu_2004 | irrelevant | 0 | 0 | The study investigates the mechanism of action of cilostazol on ion channels, using dequalinium only as a comparative inhibitor, and contains no pharmacokinetic data. |
| PD | Wu_2004 | not_relevant | 0 | 0 | The paper investigates the pharmacology of cilostazol, not dequalinium; dequalinium is only mentioned as a negative control. |
| popPK | Yamane_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dequalinium as an hOCT2 inhibitor (reporting IC50 values) and explicitly states that no pharmacokinetic information for dequalinium is available, containing no PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
