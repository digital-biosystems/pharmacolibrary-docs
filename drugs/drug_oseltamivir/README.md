<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;oseltamivir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oseltamivir_Lin2012_reference&quot;,&quot;label&quot;:&quot;Lin_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oseltamivir/Oseltamivir_Lin2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# oseltamivir

- **generic name:** oseltamivir
- **ATC codes:** `J05AH02`
- **DrugBank:** [DB00198](https://go.drugbank.com/drugs/DB00198) · **PubChem:** [CID 65028](https://pubchem.ncbi.nlm.nih.gov/compound/65028)
- **molar mass:** 312.4045 g/mol (C16H28N2O4) — DrugBank
- **groups:** approved, investigational

## About

Oseltamivir is an antiviral medicine used to treat and help prevent influenza, including severe cases. It is authorised in the European Union and is on the WHO list of essential medicines, so it is widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q211509](https://www.wikidata.org/wiki/Q211509) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| oseltamivir | parent | 312.404 | C16H28N2O4 | DrugBank | [65028](https://pubchem.ncbi.nlm.nih.gov/compound/65028) | Chairat_2016, Pai_2011, Pillai_2015, Wang_2026 |
| oseltamivir carboxylate | metabolite | 284.356 | C14H24N2O4 | PubChem | [449381](https://pubchem.ncbi.nlm.nih.gov/compound/449381) | Chairat_2016, Pai_2011, Pillai_2015, Wang_2026 |

## Start here

> **Lin_2012_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_oseltamivir/Oseltamivir_Lin2012_reference.md?tab=Simulation) · [record](drugs/drug_oseltamivir/Oseltamivir_Lin2012_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 672 ‡ | L/h | 0.16 L/min/kg | review reference |  | rat | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Lin_2012_reference](drugs/drug_oseltamivir/Oseltamivir_Lin2012_reference.md) |
| V | V | 1890 ‡ | L | 27.0 L/kg | review reference |  | rat | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Lin_2012_reference](drugs/drug_oseltamivir/Oseltamivir_Lin2012_reference.md) |
| V | V1 | 86.8 | L | 86.8 L | infants and toddlers (birth through 23 months) with influenza virus infection | 78 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wang_2026_reference](drugs/drug_oseltamivir/Oseltamivir_Wang2026_reference.md) |
| ka | kabs | 0.878 | 1/h | 0.878 1/h | infants and toddlers (birth through 23 months) with influenza virus infection | 78 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wang_2026_reference](drugs/drug_oseltamivir/Oseltamivir_Wang2026_reference.md) |
| t½ | t1/2z | 6.576 | h | 0.274 d | infants and toddlers (birth through 23 months) with influenza virus infection | 78 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wang_2026_reference](drugs/drug_oseltamivir/Oseltamivir_Wang2026_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="306.7" y1="18" x2="306.7" y2="58" stroke="#ddd"/><text x="306.7" y="72" font-size="10" text-anchor="middle">100</text><line x1="423.3" y1="18" x2="423.3" y2="58" stroke="#ddd"/><text x="423.3" y="72" font-size="10" text-anchor="middle">1000</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Lin_2012 · V ·/kg</text><circle cx="455.6" cy="30.0" r="4" fill="#2e7d32"><title>Lin_2012 · V ·/kg: 1890 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Wang_2026 · V1</text><circle cx="299.5" cy="46.0" r="4" fill="#ef6c00"><title>Wang_2026 · V1: 86.8 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Lin_2012_reference](drugs/drug_oseltamivir/Oseltamivir_Lin2012_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Lin CC et al., Chemical analysis and transplacental tr…, PloS one (2012) | [10.1371/journal.pone.0046062](https://doi.org/10.1371/journal.pone.0046062) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub> | [Pillai_2015_reference](drugs/drug_oseltamivir/Oseltamivir_Pillai2015_reference.md) | — | 1-compartment (no model) | 4 | Pillai VC et al., Population pharmacokinetics of oseltami…, British journal of clinical… (2015) | [10.1111/bcp.12691](https://doi.org/10.1111/bcp.12691) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q30, Q66 — no SI value to build from</sub> | [Wang_2026_reference](drugs/drug_oseltamivir/Oseltamivir_Wang2026_reference.md) | — | parent + metabolite (no model) | 11 | Wang K et al., Oseltamivir drug-disease modelling in i…, British journal of clinical… (2026) | [10.1002/bcp.70623](https://doi.org/10.1002/bcp.70623) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Boianelli_2016_reference](drugs/drug_oseltamivir/Oseltamivir_Boianelli2016_reference.md) | — | parent + metabolite (no model) | 0 | Boianelli A et al., Oseltamivir PK/PD Modeling and Simulati…, Frontiers in cellular and i… (2016) | [10.3389/fcimb.2016.00060](https://doi.org/10.3389/fcimb.2016.00060) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Chairat_2016_reference](drugs/drug_oseltamivir/Oseltamivir_Chairat2016_reference.md) | — | parent + metabolite (no model) | 7 | Chairat K et al., Population pharmacokinetics of oseltami…, British journal of clinical… (2016) | [10.1111/bcp.12892](https://doi.org/10.1111/bcp.12892) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Pai_2011_reference](drugs/drug_oseltamivir/Oseltamivir_Pai2011_reference.md) | — | general linear (no model) | 5 | Pai MP et al., Oseltamivir and oseltamivir carboxylate…, Antimicrobial agents and ch… (2011) | [10.1128/AAC.00422-11](https://doi.org/10.1128/AAC.00422-11) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Boianelli_2016_R_t](drugs/drug_oseltamivir/pd_Boianelli_2016_R_t.md) | viral release / replication rate of IAV resistant strain (H275Y, VR) ← Oseltamivir Carboxylate (OC) · direct Emax (saturable) effect | — | Boianelli A et al., Oseltamivir PK/PD Modeling and Simulati…, Frontiers in cellular and i… (2016) | [10.3389/fcimb.2016.00060](https://doi.org/10.3389/fcimb.2016.00060) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Boianelli_2016_S_t](drugs/drug_oseltamivir/pd_Boianelli_2016_S_t.md) | viral release / replication rate of IAV (sensitive strain V) ← Oseltamivir Carboxylate (OC) · direct Emax (saturable) effect | — | Boianelli A et al., Oseltamivir PK/PD Modeling and Simulati…, Frontiers in cellular and i… (2016) | [10.3389/fcimb.2016.00060](https://doi.org/10.3389/fcimb.2016.00060) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Checkmahomed_2020_EC50](drugs/drug_oseltamivir/pd_Checkmahomed_2020_EC50.md) | virus cytopathic effect (cell viability) ← oseltamivir carboxylate · inhibition effect | — | Checkmahomed L et al., In Vitro Combinations of Baloxavir Acid…, Viruses (2020) | [10.3390/v12101139](https://doi.org/10.3390/v12101139) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 0.80).">mouse</span> | [Montaseri_2018_viral_load](drugs/drug_oseltamivir/pd_Montaseri_2018_viral_load.md) | viral load ← oseltamivir · inhibition effect | — | Montaseri G et al., PK/PD-based adaptive tailoring of oselt…, Progress in biophysics and… (2018) | [10.1016/j.pbiomolbio.2018.07.007](https://doi.org/10.1016/j.pbiomolbio.2018.07.007) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=oseltamivir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | `SLC15A1` substrate | DrugBank actor |
| metabolism | liver | `CES1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCC4` substrate, `SLC22A8` substrate | DrugBank actor |
| excretion | liver | `ABCC4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: NEU1 (inhibitor), NEU2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:13 | 9:46 | 3/3/0 | 3/0/0 | 0/0/0 | 442,783/31,757 | ollama / glm-5.3-flash | 8 | 0/8 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 115 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 6  ·  extracted 1  ·  needs_review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kamal_2013.pdf` | Kamal MA et al., Population pharmacokinetics of oseltami…, Antimicrobial agents and ch… (2013) | popPK | 10 | [10.1128/AAC.02438-12](https://doi.org/10.1128/AAC.02438-12) | [23669384](https://pubmed.ncbi.nlm.nih.gov/23669384) | Population PK model of oseltamivir and its metabolite OC in humans, but numeric parameter values (CL, V, ka) are not present in the abstract evidence provided. |
| `Jordie_2022.pdf` | Jordie EB et al., Dosing regimen optimisation for oseltam…, British journal of clinical… (2022) | popPK | 9 | [10.1111/bcp.15059](https://doi.org/10.1111/bcp.15059) | [34449090](https://pubmed.ncbi.nlm.nih.gov/34449090) | Population PK model of oseltamivir and its metabolite in paediatric patients with CL estimates reported, but detailed parameter values likely in supplementary material not provided. |
| `Pai_2011.pdf` | Pai MP et al., Oseltamivir and oseltamivir carboxylate…, Antimicrobial agents and ch… (2011) | popPK | 9 | [10.1128/AAC.00422-11](https://doi.org/10.1128/AAC.00422-11) | [21930881](https://pubmed.ncbi.nlm.nih.gov/21930881) | Population PK of oseltamivir carboxylate in obese adults with AUC and clearance correlations reported, but full parameter values (CL, V) likely in tables/supplementary not fully shown here. |
| `Pillai_2015.pdf` | Pillai VC et al., Population pharmacokinetics of oseltami…, British journal of clinical… (2015) | popPK | 9 | [10.1111/bcp.12691](https://doi.org/10.1111/bcp.12691) | [26040405](https://pubmed.ncbi.nlm.nih.gov/26040405) | Population PK model of oseltamivir's active metabolite in women with CL/F and V/F reported, but only percentage changes appear in the abstract; full parameter values may be in tables/supplements not provided. |
| `Rayner_2008.pdf` | Rayner CR et al., Population pharmacokinetics of oseltami…, Journal of clinical pharmac… (2008) | popPK | 9 | [10.1177/0091270008320317](https://doi.org/10.1177/0091270008320317) | [18524996](https://pubmed.ncbi.nlm.nih.gov/18524996) | Population PK model of oseltamivir carboxylate in humans, but no numeric parameter values appear in the evidence (likely in tables/figures not provided). |
| `Montaseri_2018.pdf` | Montaseri G et al., PK/PD-based adaptive tailoring of oselt…, Progress in biophysics and… (2018) | popPK | 7 | [10.1016/j.pbiomolbio.2018.07.007](https://doi.org/10.1016/j.pbiomolbio.2018.07.007) | [30031022](https://pubmed.ncbi.nlm.nih.gov/30031022) | A PK/PD model of oseltamivir is built and applied, but the abstract contains no numeric parameter values, which likely reside in the full text or supplementary material not provided. |

<sub>queue written 2026-10-07T18:06:01.220739+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Checkmahomed_2020 | irrelevant | 0 | 0 | In vitro antiviral combination study (EC50/CI values) with no PK parameters for oseltamivir; oseltamivir is only a test drug in cell culture. |
| popPK | Geng_2022 | irrelevant | 0 | 0 | Oseltamivir is only a comparator in an antiviral efficacy study of M355; no PK parameters for oseltamivir are reported. |
| popPK | Hastings_2025 | irrelevant | 2 | 0 | A narrative review with no original numeric PK parameters for oseltamivir reported in the evidence. |
| popPK | Jordie_2022 | relevant | 9 | 4 | Population PK model of oseltamivir and its metabolite in paediatric patients with CL estimates reported, but detailed parameter values likely in supplementary material not provided. |
| popPK | Kamal_2013 | relevant | 10 | 4 | Population PK model of oseltamivir and its metabolite OC in humans, but numeric parameter values (CL, V, ka) are not present in the abstract evidence provided. |
| popPK | Leonard_2026 | irrelevant | 0 | 0 | This is an antiviral drug discovery paper about VNT-101; oseltamivir appears only as a comparator and no PK parameters for oseltamivir are reported. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | This is an antiviral efficacy/resistance study (EC50/IC50 in vitro, mouse efficacy model) with no PK disposition parameters (CL, V, ka, half-life, or PK model) for oseltamivir. |
| popPK | Malbari_2021 | irrelevant | 0 | 0 | In-vitro antiviral/drug-discovery study; oseltamivir is only a reference inhibitor, no PK parameters reported. |
| popPK | Montaseri_2018 | relevant | 7 | 2 | A PK/PD model of oseltamivir is built and applied, but the abstract contains no numeric parameter values, which likely reside in the full text or supplementary material not provided. |
| popPK | Rayner_2008 | relevant | 9 | 2 | Population PK model of oseltamivir carboxylate in humans, but no numeric parameter values appear in the evidence (likely in tables/figures not provided). |
| popPK | Reddy_2015 | relevant | 10 | 4 | Population PK model of oseltamivir carboxylate in ferrets, but numeric parameter estimates (CL, V, Ka, Kt) appear to live in tables/figures/S1 Table not fully provided in the evidence. |
| popPK | Sidwell_2002 | irrelevant | 0 | 0 | This is a review of peramivir; oseltamivir appears only as a comparator and no oseltamivir PK parameters are reported. |
| popPK | Walsh_2022 | irrelevant | 0 | 0 | This is an outcomes/effectiveness study with no PK parameters (no CL, V, ka, half-life, or model) for oseltamivir. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 18:06 UTC</sub>
