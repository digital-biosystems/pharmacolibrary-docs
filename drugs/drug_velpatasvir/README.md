<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Velpatasvir&quot;}]"></div>

# Velpatasvir

- **generic name:** Velpatasvir
- **ATC codes:** `J05AP55`, `J05AP56`
- **DrugBank:** [DB11613](https://go.drugbank.com/drugs/DB11613) · **PubChem:** [CID 67683363](https://pubchem.ncbi.nlm.nih.gov/compound/67683363)
- **molar mass:** 883.019 g/mol (C49H54N8O8) — DrugBank
- **groups:** approved, investigational

## About

Velpatasvir is an antiviral drug used to treat hepatitis C virus infections. It is an approved direct-acting antiviral, given in combination with other hepatitis C medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25018296](https://www.wikidata.org/wiki/Q25018296) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:44 | 0:18 | 0/0/0 | 1/0/0 | 0/0/0 | 32,454/860 | ollama / glm-5.3-flash | 3 | 1/2 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nguyen_2020_RLU](drugs/drug_velpatasvir/pd_Nguyen_2020_RLU.md) | HCV replicon replication (luciferase activity) ← velpatasvir · direct sigmoid Emax (Hill) effect | — | Nguyen D et al., Efficacy of NS5A inhibitors against unu…, Journal of hepatology (2020) | [10.1016/j.jhep.2020.05.029](https://doi.org/10.1016/j.jhep.2020.05.029) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Indolfi_2022.pdf` | Indolfi G et al., Sofosbuvir-velpatasvir-voxilaprevir in…, Hepatology (Baltimore, Md.) (2022) | popPK | 7 | [10.1002/hep.32393](https://doi.org/10.1002/hep.32393) | [35112372](https://pubmed.ncbi.nlm.nih.gov/35112372) | Intensive and population PK sampling in adolescents dosed with velpatasvir, but numeric exposure values are not shown in the evidence (likely in tables/figures not provided). |
| `Jonas_2024.pdf` | Jonas MM et al., Sofosbuvir-velpatasvir in children 3-17…, Journal of pediatric gastro… (2024) | popPK | 7 | [10.1002/jpn3.12045](https://doi.org/10.1002/jpn3.12045) | [38644678](https://pubmed.ncbi.nlm.nih.gov/38644678) | Population PK of velpatasvir in children was performed and intensive PK collected, but no numeric parameter values appear in the evidence (likely in supplementary material). |
| `Mogalian_2018.pdf` | Mogalian E et al., Pharmacokinetics and Safety of Velpatas…, Clinical pharmacokinetics (2018) | popPK | 5 | [10.1007/s40262-018-0645-6](https://doi.org/10.1007/s40262-018-0645-6) | [29520729](https://pubmed.ncbi.nlm.nih.gov/29520729) | Human NCA PK of velpatasvir in hepatic impairment, but no numeric parameter values (AUC, CL, etc.) are given in the evidence text. |

<sub>queue written 2026-10-07T16:44:40.324015+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Camus_2018 | irrelevant | 0 | 0 | In vitro resistance/virology study with EC50 potency data, no PK disposition parameters for velpatasvir. |
| popPK | Dvory-Sobol_2019 | irrelevant | 0 | 0 | In vitro virologic resistance study (EC50 susceptibility in replicons), no pharmacokinetic disposition parameters for velpatasvir. |
| popPK | Indolfi_2022 | relevant | 7 | 3 | Intensive and population PK sampling in adolescents dosed with velpatasvir, but numeric exposure values are not shown in the evidence (likely in tables/figures not provided). |
| popPK | Jonas_2024 | relevant | 7 | 3 | Population PK of velpatasvir in children was performed and intensive PK collected, but no numeric parameter values appear in the evidence (likely in supplementary material). |
| popPK | Mogalian_2018 | relevant | 5 | 2 | Human NCA PK of velpatasvir in hepatic impairment, but no numeric parameter values (AUC, CL, etc.) are given in the evidence text. |
| popPK | Nguyen_2020 | irrelevant | 0 | 0 | In vitro replicon EC50 antiviral susceptibility study, not a pharmacokinetic study with disposition parameters for velpatasvir. |
| popPK | Ruiz_2021 | irrelevant | 0 | 0 | Clinical efficacy/safety study of DAA regimens; velpatasvir only appears as a treatment drug and in-vitro EC50 resistance data, with no PK disposition parameters. |
| popPK | Xie_2020 | irrelevant | 0 | 0 | This is an in vitro SARS-CoV-2 antiviral screening study; velpatasvir is only a screened compound reported inactive, with no PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
