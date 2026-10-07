<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01C&quot;,&quot;href&quot;:&quot;atc/H01C.md&quot;},{&quot;label&quot;:&quot;somatostatin&quot;}]"></div>

# somatostatin

- **generic name:** somatostatin
- **ATC codes:** `H01CB01`
- **DrugBank:** [DB09099](https://go.drugbank.com/drugs/DB09099) · **PubChem:** [CID 16129681](https://pubchem.ncbi.nlm.nih.gov/compound/16129681)
- **molar mass:** 1637.9 g/mol (C76H104N18O19S2) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Somatostatin is a hypothalamic hormone used to reduce secretions of the gut and pancreas, for example in bleeding from dilated veins in the esophagus and in pancreatic leaks. It remains an approved medicine and is used mainly in hospital settings, though it has largely been replaced by longer-acting analogues.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q22075835](https://www.wikidata.org/wiki/Q22075835) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:55 | 2:37 | 0/0/0 | 0/0/0 | 0/0/0 | 149,830/5,381 | einfracz / qwen3.8-27b | 8 | 2/6 | 8/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=somatostatin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: OPRD1 (inhibitor), OPRM1 (inhibitor), SSTR1 (target), SSTR2 (target), SSTR3 (target), SSTR4 (target), SSTR5 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 269 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ho_1986.pdf` | Ho LT et al., Pharmacokinetics and effects of intrave…, Clinical physiology and bio… (1986) | popPK | 10 | not captured | [2875821](https://pubmed.ncbi.nlm.nih.gov/2875821) | The paper reports quantitative pharmacokinetic parameters (half-lives, clearance) for somatostatin in a two-compartment model, with all values explicitly provided in the text. |

<sub>queue written 2026-10-07T09:54:21.396077+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akhavanallaf_2025 | irrelevant | 0 | 0 | The study focuses on radiation dosimetry and SSTR PET imaging prediction for 177Lu-DOTATATE therapy, not the pharmacokinetic disposition parameters (CL, V, ka) of somatostatin itself. |
| popPK | Bergsma_2016 | irrelevant | 0 | 0 | The study focuses on nephrotoxicity and renal dosimetry of 177Lu-octreotate (a different drug), not the pharmacokinetics of somatostatin. |
| popPK | Börzsei_2023 | irrelevant | 0 | 0 | The paper investigates the pharmacodynamics and receptor binding of the somatostatin analogue TT-232, not the pharmacokinetic disposition parameters (CL, V, t1/2) of somatostatin itself. |
| popPK | Cendros_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of lanreotide, a somatostatin analog, not somatostatin itself. |
| popPK | Eljack_2022 | irrelevant | 0 | 0 | The paper is a review on nanoparticle design for co-delivery of nucleic acids and anti-cancer drugs, and does not report any pharmacokinetic parameters for somatostatin. |
| popPK | Faggionato_2023 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for glucagon, with somatostatin used only as a co-administered agent to suppress endogenous secretion, not as the subject of the PK analysis. |
| popPK | Glatard_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for octreotide (a somatostatin analog/derivative), not for the endogenous peptide somatostatin itself. |
| popPK | Heiman_1987 | irrelevant | 0 | 0 | The study investigates receptor binding affinities (KD, Ki) and is mechanistic/in-vitro, not a pharmacokinetic study. |
| popPK | Jeremic_2018 | irrelevant | 2 | 0 | The study models the biokinetics of the radiopharmaceutical 90Y-DOTATOC (a somatostatin receptor analogue), not somatostatin itself, and no PK parameters for the endogenous peptide somatostatin are reported. |
| popPK | Jiang_2022 | irrelevant | 0 | 0 | The study identifies the allatostatin C signaling system in Aplysia and reports receptor binding parameters (EC50), but does not report pharmacokinetic disposition parameters (clearance, volume, half-life) for somatostatin. |
| popPK | Lin_2026 | irrelevant | 0 | 0 | The study focuses on machine learning prediction of clinical response to somatostatin receptor ligands and does not report pharmacokinetic disposition parameters such as clearance or volume. |
| popPK | Livett_1983 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of neurosecretory release from isolated chromaffin cells and does not report pharmacokinetic parameters (CL, V, t1/2, ka) for somatostatin. |
| popPK | Ma_2005 | irrelevant | 2 | 8 | The study reports PK parameters for SOM230 and octreotide, which are somatostatin analogs, rather than endogenous somatostatin itself. |
| popPK | Morabito_2025 | irrelevant | 0 | 0 | The paper investigates the dendritic integration properties of somatostatin-expressing interneurons in mouse cortex and does not report any pharmacokinetic parameters (clearance, volume, half-life) for the drug somatostatin. |
| popPK | Nedelman_2018 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of pasireotide (a somatostatin analog), not the parent drug somatostatin itself. |
| popPK | Prinz_1993 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of histamine secretion from rat cells where somatostatin is used only as a pharmacological inhibitor, with no pharmacokinetic parameters reported. |
| popPK | Saveanu_2006 | irrelevant | 0 | 0 | This is a pharmacological/in-vitro study evaluating the efficacy of somatostatin analogs on GH secretion in pituitary adenoma cell cultures, not a pharmacokinetic study reporting disposition parameters for the drug somatostatin. |
| popPK | van_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of the chimera drug BIM23B065, not somatostatin itself, and somatostatin is only a target ligand/comparator context. |
| popPK | van_2020 | irrelevant | 1 | 0 | The study investigates the pharmacodynamic effects of a somatostatin-dopamine chimera (BIM23B065) on endogenous hormone secretion, rather than the pharmacokinetic disposition parameters (CL, V, t1/2) of somatostatin itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
