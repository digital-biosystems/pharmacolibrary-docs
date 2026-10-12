<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;nalmefene&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nalmefene_Kyhl2016_reference&quot;,&quot;label&quot;:&quot;Kyhl_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalmefene/Nalmefene_Kyhl2016_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nalmefene_Rosen2000_reference&quot;,&quot;label&quot;:&quot;Rosen_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalmefene/Nalmefene_Rosen2000_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nalmefene

- **generic name:** nalmefene
- **ATC codes:** `N07BB05`
- **DrugBank:** [DB06230](https://go.drugbank.com/drugs/DB06230) · **PubChem:** not captured
- **molar mass:** 339.435 g/mol (C21H25NO3) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Nalmefene is an opioid antagonist used to treat alcohol dependence and has been studied for opiate dependence. It is authorised in the European Union as a medicine for alcohol-related disorders.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4353252](https://www.wikidata.org/wiki/Q4353252) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nalmefene | parent | 339.435 | C21H25NO3 | DrugBank | — | Kyhl_2016, Rosen_2000 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:38 | 1:57 | 2/0/0 | 3/0/0 | 0/0/0 | 97,997/6,975 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.273). The first reading is what the record holds.">cross-check: disputed</span> | [Kyhl_2016_reference](drugs/drug_nalmefene/Nalmefene_Kyhl2016_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Kyhl LE et al., Population pharmacokinetics of nalmefen…, British journal of clinical… (2016) | [10.1111/bcp.12805](https://doi.org/10.1111/bcp.12805) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span> | [Rosen_2000_reference](drugs/drug_nalmefene/Nalmefene_Rosen2000_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Rosen DA et al., Nalmefene to prevent epidural narcotic…, Pharmacotherapy (2000) | [10.1592/phco.20.9.745.35207](https://doi.org/10.1592/phco.20.9.745.35207) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Barnett_2020_BRET](drugs/drug_nalmefene/pd_Barnett_2020_BRET.md) | BRET signal (G protein activation at kappa opioid receptor) ← nalmefene · direct sigmoid Emax (Hill) effect | — | Barnett ME et al., Unique Pharmacological Properties of th…, Molecular pharmacology (2020) | [10.1124/mol.120.119404](https://doi.org/10.1124/mol.120.119404) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Endt_2025_cAMP](drugs/drug_nalmefene/pd_Endt_2025_cAMP.md) | Reversal of opioid-induced inhibition of FSK-stimulated cAMP accumulation (cAMP accumulation as % of FSK-induced level) ← nalmefene · direct sigmoid Emax (Hill) effect | — | Endt F et al., Carfentanil stabilizes µ opioid recepto…, Archives of toxicology (2025) | [10.1007/s00204-025-04048-6](https://doi.org/10.1007/s00204-025-04048-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Veng-Pedersen_1995_tcPCO2](drugs/drug_nalmefene/pd_Veng_Pedersen_1995_tcPCO2.md) | transcutaneous pCO2 (respiratory depression) ← nalmefene · delayed effect through an effect compartment | — | Veng-Pedersen P et al., Duration of opioid antagonism by nalmef…, Journal of pharmaceutical s… (1995) | [10.1002/jps.2600840913](https://doi.org/10.1002/jps.2600840913) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nalmefene).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `CYP3A5` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate, `UGT1A3` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: OPRD1 (target), OPRK1 (partial agonist), OPRM1 (target), UGT1A8 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kyhl_2016.pdf` | Kyhl LE et al., Population pharmacokinetics of nalmefen…, British journal of clinical… (2016) | popPK | 10 | [10.1111/bcp.12805](https://doi.org/10.1111/bcp.12805) | [26483076](https://pubmed.ncbi.nlm.nih.gov/26483076) | Population PK model of nalmefene in humans with CL 60.4 l/h and Vc 266 l reported in abstract; full parameter set likely in tables. |
| `Rosen_2000.pdf` | Rosen DA et al., Nalmefene to prevent epidural narcotic…, Pharmacotherapy (2000) | popPK | 10 | [10.1592/phco.20.9.745.35207](https://doi.org/10.1592/phco.20.9.745.35207) | [10907964](https://pubmed.ncbi.nlm.nih.gov/10907964) | Original PK study in children with full numeric two-compartment parameters (t½α, t½β, CL, Vss) reported directly in the abstract. |
| `Veng-Pedersen_1995.pdf` | Veng-Pedersen P et al., Duration of opioid antagonism by nalmef…, Journal of pharmaceutical s… (1995) | popPK | 6 | [10.1002/jps.2600840913](https://doi.org/10.1002/jps.2600840913) | [8537889](https://pubmed.ncbi.nlm.nih.gov/8537889) | PK/PD study of nalmefene in dogs with noncompartmental analysis, but no numeric parameter values are given in the evidence. |

<sub>queue written 2026-10-07T03:37:16.342983+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barnett_2020 | irrelevant | 0 | 0 | In-vitro BRET cell signaling pharmacology study; nalmefene is only a test ligand with no PK disposition parameters. |
| popPK | Endt_2025 | irrelevant | 0 | 0 | In-vitro pharmacodynamics study of carfentanil in HEK293 cells; nalmefene is only an antagonist comparator with IC50 values, no PK disposition parameters. |
| popPK | Grant_2006 | irrelevant | 0 | 0 | Clinical efficacy trial of nalmefene in pathological gambling with no pharmacokinetic parameters reported. |
| popPK | Hashimoto_2025 | irrelevant | 0 | 0 | Pharmacogenetic efficacy study of nalmefene with no PK parameters (CL, V, half-life, or PK model) reported. |
| popPK | Maillet_2015 | irrelevant | 0 | 0 | Nalmefene is only mentioned as a comparator ligand in a pharmacology study of noribogaine; no PK parameters for nalmefene are reported. |
| popPK | Veng-Pedersen_1995 | relevant | 6 | 3 | PK/PD study of nalmefene in dogs with noncompartmental analysis, but no numeric parameter values are given in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:37 UTC</sub>
