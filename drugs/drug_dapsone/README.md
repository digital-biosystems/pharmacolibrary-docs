<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;dapsone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dapsone_Kotila2023_mean&quot;,&quot;label&quot;:&quot;Kotila_2023_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Kotila2023_mean.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dapsone_Kotila2023_median&quot;,&quot;label&quot;:&quot;Kotila_2023_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Kotila2023_median.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dapsone_Mirochnick2001_reference&quot;,&quot;label&quot;:&quot;Mirochnick_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Mirochnick2001_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# dapsone

- **generic name:** dapsone
- **ATC codes:** `D10AX05`, `J04BA02`, `J04BA50`
- **DrugBank:** [DB00250](https://go.drugbank.com/drugs/DB00250) · **PubChem:** [CID 2955](https://pubchem.ncbi.nlm.nih.gov/compound/2955)
- **molar mass:** 248.301 g/mol (C12H12N2O2S) — DrugBank
- **groups:** approved, investigational

## About

Dapsone is used to treat leprosy, dermatitis herpetiformis, acne, and relapsing polychondritis. It remains widely used and is included on the WHO essential medicines list, with topical use for acne and systemic use for mycobacterial disease.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422226](https://www.wikidata.org/wiki/Q422226) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dapsone | parent | 248.301 | C12H12N2O2S | DrugBank | [2955](https://pubchem.ncbi.nlm.nih.gov/compound/2955) | Gatti_1996, Kotila_2023, Mirochnick_2001 |
| chlorcycloguanil | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:47 | 6:04 | 3/1/3 | 1/0/1 | 0/0/0 | 224,330/49,534 | einfracz / qwen3.8-27b | 17 | 5/2 | 7/0 | 3 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.786). Primary extraction retained.">cross-check: partial</span> | [Kotila_2023_mean](drugs/drug_dapsone/Dapsone_Kotila2023_mean.md) | ▶ model + simulator | 1-compartment, oral | 9 | Kotila OA et al., Non-compartmental and population pharma…, British journal of clinical… (2023) | [10.1111/bcp.15862](https://doi.org/10.1111/bcp.15862) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> | [Kotila_2023_median](drugs/drug_dapsone/Dapsone_Kotila2023_median.md) | ▶ model + simulator | 1-compartment, oral | 9 | Kotila OA et al., Non-compartmental and population pharma…, British journal of clinical… (2023) | [10.1111/bcp.15862](https://doi.org/10.1111/bcp.15862) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> | [Mirochnick_2001_reference](drugs/drug_dapsone/Dapsone_Mirochnick2001_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Mirochnick M et al., Population pharmacokinetics of dapsone…, Clinical pharmacology and t… (2001) | [10.1067/mcp.2001.115891](https://doi.org/10.1067/mcp.2001.115891) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.625), gpt-oss:120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C1_half_life_beta failed (ratio 1.3711)</sub><br><sub>route_to: `human_review`</sub> | [Gatti_1996_reference](drugs/drug_dapsone/Dapsone_Gatti1996_reference.md) | — | 1-compartment (no model) | 3 | Gatti G et al., Population pharmacokinetics of dapsone…, Antimicrobial agents and ch… (1996) | [10.1128/AAC.40.12.2743](https://doi.org/10.1128/AAC.40.12.2743) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.538). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C1_half_life_beta failed (ratio 1.5503)</sub><br><sub>route_to: `human_review`</sub> | [Kotila_2023_base_model_selection](drugs/drug_dapsone/Dapsone_Kotila2023_base_model_selection.md) | — | 1-compartment (no model) | 4 (+1 cov.) | Kotila OA et al., Non-compartmental and population pharma…, British journal of clinical… (2023) | [10.1111/bcp.15862](https://doi.org/10.1111/bcp.15862) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6), gpt-oss:120b (not confirmed, agreement 0.846). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Simpson_2006_2_reference](drugs/drug_dapsone/Dapsone_Simpson2006v2_reference.md) | — | parent + metabolite (no model) | 8 | Simpson JA et al., Population pharmacokinetic and pharmaco…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2005.02567.x](https://doi.org/10.1111/j.1365-2125.2005.02567.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Falloon_1994_reference](drugs/drug_dapsone/Dapsone_Falloon1994_reference.md) | — | 1-compartment (no model) | 0 | Falloon J et al., Pharmacokinetics and safety of weekly d…, Antimicrobial agents and ch… (1994) | [10.1128/AAC.38.7.1580](https://doi.org/10.1128/AAC.38.7.1580) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> | [Simpson_2006_2_parasite_inhibition](drugs/drug_dapsone/pd_Simpson_2006_2_parasite_inhibition.md) | parasite inhibition ← dapsone · inhibition effect | — | Simpson JA et al., Population pharmacokinetic and pharmaco…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2005.02567.x](https://doi.org/10.1111/j.1365-2125.2005.02567.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">in vitro</span> | [Vage_1994_MetHgb](drugs/drug_dapsone/pd_Vage_1994_MetHgb.md) | methemoglobin (MetHgb) forming ability ← dapsone hydroxylamine (DDS-NOH) · direct Emax (saturable) effect | model (no simulator) | Vage C et al., Dapsone-induced hematologic toxicity: c…, Toxicology and applied phar… (1994) | [10.1006/taap.1994.1255](https://doi.org/10.1006/taap.1994.1255) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">in vitro</span> | [Vage_1994_MetHgb_2](drugs/drug_dapsone/pd_Vage_1994_MetHgb_2.md) | methemoglobin (MetHgb) forming ability ← monoacetyldapsone hydroxylamine (MADDS-NOH) · direct Emax (saturable) effect | model (no simulator) | Vage C et al., Dapsone-induced hematologic toxicity: c…, Toxicology and applied phar… (1994) | [10.1006/taap.1994.1255](https://doi.org/10.1006/taap.1994.1255) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">in vitro</span> | [Vage_1994_MetHgb_3](drugs/drug_dapsone/pd_Vage_1994_MetHgb_3.md) | methemoglobin (MetHgb) forming ability ← dapsone hydroxylamine (DDS-NOH) · direct Emax (saturable) effect | model (no simulator) | Vage C et al., Dapsone-induced hematologic toxicity: c…, Toxicology and applied phar… (1994) | [10.1006/taap.1994.1255](https://doi.org/10.1006/taap.1994.1255) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">in vitro</span> | [Vage_1994_MetHgb_4](drugs/drug_dapsone/pd_Vage_1994_MetHgb_4.md) | methemoglobin (MetHgb) forming ability ← monoacetyldapsone hydroxylamine (MADDS-NOH) · direct Emax (saturable) effect | model (no simulator) | Vage C et al., Dapsone-induced hematologic toxicity: c…, Toxicology and applied phar… (1994) | [10.1006/taap.1994.1255](https://doi.org/10.1006/taap.1994.1255) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 17 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 7  ·  extracted 3  ·  needs_review 3  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mirochnick_2001.pdf` | Mirochnick M et al., Population pharmacokinetics of dapsone…, Clinical pharmacology and t… (2001) | popPK | 10 | [10.1067/mcp.2001.115891](https://doi.org/10.1067/mcp.2001.115891) | [11452241](https://pubmed.ncbi.nlm.nih.gov/11452241) | The abstract explicitly reports quantitative population PK parameter estimates for dapsone (V/F, CL/F, ka). |
| `Zuidema_1986_2.pdf` | Zuidema J et al., Clinical pharmacokinetics of dapsone, Clinical pharmacokinetics (1986) | popPK | 8 | [10.2165/00003088-198611040-00003](https://doi.org/10.2165/00003088-198611040-00003) | [3530584](https://pubmed.ncbi.nlm.nih.gov/3530584) | The text is a review that explicitly includes specific numeric pharmacokinetic parameters (absorption half-life, elimination half-life, volume of distribution) for dapsone in humans. |

<sub>queue written 2026-10-07T07:42:44.928864+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Butcher_2000 | irrelevant | 0 | 0 | The study investigates enzyme regulation (NAT1 down-regulation) using dapsone as a negative control substrate, and does not report any pharmacokinetic parameters for dapsone. |
| popPK | Coplan_1991 | irrelevant | 0 | 0 | The study is an in-vitro toxicity assay measuring selectivity ratios (IC50/EC50), not a pharmacokinetic study reporting disposition parameters. |
| popPK | Khan_2024 | relevant | 4 | 1 | The study performs a pharmacokinetic evaluation of dapsone in rats but only provides qualitative descriptions of parameter similarity (Tmax, Cmax, AUC) without reporting the specific numeric disposition parameters (CL, V, ka) required for extraction. |
| popPK | Lin_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry and virology study focusing on the synthesis and antiviral efficacy of a dapsone derivative (SMU-1k) against flaviviruses, containing no pharmacokinetic data for dapsone. |
| popPK | Reilly_1998 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity analysis of metabolites, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Tingle_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dapsone-induced methemoglobinemia using a two-compartment diffusion system and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Tingle_1991 | irrelevant | 0 | 0 | This is an in vitro mechanistic study examining the inhibition of dapsone metabolism by cimetidine, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Tingle_1993 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of dapsone-induced toxicity using a three-compartment model, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Tsai_2025 | irrelevant | 0 | 0 | This is a pharmacodynamic study measuring vasorelaxation in porcine coronary arteries, not a pharmacokinetic study of dapsone. |
| popPK | Vage_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assay of dapsone metabolites measuring methemoglobin formation, not a pharmacokinetic study of dapsone disposition. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:43 UTC</sub>
