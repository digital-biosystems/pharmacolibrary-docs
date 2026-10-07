<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;lofexidine&quot;}]"></div>

# lofexidine

- **generic name:** lofexidine
- **ATC codes:** `N07BC04`
- **DrugBank:** [DB04948](https://go.drugbank.com/drugs/DB04948) · **PubChem:** [CID 30668](https://pubchem.ncbi.nlm.nih.gov/compound/30668)
- **molar mass:** 259.132 g/mol (C11H12Cl2N2O) — DrugBank
- **groups:** approved, investigational

## About

Lofexidine is a medicine used to treat opioid dependence, helping people going through opioid withdrawal. It is an approved drug, mainly used in the United States for this purpose.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3836403](https://www.wikidata.org/wiki/Q3836403) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:32 | 0:24 | 0/0/0 | 1/0/1 | 0/0/0 | 54,176/1,745 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fragola_2023_cAMP](drugs/drug_lofexidine/pd_Fragola_2023_cAMP.md) | cAMP formation (α2AR), normalized to lofexidine maximum ← lofexidine · direct Emax (saturable) effect | — | Fragola NR et al., Conformationally Selective 2-Aminotetra…, ACS chemical neuroscience (2023) | [10.1021/acschemneuro.3c00148](https://doi.org/10.1021/acschemneuro.3c00148) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fragola_2023_cAMP_2](drugs/drug_lofexidine/pd_Fragola_2023_cAMP_2.md) | cAMP formation (α2CR), normalized to lofexidine maximum ← lofexidine · direct Emax (saturable) effect | — | Fragola NR et al., Conformationally Selective 2-Aminotetra…, ACS chemical neuroscience (2023) | [10.1021/acschemneuro.3c00148](https://doi.org/10.1021/acschemneuro.3c00148) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yocca_2025_GTP_S_2A](drugs/drug_lofexidine/pd_Yocca_2025_GTP_S_2A.md) | [35S]GTPγS binding stimulation at human α2A adrenoceptor ← lofexidine · direct sigmoid Emax (Hill) effect | — | Yocca FD et al., Dexmedetomidine potently and reversibly…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1589075](https://doi.org/10.3389/fphar.2025.1589075) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yocca_2025_GTP_S_2B](drugs/drug_lofexidine/pd_Yocca_2025_GTP_S_2B.md) | [35S]GTPγS binding stimulation at human α2B adrenoceptor ← lofexidine · direct sigmoid Emax (Hill) effect | — | Yocca FD et al., Dexmedetomidine potently and reversibly…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1589075](https://doi.org/10.3389/fphar.2025.1589075) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yocca_2025_GTP_S_2C](drugs/drug_lofexidine/pd_Yocca_2025_GTP_S_2C.md) | [35S]GTPγS binding stimulation at human α2C adrenoceptor ← lofexidine · direct sigmoid Emax (Hill) effect | — | Yocca FD et al., Dexmedetomidine potently and reversibly…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1589075](https://doi.org/10.3389/fphar.2025.1589075) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lofexidine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2D6` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC47A1` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ABCB5 (inhibitor), ADRA1A (target), ADRA2A (target), HTR1A (target), HTR1D (target), HTR2C (target), HTR7 (target).</sub>

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
| popPK | Fragola_2023 | irrelevant | 0 | 0 | This is a medicinal chemistry/receptor pharmacology study using lofexidine only as a reference ligand; no PK parameters for lofexidine are reported. |
| popPK | Jin_1989 | irrelevant | 0 | 0 | In-vitro pharmacology study of adenylate cyclase inhibition; lofexidine is only a test agonist, no PK parameters. |
| popPK | Sadek_2024 | irrelevant | 0 | 0 | Behavioral study of lofexidine as co-administered drug in rats; no PK parameters reported. |
| popPK | Summers_1980 | irrelevant | 0 | 0 | In-vitro receptor binding study in rat brain membranes; lofexidine is only a comparator displacer, no PK parameters. |
| popPK | Yocca_2025 | irrelevant | 0 | 0 | Lofexidine is only an in vitro comparator for α2-AR potency; the PK data (AUC, brain levels) concern dexmedetomidine, not lofexidine, and no lofexidine disposition parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
