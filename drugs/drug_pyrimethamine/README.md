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
| dapsone and pyrimethamine (pyrimethamine) | metabolite | 248.714 | C12H13ClN4 | PubChem | [4993](https://pubchem.ncbi.nlm.nih.gov/compound/4993) | Falloon_1994, Odongo_2015, Salman_2011, de_2017 |
| N(4)-acetylsulfadoxine | metabolite | 352.365 | C14H16N4O5S | PubChem | [160773](https://pubchem.ncbi.nlm.nih.gov/compound/160773) | Salman_2011 |
| sulfadoxine | metabolite | 310.328 | C12H14N4O4S | PubChem | [17134](https://pubchem.ncbi.nlm.nih.gov/compound/17134) | Salman_2011 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub> | [Falloon_1994_reference](drugs/drug_pyrimethamine/Pyrimethamine_Falloon1994_reference.md) | — | 1-compartment (no model) | 2 | Falloon J et al., Pharmacokinetics and safety of weekly d…, Antimicrobial agents and ch… (1994) | [10.1128/AAC.38.7.1580](https://doi.org/10.1128/AAC.38.7.1580) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Odongo_2015_reference](drugs/drug_pyrimethamine/Pyrimethamine_Odongo2015_reference.md) | — | 2-compartment (no model) | 8 (+2 cov.) | Odongo CO et al., Trimester-Specific Population Pharmacok…, Drugs in R&D (2015) | [10.1007/s40268-015-0110-z](https://doi.org/10.1007/s40268-015-0110-z) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Salman_2011_reference](drugs/drug_pyrimethamine/Pyrimethamine_Salman2011_reference.md) | — | parent + metabolite (no model) | 4 | Salman S et al., Pharmacokinetic properties of conventio…, Antimicrobial agents and ch… (2011) | [10.1128/AAC.01075-10](https://doi.org/10.1128/AAC.01075-10) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub> | [de_2017_reference](drugs/drug_pyrimethamine/Pyrimethamine_de2017_reference.md) | — | 2-compartment (no model) | 9 | de Kock M et al., Pharmacokinetics of Sulfadoxine and Pyr…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12181](https://doi.org/10.1002/psp4.12181) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Adeyemi_2023_T_gondii_parasite_viability_RH_2F_tachyzoites_luciferase_reporter_assay](drugs/drug_pyrimethamine/pd_Adeyemi_2023_T_gondii_parasite_viability_RH_2F_tachyzoites_l.md) | T. gondii parasite viability (RH-2F tachyzoites, luciferase reporter assay) ← pyrimethamine · inhibition effect | — | Adeyemi OS et al., The In Vitro Anti-Parasitic Activities…, Pharmaceuticals (Basel, Swi… (2023) | [10.3390/ph16030447](https://doi.org/10.3390/ph16030447) |

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
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:15 | 8:16 | 1/3/0 | 1/0/0 | 0/0/0 | 426,937/24,372 | ollama / glm-5.3-flash | 11 | 2/9 | 11/0 | 0 |

## Coverage

- **PubMed hits:** 72 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Salman_2011.pdf` | Salman S et al., Pharmacokinetic properties of conventio…, Antimicrobial agents and ch… (2011) | popPK | 10 | [10.1128/AAC.01075-10](https://doi.org/10.1128/AAC.01075-10) | [21282434](https://pubmed.ncbi.nlm.nih.gov/21282434) | Population PK two-compartment model of pyrimethamine in infants; abstract gives half-life and AUC but full CL/V parameter values likely in tables/supplement not shown. |
| `Bell_2011.pdf` | Bell DJ et al., Population pharmacokinetics of sulfadox…, Clinical pharmacology and t… (2011) | popPK | 8 | [10.1038/clpt.2010.297](https://doi.org/10.1038/clpt.2010.297) | [21191379](https://pubmed.ncbi.nlm.nih.gov/21191379) | Population PK models for pyrimethamine in children are described, but the abstract gives no numeric CL/V/ka values, which likely reside in tables or supplementary material not provided. |

<sub>queue written 2026-10-07 08:08 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbaali_2021 | irrelevant | 0 | 0 | In vitro Toxoplasma drug-efficacy study; pyrimethamine is only a comparator, with no PK parameters reported. |
| popPK | Adeyemi_2023 | irrelevant | 0 | 0 | In vitro anti-Toxoplasma study of emodin; pyrimethamine is only a positive-control comparator with no PK parameters. |
| popPK | Bell_2011 | relevant | 8 | 3 | Population PK models for pyrimethamine in children are described, but the abstract gives no numeric CL/V/ka values, which likely reside in tables or supplementary material not provided. |
| popPK | Elati_2026 | irrelevant | 0 | 0 | In vitro drug screening of tubercidin analogues against T. gondii; pyrimethamine is only a comparator and no PK parameters are reported. |
| popPK | Jafari_2021 | irrelevant | 0 | 0 | Pyrimethamine is only a comparator in an anti-Toxoplasma efficacy study; no PK parameters (CL, V, half-life, model) are reported. |
| popPK | Karunajeewa_2010 | irrelevant | 2 | 2 | Pyrimethamine is only a co-administered drug; the PK model and parameters are for chloroquine/DECQ, with no pyrimethamine values reported. |
| popPK | Ma_2022 | irrelevant | 0 | 0 | This is an in vitro/in vivo efficacy study of tilmicosin and ATLL against T. gondii; pyrimethamine is only a positive-control comparator with no PK parameters reported. |
| popPK | Moore_2015 | irrelevant | 0 | 0 | The study models piperaquine breast-milk transfer; pyrimethamine is only part of a co-administered combination therapy, with no pyrimethamine PK parameters reported. |
| popPK | Ndlovu_2024 | irrelevant | 0 | 0 | Medicinal chemistry study of new anti-Toxoplasma compounds; pyrimethamine only appears as a comparator EC50, with no PK parameters. |
| popPK | Philipps_1998 | irrelevant | 0 | 0 | In vitro parasite susceptibility study (EC50 values), not a pharmacokinetic study of pyrimethamine disposition. |
| popPK | Qiu_2025 | irrelevant | 0 | 0 | Pyrimethamine is only a comparator (EC50 0.60 µM in Fig. S1, not provided); no PK parameters for pyrimethamine. |
| popPK | Ramharter_2019 | irrelevant | 0 | 0 | This is a population PK study of mefloquine (and its metabolite CMQ), not pyrimethamine; pyrimethamine appears only as part of the SP comparator regimen. |
| popPK | Salman_2010 | irrelevant | 2 | 1 | The paper models azithromycin's population PK; pyrimethamine is only co-administered as SP with no pyrimethamine parameter values reported. |
| popPK | Zuidema_1986 | irrelevant | 0 | 0 | This is a clinical PK review of dapsone; pyrimethamine is only mentioned as a co-administered agent in malaria prophylaxis, with no PK parameters for pyrimethamine. |
| popPK | da_2025 | irrelevant | 0 | 0 | Pyrimethamine is only mentioned as current standard-of-care; no PK parameters for it are reported. |
| popPK | van_2025 | irrelevant | 0 | 0 | This is a meta-analysis of IPTp-SP effectiveness and parasite resistance markers, with no PK parameters (CL, V, ka, half-life, or PK model) for pyrimethamine reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpyrimethamine%5D&body=Drug%3A%20pyrimethamine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pyrimethamine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 08:08 UTC</sub>
