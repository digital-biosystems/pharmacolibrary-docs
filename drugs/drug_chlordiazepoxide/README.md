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
| 2026-10-06 18:55 | 1:17 | 0/0/0 | 1/1/0 | 0/0/0 | 101,019/2,384 | ollama / glm-5.3-flash | 6 | 1/5 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Simasko_1984_TRH_binding_displacement_pituitary](drugs/drug_chlordiazepoxide/pd_Simasko_1984_TRH_binding_displacement_pituitary.md) | Displacement of [3H](3MeHis2)TRH binding (pituitary tissue) ← chlordiazepoxide · direct sigmoid Emax (Hill) effect | — | Simasko S et al., Chlordiazepoxide displaces thyrotropin-…, European journal of pharmac… (1984) | [10.1016/0014-2999(84)90291-7](https://doi.org/10.1016/0014-2999(84)90291-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [McEachern_1988_Enhancement_of_submaximal_GABA_response_by_chlordiazepoxide](drugs/drug_chlordiazepoxide/pd_McEachern_1988_Enhancement_of_submaximal_GABA_response_by_ch.md) | Enhancement of submaximal GABA response by chlordiazepoxide ← chlordiazepoxide · direct Emax (saturable) effect | — | McEachern AE et al., Benzodiazepine interactions with GABAA…, Molecular pharmacology (1988) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Simasko_1984_TRH_binding_displacement_brain](drugs/drug_chlordiazepoxide/pd_Simasko_1984_TRH_binding_displacement_brain.md) | Displacement of [3H](3MeHis2)TRH binding (brain tissue) ← chlordiazepoxide · direct sigmoid Emax (Hill) effect | — | Simasko S et al., Chlordiazepoxide displaces thyrotropin-…, European journal of pharmac… (1984) | [10.1016/0014-2999(84)90291-7](https://doi.org/10.1016/0014-2999(84)90291-7) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=chlordiazepoxide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

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
| popPK | Calvi_2022 | irrelevant | 0 | 0 | This is an MRI study of slowly expanding lesions in multiple sclerosis with no chlordiazepoxide pharmacokinetic data whatsoever. |
| popPK | Daneshmend_1988 | irrelevant | 0 | 0 | This is a review of ketoconazole pharmacokinetics; chlordiazepoxide is only mentioned as an interacting drug, with no PK parameters for it. |
| popPK | Du_2015 | irrelevant | 0 | 0 | This is a zebrafish developmental cardiotoxicity study of flame retardants with no chlordiazepoxide PK data. |
| popPK | File_1986 | irrelevant | 0 | 0 | Behavioral place-conditioning study in rats with no pharmacokinetic parameters or numeric disposition values for chlordiazepoxide. |
| popPK | Fricks_2008 | irrelevant | 0 | 0 | Receptor pharmacology study of UDP at P2Y14 receptors with no chlordiazepoxide or pharmacokinetic parameters. |
| popPK | Jost_2026 | irrelevant | 0 | 0 | This is a real-world effectiveness/safety study of foslevodopa/foscarbidopa in Parkinson's disease with no chlordiazepoxide PK parameters; no quantitative disposition values appear. |
| popPK | Kalinowski_2022 | irrelevant | 0 | 0 | This is a clinical outcome study of the timed 25-foot walk in multiple sclerosis patients; no chlordiazepoxide PK parameters are reported anywhere. |
| popPK | Laliberté_2002 | irrelevant | 0 | 0 | In vitro enzyme study of PDE4A4 with no chlordiazepoxide PK parameters; CDP-840 is a different drug. |
| popPK | Mathews_1996 | irrelevant | 0 | 0 | In-vitro electrophysiology study of GABAA receptor modulation; chlordiazepoxide is a pharmacological tool, no PK parameters reported. |
| popPK | McEachern_1988 | irrelevant | 0 | 0 | In vitro receptor pharmacology study (GABAA binding/electrophysiology in chick neurons), not a PK study; EC50 values are pharmacodynamic, not disposition parameters. |
| popPK | Merlo_1989 | irrelevant | 0 | 0 | Behavioral pharmacology study in rats; chlordiazepoxide is only a test drug with doses, no PK parameters reported. |
| popPK | Nedelman_2018 | irrelevant | 0 | 0 | This is a population PK study of pasireotide, not chlordiazepoxide; no chlordiazepoxide parameters are reported. |
| popPK | Niespodziany_2020 | irrelevant | 0 | 0 | In vitro electrophysiology study of padsevonil on GABAA receptors; chlordiazepoxide is only a comparator agonist, no PK parameters. |
| popPK | Nonomura_2026 | irrelevant | 0 | 0 | This is a synthetic biology paper about a caffeine-operated protein dissociation system; chlordiazepoxide is not mentioned and no PK parameters for it appear. |
| popPK | Percival_1997 | irrelevant | 0 | 0 | This is an in-vitro enzymology study of PDE4A with no chlordiazepoxide PK data. |
| popPK | Sanger_1985 | irrelevant | 0 | 0 | Behavioral pharmacology study in mice with no PK parameters or numeric disposition values. |
| popPK | Selzer_2015 | irrelevant | 0 | 0 | This is a skin absorption/diffusion modeling study of flufenamic acid, not a PK study of chlordiazepoxide, and no chlordiazepoxide parameters appear. |
| popPK | Simasko_1984 | irrelevant | 0 | 0 | In-vitro receptor binding study (IC50 for TRH displacement), not a PK study with disposition parameters. |
| popPK | Teh_2023 | irrelevant | 0 | 0 | This is an in-vitro enzyme inhibition/siRNA study on Entamoeba histolytica choline kinase; chlordiazepoxide is not mentioned and no PK parameters exist. |
| popPK | Tsuboi_2026 | irrelevant | 0 | 0 | The paper is about foslevodopa/foscarbidopa clinical outcomes in Parkinson's disease, with no chlordiazepoxide PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
