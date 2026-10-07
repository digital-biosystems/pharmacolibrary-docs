<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;deferasirox&quot;}]"></div>

# deferasirox

- **generic name:** deferasirox
- **ATC codes:** `V03AC03`
- **DrugBank:** [DB01609](https://go.drugbank.com/drugs/DB01609) · **PubChem:** [CID 5493381](https://pubchem.ncbi.nlm.nih.gov/compound/5493381)
- **molar mass:** 373.3615 g/mol (C21H15N3O4) — DrugBank
- **groups:** approved, investigational

## About

Deferasirox is an iron chelating agent used to treat iron overload, for example in patients with thalassemia and other anemias requiring repeated transfusions. It is an approved medicine authorised in the European Union, where it is widely used for iron overload, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5251502](https://www.wikidata.org/wiki/Q5251502) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:47 | 0:23 | 0/0/0 | 0/1/0 | 0/0/0 | 41,679/1,021 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Borella_2022_FERRITIN](drugs/drug_deferasirox/pd_Borella_2022_FERRITIN.md) | serum ferritin biomarker turnover ← deferasirox | — | Borella E et al., Characterisation of individual ferritin…, British journal of clinical… (2022) | [10.1111/bcp.15290](https://doi.org/10.1111/bcp.15290) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=deferasirox) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `UGT1A9` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2C8` inhibitor, `CYP3A4` inducer, `UGT1A1` inhibitor/substrate, `UGT1A3` inhibitor, `UGT1A9` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer, `UGT1A1` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: Iron (chelator).</sub>

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
| popPK | Borella_2022 | irrelevant | 2 | 1 | This is a drug–disease (ferritin/iron turnover) PD model; deferasirox PK is only cited from a prior publication, and no deferasirox CL/V/ka values appear in the evidence. |
| popPK | Essmann_2022 | irrelevant | 2 | 3 | Deferasirox is only a co-administered drug; the quantitative PK parameters (clearance, AUC, volume) reported are for busulfan, not deferasirox. |
| popPK | Galeotti_2021 | relevant | 9 | 4 | A population PK model (one-compartment, F1, ka, CL, V with covariates) for deferasirox in children is presented, but the actual numeric parameter estimates are in Table 3/equations not fully provided in the evidence. |
| popPK | Peppe_2024 | irrelevant | 0 | 0 | This is a nanoparticle formulation/efficacy study of deferasirox with no PK disposition parameters (no CL, V, half-life, or population-PK model); only release kinetics and biodistribution imaging. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
