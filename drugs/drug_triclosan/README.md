<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;triclosan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Triclosan_Siddiqui1979_reference&quot;,&quot;label&quot;:&quot;Siddiqui_1979_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_triclosan/Triclosan_Siddiqui1979_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# triclosan

- **generic name:** triclosan
- **ATC codes:** `D08AE04`, `D09AA06`
- **DrugBank:** [DB08604](https://go.drugbank.com/drugs/DB08604) · **PubChem:** [CID 5564](https://pubchem.ncbi.nlm.nih.gov/compound/5564)
- **molar mass:** 289.542 g/mol (C12H7Cl3O2) — DrugBank
- **groups:** approved

## About

Triclosan is an antimicrobial agent used as an antiseptic and disinfectant, for example in skin antisepsis and medicated dressings. It is an approved substance and remains in use, mainly in topical dermatological products such as antiseptics and anti-infective dressings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408646](https://www.wikidata.org/wiki/Q408646) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| triclosan | parent | 289.542 | C12H7Cl3O2 | DrugBank | [5564](https://pubchem.ncbi.nlm.nih.gov/compound/5564) | Siddiqui_1979 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:02 | 2:29 | 0/0/1 | 2/0/0 | 0/0/0 | 181,915/6,711 | einfracz / qwen3.8-27b | 6 | 3/3 | 5/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Siddiqui_1979_reference](drugs/drug_triclosan/Triclosan_Siddiqui1979_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Siddiqui WH et al., Pharmacokinetics of triclosan in rat af…, Journal of environmental pa… (1979) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Alvarado-López_2026_EC50](drugs/drug_triclosan/pd_Alvarado_L_pez_2026_EC50.md) | Malformations ← triclosan · inhibition effect | — | Alvarado-López AN et al., Triclosan toxicity during Danio rerio o…, Ecotoxicology (London, Engl… (2026) | [10.1007/s10646-026-03072-1](https://doi.org/10.1007/s10646-026-03072-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Alvarado-López_2026_LC50](drugs/drug_triclosan/pd_Alvarado_L_pez_2026_LC50.md) | Lethality ← triclosan · inhibition effect | — | Alvarado-López AN et al., Triclosan toxicity during Danio rerio o…, Ecotoxicology (London, Engl… (2026) | [10.1007/s10646-026-03072-1](https://doi.org/10.1007/s10646-026-03072-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kasi_2025_MTT](drugs/drug_triclosan/pd_Kasi_2025_MTT.md) | cell viability ← Triclosan · inhibition effect | — | Kasi SR et al., In vitro cytotoxicity (irritant potency…, PloS one (2025) | [10.1371/journal.pone.0318565](https://doi.org/10.1371/journal.pone.0318565) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=triclosan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | prostate gland | `AR` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: NOS3 (stimulator), NR1I2 (unknown), NR1I3 (inverse agonist), PPARG (unknown), TPO (weak inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 78 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Siddiqui_1979.pdf` | Siddiqui WH et al., Pharmacokinetics of triclosan in rat af…, Journal of environmental pa… (1979) | popPK | 10 | not captured | [422939](https://pubmed.ncbi.nlm.nih.gov/422939) | The abstract explicitly reports quantitative pharmacokinetic parameters (Vd, half-life, clearance) for triclosan in rats. |

<sub>queue written 2026-10-07T08:00:55.257160+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ajao_2015 | irrelevant | 0 | 0 | The paper describes in vitro mitochondrial toxicity mechanisms in cell lines, not a pharmacokinetic study of disposition parameters. |
| popPK | Akūlova_2026 | irrelevant | 0 | 0 | The study is an epidemiological biomonitoring analysis examining the spatial association between pesticide detection in urine and land use, not a pharmacokinetic study, and contains no PK parameters for triclosan. |
| popPK | Alvarado-López_2026 | irrelevant | 0 | 0 | The study is a toxicological assessment in zebrafish reporting LC50/EC50 values, not pharmacokinetic parameters. |
| popPK | Alves_2007 | irrelevant | 0 | 0 | This is a materials science study on the corrosion resistance of titanium alloy in mouthwashes, not a pharmacokinetic study of triclosan disposition. |
| popPK | Atengueño-Reyes_2023 | irrelevant | 0 | 0 | The study investigates microalgal tolerance and growth effects (EC50) in wastewater, not pharmacokinetic parameters for triclosan. |
| popPK | Bedoux_2012 | irrelevant | 0 | 0 | The paper is an environmental review of triclosan occurrence and degradation, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Bertucci_2026 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on sea urchin embryo development and does not report pharmacokinetic parameters. |
| popPK | Bommarito_2024 | irrelevant | 0 | 0 | The study investigates associations between prenatal triclosan exposure and fetal growth outcomes, not the pharmacokinetic parameters (CL, V, etc.) of the drug itself. |
| popPK | Chiaia-Hernandez_2013 | irrelevant | 1 | 0 | The study focuses on bioconcentration (BCF) and accumulation in Daphnia resting eggs rather than reporting pharmacokinetic disposition parameters (CL, V, Q, t1/2) for triclosan in a standard PK context. |
| popPK | Ding_2022 | irrelevant | 0 | 0 | The study investigates ecological toxicity and molecular mechanisms in algae (Euglena gracilis), not pharmacokinetic disposition parameters. |
| popPK | Hurtado_2016 | irrelevant | 0 | 0 | The study models the uptake and biodegradation of triclosan in lettuce plants, not the pharmacokinetics (disposition) in humans or animals. |
| popPK | Kasi_2025 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity assessment of toothpaste ingredients and does not report pharmacokinetic parameters such as clearance, volume, or half-life for triclosan. |
| popPK | Orvos_2002 | irrelevant | 0 | 0 | The study reports aquatic toxicity and bioconcentration factors in fish and algae, not pharmacokinetic disposition parameters (CL, V, Ka) for the drug. |
| popPK | Smarr_2018 | irrelevant | 0 | 0 | This is an epidemiological study measuring urinary biomarkers of triclosan exposure and its association with semen quality, not a pharmacokinetic study determining disposition parameters like clearance or volume. |
| popPK | Smarr_2018_2 | irrelevant | 0 | 0 | This is an epidemiological study of seminal plasma EDC concentrations, not a pharmacokinetic study with disposition parameters for triclosan. |
| popPK | Weiss_2015 | irrelevant | 0 | 0 | This is an exposure epidemiology study reporting urinary concentrations of triclosan, not a pharmacokinetic study with disposition parameters (CL, V, half-life). |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The study is a microbiological mechanism paper on triclosan resistance in cyanobacteria, reporting EC50 values rather than pharmacokinetic parameters (CL, V, t1/2) for a drug subject. |
| popPK | Yoon_2023 | irrelevant | 0 | 0 | The study investigates adsorption behavior and acute toxicity in D. magna, not pharmacokinetics. |
| popPK | Zhao_2019 | irrelevant | 0 | 0 | Triclosan is used only as an in vitro inhibitor of reductive metabolism, not as the subject drug for PK parameter estimation. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:00 UTC</sub>
