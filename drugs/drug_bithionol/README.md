<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;bithionol&quot;}]"></div>

# bithionol

- **generic name:** bithionol
- **ATC codes:** `D10AB01`, `P02BX01`
- **DrugBank:** [DB04813](https://go.drugbank.com/drugs/DB04813) · **PubChem:** [CID 2406](https://pubchem.ncbi.nlm.nih.gov/compound/2406)
- **molar mass:** 356.052 g/mol (C12H6Cl4O2S) — DrugBank
- **groups:** approved, withdrawn

## About

Bithionol was used as an antiparasitic drug against fluke (trematode) infections and also as a topical anti-acne and antiseptic agent, including as an additive in soaps. It has been withdrawn from human use, reportedly because of skin reactions such as photoallergic contact dermatitis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4918862](https://www.wikidata.org/wiki/Q4918862) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:33 | 0:17 | 0/0/0 | 0/1/0 | 0/0/0 | 34,727/868 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Aggarwal_2020_NAPE_PLD_activity](drugs/drug_bithionol/pd_Aggarwal_2020_NAPE_PLD_activity.md) | NAPE-PLD activity ← bithionol · direct sigmoid Emax (Hill) effect | — | Aggarwal G et al., Symmetrically substituted dichlorophene…, The Journal of biological c… (2020) | [10.1074/jbc.RA120.013362](https://doi.org/10.1074/jbc.RA120.013362) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bithionol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CAPN2 (inhibitor), ESR1 (inhibitor), ESR2 (inhibitor), MCL1 (inhibitor).</sub>

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
| popPK | Aggarwal_2020 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study characterizing bithionol as a NAPE-PLD inhibitor (IC50 reported), not a pharmacokinetic study with disposition parameters like clearance or volume of distribution. |
| popPK | Park_2014 | irrelevant | 0 | 0 | The study evaluates the antiprotozoal efficacy (EC50) of bithionol in vitro and in vivo against a parasite in sea squirts, but does not report any pharmacokinetic parameters for bithionol. |
| popPK | Reid_2001 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of bithionol's cytotoxicity and oxidative stress effects in human keratinocytes, not a pharmacokinetic study. |
| popPK | Wickramasinghe_2006 | irrelevant | 0 | 0 | The paper investigates the enzyme kinetics and structure of OAR in Plasmodium falciparum and reports in vitro antimalarial activity of bithionol, but contains no pharmacokinetic or disposition parameters for bithionol. |
| popPK | Yoshimura_2005 | irrelevant | 0 | 0 | The paper reports acute toxicity (LC50/EC50) and stability in water for freshwater organisms, containing no pharmacokinetic parameters such as clearance, volume, or half-life. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
