<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;pyrimethamine&quot;}]"></div>

# pyrimethamine

- **generic name:** pyrimethamine
- **ATC codes:** `P01BD01`, `P01BF04`, `P01BF09`
- **DrugBank:** [DB00205](https://go.drugbank.com/drugs/DB00205) · **PubChem:** [CID 4993](https://pubchem.ncbi.nlm.nih.gov/compound/4993)
- **molar mass:** 248.711 g/mol (C12H13ClN4) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Pyrimethamine is an antiprotozoal medicine used to treat malaria, including falciparum malaria, and toxoplasmosis. It is an approved medicine, also approved for veterinary use, and appears on the WHO essential medicines list, so it remains in use worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421072](https://www.wikidata.org/wiki/Q421072) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pyrimethamine | parent | 248.711 | C12H13ClN4 | DrugBank | [4993](https://pubchem.ncbi.nlm.nih.gov/compound/4993) | Odongo_2015, Salman_2011, de_2017 |
| N(4)-acetylsulfadoxine | metabolite | 352.365 | C14H16N4O5S | PubChem | [160773](https://pubchem.ncbi.nlm.nih.gov/compound/160773) | Salman_2011 |
| sulfadoxine | metabolite | 310.328 | C12H14N4O4S | PubChem | [17134](https://pubchem.ncbi.nlm.nih.gov/compound/17134) | Salman_2011 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:20 | 7:34 | 0/7/0 | 0/0/0 | 0/0/0 | 328,874/51,213 | einfracz / qwen3.8-27b | 11 | 2/9 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Falloon_1994_reference](drugs/drug_pyrimethamine/Pyrimethamine_Falloon1994_reference.md) | — | general linear (no model) | 0 | Falloon J et al., Pharmacokinetics and safety of weekly d…, Antimicrobial agents and ch… (1994) | [10.1128/AAC.38.7.1580](https://doi.org/10.1128/AAC.38.7.1580) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.824). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Odongo_2015_reference](drugs/drug_pyrimethamine/Pyrimethamine_Odongo2015_reference.md) | — | 1-compartment (no model) | 8 | Odongo CO et al., Trimester-Specific Population Pharmacok…, Drugs in R&D (2015) | [10.1007/s40268-015-0110-z](https://doi.org/10.1007/s40268-015-0110-z) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.417). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Salman_2011_reference](drugs/drug_pyrimethamine/Pyrimethamine_Salman2011_reference.md) | — | parent + metabolite (no model) | 2 | Salman S et al., Pharmacokinetic properties of conventio…, Antimicrobial agents and ch… (2011) | [10.1128/AAC.01075-10](https://doi.org/10.1128/AAC.01075-10) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.526). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [de_2017_country](drugs/drug_pyrimethamine/Pyrimethamine_de2017_country.md) | — | 1-compartment (no model) | 0 | de Kock M et al., Pharmacokinetics of Sulfadoxine and Pyr…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12181](https://doi.org/10.1002/psp4.12181) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.526). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [de_2017_pyrimethamine](drugs/drug_pyrimethamine/Pyrimethamine_de2017_pyrimethamine.md) | — | 1-compartment (no model) | 0 | de Kock M et al., Pharmacokinetics of Sulfadoxine and Pyr…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12181](https://doi.org/10.1002/psp4.12181) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.526). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [de_2017_pyrimethamine_estimate](drugs/drug_pyrimethamine/Pyrimethamine_de2017_pyrimethamine_estimate.md) | — | 2-compartment (no model) | 10 | de Kock M et al., Pharmacokinetics of Sulfadoxine and Pyr…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12181](https://doi.org/10.1002/psp4.12181) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.526). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [de_2017_sulfadoxine_estimate](drugs/drug_pyrimethamine/Pyrimethamine_de2017_sulfadoxine_estimate.md) | — | 2-compartment (no model) | 8 | de Kock M et al., Pharmacokinetics of Sulfadoxine and Pyr…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12181](https://doi.org/10.1002/psp4.12181) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pyrimethamine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C8` inhibitor | DrugBank actor |
| excretion | kidney | `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: DHFR (inhibitor), FOLR1 (modulator), HEXB (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 72 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 7  ·  extracted 0  ·  needs_review 0  ·  rejected 7  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bell_2011.pdf` | Bell DJ et al., Population pharmacokinetics of sulfadox…, Clinical pharmacology and t… (2011) | popPK | 10 | [10.1038/clpt.2010.297](https://doi.org/10.1038/clpt.2010.297) | [21191379](https://pubmed.ncbi.nlm.nih.gov/21191379) | The paper describes a population pharmacokinetic model for pyrimethamine in human children, but no specific numeric parameter values (e.g., CL, V, half-life) are provided in the extracted evidence. |
| `Salman_2011.pdf` | Salman S et al., Pharmacokinetic properties of conventio…, Antimicrobial agents and ch… (2011) | popPK | 8 | [10.1128/AAC.01075-10](https://doi.org/10.1128/AAC.01075-10) | [21282434](https://pubmed.ncbi.nlm.nih.gov/21282434) | The study reports quantitative population PK parameters (AUC, half-life) for pyrimethamine in infants, though specific values for clearance and volume are not listed in the provided text. |

<sub>queue written 2026-10-15T03:13:56.899820+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbaali_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on parasite tubulin targeting where pyrimethamine serves only as a negative control, and no pharmacokinetic parameters are reported. |
| popPK | Adeyemi_2023 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of emodin against Toxoplasma gondii where pyrimethamine serves only as a positive control, reporting no pharmacokinetic parameters for pyrimethamine. |
| popPK | Bell_2011 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for pyrimethamine in human children, but no specific numeric parameter values (e.g., CL, V, half-life) are provided in the extracted evidence. |
| popPK | Elati_2026 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study screening purine nucleoside analogues against Toxoplasma gondii, with pyrimethamine mentioned only as a standard control compound, and it contains no pharmacokinetic data. |
| popPK | Jafari_2021 | irrelevant | 0 | 0 | The study reports anti-Toxoplasma efficacy (EC50, survival, parasite load) of a plant extract compared to pyrimethamine, but contains no pharmacokinetic parameters (CL, V, ka, etc.) for pyrimethamine. |
| popPK | Karunajeewa_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of chloroquine and its metabolite in pregnancy, using sulfadoxine-pyrimethamine only as a co-administered drug, not as the subject of PK modeling. |
| popPK | Ma_2022 | irrelevant | 0 | 0 | The study evaluates tilmicosin and ATLL as anti-parasitic agents, using pyrimethamine only as a positive control without reporting any pharmacokinetic parameters for it. |
| popPK | Moore_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of piperaquine (PQ) in breast milk, with pyrimethamine only mentioned as part of a co-administered drug regimen (SP-PQ) and no PK parameters for pyrimethamine are reported. |
| popPK | Ndlovu_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel anti-Toxoplasmosis compounds, using pyrimethamine only as an efficacy comparator (EC50), with no pharmacokinetic data. |
| popPK | Philipps_1998 | irrelevant | 0 | 0 | The study reports in-vitro susceptibility data (EC50) for antimalarials, not pharmacokinetic parameters for pyrimethamine. |
| popPK | Qiu_2025 | irrelevant | 0 | 0 | The study evaluates the anti-Toxoplasma activity of quisinostat, using pyrimethamine only as a positive control in vitro, and does not report any pharmacokinetic parameters for pyrimethamine. |
| popPK | Ramharter_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mefloquine and its metabolite carboxymefloquine in pregnant women, with pyrimethamine only mentioned as the comparator drug (SP-IPTp) and no PK parameters provided for it. |
| popPK | Salman_2010 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of azithromycin, with pyrimethamine (as part of SP) used only as a co-administered comparator for antimalarial treatment. |
| popPK | Zuidema_1986 | irrelevant | 0 | 0 | The paper is a review of the pharmacokinetics of dapsone, not pyrimethamine; pyrimethamine is only mentioned as a combination therapy partner. |
| popPK | da_2025 | irrelevant | 0 | 0 | The study focuses on the in vitro anti-parasitic activity (EC50/CC50) of novel marinoquinolines, with pyrimethamine mentioned only as part of current standard therapy, reporting no pharmacokinetic parameters for pyrimethamine. |
| popPK | van_2025 | irrelevant | 0 | 0 | This is a systematic review and meta-analysis of clinical effectiveness (malaria outcomes) of sulfadoxine-pyrimethamine, not a pharmacokinetic study, and reports no PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:16 UTC</sub>
