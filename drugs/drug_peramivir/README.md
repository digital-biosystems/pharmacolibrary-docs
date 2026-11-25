<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;peramivir&quot;}]"></div>

# peramivir

- **generic name:** peramivir
- **ATC codes:** `J05AH03`
- **DrugBank:** [DB06614](https://go.drugbank.com/drugs/DB06614) · **PubChem:** [CID 154234](https://pubchem.ncbi.nlm.nih.gov/compound/154234)
- **molar mass:** 328.4072 g/mol (C15H28N4O4) — DrugBank
- **groups:** approved, investigational

## About

Peramivir is a neuraminidase inhibitor used to treat influenza. The drug is given intravenously. Peramivir is authorised in the European Union, though one product has been withdrawn.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q412734](https://www.wikidata.org/wiki/Q412734), [Wikipedia](https://en.wikipedia.org/wiki/Peramivir?oldid=1369623481) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Matsuo_2015_reference](drugs/drug_peramivir/Peramivir_Matsuo2015_reference.md) | — | 1-compartment (no model) | 0 | Matsuo Y et al., Population pharmacokinetics of peramivi…, Antimicrobial agents and ch… (2015) | [10.1128/AAC.00799-15](https://doi.org/10.1128/AAC.00799-15) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bang_2022_EC50_RT_PCR](drugs/drug_peramivir/pd_Bang_2022_EC50_RT_PCR.md) | SFTSV replication inhibition (viral genome, RT-PCR) ← peramivir · inhibition effect | — | Bang MS et al., Effective Drugs Against Severe Fever Wi…, Frontiers in medicine (2022) | [10.3389/fmed.2022.839215](https://doi.org/10.3389/fmed.2022.839215) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bang_2022_EC50_plaque](drugs/drug_peramivir/pd_Bang_2022_EC50_plaque.md) | SFTSV plaque inhibition (plaque assay) ← peramivir · inhibition effect | — | Bang MS et al., Effective Drugs Against Severe Fever Wi…, Frontiers in medicine (2022) | [10.3389/fmed.2022.839215](https://doi.org/10.3389/fmed.2022.839215) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:54 | 0:03 | 0/1/0 | 2/0/0 | 0/0/0 | 3,856/171 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bang_2022 | irrelevant | 0 | 0 | In vitro antiviral EC50 study against SFTSV; no PK disposition parameters (CL, V, half-life, PK model) for peramivir are reported. |
| popPK | Baum_2003 | irrelevant | 0 | 0 | The study is an in-vitro enzymatic analysis of resistance mutations and inhibition kinetics (Ki, IC50), not a pharmacokinetic study reporting disposition parameters. |
| PGx | Baum_2003 | not_relevant | 0 | 0 | The paper reports a viral mutation (His273Tyr) in influenza neuraminidase causing drug resistance, which is not a human pharmacogenomic effect on peramivir PK/PD. |
| PGx | Matsuo_2015 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics of peramivir with covariates such as renal function, age, and body weight, but does not investigate gene variants, genotypes, or pharmacogenomic markers. |
| popPK | Sidwell_2002 | irrelevant | 3 | 0 | The text describes efficacy and tolerability in animals and humans but does not report specific quantitative pharmacokinetic parameters (CL, V, ka, etc.) for peramivir. |
| PGx | Sidwell_2002 | not_relevant | 0 | 0 | The paper describes preclinical and clinical efficacy and PK of peramivir but contains no information regarding gene variants, genotypes, or phenotypes affecting PK/PD parameters. |
| popPK | Sugaya_2012 | relevant | 9 | 0 | The paper describes a population PK study of peramivir in children, but the specific numeric parameter values are not provided in the extracted evidence, likely residing in the full text or supplementary material. |
| PGx | Sugaya_2012 | not_relevant | 0 | 0 | The paper reports pediatric pharmacokinetics and clinical efficacy of peramivir but does not investigate gene variants or genotype-phenotype interactions. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro antiviral activity (IC50/EC50) of peramivir analogs, not on pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Wang_2016 | not_relevant | 0 | 0 | The paper focuses on chemical synthesis and antiviral efficacy of peramivir derivatives, without analyzing pharmacogenomic effects on PK/PD. |
| popPK | Wang_2018 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro/efficacy evaluation of peramivir conjugates against influenza, not on the pharmacokinetic disposition parameters of peramivir itself. |
| PGx | Wang_2018 | not_relevant | 0 | 0 | The paper describes chemical modifications to improve drug efficacy against a viral mutant, not the impact of host genetic variants on pharmacokinetics or pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bperamivir%5D&body=Drug%3A%20peramivir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_peramivir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 02:53 UTC</sub>
