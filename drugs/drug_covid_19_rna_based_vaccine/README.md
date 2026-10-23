<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J07B&quot;,&quot;href&quot;:&quot;atc/J07B.md&quot;},{&quot;label&quot;:&quot;covid-19, RNA-based vaccine&quot;}]"></div>

# covid-19, RNA-based vaccine

- **generic name:** covid-19, RNA-based vaccine
- **ATC codes:** `J07BN01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

This is an mRNA-based vaccine used to protect against COVID-19. Several such vaccines are authorised in the European Union, though one candidate was withdrawn from rolling review.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Upreti_2022_Immunological_response](drugs/drug_covid_19_rna_based_vaccine/pd_Upreti_2022_Immunological_response.md) | Immunological response · stimulation effect | — | Upreti S et al., A Review on Immunological Responses to…, Pharmaceutical research (2022) | [10.1007/s11095-022-03323-w](https://doi.org/10.1007/s11095-022-03323-w) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:36 | 1:13 | 0/0/0 | 0/1/0 | 0/0/0 | 67,244/1,005 | einfracz / qwen3.8-27b | 12 | 0/6 | 12/0 | 0 |

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
