<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;telaprevir&quot;}]"></div>

# telaprevir

- **generic name:** telaprevir
- **ATC codes:** `J05AP02`
- **DrugBank:** [DB05521](https://go.drugbank.com/drugs/DB05521) · **PubChem:** [CID 3010818](https://pubchem.ncbi.nlm.nih.gov/compound/3010818)
- **molar mass:** 679.8493 g/mol (C36H53N7O6) — DrugBank
- **groups:** approved, withdrawn

## About

Telaprevir is an antiviral drug that was used to treat chronic hepatitis C. It is no longer in use; its approval in the European Union has expired and it is listed as withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408557](https://www.wikidata.org/wiki/Q408557) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:25 | 0:41 | 0/0/0 | 2/0/0 | 0/0/0 | 80,264/2,182 | ollama / glm-5.3-flash | 6 | 1/5 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gammeltoft_2021_residual_infectivity](drugs/drug_telaprevir/pd_Gammeltoft_2021_residual_infectivity.md) | SARS-CoV-2 spike protein-positive cells (percent residual infectivity) ← telaprevir · direct sigmoid Emax (Hill) effect | — | Gammeltoft KA et al., Hepatitis C Virus Protease Inhibitors S…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.02680-20](https://doi.org/10.1128/AAC.02680-20) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Laouénan_2014_VL](drugs/drug_telaprevir/pd_Laou_nan_2014_VL.md) | HCV RNA viral load (viral kinetic response under triple therapy) ← telaprevir · direct Emax (saturable) effect | — | Laouénan C et al., Using pharmacokinetic and viral kinetic…, Antimicrobial agents and ch… (2014) | [10.1128/AAC.02611-14](https://doi.org/10.1128/AAC.02611-14) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=telaprevir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: Genome polyprotein (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Balaraju_2015 | irrelevant | 0 | 0 | Medicinal chemistry/SAR study of new α-pyranone carboxamide analogs; telaprevir only mentioned as standard of care, no PK parameters. |
| popPK | Dufner-Beattie_2014 | irrelevant | 0 | 0 | In-vitro antiviral drug discovery study; telaprevir is only a comparator, with no PK parameters reported. |
| popPK | Gammeltoft_2021 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study of HCV protease inhibitors against SARS-CoV-2; telaprevir is only one tested compound with EC50/CC50 values, no PK disposition parameters. |
| popPK | Laouénan_2014 | irrelevant | 3 | 4 | This is a PK-viral kinetic modeling study in cirrhotic patients, but telaprevir PK is modeled only as a constant trough concentration (Css = 3.77 µmol/l reported); no disposition parameters (CL, V, Q, ka, half-life with volume) for telaprevir are estimated. |
| popPK | Lee_2011 | irrelevant | 0 | 0 | Telaprevir is only used as a co-administered comparator in an in-vitro antiviral synergy assay; no PK parameters are reported. |
| popPK | Liu_2022 | irrelevant | 1 | 2 | Telaprevir appears only as a positive-control comparator (EC50); the PK data (rat bioavailability, clearance, t1/2) belong to the novel compound 80, not telaprevir. |
| popPK | Loustaud-Ratti_2015 | irrelevant | 1 | 1 | This is a study of eGFR (creatinine) changes during telaprevir therapy, not a PK study reporting CL/V or a population-PK model of telaprevir itself. |
| popPK | Ma_2020 | irrelevant | 0 | 0 | Telaprevir is only mentioned as a co-administered comparator antiviral; no PK parameters for telaprevir are reported. |
| popPK | Pathak_2017 | irrelevant | 0 | 0 | This is an in-vitro pharmacophore/docking drug-repurposing study; telaprevir is only a screened anti-DENV candidate with EC50 values, no PK disposition parameters. |
| popPK | Peng_2013 | irrelevant | 0 | 0 | Telaprevir is only mentioned as a co-administered comparator in an antiviral drug-discovery study; no PK parameters for telaprevir are reported. |
| popPK | Silva_2013 | irrelevant | 1 | 0 | Telaprevir appears only as an in-vitro potency comparator (Ki/EC50/IC50), with no PK disposition parameters reported. |
| popPK | Woot_2021 | irrelevant | 1 | 1 | This is a viral kinetics (HCV) model in telaprevir-treated patients; telaprevir PK was not modeled ("in the absence of PK data"), and no telaprevir disposition parameters (CL, V, ka) are reported. |
| popPK | Wu_2015 | irrelevant | 0 | 0 | The population PK model is for ribavirin (and its phosphorylated metabolites); telaprevir appears only as a covariate, with no telaprevir disposition parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
