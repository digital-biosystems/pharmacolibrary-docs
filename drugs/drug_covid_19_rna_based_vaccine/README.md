<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J07B&quot;,&quot;href&quot;:&quot;atc/J07B.md&quot;},{&quot;label&quot;:&quot;covid-19, RNA-based vaccine&quot;}]"></div>

# covid-19, RNA-based vaccine

- **generic name:** covid-19, RNA-based vaccine
- **ATC codes:** `J07BN01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

This is an mRNA-based vaccine used to protect against COVID-19. Several such vaccines are authorised in the European Union, though one candidate was withdrawn from rolling review.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:36 | 1:13 | 0/0/0 | 0/1/0 | 0/0/0 | 67,244/1,005 | einfracz / qwen3.8-27b | 12 | 0/6 | 12/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Upreti_2022_Immunological_response](drugs/drug_covid_19_rna_based_vaccine/pd_Upreti_2022_Immunological_response.md) | Immunological response · stimulation effect | — | Upreti S et al., A Review on Immunological Responses to…, Pharmaceutical research (2022) | [10.1007/s11095-022-03323-w](https://doi.org/10.1007/s11095-022-03323-w) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 220 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Dury_2025 | irrelevant | 0 | 0 | The study reports immunogenicity (antibody and T-cell responses) rather than pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Alesci_2022 | irrelevant | 0 | 0 | The paper is a review of the immunogenicity, effectiveness, and safety of mRNA vaccines, containing no quantitative pharmacokinetic parameters (CL, V, etc.). |
| popPK | Baj_2022 | irrelevant | 0 | 0 | The study reports immunogenicity and safety data (antibody levels) for a concurrent vaccination protocol, not pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Dobaño_2022 | irrelevant | 0 | 0 | The paper is an immunogenicity study measuring antibody levels (IgG/IgA) against SARS-CoV-2 proteins and does not report pharmacokinetic parameters for the vaccine. |
| popPK | Einarsdottir_2024 | irrelevant | 0 | 0 | The study reports immunogenicity (antibody and T-cell responses) rather than pharmacokinetic disposition parameters for the vaccine. |
| popPK | Grau_2022 | irrelevant | 0 | 0 | The study is a preclinical investigation of vaccine stability and immunogenicity in mice, not a pharmacokinetic study, and it does not report any quantitative disposition parameters (e.g., CL, V, ka). |
| popPK | Mok_2025 | irrelevant | 0 | 0 | The study assesses immunogenicity and safety (antibody titers, T-cell response, adverse events) rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Naito_2025 | irrelevant | 0 | 0 | The paper is a review discussing the immunogenicity (antibody titers) and safety of a self-amplifying mRNA vaccine, containing no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for the vaccine construct itself. |
| popPK | Oda_2024 | irrelevant | 0 | 0 | This is an immunogenicity and safety trial for a self-amplifying mRNA vaccine, not a pharmacokinetic study, and no PK parameters are reported. |
| popPK | Pather_2024 | irrelevant | 0 | 0 | The paper is a benefit-risk assessment template regarding safety and immunogenicity, containing no pharmacokinetic data or quantitative disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
