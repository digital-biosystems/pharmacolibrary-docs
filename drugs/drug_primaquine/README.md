<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;primaquine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Primaquine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_primaquine/Primaquine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# primaquine

- **generic name:** primaquine
- **ATC codes:** `P01BA03`
- **DrugBank:** [DB01087](https://go.drugbank.com/drugs/DB01087) · **PubChem:** [CID 4908](https://pubchem.ncbi.nlm.nih.gov/compound/4908)
- **molar mass:** 259.3467 g/mol (C15H21N3O) — DrugBank
- **groups:** approved, investigational

## About

Primaquine is an antimalarial drug used to treat malaria, including Plasmodium vivax and Plasmodium falciparum infections, and for malaria prophylaxis. It is an approved medicine and appears on the WHO list of essential medicines, so it remains in use worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419834](https://www.wikidata.org/wiki/Q419834) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| primaquine | parent | 259.347 | C15H21N3O | DrugBank | [4908](https://pubchem.ncbi.nlm.nih.gov/compound/4908) | Chairat_2018, Chotsiri_2024_2, Lee_2021, Sridharan_2019, Wattanakul_2024_2 |
| carboxyprimaquine (carboxy-primaquine) | metabolite | 274.32 | C15H18N2O3 | PubChem | [127542](https://pubchem.ncbi.nlm.nih.gov/compound/127542) | Chairat_2018, Chotsiri_2024_2, Lee_2021 |
| primaquine carbamoyl-glucuronide | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:07 | 1:56:50 | 0/9/2 | 1/0/0 | 0/0/0 | 495,800/35,967 | einfracz / qwen3.8-27b | 30 | 1/14 | 14/1 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: unreported model parameter default(s): q12/q21 (hepatic flow, 90 L/h), ka</sub><br><sub>route_to: `scholar`</sub> | [Chairat_2018_reference](drugs/drug_primaquine/Primaquine_Chairat2018_reference.md) | ▶ model + simulator | parent 1-cmt + liver + 1 metabolite (1-cmt) | 12 | Chairat K et al., Enantiospecific pharmacokinetics and dr…, The Journal of antimicrobia… (2018) | [10.1093/jac/dky297](https://doi.org/10.1093/jac/dky297) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q49 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Sridharan_2019_reference](drugs/drug_primaquine/Primaquine_Sridharan2019_reference.md) | — | 1-compartment (no model) | 2 | Sridharan K et al., Population pharmacokinetics of primaqui…, Indian journal of pharmacol… (2019) | [10.4103/ijp.IJP_230_16](https://doi.org/10.4103/ijp.IJP_230_16) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Chairat_2018_primaquine_alone](drugs/drug_primaquine/Primaquine_Chairat2018_primaquine_alone.md) | — | parent + metabolite (no model) | 12 | Chairat K et al., Enantiospecific pharmacokinetics and dr…, The Journal of antimicrobia… (2018) | [10.1093/jac/dky297](https://doi.org/10.1093/jac/dky297) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Chairat_2018_primaquine_co_administered_with_antimalarial_drugs_chloroquine](drugs/drug_primaquine/Primaquine_Chairat2018_primaquine_co_administered_with_antim.md) | — | parent + metabolite (no model) | 11 | Chairat K et al., Enantiospecific pharmacokinetics and dr…, The Journal of antimicrobia… (2018) | [10.1093/jac/dky297](https://doi.org/10.1093/jac/dky297) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Chairat_2018_primaquine_co_administered_with_antimalarial_drugs_dihydroartemisinin_piperaquine](drugs/drug_primaquine/Primaquine_Chairat2018_primaquine_co_administered_with_antim.md) | — | parent + metabolite (no model) | 12 | Chairat K et al., Enantiospecific pharmacokinetics and dr…, The Journal of antimicrobia… (2018) | [10.1093/jac/dky297](https://doi.org/10.1093/jac/dky297) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Chairat_2018_primaquine_co_administered_with_antimalarial_drugs_pyronaridine_artesunate](drugs/drug_primaquine/Primaquine_Chairat2018_primaquine_co_administered_with_antim.md) | — | parent + metabolite (no model) | 12 | Chairat K et al., Enantiospecific pharmacokinetics and dr…, The Journal of antimicrobia… (2018) | [10.1093/jac/dky297](https://doi.org/10.1093/jac/dky297) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.417). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Chotsiri_2024_2_g6pd_deficient_individuals](drugs/drug_primaquine/Primaquine_Chotsiri2024v2_g6pd_deficient_individuals.md) | — | general linear (no model) | 3 | Chotsiri P et al., Population pharmacokinetics of primaqui…, Malaria journal (2024) | [10.1186/s12936-024-04979-y](https://doi.org/10.1186/s12936-024-04979-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.417). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Chotsiri_2024_2_g6pd_normal_individuals](drugs/drug_primaquine/Primaquine_Chotsiri2024v2_g6pd_normal_individuals.md) | — | general linear (no model) | 3 | Chotsiri P et al., Population pharmacokinetics of primaqui…, Malaria journal (2024) | [10.1186/s12936-024-04979-y](https://doi.org/10.1186/s12936-024-04979-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.417). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Chotsiri_2024_2_reference](drugs/drug_primaquine/Primaquine_Chotsiri2024v2_reference.md) | — | general linear (no model) | 3 | Chotsiri P et al., Population pharmacokinetics of primaqui…, Malaria journal (2024) | [10.1186/s12936-024-04979-y](https://doi.org/10.1186/s12936-024-04979-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lee_2021_reference](drugs/drug_primaquine/Primaquine_Lee2021_reference.md) | — | parent + metabolite (no model) | 0 | Lee WY et al., Population Pharmacokinetics of Primaqui…, Pharmaceutics (2021) | [10.3390/pharmaceutics13050652](https://doi.org/10.3390/pharmaceutics13050652) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wattanakul_2024_2_reference](drugs/drug_primaquine/Primaquine_Wattanakul2024v2_reference.md) | — | parent + metabolite (no model) | 0 | Wattanakul T et al., Population pharmacokinetic modelling of…, Nature communications (2024) | [10.1038/s41467-024-47908-y](https://doi.org/10.1038/s41467-024-47908-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chotivanich_2006_IR](drugs/drug_primaquine/pd_Chotivanich_2006_IR.md) | Infection rate (IR) ← primaquine · direct sigmoid Emax (Hill) effect | — | Chotivanich K et al., Transmission-blocking activities of qui…, Antimicrobial agents and ch… (2006) | [10.1128/AAC.01472-05](https://doi.org/10.1128/AAC.01472-05) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=primaquine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer/substrate, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer, `CYP1B1` inducer | DrugBank actor |
| metabolism | skin | `CYP1B1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer, `CYP3A4` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: KRT7 (other/unknown), NQO2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 33 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 11  ·  extracted 0  ·  needs_review 2  ·  rejected 9  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Araujo-Lima_2023 | irrelevant | 0 | 0 | The study evaluates synthetic hybrids of atorvastatin and aminoquinolines (derived from chloroquine/primaquine) in vitro and in silico, not the pharmacokinetics of the drug primaquine itself. |
| popPK | Bolchoz_2001 | irrelevant | 2 | 0 | The study is mechanistic/in-vitro focused on metabolite identification and hemotoxicity, not quantitative population PK parameters for primaquine. |
| popPK | Boonyasuppayakorn_2014 | irrelevant | 0 | 0 | The study investigates the antiviral activity of amodiaquine against dengue virus in vitro, and while primaquine is listed as a screened compound, no pharmacokinetic parameters or quantitative disposition data are reported for it. |
| popPK | Brueckner_1991 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of WR 238605, a primaquine analogue, not primaquine itself. |
| popPK | Capela_2018 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro antiplasmodial activity of new hybrid compounds, with primaquine serving only as a comparator for metabolic stability rather than being the subject of a pharmacokinetic study. |
| popPK | Chotivanich_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay measuring gametocytocidal activity (EC50/EC90) rather than pharmacokinetic parameters. |
| popPK | Chotsiri_2017 | irrelevant | 1 | 1 | The study's subject drugs are dihydroartemisinin and piperaquine; primaquine was used as a placebo/reference arm for drug-drug interaction and ECG baseline correction, and no PK parameters for primaquine are reported. |
| popPK | Commons_2019 | irrelevant | 0 | 0 | The study is a systematic review and meta-analysis focusing on haematological outcomes (haemoglobin levels) and parasite clearance, not pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Daher_2019_2 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters (AUC, half-life) only for the long-acting ACT components (mefloquine, chloroquine, lumefantrine), not for primaquine, and explicitly states the sampling design did not allow for proper modeling of primaquine levels. |
| popPK | Marino_1994 | irrelevant | 0 | 0 | The study subjects is WR242511, a primaquine analog/candidate, not primaquine itself. |
| popPK | Nyamwihura_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study evaluating the in vitro antiplasmodial activity of novel nopol-based quinoline derivatives, with primaquine mentioned only as a structural/comparative reference. |
| popPK | Persoons_2021 | irrelevant | 0 | 0 | The study is an in-vitro antiviral activity assay (EC50/CC50) and does not contain pharmacokinetic parameters for primaquine. |
| popPK | Rajić_2018 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro biological activity (antimicrobial, antiviral, cytostatic) of novel primaquine derivatives, not the pharmacokinetic profile of primaquine itself. |
| popPK | Watson_2017 | irrelevant | 2 | 0 | The study models red blood cell dynamics and haemolysis (pharmacodynamics) rather than reporting quantitative PK parameters like clearance or volume of distribution for primaquine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 01:12 UTC</sub>
