<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;amenamevir&quot;}]"></div>

# amenamevir

- **generic name:** amenamevir
- **ATC codes:** `J05AX26`
- **DrugBank:** [DB11701](https://go.drugbank.com/drugs/DB11701) · **PubChem:** [CID 11397521](https://pubchem.ncbi.nlm.nih.gov/compound/11397521)
- **molar mass:** 482.56 g/mol (C24H26N4O5S) — DrugBank
- **groups:** investigational

## About

Amenamevir is a direct-acting antiviral used to treat shingles. It is approved in Japan and is currently classified as investigational in other contexts.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27271708](https://www.wikidata.org/wiki/Q27271708), [Wikipedia](https://en.wikipedia.org/wiki/Amenamevir?oldid=1366235673) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Takada_2016_Lesion_score](drugs/drug_amenamevir/pd_Takada_2016_Lesion_score.md) | Lesion score biomarker turnover ← amenamevir | — | Takada A et al., Integrative pharmacokinetic-pharmacodyn…, Drug metabolism and pharmac… (2016) | [10.1016/j.dmpk.2016.05.005](https://doi.org/10.1016/j.dmpk.2016.05.005) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Takada_2016_number_of_virus_plaques](drugs/drug_amenamevir/pd_Takada_2016_number_of_virus_plaques.md) | number of virus plaques biomarker turnover ← amenamevir | — | Takada A et al., Integrative pharmacokinetic-pharmacodyn…, Drug metabolism and pharmac… (2016) | [10.1016/j.dmpk.2016.05.005](https://doi.org/10.1016/j.dmpk.2016.05.005) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 18:30 | 0:02 | 0/0/0 | 2/0/0 | 0/0/0 | 3,882/163 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andreu_2025 | irrelevant | 0 | 0 | This is a drug-discovery paper for a new HSV-1 endonuclease inhibitor (LN-7); amenamevir is only mentioned as an approved comparator drug, and the PK parameters reported (CL, AUC, F) belong to LN-7 in rats, not to amenamevir. |
| popPK | Chono_2010 | irrelevant | 0 | 0 | The paper describes in vitro antiviral activity and efficacy in a mouse infection model, but does not report any pharmacokinetic parameters (CL, V, ka, etc.) for amenamevir. |
| PGx | Chono_2010 | not_relevant | 0 | 0 | The paper describes the antiviral mechanism and efficacy of amenamevir, not pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Effendi_2024 | irrelevant | 0 | 0 | The paper is a virology study on amenamevir resistance mechanisms (EC50 in cell culture) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for the drug. |
| PGx | Effendi_2024 | not_relevant | 0 | 0 | The paper reports a viral mutation (VZV ORF55) causing drug resistance, which is a pathogen resistance mechanism, not a human pharmacogenomic variant affecting the patient's PK or PD. |
| popPK | Katsumata_2013 | irrelevant | 4 | 1 | The paper reports PK-PD correlations (Cmax, AUC, T&gt;100) in mice but does not provide specific numeric values for the calculated PK parameters (CL, V, ka, t1/2) in the text. |
| PGx | Katsumata_2013 | not_relevant | 0 | 0 | The paper reports PK/PD characteristics in a murine model but does not investigate the impact of gene variants or genotypes on these parameters. |
| popPK | Shiraki_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study reporting antiviral efficacy (EC50) and cellular metabolite levels, not pharmacokinetic parameters. |
| PGx | Shiraki_2020 | not_relevant | 0 | 0 | The paper discusses the mechanism of action of amenamevir regarding viral replication stages (pharmacodynamics of the drug on the virus), but it does not report any human genetic variants or pharmacogenomic effects on the drug's PK or PD parameters. |
| popPK | Takada_2014 | relevant | 5 | 0 | The abstract describes a population PK model for amenamevir in humans and mentions covariates (Weight, Albumin) affecting clearance, but provides no specific numeric parameter values (CL, V, etc.) in the text. |
| PGx | Takada_2014 | not_relevant | 0 | 0 | The paper reports a standard population pharmacokinetic analysis identifying weight and albumin as covariates, but does not analyze gene variants or genotypes. |
| popPK | Takada_2016 | relevant | 10 | 0 | The paper describes an integrative PK/PD modeling study for amenamevir, which is highly relevant, but the evidence provided contains no quantitative PK parameter values. |
| PGx | Takada_2016 | not_relevant | 0 | 0 | The paper reports a general PK/PD model for amenamevir but does not investigate any gene variants, genotypes, or phenotypes. |
| popPK | Yajima_2017 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of anti-herpetic action and does not report quantitative pharmacokinetic disposition parameters for amenamevir. |
| PGx | Yajima_2017 | not_relevant | 0 | 0 | The paper describes the pharmacodynamic mechanism of action of amenamevir against viruses in vitro but does not report any pharmacogenomic effects (gene variant impacts) on its PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamenamevir%5D&body=Drug%3A%20amenamevir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amenamevir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
