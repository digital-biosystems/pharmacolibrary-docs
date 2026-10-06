<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;phentolamine&quot;}]"></div>

# phentolamine

- **generic name:** phentolamine
- **ATC codes:** `C04AB01`, `V03AB36`
- **DrugBank:** [DB00692](https://go.drugbank.com/drugs/DB00692) · **PubChem:** [CID 5775](https://pubchem.ncbi.nlm.nih.gov/compound/5775)
- **molar mass:** 281.3523 g/mol (C17H19N3O) — DrugBank
- **groups:** approved, investigational

## About

Phentolamine is an alpha-blocking vasodilator used to treat high blood pressure, including hypertensive emergencies, and to manage tissue damage from extravasation. It remains an approved medicine, used in specialised settings such as hospitals rather than widely in routine care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420360](https://www.wikidata.org/wiki/Q420360) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:26 | 4:20 | 0/0/0 | 1/0/0 | 0/0/0 | 147,776/5,309 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 4/7 | 5/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Shiraki_1998_cell_viability](drugs/drug_phentolamine/pd_Shiraki_1998_cell_viability.md) | cell viability ← phentolamine · direct Emax (saturable) effect | — | Shiraki Y, [Cell death induced by noradrenaline in…, Nihon Ika Daigaku zasshi (1998) | [10.1272/jnms1923.65.34](https://doi.org/10.1272/jnms1923.65.34) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=phentolamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), DRD2 (target), KCNJ11 (blocker).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 810 matched, 124 returned
- **screened:** 5  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_16 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Toklucu_2025.pdf` | Toklucu I et al., α-Adrenoreceptor blocker phentolamine i…, British journal of pharmaco… (2025) | pd | 5 | [10.1111/bph.17450](https://doi.org/10.1111/bph.17450) | [39888002](https://www.ncbi.nlm.nih.gov/pubmed/39888002) | metadata signals extractable PD data (IC50) |
| `Barrett-OKeefe_2013.pdf` | Barrett-O'Keefe Z et al., Angiotensin II potentiates α-adrenergic…, Clinical science (London, E… (2013) | pd | 4 | [10.1042/CS20120424](https://doi.org/10.1042/CS20120424) | [22985469](https://www.ncbi.nlm.nih.gov/pubmed/22985469) | metadata signals extractable PD data (EC50) |
| `Jahnel_1992.pdf` | Jahnel U et al., Electrophysiologic and inotropic effect…, Naunyn-Schmiedeberg's archi… (1992) | pd | 4 | [10.1007/BF00167575](https://doi.org/10.1007/BF00167575) | [1328895](https://www.ncbi.nlm.nih.gov/pubmed/1328895) | metadata signals extractable PD data (EC50) |
| `Love_1999.pdf` | Love JA et al., Veratridine-stimulated amylase secretio…, Pancreas (1999) | pd | 4 | [10.1097/00006676-199910000-00003](https://doi.org/10.1097/00006676-199910000-00003) | [10505753](https://www.ncbi.nlm.nih.gov/pubmed/10505753) | metadata signals extractable PD data (EC50) |
| `Lønning_1995.pdf` | Lønning K et al., The bovine central adrenomedullary vein…, Acta physiologica Scandinav… (1995) | pd | 4 | [10.1111/j.1748-1716.1995.tb09991.x](https://doi.org/10.1111/j.1748-1716.1995.tb09991.x) | [8719261](https://www.ncbi.nlm.nih.gov/pubmed/8719261) | metadata signals extractable PD data (EC50) |
| `Musso_1989.pdf` | Musso MJ et al., [Renal vasodilator effect of parathormo…, Archives des maladies du co… (1989) | pd | 4 | not captured | [2510651](https://www.ncbi.nlm.nih.gov/pubmed/2510651) | metadata signals extractable PD data (EC50) |
| `Nörenberg_1997.pdf` | Nörenberg W et al., Subtype determination of soma-dendritic…, Naunyn-Schmiedeberg's archi… (1997) | pd | 4 | [10.1007/pl00005036](https://doi.org/10.1007/pl00005036) | [9272720](https://www.ncbi.nlm.nih.gov/pubmed/9272720) | metadata signals extractable PD data (IC50) |
| `Ong_1992.pdf` | Ong J et al., Actions of thienyl analogs of baclofen…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0014-2999(92)90189-b](https://doi.org/10.1016/0014-2999(92)90189-b) | [1330601](https://www.ncbi.nlm.nih.gov/pubmed/1330601) | metadata signals extractable PD data (EC50) |
| `Patil_2007.pdf` | Patil PN, The classical competitive antagonism of…, Autonomic & autacoid pharma… (2007) | pd | 4 | [10.1111/j.1474-8673.2006.00386.x](https://doi.org/10.1111/j.1474-8673.2006.00386.x) | [17199878](https://www.ncbi.nlm.nih.gov/pubmed/17199878) | metadata signals extractable PD data (IC50) |
| `Reiser_1983.pdf` | Reiser G et al., Tetrodotoxin-sensitive ion channels cha…, Brain research (1983) | pd | 4 | [10.1016/0006-8993(83)90640-6](https://doi.org/10.1016/0006-8993(83)90640-6) | [6299468](https://www.ncbi.nlm.nih.gov/pubmed/6299468) | metadata signals extractable PD data (EC50) |
| `Scheibner_2001.pdf` | Scheibner J et al., Alpha2-adrenoceptors modulating neurona…, British journal of pharmaco… (2001) | pd | 4 | [10.1038/sj.bjp.0703882](https://doi.org/10.1038/sj.bjp.0703882) | [11181434](https://www.ncbi.nlm.nih.gov/pubmed/11181434) | metadata signals extractable PD data (EC50) |
| `Sharif_1994.pdf` | Sharif SI, Dopamine contracts the rat isolated sem…, Pharmacology (1994) | pd | 4 | [10.1159/000139196](https://doi.org/10.1159/000139196) | [7912441](https://www.ncbi.nlm.nih.gov/pubmed/7912441) | metadata signals extractable PD data (EC50) |
| `Vázquez_1999.pdf` | Vázquez SM et al., Alpha2-adrenergic effect on human breas…, Breast cancer research and… (1999) | pd | 4 | [10.1023/a:1006196308001](https://doi.org/10.1023/a:1006196308001) | [10472778](https://www.ncbi.nlm.nih.gov/pubmed/10472778) | metadata signals extractable PD data (EC50) |
| `Wang_1993.pdf` | Wang YX et al., Functional integrity of the central and…, The Journal of pharmacology… (1993) | pd | 4 | not captured | [7682612](https://www.ncbi.nlm.nih.gov/pubmed/7682612) | metadata signals extractable PD data (Emax) |
| `Wang_2009.pdf` | Wang M et al., [Pharmacological characteristics of con…, Yao xue xue bao = Acta phar… (2009) | pd | 4 | not captured | [19618721](https://www.ncbi.nlm.nih.gov/pubmed/19618721) | metadata signals extractable PD data (EC50) |
| `Xu_2020.pdf` | Xu G et al., Molecular and pharmacological character…, Insect biochemistry and mol… (2020) | pd | 4 | [10.1016/j.ibmb.2020.103337](https://doi.org/10.1016/j.ibmb.2020.103337) | [32109588](https://www.ncbi.nlm.nih.gov/pubmed/32109588) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T20:24:33.841459+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ameer_2010 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of a plant extract where phentolamine is used only as a positive control, with no pharmacokinetic parameters reported. |
| PD | Ameer_2010 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamic profile of Loranthus ferrugineus, using phentolamine only as a qualitative positive control without reporting specific numeric PD parameters for phentolamine. |
| popPK | Atkinson_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of phenylephrine, not phentolamine. |
| popPK | Bafor_2010 | irrelevant | 0 | 0 | Phentolamine is used only as an in-vitro antagonist to probe the mechanism of a plant extract, not as the subject of a pharmacokinetic study. |
| PD | Bafor_2010 | not_relevant | 1 | 0 | The paper reports PD parameters (EC50, Emax) for the plant extract and oxytocin, but phentolamine is used only as a qualitative antagonist to test mechanism; no numeric PD parameters or exposure-response relationship for phentolamine itself are reported. |
| popPK | Bagrov_1998 | irrelevant | 0 | 0 | The study investigates the effects of digitalis-like factors on the Na+,K+-pump in human mesenteric arteries, using phentolamine only as a pharmacological tool to block adrenergic effects, not as the subject of pharmacokinetic analysis. |
| PD | Bagrov_1998 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of marinobufagenin and ouabain, not phentolamine; phentolamine is only used as a qualitative tool to block adrenergic effects. |
| popPK | Balfanz_2014 | irrelevant | 0 | 0 | The study characterizes honeybee octopamine receptors and uses phentolamine only as a pharmacological antagonist in an in vitro/insect model, not as a subject drug for PK analysis. |
| PD | Balfanz_2014 | not_relevant | 0 | 0 | The paper characterizes honeybee octopamine receptors and lists phentolamine only as a weak antagonist in a rank order of potency, without providing specific numeric PD parameters (e.g., Ki, IC50) or an exposure-response relationship for phentolamine. |
| popPK | Barrett-OKeefe_2013 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| popPK | Bennett_1978 | irrelevant | 0 | 0 | The study is a pharmacological investigation of adrenoceptor types in rat hearts using phentolamine as a blocking agent, not a pharmacokinetic study of phentolamine. |
| PD | Bennett_1978 | not_relevant | 3 | 2 | The paper reports a qualitative lack of change in EC50 and blockade susceptibility for phentolamine at different temperatures, but does not provide numeric PD parameters or extractable concentration-effect curves. |
| popPK | Bernhard_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurotransmitter release where phentolamine is used only as a pharmacological tool (alpha-2 antagonist), not as the subject of pharmacokinetic analysis. |
| PD | Bernhard_2004 | not_relevant | 0 | 0 | Phentolamine is used solely as a fixed-concentration alpha-2 antagonist to block autoinhibition, and no concentration-effect or dose-response analysis is performed for it. |
| PGx | Bischoff_2001 | not_relevant | 0 | 0 | The paper describes a pharmacological animal model for erectile dysfunction and does not investigate the impact of genetic variants on the pharmacokinetics or pharmacodynamics of phentolamine. |
| popPK | Brandão_1985 | irrelevant | 0 | 0 | The study investigates the release of noradrenaline in dog saphenous vein strips where phentolamine is used as a pharmacological agent to modulate alpha-adrenoceptors, not as the subject of a pharmacokinetic analysis. |
| popPK | Byon_2017 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular contraction mechanisms where phentolamine is used only as a tool compound, not as the subject of pharmacokinetic analysis. |
| PD | Byon_2017 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of dexmedetomidine; phentolamine is used only as a control antagonist in an in vitro assay without reported numeric PD parameters (e.g., Ki, pA2) or extractable dose-response curves for phentolamine itself. |
| popPK | Campos_2020 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of aortic contractions in a tortoise, using phentolamine as a non-selective alpha-adrenergic antagonist to characterize the mechanism of contraction, not to measure its pharmacokinetic parameters. |
| PD | Campos_2020 | not_relevant | 2 | 2 | The paper reports qualitative effects of phentolamine at two fixed concentrations on EFS-induced contractions but does not provide a concentration-response curve or derived PD parameters (e.g., EC50, Emax) for phentolamine. |
| popPK | Cayla_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of alpha2C-adrenoceptor regulation in HepG2 cells, where phentolamine is used only as a control antagonist, and no pharmacokinetic parameters are reported. |
| PD | Cayla_1999 | not_relevant | 0 | 0 | The paper studies alpha2-adrenoceptor regulation in HepG2 cells; phentolamine is mentioned only as a control antagonist that did not promote receptor up-regulation, with no exposure-response or dose-response analysis for phentolamine. |
| popPK | Crowcroft_1971 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of synaptic transmission in guinea-pig ganglia where phentolamine is used as a pharmacological tool to block noradrenaline effects, not as a subject for PK analysis. |
| popPK | Dasiewicz_2011 | irrelevant | 0 | 0 | Phentolamine is used only as a pharmacological antagonist to characterize bradykinin receptor pathways in skate, not as the subject of a pharmacokinetic study. |
| PD | Dasiewicz_2011 | not_relevant | 1 | 0 | The paper reports EC50 values for skate bradykinin, not phentolamine; phentolamine is only mentioned qualitatively as an inhibitor of vasoconstriction without providing numeric dose-response or PD parameters for it. |
| popPK | Davies_1979 | irrelevant | 0 | 0 | The study uses phentolamine as a pharmacological antagonist to probe receptor mechanisms, not as the subject drug for pharmacokinetic analysis, and no PK parameters are reported. |
| PD | Davies_1979 | not_relevant | 3 | 1 | The text describes qualitative shifts in dose-response curves for saralasin after phentolamine administration but does not provide numeric PD parameters (e.g., EC50, Emax) or specific concentration-effect data for phentolamine itself. |
| popPK | Deachapunya_2005 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle contractions where phentolamine is used only as a non-selective alpha-adrenergic antagonist to characterize the mechanism of action, not as the subject of a pharmacokinetic analysis. |
| PD | Deachapunya_2005 | not_relevant | 0 | 0 | The paper investigates the pharmacology of barakol; phentolamine is used only as a non-reactive control agent to rule out alpha-adrenergic involvement, and no dose-response or PD parameters are reported for phentolamine. |
| popPK | Deng_2021 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of insect receptors where phentolamine is used only as a reference antagonist, not a subject of PK analysis. |
| PD | Deng_2021 | not_relevant | 0 | 0 | The paper reports receptor binding/functional assay data (EC50) for an insect octopamine receptor, not a pharmacodynamic exposure-response relationship for phentolamine in a clinical or physiological context. |
| popPK | Eison_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of melatonin binding sites where phentolamine is used only as a negative control antagonist, with no pharmacokinetic parameters reported. |
| PD | Eison_1993 | not_relevant | 0 | 0 | The paper reports PD parameters for melatonin agonists, but phentolamine is only mentioned as an antagonist that failed to block the response, with no exposure-response or dose-response relationship reported for phentolamine itself. |
| popPK | Engler_2025 | irrelevant | 0 | 0 | The paper is an electrophysiological study investigating the mechanism of action on nerve fibers and does not report any pharmacokinetic parameters. |
| popPK | Fanning_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ergometrine's uterotonic effects where phentolamine is used only as a pharmacological antagonist, not as the subject of pharmacokinetic analysis. |
| PGx | Frame_2017 | not_relevant | 0 | 0 | The paper studies the vasoactive effects of fibronectin-derived peptides and does not report any pharmacogenomic effects on the PK or PD of phentolamine. |
| popPK | Frankhuyzen_1980 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurotransmitter release where phentolamine is used as a pharmacological antagonist, not a subject of pharmacokinetic analysis. |
| popPK | Gao_2018 | irrelevant | 0 | 0 | The paper is a mechanistic pharmacology study on receptor signaling (CXCR4/ACKR3) where phentolamine is used only as a comparator or inhibitor, with no pharmacokinetic parameters reported. |
| PD | Gao_2018 | not_relevant | 6 | 3 | The paper reports dose-response data (EC50) for prazosin and cyclazosin, but phentolamine is only screened at a single concentration (100 μM) and ranked qualitatively; no numeric PD parameters or dose-response curve for phentolamine are provided. |
| popPK | Gardiner_1993 | irrelevant | 0 | 0 | The study characterizes leukotriene receptors in ferret spleen strips, using phentolamine only as a non-specific antagonist to rule out adrenergic involvement, with no pharmacokinetic data reported. |
| PD | Gardiner_1993 | not_relevant | 0 | 0 | The paper characterizes leukotriene receptors; phentolamine is only mentioned as an inactive control agent, and no PD parameters for phentolamine are reported. |
| popPK | Gauda_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of clonidine, not phentolamine. |
| PD | Gauda_2022 | not_relevant | 0 | 0 | The paper studies clonidine, not phentolamine, and does not report a concentration-effect or dose-response relationship with numeric PD parameters. |
| popPK | Glavind_1997 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle physiology where phentolamine is used as a tool compound, not a subject of pharmacokinetic analysis. |
| PD | Glavind_1997 | not_relevant | 3 | 2 | The paper reports qualitative effects of phentolamine (enhanced relaxation) at a single concentration (10^-6 M) but does not provide a dose-response curve, EC50, or other numeric PD parameters for phentolamine. |
| popPK | Govier_1993 | irrelevant | 0 | 0 | The paper is a clinical report on the efficacy and safety of a drug combination for erectile dysfunction and does not contain any pharmacokinetic parameters for phentolamine. |
| PD | Govier_1993 | not_relevant | 1 | 0 | The paper reports clinical outcomes and qualitative dose-response observations for a drug combination but provides no numeric PD parameters, concentration-effect curves, or formal PK/PD modeling. |
| popPK | Haniuda_1991 | irrelevant | 0 | 0 | Phentolamine is used only as a pharmacological antagonist to characterize the mechanism of endothelin-1-induced vasoconstriction, not as the subject of a pharmacokinetic study. |
| PD | Haniuda_1991 | not_relevant | 0 | 0 | The paper reports an EC50 for endothelin-1, but explicitly states that phentolamine did not affect the response, providing no numeric PD parameters or dose-response relationship for phentolamine itself. |
| popPK | Høy_2001 | irrelevant | 0 | 0 | The study is a mechanistic investigation of phentolamine's effect on glucagon exocytosis in rat pancreatic cells and does not report any pharmacokinetic parameters. |
| popPK | Høy_2003 | irrelevant | 0 | 0 | The study investigates the mechanism of action of NNC77-0074 on pancreatic cells, using phentolamine only as a comparator agent in exocytosis assays, with no pharmacokinetic data reported. |
| PD | Høy_2003 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of NNC77-0074; phentolamine is only mentioned as a comparator in a different cell type without providing specific numeric PD parameters for it. |
| popPK | Inukai_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of alpha-adrenergic effects on prolactin secretion in rat pituitary cells, using phentolamine as a tool compound rather than measuring its pharmacokinetic parameters. |
| PD | Inukai_1992 | not_relevant | 4 | 3 | The paper reports an EC50 for the agonist norepinephrine, but only qualitatively describes the effect of the antagonist phentolamine without providing numeric PD parameters or a dose-response curve for phentolamine itself. |
| popPK | Ishikawa_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of a different compound (IBI) in rabbit iris muscles, with phentolamine used only as a protective agent, and no PK parameters are reported. |
| PD | Ishikawa_1996 | not_relevant | 0 | 0 | The paper investigates the pharmacology of isothiocyanatobenzyl imidazoline (IBI), not phentolamine; phentolamine is only mentioned as a protective agent in a qualitative context without specific PD parameters. |
| PGx | Ivancheva_2002 | not_relevant | 0 | 0 | The paper studies the pharmacological effects of Met-enkephalin on guinea-pig intestinal reflexes using phentolamine as a blocker, but does not report any pharmacogenomic effects on phentolamine's PK or PD parameters. |
| popPK | Izzo_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of phosphodiesterase inhibitors in guinea-pig ileum, where phentolamine is used only as a tool compound to characterize receptor interactions, not as a subject for pharmacokinetic analysis. |
| popPK | Jahnel_1992 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Jahnel_1992 | not_relevant | 0 | 0 | The paper focuses on alpha-adrenoceptor stimulation in human atrial muscle and does not mention phentolamine or report any exposure-response or dose-response data for it. |
| popPK | Janssen_2001 | irrelevant | 0 | 0 | The study is a mechanistic investigation of bronchial vascular tone in dogs where phentolamine is used only as a pharmacological antagonist to characterize receptor sensitivity, not as the subject of a pharmacokinetic analysis. |
| PD | Janssen_2001 | not_relevant | 4 | 3 | The paper reports an EC50 for phenylephrine and notes phentolamine sensitivity, but it does not provide a concentration-effect curve or numeric parameters for phentolamine itself. |
| popPK | Jim_1988 | irrelevant | 0 | 0 | Phentolamine is used only as a pharmacological antagonist to block alpha-adrenergic receptors in an in-vitro mechanistic study, with no pharmacokinetic parameters reported. |
| PD | Jim_1988 | not_relevant | 0 | 0 | The paper reports a concentration-response curve for phorbol-12,13-dibutyrate (PDB), not phentolamine; phentolamine is only used as a single-dose antagonist to show lack of effect. |
| popPK | Joshi_2006 | irrelevant | 0 | 0 | The study investigates the pulmonary vasoconstrictor action of KCNQ channel blockers in rat and mouse arteries, using phentolamine only as a pharmacological tool to block alpha-adrenoceptors, and reports no pharmacokinetic parameters for phentolamine. |
| PD | Joshi_2006 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of KCNQ channel blockers (linopirdine and XE991), using phentolamine only as a control agent to rule out adrenergic involvement; it does not report a PD relationship or numeric PD parameters for phentolamine itself. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | The paper is a high-throughput screen in zebrafish for neuroprotective compounds and does not report pharmacokinetic parameters for phentolamine. |
| PD | Kim_2022 | not_relevant | 0 | 0 | The paper describes a high-throughput screening assay in zebrafish and does not report any pharmacodynamic or exposure-response analysis for phentolamine. |
| popPK | Korolkiewicz_1997 | irrelevant | 0 | 0 | The study is a pharmacological investigation of galanin's contractile effects in rat gastric fundus, where phentolamine is used only as a non-specific antagonist to rule out adrenergic involvement, not as the subject of PK analysis. |
| PD | Korolkiewicz_1997 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of galanin analogs; phentolamine is only used as a non-specific antagonist in a mixture and no PD parameters or exposure-response relationships for phentolamine are reported. |
| popPK | Krishnaprabhu_2024 | irrelevant | 0 | 0 | The paper is a review of necrosis cases involving local anesthetics and epinephrine, mentioning phentolamine only as a potential rescue agent without providing any pharmacokinetic data. |
| PD | Krishnaprabhu_2024 | not_relevant | 0 | 0 | The paper is a review of case reports regarding epinephrine-induced necrosis and mentions phentolamine only as a qualitative rescue agent, providing no pharmacodynamic data, dose-response curves, or numeric PD parameters. |
| popPK | LECOMTE_1964 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| PD | LECOMTE_1964 | not_relevant | 0 | 0 | The paper discusses cystamine, not phentolamine. |
| popPK | Lee_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of KATP channel properties using phentolamine as a pharmacological probe, not a pharmacokinetic study. |
| popPK | Lee_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor up-regulation and inverse agonism, not a pharmacokinetic study. |
| popPK | Lefever_1975 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor sensitivity in rabbit stomach tissue, not a pharmacokinetic study of phentolamine. |
| PD | Lefever_1975 | not_relevant | 1 | 0 | The paper reports qualitative changes in sensitivity (supersensitivity/subsensitivity) and mentions that the KB of phentolamine remained unchanged, but it does not provide numeric PD parameters (such as specific KB values, EC50s, or Emax) for phentolamine in the provided text. |
| PGx | Liu_2023 | not_relevant | 0 | 0 | The paper describes a novel metabolic pathway (cross-coupling with Vitamin E) mediated by CYP3A4 but does not report pharmacogenomic effects (gene variants) on standard PK/PD parameters. |
| popPK | Lograno_2000 | irrelevant | 0 | 0 | The study is a receptor binding assay investigating nicergoline, with phentolamine used only as a selective ligand/comparator, and no pharmacokinetic parameters are reported. |
| PD | Lograno_2000 | not_relevant | 1 | 0 | The paper reports receptor binding affinity (IC50) for phentolamine, which is a pharmacological property, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for the drug's physiological effect. |
| popPK | Love_1999 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| PD | Love_1999 | not_relevant | 0 | 0 | The paper focuses on veratridine-stimulated amylase secretion and does not report pharmacodynamic or exposure-response data for phentolamine. |
| popPK | Lønning_1995 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| PD | Lønning_1995 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for endothelins, not phentolamine; phentolamine is only mentioned as an antagonist that had no effect. |
| popPK | Marín_1979 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of contractile effects in cat arteries where phentolamine is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| PD | Marín_1979 | not_relevant | 1 | 0 | The paper uses phentolamine as a qualitative antagonist to characterize 5-HT receptor mechanisms, but does not report a dose-response or exposure-response relationship for phentolamine itself with numeric PD parameters. |
| popPK | Matsui_2000 | irrelevant | 0 | 0 | The study investigates fluid volume redistribution using glucose dilution in dogs, not the pharmacokinetic disposition parameters (CL, V, t1/2) of phentolamine itself. |
| popPK | Mersereau_2015 | irrelevant | 0 | 0 | The study focuses on the physiological effects of cocaine in zebrafish, using phentolamine only as a co-administered antagonist to block alpha-adrenergic effects, with no pharmacokinetic parameters reported. |
| PD | Mersereau_2015 | not_relevant | 1 | 0 | The paper focuses on cocaine dose-response in zebrafish; phentolamine is only mentioned qualitatively as a co-treatment that potentiated the effect, with no specific PD parameters or exposure-response data provided for phentolamine. |
| popPK | Mortensen_2008 | irrelevant | 0 | 0 | Phentolamine is used only as a pharmacological antagonist to characterize receptor mechanisms in a physiological study, with no pharmacokinetic parameters reported. |
| PD | Mortensen_2008 | not_relevant | 1 | 0 | The paper reports a concentration-response relationship for norepinephrine, but explicitly states that no convincing effect of phentolamine was observed, providing no numeric PD parameters for phentolamine. |
| popPK | Moura_2006 | irrelevant | 0 | 0 | The study is a pharmacological investigation of alpha2-adrenoceptor subtypes in mouse adrenal medulla where phentolamine is used only as a non-specific antagonist, not as the subject of a pharmacokinetic analysis. |
| PD | Moura_2006 | not_relevant | 0 | 0 | The study reports concentration-response parameters (EC50, Emax) for the agonist medetomidine, not for phentolamine; phentolamine is used only as a non-selective antagonist to characterize receptor subtypes, and no dose-response curve or PD parameters are provided for it. |
| popPK | Mulhall_1997 | irrelevant | 0 | 0 | Phentolamine is used only as a comparator agent in in-vitro cAMP assays and as a co-administered drug in a clinical trial, with no pharmacokinetic parameters reported. |
| PD | Mulhall_1997 | not_relevant | 0 | 0 | The paper focuses on forskolin; phentolamine is only mentioned as a control agent in cAMP assays and as a component of a fixed-dose combination therapy, with no exposure-response or dose-response analysis or numeric PD parameters reported for phentolamine. |
| popPK | Muraki_1994 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of catecholamine receptors in guinea-pig cells, where phentolamine is used only as a non-blocking antagonist probe, not for PK analysis. |
| PD | Muraki_1994 | not_relevant | 1 | 0 | The paper reports that phentolamine did not block the effect of catecholamines, providing only a qualitative negative result without numeric PD parameters or concentration-effect curves for phentolamine. |
| popPK | Musso_1989 | irrelevant | 0 | 0 | no_text gate: only 42 chars of text extracted (&lt; 400) |
| PD | Musso_1989 | not_relevant | 0 | 0 | The paper discusses the renal vasodilator effect of parathormone, not phentolamine, and does not report any exposure-response or dose-response data for the target drug. |
| popPK | Najafipour_2000 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of adrenoceptor profiles in rabbit knee joints where phentolamine is used as a diagnostic antagonist, not a pharmacokinetic study reporting disposition parameters. |
| PD | Najafipour_2000 | not_relevant | 3 | 1 | The paper describes qualitative rank-order potencies and directional shifts in dose-response curves for phentolamine but does not provide numeric PD parameters (e.g., pA2, EC50) or extractable concentration-effect data. |
| popPK | Najafipour_2006 | irrelevant | 0 | 0 | The study is a pharmacological investigation of adrenoceptor profiles in rabbit blood vessels where phentolamine is used as a diagnostic antagonist, not a pharmacokinetic study reporting disposition parameters. |
| PD | Najafipour_2006 | not_relevant | 3 | 1 | The paper describes qualitative receptor profiling and rank-order potencies using phentolamine as a tool, but does not report numeric PD parameters (e.g., pA2, Ki, Emax, EC50) or extractable concentration-effect curves for phentolamine itself. |
| popPK | Nascimento_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of terpinen-4-ol where phentolamine is used only as a pharmacological tool, with no PK parameters reported. |
| PD | Nascimento_2005 | not_relevant | 0 | 0 | The paper reports PD parameters for terpinen-4-ol, not phentolamine; phentolamine is only used as a non-specific antagonist in pretreatment. |
| popPK | Nureye_2025 | irrelevant | 0 | 0 | The paper is a review of medicinal plants for hypertension and does not report pharmacokinetic parameters for phentolamine. |
| PD | Nureye_2025 | not_relevant | 0 | 0 | The paper is a review of medicinal plants for hypertension and does not report any pharmacodynamic or exposure-response data for phentolamine. |
| popPK | Nörenberg_1997 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| popPK | Ong_1992 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | Ong_1992 | not_relevant | 0 | 0 | The paper investigates thienyl analogs of baclofen, not phentolamine. |
| popPK | Pagán_2009 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular reactivity in pig radial arteries where phentolamine is used only as a tool compound (alpha-adrenoceptor antagonist), not as the subject of pharmacokinetic analysis. |
| PD | Pagán_2009 | not_relevant | 1 | 0 | The paper reports qualitative inhibition of neurogenic vasoconstriction by phentolamine but does not provide numeric concentration-effect parameters (e.g., pA2, IC50) or a dose-response curve for the drug itself. |
| popPK | Patil_2007 | irrelevant | 0 | 0 | The paper reports in-vitro receptor affinity constants (Kb, IC50) for phentolamine, not pharmacokinetic disposition parameters. |
| PD | Patil_2007 | not_relevant | 0 | 0 | The provided text is only a title/fragment describing a classical pharmacological study without any numeric data, parameters, or curves. |
| popPK | Prieto_2005 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of blood pressure effects where phentolamine is used only as a pretreatment agent, and no pharmacokinetic parameters are reported. |
| popPK | Radwanska_2009 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of imidazoline receptors in rat heart atria where phentolamine is used only as a non-specific alpha-adrenergic blocker, not as the subject of pharmacokinetic analysis. |
| PD | Radwanska_2009 | not_relevant | 4 | 3 | The paper reports dose-response curves and -log EC50 values for imidazoline ligands, but phentolamine is used only as a non-specific antagonist to block adrenergic effects, not as the primary subject of a PD parameter analysis. |
| popPK | Rasouli_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of VLDL secretion in rat hepatocytes where phentolamine is used only as a pharmacological antagonist to block adrenoceptors, not as the subject of pharmacokinetic analysis. |
| PD | Rasouli_2006 | not_relevant | 1 | 0 | The paper reports PD parameters (EC50, Emax) for epinephrine, but phentolamine is only used as a qualitative antagonist to block the effect, with no dose-response or concentration-effect analysis performed for phentolamine itself. |
| popPK | Ratz_2002 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of smooth muscle contraction in rabbits, where phentolamine is used only as a diagnostic antagonist, not as a subject for PK analysis. |
| PD | Ratz_2002 | not_relevant | 0 | 0 | The paper investigates the mechanism of smooth muscle contraction using RhoA kinase and PKC blockers; phentolamine is only mentioned as a negative control for phenylephrine, and no exposure-response or dose-response relationship for phentolamine is reported. |
| popPK | Reiser_1983 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| PD | Reiser_1983 | not_relevant | 0 | 0 | The paper characterizes tetrodotoxin-sensitive ion channels in rat brain cells and does not mention phentolamine or report any pharmacodynamic or exposure-response data for it. |
| popPK | Ryckewaert_1990 | irrelevant | 0 | 0 | The study is an in-vitro investigation of buflomedil's effect on platelets, with phentolamine mentioned only as a comparator for binding affinity, and no pharmacokinetic parameters are reported. |
| PD | Ryckewaert_1990 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of buflomedil, not phentolamine; phentolamine is only mentioned as a reference compound for binding affinity. |
| popPK | Scheibner_2001 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | Scheibner_2001 | not_relevant | 0 | 0 | The paper focuses on alpha2-adrenoceptor modulation of serotonin release in mice and does not report any pharmacodynamic or exposure-response analysis for phentolamine. |
| popPK | Schwinger_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of epinine on human renal arteries where phentolamine is used only as a co-administered antagonist, not as the subject of PK analysis. |
| PD | Schwinger_1996 | not_relevant | 0 | 0 | The paper reports PD parameters for epinine and dopamine, not phentolamine; phentolamine is used only as a background antagonist. |
| popPK | Shameer_2018 | irrelevant | 0 | 0 | The paper is a database description for drug repositioning and does not report pharmacokinetic parameters for phentolamine. |
| PD | Shameer_2018 | not_relevant | 0 | 0 | The paper is a database description and meta-analysis of drug repositioning factors, containing no pharmacodynamic modeling or specific exposure-response data for phentolamine. |
| PGx | Shamloul_2005 | not_relevant | 0 | 0 | The paper is a clinical comparative study of drug efficacy and side effects in erectile dysfunction and does not report any pharmacogenomic analysis or gene variants affecting PK/PD parameters. |
| popPK | Sharif_1994 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Sharif_1994 | not_relevant | 0 | 0 | The paper focuses on dopamine's mechanism of action on rat seminal vesicles and does not report any pharmacodynamic or exposure-response data for phentolamine. |
| popPK | Shiraki_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of noradrenaline-induced cell death in chick spinal cord neurons, using phentolamine only as a pharmacological antagonist to identify receptor subtypes, not as a subject for pharmacokinetic analysis. |
| PGx | Simonsen_2002 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (pharmacodynamic and pharmacokinetic) but does not report any pharmacogenomic effects (gene variants) on phentolamine. |
| popPK | Siriwardena_1993 | irrelevant | 0 | 0 | The study is an in-vitro physiological experiment on rat colon where phentolamine is used only as a pharmacological antagonist to rule out alpha-adrenergic involvement, not as the subject of a pharmacokinetic analysis. |
| PD | Siriwardena_1993 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for the 5-HT3 agonist 2Me5HT, not for phentolamine, which is only used as a non-inhibitory control. |
| popPK | Speakman_1993 | irrelevant | 0 | 0 | The study is an in-vitro physiological investigation of anal sphincter innervation where phentolamine is used as a pharmacological tool (alpha-blocker), not as the subject of pharmacokinetic analysis. |
| popPK | Swale_2014 | irrelevant | 0 | 0 | The study investigates the neurotoxicity of DEET, using phentolamine only as a pharmacological antagonist to block octopamine receptors, with no pharmacokinetic parameters reported for phentolamine. |
| PD | Swale_2014 | not_relevant | 0 | 0 | The paper investigates the pharmacology of DEET, using phentolamine only as a qualitative antagonist to block DEET's effects, without reporting any exposure-response or dose-response parameters for phentolamine itself. |
| PGx | Tarhan_2006 | not_relevant | 0 | 0 | The paper compares the efficacy and side effects of sodium nitroprusside versus papaverine/phentolamine but does not report any pharmacogenomic effects or gene variant analyses. |
| popPK | Testa_1993 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and functional assay characterizing alpha-1 adrenoceptor subtypes, not a pharmacokinetic study of phentolamine. |
| PD | Testa_1993 | not_relevant | 1 | 0 | The paper characterizes receptor subtypes using binding assays and functional studies, mentioning phentolamine only as one of several antagonists in a correlation analysis without providing specific numeric PD parameters (e.g., Ki, pA2, or concentration-effect curves) for it. |
| popPK | Toklucu_2025 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| popPK | Tunçtan_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of econazole's effects on rat aorta, where phentolamine is used only as a tool compound (alpha-adrenergic antagonist) and no PK parameters are reported. |
| PD | Tunçtan_2000 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of econazole, not phentolamine; phentolamine is only used as a tool compound to characterize econazole's mechanism. |
| popPK | Ueda_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasodilatory effects and cytotoxicity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Vieira-Coelho_1998 | irrelevant | 0 | 0 | The study is a pharmacological investigation of dopamine's effect on rat jejunal electrolyte transport, using phentolamine only as a receptor antagonist, and does not report any pharmacokinetic parameters for phentolamine. |
| popPK | Vázquez_1999 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Vázquez_1999 | not_relevant | 0 | 0 | The paper focuses on the alpha2-adrenergic effect on MCF-7 cells and does not mention phentolamine or report any pharmacodynamic parameters for it. |
| popPK | Wang_1993 | irrelevant | 0 | 0 | no_text gate: only 188 chars of text extracted (&lt; 400) |
| PD | Wang_1993 | not_relevant | 0 | 0 | The paper reports dose-response parameters for diphenyleneiodonium (DPI), not phentolamine; phentolamine is only used as a pretreatment agent to characterize the mechanism of DPI. |
| popPK | Wang_2009 | irrelevant | 0 | 0 | no_text gate: only 135 chars of text extracted (&lt; 400) |
| PD | Wang_2009 | not_relevant | 0 | 0 | The paper focuses on P2Y receptor-mediated contractile responses in rat gastric smooth muscle and does not report pharmacodynamic or exposure-response data for phentolamine. |
| popPK | Wu_2013 | irrelevant | 0 | 0 | The study is a molecular pharmacology characterization of a tyramine receptor in an insect, using phentolamine only as a non-specific antagonist in in vitro assays, with no pharmacokinetic data. |
| PD | Wu_2013 | not_relevant | 0 | 0 | The paper reports a qualitative antagonism of tyramine by phentolamine at a single concentration (10 µM) in an in vitro receptor assay, but does not provide a dose-response curve or numeric PD parameters (e.g., Ki, IC50) for phentolamine. |
| popPK | Xu_2020 | irrelevant | 0 | 0 | no_text gate: only 143 chars of text extracted (&lt; 400) |
| PD | Xu_2020 | not_relevant | 0 | 0 | The paper characterizes an octopamine receptor in an insect and does not report any pharmacodynamic or exposure-response data for phentolamine. |
| popPK | Yang_2011 | irrelevant | 0 | 0 | Phentolamine is used only as a pharmacological tool to block alpha-adrenergic receptors in an in-vitro study of schisandrin, with no PK parameters reported. |
| PD | Yang_2011 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of schisandrin, not phentolamine; phentolamine is only used as a tool compound to rule out adrenergic involvement. |
| popPK | Yang_2015 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of dexmedetomidine, where phentolamine is used only as a control agent, and no pharmacokinetic parameters are reported. |
| popPK | Yeung_2002 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of potassium channel modulators in mouse ileum, where phentolamine is used only as a non-specific antagonist/comparator, not as the subject of a pharmacokinetic analysis. |
| PD | Yeung_2002 | not_relevant | 0 | 0 | The paper investigates potassium channel modulators in mouse ileum; phentolamine is only mentioned as a secondary antagonist of pinacidil without providing specific numeric PD parameters (e.g., pA2, Ki, or EC50) for phentolamine itself. |
| popPK | Zhang_2009 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of neural mechanisms in the nucleus of the solitary tract, using phentolamine only as a pharmacological antagonist to block alpha-adrenoreceptors, not as a subject for pharmacokinetic analysis. |
| PD | Zhang_2009 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for norepinephrine (NE), not phentolamine; phentolamine is used only as a qualitative antagonist to confirm receptor involvement. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of insect tyramine receptors where phentolamine is used only as a test antagonist, not as the subject drug for PK analysis. |
| PD | Zheng_2026 | not_relevant | 3 | 2 | The paper reports an EC50 for tyramine and mentions phentolamine as an antagonist, but it does not provide a dose-response curve or numeric PD parameters (like IC50 or Emax) for phentolamine itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
