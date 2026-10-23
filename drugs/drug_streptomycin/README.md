<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;streptomycin&quot;}]"></div>

# streptomycin

- **generic name:** streptomycin
- **ATC codes:** `A07AA04`, `J01GA01`, `J04AM01`
- **DrugBank:** [DB01082](https://go.drugbank.com/drugs/DB01082) · **PubChem:** [CID 19649](https://pubchem.ncbi.nlm.nih.gov/compound/19649)
- **molar mass:** 581.5741 g/mol (C21H39N7O12) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Streptomycin is an aminoglycoside antibiotic used to treat infections such as tuberculosis, plague, tularemia, brucellosis, anthrax, and infective endocarditis. It remains an approved medicine and is on the WHO list of essential medicines, and it is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q192717](https://www.wikidata.org/wiki/Q192717) and the WHO ATC classification; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | — | L/h | 0.0026 Lkg(-1)min(-1) | rats | rat | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Du_2013_reference](drugs/drug_streptomycin/Streptomycin_Du2013_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27, Q88, Q32 — no SI value to buil…</sub> | [Du_2013_reference](drugs/drug_streptomycin/Streptomycin_Du2013_reference.md) | — | 1-compartment (no model) | 7 | Du B et al., Chemiluminescence determination of stre…, Spectrochimica acta. Part A… (2013) | [10.1016/j.saa.2013.07.007](https://doi.org/10.1016/j.saa.2013.07.007) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Regoes_2004_bacterial_net_growth_rate](drugs/drug_streptomycin/pd_Regoes_2004_bacterial_net_growth_rate.md) | bacterial net growth rate ← streptomycin · direct sigmoid Emax (Hill) effect | — | Regoes RR et al., Pharmacodynamic functions: a multiparam…, Antimicrobial agents and ch… (2004) | [10.1128/AAC.48.10.3670-3676.2004](https://doi.org/10.1128/AAC.48.10.3670-3676.2004) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Lee_2023_resp](drugs/drug_streptomycin/pd_Lee_2023_resp.md) | net growth rate of bacteria ← streptomycin · direct sigmoid Emax (Hill) effect | — | Lee EB et al., A Pharmacodynamic Study of Aminoglycosi…, Pharmaceuticals (Basel, Swi… (2023) | [10.3390/ph17010027](https://doi.org/10.3390/ph17010027) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=streptomycin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: PADI4 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 18:30 | 2:20 | 1/0/0 | 1/1/0 | 0/0/0 | 87,981/2,700 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 1/6 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 42 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Du_2013.pdf` | Du B et al., Chemiluminescence determination of stre…, Spectrochimica acta. Part A… (2013) | popPK | 10 | [10.1016/j.saa.2013.07.007](https://doi.org/10.1016/j.saa.2013.07.007) | [23892344](https://pubmed.ncbi.nlm.nih.gov/23892344) | The paper reports quantitative pharmacokinetic parameters (CL/F, half-lives, AUC) for streptomycin in rats, with all numeric values explicitly provided in the abstract. |
| `Jayachandran_1987.pdf` | Jayachandran C et al., Pharmacokinetics of streptomycin with p…, Veterinary research communi… (1987) | popPK | 10 | [10.1007/BF00346193](https://doi.org/10.1007/BF00346193) | [3672898](https://pubmed.ncbi.nlm.nih.gov/3672898) | The study reports quantitative pharmacokinetic parameters (t1/2, Vd) for streptomycin in she-buffaloes. |
| `Zhu_2001_2.pdf` | Zhu M et al., Population pharmacokinetics of intraven…, Pharmacotherapy (2001) | popPK | 10 | [10.1592/phco.21.13.1037.34625](https://doi.org/10.1592/phco.21.13.1037.34625) | [11560193](https://pubmed.ncbi.nlm.nih.gov/11560193) | The paper is a population PK study of streptomycin in humans, but the specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-10-04T18:29:51.307505+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bernard_1980 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of streptomycin's mechanism of action on frog semicircular canals, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Bernard_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of streptomycin's effect on hair cell membranes in frogs, reporting no pharmacokinetic parameters. |
| popPK | Harding_2022 | irrelevant | 0 | 0 | The paper is an in-vitro study on bactericidal efficacy against bacterial biofilms, not a pharmacokinetic study of streptomycin. |
| popPK | Lee_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acetaminophen, with streptomycin used only as an antibiotic to prepare the pseudo germ-free rat model. |
| popPK | Lee_2023 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic (PD) analysis of antibiotic efficacy against E. coli, reporting MIC and PD parameters, but contains no pharmacokinetic (PK) disposition parameters (CL, V, etc.) for streptomycin. |
| popPK | Li_2014 | irrelevant | 0 | 0 | The paper studies the antibacterial activity of Lansiumamide B in plants, using streptomycin only as a comparative agent for disease control, with no pharmacokinetic data. |
| PD | Li_2014 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, EC90) for Lansiumamide B, not streptomycin; streptomycin is only mentioned as a qualitative comparator. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The study is a medicinal chemistry paper evaluating novel antimicrobial compounds, with streptomycin used only as a positive control for antibacterial activity, not as a subject of pharmacokinetic analysis. |
| PD | Li_2024 | not_relevant | 0 | 0 | The paper reports antimicrobial activity (EC50/MIC) for novel pyrazole derivatives, with streptomycin mentioned only as a positive control without any exposure-response or PD modeling. |
| popPK | Lim_2022 | irrelevant | 0 | 0 | The paper is an in-vitro study on the antibacterial and antioxidant properties of essential oil, using streptomycin only as a comparator for biofilm inhibition, with no pharmacokinetic data. |
| PD | Lim_2022 | not_relevant | 0 | 0 | The paper focuses on the antibacterial and antibiofilm properties of Backhousia citriodora essential oil; streptomycin is used only as a comparative control in biofilm assays, and no pharmacodynamic (exposure-response) model or parameters are reported for it. |
| popPK | Louie_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of moxifloxacin, with streptomycin mentioned only as a comparator standard of care. |
| PD | Louie_2011 | not_relevant | 0 | 0 | The paper focuses on moxifloxacin pharmacodynamics; streptomycin is only mentioned as a standard of care without any PD analysis or parameters. |
| popPK | Matsuhashi_1996 | irrelevant | 0 | 0 | The study investigates bacterial resistance mechanisms and cellular signaling, not the pharmacokinetics of streptomycin. |
| popPK | Movassaghi_2025 | irrelevant | 0 | 0 | The study is an in-vitro proteomic analysis of the effects of streptomycin on HepG2 cells, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Omulo_2021 | irrelevant | 0 | 0 | The paper is an epidemiological study on antimicrobial resistance in E. coli, not a pharmacokinetic study of streptomycin. |
| popPK | Regoes_2004 | irrelevant | 0 | 0 | The study reports in vitro pharmacodynamic parameters (MIC, Hill coefficient) for streptomycin, not pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Soloviev_1977 | irrelevant | 2 | 0 | The study focuses on the concentration-response relationship for neuromuscular blocking effects in cats, not on reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for streptomycin. |
| popPK | Tang_2021 | irrelevant | 0 | 0 | The paper is a phytochemical study on Artemisia ordosica compounds, and streptomycin is only used as a positive control for antibacterial activity, not as the subject of pharmacokinetic analysis. |
| PD | Tang_2021 | not_relevant | 0 | 0 | The paper focuses on the isolation and activity of a natural compound (TDDE); streptomycin is only used as a positive control in antibacterial assays, and no pharmacodynamic or exposure-response relationship for streptomycin is reported. |
| popPK | Wollenberger_2000 | irrelevant | 0 | 0 | The study reports acute and chronic toxicity (EC50/NOEC) of streptomycin to Daphnia magna, not pharmacokinetic disposition parameters. |
| PD | Wollenberger_2000 | not_relevant | 3 | 5 | The paper reports standard ecotoxicological endpoints (EC50, NOEC) for streptomycin in Daphnia magna, which are dose-response metrics but do not constitute a pharmacodynamic (PK/PD) model or exposure-response analysis in the context of drug efficacy or mechanism. |
| popPK | Wrześniok_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of streptomycin's effect on melanogenesis and antioxidant status, not a pharmacokinetic study. |
| popPK | Zhu_2001_2 | relevant | 10 | 0 | The paper is a population PK study of streptomycin in humans, but the specific numeric parameter values are not present in the provided evidence text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-04 18:29 UTC</sub>
