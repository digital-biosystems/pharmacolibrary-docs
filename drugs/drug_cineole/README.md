<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05C&quot;,&quot;href&quot;:&quot;atc/R05C.md&quot;},{&quot;label&quot;:&quot;cineole&quot;}]"></div>

# cineole

- **generic name:** cineole
- **ATC codes:** `R05CA13`
- **DrugBank:** [DB03852](https://go.drugbank.com/drugs/DB03852) · **PubChem:** not captured
- **groups:** approved, investigational, nutraceutical

## About

Cineole (eucalyptol) is used as an expectorant in cough and cold preparations. It is approved and also used as a nutraceutical, with some investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q161572](https://www.wikidata.org/wiki/Q161572) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:49 | 0:56 | 0/0/0 | 0/0/0 | 0/0/0 | 179,054/1,220 | einfracz / qwen3.8-27b | 10 | 0/10 | 10/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cineole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TRPM8 (activator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 43 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Balah_2024 | irrelevant | 0 | 0 | The paper is an ecological study on allelopathy in invasive plants, where cineole is identified as a minor volatile component but no pharmacokinetic parameters are reported. |
| popPK | Boujbiha_2023 | irrelevant | 0 | 0 | The paper studies the phytochemical and pharmacological properties of Vitex agnus-castus, where cineole is only a constituent, not the subject of a pharmacokinetic study. |
| popPK | Dos_2025 | irrelevant | 2 | 0 | The study focuses on Eucalyptus essential oils (composites) for anticoagulant activity with in vitro assays and bioinformatics; no specific quantitative PK parameters for cineole alone are provided. |
| popPK | Jarvis_2016 | irrelevant | 0 | 0 | The study investigates the electrophysiological binding and inhibition of 5-HT3 receptors by eucalyptol (1,8-cineole) and related terpenoids, reporting IC50 values for receptor inhibition rather than pharmacokinetic disposition parameters (CL, V, ka) for the drug. |
| popPK | Kang_2019 | irrelevant | 0 | 0 | This is a phytotoxicity/allelopathy study measuring plant growth inhibition, not a pharmacokinetic study of cineole. |
| popPK | Khumpirapang_2022 | irrelevant | 0 | 0 | The paper investigates the binding of cineole to GABA receptors (mechanistic/pharmacodynamic) and its concentration in essential oil, but reports no pharmacokinetic parameters. |
| popPK | Lawler_2020 | irrelevant | 0 | 0 | The paper is a chemical analysis of snus products and does not report any pharmacokinetic parameters for cineole or eucalyptol. |
| popPK | Lira-Mejía_2025 | irrelevant | 0 | 0 | The study evaluates the toxicological and antimicrobial effects of a thymol-eucalyptol mixture, not its pharmacokinetics, and reports no PK parameters. |
| popPK | Oliveira_2023 | irrelevant | 0 | 0 | The paper is an in vitro bioactivity study of essential oils where 1,8-cineole is identified as a major chemical compound, but no pharmacokinetic parameters (CL, V, t1/2, etc.) are reported. |
| popPK | Senthoorraja_2021 | irrelevant | 0 | 0 | The paper investigates the insecticidal and behavioral effects of basil essential oil (which contains 1,8-cineole) on houseflies, but does not contain any pharmacokinetic parameters (CL, V, ka) for cineole in any species. |
| popPK | Spréa_2024 | irrelevant | 0 | 0 | The paper is an in vitro study of essential oils from Lamiaceae plants focusing on antioxidant, antimicrobial, and cytotoxic activities, with no pharmacokinetic data for cineole. |
| popPK | Terashita_2026 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of anti-inflammatory effects in RAW264.7 cells and does not report pharmacokinetic parameters for cineole. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
