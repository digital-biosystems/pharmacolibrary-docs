<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;enoxacin&quot;}]"></div>

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

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 18.42 | L/h | 307 ml/min | patients undergoing transurethral resection of the prostate | 14 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Naber_1989_reference](drugs/drug_enoxacin/Enoxacin_Naber1989_reference.md) |
| CL | CL | — | L/h | 2.58 ml/min per kg | elderly patients with complicated urinary tract infections |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Marchbanks_1990_reference](drugs/drug_enoxacin/Enoxacin_Marchbanks1990_reference.md) |
| CL | CL/F | — | L/h | 3.01 ml/min per kg | elderly patients with complicated urinary tract infections |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Marchbanks_1990_reference](drugs/drug_enoxacin/Enoxacin_Marchbanks1990_reference.md) |
| t½ | t1/2z | 6.65 | h | 6.65 h | patients undergoing transurethral resection of the prostate | 14 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Naber_1989_reference](drugs/drug_enoxacin/Enoxacin_Naber1989_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q27 — no SI value to build from</sub> | [Marchbanks_1990_reference](drugs/drug_enoxacin/Enoxacin_Marchbanks1990_reference.md) | — | 1-compartment (no model) | 2 | Marchbanks CR et al., Pharmacokinetics and bioavailability of…, Antimicrobial agents and ch… (1990) | [10.1128/AAC.34.10.1966](https://doi.org/10.1128/AAC.34.10.1966) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Naber_1989_reference](drugs/drug_enoxacin/Enoxacin_Naber1989_reference.md) | — | 1-compartment (no model) | 5 | Naber KG et al., [Enoxacin concentration in seminal flui…, Infection 17 Suppl (1989) | [10.1007/BF01643634](https://doi.org/10.1007/BF01643634) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Blaser_1987_bacterial_concentration](drugs/drug_enoxacin/pd_Blaser_1987_bacterial_concentration.md) | bacterial concentration ← enoxacin · disease-progression model | — | Blaser J et al., Comparative study with enoxacin and net…, Antimicrobial agents and ch… (1987) | [10.1128/AAC.31.7.1054](https://doi.org/10.1128/AAC.31.7.1054) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Koutsoviti-Papadopoulou_2001_GABA_A_mediated_contractile_response](drugs/drug_enoxacin/pd_Koutsoviti_Papadopoulou_2001_GABA_A_mediated_contractile_res.md) | GABA(A)-mediated contractile response biomarker turnover ← enoxacin | — | Koutsoviti-Papadopoulou M et al., Biphenylacetic acid enhances the antago…, Pharmacological research (2001) | [10.1006/phrs.2001.0853](https://doi.org/10.1006/phrs.2001.0853) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Piraino_2025_glutathione](drugs/drug_enoxacin/pd_Piraino_2025_glutathione.md) | glutathione ← Enoxacin · direct Emax (saturable) effect | — | Piraino LR et al., Salivary gland tissue chip screening id…, Communications medicine (2025) | [10.1038/s43856-025-01136-7](https://doi.org/10.1038/s43856-025-01136-7) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Piraino_2025_senescence](drugs/drug_enoxacin/pd_Piraino_2025_senescence.md) | senescence ← Enoxacin · direct Emax (saturable) effect | — | Piraino LR et al., Salivary gland tissue chip screening id…, Communications medicine (2025) | [10.1038/s43856-025-01136-7](https://doi.org/10.1038/s43856-025-01136-7) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Scroggs_2020_MERS_CoV](drugs/drug_enoxacin/pd_Scroggs_2020_MERS_CoV.md) | MERS-CoV viral titer (Vero cells) ← enoxacin · direct Emax (saturable) effect | — | Scroggs SLP et al., Fluoroquinolone Antibiotics Exhibit Low…, Viruses (2020) | [10.3390/v13010008](https://doi.org/10.3390/v13010008) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Scroggs_2020_SARS_CoV_2](drugs/drug_enoxacin/pd_Scroggs_2020_SARS_CoV_2.md) | SARS-CoV-2 viral titer (Vero cells) ← enoxacin · direct Emax (saturable) effect | — | Scroggs SLP et al., Fluoroquinolone Antibiotics Exhibit Low…, Viruses (2020) | [10.3390/v13010008](https://doi.org/10.3390/v13010008) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Scroggs_2020_SARS_CoV_2_2](drugs/drug_enoxacin/pd_Scroggs_2020_SARS_CoV_2_2.md) | SARS-CoV-2 viral titer (A549/ACE2 cells) ← enoxacin · direct Emax (saturable) effect | — | Scroggs SLP et al., Fluoroquinolone Antibiotics Exhibit Low…, Viruses (2020) | [10.3390/v13010008](https://doi.org/10.3390/v13010008) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Scroggs_2020_Viability](drugs/drug_enoxacin/pd_Scroggs_2020_Viability.md) | Cellular viability (Vero cells) ← enoxacin · direct Emax (saturable) effect | — | Scroggs SLP et al., Fluoroquinolone Antibiotics Exhibit Low…, Viruses (2020) | [10.3390/v13010008](https://doi.org/10.3390/v13010008) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Scroggs_2020_Viability_2](drugs/drug_enoxacin/pd_Scroggs_2020_Viability_2.md) | Cellular viability (A549/ACE2 cells) ← enoxacin · direct Emax (saturable) effect | — | Scroggs SLP et al., Fluoroquinolone Antibiotics Exhibit Low…, Viruses (2020) | [10.3390/v13010008](https://doi.org/10.3390/v13010008) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:53 | 4:13 | 0/0/2 | 4/0/0 | 0/0/0 | 270,045/18,735 | einfracz / qwen3.8-27b | 6 | 2/4 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blaser_1987 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic model that simulates pharmacokinetics rather than measuring or reporting actual pharmacokinetic parameters (CL, V, etc.) for enoxacin. |
| popPK | DeLouise_2023 | irrelevant | 0 | 0 | The paper uses enoxacin as a candidate radioprotective drug in a biological screening study and does not report any pharmacokinetic parameters (CL, V, t1/2, ka) for enoxacin. |
| popPK | Delon_1999 | irrelevant | 2 | 0 | The study focuses on convulsant activity and CSF/plasma ratios rather than reporting standard quantitative disposition parameters (CL, V, t1/2) for enoxacin. |
| popPK | Koutsoviti-Papadopoulou_1995 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of enoxacin on GABA-induced contractions in guinea pig ileum, not its pharmacokinetic parameters. |
| popPK | Koutsoviti-Papadopoulou_2001 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study examining GABA(A) receptor antagonism in guinea-pig ileum, not a pharmacokinetic study. |
| popPK | Kuang_1999 | irrelevant | 1 | 0 | The study investigates the effect of enoxacin on the pharmacokinetics of theophylline, using enoxacin as a co-administered drug rather than the subject of PK parameter measurement. |
| popPK | Marchand_2001 | irrelevant | 2 | 0 | The study focuses on the pharmacodynamic interaction between fluoroquinolones and biphenyl acetic acid in rats, reporting proconvulsant sensitivity ratios and concentrations rather than standard pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Piraino_2025 | irrelevant | 0 | 0 | The paper focuses on radioprotection screening using enoxacin as a candidate drug, not on its pharmacokinetic parameters. |
| popPK | Scroggs_2020 | irrelevant | 0 | 0 | The study is an in vitro antiviral efficacy assessment of enoxacin against SARS-CoV-2 and MERS-CoV, reporting EC50 values for viral suppression rather than pharmacokinetic disposition parameters. |
| popPK | Shin_2023 | irrelevant | 0 | 0 | The paper focuses on the discovery of new SARS-CoV-2 inhibitors, and enoxacin is only mentioned as a reference compound with an in-vitro EC50 value, not as the subject of a pharmacokinetic study. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of GABA-A receptor binding and does not report any pharmacokinetic parameters for enoxacin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 11:50 UTC</sub>
