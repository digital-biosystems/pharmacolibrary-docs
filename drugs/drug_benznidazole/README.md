<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;benznidazole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Benznidazole_Soy2015_reference&quot;,&quot;label&quot;:&quot;Soy_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_benznidazole/Benznidazole_Soy2015_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benznidazole_Frade2022_reference&quot;,&quot;label&quot;:&quot;Frade_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_benznidazole/Benznidazole_Frade2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# benznidazole

- **generic name:** benznidazole
- **ATC codes:** `P01CA02`
- **DrugBank:** [DB11989](https://go.drugbank.com/drugs/DB11989) · **PubChem:** [CID 31593](https://pubchem.ncbi.nlm.nih.gov/compound/31593)
- **molar mass:** 260.253 g/mol (C12H12N4O3) — DrugBank
- **groups:** approved, investigational

## About

Benznidazole is an antiparasitic medicine used to treat trypanosomiasis (Chagas disease). It is on the WHO list of essential medicines and is used mainly in regions where Chagas disease occurs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425300](https://www.wikidata.org/wiki/Q425300) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| benznidazole | parent | 260.253 | C12H12N4O3 | DrugBank | [31593](https://pubchem.ncbi.nlm.nih.gov/compound/31593) | Altcheh_2014, Altcheh_2023, Assmus_2025, Frade_2022, Soy_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:17 | 6:05 | 1/3/2 | 0/0/0 | 0/0/0 | 320,484/20,542 | einfracz / qwen3.8-27b | 11 | 0/11 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> | [Soy_2015_reference](drugs/drug_benznidazole/Benznidazole_Soy2015_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Soy D et al., Population pharmacokinetics of benznida…, Antimicrobial agents and ch… (2015) | [10.1128/AAC.05018-14](https://doi.org/10.1128/AAC.05018-14) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Altcheh_2023_reference](drugs/drug_benznidazole/Benznidazole_Altcheh2023_reference.md) | — | 1-compartment (no model) | 0 (+2 cov.) | Altcheh J et al., Population pharmacokinetics of benznida…, PLoS neglected tropical dis… (2023) | [10.1371/journal.pntd.0010850](https://doi.org/10.1371/journal.pntd.0010850) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Frade_2022_reference](drugs/drug_benznidazole/Benznidazole_Frade2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Frade VP et al., Population pharmacokinetic modeling of…, Revista do Instituto de Med… (2022) | [10.1590/S1678-9946202264004](https://doi.org/10.1590/S1678-9946202264004) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Altcheh_2014_reference](drugs/drug_benznidazole/Benznidazole_Altcheh2014_reference.md) | — | 1-compartment (no model) | 0 (+2 cov.) | Altcheh J et al., Population pharmacokinetic study of ben…, PLoS neglected tropical dis… (2014) | [10.1371/journal.pntd.0002907](https://doi.org/10.1371/journal.pntd.0002907) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Assmus_2025_reference](drugs/drug_benznidazole/Benznidazole_Assmus2025_reference.md) | — | 1-compartment (no model) | 1 | Assmus F et al., Pharmacokinetic-pharmacodynamic modelin…, PLoS neglected tropical dis… (2025) | [10.1371/journal.pntd.0012968](https://doi.org/10.1371/journal.pntd.0012968) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Assmus_2025_2_reference](drugs/drug_benznidazole/Benznidazole_Assmus2025v2_reference.md) | — | 1-compartment (no model) | 0 | Assmus F et al., Population pharmacokinetic-pharmacodyna…, PLoS neglected tropical dis… (2025) | [10.1371/journal.pntd.0013522](https://doi.org/10.1371/journal.pntd.0013522) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=benznidazole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 78 matched, 20 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 6  ·  extracted 1  ·  needs_review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Perin_2020.pdf` | Perin L et al., Population pharmacokinetics and biodist…, The Journal of antimicrobia… (2020) | popPK | 10 | [10.1093/jac/dkaa130](https://doi.org/10.1093/jac/dkaa130) | [32356873](https://pubmed.ncbi.nlm.nih.gov/32356873) | The paper is a population PK study in mice, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Soy_2015.pdf` | Soy D et al., Population pharmacokinetics of benznida…, Antimicrobial agents and ch… (2015) | popPK | 10 | [10.1128/AAC.05018-14](https://doi.org/10.1128/AAC.05018-14) | [25824212](https://pubmed.ncbi.nlm.nih.gov/25824212) | The study explicitly reports quantitative population PK parameters for benznidazole (CL/F, V/F, Ka) in the text. |
| `Silveira_2026.pdf` | Silveira GPE et al., Benznidazole pharmacokinetics in patien…, The Journal of antimicrobia… (2026) | popPK | 8 | [10.1093/jac/dkaf416](https://doi.org/10.1093/jac/dkaf416) | [41277594](https://pubmed.ncbi.nlm.nih.gov/41277594) | The study reports non-compartmental PK parameters (Cmax, AUC, Tmax) for benznidazole, but lacks specific clearance (CL) or volume (V) values required for population PK modeling. |

<sub>queue written 2026-10-14T19:12:30.326405+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alonso-Vega_2021 | irrelevant | 2 | 0 | This is a clinical trial protocol/design paper that proposes to measure population pharmacokinetic parameters but does not report any original quantitative PK data, values, or results. |
| popPK | Cortes_2015 | irrelevant | 0 | 0 | This is an in vitro mechanistic study of novel gallate derivatives for Chagas disease where benznidazole is mentioned only as a background drug with no pharmacokinetic parameters reported. |
| popPK | Dos_2023 | irrelevant | 0 | 0 | The study investigates the PET radiotracer [18F]FBNA, which is described as an analogue of benznidazole, rather than benznidazole itself. |
| popPK | Fukushima_2021 | irrelevant | 0 | 0 | The study is a toxicological screening in zebrafish where benznidazole is used only as a safe positive control, with no pharmacokinetic parameters reported. |
| popPK | Peres_2023 | irrelevant | 0 | 0 | The paper investigates the antiparasitic activity of Plumbagin against Trypanosoma cruzi in vitro, using benznidazole only as a reference comparator rather than the subject of pharmacokinetic analysis. |
| popPK | Perin_2020 | relevant | 10 | 2 | The paper is a population PK study in mice, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Peron_2017 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of antiparasitic activity and drug combinations, containing no pharmacokinetic parameters for benznidazole. |
| popPK | Rubio-Hernández_2024 | irrelevant | 0 | 0 | The study focuses on the synthesis and evaluation of new chalcogen compounds as potential antiparasitic agents, with benznidazole serving only as a reference comparator in activity assays, not as the subject of pharmacokinetic analysis. |
| popPK | Seguel_2016 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic interaction (synergy/antagonism) and mechanism of action of benznidazole with pentamidine, reporting efficacy metrics (EC50, survival, parasitemia) rather than quantitative pharmacokinetic disposition parameters. |
| popPK | Valencia_2025 | irrelevant | 0 | 0 | The paper is an in-vitro study of coumarin-chalcone hybrids, and benznidazole is only mentioned as a comparator for antiparasitic activity, with no PK parameters reported. |
| popPK | Vasconcelos_2018 | irrelevant | 0 | 0 | The study is an in vitro efficacy/antiparasitic assay where benznidazole serves only as a positive control/comparator, with no pharmacokinetic parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:12 UTC</sub>
