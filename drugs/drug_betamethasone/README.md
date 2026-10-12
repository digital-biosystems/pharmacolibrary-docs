<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;betamethasone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Betamethasone_Krzyzanski2021v2_reference&quot;,&quot;label&quot;:&quot;Krzyzanski_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# betamethasone

- **generic name:** betamethasone
- **ATC codes:** `A07EA04`, `C05AA05`, `D07AC01`, `D07BC01`, `D07CC01`, `D07XC01`, `H02AB01`, `R01AD06`, `R03BA04`, `S01BA06`, `S01BB04`, `S01CA05`, `S01CB04`, `S02BA07`, `S03BA03`, `S03CA06`
- **DrugBank:** [DB00443](https://go.drugbank.com/drugs/DB00443) · **PubChem:** [CID 9782](https://pubchem.ncbi.nlm.nih.gov/compound/9782)
- **molar mass:** 392.4611 g/mol (C22H29FO5) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Betamethasone is a corticosteroid used to treat inflammatory conditions such as asthma, dermatitis, allergic rhinitis, ulcerative colitis, and multiple sclerosis. It is widely used in many forms, including skin, eye, ear, nasal, inhaled, and systemic preparations, and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416132](https://www.wikidata.org/wiki/Q416132) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| betamethasone | parent | 392.461 | C22H29FO5 | DrugBank | [9782](https://pubchem.ncbi.nlm.nih.gov/compound/9782) | Krzyzanski_2021_2, Schoenmakers_2025, Sullivan_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 19:21 | 8:19 | 1/1/1 | 0/0/0 | 0/0/0 | 90,624/31,572 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.611). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Krzyzanski_2021_2_reference](drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Krzyzanski W et al., Population pharmacokinetic modeling of…, Journal of pharmacokinetics… (2021) | [10.1007/s10928-020-09730-z](https://doi.org/10.1007/s10928-020-09730-z) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222), gpt-oss:120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Schoenmakers_2025_reference](drugs/drug_betamethasone/Betamethasone_Schoenmakers2025_reference.md) | — | 1-compartment (no model) | 2 | Schoenmakers S et al., Pharmacokinetics of betamethasone in pr…, British journal of clinical… (2025) | [10.1002/bcp.70035](https://doi.org/10.1002/bcp.70035) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.857), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: partial 1/2</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Sullivan_2026_reference](drugs/drug_betamethasone/Betamethasone_Sullivan2026_reference.md) | — | 1-compartment (no model) | 3 | Sullivan J et al., Pharmacokinetics and Anti-Inflammatory…, Journal of veterinary pharm… (2026) | [10.1111/jvp.70052](https://doi.org/10.1111/jvp.70052) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 19 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Foissac_2020.pdf` | Foissac F et al., Maternal Betamethasone for Prevention o…, Clinical pharmacology and t… (2020) | popPK | 10 | [10.1002/cpt.1887](https://doi.org/10.1002/cpt.1887) | [32394434](https://pubmed.ncbi.nlm.nih.gov/32394434) | The study is a population PK analysis of betamethasone in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract text, only qualitative descriptions and specific ratios/odds ratios. |
| `Schoenmakers_2025.pdf` | Schoenmakers S et al., Pharmacokinetics of betamethasone in pr…, British journal of clinical… (2025) | popPK | 10 | [10.1002/bcp.70035](https://doi.org/10.1002/bcp.70035) | [40083164](https://pubmed.ncbi.nlm.nih.gov/40083164) | The study reports a population PK model for betamethasone in humans with specific quantitative values for clearance (9.35 vs 15.78 L/h) and exposure provided in the abstract. |
| `Sullivan_2026.pdf` | Sullivan J et al., Pharmacokinetics and Anti-Inflammatory…, Journal of veterinary pharm… (2026) | popPK | 10 | [10.1111/jvp.70052](https://doi.org/10.1111/jvp.70052) | [41653445](https://pubmed.ncbi.nlm.nih.gov/41653445) | The study reports a population PK model for betamethasone in horses with specific numeric values for Cmax, Tmax, and half-life, though detailed clearance and volume parameters are not explicitly listed in the provided text. |
| `Zhang_2025.pdf` | Zhang C et al., Across-Species Meta-Analysis of Betamet…, Biopharmaceutics & drug dis… (2025) | popPK | 10 | [10.1002/bdd.70017](https://doi.org/10.1002/bdd.70017) | [41250930](https://pubmed.ncbi.nlm.nih.gov/41250930) | The paper reports a population/PBPK model for betamethasone, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided evidence, only model coefficients and R-squared values. |
| `Loo_1981.pdf` | Loo JC et al., Pharmacokinetic evaluation of betametha…, Biopharmaceutics & drug dis… (1981) | popPK | 9 | [10.1002/bdd.2510020307](https://doi.org/10.1002/bdd.2510020307) | [7295883](https://pubmed.ncbi.nlm.nih.gov/7295883) | The study reports a one-compartment PK model for betamethasone in humans, but the specific numeric parameter values (CL, V, ka, t1/2) are not present in the provided evidence text. |
| `Samtani_2005.pdf` | Samtani MN et al., Betamethasone pharmacokinetics after tw…, Drug metabolism and disposi… (2005) | popPK | 9 | [10.1124/dmd.105.004309](https://doi.org/10.1124/dmd.105.004309) | [15860658](https://pubmed.ncbi.nlm.nih.gov/15860658) | The study reports compartmental PK modeling and half-lives for betamethasone in sheep, but specific numeric values for clearance, volume, or intercompartmental clearance are not present in the provided text. |

<sub>queue written 2026-10-04T19:13:27.150355+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Foissac_2020 | relevant | 10 | 2 | The study is a population PK analysis of betamethasone in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract text, only qualitative descriptions and specific ratios/odds ratios. |
| popPK | Loo_1981 | relevant | 9 | 2 | The study reports a one-compartment PK model for betamethasone in humans, but the specific numeric parameter values (CL, V, ka, t1/2) are not present in the provided evidence text. |
| popPK | Samtani_2005 | relevant | 9 | 2 | The study reports compartmental PK modeling and half-lives for betamethasone in sheep, but specific numeric values for clearance, volume, or intercompartmental clearance are not present in the provided text. |
| popPK | Zhang_2025 | relevant | 10 | 2 | The paper reports a population/PBPK model for betamethasone, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided evidence, only model coefficients and R-squared values. |
| popPK | unknown_2025 | irrelevant | 0 | 0 | This is a study protocol for a future trial and does not report any quantitative pharmacokinetic parameter values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 19:13 UTC</sub>
