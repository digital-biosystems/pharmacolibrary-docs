<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;oseltamivir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oseltamivir_Lin2012_reference&quot;,&quot;label&quot;:&quot;Lin_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oseltamivir/Oseltamivir_Lin2012_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# oseltamivir

- **generic name:** oseltamivir
- **ATC codes:** `J05AH02`
- **DrugBank:** [DB00198](https://go.drugbank.com/drugs/DB00198) · **PubChem:** [CID 65028](https://pubchem.ncbi.nlm.nih.gov/compound/65028)
- **molar mass:** 312.4045 g/mol (C16H28N2O4) — DrugBank
- **groups:** approved, investigational

## About

Oseltamivir is a neuraminidase inhibitor used to treat and prevent influenza. It is given orally in capsule or liquid forms. It is a WHO essential medicine and is authorised in the European Union.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q211509](https://www.wikidata.org/wiki/Q211509), [Wikipedia](https://en.wikipedia.org/wiki/Oseltamivir?oldid=1368822991) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| oseltamivir | parent | 312.404 | C16H28N2O4 | DrugBank | [65028](https://pubchem.ncbi.nlm.nih.gov/compound/65028) | Chairat_2016, Pillai_2015, Wang_2026 |
| oseltamivir carboxylate | metabolite | 284.356 | C14H24N2O4 | PubChem | [449381](https://pubchem.ncbi.nlm.nih.gov/compound/449381) | Chairat_2016, Pillai_2015, Wang_2026 |

## Start here

> **Lin_2012_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> review reference. [Run it in the simulator](drugs/drug_oseltamivir/Oseltamivir_Lin2012_reference.md?tab=Simulation) · [record](drugs/drug_oseltamivir/Oseltamivir_Lin2012_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="306.7" y1="18" x2="306.7" y2="58" stroke="#ddd"/><text x="306.7" y="72" font-size="10" text-anchor="middle">100</text><line x1="423.3" y1="18" x2="423.3" y2="58" stroke="#ddd"/><text x="423.3" y="72" font-size="10" text-anchor="middle">1000</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Lin_2012 · V ·/kg</text><circle cx="455.6" cy="30.0" r="4" fill="#78909c"><title>Lin_2012 · V ·/kg: 1890 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Wang_2026 · V1</text><circle cx="299.5" cy="46.0" r="4" fill="#ef6c00"><title>Wang_2026 · V1: 86.8 L</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. ·/kg: given per kg in the paper, shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Lin_2012_reference](drugs/drug_oseltamivir/Oseltamivir_Lin2012_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Lin CC et al., Chemical analysis and transplacental tr…, PloS one (2012) | [10.1371/journal.pone.0046062](https://doi.org/10.1371/journal.pone.0046062) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub> | [Pillai_2015_reference](drugs/drug_oseltamivir/Oseltamivir_Pillai2015_reference.md) | — | 1-compartment (no model) | 4 | Pillai VC et al., Population pharmacokinetics of oseltami…, British journal of clinical… (2015) | [10.1111/bcp.12691](https://doi.org/10.1111/bcp.12691) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q30, Q66 — no SI value to build from</sub> | [Wang_2026_reference](drugs/drug_oseltamivir/Oseltamivir_Wang2026_reference.md) | — | parent + metabolite (no model) | 11 | Wang K et al., Oseltamivir drug-disease modelling in i…, British journal of clinical… (2026) | [10.1002/bcp.70623](https://doi.org/10.1002/bcp.70623) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Boianelli_2016_reference](drugs/drug_oseltamivir/Oseltamivir_Boianelli2016_reference.md) | — | parent + metabolite (no model) | 0 | Boianelli A et al., Oseltamivir PK/PD Modeling and Simulati…, Frontiers in cellular and i… (2016) | [10.3389/fcimb.2016.00060](https://doi.org/10.3389/fcimb.2016.00060) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Chairat_2016_reference](drugs/drug_oseltamivir/Oseltamivir_Chairat2016_reference.md) | — | parent + metabolite (no model) | 7 | Chairat K et al., Population pharmacokinetics of oseltami…, British journal of clinical… (2016) | [10.1111/bcp.12892](https://doi.org/10.1111/bcp.12892) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Pai_2011_reference](drugs/drug_oseltamivir/Oseltamivir_Pai2011_reference.md) | — | parent + metabolite (no model) | 0 | Pai MP et al., Oseltamivir and oseltamivir carboxylate…, Antimicrobial agents and ch… (2011) | [10.1128/AAC.00422-11](https://doi.org/10.1128/AAC.00422-11) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Boianelli_2016_R_t](drugs/drug_oseltamivir/pd_Boianelli_2016_R_t.md) | viral release / replication rate of IAV resistant strain (H275Y, VR) ← Oseltamivir Carboxylate (OC) · direct Emax (saturable) effect | — | Boianelli A et al., Oseltamivir PK/PD Modeling and Simulati…, Frontiers in cellular and i… (2016) | [10.3389/fcimb.2016.00060](https://doi.org/10.3389/fcimb.2016.00060) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Boianelli_2016_S_t](drugs/drug_oseltamivir/pd_Boianelli_2016_S_t.md) | viral release / replication rate of IAV (sensitive strain V) ← Oseltamivir Carboxylate (OC) · direct Emax (saturable) effect | — | Boianelli A et al., Oseltamivir PK/PD Modeling and Simulati…, Frontiers in cellular and i… (2016) | [10.3389/fcimb.2016.00060](https://doi.org/10.3389/fcimb.2016.00060) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Checkmahomed_2020_EC50](drugs/drug_oseltamivir/pd_Checkmahomed_2020_EC50.md) | virus cytopathic effect (cell viability) ← oseltamivir carboxylate · inhibition effect | — | Checkmahomed L et al., In Vitro Combinations of Baloxavir Acid…, Viruses (2020) | [10.3390/v12101139](https://doi.org/10.3390/v12101139) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:58 | 0:04 | 3/3/0 | 3/0/0 | 0/0/0 | 4,939/169 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 115 matched, 20 returned
- **screened:** 6  ·  **relevant:** 5
- **records:** 6  ·  extracted 1  ·  needs review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Checkmahomed_2020 | irrelevant | 0 | 0 | In vitro antiviral combination study (EC50/CI values) with no PK parameters for oseltamivir; oseltamivir is only a test drug in cell culture. |
| popPK | Geng_2022 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of a novel antiviral compound (M355), where oseltamivir serves only as a comparator for neuraminidase inhibition without reporting any pharmacokinetic parameters. |
| PGx | Geng_2022 | not_relevant | 0 | 0 | The paper evaluates the antiviral activity of a novel compound (M355) against influenza A virus and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of oseltamivir. |
| popPK | Hastings_2025 | irrelevant | 0 | 0 | The text is a review or perspective discussing the need for future studies and does not present original quantitative PK parameter values for oseltamivir. |
| PGx | Hastings_2025 | not_relevant | 0 | 0 | The paper discusses PK/PD of oseltamivir in special populations (pregnancy, infants) but does not report effects of genetic variants on these parameters. |
| popPK | Jordie_2022 | irrelevant | 2 | 0 | The study reports relative changes (percentage decrease) in clearance but does not provide absolute quantitative PK parameter values (e.g., CL in L/h, V in L) for oseltamivir or its metabolite. |
| PGx | Jordie_2022 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics and pharmacodynamics in immunocompromised pediatric patients but does not report any pharmacogenomic effects (gene variants/genotypes) on PK/PD parameters. |
| popPK | Kamal_2013 | relevant | 10 | 2 | The paper describes a population PK model for oseltamivir and its metabolite with specific covariates, but the actual numeric parameter estimates (clearance, volume, rate constants) are not present in the provided abstract text. |
| PGx | Kamal_2013 | not_relevant | 0 | 0 | The paper investigates demographic covariates (age, weight, CrCl) on oseltamivir PK, but does not report any pharmacogenomic (genetic variant) effects. |
| popPK | Leonard_2026 | irrelevant | 0 | 0 | This is an antiviral drug discovery paper about VNT-101; oseltamivir appears only as a comparator and no PK parameters for oseltamivir are reported. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | This is an antiviral efficacy/resistance study (EC50/IC50 in vitro, mouse efficacy model) with no PK disposition parameters (CL, V, ka, half-life, or PK model) for oseltamivir. |
| popPK | Malbari_2021 | irrelevant | 0 | 0 | The study focuses on in-vitro antiviral potency and neuraminidase inhibition of new molecules, using oseltamivir only as a reference inhibitor without reporting any pharmacokinetic parameters. |
| PGx | Malbari_2021 | not_relevant | 0 | 0 | The paper evaluates the in vitro antiviral activity of novel small-molecule influenza inhibitors and does not report any pharmacogenomic effects on PK/PD parameters of oseltamivir. |
| popPK | Montaseri_2018 | irrelevant | 2 | 0 | The paper describes an in silico adaptive dosing strategy based on a model, but no quantitative PK parameters (CL, V, ka, etc.) for oseltamivir are reported in the provided evidence. |
| PGx | Montaseri_2018 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic/pharmacodynamic adaptive dosing model based on viral load and immune response, but does not report any effect of a gene variant or genotype on the pharmacokinetic or pharmacodynamic parameters of oseltamivir. |
| PGx | Pai_2011 | not_relevant | 0 | 0 | The study evaluates the impact of obesity (BMI/weight) on oseltamivir PK, not the impact of a gene variant/genotype/phenotype. |
| popPK | Pillai_2015 | relevant | 10 | 3 | The study reports PK for oseltamivir carboxylate (active metabolite) in humans, but specific numeric parameter values (CL, V) are not explicitly listed in the provided abstract text, only percentage changes. |
| PGx | Pillai_2015 | not_relevant | 0 | 0 | The study investigates the effect of pregnancy status (physiological state) on pharmacokinetics, not a genetic variant or genotype. |
| popPK | Rayner_2008 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model of oseltamivir, but the provided evidence contains no numeric parameter values. |
| PGx | Rayner_2008 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions with probenecid, not pharmacogenomic effects of gene variants on oseltamivir PK/PD. |
| popPK | Reddy_2015 | relevant | 10 | 4 | Population PK model of oseltamivir carboxylate in ferrets, but numeric parameter estimates (CL, V, Ka, Kt) appear to live in tables/figures/S1 Table not fully provided in the evidence. |
| popPK | Sidwell_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and efficacy of peramivir (BCX-1812), not oseltamivir, which is only used as a comparative reference. |
| PGx | Sidwell_2002 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics, pharmacodynamics, and safety of peramivir, with no data on genetic variants affecting the metabolism or response to oseltamivir. |
| popPK | Walsh_2022 | irrelevant | 0 | 0 | The study is a retrospective outcome analysis regarding clinical efficacy and length of stay, not a pharmacokinetic study with disposition parameters. |
| PGx | Walsh_2022 | not_relevant | 0 | 0 | The study reports clinical outcomes (LOS, readmission, ICU transfer) associated with early oseltamivir use in a general pediatric cohort, with no analysis of gene variants, genotypes, or pharmacokinetic/pharmacodynamic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boseltamivir%5D&body=Drug%3A%20oseltamivir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_oseltamivir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 01:58 UTC</sub>
