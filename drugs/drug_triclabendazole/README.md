<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02B&quot;,&quot;href&quot;:&quot;atc/P02B.md&quot;},{&quot;label&quot;:&quot;triclabendazole&quot;}]"></div>

# triclabendazole

- **generic name:** triclabendazole
- **ATC codes:** `P02BX04`
- **DrugBank:** [DB12245](https://go.drugbank.com/drugs/DB12245) · **PubChem:** [CID 50248](https://pubchem.ncbi.nlm.nih.gov/compound/50248)
- **molar mass:** 359.65 g/mol (C14H9Cl3N2OS) — DrugBank
- **groups:** approved, investigational

## About

Triclabendazole is an anthelmintic (antitrematodal) medicine used to treat trematode (fluke) infections. It is included on the WHO list of essential medicines and is used worldwide, mainly where liver fluke infection occurs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419739](https://www.wikidata.org/wiki/Q419739) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| triclabendazole | parent | 359.65 | C14H9Cl3N2OS | DrugBank | [50248](https://pubchem.ncbi.nlm.nih.gov/compound/50248) | Alvarez-Bujidos_1993, Mestorino_2008 |
| triclabendazole sulphone (TCBZ-SO2) | metabolite | 391.647 | C14H9Cl3N2O3S | PubChem | [10340439](https://pubchem.ncbi.nlm.nih.gov/compound/10340439) | Alvarez-Bujidos_1993 |
| triclabendazole sulphoxide (triclabendazole sulphoxide (TCBZ-SO), triclabendazole sulfoxide) | metabolite | 375.648 | C14H9Cl3N2O2S | PubChem | [127657](https://pubchem.ncbi.nlm.nih.gov/compound/127657) | Alvarez-Bujidos_1993, Mestorino_2008 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="cattle" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q17 — no SI value to build from</sub> | [Mestorino_2008_calves](drugs/drug_triclabendazole/Triclabendazole_Mestorino2008_calves.md) | — | 1-compartment (no model) | 7 | Mestorino N et al., Pharmacokinetic disposition of triclabe…, Veterinary research communi… (2008) | [10.1007/s11259-007-9000-3](https://doi.org/10.1007/s11259-007-9000-3) |
| <span class="pk-rf" hidden data-species="cattle" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [↳ sheep](drugs/drug_triclabendazole/Triclabendazole_Mestorino2008_sheep.md) | — | 1-compartment (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="rabbit" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Alvarez-Bujidos_1993_reference](drugs/drug_triclabendazole/Triclabendazole_AlvarezBujidos1993_reference.md) | — | general linear (no model) | 2 | Alvarez-Bujidos ML et al., Pharmacokinetics of triclabendazole in…, Comparative biochemistry an… (1993) | [10.1016/0742-8413(93)90245-g](https://doi.org/10.1016/0742-8413(93)90245-g) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Dupuy_2010_Rho_123](drugs/drug_triclabendazole/pd_Dupuy_2010_Rho_123.md) | intracellular rhodamine 123 accumulation in Pgp-overexpressing LLC-PK1-mdr1a cells ← triclabendazole · direct Emax (saturable) effect | — | Dupuy J et al., Interaction of anthelmintic drugs with…, Chemico-biological interact… (2010) | [10.1016/j.cbi.2010.05.013](https://doi.org/10.1016/j.cbi.2010.05.013) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=triclabendazole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2A6` inhibitor, `CYP2B6` inhibitor, `CYP2C19` inhibitor/substrate, `CYP2C8` inhibitor, `CYP2C9` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate, `CYP1B1` substrate | DrugBank actor |
| metabolism | skin | `CYP1B1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` inhibitor/substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:36 | 1:27 | 2/1/0 | 0/1/0 | 0/0/0 | 66,048/5,093 | ollama / glm-5.3-flash | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alvarez-Bujidos_1993.pdf` | Alvarez-Bujidos ML et al., Pharmacokinetics of triclabendazole in…, Comparative biochemistry an… (1993) | popPK | 8 | [10.1016/0742-8413(93)90245-g](https://doi.org/10.1016/0742-8413(93)90245-g) | [7905812](https://pubmed.ncbi.nlm.nih.gov/7905812) | Reports PK of triclabendazole metabolites (sulphoxide/sulphone) in rabbits with half-lives, Cmax, AUC; some parameters (CL, V) may be in full text/tables not shown. |
| `Viviani_2019.pdf` | Viviani P et al., Pharmacologic interaction between oxfen…, Experimental parasitology (2019) | popPK | 7 | [10.1016/j.exppara.2019.107718](https://doi.org/10.1016/j.exppara.2019.107718) | [31201779](https://pubmed.ncbi.nlm.nih.gov/31201779) | PK study of triclabendazole in sheep with NCA parameters, but numeric values are not present in the provided evidence (likely in tables/figures not included). |

<sub>queue written 2026-10-07T09:34:48.713067+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chakroborty_2022 | irrelevant | 0 | 0 | In-vitro anthelmintic efficacy study of abietane analogues; triclabendazole only mentioned as comparator context, no PK parameters. |
| popPK | Dupuy_2010 | irrelevant | 0 | 0 | In-vitro P-glycoprotein interaction study with no PK disposition parameters for triclabendazole. |
| popPK | Hamali_2018 | irrelevant | 0 | 0 | This is an in-vitro study of a Fasciola hepatica taurine transporter; triclabendazole is only mentioned as the drug of choice, with no PK parameters for it. |
| popPK | Viviani_2019 | relevant | 7 | 3 | PK study of triclabendazole in sheep with NCA parameters, but numeric values are not present in the provided evidence (likely in tables/figures not included). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 09:34 UTC</sub>
