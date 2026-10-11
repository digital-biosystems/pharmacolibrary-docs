<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;vitamin A concentrates&quot;}]"></div>

# vitamin A concentrates

- **generic name:** vitamin A concentrates
- **ATC codes:** `V04CB01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Vitamin A concentrates are used as a diagnostic test for fat absorption, helping assess whether the gut properly absorbs fats. They are classified among diagnostic agents rather than medicines for treatment, and no marketing or usage details are available in the provided facts.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:37 | 2:20 | 0/0/0 | 0/0/0 | 0/0/0 | 36,335/1,277 | ollama / glm-5.3-flash | 4 | 2/2 | 3/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 268 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baker_1986 | irrelevant | 0 | 0 | This is a retinal lipid composition study in rats, not a pharmacokinetic study of vitamin A disposition; no PK parameters are reported. |
| popPK | Boerwinkle_1994 | irrelevant | 2 | 2 | Vitamin A (retinyl palmitate) is only a co-administered tracer of chylomicron clearance in a genetics study; no PK parameters (CL, V, ka, half-life) for vitamin A are reported, only postprandial concentration responses. |
| popPK | Dayma_2025 | irrelevant | 0 | 0 | This is a review of Stargardt's disease pathogenesis and therapies; no PK parameters (CL, V, ka, half-life) for vitamin A concentrates are reported. |
| popPK | Föger_1994 | irrelevant | 1 | 1 | Vitamin A (retinyl palmitate) is only a tracer/diagnostic label for chylomicron clearance; no PK parameters for vitamin A itself are reported. |
| popPK | Gaikwad_2020 | irrelevant | 0 | 0 | This is a review of analytical methods for tazarotene, a different drug, with no quantitative PK parameters for vitamin A concentrates. |
| popPK | Ghafoor_2022 | irrelevant | 0 | 0 | A qualitative review of scalp psoriasis treatments mentioning vitamin A derivatives only as a drug class, with no PK parameters or numeric values. |
| popPK | Goodman_1982 | irrelevant | 3 | 4 | The subject drug is 13-cis-retinoic acid, a synthetic vitamin A analog, not vitamin A concentrates; only a terminal half-life (~25 hr) and tmax are given, with no CL/V or compartmental model. |
| popPK | Holdiness_1989 | irrelevant | 0 | 0 | This is a review of clofazimine pharmacokinetics; vitamin A is only mentioned as an interacting drug, with no PK parameters for vitamin A. |
| popPK | Maeda_2012 | irrelevant | 0 | 0 | This is a mechanistic review of retinoid cycle biology with no PK parameters or numeric disposition values for vitamin A concentrates. |
| popPK | Morley_1980 | irrelevant | 0 | 0 | This is an endocrine study of vitamin A effects on thyroid function in rats, with no PK disposition parameters (CL, V, half-life, or PK model) for vitamin A reported. |
| popPK | Schmid_1994 | irrelevant | 0 | 0 | The paper only mentions vitamin A as a cause of hypercalcemia; no pharmacokinetic parameters are reported. |
| popPK | Soprano_1995 | irrelevant | 2 | 0 | A review chapter on retinoid teratogenesis with no numeric PK parameter values present; it only mentions pharmacokinetics in passing. |
| popPK | Stevison_2015 | irrelevant | 1 | 0 | A review chapter on CYP26 enzymes in inflammation and cancer with no PK parameters or numeric disposition values for vitamin A. |
| popPK | Tsubota_1998 | irrelevant | 0 | 0 | Review on tear dynamics and dry eye; vitamin A only mentioned as a tear component, no PK parameters. |
| popPK | Tsuchida_2017 | irrelevant | 0 | 0 | This is a review of hepatic stellate cell activation; vitamin A is only mentioned as retinoid storage, with no PK parameters for vitamin A concentrates. |
| popPK | Vahlquist_1985 | irrelevant | 3 | 2 | Study reports vitamin A concentrations and dialysate loss/clearance in CAPD patients, not disposition PK parameters (CL, V, t½) for vitamin A as a subject drug; only a mean dialysate content value is given. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | This is a chicken microbiome/Mycoplasma infection study where vitamin A is only a feed additive/metabolite measured by LC-MS; no PK parameters (CL, V, ka, half-life) for vitamin A are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
