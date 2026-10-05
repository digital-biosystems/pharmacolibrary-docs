<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;sodium selenite&quot;}]"></div>

# sodium selenite

- **generic name:** sodium selenite
- **ATC codes:** `A12CE02`, `B05XA20`
- **DrugBank:** [DB11127](https://go.drugbank.com/drugs/DB11127) · **PubChem:** [CID 1091](https://pubchem.ncbi.nlm.nih.gov/compound/1091)
- **molar mass:** 128.97 g/mol (H2O3Se) — DrugBank
- **groups:** approved

## About

Sodium selenite is a selenium supplement used to treat or prevent selenium deficiency. It is an approved mineral supplement and is also used as an additive in intravenous electrolyte solutions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414626](https://www.wikidata.org/wiki/Q414626) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| selenite | metabolite | 126.968 | O3Se-2 | PubChem | [1090](https://pubchem.ncbi.nlm.nih.gov/compound/1090) | Jayachandran_2021 |
| selenium | metabolite | 78.971 | Se | PubChem | [6326970](https://pubchem.ncbi.nlm.nih.gov/compound/6326970) | Guo_1991 |
| sodium_selenite (sodium selenite) | metabolite | 128.97 | H2O3Se | DrugBank | [1091](https://pubchem.ncbi.nlm.nih.gov/compound/1091) | Guo_1991, Jayachandran_2021, Zheng_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 09:55 | 6:36 | 1/1/1 | 0/0/0 | 0/0/0 | 68,738/22,615 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.727). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Jayachandran_2021_reference](drugs/drug_sodium_selenite/SodiumSelenite_Jayachandran2021_reference.md) | held back | 1-compartment, oral | 3 | Jayachandran P et al., Clinical Pharmacokinetics of Oral Sodiu…, Drugs in R&D (2021) | [10.1007/s40268-021-00340-9](https://doi.org/10.1007/s40268-021-00340-9) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.095). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q20 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Guo_1991_reference](drugs/drug_sodium_selenite/SodiumSelenite_Guo1991_reference.md) | — | 1-compartment (no model) | 8 | Guo JA et al., [Pharmacokinetics of sodium selenite in…, Zhongguo yao li xue bao = A… (1991) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">bird</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Zheng_2019_reference](drugs/drug_sodium_selenite/SodiumSelenite_Zheng2019_reference.md) | — | 1-compartment (no model) | 3 | Zheng S et al., Pharmacokinetics of Sodium Selenite Adm…, Biological trace element re… (2019) | [10.1007/s12011-018-1567-8](https://doi.org/10.1007/s12011-018-1567-8) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sodium_selenite) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | skin | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GPX1 (activator), SELENOP (transporter), TXNRD1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guo_1991.pdf` | Guo JA et al., [Pharmacokinetics of sodium selenite in…, Zhongguo yao li xue bao = A… (1991) | popPK | 10 | not captured | [1664167](https://pubmed.ncbi.nlm.nih.gov/1664167) | The paper reports quantitative compartmental pharmacokinetic parameters (CL, Vc, half-lives) for sodium selenite in humans, with all numeric values explicitly provided in the text. |
| `Zeng_2020.pdf` | Zeng X et al., Pharmacokinetics of Sodium Selenite in…, Biological trace element re… (2020) | popPK | 10 | [10.1007/s12011-019-01928-8](https://doi.org/10.1007/s12011-019-01928-8) | [31656014](https://pubmed.ncbi.nlm.nih.gov/31656014) | The study reports compartmental PK models for sodium selenite in rats, but the specific numeric parameter values are not present in the provided evidence. |
| `Zheng_2019.pdf` | Zheng S et al., Pharmacokinetics of Sodium Selenite Adm…, Biological trace element re… (2019) | popPK | 10 | [10.1007/s12011-018-1567-8](https://doi.org/10.1007/s12011-018-1567-8) | [30465172](https://pubmed.ncbi.nlm.nih.gov/30465172) | The study reports quantitative pharmacokinetic parameters (half-lives, Tmax, dosing intervals) for sodium selenite in ducklings, with key values provided in the abstract. |

<sub>queue written 2026-10-05T09:49:01.226585+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Zeng_2020 | relevant | 10 | 0 | The study reports compartmental PK models for sodium selenite in rats, but the specific numeric parameter values are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 09:49 UTC</sub>
