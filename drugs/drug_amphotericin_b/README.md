<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;amphotericin B&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AmphotericinB_Stott2022_reference&quot;,&quot;label&quot;:&quot;Stott_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amphotericin_b/AmphotericinB_Stott2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# amphotericin B

- **generic name:** amphotericin B
- **ATC codes:** `A01AB04`, `A07AA07`, `G01AA03`, `J02AA01`
- **DrugBank:** [DB00681](https://go.drugbank.com/drugs/DB00681) · **PubChem:** [CID 5280965](https://pubchem.ncbi.nlm.nih.gov/compound/5280965)
- **molar mass:** 924.079 g/mol (C47H73NO17) — DrugBank
- **groups:** approved, investigational

## About

Amphotericin B is an antifungal antibiotic used to treat serious fungal infections such as aspergillosis, candidiasis, cryptococcosis, histoplasmosis, and blastomycosis, as well as visceral leishmaniasis. It is widely used and appears on the WHO list of essential medicines, given systemically and also locally in oral, intestinal, and gynecological preparations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412223](https://www.wikidata.org/wiki/Q412223) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| amphotericin_b (liposomal amphotericin B) | metabolite | 924.079 | C47H73NO17 | DrugBank | [5280965](https://pubchem.ncbi.nlm.nih.gov/compound/5280965) | Stott_2018, Stott_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-03 23:39 | 3:01 | 1/1/1 | 0/0/0 | 0/0/0 | 40,071/8,287 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778), gpt-oss:120b (not confirmed, agreement 0.182). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Stott_2022_reference](drugs/drug_amphotericin_b/AmphotericinB_Stott2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Stott KE et al., Population pharmacokinetics of liposoma…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkac389](https://doi.org/10.1093/jac/dkac389) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Atkinson_1978_reference](drugs/drug_amphotericin_b/AmphotericinB_Atkinson1978_reference.md) | — | 1-compartment (no model) | 3 | Atkinson AJ et al., Amphotericin B pharmacokinetics in huma…, Antimicrobial agents and ch… (1978) | [10.1128/AAC.13.2.271](https://doi.org/10.1128/AAC.13.2.271) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143), gpt-oss:120b (not confirmed, agreement 0.154). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Stott_2018_reference](drugs/drug_amphotericin_b/AmphotericinB_Stott2018_reference.md) | — | 1-compartment (no model) | 3 | Stott KE et al., Population Pharmacokinetic Model and Me…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.02526-17](https://doi.org/10.1128/AAC.02526-17) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=amphotericin_b).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 151 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Han_2026.pdf` | Han S et al., Pharmacokinetic Equivalence of Amphosom, Clinical therapeutics (2026) | popPK | 10 | [10.1016/j.clinthera.2025.12.009](https://doi.org/10.1016/j.clinthera.2025.12.009) | [41513548](https://pubmed.ncbi.nlm.nih.gov/41513548) | The study reports a population PK model for amphotericin B, but specific numeric parameter values (CL, V, Q) are not present in the provided abstract text. |
| `Lestner_2016.pdf` | Lestner JM et al., Population Pharmacokinetics of Liposoma…, Antimicrobial agents and ch… (2016) | popPK | 10 | [10.1128/AAC.01427-16](https://doi.org/10.1128/AAC.01427-16) | [27697762](https://pubmed.ncbi.nlm.nih.gov/27697762) | The paper describes a population PK model for liposomal amphotericin B in children, but the specific numeric parameter estimates (CL, V, etc.) are not present in the provided abstract text. |
| `Smith_2024.pdf` | Smith JS et al., Pharmacokinetics of intraarticular lipo…, Journal of veterinary pharm… (2024) | popPK | 10 | [10.1111/jvp.13442](https://doi.org/10.1111/jvp.13442) | [38557931](https://pubmed.ncbi.nlm.nih.gov/38557931) | The study reports quantitative non-compartmental PK parameters (Cmax, tmax, t1/2, MRT, Vd, AUC) for amphotericin B in goats. |
| `Stott_2018.pdf` | Stott KE et al., Population Pharmacokinetic Model and Me…, Antimicrobial agents and ch… (2018) | popPK | 10 | [10.1128/AAC.02526-17](https://doi.org/10.1128/AAC.02526-17) | [29735567](https://pubmed.ncbi.nlm.nih.gov/29735567) | The paper reports a population PK model for amphotericin B deoxycholate with explicit numeric values for clearance, volume, and intercompartmental rate constants in the abstract. |
| `Stott_2022.pdf` | Stott KE et al., Population pharmacokinetics of liposoma…, The Journal of antimicrobia… (2022) | popPK | 10 | [10.1093/jac/dkac389](https://doi.org/10.1093/jac/dkac389) | [36411251](https://pubmed.ncbi.nlm.nih.gov/36411251) | The paper reports a population PK model for liposomal amphotericin B with explicit numeric values for clearance, volume of distribution, and intercompartmental clearances in the abstract. |

<sub>queue written 2026-10-03T23:37:07.594286+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dallalzadeh_2024 | irrelevant | 0 | 0 | The study is a clinical outcome analysis of a treatment regimen and does not report any pharmacokinetic parameters for amphotericin B. |
| popPK | Han_2026 | relevant | 10 | 2 | The study reports a population PK model for amphotericin B, but specific numeric parameter values (CL, V, Q) are not present in the provided abstract text. |
| popPK | Heidari-Kharaji_2024 | irrelevant | 0 | 0 | The study evaluates the anti-leishmanial efficacy of amphotericin B nanoparticles in vitro and in mice, reporting IC50/EC50 and immune markers, but does not report any pharmacokinetic parameters (CL, V, t1/2, etc.). |
| popPK | Leroux_2021 | irrelevant | 2 | 0 | This is a review article summarizing existing studies and does not report original quantitative pharmacokinetic parameter values for amphotericin B. |
| popPK | Lestner_2016 | relevant | 10 | 2 | The paper describes a population PK model for liposomal amphotericin B in children, but the specific numeric parameter estimates (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Scott_2020 | irrelevant | 2 | 0 | This is a review article summarizing pharmacokinetic data for antifungal agents in neonates, but it does not provide original quantitative disposition parameters or specific numeric values for amphotericin B in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-03 23:37 UTC</sub>
