<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01C&quot;,&quot;href&quot;:&quot;atc/H01C.md&quot;},{&quot;label&quot;:&quot;ganirelix&quot;}]"></div>

# ganirelix

- **generic name:** ganirelix
- **ATC codes:** `H01CC01`
- **DrugBank:** [DB06785](https://go.drugbank.com/drugs/DB06785) · **PubChem:** [CID 16130957](https://pubchem.ncbi.nlm.nih.gov/compound/16130957)
- **molar mass:** 1570.35 g/mol (C80H113ClN18O13) — DrugBank
- **groups:** approved, investigational

## About

Ganirelix is a hormone antagonist used to prevent premature ovulation in women undergoing assisted reproduction and fertility treatment, such as controlled ovarian stimulation. It is an approved medicine, authorised in the European Union, and is used in specialist fertility care rather than broadly in routine practice.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5521314](https://www.wikidata.org/wiki/Q5521314) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:21 | 0:23 | 0/0/0 | 0/1/0 | 0/0/0 | 27,379/909 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sperduti_2019_Ca2](drugs/drug_ganirelix/pd_Sperduti_2019_Ca2.md) | intracellular Ca2+ ← Ganirelix · direct Emax (saturable) effect | — | Sperduti S et al., GnRH Antagonists Produce Differential M…, International journal of mo… (2019) | [10.3390/ijms20225548](https://doi.org/10.3390/ijms20225548) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sperduti_2019_cAMP](drugs/drug_ganirelix/pd_Sperduti_2019_cAMP.md) | cAMP ← Ganirelix · direct Emax (saturable) effect | — | Sperduti S et al., GnRH Antagonists Produce Differential M…, International journal of mo… (2019) | [10.3390/ijms20225548](https://doi.org/10.3390/ijms20225548) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ganirelix) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GNRHR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Nestor_1992 | irrelevant | 0 | 0 | The study reports pharmacological potency (ED50/EC50) and mechanism of action for GnRH analogs, not quantitative pharmacokinetic disposition parameters (CL, V, ka) for ganirelix. |
| popPK | Sperduti_2019 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study comparing signaling pathways and does not report pharmacokinetic disposition parameters (CL, V, half-life) for ganirelix. |
| popPK | Weiss_2006 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on pituitary cells examining LH secretion, not a pharmacokinetic study, and does not report any PK parameters for ganirelix. |
| popPK | unknown_2008 | irrelevant | 0 | 0 | The study investigates corifollitropin alfa, and ganirelix is only used as a standard-of-care GnRH antagonist without any PK analysis. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
