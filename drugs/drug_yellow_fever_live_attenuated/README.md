<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J07B&quot;,&quot;href&quot;:&quot;atc/J07B.md&quot;},{&quot;label&quot;:&quot;yellow fever, live attenuated&quot;}]"></div>

# yellow fever, live attenuated

- **generic name:** yellow fever, live attenuated
- **ATC codes:** `J07BL01`
- **DrugBank:** [DB10805](https://go.drugbank.com/drugs/DB10805) · **PubChem:** not captured
- **groups:** approved, investigational

## About

This live attenuated vaccine protects against yellow fever. It is widely used and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q8051876](https://www.wikidata.org/wiki/Q8051876) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:19 | 0:35 | 0/0/0 | 0/0/0 | 0/0/0 | 64,668/808 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 137 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barte_2014 | irrelevant | 0 | 0 | This is a Cochrane review focusing on immunogenicity (antibody levels) and safety in HIV patients, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for the vaccine. |
| popPK | Foster_1999 | irrelevant | 0 | 0 | The study focuses on the immunogenicity of a bivalent cholera and typhoid vaccine, mentioning yellow fever vaccine only as a co-administered agent for compatibility testing, with no pharmacokinetic data reported. |
| popPK | Gupta_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro antiviral activity of new small molecule compounds against the Yellow Fever Virus, not the pharmacokinetics of the Yellow Fever vaccine. |
| popPK | Hansen_2023 | irrelevant | 0 | 0 | This is a review of clinical immunogenicity and efficacy studies for the yellow fever vaccine, reporting antibody titers and seroconversion rates rather than quantitative pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Hayes_2010 | irrelevant | 0 | 0 | The paper is a narrative review on vaccine development and safety, containing no pharmacokinetic data or numeric disposition parameters. |
| popPK | Lee_2023 | irrelevant | 0 | 0 | This is a review of mRNA vaccines that mentions the yellow fever vaccine only as a comparator for durability, and it does not contain any pharmacokinetic parameters or data for yellow fever. |
| popPK | López_2016 | irrelevant | 0 | 0 | The study reports immunogenicity (seroconversion rates) and safety data, not pharmacokinetic parameters (CL, V, t1/2). |
| popPK | OConnell_2020 | irrelevant | 0 | 0 | The paper is a review of live-attenuated vaccines and humanized mouse models, containing no quantitative pharmacokinetic parameter values for the yellow fever vaccine. |
| popPK | Roukens_2019 | irrelevant | 0 | 0 | This is an expert review of fractional-dose yellow fever vaccination focusing on immunogenicity (antibody titers) and safety, with no reporting of quantitative pharmacokinetic parameters (CL, V, ka, etc.) for the drug. |
| popPK | Tyagi_2023 | irrelevant | 0 | 0 | The paper reports on neurovirulence, viscerotropism, and immunogenicity (antibody titers) rather than pharmacokinetic parameters (CL, V, ka) for the vaccine virus. |
| popPK | Wilson_2001 | irrelevant | 0 | 0 | The paper is a review on travel vaccines focusing on immunogenicity and adverse effects in the elderly, with no pharmacokinetic data reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
