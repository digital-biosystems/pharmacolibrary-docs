<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;tenofovir disoproxil&quot;}]"></div>

# tenofovir disoproxil

- **generic name:** tenofovir disoproxil
- **ATC codes:** `J05AF07`, `J05AR03`, `J05AR06`, `J05AR08`, `J05AR11`, `J05AR12`, `J05AR24`, `J05AR27`
- **DrugBank:** [DB00300](https://go.drugbank.com/drugs/DB00300) · **PubChem:** [CID 5481350](https://pubchem.ncbi.nlm.nih.gov/compound/5481350)
- **molar mass:** 519.448 g/mol (C19H30N5O10P) — DrugBank
- **groups:** approved, investigational

## About

Tenofovir disoproxil is an antiviral used to treat HIV infection and chronic hepatitis B. It is widely used and is authorised in the European Union, available both alone and in combination products for HIV.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27132753](https://www.wikidata.org/wiki/Q27132753) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tenofovir disoproxil fumarate (tenofovir_disoproxil) | parent | 519.448 | C19H30N5O10P | DrugBank | [5481350](https://pubchem.ncbi.nlm.nih.gov/compound/5481350) | Bouazza_2011, Burns_2015, Mugwanya_2025, Rungtivasuwan_2017, Scott_2023 |
| tenofovir (tenofovir (TFV)) | metabolite | 287.216 | C9H14N5O4P | PubChem | [464205](https://pubchem.ncbi.nlm.nih.gov/compound/464205) | Bouazza_2011, Burns_2015, Rungtivasuwan_2017, Scott_2023 |
| tenofovir-diphosphate (tenofovir diphosphate) | metabolite | 447.174 | C9H16N5O10P3 | PubChem | [5481180](https://pubchem.ncbi.nlm.nih.gov/compound/5481180) | Burns_2015, Mugwanya_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:34 | 3:28 | 1/5/1 | 0/0/1 | 0/0/0 | 150,897/13,341 | ollama / glm-5.3-flash | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Bouazza_2011_reference](drugs/drug_tenofovir_disoproxil/TenofovirDisoproxil_Bouazza2011_reference.md) | held back | 2-compartment, oral | 5 | Bouazza N et al., Population pharmacokinetics of tenofovi…, Journal of acquired immune… (2011) | [10.1097/QAI.0b013e3182302ea8](https://doi.org/10.1097/QAI.0b013e3182302ea8) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Mugwanya_2025_reference](drugs/drug_tenofovir_disoproxil/TenofovirDisoproxil_Mugwanya2025_reference.md) | — | 1-compartment (no model) | 1 | Mugwanya KK et al., Adherence thresholds for emtricitabine-…, PLoS medicine (2025) | [10.1371/journal.pmed.1004732](https://doi.org/10.1371/journal.pmed.1004732) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.211). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Burns_2015_base](drugs/drug_tenofovir_disoproxil/TenofovirDisoproxil_Burns2015_base.md) | — | parent + metabolite (no model) | 7 | Burns RN et al., Population pharmacokinetics of tenofovi…, Journal of clinical pharmac… (2015) | [10.1002/jcph.461](https://doi.org/10.1002/jcph.461) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.19). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Burns_2015_final](drugs/drug_tenofovir_disoproxil/TenofovirDisoproxil_Burns2015_final.md) | — | parent + metabolite (no model) | 7 (+1 cov.) | Burns RN et al., Population pharmacokinetics of tenofovi…, Journal of clinical pharmac… (2015) | [10.1002/jcph.461](https://doi.org/10.1002/jcph.461) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Jayachandran_2021_reference](drugs/drug_tenofovir_disoproxil/TenofovirDisoproxil_Jayachandran2021_reference.md) | — | general linear (no model) | 0 | Jayachandran P et al., A Mechanistic In Vivo/Ex Vivo Pharmacok…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12583](https://doi.org/10.1002/psp4.12583) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Rungtivasuwan_2017_reference](drugs/drug_tenofovir_disoproxil/TenofovirDisoproxil_Rungtivasuwan2017_reference.md) | — | 1-compartment (no model) | 1 | Rungtivasuwan K et al., Pharmacogenetics-based population pharm…, Pharmacogenomics (2017) | [10.2217/pgs-2017-0128](https://doi.org/10.2217/pgs-2017-0128) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.071). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Scott_2023_reference](drugs/drug_tenofovir_disoproxil/TenofovirDisoproxil_Scott2023_reference.md) | — | general linear (no model) | 5 | Scott RK et al., Clinical trial simulation to evaluate t…, Frontiers in reproductive h… (2023) | [10.3389/frph.2023.1224580](https://doi.org/10.3389/frph.2023.1224580) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Jayachandran_2021_p24](drugs/drug_tenofovir_disoproxil/pd_Jayachandran_2021_p24.md) | cumulative p24 antigen expression (ex vivo HIV-1 infection of rectal explants) ← tenofovir-diphosphate (TFVdp) in rectal mononuclear cells (MMCs) · direct linear effect | model (no simulator) | Jayachandran P et al., A Mechanistic In Vivo/Ex Vivo Pharmacok…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12583](https://doi.org/10.1002/psp4.12583) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tenofovir_disoproxil).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` substrate, `ABCC4` substrate, `SLC22A6` substrate, `SLC22A8` substrate | DrugBank actor |
| excretion | liver | `ABCC2` substrate, `ABCC4` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC10 (substrate), AK2 (substrate), AK4 (substrate), CKB (inducer), CKB (substrate), NME1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 119 matched, 20 returned
- **screened:** 6  ·  **relevant:** 5
- **records:** 7  ·  extracted 1  ·  needs_review 1  ·  rejected 5  ·  stale 7
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bouazza_2011.pdf` | Bouazza N et al., Population pharmacokinetics of tenofovi…, Journal of acquired immune… (2011) | popPK | 10 | [10.1097/QAI.0b013e3182302ea8](https://doi.org/10.1097/QAI.0b013e3182302ea8) | [21857359](https://pubmed.ncbi.nlm.nih.gov/21857359) | Population PK model of tenofovir (TDF) in children with full numeric parameter values (CL, Vc, Vp, Q, ka) reported in the abstract. |
| `Garrett_2018.pdf` | Garrett KL et al., A Pharmacokinetic/Pharmacodynamic Model…, The Journal of pharmacology… (2018) | popPK | 9 | [10.1124/jpet.118.251009](https://doi.org/10.1124/jpet.118.251009) | [30150483](https://pubmed.ncbi.nlm.nih.gov/30150483) | Population PK models of TDF/tenofovir metabolite were developed, but the evidence contains no numeric parameter values (likely in figures/supplementary material not provided). |
| `Rungtivasuwan_2017.pdf` | Rungtivasuwan K et al., Pharmacogenetics-based population pharm…, Pharmacogenomics (2017) | popPK | 9 | [10.2217/pgs-2017-0128](https://doi.org/10.2217/pgs-2017-0128) | [29061086](https://pubmed.ncbi.nlm.nih.gov/29061086) | Population PK model of tenofovir (from tenofovir disoproxil) in humans, but only relative changes (25%, 11%) in CL/F are given; full parameter values not shown in evidence. |
| `Ibrahim_2021.pdf` | Ibrahim ME et al., Individualized Adherence Benchmarks for…, AIDS research and human ret… (2021) | popPK | 7 | [10.1089/AID.2020.0108](https://doi.org/10.1089/AID.2020.0108) | [33191774](https://pubmed.ncbi.nlm.nih.gov/33191774) | Population PK model of TFV-DP (tenofovir's metabolite) after TDF dosing in humans, but the actual parameter estimates (CL, V, k) are not shown in the evidence, only the 700 fmol/punch benchmark. |

<sub>queue written 2026-10-07T16:32:03.407155+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aouri_2017 | irrelevant | 0 | 0 | The population PK model and all quantitative parameters (CL, V, MAT) are for rilpivirine; tenofovir disoproxil is only mentioned as a co-administered drug with no PK values. |
| popPK | Barceló_2016 | irrelevant | 0 | 0 | Tenofovir disoproxil is only a co-formulated component; the population PK parameters reported are for elvitegravir and cobicistat, not tenofovir. |
| popPK | Bierhoff_2019 | irrelevant | 3 | 2 | A systematic review without original numeric PK parameters (no CL, V, or model values reported); only qualitative statements about AUC/Cmax changes. |
| popPK | Garrett_2018 | relevant | 9 | 3 | Population PK models of TDF/tenofovir metabolite were developed, but the evidence contains no numeric parameter values (likely in figures/supplementary material not provided). |
| popPK | Ibrahim_2020 | irrelevant | 0 | 0 | This is an observational eGFR slope study comparing TDF and TAF renal safety, with no PK disposition parameters (CL, V, ka, half-life, or PK model) for tenofovir disoproxil. |
| popPK | Ibrahim_2021 | relevant | 7 | 3 | Population PK model of TFV-DP (tenofovir's metabolite) after TDF dosing in humans, but the actual parameter estimates (CL, V, k) are not shown in the evidence, only the 700 fmol/punch benchmark. |
| popPK | Li_2022 | irrelevant | 2 | 3 | This is a narrative review of HIV RT inhibitors; TDF appears only as a comparator with AUC/Cmax values for TAF/tenofovir, no population-PK or disposition parameters (CL, V, ka) for tenofovir disoproxil itself. |
| popPK | Nicol_2015 | irrelevant | 2 | 1 | This is an in vitro/ex vivo efficacy (Emax) study of TFV, not a PK study reporting disposition parameters (CL, V, half-life) for tenofovir disoproxil; no numeric PK values are present. |
| popPK | Néant_2019 | irrelevant | 0 | 0 | This is a pharmacodynamic model of rilpivirine; tenofovir disoproxil is only part of the co-administered regimen with no PK parameters for it. |
| popPK | Rungtivasuwan_2017 | relevant | 9 | 4 | Population PK model of tenofovir (from tenofovir disoproxil) in humans, but only relative changes (25%, 11%) in CL/F are given; full parameter values not shown in evidence. |
| popPK | Souza-Silva_2023 | irrelevant | 0 | 0 | Toxicology study in mollusks with no PK parameters for tenofovir disoproxil; only an EC50 toxicity value is reported. |
| popPK | Uglietti_2012 | irrelevant | 2 | 1 | A narrative review of FTC/TDF PK/PD with no original quantitative disposition parameters reported in the evidence. |
| popPK | Wahl_2017 | irrelevant | 3 | 3 | PK-PD study of TDF in mice reports concentrations and dose proportionality, but no disposition parameters (CL, V, half-life, compartmental model); detailed values are in supplementary tables not provided. |
| popPK | Yee_2019 | irrelevant | 1 | 0 | This is a population PK study of doravirine; tenofovir disoproxil is only a co-formulated drug with no PK parameters reported for it. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:32 UTC</sub>
