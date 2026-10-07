<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05A&quot;,&quot;href&quot;:&quot;atc/C05A.md&quot;},{&quot;label&quot;:&quot;fluocinonide&quot;}]"></div>

# fluocinonide

- **generic name:** fluocinonide
- **ATC codes:** `C05AA11`, `D07AC08`, `D07CC05`
- **DrugBank:** [DB01047](https://go.drugbank.com/drugs/DB01047) · **PubChem:** [CID 9642](https://pubchem.ncbi.nlm.nih.gov/compound/9642)
- **molar mass:** 494.5249 g/mol (C26H32F2O7) — DrugBank
- **groups:** approved, investigational

## About

Fluocinonide is a potent topical corticosteroid used to treat inflammation of the skin, and is also available in preparations for haemorrhoids and anal fissures. It is an approved medicine, used widely in topical dermatological preparations, alone or combined with antibiotics.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5462791](https://www.wikidata.org/wiki/Q5462791) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:47 | 0:25 | 0/0/0 | 0/0/0 | 0/0/0 | 11,754/629 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fluocinonide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ESRRA (modulator), ESRRB (modulator), ESRRG (modulator), NR3C1 (target), SERPINA6 (binder), SMO (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Calobrisi_1995 | irrelevant | 0 | 0 | The paper is a clinical case report describing the therapeutic use of fluocinonide gel for pyostomatitis vegetans and does not contain any pharmacokinetic data or disposition parameters. |
| popPK | Draelos_2008 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of skin care products on eczema resolution, not a pharmacokinetic study of fluocinonide. |
| popPK | Federico_2024 | irrelevant | 0 | 0 | The paper is a network analysis for drug discovery in atopic dermatitis and does not report pharmacokinetic parameters for fluocinonide. |
| PD | Federico_2024 | not_relevant | 0 | 0 | The paper is a computational network analysis and virtual screening study for atopic dermatitis; it does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for fluocinonide or any other drug. |
| popPK | Grattan_1988 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for psoriasis treatment and does not report any pharmacokinetic parameters for fluocinonide. |
| popPK | Lax_2022 | irrelevant | 0 | 0 | The paper is a clinical review of topical corticosteroid usage strategies for eczema and does not report pharmacokinetic parameters for fluocinonide. |
| PD | Lax_2022 | not_relevant | 0 | 0 | The paper is a clinical review of treatment strategies for eczema and does not report pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters for fluocinonide. |
| popPK | LeVine_1982 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic efficacy of topical fluocinonide in psoriasis, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Li_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of osthole, using fluocinonide only as an internal standard for HPLC analysis. |
| popPK | Noble_2026 | irrelevant | 0 | 0 | The paper is a clinical case report on the treatment of lichen planus with tapinarof, where fluocinonide is only mentioned as a previously used topical agent, and no pharmacokinetic parameters are reported. |
| popPK | Schwarb_1999 | irrelevant | 1 | 0 | The study focuses on in vitro membrane transport and pharmacodynamic activity (blanching assay) rather than quantitative pharmacokinetic disposition parameters. |
| popPK | Scott_2001 | irrelevant | 0 | 0 | The paper is a review of calcipotriol for psoriasis where fluocinonide is only mentioned as a comparator agent, with no pharmacokinetic data provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
