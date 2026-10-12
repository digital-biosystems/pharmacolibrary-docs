<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;bismuth subcitrate&quot;}]"></div>

# bismuth subcitrate

- **generic name:** bismuth subcitrate
- **ATC codes:** `A02BX05`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Bismuth subcitrate is a drug used for peptic ulcer and other acid-related stomach disorders, and also has anti-infective activity against bacteria such as Escherichia coli and Bacteroides. It remains in use as an anti-ulcer and antacid medicine, classified among drugs for acid-related disorders.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q48838266](https://www.wikidata.org/wiki/Q48838266) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bismuth | metabolite | 208.98 | Bi | PubChem | [5359367](https://pubchem.ncbi.nlm.nih.gov/compound/5359367) | Benet_1991 |
| bismuth_subcitrate | metabolite | 704.472 | C12H10BiK3O14 | PubChem | [10101269](https://pubchem.ncbi.nlm.nih.gov/compound/10101269) | Benet_1991 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 10:09 | 3:24 | 0/2/0 | 0/0/0 | 0/0/0 | 49,454/8,926 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 2/3 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6), gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Benet_1991_reference](drugs/drug_bismuth_subcitrate/BismuthSubcitrate_Benet1991_reference.md) | — | 1-compartment (no model) | 0 | Benet LZ, Safety and pharmacokinetics: colloidal…, Scandinavian journal of gas… (1991) | [10.3109/00365529109093217](https://doi.org/10.3109/00365529109093217) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Dresow_1991_reference](drugs/drug_bismuth_subcitrate/BismuthSubcitrate_Dresow1991_reference.md) | — | 1-compartment (no model) | 0 | Dresow B et al., Bioavailability of bismuth from 205Bi-l…, Archives of toxicology (1991) | [10.1007/BF02098030](https://doi.org/10.1007/BF02098030) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Benet_1991.pdf` | Benet LZ, Safety and pharmacokinetics: colloidal…, Scandinavian journal of gas… (1991) | popPK | 9 | [10.3109/00365529109093217](https://doi.org/10.3109/00365529109093217) | [1957122](https://pubmed.ncbi.nlm.nih.gov/1957122) | The text explicitly reports quantitative pharmacokinetic parameters for bismuth subcitrate, including blood clearance (50-95 ml/min), bioavailability (0.16-0.28%), and half-life (5-11 days). |
| `Leussink_2000.pdf` | Leussink BT et al., Bismuth biokinetics and kidney histopat…, Archives of toxicology (2000) | popPK | 9 | [10.1007/s002040000150](https://doi.org/10.1007/s002040000150) | [11043489](https://pubmed.ncbi.nlm.nih.gov/11043489) | The study reports quantitative biokinetic parameters (absorption half-life, elimination half-life, peak concentration) for bismuth subcitrate in rats, described by a one-compartment model. |
| `Dresow_1991.pdf` | Dresow B et al., Bioavailability of bismuth from 205Bi-l…, Archives of toxicology (1991) | popPK | 8 | [10.1007/BF02098030](https://doi.org/10.1007/BF02098030) | [1747063](https://pubmed.ncbi.nlm.nih.gov/1747063) | The study reports quantitative PK parameters (half-lives, absorption percentages) for bismuth subcitrate in rats using a three-compartment model. |
| `Beil_1993.pdf` | Beil W et al., Studies on the mechanism of action of c…, Pharmacology (1993) | pd | 4 | [10.1159/000139088](https://doi.org/10.1159/000139088) | [8395060](https://www.ncbi.nlm.nih.gov/pubmed/8395060) | metadata signals extractable PD data (IC50) |
| `Kuo_2009.pdf` | Kuo CH et al., Efficacy of levofloxacin-based rescue t…, The Journal of antimicrobia… (2009) | pgx | 5 | [10.1093/jac/dkp034](https://doi.org/10.1093/jac/dkp034) | [19246508](https://www.ncbi.nlm.nih.gov/pubmed/19246508) | metadata signals extractable PGX data (CYP2C19) |
| `Kuo_2013.pdf` | Kuo CH et al., Comparison of 10 day bismuth quadruple…, The Journal of antimicrobia… (2013) | pgx | 5 | [10.1093/jac/dks361](https://doi.org/10.1093/jac/dks361) | [22984204](https://www.ncbi.nlm.nih.gov/pubmed/22984204) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-04T10:06:24.810904+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bakulina_2019 | not_relevant | 0 | 0 | The paper reports the effect of genetic polymorphisms on the clinical outcome (H. pylori eradication rate), not on the pharmacokinetic or pharmacodynamic parameters of bismuth subcitrate. |
| PGx | Kuo_2009 | not_relevant | 0 | 0 | The paper reports clinical efficacy and predictors of treatment failure (including CYP2C19 genotype) but does not report pharmacokinetic or pharmacodynamic parameters for bismuth subcitrate. |
| PGx | Kuo_2013 | not_relevant | 0 | 0 | The paper reports that CYP2C19 polymorphism did not influence the eradication effect (clinical outcome), but does not report any pharmacokinetic or pharmacodynamic parameters of bismuth subcitrate. |
| PD | Lee_1982 | not_relevant | 1 | 0 | The paper describes a qualitative mechanism of action (diffusion barrier) and qualitative tissue accumulation but provides no numeric concentration-effect or dose-response parameters. |
| PD | Li_2026 | not_relevant | 1 | 0 | The text is a mechanistic review describing molecular targets and qualitative therapeutic potential, lacking any quantitative exposure-response data, dose-effect curves, or numeric PD parameters. |
| PD | Nishimura_1993 | not_relevant | 1 | 0 | The study reports qualitative/percentage outcomes of a fixed-dose clinical trial without measuring drug concentrations or fitting a dose-response model to derive numeric PD parameters. |
| PD | Phillips_2000 | not_relevant | 3 | 2 | The paper reports in vitro MICs and in vivo eradication rates but does not provide a concentration-effect curve or numeric PD parameters (e.g., EC50, Emax) linking exposure to effect. |
| PGx | Veliev_2019 | not_relevant | 0 | 0 | The paper reports clinical efficacy of H. pylori eradication regimens and mentions CYP2C19 genotype as a factor for treatment failure, but it does not report pharmacokinetic or pharmacodynamic parameters of bismuth subcitrate. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper reports pharmacokinetic changes in bismuth subcitrate induced by co-administration of N-acetyl cysteine (a chemical interaction), not by a gene variant or genotype. |
| PD | Woo_2024 | not_relevant | 2 | 2 | The study reports Minimum Inhibitory Concentrations (MICs) and qualitative synergy results, but does not provide a concentration-effect curve, Emax/EC50 parameters, or a PK/PD model. |
| PGx | Wu_2011 | not_relevant | 0 | 0 | The paper compares two rescue therapies for H. pylori and mentions CYP2C19 genotyping, but it does not report any pharmacokinetic or pharmacodynamic parameters of bismuth subcitrate or how genetic variants affect them. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 10:06 UTC</sub>
