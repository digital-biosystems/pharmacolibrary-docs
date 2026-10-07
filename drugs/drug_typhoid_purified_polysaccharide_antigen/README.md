<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J07A&quot;,&quot;href&quot;:&quot;atc/J07A.md&quot;},{&quot;label&quot;:&quot;typhoid, purified polysaccharide antigen&quot;}]"></div>

# typhoid, purified polysaccharide antigen

- **generic name:** typhoid, purified polysaccharide antigen
- **ATC codes:** `J07AP03`
- **DrugBank:** [DB10803](https://go.drugbank.com/drugs/DB10803) · **PubChem:** not captured
- **groups:** approved, investigational

## About

This vaccine is used to protect against typhoid fever caused by Salmonella typhi. It is an approved bacterial typhoid vaccine, though its availability appears limited and it has also been investigated for other uses.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:50 | 3:17 | 0/0/0 | 1/0/0 | 0/0/0 | 118,647/1,901 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kroon_1999_Ab](drugs/drug_typhoid_purified_polysaccharide_antigen/pd_Kroon_1999_Ab.md) | antibody response ← Salmonella typhi TY2 Vi polysaccharide antigen · stimulation effect | — | Kroon FP et al., Impaired antibody response after immuni…, Vaccine (1999) | [10.1016/s0264-410x(99)00167-x](https://doi.org/10.1016/s0264-410x(99)00167-x) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 40 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alberer_2015 | irrelevant | 0 | 0 | The study evaluates immunogenicity and safety of a typhoid vaccine (antibody titers), not the pharmacokinetic disposition parameters (CL, V, etc.) of the antigen. |
| popPK | Alugupalli_2024 | irrelevant | 0 | 0 | The paper is an immunogenicity study in mice focusing on antibody responses to a typhoid vaccine adjuvant, containing no pharmacokinetic parameters for the antigen. |
| popPK | Azze_2003 | irrelevant | 0 | 0 | The paper reports immunogenicity (seroconversion rates and antibody titers), not pharmacokinetic disposition parameters. |
| popPK | Capeding_2018 | irrelevant | 0 | 0 | This is a Phase I safety and immunogenicity trial for a typhoid vaccine, not a pharmacokinetic study reporting clearance, volume, or other disposition parameters. |
| popPK | Cartee_2020 | irrelevant | 0 | 0 | The paper is an immunogenicity and safety study of a typhoid vaccine (Typhax) and does not report pharmacokinetic parameters (CL, V, etc.) for typhoid_purified_polysaccharide_antigen. |
| popPK | Choi_2021 | irrelevant | 0 | 0 | The study is an immunogenicity and safety trial reporting antibody titers, not pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Fritzell_1992 | irrelevant | 0 | 0 | The study focuses on the safety and immunogenicity of a typhoid vaccine, not on its pharmacokinetic disposition parameters. |
| popPK | Gupta_2008 | irrelevant | 0 | 0 | The study measures immunogenicity and seroprevalence (antibody titres), not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | He_2007 | irrelevant | 0 | 0 | The study focuses on the immunogenicity of meningococcal vaccines, using Typhoid Vi polysaccharide only as a negative control without reporting its pharmacokinetic parameters. |
| popPK | Hessel_1999 | irrelevant | 0 | 0 | The paper is a clinical review of immunogenicity and efficacy, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Honda-Okubo_2022 | irrelevant | 0 | 0 | The paper reports immunogenicity data (antibody levels, bactericidal activity) for a typhoid vaccine, not quantitative pharmacokinetic disposition parameters (CL, V, half-life, etc.). |
| popPK | Lebacq_2001 | irrelevant | 0 | 0 | The study evaluates immunogenicity and tolerability (seropositivity rates and adverse events) of typhoid vaccines, reporting no pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Mirza_1995 | irrelevant | 0 | 0 | The study reports immunogenicity and safety (antibody titers/adverse events) rather than pharmacokinetic disposition parameters (CL, V, half-life) for the vaccine antigen. |
| popPK | Miyazu_2015 | irrelevant | 0 | 0 | The study assesses immunogenicity (antibody titers) and safety, not pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Murdoch_2003 | irrelevant | 0 | 0 | The paper is a review of hepatitis A and B vaccine immunogenicity and tolerability, with no pharmacokinetic data for typhoid purified polysaccharide antigen. |
| popPK | Pelser_2001 | irrelevant | 0 | 0 | The study reports immunogenicity and reactogenicity data, not pharmacokinetic disposition parameters. |
| popPK | Proell_2002 | irrelevant | 0 | 0 | This is a clinical immunogenicity and safety study of the typhoid Vi polysaccharide vaccine, reporting seroconversion rates and not pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Ramkissoon_2001 | irrelevant | 0 | 0 | The study evaluates the immunogenicity and reactogenicity of the typhoid vaccine, not its pharmacokinetic disposition parameters (e.g., clearance, volume). |
| popPK | Vadrevu_2025 | irrelevant | 0 | 0 | The study reports immunogenicity data (antibody titers) for a typhoid vaccine, not pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
