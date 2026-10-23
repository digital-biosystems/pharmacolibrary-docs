<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;vinpocetine&quot;}]"></div>

# vinpocetine

- **generic name:** vinpocetine
- **ATC codes:** `N06BX18`
- **DrugBank:** [DB12131](https://go.drugbank.com/drugs/DB12131) · **PubChem:** [CID 443955](https://pubchem.ncbi.nlm.nih.gov/compound/443955)
- **molar mass:** 350.462 g/mol (C22H26N2O2) — DrugBank
- **groups:** investigational

## About

Vinpocetine is a nootropic vasodilator that has been used for vascular dementia. It is classified as investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420288](https://www.wikidata.org/wiki/Q420288) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vinpocetine | parent | 350.462 | C22H26N2O2 | DrugBank | [443955](https://pubchem.ncbi.nlm.nih.gov/compound/443955) | Petric_2023, Vereczkey_1979, Vereczkey_1987, Vlase_2005 |
| apovincaminic acid (AVA) (apovincaminic acid) | metabolite | 322.408 | C20H22N2O2 | PubChem | [160154](https://pubchem.ncbi.nlm.nih.gov/compound/160154) | Petric_2023, Vereczkey_1987, Vlase_2005 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| t½ | t1/2z | 8.9 | h | 8.9 h | dogs | dog | <span class="pk-badge pk-badge--orange">Needs review</span> | [Vereczkey_1987_reference](drugs/drug_vinpocetine/Vinpocetine_Vereczkey1987_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q290, Q69 — no SI value to build fr…</sub> | [Petric_2023_reference](drugs/drug_vinpocetine/Vinpocetine_Petric2023_reference.md) | — | 1-compartment (no model) | 9 | Petric Z et al., Clinical Pharmacology of Vinpocetine: P…, Pharmaceutics (2023) | [10.3390/pharmaceutics15102502](https://doi.org/10.3390/pharmaceutics15102502) |
| <span class="pk-rf" hidden data-species="dog" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Vereczkey_1987_reference](drugs/drug_vinpocetine/Vinpocetine_Vereczkey1987_reference.md) | — | parent + metabolite (no model) | 3 | Vereczkey L et al., Pharmacokinetics of apovincaminic acid…, Polish journal of pharmacol… (1987) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Vereczkey_1979_reference](drugs/drug_vinpocetine/Vinpocetine_Vereczkey1979_reference.md) | — | 1-compartment (no model) | 4 | Vereczkey L et al., Pharmacokinetics of vinpocetine in huma…, Arzneimittel-Forschung (1979) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Vlase_2005_reference](drugs/drug_vinpocetine/Vinpocetine_Vlase2005_reference.md) | — | 1-compartment (no model) | 2 | Vlase L et al., Pharmacokinetics and comparative bioava…, Arzneimittel-Forschung (2005) | [10.1055/s-0031-1296915](https://doi.org/10.1055/s-0031-1296915) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kaneko_1991_NMDA_response](drugs/drug_vinpocetine/pd_Kaneko_1991_NMDA_response.md) | NMDA (with glycine)-evoked current response of Xenopus oocytes injected with rodent brain poly(A)+ mRNA; [3H]MK-801 binding to brain membranes ← vinpocetine · inhibition effect | — | Kaneko S et al., Effects of several cerebroprotective dr…, European journal of pharmac… (1991) | [10.1016/0922-4106(91)90086-w](https://doi.org/10.1016/0922-4106(91)90086-w) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Manda_2015_CYP2D6](drugs/drug_vinpocetine/pd_Manda_2015_CYP2D6.md) | CYP2D6 inhibition (recombinant enzyme, AMMC substrate) ← vinpocetine · inhibition effect | — | Manda VK et al., Studies on Pharmacokinetic Drug Interac…, Medicines (Basel, Switzerla… (2015) | [10.3390/medicines2020093](https://doi.org/10.3390/medicines2020093) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Manda_2015_CYP2D6_HLM](drugs/drug_vinpocetine/pd_Manda_2015_CYP2D6_HLM.md) | CYP2D6 inhibition in HLM (dextromethorphan metabolism) ← vinpocetine · inhibition effect | — | Manda VK et al., Studies on Pharmacokinetic Drug Interac…, Medicines (Basel, Switzerla… (2015) | [10.3390/medicines2020093](https://doi.org/10.3390/medicines2020093) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Manda_2015_CYP3A4](drugs/drug_vinpocetine/pd_Manda_2015_CYP3A4.md) | CYP3A4 inhibition (recombinant enzyme, BFC substrate) ← vinpocetine · inhibition effect | — | Manda VK et al., Studies on Pharmacokinetic Drug Interac…, Medicines (Basel, Switzerla… (2015) | [10.3390/medicines2020093](https://doi.org/10.3390/medicines2020093) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Manda_2015_CYP3A4_HLM](drugs/drug_vinpocetine/pd_Manda_2015_CYP3A4_HLM.md) | CYP3A4 inhibition in HLM (testosterone 6β-hydroxylation) ← vinpocetine · inhibition effect | — | Manda VK et al., Studies on Pharmacokinetic Drug Interac…, Medicines (Basel, Switzerla… (2015) | [10.3390/medicines2020093](https://doi.org/10.3390/medicines2020093) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Manda_2015_P_gp](drugs/drug_vinpocetine/pd_Manda_2015_P_gp.md) | P-gp inhibition (calcein-AM uptake in hMDR1-MDCKII cells) ← vinpocetine · inhibition effect | — | Manda VK et al., Studies on Pharmacokinetic Drug Interac…, Medicines (Basel, Switzerla… (2015) | [10.3390/medicines2020093](https://doi.org/10.3390/medicines2020093) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wu_2001_I_K_Ca](drugs/drug_vinpocetine/pd_Wu_2001_I_K_Ca.md) | Ca2+-activated K+ current amplitude ← vinpocetine · direct Emax (saturable) effect | — | Wu SN et al., Vinpocetine-induced stimulation of calc…, Biochemical pharmacology (2001) | [10.1016/s0006-2952(01)00553-6](https://doi.org/10.1016/s0006-2952(01)00553-6) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:45 | 2:27 | 0/2/2 | 3/0/0 | 0/0/0 | 141,417/11,694 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 4  ·  extracted 0  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vereczkey_1979.pdf` | Vereczkey L et al., Pharmacokinetics of vinpocetine in huma…, Arzneimittel-Forschung (1979) | popPK | 10 | not captured | [582791](https://pubmed.ncbi.nlm.nih.gov/582791) | Human volunteer PK study reporting t1/2 alpha/beta, Vdss, clearance, and bioavailability values directly in the abstract. |
| `Yao_1994.pdf` | Yao JH et al., [Pharmacokinetics and disposition of vi…, Yao xue xue bao = Acta phar… (1994) | popPK | 10 | not captured | [8042515](https://pubmed.ncbi.nlm.nih.gov/8042515) | Rat PK study with numeric disposition parameters (t1/2, Vd, bioavailability) directly reported in the abstract. |
| `Vereczkey_1987.pdf` | Vereczkey L et al., Pharmacokinetics of apovincaminic acid…, Polish journal of pharmacol… (1987) | popPK | 9 | not captured | [3432163](https://pubmed.ncbi.nlm.nih.gov/3432163) | PK of vinpocetine's main metabolite AVA after vinpocetine dosing with numeric CL, V, half-lives reported in abstract; some values (V of vinpocetine) only relative. |
| `Ma_2020.pdf` | Ma Q et al., Effect of different doses of borneol on…, Xenobiotica; the fate of fo… (2020) | popPK | 7 | [10.1080/00498254.2019.1658139](https://doi.org/10.1080/00498254.2019.1658139) | [31424307](https://pubmed.ncbi.nlm.nih.gov/31424307) | Rat PK study of vinpocetine with NCA parameters, but only bioavailability/DTI values appear in the abstract; full CL, t½, etc. likely in tables/figures not provided. |
| `Vlase_2005.pdf` | Vlase L et al., Pharmacokinetics and comparative bioava…, Arzneimittel-Forschung (2005) | popPK | 7 | [10.1055/s-0031-1296915](https://doi.org/10.1055/s-0031-1296915) | [16366040](https://pubmed.ncbi.nlm.nih.gov/16366040) | Human bioequivalence study modeling vinpocetine's metabolite apovincaminic acid with first-order kinetics; Cmax, AUC, and Tmax values are present but core disposition parameters (ka, k, t½) are only described as "determined" without numbers. |

<sub>queue written 2026-10-07T00:43:26.839224+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barbier_1995 | irrelevant | 0 | 0 | In-vitro pharmacology study of PDE inhibitors in cat gastric fundus; vinpocetine is a tool compound with no PK parameters reported. |
| popPK | Gonçalves_2009 | irrelevant | 0 | 0 | In-vitro pharmacology study of dioclein with vinpocetine only as a comparator PDE1 inhibitor; no PK parameters for vinpocetine. |
| popPK | Izzo_1998 | irrelevant | 0 | 0 | In-vitro pharmacology study in guinea-pig ileum; vinpocetine is only a PDE inhibitor tool drug with no PK parameters. |
| popPK | Kaneko_1991 | irrelevant | 0 | 0 | In-vitro pharmacology study of NMDA channel effects; no PK disposition parameters for vinpocetine. |
| popPK | Manda_2015 | irrelevant | 1 | 1 | In-vitro study of vinpocetine's effects on CYPs, P-gp and PXR; no PK disposition parameters for vinpocetine itself (only cited bioavailability 6% and Cmax 60 ng/mL from another paper). |
| popPK | Marley_1992 | irrelevant | 0 | 0 | Vinpocetine is only used as an in-vitro PDE inhibitor tool; no pharmacokinetic parameters are reported. |
| popPK | Tomkinson_1996 | irrelevant | 0 | 0 | In-vitro pharmacology study of PDE inhibitors on ileum contraction; vinpocetine is a tool compound, no PK parameters. |
| popPK | Wu_2001 | irrelevant | 0 | 0 | In-vitro electrophysiology study of ion channels, no pharmacokinetic parameters for vinpocetine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 00:43 UTC</sub>
