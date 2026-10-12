<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;Casirivimab&quot;}]"></div>

# Casirivimab

- **generic name:** Casirivimab
- **ATC codes:** `J06BD07`
- **DrugBank:** [DB15941](https://go.drugbank.com/drugs/DB15941) · **PubChem:** not captured
- **groups:** approved, investigational

## About

It is an approved antiviral antibody, typically given together with another antibody of the same type, and has been used in many countries during the pandemic.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q99329744](https://www.wikidata.org/wiki/Q99329744) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:05 | 5:52 | 0/2/0 | 0/2/1 | 0/0/0 | 268,915/22,661 | ollama / glm-5.3-flash | 32 | 3/16 | 32/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Jansen_2026_reference](drugs/drug_casirivimab/Casirivimab_Jansen2026_reference.md) | — | 2-compartment (no model) | 3 | Jansen E et al., Characterization of the VHH-Fc construc…, PLoS medicine (2026) | [10.1371/journal.pmed.1004609](https://doi.org/10.1371/journal.pmed.1004609) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.543). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lin_2024_reference](drugs/drug_casirivimab/Casirivimab_Lin2024_reference.md) | — | 2-compartment (no model) | 6 (+5 cov.) | Lin KJ et al., Population Pharmacokinetics of Casirivi…, Pharmaceutical research (2024) | [10.1007/s11095-024-03764-5](https://doi.org/10.1007/s11095-024-03764-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed</span> | [Stadler_2023_efficacy](drugs/drug_casirivimab/pd_Stadler_2023_efficacy.md) | Protection from symptomatic COVID-19 infection ← casirivimab/imdevimab (total antibody concentration, sum of both antibody components) · direct sigmoid Emax (Hill) effect | — | Stadler E et al., Monoclonal antibody levels and protecti…, Nature communications (2023) | [10.1038/s41467-023-40204-1](https://doi.org/10.1038/s41467-023-40204-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Rao_2021_viral_load](drugs/drug_casirivimab/pd_Rao_2021_viral_load.md) | SARS-CoV-2 viral load (nasopharyngeal swab) ← casirivimab (REGEN-COV nAb cocktail) · direct Emax (saturable) effect | — | Rao R et al., A Quantitative Systems Pharmacology Mod… (2021) | [10.1101/2021.12.07.21267277](https://doi.org/10.1101/2021.12.07.21267277) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Rao_2023_viral_load](drugs/drug_casirivimab/pd_Rao_2023_viral_load.md) | SARS-CoV-2 viral load ← casirivimab (REGEN-COV, with imdevimab) · direct Emax (saturable) effect | — | Rao R et al., A quantitative systems pharmacology mod…, NPJ systems biology and app… (2023) | [10.1038/s41540-023-00269-6](https://doi.org/10.1038/s41540-023-00269-6) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 96 matched, 43 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ballotta_2022 | not_relevant | 0 | 0 | Case report of casirivimab/imdevimab efficacy in CLL patients; no gene variant/genotype effect on PK or PD parameters reported. |
| PGx | Boeckel_2022 | not_relevant | 0 | 0 | Case series of mAb clinical use in hematologic patients; no gene variant/genotype effects on casirivimab PK/PD parameters reported. |
| popPK | Gonzalez-Bocco_2025 | irrelevant | 0 | 0 | The paper reports population PK parameters (CL, V2, Q, V3) for sotrovimab, not casirivimab; casirivimab is not the subject drug. |
| PGx | Hettle_2022 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effect on casirivimab PK/PD is reported; only clinical treatment outcomes in immunocompromised patients. |
| popPK | Hirsch_2022 | irrelevant | 0 | 0 | A Cochrane systematic review of prophylaxis efficacy/safety with no PK parameters (CL, V, half-life, or population-PK model) for casirivimab reported. |
| popPK | Huygens_2023 | irrelevant | 0 | 0 | The paper models polyclonal anti-SARS-CoV-2 antibodies from convalescent plasma/COVIg, not casirivimab; casirivimab is not the subject drug and no casirivimab parameters appear. |
| PGx | Huygens_2024 | not_relevant | 0 | 0 | No pharmacogenomic/genotype data on casirivimab PK or PD parameters; only viral variant outcomes reported. |
| PGx | Iwasaki_2024 | not_relevant | 0 | 0 | Case report of COVID-19 treatment with no gene variant/genotype effect on casirivimab PK/PD parameters. |
| popPK | Jansen_2026 | irrelevant | 0 | 0 | The paper reports PK of rimteravimab (XVR011), not casirivimab, which is only mentioned as a comparator antibody. |
| PGx | Norton_2024 | not_relevant | 0 | 0 | Paper reports PK of casirivimab in pregnancy but no gene variant/genotype/phenotype effects on PK or PD parameters. |
| PGx | Perrotta_2024 | not_relevant | 0 | 0 | The paper examines vaccination status and clinical outcomes with mAbs, not gene variant/genotype effects on casirivimab PK/PD parameters. |
| popPK | Rao_2021 | irrelevant | 3 | 1 | This is a QSP disease model; casirivimab PK is only a one-compartment description matched to NCA parameters (Cmax, CDay28, half-life) whose numeric values reside in supplementary material/figures not provided. |
| popPK | Rao_2023 | irrelevant | 2 | 1 | This is a QSP model of COVID-19 viral dynamics; casirivimab (REGEN-COV) is only a simulated treatment with PD parameters, no PK disposition parameters (CL, V, half-life) reported, and numeric values live in supplementary figures. |
| PGx | Schilling_2023 | not_relevant | 1 | 1 | Genotyping refers to SARS-CoV-2 variants, not host pharmacogenomics; no gene variant effect on casirivimab PK/PD is reported. |
| popPK | Schilling_2024 | irrelevant | 0 | 0 | This is a viral clearance (SARS-CoV-2 RNA) pharmacometric trial of molnupiravir vs nirmatrelvir; casirivimab is only mentioned as a trial arm with results reported elsewhere, and no casirivimab PK parameters (CL, V, half-life) appear. |
| PGx | Schilling_2024 | not_relevant | 0 | 0 | No pharmacogenomic effects on casirivimab PK/PD are reported; the paper compares antiviral clearance rates without genotype/variant analyses. |
| popPK | Stadler_2023 | irrelevant | 3 | 3 | This is an efficacy/immunocorrelate modeling paper, not a PK study; only a rough antibody half-life (~28.9 days for the casirivimab/imdevimab combination) is mentioned, with no CL/V/compartmental parameters, and detailed values live in supplementary tables not provided. |
| PGx | Taha_2021 | not_relevant | 0 | 0 | Case report of REGN-COV2 efficacy in antibody-deficient patients; no gene variant/genotype effects on PK/PD parameters reported. |
| PGx | Tatham_2024 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on casirivimab PK/PD are reported; only viral variant efficacy and plasma concentrations in mice. |
| popPK | Tran_2026 | irrelevant | 0 | 0 | The paper reports population PK parameters (CL, Vc, Vp, Q, t1/2) for the antimalarial antibody CIS43LS, not casirivimab; casirivimab is not the subject drug. |
| PGx | Wilhelm_2022 | not_relevant | 0 | 0 | The paper examines SARS-CoV-2 variant (viral genotype) escape from casirivimab neutralisation, not a host gene variant effect on casirivimab PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:00 UTC</sub>
