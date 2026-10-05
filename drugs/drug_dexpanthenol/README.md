<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;dexpanthenol&quot;}]"></div>

# dexpanthenol

- **generic name:** dexpanthenol
- **ATC codes:** `A11HA30`, `D03AX03`, `S01XA12`
- **DrugBank:** [DB09357](https://go.drugbank.com/drugs/DB09357) · **PubChem:** [CID 131204](https://pubchem.ncbi.nlm.nih.gov/compound/131204)
- **molar mass:** 205.2515 g/mol (C9H19NO4) — DrugBank
- **groups:** approved, investigational

## About

Dexpanthenol is a vitamin-derived agent used to help heal wounds and skin damage, and also as an eye preparation and vitamin supplement. It is an approved medicine, sold under brand names such as Bepanthen, and is widely used in topical skin-care products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q47495755](https://www.wikidata.org/wiki/Q47495755) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 07:48 | 0:30 | 0/0/0 | 0/0/0 | 0/0/0 | 22,308/273 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 1/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dexpanthenol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | mammary gland | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Navarro_2015.pdf` | Navarro E et al., Effects of Differently Coated Silver Na…, Environmental science & tec… (2015) | pd | 4 | [10.1021/acs.est.5b01089](https://doi.org/10.1021/acs.est.5b01089) | [26018638](https://www.ncbi.nlm.nih.gov/pubmed/26018638) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-05T07:47:47.253361+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arslan_2026 | irrelevant | 0 | 0 | The study is a mechanistic neuroprotection investigation in rats that reports behavioral and histological outcomes, not pharmacokinetic parameters. |
| PD | Arslan_2026 | not_relevant | 1 | 0 | The study uses a single fixed dose (500 mg/kg) without measuring drug concentrations or performing a dose-response analysis, so no numeric PD parameters or exposure-response relationship can be derived. |
| popPK | Günay_2026 | irrelevant | 0 | 0 | The study evaluates ocular surface retention of artificial tears using scintigraphy, not systemic pharmacokinetic parameters (CL, V, ka) for dexpanthenol. |
| popPK | Kalil_2014 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy for preventing postoperative sore throat and does not report any pharmacokinetic parameters for dexpanthenol. |
| PD | Kalil_2014 | not_relevant | 1 | 0 | The paper is a review of clinical trials regarding the efficacy of dexpanthenol for sore throat and explicitly states that dose-response relationships need to be explored in future trials, providing no numeric PD parameters. |
| popPK | Navarro_2015 | irrelevant | 0 | 0 | The study investigates the toxicity of silver nanoparticles coated with dexpanthenol on algae, not the pharmacokinetics of dexpanthenol. |
| PD | Navarro_2015 | not_relevant | 0 | 0 | The paper studies the toxicity of silver nanoparticles (AgNP) on algae, where dexpanthenol is merely one of several surface coatings, not the subject of a pharmacodynamic or exposure-response analysis. |
| popPK | Tan_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anti-inflammatory and antioxidant effects on keratinocytes, containing no pharmacokinetic data for dexpanthenol. |
| PD | Tan_2024 | not_relevant | 2 | 1 | The study investigates a combination product (AB5D) using transcriptomics and mediator quantitation, but does not report specific numeric dose-response parameters (e.g., EC50, Emax) for dexpanthenol alone or the combination in a format that allows derivation of a PD curve. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
