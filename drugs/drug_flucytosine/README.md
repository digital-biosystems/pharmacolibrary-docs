<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;flucytosine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flucytosine_Kim2020_reference&quot;,&quot;label&quot;:&quot;Kim_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flucytosine/Flucytosine_Kim2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flucytosine_Stott2023_mean&quot;,&quot;label&quot;:&quot;Stott_2023_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flucytosine/Flucytosine_Stott2023_mean.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flucytosine_Stott2023_median&quot;,&quot;label&quot;:&quot;Stott_2023_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flucytosine/Flucytosine_Stott2023_median.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# flucytosine

- **generic name:** flucytosine
- **ATC codes:** `D01AE21`, `J02AX01`
- **DrugBank:** [DB01099](https://go.drugbank.com/drugs/DB01099) · **PubChem:** [CID 3366](https://pubchem.ncbi.nlm.nih.gov/compound/3366)
- **molar mass:** 129.0925 g/mol (C4H4FN3O) — DrugBank
- **groups:** approved, investigational

## About

Flucytosine is an antifungal used to treat serious fungal infections such as candidiasis, cryptococcosis including cryptococcal meningitis, aspergillosis, and chromoblastomycosis. It remains in clinical use, is listed among WHO essential medicines, and is available as a systemic and topical antifungal, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q238490](https://www.wikidata.org/wiki/Q238490) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| flucytosine | parent | 129.093 | C4H4FN3O | DrugBank | [3366](https://pubchem.ncbi.nlm.nih.gov/compound/3366) | Stott_2023, Vermes_2000 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:19 | 10:27 | 1/2/3 | 0/0/0 | 0/0/0 | 159,592/28,626 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 2/3 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.462), gpt-oss:120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed 0/2</span> | [Kim_2020_reference](drugs/drug_flucytosine/Flucytosine_Kim2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kim HY et al., Saliva for Precision Dosing of Antifung…, Frontiers in pharmacology (2020) | [10.3389/fphar.2020.00894](https://doi.org/10.3389/fphar.2020.00894) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Stott_2023_mean](drugs/drug_flucytosine/Flucytosine_Stott2023_mean.md) | ▶ model + simulator | 1-compartment, oral | 4 | Stott KE et al., Population pharmacokinetics and CSF pen…, The Journal of antimicrobia… (2023) | [10.1093/jac/dkad038](https://doi.org/10.1093/jac/dkad038) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Stott_2023_median](drugs/drug_flucytosine/Flucytosine_Stott2023_median.md) | ▶ model + simulator | 1-compartment, oral | 4 | Stott KE et al., Population pharmacokinetics and CSF pen…, The Journal of antimicrobia… (2023) | [10.1093/jac/dkad038](https://doi.org/10.1093/jac/dkad038) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Vermes_2000_reference](drugs/drug_flucytosine/Flucytosine_Vermes2000_reference.md) | held back | 1-compartment, IV | 4 | Vermes A et al., Population pharmacokinetics of flucytos…, Therapeutic drug monitoring (2000) | [10.1097/00007691-200012000-00006](https://doi.org/10.1097/00007691-200012000-00006) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Hope_2006_reference](drugs/drug_flucytosine/Flucytosine_Hope2006_reference.md) | — | 1-compartment (no model) | 3 | Hope WW et al., Derivation of an in vivo drug exposure…, Antimicrobial agents and ch… (2006) | [10.1128/AAC.00369-06](https://doi.org/10.1128/AAC.00369-06) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (primary re-run, agreement 0.25), gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Stegman_1999_reference](drugs/drug_flucytosine/Flucytosine_Stegman1999_reference.md) | — | general linear (no model) | 0 | Stegman LD et al., Noninvasive quantitation of cytosine de…, Proceedings of the National… (1999) | [10.1073/pnas.96.17.9821](https://doi.org/10.1073/pnas.96.17.9821) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 6  ·  extracted 1  ·  needs_review 3  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vermes_2000.pdf` | Vermes A et al., Population pharmacokinetics of flucytos…, Therapeutic drug monitoring (2000) | popPK | 10 | [10.1097/00007691-200012000-00006](https://doi.org/10.1097/00007691-200012000-00006) | [11128235](https://pubmed.ncbi.nlm.nih.gov/11128235) | The study reports quantitative population pharmacokinetic parameters (Vd, Cl, k12, k21) for flucytosine in humans with values explicitly listed in the abstract. |

<sub>queue written 2026-10-07T13:09:50.841719+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kim_2020 | irrelevant | 0 | 0 | The paper focuses on voriconazole and fluconazole, and explicitly states that no studies were identified for flucytosine. |
| popPK | Li_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of meropenem, not flucytosine. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper is a review of MIC distributions and PK/PD indices for antifungals (primarily azoles) in Cryptococcus infections; it does not report original quantitative pharmacokinetic parameters (CL, V, etc.) for flucytosine. |
| popPK | Pongratz_2011 | irrelevant | 0 | 0 | The study assesses in vitro antimalarial activity (EC50) of flucytosine against Plasmodium falciparum, not its pharmacokinetic disposition parameters. |
| popPK | Scott_2020 | irrelevant | 2 | 0 | This is a review article summarizing neonatal antifungal pharmacokinetics, and the provided evidence contains no original quantitative disposition parameters for flucytosine. |
| popPK | Stegman_1999 | irrelevant | 2 | 5 | The study focuses on the pharmacokinetics of 5-fluorouracil (5-FU) and the conversion of 5-fluorocytosine (5-FC) in a gene therapy context, not the disposition of flucytosine (5-FC) itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:10 UTC</sub>
