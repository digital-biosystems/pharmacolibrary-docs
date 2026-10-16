<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;chlordiazepoxide&quot;}]"></div>

# chlordiazepoxide

- **generic name:** chlordiazepoxide
- **ATC codes:** `N05BA02`
- **DrugBank:** [DB00475](https://go.drugbank.com/drugs/DB00475) · **PubChem:** [CID 2712](https://pubchem.ncbi.nlm.nih.gov/compound/2712)
- **molar mass:** 299.755 g/mol (C16H14ClN3O) — DrugBank
- **groups:** approved, illicit

## About

Chlordiazepoxide is a benzodiazepine sedative used to treat anxiety disorders and in the management of alcohol abuse. It is an approved medicine, widely used as an anxiolytic, though it also has some illicit use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q178566](https://www.wikidata.org/wiki/Q178566) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:23 | 0:37 | 0/0/0 | 0/1/0 | 0/0/0 | 56,998/2,061 | einfracz / qwen3.8-27b | 6 | 1/5 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.90).">human + animal</span> | [Simasko_1984_TRH](drugs/drug_chlordiazepoxide/pd_Simasko_1984_TRH.md) | TRH binding ← chlordiazepoxide · inhibition effect | — | Simasko S et al., Chlordiazepoxide displaces thyrotropin-…, European journal of pharmac… (1984) | [10.1016/0014-2999(84)90291-7](https://doi.org/10.1016/0014-2999(84)90291-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.90).">human + animal</span> | [Simasko_1984_TRH_2](drugs/drug_chlordiazepoxide/pd_Simasko_1984_TRH_2.md) | TRH binding ← chlordiazepoxide · inhibition effect | — | Simasko S et al., Chlordiazepoxide displaces thyrotropin-…, European journal of pharmac… (1984) | [10.1016/0014-2999(84)90291-7](https://doi.org/10.1016/0014-2999(84)90291-7) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=chlordiazepoxide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target), TSPO (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 55 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Calvi_2022 | irrelevant | 0 | 0 | The paper is a neuroimaging study on multiple sclerosis lesion progression and contains no data related to chlordiazepoxide pharmacokinetics. |
| popPK | Daneshmend_1988 | irrelevant | 0 | 0 | The paper is a review of ketoconazole pharmacokinetics, and chlordiazepoxide is only mentioned as a potential drug interaction partner without any PK data. |
| popPK | Du_2015 | irrelevant | 0 | 0 | The study investigates the cardiotoxicity of organophosphate flame retardants in zebrafish embryos and does not involve chlordiazepoxide or its pharmacokinetics. |
| popPK | File_1986 | irrelevant | 0 | 0 | This is a behavioral study on conditioned place preference in rats, not a pharmacokinetic study, and contains no quantitative disposition parameters for chlordiazepoxide. |
| popPK | Fricks_2008 | irrelevant | 0 | 0 | The paper is a pharmacological study of P2Y14 receptor agonism/antagonism in cells and does not involve chlordiazepoxide pharmacokinetics. |
| popPK | Jost_2026 | irrelevant | 0 | 0 | The study focuses on foslevodopa/foscarbidopa in Parkinson's disease and does not involve chlordiazepoxide or its pharmacokinetics. |
| popPK | Kalinowski_2022 | irrelevant | 0 | 0 | The paper is a clinical study on the timed 25-foot walk in multiple sclerosis patients and contains no pharmacokinetic data for chlordiazepoxide. |
| popPK | Laliberté_2002 | irrelevant | 0 | 0 | The paper describes in vitro enzyme kinetics of PDE4A4 and does not involve chlordiazepoxide. |
| popPK | Mathews_1996 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study characterizing the mechanism of action of chlordiazepoxide on GABAA receptors, not a pharmacokinetic study. |
| popPK | McEachern_1988 | irrelevant | 0 | 0 | The study is an in-vitro receptor pharmacology investigation reporting EC50 and binding affinity values, not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Merlo_1989 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats assessing anxiolytic effects, not a pharmacokinetic study, and reports no quantitative disposition parameters (CL, V, ka, etc.) for chlordiazepoxide. |
| popPK | Nedelman_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for pasireotide, not chlordiazepoxide. |
| popPK | Niespodziany_2020 | irrelevant | 0 | 0 | This is an in-vitro functional characterization study of padsevonil where chlordiazepoxide is used only as a pharmacological comparator, and no pharmacokinetic parameters are reported. |
| popPK | Nonomura_2026 | irrelevant | 0 | 0 | The paper describes a caffeine-induced protein dissociation system and does not study chlordiazepoxide or its pharmacokinetics. |
| popPK | Percival_1997 | irrelevant | 0 | 0 | The study investigates the biochemical mechanism of cAMP-specific phosphodiesterase (PDE4A) activation by zinc and does not involve chlordiazepoxide or any pharmacokinetic parameters. |
| popPK | Sanger_1985 | irrelevant | 0 | 0 | The study is a behavioral analysis of conditioned fear in mice and does not report any pharmacokinetic parameters for chlordiazepoxide. |
| popPK | Selzer_2015 | irrelevant | 0 | 0 | The study focuses on in-silico modeling of skin absorption for flufenamic acid, not chlordiazepoxide. |
| popPK | Simasko_1984 | irrelevant | 0 | 0 | The study is a pharmacological binding assay reporting IC50 values, not a pharmacokinetic study reporting disposition parameters like clearance, volume, or half-life. |
| popPK | Teh_2023 | irrelevant | 0 | 0 | The paper focuses on choline kinase inhibition and RNAi in Entamoeba histolytica and contains no pharmacokinetic data for chlordiazepoxide. |
| popPK | Tsuboi_2026 | irrelevant | 0 | 0 | The study concerns foslevodopa/foscarbidopa in Parkinson's disease and does not involve chlordiazepoxide pharmacokinetics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
