<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;mercaptopurine&quot;}]"></div>

# mercaptopurine

- **generic name:** mercaptopurine
- **ATC codes:** `L01BB02`
- **DrugBank:** [DB01033](https://go.drugbank.com/drugs/DB01033) · **PubChem:** [CID 667490](https://pubchem.ncbi.nlm.nih.gov/compound/667490)
- **molar mass:** 152.177 g/mol (C5H4N4S) — DrugBank
- **groups:** approved, investigational

## About

Mercaptopurine is an antimetabolite anticancer drug used to treat lymphoid leukemias and related cancers such as lymphosarcoma. It is an approved medicine, listed among WHO essential medicines, and is authorised in the European Union for lymphoid leukemia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418529](https://www.wikidata.org/wiki/Q418529) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mercaptopurine (6-mercaptopurine) | parent | 152.177 | C5H4N4S | DrugBank | [667490](https://pubchem.ncbi.nlm.nih.gov/compound/667490) | Ding_1979, Gebhard_2023, Hawwa_2008, Jost_2020 |
| 6-methylmercaptopurine nucleotides | metabolite | — (mass units only) | — | — | — | — |
| 6-TGN | metabolite | — (mass units only) | — | — | — | — |
| 6-thioguanine nucleotides | metabolite | — (mass units only) | — | — | — | — |
| 8-hydroxymercaptopurine | metabolite | 168.174 | C5H4N4OS | PubChem | [3763117](https://pubchem.ncbi.nlm.nih.gov/compound/3763117) | Ding_1979 |
| azathioprine | metabolite | 277.262 | C9H7N7O2S | PubChem | [2265](https://pubchem.ncbi.nlm.nih.gov/compound/2265) | Ding_1979 |
| E-MTX | metabolite | — (mass units only) | — | — | — | — |
| thioguanine nucleotides | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:28 | 6:29 | 0/5/1 | 1/0/0 | 0/0/0 | 376,825/23,364 | einfracz / qwen3.8-27b | 19 | 2/5 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.059), gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Jost_2020_reference](drugs/drug_mercaptopurine/Mercaptopurine_Jost2020_reference.md) | — | parent + metabolite (no model) | 7 | Jost F et al., Model-Based Simulation of Maintenance T…, Frontiers in physiology (2020) | [10.3389/fphys.2020.00217](https://doi.org/10.3389/fphys.2020.00217) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Ding_1979_reference](drugs/drug_mercaptopurine/Mercaptopurine_Ding1979_reference.md) | — | general linear (no model) | 3 | Ding TL et al., Comparative bioavailability and pharmac…, Drug metabolism and disposi… (1979) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Gebhard_2023_pk_mm_pop_6mp](drugs/drug_mercaptopurine/Mercaptopurine_Gebhard2023_pk_mm_pop_6mp.md) | — | general linear (no model) | 3 | Gebhard A et al., Pharmacokinetic-pharmacodynamic modelin…, Scientific reports (2023) | [10.1038/s41598-023-38414-0](https://doi.org/10.1038/s41598-023-38414-0) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Gebhard_2023_pkfix_bio_lin_perimtx](drugs/drug_mercaptopurine/Mercaptopurine_Gebhard2023_pkfix_bio_lin_perimtx.md) | — | general linear (no model) | 1 | Gebhard A et al., Pharmacokinetic-pharmacodynamic modelin…, Scientific reports (2023) | [10.1038/s41598-023-38414-0](https://doi.org/10.1038/s41598-023-38414-0) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8), gpt-oss:120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Hawwa_2008_reference](drugs/drug_mercaptopurine/Mercaptopurine_Hawwa2008_reference.md) | — | general linear (no model) | 2 (+1 cov.) | Hawwa AF et al., Population pharmacokinetic and pharmaco…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2008.03281.x](https://doi.org/10.1111/j.1365-2125.2008.03281.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.875), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Rosario_2017_2_reference](drugs/drug_mercaptopurine/Mercaptopurine_Rosario2017v2_reference.md) | — | 2-compartment (no model) | 3 | Rosario M et al., A Review of the Clinical Pharmacokineti…, Clinical pharmacokinetics (2017) | [10.1007/s40262-017-0546-0](https://doi.org/10.1007/s40262-017-0546-0) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Gebhard_2023_ANC](drugs/drug_mercaptopurine/pd_Gebhard_2023_ANC.md) | Absolute neutrophil count ← 6-mercaptopurine (E-TGN) · direct linear effect | — | Gebhard A et al., Pharmacokinetic-pharmacodynamic modelin…, Scientific reports (2023) | [10.1038/s41598-023-38414-0](https://doi.org/10.1038/s41598-023-38414-0) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mercaptopurine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC28A2` substrate | DrugBank actor |
| absorption | small intestine | `SLC28A2` substrate | DrugBank actor |
| distribution | blood | `SLC29A1` substrate | DrugBank actor |
| distribution | liver | `SLC29A1` substrate | DrugBank actor |
| metabolism | blood | `TPMT` substrate | DrugBank actor |
| metabolism | liver | `AOX1` substrate, `TPMT` substrate, `XDH` substrate | DrugBank actor |
| metabolism | small intestine | `XDH` substrate | DrugBank actor |
| excretion | kidney | `ABCC4` substrate, `SLC22A8` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCC4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC5 (substrate), HPRT1 (inhibitor), IMPDH1 (inhibitor), PPAT (inhibitor), SLC28A3 (substrate), SLC29A2 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 0  ·  needs_review 1  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arun_2024.pdf` | Arun B et al., Bioequivalence study followed by model-…, Pediatric blood & cancer (2024) | popPK | 10 | [10.1002/pbc.30813](https://doi.org/10.1002/pbc.30813) | [38110844](https://pubmed.ncbi.nlm.nih.gov/38110844) | The paper describes a population pharmacokinetic (PopPK) model and bioequivalence study for mercaptopurine, but specific numeric parameter values (CL, V, etc.) are not listed in the provided text evidence. |
| `Ding_1979.pdf` | Ding TL et al., Comparative bioavailability and pharmac…, Drug metabolism and disposi… (1979) | popPK | 10 | not captured | [43222](https://pubmed.ncbi.nlm.nih.gov/43222) | The study reports explicit quantitative PK parameters (half-life, CL, Vdss) for 6-mercaptopurine in rhesus monkeys. |
| `Covell_1985.pdf` | Covell DG et al., Kinetic model for disposition of 6-merc…, The American journal of phy… (1985) | popPK | 9 | [10.1152/ajpregu.1985.248.2.R147](https://doi.org/10.1152/ajpregu.1985.248.2.R147) | [4038588](https://pubmed.ncbi.nlm.nih.gov/4038588) | The study presents a compartmental kinetic model for 6-mercaptopurine in monkeys, but no numeric parameter values are provided in the extracted evidence. |
| `Hermann_1985.pdf` | Hermann T et al., Pharmacokinetics of elimination of 6-me…, Polish journal of pharmacol… (1985) | popPK | 8 | not captured | [3863097](https://pubmed.ncbi.nlm.nih.gov/3863097) | The abstract describes a pharmacokinetic study for mercaptopurine, but no numeric parameter values (e.g., clearance, half-life) are present in the provided evidence. |
| `Klés_2003.pdf` | Klés V et al., Application of pharmacokinetic/pharmaco…, Journal of applied toxicolo… (2003) | popPK | 7 | [10.1002/jat.888](https://doi.org/10.1002/jat.888) | [12518338](https://pubmed.ncbi.nlm.nih.gov/12518338) | The study reports pharmacokinetic modeling of 6-mercaptopurine in mice, but specific quantitative parameter values (e.g., CL, V) are not listed in the provided text. |

<sub>queue written 2026-10-14T21:22:46.564330+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arun_2024 | relevant | 10 | 2 | The paper describes a population pharmacokinetic (PopPK) model and bioequivalence study for mercaptopurine, but specific numeric parameter values (CL, V, etc.) are not listed in the provided text evidence. |
| popPK | Canal_1998 | irrelevant | 0 | 0 | The paper is a general review of dose individualization strategies in cancer chemotherapy that mentions mercaptopurine only in the context of pharmacogenetics without reporting any quantitative pharmacokinetic parameters or numeric values. |
| popPK | Covell_1985 | relevant | 9 | 0 | The study presents a compartmental kinetic model for 6-mercaptopurine in monkeys, but no numeric parameter values are provided in the extracted evidence. |
| popPK | Hermann_1985 | irrelevant | 8 | 0 | The abstract describes a pharmacokinetic study for mercaptopurine, but no numeric parameter values (e.g., clearance, half-life) are present in the provided evidence. |
| popPK | Iseki_1996 | irrelevant | 0 | 0 | The study investigates in vitro transport mechanisms of 6-mercaptopurine riboside across rat intestinal membranes, not the in vivo pharmacokinetic parameters (CL, V, etc.) of mercaptopurine. |
| PD | Iseki_1996 | not_relevant | 0 | 0 | The paper investigates intestinal transport mechanisms (Km, Hill equation) of 6-mercaptopurine riboside in membrane vesicles, not systemic pharmacodynamics or exposure-response relationships. |
| popPK | Klés_2003 | relevant | 7 | 2 | The study reports pharmacokinetic modeling of 6-mercaptopurine in mice, but specific quantitative parameter values (e.g., CL, V) are not listed in the provided text. |
| popPK | Kobayashi_1993 | irrelevant | 1 | 0 | This is a review article discussing pharmacodynamic and pharmacokinetic modeling approaches generally, with no quantitative mercaptopurine parameter values provided in the text. |
| popPK | Lin_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on 6-chlorocoumarin conjugates as anti-HCV agents, using 6-mercaptopurine only as a starting material or comparator, with no pharmacokinetic data. |
| PD | Lin_2025 | not_relevant | 0 | 0 | The paper reports in vitro antiviral activity (EC50) for novel 6-chlorocoumarin conjugates, not pharmacodynamic or exposure-response data for mercaptopurine. |
| popPK | Meyer_1979 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/cytotoxicity assessment of prodrugs where mercaptopurine is only used as a comparator for time-course of cell kill, with no PK parameters reported. |
| popPK | Rosario_2017_2 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for vedolizumab, a monoclonal antibody, while mercaptopurine is mentioned only as a concomitant therapy. |
| popPK | Ruel_2022 | irrelevant | 1 | 1 | This is an in-vitro study focusing on cellular transport mechanisms and cytotoxicity (Vmax, EC50), not systemic pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Tanaka_1989 | irrelevant | 0 | 0 | The study investigates photoreceptor channel activation by nucleotide derivatives, including a mercaptopurine analog, but reports no pharmacokinetic parameters for the drug mercaptopurine. |
| PD | Tanaka_1989 | not_relevant | 0 | 0 | The paper studies the electrophysiological effects of nucleotide derivatives on photoreceptor channels, not the pharmacodynamics of the drug mercaptopurine. |
| popPK | Tsukamoto_2017 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on ABC transporter polymorphisms and drug resistance (EC50) in cancer cells, not a pharmacokinetic study of mercaptopurine disposition parameters. |
| popPK | Tsukamoto_2019 | irrelevant | 0 | 0 | The paper investigates drug resistance mechanisms via MTT assays (EC50 values) in cell lines, not pharmacokinetic disposition parameters (CL, V, etc.) for mercaptopurine. |
| PD | Tsukamoto_2019 | not_relevant | 3 | 2 | The paper reports EC50 values for 6-mercaptopurine in an in vitro cell line study (genetic resistance profile), which is not a pharmacokinetic/pharmacodynamic (exposure-response) relationship in a biological system. |
| popPK | Vitale_2009 | irrelevant | 0 | 0 | The study is an in-vitro antiviral/antiproliferative screen where mercaptopurine is used only as a reference compound, not for PK parameter estimation. |
| PD | Vitale_2009 | not_relevant | 0 | 0 | The paper reports in vitro antiviral and cytotoxicity data for new benzimidazole compounds, using mercaptopurine only as a reference drug without providing specific numeric PD parameters or exposure-response analysis for mercaptopurine itself. |
| popPK | Wierzba_1983 | irrelevant | 3 | 0 | The study describes pharmacokinetic behavior in rabbits and mentions a three-compartment model, but no specific quantitative parameter values (CL, V, t1/2, etc.) are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 21:23 UTC</sub>
