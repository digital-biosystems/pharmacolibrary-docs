<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02C&quot;,&quot;href&quot;:&quot;atc/C02C.md&quot;},{&quot;label&quot;:&quot;trimazosin&quot;}]"></div>

# trimazosin

- **generic name:** trimazosin
- **ATC codes:** `C02CA03`
- **DrugBank:** [DB09206](https://go.drugbank.com/drugs/DB09206) · **PubChem:** [CID 37264](https://pubchem.ncbi.nlm.nih.gov/compound/37264)
- **molar mass:** 435.481 g/mol (C20H29N5O6) — DrugBank
- **groups:** experimental

## About

Trimazosin is an alpha-1 adrenergic blocker developed as an antihypertensive vasodilator for treating high blood pressure. It appears to be only experimental and is not an established, widely marketed medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1324057](https://www.wikidata.org/wiki/Q1324057) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| trimazosin | parent | 435.481 | C20H29N5O6 | DrugBank | [37264](https://pubchem.ncbi.nlm.nih.gov/compound/37264) | Meredith_1985, Reid_1983 |
| CP 23445 (1-hydroxy trimazosin) | metabolite | 451.48 | C20H29N5O7 | PubChem | [139356](https://pubchem.ncbi.nlm.nih.gov/compound/139356) | Meredith_1985, Reid_1983 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 14:12 | 3:36 | 0/1/1 | 0/1/0 | 0/0/0 | 34,112/11,621 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Meredith_1985_reference](drugs/drug_trimazosin/Trimazosin_Meredith1985_reference.md) | — | parent + metabolite (no model) | 2 | Meredith PA et al., Application of pharmacokinetic-pharmaco…, Journal of cardiovascular p… (1985) | [10.1097/00005344-198505000-00019](https://doi.org/10.1097/00005344-198505000-00019) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Reid_1983_reference](drugs/drug_trimazosin/Trimazosin_Reid1983_reference.md) | — | parent + metabolite (no model) | 3 | Reid JL et al., Pharmacokinetics and pharmacodynamics o…, American heart journal (1983) | [10.1016/0002-8703(83)90179-5](https://doi.org/10.1016/0002-8703(83)90179-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Meredith_1985_hypotensive_effects](drugs/drug_trimazosin/pd_Meredith_1985_hypotensive_effects.md) | hypotensive effects ← trimazosin and 1-hydroxy trimazosin · delayed effect through an effect compartment | — | Meredith PA et al., Application of pharmacokinetic-pharmaco…, Journal of cardiovascular p… (1985) | [10.1097/00005344-198505000-00019](https://doi.org/10.1097/00005344-198505000-00019) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trimazosin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADRA1D (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Reid_1983.pdf` | Reid JL et al., Pharmacokinetics and pharmacodynamics o…, American heart journal (1983) | popPK | 10 | [10.1016/0002-8703(83)90179-5](https://doi.org/10.1016/0002-8703(83)90179-5) | [6637788](https://pubmed.ncbi.nlm.nih.gov/6637788) | The study reports quantitative PK parameters (half-life, bioavailability) for trimazosin in humans, with specific values provided in the abstract. |
| `Meredith_1985.pdf` | Meredith PA et al., Application of pharmacokinetic-pharmaco…, Journal of cardiovascular p… (1985) | popPK | 9 | [10.1097/00005344-198505000-00019](https://doi.org/10.1097/00005344-198505000-00019) | [2410686](https://pubmed.ncbi.nlm.nih.gov/2410686) | The study reports quantitative pharmacokinetic parameters (clearance and half-life) for trimazosin in humans. |
| `Meredith_1983.pdf` | Meredith PA et al., Pharmacokinetic and pharmacodynamic mod…, Journal of pharmacokinetics… (1983) | pd | 5 | [10.1007/BF01058953](https://doi.org/10.1007/BF01058953) | [6668546](https://www.ncbi.nlm.nih.gov/pubmed/6668546) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-10-06T14:09:25.281463+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Meredith_1983 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| popPK | Veng-Pedersen_1988 | irrelevant | 2 | 0 | The paper is a methodological/theoretical study on the Response Mapping Operator (RMO) approach, using trimazosin only as a demonstration example without reporting specific quantitative PK parameter values in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 14:09 UTC</sub>
