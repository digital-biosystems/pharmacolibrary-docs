<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;moxifloxacin&quot;}]"></div>

# moxifloxacin

- **generic name:** moxifloxacin
- **ATC codes:** `J01MA14`, `S01AE07`
- **DrugBank:** [DB00218](https://go.drugbank.com/drugs/DB00218) · **PubChem:** [CID 152946](https://pubchem.ncbi.nlm.nih.gov/compound/152946)
- **molar mass:** 401.4314 g/mol (C21H24FN3O4) — DrugBank
- **groups:** approved, investigational

## About

Moxifloxacin is a fluoroquinolone antibiotic used to treat bacterial infections such as pneumonia, sinusitis, bronchitis, conjunctivitis, and urinary tract infections. It is an approved medicine, included on the WHO essential medicines list, and is used both systemically and as eye drops, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424940](https://www.wikidata.org/wiki/Q424940) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/2/1 | 0/0/0 | 0/0/0 | not captured | not captured | 23 | 7/0 | 14/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag, k12, k21 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Palmer_2025_reference](drugs/drug_moxifloxacin/Moxifloxacin_Palmer2025_reference.md) | held back | 2-compartment, oral | 5 | Palmer M et al., Population pharmacokinetics and dosing…, British journal of clinical… (2025) | [10.1111/bcp.70005](https://doi.org/10.1111/bcp.70005) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Greenberg_2022_reference](drugs/drug_moxifloxacin/Moxifloxacin_Greenberg2022_reference.md) | — | 1-compartment (no model) | 0 | Greenberg RG et al., Population Pharmacokinetics of Moxiflox…, Paediatric drugs (2022) | [10.1007/s40272-022-00493-3](https://doi.org/10.1007/s40272-022-00493-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.917). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yun_2022_reference](drugs/drug_moxifloxacin/Moxifloxacin_Yun2022_reference.md) | — | 2-compartment (no model) | 6 | Yun HY et al., Model-Based Efficacy and Toxicity Compa…, Open forum infectious disea… (2022) | [10.1093/ofid/ofab660](https://doi.org/10.1093/ofid/ofab660) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=moxifloxacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PON1 (inhibitor), TOP2A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 209 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Greenberg_2022.pdf` | Greenberg RG et al., Population Pharmacokinetics of Moxiflox…, Paediatric drugs (2022) | popPK | 10 | [10.1007/s40272-022-00493-3](https://doi.org/10.1007/s40272-022-00493-3) | [35284983](https://pubmed.ncbi.nlm.nih.gov/35284983) | The abstract reports numeric population PK parameters for moxifloxacin (clearance and volume) directly in the text. |
| `Radtke_2022.pdf` | Radtke KK et al., Moxifloxacin Pharmacokinetics, Cardiac…, Clinical infectious disease… (2022) | popPK | 9 | [10.1093/cid/ciab641](https://doi.org/10.1093/cid/ciab641) | [34286843](https://pubmed.ncbi.nlm.nih.gov/34286843) | The paper reports a population PK model with a numeric apparent clearance, but detailed parameter values may be incomplete beyond the abstract and full model output. |

<sub>queue written 2026-07-18T22:42:37.658748+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bock_2023_2 | relevant | 7 | 4 | Moxifloxacin is a subject drug in a population PK analysis, but the actual numeric PK parameter values are only said to be in Supplementary Table 1 not shown here. |
| popPK | Lee_2025 | relevant | 8 | 3 | This is a moxifloxacin popPK external validation paper, but the readable evidence mainly gives model-performance results and only partial parameter snippets while full model values appear to be in tables/supplementary material not provided. |
| popPK | Nyangwa_2026 | irrelevant | 0 | 0 | The evidence is about pretomanid, not moxifloxacin; moxifloxacin is only a co-administered regimen component. |
| popPK | Olivares_2025 | irrelevant | 2 | 1 | Moxifloxacin is only mentioned as a simulated comparator, and the numeric PK parameters appear to be in supplementary tables/figures not provided here. |
| popPK | Radtke_2022 | relevant | 9 | 4 | The paper reports a population PK model with a numeric apparent clearance, but detailed parameter values may be incomplete beyond the abstract and full model output. |
| popPK | Xu_2024 | irrelevant | 2 | 0 | The paper is about pyrazinamide PK in regimens that include moxifloxacin, but no moxifloxacin disposition parameters are reported here. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 13:44 UTC</sub>
