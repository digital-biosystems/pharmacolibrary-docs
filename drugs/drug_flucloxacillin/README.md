<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;flucloxacillin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flucloxacillin_Drennan2021v2_reference&quot;,&quot;label&quot;:&quot;Drennan_2021_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flucloxacillin_Jager2020_reference&quot;,&quot;label&quot;:&quot;Jager_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_flucloxacillin/Flucloxacillin_Jager2020_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flucloxacillin_Wallenburg2021_reference&quot;,&quot;label&quot;:&quot;Wallenburg_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_flucloxacillin/Flucloxacillin_Wallenburg2021_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# flucloxacillin

- **generic name:** flucloxacillin
- **ATC codes:** `J01CF05`
- **DrugBank:** [DB00301](https://go.drugbank.com/drugs/DB00301)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Antibiotic analog of [cloxacillin].

**Indication.** Used to treat bacterial infection by susceptible microorganisms.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/2/0 | 0/0/0 | 0/0/0 | not captured | not captured | 16 | 4/0 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: F, Cl, Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Drennan_2021_2_reference](drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_reference.md) | Drennan PG et al., Population pharmacokinetics of free flu…, British journal of clinical… (2021) | [10.1111/bcp.14887](https://doi.org/10.1111/bcp.14887) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Jager_2020_reference](drugs/drug_flucloxacillin/Flucloxacillin_Jager2020_reference.md) | Jager NGL et al., Optimization of flucloxacillin dosing r…, The Journal of antimicrobia… (2020) | [10.1093/jac/dkaa187](https://doi.org/10.1093/jac/dkaa187) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Wallenburg_2021_reference](drugs/drug_flucloxacillin/Flucloxacillin_Wallenburg2021_reference.md) | Wallenburg E et al., High unbound flucloxacillin fraction in…, The Journal of antimicrobia… (2021) | [10.1093/jac/dkab314](https://doi.org/10.1093/jac/dkab314) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=flucloxacillin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

## Coverage

- **PubMed hits:** 29 matched, 12 returned
- **screened:** 3  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Anderson_1985.pdf` | Anderson P et al., Pharmacokinetics and distribution of fl…, European journal of clinica… (1985) | popPK | 10 | [10.1007/BF00547055](https://doi.org/10.1007/BF00547055) | [3987776](https://pubmed.ncbi.nlm.nih.gov/3987776) | The paper explicitly reports quantitative two-compartment pharmacokinetic parameters (clearance, volumes of distribution, half-lives, and microconstants) for flucloxacillin in human patients. |

<sub>queue written 2026-07-18T04:13:37.402082+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Korzilius_2023 | irrelevant | not captured | not captured | The study uses non-compartmental analysis to report bioavailability and exposure metrics, but lacks population or compartmental pharmacokinetic parameters for flucloxacillin. |
| popPK | Meenks_2023_2 | relevant | 9 | 4 | This is a flucloxacillin population PK study with numeric clearance and model details in text, but the key final parameter table is referenced as Table 2/Additional files not provided here. |
| popPK | Wallenburg_2022 | irrelevant | not captured | not captured | The study develops a mechanistic protein-binding model independent of pharmacokinetic disposition parameters and does not report clearance, volume, or half-life for flucloxacillin. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_flucloxacillin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
