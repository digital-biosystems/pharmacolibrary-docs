<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;caspofungin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Caspofungin_AbdulAziz2025_reference&quot;,&quot;label&quot;:&quot;Abdul-Aziz_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_caspofungin/Caspofungin_AbdulAziz2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Caspofungin_BorsukDe2020_reference&quot;,&quot;label&quot;:&quot;Borsuk-De_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# caspofungin

- **generic name:** caspofungin
- **ATC codes:** `J02AX04`
- **DrugBank:** [DB00520](https://go.drugbank.com/drugs/DB00520) · **PubChem:** [CID 3035406](https://pubchem.ncbi.nlm.nih.gov/compound/3035406)
- **molar mass:** 1093.331 g/mol (C52H88N10O15) — DrugBank
- **groups:** approved, investigational

## About

Caspofungin is an antifungal used to treat candidiasis and aspergillosis. It is an approved, systemically used antifungal and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420875](https://www.wikidata.org/wiki/Q420875) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| caspofungin | parent | 1093.33 | C52H88N10O15 | DrugBank | [3035406](https://pubchem.ncbi.nlm.nih.gov/compound/3035406) | Abdul-Aziz_2025, Borsuk-De_2020, Wu_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:26 | 4:18 | 2/2/0 | 0/0/1 | 0/0/0 | 169,883/13,400 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Abdul-Aziz_2025_reference](drugs/drug_caspofungin/Caspofungin_AbdulAziz2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Abdul-Aziz MH et al., Population pharmacokinetics of caspofun…, Antimicrobial agents and ch… (2025) | [10.1128/aac.01435-24](https://doi.org/10.1128/aac.01435-24) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.909). Primary extraction retained.">cross-check: partial</span> | [Borsuk-De_2020_reference](drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Borsuk-De Moor A et al., Nonstationary Pharmacokinetics of Caspo…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.00345-20](https://doi.org/10.1128/AAC.00345-20) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Albanell-Fernández_2025_reference](drugs/drug_caspofungin/Caspofungin_AlbanellFernndez2025_reference.md) | — | 2-compartment (no model) | 3 | Albanell-Fernández M, Echinocandins Pharmacokinetics: A Compr…, Clinical pharmacokinetics (2025) | [10.1007/s40262-024-01461-5](https://doi.org/10.1007/s40262-024-01461-5) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wu_2022_reference](drugs/drug_caspofungin/Caspofungin_Wu2022_reference.md) | — | 1-compartment (no model) | 0 | Wu Z et al., Population Pharmacokinetics of Caspofun…, Antimicrobial agents and ch… (2022) | [10.1128/aac.02249-21](https://doi.org/10.1128/aac.02249-21) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Caballero_2023_N](drugs/drug_caspofungin/pd_Caballero_2023_N.md) | Number of viable Candida cells ← caspofungin · direct sigmoid Emax (Hill) effect | model (no simulator) | Caballero U et al., PK/PD modeling and simulation of the in…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12949](https://doi.org/10.1002/psp4.12949) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 63 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 2  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pressiat_2022.pdf` | Pressiat C et al., Pharmacokinetics/Pharmacodynamics of Ca…, Antimicrobial agents and ch… (2022) | popPK | 10 | [10.1128/AAC.01187-21](https://doi.org/10.1128/AAC.01187-21) | [34662185](https://pubmed.ncbi.nlm.nih.gov/34662185) | The paper describes a population PK model for caspofungin in humans, but the specific numeric parameter estimates (CL, V, etc.) are not provided in the text, likely residing in a table or supplementary material not included. |
| `Pérez-Pitarch_2018.pdf` | Pérez-Pitarch A et al., Dosing of caspofungin based on a pharma…, International journal of an… (2018) | popPK | 10 | [10.1016/j.ijantimicag.2017.05.013](https://doi.org/10.1016/j.ijantimicag.2017.05.013) | [28666752](https://pubmed.ncbi.nlm.nih.gov/28666752) | The study describes a population PK model for caspofungin in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence, likely residing in tables or supplementary files not included. |
| `Yang_2016.pdf` | Yang Q et al., Pharmacokinetic/pharmacodynamic adequac…, International journal of an… (2016) | popPK | 8 | [10.1016/j.ijantimicag.2016.02.004](https://doi.org/10.1016/j.ijantimicag.2016.02.004) | [27068676](https://pubmed.ncbi.nlm.nih.gov/27068676) | Study uses PK/PD modeling for caspofungin but relies on previously published PK data rather than reporting new primary PK parameter values. |

<sub>queue written 2026-10-07T12:23:02.368156+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albanell-Fernández_2025 | irrelevant | 2 | 5 | This is a review summarizing PK parameter ranges from 13 separate studies rather than an original study reporting its own quantitative population model. |
| popPK | Comisar_2014 | irrelevant | 3 | 1 | The study reports exposure-response relationships (odds ratios) using AUC and trough concentrations, but does not report the quantitative population pharmacokinetic parameter estimates (CL, V, Q) or compartmental model parameters required. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tacrolimus, not caspofungin (caspofungin is only mentioned as a concomitant covariate). |
| popPK | Meng_2025 | irrelevant | 3 | 0 | The study reports therapeutic drug monitoring (Cmin) data and exposure-response relationships but does not derive or report quantitative population pharmacokinetic model parameters (e.g., CL, V, Q, ka). |
| popPK | Pressiat_2022 | relevant | 10 | 2 | The paper describes a population PK model for caspofungin in humans, but the specific numeric parameter estimates (CL, V, etc.) are not provided in the text, likely residing in a table or supplementary material not included. |
| popPK | Pérez-Pitarch_2018 | relevant | 10 | 0 | The study describes a population PK model for caspofungin in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence, likely residing in tables or supplementary files not included. |
| popPK | Scott_2020 | irrelevant | 2 | 0 | This is a narrative review summarizing published data without reporting original quantitative PK parameter values for caspofungin in the provided text. |
| popPK | Siopi_2021 | irrelevant | 3 | 0 | The study is an in vitro PK/PD simulation using assumed parameters (fCmax, t1/2) and does not report quantitative disposition parameters (CL, V) derived from a PK model for caspofungin in a biological subject. |
| popPK | Snarr_2017 | irrelevant | 0 | 0 | The study investigates the antibiofilm activity of microbial glycoside hydrolases and their synergistic effect with caspofungin, but it does not report any quantitative pharmacokinetic parameters (CL, V, etc.) for caspofungin. |
| popPK | Venisse_2008 | irrelevant | 2 | 1 | The study uses an in vitro dynamic model with a pre-assumed elimination half-life rather than measuring quantitative disposition parameters for caspofungin in a biological subject. |
| popPK | Xie_2022 | irrelevant | 2 | 0 | This is a Monte Carlo simulation study using pre-existing models to calculate target attainment rates (CFR) rather than a study reporting original population PK parameter estimates (CL, V, Q) for caspofungin. |
| popPK | Yang_2016 | relevant | 8 | 3 | Study uses PK/PD modeling for caspofungin but relies on previously published PK data rather than reporting new primary PK parameter values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:23 UTC</sub>
