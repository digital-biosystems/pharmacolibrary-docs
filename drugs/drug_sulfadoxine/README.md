<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Sulfadoxine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulfadoxine_de2018_reference&quot;,&quot;label&quot;:&quot;de_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadoxine/Sulfadoxine_de2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Sulfadoxine

- **generic name:** Sulfadoxine
- **ATC codes:** `P01BF09`
- **DrugBank:** [DB01299](https://go.drugbank.com/drugs/DB01299) · **PubChem:** [CID 17134](https://pubchem.ncbi.nlm.nih.gov/compound/17134)
- **molar mass:** 310.329 g/mol (C12H14N4O4S) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Sulfadoxine is a sulfonamide antibiotic used as an antimalarial against Plasmodium falciparum malaria and also to treat pneumocystosis. It is used in combination with artemisinin derivatives for malaria, though some products have been withdrawn in certain markets.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411557](https://www.wikidata.org/wiki/Q411557) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sulfadoxine | parent | 310.329 | C12H14N4O4S | DrugBank | [17134](https://pubchem.ncbi.nlm.nih.gov/compound/17134) | Corvaisier_2004, Salman_2011, de_2017, de_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:41 | 2:55 | 1/4/1 | 0/0/0 | 0/0/0 | 195,727/14,410 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> | [de_2018_reference](drugs/drug_sulfadoxine/Sulfadoxine_de2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | de Kock M et al., Population Pharmacokinetic Properties o…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.01370-17](https://doi.org/10.1128/AAC.01370-17) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.706). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [de_2017_country](drugs/drug_sulfadoxine/Sulfadoxine_de2017_country.md) | — | 1-compartment (no model) | 1 | de Kock M et al., Pharmacokinetics of Sulfadoxine and Pyr…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12181](https://doi.org/10.1002/psp4.12181) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Corvaisier_2004_reference](drugs/drug_sulfadoxine/Sulfadoxine_Corvaisier2004_reference.md) | — | general linear (no model) | 4 | Corvaisier S et al., Population pharmacokinetics of pyrimeth…, Antimicrobial agents and ch… (2004) | [10.1128/AAC.48.10.3794-3800.2004](https://doi.org/10.1128/AAC.48.10.3794-3800.2004) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Salman_2011_reference](drugs/drug_sulfadoxine/Sulfadoxine_Salman2011_reference.md) | — | 1-compartment (no model) | 2 | Salman S et al., Pharmacokinetic properties of conventio…, Antimicrobial agents and ch… (2011) | [10.1128/AAC.01075-10](https://doi.org/10.1128/AAC.01075-10) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Trenque_2004_reference](drugs/drug_sulfadoxine/Sulfadoxine_Trenque2004_reference.md) | — | 1-compartment (no model) | 0 | Trenque T et al., Population pharmacokinetics of pyrimeth…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2004.02077.x](https://doi.org/10.1111/j.1365-2125.2004.02077.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.706). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [de_2017_sulfadoxine](drugs/drug_sulfadoxine/Sulfadoxine_de2017_sulfadoxine.md) | — | 2-compartment (no model) | 8 | de Kock M et al., Pharmacokinetics of Sulfadoxine and Pyr…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12181](https://doi.org/10.1002/psp4.12181) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sulfadoxine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `MAOB` inhibitor | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 41 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 6  ·  extracted 1  ·  needs_review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bell_2011.pdf` | Bell DJ et al., Population pharmacokinetics of sulfadox…, Clinical pharmacology and t… (2011) | popPK | 10 | [10.1038/clpt.2010.297](https://doi.org/10.1038/clpt.2010.297) | [21191379](https://pubmed.ncbi.nlm.nih.gov/21191379) | The study is a population PK analysis of sulfadoxine, but the abstract provided does not contain specific numeric parameter values (e.g., CL, Vd), which are likely in the full text or figures not included. |
| `Corvaisier_2004.pdf` | Corvaisier S et al., Population pharmacokinetics of pyrimeth…, Antimicrobial agents and ch… (2004) | popPK | 10 | [10.1128/AAC.48.10.3794-3800.2004](https://doi.org/10.1128/AAC.48.10.3794-3800.2004) | [15388436](https://pubmed.ncbi.nlm.nih.gov/15388436) | The abstract explicitly provides quantitative population pharmacokinetic parameters (ka, V, ke, t1/2) for sulfadoxine in children. |
| `Salman_2011.pdf` | Salman S et al., Pharmacokinetic properties of conventio…, Antimicrobial agents and ch… (2011) | popPK | 10 | [10.1128/AAC.01075-10](https://doi.org/10.1128/AAC.01075-10) | [21282434](https://pubmed.ncbi.nlm.nih.gov/21282434) | The study reports population PK parameters including half-life and AUC for sulfadoxine, though specific clearance or volume values are not explicitly listed in the abstract text. |
| `Trenque_2004.pdf` | Trenque T et al., Population pharmacokinetics of pyrimeth…, British journal of clinical… (2004) | popPK | 10 | [10.1111/j.1365-2125.2004.02077.x](https://doi.org/10.1111/j.1365-2125.2004.02077.x) | [15151519](https://pubmed.ncbi.nlm.nih.gov/15151519) | The study reports quantitative population PK parameters (CL, V, half-life) for sulfadoxine in humans with numeric values provided in the abstract. |

<sub>queue written 2026-10-15T03:39:06.958080+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arshad_2020 | irrelevant | 4 | 2 | The paper is a repurposing analysis that references sulfadoxine's PK (Cmax, concentration-time profiles) to compare antiviral efficacy, but does not report quantitative compartmental PK parameters (CL, V, etc.) or novel PK model values for sulfadoxine. |
| popPK | Bell_2011 | relevant | 10 | 0 | The study is a population PK analysis of sulfadoxine, but the abstract provided does not contain specific numeric parameter values (e.g., CL, Vd), which are likely in the full text or figures not included. |
| popPK | Benito_1995 | irrelevant | 0 | 0 | The study is an in-vitro susceptibility assay for Plasmodium falciparum, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Del_1994 | irrelevant | 0 | 0 | The study reports in vitro susceptibility (EC50/EC99) of Plasmodium falciparum to sulfadoxine/pyrimethamine, not pharmacokinetic disposition parameters (CL, V, t1/2) for the drug in a host species. |
| popPK | Elati_2026 | irrelevant | 0 | 0 | The paper is an in vitro drug screening study for Toxoplasma gondii where sulfadoxine is mentioned only as a background therapy and sulfadiazine is used as a control; no pharmacokinetic parameters are reported. |
| popPK | Karunajeewa_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of chloroquine and its metabolite, with sulfadoxine administered only as a co-medication without reported PK parameters. |
| popPK | Kremsner_1989 | irrelevant | 0 | 0 | The study is an in vitro drug sensitivity assay for Plasmodium falciparum, not a pharmacokinetic study, and reports EC50 values rather than disposition parameters. |
| popPK | Moore_2015 | irrelevant | 0 | 0 | The study models the pharmacokinetics of piperaquine, not sulfadoxine, which is only mentioned as part of a co-administered combination. |
| popPK | Nour_2006 | irrelevant | 0 | 0 | This is an in vitro study assessing parasitic response to drug concentrations, not a pharmacokinetic study of sulfadoxine disposition parameters. |
| popPK | Philipps_1998 | irrelevant | 0 | 0 | The study reports in vitro susceptibility (EC50) data for antimalarials, not pharmacokinetic parameters for sulfadoxine. |
| popPK | Ramharter_2019 | irrelevant | 0 | 0 | The study reports population PK parameters for mefloquine and its metabolite, while sulfadoxine-pyrimethamine is only mentioned as a comparator. |
| popPK | Salman_2010 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of azithromycin, and sulfadoxine was only co-administered as a component of a single-dose treatment without specific PK parameter reporting. |
| popPK | Warsame_1991 | irrelevant | 0 | 0 | This is an in-vitro drug susceptibility study of Plasmodium falciparum, not a pharmacokinetic study of sulfadoxine disposition in an organism. |
| popPK | de_2020 | irrelevant | 0 | 0 | The study is an in-vitro antiviral assay evaluating the anti-Zika activity of hybrid compounds, not a pharmacokinetic study of sulfadoxine. |
| popPK | van_2025 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of the clinical effectiveness of sulfadoxine-pyrimethamine for malaria prevention in pregnancy, reporting epidemiological outcomes (parasitaemia, birthweight) rather than pharmacokinetic parameters (CL, V, etc.). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:39 UTC</sub>
