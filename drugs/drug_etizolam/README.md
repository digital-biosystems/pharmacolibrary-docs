<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;etizolam&quot;}]"></div>

# etizolam

- **generic name:** etizolam
- **ATC codes:** `N05BA19`
- **DrugBank:** [DB09166](https://go.drugbank.com/drugs/DB09166) · **PubChem:** [CID 3307](https://pubchem.ncbi.nlm.nih.gov/compound/3307)
- **molar mass:** 342.846 g/mol (C17H15ClN4S) — DrugBank
- **groups:** investigational

## About

Etizolam is a thienodiazepine-type tranquilizer used as an anxiolytic to treat anxiety and related conditions. It is not authorised in the European Union and is considered investigational in major drug databases, though it is used in some countries where it is marketed.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409966](https://www.wikidata.org/wiki/Q409966) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 18:44 | 0:11 | 0/0/0 | 0/0/1 | 0/0/0 | 12,780/559 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">rat</span> | [Sanna_1999_GABA_induced_Cl_current_potentiation_alpha1_beta2_gamma2S_subunit_combination](drugs/drug_etizolam/pd_Sanna_1999_GABA_induced_Cl_current_potentiation_alpha1_beta2.md) | GABA-induced Cl- current potentiation (alpha1 beta2 gamma2S subunit combination) ← etizolam · direct Emax (saturable) effect | — | Sanna E et al., Molecular and neurochemical evaluation…, Arzneimittel-Forschung (1999) | [10.1055/s-0031-1300366](https://doi.org/10.1055/s-0031-1300366) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=etizolam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C19` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CYP2C18 (substrate), GABRA1 (positive allosteric modulator), GABRA1 (target), PTAFR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fukuda_1984 | irrelevant | 0 | 0 | This is a behavioral pharmacology study in rats with no PK parameters for etizolam. |
| popPK | Ishikawa_2026 | irrelevant | 0 | 0 | This is a pharmacoepidemiologic study of miscarriage risk; etizolam appears only as an exposure agent with odds ratios, no PK parameters (CL, V, ka, half-life with volume, or PK model) are reported. |
| popPK | Sanna_1999 | irrelevant | 0 | 0 | This is a pharmacodynamic/receptor-binding study of etizolam on GABAA receptors with no PK disposition parameters reported. |
| popPK | Woolverton_1995 | irrelevant | 0 | 0 | Behavioral discrimination study in monkeys reporting ED50/pKB values, not pharmacokinetic disposition parameters for etizolam. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
