<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;bucladesine&quot;}]"></div>

# bucladesine

- **generic name:** bucladesine
- **ATC codes:** `C01CE04`
- **DrugBank:** [DB13242](https://go.drugbank.com/drugs/DB13242) · **PubChem:** not captured
- **molar mass:** 469.391 g/mol (C18H24N5O8P) — DrugBank
- **groups:** experimental

## About

Bucladesine is a cardiac stimulant, classified as a phosphodiesterase inhibitor, that has been used in cardiac therapy. It is considered experimental and there is no evidence it is an approved medicine in the European Union or elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4983616](https://www.wikidata.org/wiki/Q4983616) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 04:29 | 2:37 | 0/0/0 | 0/0/0 | 0/0/0 | 82,908/3,510 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 3/3 | 5/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bucladesine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: SERPINE1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 58 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anderson_1998 | irrelevant | 0 | 0 | The study investigates the mechanism of action of rolipram on calcium flux in human neutrophils and does not involve bucladesine or pharmacokinetic parameters. |
| popPK | Barbe_1998 | irrelevant | 0 | 0 | The paper studies beta-adrenergic lipolysis in human adipose tissue and does not involve bucladesine or any pharmacokinetic parameters. |
| popPK | Beale_1982 | irrelevant | 0 | 0 | The paper studies the mRNA half-life of phosphoenolpyruvate carboxykinase in rat liver, not the pharmacokinetics of bucladesine. |
| popPK | Benincosa_1992 | irrelevant | 0 | 0 | no_text gate: only 95 chars of text extracted (&lt; 400) |
| popPK | Bennett_1993 | irrelevant | 0 | 0 | The paper studies 5-lipoxygenase expression in HL-60 cells and does not involve bucladesine or any pharmacokinetic parameters. |
| popPK | Bernard_1991 | irrelevant | 0 | 0 | The paper studies cholesteryl ester clearance in macrophages and does not involve the drug bucladesine. |
| popPK | Berndt_1982 | irrelevant | 0 | 0 | The study investigates renal phosphate transport and the effects of nicotinamide, PTH, and calcitonin in rats, with no mention of bucladesine or its pharmacokinetics. |
| popPK | Berthiaume_1991 | irrelevant | 0 | 0 | The study investigates lung liquid clearance in sheep using cAMP analogues and aminophylline, and does not involve bucladesine or its pharmacokinetics. |
| popPK | Boczek_2012 | irrelevant | 0 | 0 | The paper studies calcium handling in PC12 cells and does not involve bucladesine or pharmacokinetics. |
| popPK | Boissel_2004 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on nitric oxide synthase signaling in neuroepithelioma cells and does not involve bucladesine or pharmacokinetics. |
| popPK | Borger_1996 | irrelevant | 0 | 0 | The paper investigates cAMP signaling and cytokine expression in T lymphocytes and does not involve bucladesine or pharmacokinetic parameters. |
| popPK | Bowen_1975 | irrelevant | 0 | 0 | The study investigates gastric acid secretion in dogs using cyclic AMP analogs and does not involve bucladesine or its pharmacokinetics. |
| popPK | Brooks_2011 | irrelevant | 0 | 0 | The paper studies equine neutrophil migration and chemokine signaling, not the pharmacokinetics of bucladesine. |
| popPK | Bruce_2002 | irrelevant | 0 | 0 | The paper is a mechanistic cell biology study on calcium signaling in parotid acinar cells and does not involve the drug bucladesine or pharmacokinetic parameters. |
| popPK | Chatelain_1998 | irrelevant | 0 | 0 | The paper studies glucose-6-phosphatase gene expression in rats and does not involve bucladesine or its pharmacokinetics. |
| popPK | Cho_2007 | irrelevant | 0 | 0 | The paper investigates cell proliferation mechanisms in neuroblastoma cells using dibutyryl cAMP and does not involve bucladesine or pharmacokinetic parameters. |
| popPK | Drewett_1992 | irrelevant | 0 | 0 | The paper investigates the neuromodulatory effects of atrial natriuretic peptides on catecholamine release in PC12 cells and does not involve bucladesine or its pharmacokinetics. |
| popPK | Epstein_1991 | irrelevant | 0 | 0 | The paper studies mitochondrial phosphoproteins in mouse Leydig cells and does not involve bucladesine or any pharmacokinetic parameters. |
| PD | Epstein_1991 | not_relevant | 0 | 0 | The paper discusses the acute action of luteinizing hormone on mouse Leydig cells and does not mention bucladesine or report any pharmacodynamic parameters for it. |
| popPK | Gill_1971 | irrelevant | 0 | 0 | The paper studies the renal effects of cyclic AMP and dibutyryl cyclic AMP in dogs, not the pharmacokinetics of bucladesine. |
| popPK | Gori_2024 | irrelevant | 0 | 0 | The paper is an immunology study on dendritic cells and embryo quality, with no mention of bucladesine or pharmacokinetics. |
| popPK | Hanoux_2003 | irrelevant | 0 | 0 | The paper studies P450 aromatase gene expression in rabbit granulosa cells and does not involve bucladesine or any pharmacokinetic parameters. |
| popPK | Kibble_2001 | irrelevant | 0 | 0 | The study investigates renal proximal tubule function in cystic fibrosis mice and does not involve bucladesine or any pharmacokinetic parameters. |
| popPK | Koyama_1992 | irrelevant | 0 | 0 | The study investigates the effects of dibutyryl cyclic AMP on endotoxin-induced lung injury in sheep and does not involve bucladesine. |
| popPK | Krarup_1975 | irrelevant | 0 | 0 | The study investigates the hemodynamic effects of DBcAMP in cats and does not involve bucladesine or its pharmacokinetics. |
| popPK | Kubickova_2016 | irrelevant | 0 | 0 | The paper studies cellular differentiation and calcium fluxes in NG108-15 cells using GYY4137 and dbcAMP, with no mention of bucladesine or pharmacokinetic parameters. |
| popPK | Lee_1998 | irrelevant | 0 | 0 | The paper studies cyclin A gene expression in Swiss 3T3 cells and does not involve the drug bucladesine or any pharmacokinetic parameters. |
| popPK | Margana_1995 | irrelevant | 0 | 0 | The paper studies the gene expression and mRNA stability of surfactant protein B in rabbits, not the pharmacokinetics of bucladesine. |
| popPK | Miller_1980 | irrelevant | 0 | 0 | The paper studies glutamine synthetase in cultured cells and does not involve bucladesine or pharmacokinetics. |
| popPK | Minakata_1998 | irrelevant | 0 | 0 | The paper studies the effect of beta-adrenergic agonists on sodium transport in rat alveolar cells and does not involve bucladesine or pharmacokinetics. |
| popPK | Morrissey_1979 | irrelevant | 0 | 0 | The paper studies parathormone secretion in porcine parathyroid cells and does not involve bucladesine. |
| popPK | Mukai_2021 | irrelevant | 0 | 0 | The study investigates P-glycoprotein function in rat intestine using rhodamine-123 and does not involve bucladesine. |
| popPK | Ninković_2012 | irrelevant | 0 | 0 | The paper studies the immunological effects of morphine on phagocytosis and does not involve bucladesine or pharmacokinetic parameters. |
| popPK | OMalley_1997 | irrelevant | 0 | 0 | The paper studies the degradation kinetics of acetylcholine receptors in rat muscle cells, not the pharmacokinetics of the drug bucladesine. |
| popPK | Ogawa_1995 | irrelevant | 0 | 0 | The paper investigates c-kit gene expression and mRNA half-life in K562YO cells, which is unrelated to the pharmacokinetics of bucladesine. |
| popPK | Pavelka_1993 | irrelevant | 0 | 0 | The paper studies the pharmacology of iodothyronine 5'-deiodinase in mouse brown adipocytes and does not involve the drug bucladesine. |
| popPK | Pittet_2001 | irrelevant | 0 | 0 | The paper studies alveolar fluid transport and nitric oxide in rats and does not involve bucladesine or its pharmacokinetics. |
| popPK | Pizov_1992 | irrelevant | 0 | 0 | The study investigates the effect of halothane on ion transport in canine tracheal epithelium and does not involve bucladesine or pharmacokinetic parameters. |
| popPK | Price_2004 | irrelevant | 0 | 0 | The paper studies IGF-binding protein regulation in lung fibroblasts and does not involve bucladesine or any pharmacokinetic parameters. |
| popPK | Ramafi_2000 | irrelevant | 0 | 0 | The paper is an in-vitro immunology study on neutrophils and does not involve bucladesine or pharmacokinetic parameters. |
| popPK | Rao_1989 | irrelevant | 0 | 0 | The paper studies chemotactic peptide receptor interactions in HL-60 cells and neutrophils, not the pharmacokinetics of bucladesine. |
| popPK | Schwartzel_1979 | irrelevant | 0 | 0 | The study investigates cyclic AMP and dibutyryl cyclic AMP in dogs, not bucladesine. |
| popPK | Selkurt_1976 | irrelevant | 0 | 0 | The study investigates the effects of dibutyryl cyclic AMP on kidney function in owl monkeys and does not involve bucladesine. |
| popPK | Shekarabi_1997 | irrelevant | 0 | 0 | The paper studies the transcriptional regulation of amyloid precursor protein (APP) in cell lines and does not involve bucladesine or pharmacokinetics. |
| popPK | Shyng_1991 | irrelevant | 0 | 0 | The paper studies acetylcholine receptor degradation in mouse muscle and does not involve bucladesine or its pharmacokinetics. |
| popPK | Sibrowski_1984 | irrelevant | 0 | 0 | The paper studies glucokinase mRNA regulation in rat liver and does not involve bucladesine or its pharmacokinetics. |
| popPK | Sperry_2023 | irrelevant | 0 | 0 | The paper focuses on statins and COVID-19, with no mention of bucladesine or its pharmacokinetics. |
| PD | Sperry_2023 | not_relevant | 0 | 0 | The paper focuses on statins (simvastatin, atorvastatin, etc.) and does not contain any data, analysis, or mention of bucladesine. |
| popPK | Spiwoks-Becker_2011 | irrelevant | 0 | 0 | The paper studies phosphodiesterase 10A in rat pineal glands and does not involve bucladesine or its pharmacokinetics. |
| popPK | Steel_2002 | irrelevant | 0 | 0 | The paper investigates calcium signaling in neutrophils and does not mention bucladesine or report any pharmacokinetic parameters for it. |
| popPK | Stephens_1998 | irrelevant | 0 | 0 | The study investigates lung liquid absorption in sheep using cAMP modulators and does not involve bucladesine. |
| popPK | Stromberg_1991 | irrelevant | 0 | 0 | The paper studies an oncofetal protein in leukemia cells and does not involve the drug bucladesine or its pharmacokinetics. |
| popPK | Tamaoki_1989 | irrelevant | 0 | 0 | The paper studies ciliary function in rabbit tracheal epithelial cells and does not involve bucladesine or pharmacokinetic parameters. |
| popPK | Tawfik_2006 | irrelevant | 0 | 0 | The paper studies the in vitro effects of propentofylline on astrocytes and does not involve bucladesine or pharmacokinetic parameters. |
| popPK | Theron_2002 | irrelevant | 0 | 0 | The paper investigates the mechanism of adenosine regulation in human neutrophils and does not involve the drug bucladesine or any pharmacokinetic parameters. |
| popPK | Ulmer_1987 | irrelevant | 0 | 0 | The paper studies myelin basic protein phosphorylation in rat brain cultures and does not involve bucladesine or pharmacokinetics. |
| popPK | Werning_1976 | irrelevant | 0 | 0 | The study investigates the effects of calcitonin, glucagon, and cAMP on plasma renin activity in dogs and does not involve bucladesine. |
| popPK | Yamada_1990 | irrelevant | 0 | 0 | The study investigates renal physiology in dogs using dopamine and dibutyryl cyclic AMP, with no mention of bucladesine or its pharmacokinetics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
