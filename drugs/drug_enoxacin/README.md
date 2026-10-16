<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;enoxacin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enoxacin_Naber1989_iox&quot;,&quot;label&quot;:&quot;Naber_1989_iox&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enoxacin/Enoxacin_Naber1989_iox.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enoxacin_Marchbanks1990_reference&quot;,&quot;label&quot;:&quot;Marchbanks_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enoxacin/Enoxacin_Marchbanks1990_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# enoxacin

- **generic name:** enoxacin
- **ATC codes:** `J01MA04`
- **DrugBank:** [DB00467](https://go.drugbank.com/drugs/DB00467) · **PubChem:** [CID 3229](https://pubchem.ncbi.nlm.nih.gov/compound/3229)
- **molar mass:** 320.3189 g/mol (C15H17FN4O3) — DrugBank
- **groups:** approved

## About

Enoxacin is a fluoroquinolone antibiotic used to treat bacterial infections, including urinary tract infections, gonorrhea, and infections caused by gram-negative bacteria such as E. coli and Pseudomonas. It has been approved as a systemic antibacterial medicine, though it is not authorised in the European Union and is now used only in some countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1639616](https://www.wikidata.org/wiki/Q1639616) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| enoxacin | parent | 320.319 | C15H17FN4O3 | DrugBank | [3229](https://pubchem.ncbi.nlm.nih.gov/compound/3229) | Marchbanks_1990, Naber_1989 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:52 | 4:26 | 1/0/2 | 1/0/0 | 0/0/0 | 259,756/19,940 | einfracz / qwen3.8-27b | 6 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.444), gpt-oss-120b (partly confirmed, agreement 0.615). Primary extraction retained.">cross-check: partial 0/2</span> | [Naber_1989_iox](drugs/drug_enoxacin/Enoxacin_Naber1989_iox.md) | ▶ model + simulator | 1-compartment, IV | 5 | Naber KG et al., [Enoxacin concentration in seminal flui…, Infection 17 Suppl (1989) | [10.1007/BF01643634](https://doi.org/10.1007/BF01643634) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429), gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: T1_t_half_terminal</sub><br><sub>route_to: `scholar`</sub> | [Marchbanks_1990_reference](drugs/drug_enoxacin/Enoxacin_Marchbanks1990_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Marchbanks CR et al., Pharmacokinetics and bioavailability of…, Antimicrobial agents and ch… (1990) | [10.1128/AAC.34.10.1966](https://doi.org/10.1128/AAC.34.10.1966) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.444), gpt-oss-120b (partly confirmed, agreement 0.615). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q354 — no SI value to build from</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Naber_1989_enoxacin](drugs/drug_enoxacin/Enoxacin_Naber1989_enoxacin.md) | — | 1-compartment (no model) | 5 | Naber KG et al., [Enoxacin concentration in seminal flui…, Infection 17 Suppl (1989) | [10.1007/BF01643634](https://doi.org/10.1007/BF01643634) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Scroggs_2020_Cellular_viability](drugs/drug_enoxacin/pd_Scroggs_2020_Cellular_viability.md) | Cellular viability ← enoxacin · direct sigmoid Emax (Hill) effect | — | Scroggs SLP et al., Fluoroquinolone Antibiotics Exhibit Low…, Viruses (2020) | [10.3390/v13010008](https://doi.org/10.3390/v13010008) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Scroggs_2020_log10PFU_mL](drugs/drug_enoxacin/pd_Scroggs_2020_log10PFU_mL.md) | SARS-CoV-2 viral titer ← enoxacin · direct sigmoid Emax (Hill) effect | — | Scroggs SLP et al., Fluoroquinolone Antibiotics Exhibit Low…, Viruses (2020) | [10.3390/v13010008](https://doi.org/10.3390/v13010008) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Scroggs_2020_log10PFU_mL_2](drugs/drug_enoxacin/pd_Scroggs_2020_log10PFU_mL_2.md) | MERS-CoV viral titer ← enoxacin · direct sigmoid Emax (Hill) effect | — | Scroggs SLP et al., Fluoroquinolone Antibiotics Exhibit Low…, Viruses (2020) | [10.3390/v13010008](https://doi.org/10.3390/v13010008) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=enoxacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: TOP2A (inhibitor), TOP2B (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blaser_1987 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study using a simulated PK model to assess bactericidal activity and resistance, not a study reporting quantitative disposition parameters (CL, V, etc.) for enoxacin. |
| popPK | DeLouise_2023 | irrelevant | 0 | 0 | The paper is a radioprotection study using enoxacin as a probe drug in mice, reporting efficacy data rather than pharmacokinetic parameters. |
| popPK | Delon_1999 | relevant | 4 | 2 | The study involves enoxacin in rats and discusses PK contribution to CNS levels, but the evidence only reports qualitative trends (ratios, decreases) without specific numeric PK parameters (CL, V, t1/2). |
| popPK | Koutsoviti-Papadopoulou_1995 | irrelevant | 0 | 0 | The study is a pharmacological investigation of muscle contraction in guinea pig ileum, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Koutsoviti-Papadopoulou_2001 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of GABA(A)-receptor antagonism in isolated guinea-pig ileum, not a pharmacokinetic study. |
| popPK | Kuang_1999 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of theophylline when co-administered with enoxacin; enoxacin is only a drug interaction probe, and no PK parameters for enoxacin itself are reported. |
| popPK | Marchand_2001 | irrelevant | 2 | 0 | The study is a PK/PD pharmacodynamic study in rats investigating proconvulsant thresholds and ratios rather than reporting standard quantitative disposition parameters (CL, V, t1/2) for enoxacin. |
| popPK | Piraino_2025 | irrelevant | 0 | 0 | The study uses enoxacin as a radioprotective agent to assess radiation damage in salivary glands, not to characterize its pharmacokinetic parameters. |
| popPK | Scroggs_2020 | irrelevant | 0 | 0 | The study is an in-vitro antiviral efficacy assay measuring EC50 values for SARS-CoV-2/MERS-CoV suppression, not a pharmacokinetic study reporting disposition parameters (CL, Vd, etc.) for enoxacin. |
| popPK | Shin_2023 | irrelevant | 0 | 0 | The paper focuses on the discovery of new SARS-CoV-2 inhibitors, and enoxacin is mentioned only as a reference compound with a single in vitro EC50 value, not for the determination of its pharmacokinetic parameters. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic binding assay and does not report any pharmacokinetic disposition parameters (clearance, volume, half-life, etc.) for enoxacin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 22:48 UTC</sub>
