<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D07A&quot;,&quot;href&quot;:&quot;atc/D07A.md&quot;},{&quot;label&quot;:&quot;hydrocortisone buteprate&quot;}]"></div>

# hydrocortisone buteprate

- **generic name:** hydrocortisone buteprate
- **ATC codes:** `D07AB11`
- **DrugBank:** [DB14543](https://go.drugbank.com/drugs/DB14543) · **PubChem:** not captured
- **groups:** approved, vet_approved

## About

Hydrocortisone buteprate is a moderately potent topical corticosteroid used as an anti-inflammatory agent for skin conditions. It is an approved drug and also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5954736](https://www.wikidata.org/wiki/Q5954736) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:20 | 6:35 | 0/0/0 | 0/0/0 | 0/0/0 | 197,467/1,698 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 1/8 | 8/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=hydrocortisone_buteprate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` unknown, `ABCG2` unknown, `SLCO1A2` unknown | DrugBank actor |
| absorption | kidney | `ABCB1` unknown | DrugBank actor |
| absorption | liver | `ABCB1` unknown, `ABCG2` unknown | DrugBank actor |
| absorption | mammary gland | `ABCG2` unknown | DrugBank actor |
| absorption | placenta | `ABCB1` unknown | DrugBank actor |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | `ABCB1` unknown, `ABCG2` unknown, `SLCO1A2` unknown | DrugBank actor |
| absorption | testis | `ABCB1` unknown, `ABCG2` unknown | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` inducer, `CYP3A4` inducer/substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A8` unknown | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| — | adrenal gland | `CYP11B1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ANXA1 (target), CYP11B2 (substrate), HSD11B2 (inhibitor), HSD3B1 (inhibitor), NR3C1 (target), SERPINA6 (unknown), SHBG (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cai_2024 | irrelevant | 0 | 0 | The paper describes a disease course model for Amyotrophic Lateral Sclerosis (ALS) and does not contain any pharmacokinetic data for hydrocortisone_buteprate. |
| popPK | Ng_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of exendin-(9-39), not hydrocortisone_buteprate. |
| popPK | Oiso_2013 | irrelevant | 0 | 0 | The paper is a case report on vitiligo repigmentation and does not contain any pharmacokinetic data for hydrocortisone butyrate. |
| popPK | Sala_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of deoxydidehydronucleosides (ddhN) in rats, not hydrocortisone_buteprate. |
| popPK | Steinwurzel_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and neurophysiological effects of beta-hydroxybutyrate (a ketone body), not hydrocortisone butyrate. |
| popPK | Steinwurzel_2025_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and neurophysiological effects of beta-hydroxybutyrate (βHB), not hydrocortisone butyrate. |
| popPK | Su_2026 | irrelevant | 0 | 0 | The paper investigates ketone body metabolism and SGLT2 inhibitor response in heart failure, containing no data on hydrocortisone_buteprate pharmacokinetics. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for phenylacetic acid (PAA) and ornithine phenylacetate, not hydrocortisone_buteprate. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of l-ornithine phenylacetate (L-OPA), not hydrocortisone butyrate. |
| popPK | Wolfram_2026 | irrelevant | 0 | 0 | The paper is a systematic review of cerebral organoids in neuroscience and contains no pharmacokinetic data for hydrocortisone buteprate. |
| popPK | Zvidzayi_2021 | irrelevant | 0 | 0 | The study focuses on the vasoconstrictor assay (pharmacodynamics/potency) of topical corticosteroids and does not report pharmacokinetic parameters (CL, V, ka) for hydrocortisone butyrate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
