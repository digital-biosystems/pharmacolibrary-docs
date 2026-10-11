<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05C&quot;,&quot;href&quot;:&quot;atc/R05C.md&quot;},{&quot;label&quot;:&quot;erdosteine&quot;}]"></div>

# erdosteine

- **generic name:** erdosteine
- **ATC codes:** `R05CB15`
- **DrugBank:** [DB05057](https://go.drugbank.com/drugs/DB05057) · **PubChem:** [CID 65632](https://pubchem.ncbi.nlm.nih.gov/compound/65632)
- **molar mass:** 249.307 g/mol (C8H11NO4S2) — DrugBank
- **groups:** approved, investigational

## About

Erdosteine is a mucolytic (mucokinetic) medicine used for respiratory conditions such as bronchitis and chronic obstructive pulmonary disease. It is an approved drug, though not authorised centrally in the European Union, and is used in various countries as a cough and cold expectorant preparation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3731252](https://www.wikidata.org/wiki/Q3731252) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:00 | 1:53 | 0/0/0 | 0/0/0 | 0/0/0 | 23,793/902 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=erdosteine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADA (inhibitor), CELA1 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Braga_2010.pdf` | Braga PC et al., Effects of sulphurous water on human ne…, Therapeutic advances in res… (2010) | pd | 4 | [10.1177/1753465810376783](https://doi.org/10.1177/1753465810376783) | [20650977](https://www.ncbi.nlm.nih.gov/pubmed/20650977) | metadata signals extractable PD data (concentration-effect) |

<sub>queue written 2026-10-07T23:00:37.217815+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dal_2008 | irrelevant | 0 | 0 | The text is a review of the pharmacological mechanisms (antitussive, anti-inflammatory, antioxidant) of erdosteine and does not contain any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Dal_2018 | irrelevant | 0 | 0 | The paper is a review focusing on the interaction between erdosteine and antibiotics regarding efficacy and resistance, containing no quantitative pharmacokinetic disposition parameters. |
| popPK | Gazzani_1989 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study assessing the antioxidant properties of erdosteine, containing no pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Hosoe_1998 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of erdosteine on mucociliary clearance in rats, not its pharmacokinetic parameters. |
| popPK | Hosoe_1999 | irrelevant | 0 | 0 | The study investigates pharmacodynamic effects (mucociliary transport, cough reflex, viscosity) in animals and in vitro, without reporting pharmacokinetic parameters for erdosteine. |
| popPK | Irwin_1993 | irrelevant | 0 | 0 | The paper is a review on antitussives and protussives that mentions erdosteine only as a protussive agent for mucus clearance, without providing any pharmacokinetic parameters. |
| popPK | Larobina_2026 | irrelevant | 0 | 0 | This is a narrative review of mucoactive agents' mechanisms and clinical outcomes, not a study reporting quantitative pharmacokinetic parameters (CL, V, ka) for erdosteine. |
| popPK | Pappová_2018 | irrelevant | 0 | 0 | This is a pharmacodynamic study on ciliary beat frequency and airway reactivity in guinea pigs, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Scuri_1988 | irrelevant | 0 | 0 | The study focuses on muco-regulating activity and toxicity in pigeons rather than quantitative pharmacokinetic parameters like clearance or volume of distribution for erdosteine. |
| popPK | Welsh_2015 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy and safety for bronchiectasis interventions, containing no pharmacokinetic data or disposition parameters for erdosteine. |
| popPK | Wilkinson_2014 | irrelevant | 0 | 0 | This is a clinical review on the efficacy of mucolytics in bronchiectasis and does not report any pharmacokinetic parameters for erdosteine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
