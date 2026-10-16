<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06B&quot;,&quot;href&quot;:&quot;atc/D06B.md&quot;},{&quot;label&quot;:&quot;penciclovir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Penciclovir_Ogungbenro2009_reference&quot;,&quot;label&quot;:&quot;Ogungbenro_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_penciclovir/Penciclovir_Ogungbenro2009_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# penciclovir

- **generic name:** penciclovir
- **ATC codes:** `D06BB06`, `J05AB13`
- **DrugBank:** [DB00299](https://go.drugbank.com/drugs/DB00299) · **PubChem:** [CID 4725](https://pubchem.ncbi.nlm.nih.gov/compound/4725)
- **molar mass:** 253.2578 g/mol (C10H15N5O3) — DrugBank
- **groups:** approved

## About

Penciclovir is an antiviral nucleoside analogue used to treat herpes simplex infections and has been used against Epstein–Barr virus infection. It is an approved drug, applied topically to the skin as a dermatological antiviral and also available for systemic use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420364](https://www.wikidata.org/wiki/Q420364) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| penciclovir | parent | 253.258 | C10H15N5O3 | DrugBank | [4725](https://pubchem.ncbi.nlm.nih.gov/compound/4725) | Griffioen_2024, Ogungbenro_2009 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:47 | 1:49 | 1/2/0 | 1/0/0 | 0/0/0 | 196,385/9,073 | einfracz / qwen3.8-27b | 6 | 1/5 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span> | [Ogungbenro_2009_reference](drugs/drug_penciclovir/Penciclovir_Ogungbenro2009_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ogungbenro K et al., Population pharmacokinetics and optimal…, British journal of clinical… (2009) | [10.1111/j.1365-2125.2009.03479.x](https://doi.org/10.1111/j.1365-2125.2009.03479.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Griffioen_2024_reference](drugs/drug_penciclovir/Penciclovir_Griffioen2024_reference.md) | — | 1-compartment (no model) | 4 | Griffioen JA et al., Penciclovir pharmacokinetics after oral…, American journal of veterin… (2024) | [10.2460/ajvr.24.02.0039](https://doi.org/10.2460/ajvr.24.02.0039) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.286). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Schenkel_2013_reference](drugs/drug_penciclovir/Penciclovir_Schenkel2013_reference.md) | — | 1-compartment (no model) | 0 | Schenkel F et al., Intraocular penetration of penciclovir…, The Journal of antimicrobia… (2013) | [10.1093/jac/dkt064](https://doi.org/10.1093/jac/dkt064) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhao_2021_Gluc](drugs/drug_penciclovir/pd_Zhao_2021_Gluc.md) | Gluc activity biomarker turnover ← Penciclovir | — | Zhao J et al., A cell-based assay to discover inhibito…, Antiviral research (2021) | [10.1016/j.antiviral.2021.105078](https://doi.org/10.1016/j.antiviral.2021.105078) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=penciclovir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: TK (inducer), TK1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 14 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Griffioen_2024.pdf` | Griffioen JA et al., Penciclovir pharmacokinetics after oral…, American journal of veterin… (2024) | popPK | 10 | [10.2460/ajvr.24.02.0039](https://doi.org/10.2460/ajvr.24.02.0039) | [38684186](https://pubmed.ncbi.nlm.nih.gov/38684186) | The study reports quantitative PK parameters (tmax, AUC, Cmax, absorption t1/2) for penciclovir in African elephants. |
| `Ogungbenro_2009.pdf` | Ogungbenro K et al., Population pharmacokinetics and optimal…, British journal of clinical… (2009) | popPK | 10 | [10.1111/j.1365-2125.2009.03479.x](https://doi.org/10.1111/j.1365-2125.2009.03479.x) | [19843058](https://pubmed.ncbi.nlm.nih.gov/19843058) | The study reports a population pharmacokinetic model for penciclovir with explicit numeric values for clearance (CL) and steady-state volume of distribution (Vss). |
| `Blumer_2010.pdf` | Blumer J et al., Single-dose pharmacokinetics of famcicl…, Antimicrobial agents and ch… (2010) | popPK | 7 | [10.1128/AAC.01508-09](https://doi.org/10.1128/AAC.01508-09) | [20160046](https://pubmed.ncbi.nlm.nih.gov/20160046) | Reports exposure metrics (AUC) and implies a population PK analysis for penciclovir (metabolite of famciclovir), but specific clearance/volume values are not present in the provided text. |

<sub>queue written 2026-10-07T21:46:34.663879+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bacon_1996 | irrelevant | 0 | 0 | The study reports in-vitro antiviral activity (EC50) against HSV, not pharmacokinetic parameters (CL, V, t1/2) for penciclovir. |
| popPK | Blumer_2010 | relevant | 7 | 2 | Reports exposure metrics (AUC) and implies a population PK analysis for penciclovir (metabolite of famciclovir), but specific clearance/volume values are not present in the provided text. |
| popPK | Hasegawa_1995 | irrelevant | 0 | 0 | The paper describes in vitro antiviral activity (plaque reduction assays) and resistance mechanisms, containing no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Lloyd_2022 | irrelevant | 0 | 0 | The paper studies the antiviral compound USC-373 (a cidofovir prodrug) and mentions penciclovir only as background context for VZV treatment; it contains no pharmacokinetic data for penciclovir. |
| popPK | Luo_2020 | irrelevant | 0 | 0 | The study focuses on the antiviral efficacy of baicalein against HSV-1 in vitro and in mice, with penciclovir mentioned only as background/comparator without any pharmacokinetic data. |
| popPK | Mohammed_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in vitro antiviral activity of tricyclic penciclovir derivatives, containing no pharmacokinetic data. |
| popPK | Neyts_1997 | irrelevant | 0 | 0 | The study reports in-vitro antiviral susceptibility (EC50) values for penciclovir against HHV-8, not pharmacokinetic disposition parameters. |
| popPK | Uppal_2022 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of SARS-CoV-2 antivirals, and penciclovir is used only as a test compound in a cell-based assay, with no pharmacokinetic parameters reported. |
| popPK | Yajima_2017 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action of amenamevir and in vitro antiviral assays, with penciclovir mentioned only as a comparator or background agent, and no PK parameters are provided. |
| popPK | Zembower_1998 | irrelevant | 0 | 0 | The paper investigates the in-vitro antiviral activity of robustaflavone, with penciclovir serving only as a co-administered agent in combination assays, reporting no PK parameters. |
| popPK | Zhao_2021 | irrelevant | 0 | 0 | The paper is an in-vitro virology study testing penciclovir as a comparator antiviral agent against SARS-CoV-2 RdRp, not a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:46 UTC</sub>
