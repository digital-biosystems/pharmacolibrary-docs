<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;zafirlukast&quot;}]"></div>

# zafirlukast

- **generic name:** zafirlukast
- **ATC codes:** `R03DC01`
- **DrugBank:** [DB00549](https://go.drugbank.com/drugs/DB00549) · **PubChem:** [CID 5717](https://pubchem.ncbi.nlm.nih.gov/compound/5717)
- **molar mass:** 575.675 g/mol (C31H33N3O6S) — DrugBank
- **groups:** approved, investigational

## About

Zafirlukast is a leukotriene receptor antagonist used to treat asthma. It is an approved medicine, though not authorised in the European Union, and is used as a systemic treatment for obstructive airway disease.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q928378](https://www.wikidata.org/wiki/Q928378) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:23 | 0:21 | 0/0/0 | 1/0/0 | 0/0/0 | 52,231/2,146 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Göbel_2019_CBP_recruitment](drugs/drug_zafirlukast/pd_G_bel_2019_CBP_recruitment.md) | PPARγ cofactor recruitment (CBP) ← zafirlukast · direct sigmoid Emax (Hill) effect | — | Göbel T et al., Zafirlukast Is a Dual Modulator of Huma…, Frontiers in pharmacology (2019) | [10.3389/fphar.2019.00263](https://doi.org/10.3389/fphar.2019.00263) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Göbel_2019_sEH_HEP_G2](drugs/drug_zafirlukast/pd_G_bel_2019_sEH_HEP_G2.md) | Soluble epoxide hydrolase (sEH) activity (HEP-G2 lysates) ← zafirlukast · direct sigmoid Emax (Hill) effect | — | Göbel T et al., Zafirlukast Is a Dual Modulator of Huma…, Frontiers in pharmacology (2019) | [10.3389/fphar.2019.00263](https://doi.org/10.3389/fphar.2019.00263) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Göbel_2019_sEH_rec](drugs/drug_zafirlukast/pd_G_bel_2019_sEH_rec.md) | Soluble epoxide hydrolase (sEH) activity (recombinant) ← zafirlukast · direct sigmoid Emax (Hill) effect | — | Göbel T et al., Zafirlukast Is a Dual Modulator of Huma…, Frontiers in pharmacology (2019) | [10.3389/fphar.2019.00263](https://doi.org/10.3389/fphar.2019.00263) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Göbel_2019_PPAR](drugs/drug_zafirlukast/pd_G_bel_2019_PPAR.md) | PPARγ reporter gene activity ← zafirlukast · direct sigmoid Emax (Hill) effect | — | Göbel T et al., Zafirlukast Is a Dual Modulator of Huma…, Frontiers in pharmacology (2019) | [10.3389/fphar.2019.00263](https://doi.org/10.3389/fphar.2019.00263) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=zafirlukast) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` target | DrugBank actor |
| absorption | liver | `ABCG2` target | DrugBank actor |
| absorption | mammary gland | `ABCG2` target | DrugBank actor |
| absorption | small intestine | `ABCG2` target | DrugBank actor |
| absorption | testis | `ABCG2` target | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor/substrate, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `SLC10A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CYSLTR1 (target), PTGS1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fischer_2000.pdf` | Fischer JD et al., Comparison of zafirlukast (Accolate) ab…, Pharmaceutical research (2000) | popPK | 8 | [10.1023/a:1007509112383](https://doi.org/10.1023/a:1007509112383) | [10751029](https://pubmed.ncbi.nlm.nih.gov/10751029) | The study provides specific PK parameters (AUC, Cmax, tmax, relative ratios) and describes a two-compartment model for zafirlukast in humans, though absolute values for Clearance, Volume, and specific Ka rates are not explicitly listed in the text. |
| `Dekhuijzen_2002.pdf` | Dekhuijzen PN et al., Pharmacokinetic profile of zafirlukast, Clinical pharmacokinetics (2002) | popPK | 5 | [10.2165/00003088-200241020-00003](https://doi.org/10.2165/00003088-200241020-00003) | [11888331](https://pubmed.ncbi.nlm.nih.gov/11888331) | The text is a general review describing the pharmacokinetic profile qualitatively (half-life, two-compartment model) but provides no specific numeric values for clearance (CL), volume (V), or clearance (Q) in the provided evidence. |

<sub>queue written 2026-10-07T22:23:04.082205+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biagioli_2020 | irrelevant | 0 | 0 | The study investigates the off-target interaction of the drug REV5901 with the GPBAR1 receptor, mentioning zafirlukast only as a comparative CysLT1R antagonist without providing any pharmacokinetic data for it. |
| popPK | Dekhuijzen_2002 | irrelevant | 5 | 0 | The text is a general review describing the pharmacokinetic profile qualitatively (half-life, two-compartment model) but provides no specific numeric values for clearance (CL), volume (V), or clearance (Q) in the provided evidence. |
| popPK | Göbel_2019 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study investigating the polypharmacological effects of zafirlukast on sEH and PPARγ, containing no pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| popPK | Liu_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor antagonism and mucus secretion in guinea pigs, reporting no pharmacokinetic parameters such as clearance or volume for zafirlukast. |
| popPK | Ruiz_2020 | irrelevant | 0 | 0 | The paper is an in-vitro virology study on HCV replication where zafirlukast is used as a mechanistic probe to reverse the effect of MK-571, reporting no pharmacokinetic parameters for zafirlukast. |
| popPK | Sarau_1999 | irrelevant | 0 | 0 | This is a receptor pharmacology study in vitro (HEK-293 cells) characterizing ligand binding and calcium mobilization, not a pharmacokinetic study of zafirlukast. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
